// Cloudflare Pages Function: holt einen iCal-Link serverseitig ab (umgeht CORS).
// Nur für die eigene Seite erreichbar (Sec-Fetch-Site: same-origin), nur https,
// nur Antworten, die wirklich ein Kalender (BEGIN:VCALENDAR) sind.
export async function onRequestGet({ request }) {
  const site = request.headers.get('Sec-Fetch-Site');
  if (site && site !== 'same-origin') return new Response('forbidden', { status: 403 });
  const raw = new URL(request.url).searchParams.get('url') || '';
  let target;
  try { target = new URL(raw.replace(/^webcal:/i, 'https:')); } catch { return new Response('bad url', { status: 400 }); }
  if (target.protocol !== 'https:') return new Response('https only', { status: 400 });
  const host = target.hostname.toLowerCase();
  if (host === 'localhost' || host.endsWith('.local') || host.endsWith('.internal') || /^[\d.]+$/.test(host) || host.includes(':')) {
    return new Response('host not allowed', { status: 400 });
  }
  let res;
  try {
    res = await fetch(target.toString(), { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; FluxCalendar/1.0)', 'Accept': 'text/calendar, text/plain, */*' }, redirect: 'follow' });
  } catch { return new Response('fetch failed', { status: 502 }); }
  const text = await res.text();
  if (!res.ok) return new Response('Kalender-Server antwortet mit HTTP ' + res.status, { status: 502 });
  if (text.length > 3_000_000) return new Response('Kalender zu gross', { status: 502 });
  if (!/BEGIN:VCALENDAR/.test(text.slice(0, 2000))) {
    return new Response('Antwort ist kein Kalender (' + (res.headers.get('content-type') || '?').slice(0, 40) + ')', { status: 502 });
  }
  return new Response(text, {
    headers: { 'Content-Type': 'text/calendar; charset=utf-8', 'Cache-Control': 'private, max-age=300' },
  });
}
