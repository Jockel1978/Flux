// Cloudflare Pages Function: liest einen Zoho-Kalender per CalDAV (Benutzername + App-Passwort bleiben auf dem Server).
// Benötigt in Cloudflare (Pages → Einstellungen → Variablen und Geheimnisse, Production, Typ Secret):
//   ZOHO_USER  (Zoho-Mailadresse)   ZOHO_PASS  (App-Passwort aus accounts.zoho.eu → Sicherheit)   FLUX_KEY (eigener Zugangsschlüssel)
// Danach unter Deployments einmal "Retry deployment".
const text = (s, status = 200, type = 'text/plain; charset=utf-8') => new Response(s, { status, headers: { 'Content-Type': type, 'Cache-Control': 'no-store' } });
const pad = n => String(n).padStart(2, '0');
const stamp = d => d.getUTCFullYear() + pad(d.getUTCMonth() + 1) + pad(d.getUTCDate()) + 'T000000Z';
const unxml = s => { const m = /^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/.exec(s); return m ? m[1] : s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#13;/g, '').replace(/&#10;/g, '\n').replace(/&amp;/g, '&'); };
function same(a, b) { if (a.length !== b.length) return false; let r = 0; for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i); return r === 0; }

export async function onRequestGet({ request, env }) {
  const site = request.headers.get('Sec-Fetch-Site');
  if (site && site !== 'same-origin') return text('forbidden', 403);
  if (!env.FLUX_KEY || !env.ZOHO_USER || !env.ZOHO_PASS) return text('Server nicht eingerichtet: ZOHO_USER, ZOHO_PASS und FLUX_KEY in Cloudflare setzen.', 500);
  if (!same(request.headers.get('X-Flux-Key') || '', env.FLUX_KEY)) return text('Zugangsschlüssel (FLUX_KEY) falsch oder fehlt', 401);
  let target;
  try { target = new URL(new URL(request.url).searchParams.get('url') || ''); } catch { return text('bad url', 400); }
  if (target.protocol !== 'https:' || !/^calendar\.zoho\.[a-z.]{2,10}$/i.test(target.hostname) || !target.pathname.startsWith('/caldav/')) {
    return text('Nur Zoho-CalDAV-Links (https://calendar.zoho.…/caldav/…) erlaubt', 400);
  }
  const from = new Date(Date.now() - 30 * 864e5), to = new Date(Date.now() + 400 * 864e5);
  const body = '<?xml version="1.0" encoding="utf-8"?><c:calendar-query xmlns:d="DAV:" xmlns:c="urn:ietf:params:xml:ns:caldav"><d:prop><d:getetag/><c:calendar-data/></d:prop>'
    + '<c:filter><c:comp-filter name="VCALENDAR"><c:comp-filter name="VEVENT"><c:time-range start="' + stamp(from) + '" end="' + stamp(to) + '"/></c:comp-filter></c:comp-filter></c:filter></c:calendar-query>';
  let res;
  try {
    res = await fetch(target.toString(), {
      method: 'REPORT',
      headers: {
        Authorization: 'Basic ' + btoa(unescape(encodeURIComponent(env.ZOHO_USER + ':' + env.ZOHO_PASS))),
        Depth: '1', 'Content-Type': 'application/xml; charset=utf-8', 'User-Agent': 'Mozilla/5.0 (compatible; FluxCalendar/1.0)',
      },
      body,
    });
  } catch { return text('Zoho nicht erreichbar', 502); }
  if (res.status === 401 || res.status === 403) return text('Zoho lehnt die Anmeldung ab (HTTP ' + res.status + '): Benutzername oder App-Passwort prüfen', 502);
  const xml = await res.text();
  if (res.status !== 207 && !res.ok) return text('Zoho antwortet mit HTTP ' + res.status, 502);
  if (xml.length > 6_000_000) return text('Kalender zu gross', 502);
  const parts = [...xml.matchAll(/<(?:[\w-]+:)?calendar-data[^>]*>([\s\S]*?)<\/(?:[\w-]+:)?calendar-data>/gi)].map(m => unxml(m[1]));
  if (!parts.length && !/multistatus/i.test(xml.slice(0, 2000))) return text('Antwort ist kein CalDAV (' + (res.headers.get('content-type') || '?').slice(0, 40) + ')', 502);
  const events = parts.map(p => p.replace(/BEGIN:VCALENDAR\r?\n|END:VCALENDAR\r?\n?|VERSION:2\.0\r?\n|PRODID:[^\r\n]*\r?\n/g, '')).join('\r\n');
  return text('BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Flux//CalDAV\r\n' + events + '\r\nEND:VCALENDAR', 200, 'text/calendar; charset=utf-8');
}
