// Cloudflare Pages Function: räumt Termin-Notizen mit Claude auf.
// Benötigt in Cloudflare (Pages → Einstellungen → Variablen): ANTHROPIC_API_KEY und FLUX_KEY (eigener Zugangsschlüssel).
// Optional: AI_MODEL (Standard: claude-sonnet-5-5).
const SYSTEM = `Du bist Assistent für Kundenvorgänge auf Deutsch. Du bekommst den Verlauf eines Falls (mehrere Kontakte wie Anrufe oder Meetings, alt nach neu, kurze und oft unordentliche Stichpunkte) und manchmal Bilder: handschriftliche Notizen oder Screenshots vom Kunden (Fehlermeldungen, Einstellungen, Chats). Lies Screenshots mit und nutze relevante Infos daraus (zum Beispiel Fehlertext), erfinde nichts.
Fasse den GESAMTEN Verlauf zu einem klaren Stand der Dinge zusammen, leicht verständlich für Kollegen im Team (Teams-Chat).
Regeln:
- Erfinde nichts. Nimm nur auf, was in den Notizen steht.
- Platzhalter wie ⟦K1⟧, ⟦MAIL1⟧, ⟦TEL1⟧ stehen für ausgeblendete Daten. Übernimm sie unverändert.
- Kurze, einfache Sätze. Keine Floskeln.
- "summary": 2 bis 5 Sätze Stand der Dinge: worum es geht, was bisher passiert ist, wo es gerade steht. Neuere Kontakte zählen mehr als ältere.
- "next": der eine nächste Schritt (wer tut was bis wann), leer wenn unklar.
- "decisions": getroffene Beschlüsse, je ein kurzer Satz.
- "todos": noch relevante konkrete Aufgaben mit "text" (Verb am Anfang), "owner" (Name, wenn genannt, sonst leer) und "due" (Frist wie in den Notizen, sonst leer). Keine Doppelten.
- "questions": offene Fragen oder ungeklärte Punkte.
Antworte NUR mit einem JSON-Objekt dieser Form, ohne weiteren Text:
{"summary":"","next":"","decisions":[],"todos":[{"text":"","owner":"","due":""}],"questions":[]}`;

const json = (o, status = 200) => new Response(JSON.stringify(o), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' } });

export async function onRequestPost({ request, env }) {
  const site = request.headers.get('Sec-Fetch-Site');
  if (site && site !== 'same-origin') return json({ error: 'forbidden' }, 403);
  if (!env.FLUX_KEY || !env.ANTHROPIC_API_KEY) return json({ error: 'Server nicht eingerichtet: FLUX_KEY und ANTHROPIC_API_KEY in Cloudflare setzen.' }, 500);
  if (request.headers.get('X-Flux-Key') !== env.FLUX_KEY) return json({ error: 'unauthorized' }, 401);
  const raw = await request.text();
  if (raw.length > 8_000_000) return json({ error: 'Anfrage zu groß' }, 413);
  let body;
  try { body = JSON.parse(raw); } catch { return json({ error: 'bad json' }, 400); }
  const text = String(body.text || '').slice(0, 30000);
  const content = [];
  (Array.isArray(body.images) ? body.images : []).slice(0, 8).forEach(d => {
    const m = /^data:(image\/(?:png|jpeg));base64,([A-Za-z0-9+/=]+)$/.exec(String(d));
    if (m) content.push({ type: 'image', source: { type: 'base64', media_type: m[1], data: m[2] } });
  });
  content.push({ type: 'text', text: text || '(keine Textnotizen, siehe Bilder)' });
  let res;
  try {
    res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'x-api-key': env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
      body: JSON.stringify({ model: env.AI_MODEL || 'claude-sonnet-5-5', max_tokens: 2500, system: SYSTEM, messages: [{ role: 'user', content }] }),
    });
  } catch { return json({ error: 'KI nicht erreichbar' }, 502); }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) return json({ error: (data.error && data.error.message) || ('KI-Fehler ' + res.status) }, 502);
  const out = (data.content || []).filter(c => c.type === 'text').map(c => c.text).join('');
  const i = out.indexOf('{'), j = out.lastIndexOf('}');
  let r;
  try { r = JSON.parse(out.slice(i, j + 1)); } catch { return json({ error: 'KI-Antwort nicht lesbar' }, 502); }
  return json({ r });
}
