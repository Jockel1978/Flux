# Flux & Flux Faden (Repo Jockel1978/Flux, Branch main)

Besitzer: Jörg, informelles Deutsch, direkt und knapp, iterativ bauen, nicht spekulieren.

## Was liegt hier
- `public/index.html` – **Flux**: Single-File-PWA (Todoist/Notion-Mix, Kalender-Sync). Kein Framework, kein Build. Notizen-Code ist noch drin, aber aus der UI entfernt (ruht).
- `public/faden/` – **Flux Faden**: Single-File-PWA für Kundenfälle (Verlauf aus Kontakten, Status, Wiedervorlage, Archiv, Stand der Dinge per KI, Screenshots mit Beschreibung, PDF/Teams-Text). Daten: localStorage `ffaden-v1`, Firestore-Collection `threads`.
- `public/fb.js` – gebündeltes Firebase (Auth + Firestore) als `window.FBX`. Quelle: `fb-src/entry.js`, neu bauen mit esbuild.
- `functions/api/ai.js` – Cloudflare Pages Function, ruft die Claude API (Messages). Geschützt durch Header `X-Flux-Key` und Same-Origin-Prüfung.
- `functions/api/ics.js` – Kalender-Proxy. `functions/_middleware.js` – leitet `/` auf `/faden/` um, wenn der Host mit `flux-faden` oder `flux-notizen` beginnt.
- `public/panel.html`, `ha-panel/` – Home-Assistant-Wandpanel (Tablet).

## Deploy
- Cloudflare Pages, Output-Verzeichnis `public`, kein Build-Befehl. Push auf `main` deployt automatisch.
- Flux: `flux-joerg.pages.dev`. Faden: gleiche Adresse unter `/faden/` oder zweites Pages-Projekt `flux-faden` (nötig, damit Faden als eigene App installierbar ist; sonst gilt es als Teil von Flux wegen des Scopes).
- Jedes Pages-Projekt braucht die Variablen `ANTHROPIC_API_KEY` und `FLUX_KEY` (Secrets). Firebase: jede Domain unter Authentication → Autorisierte Domains eintragen.
- Keine Schlüssel oder Passwörter in Dateien oder Commits.

## Wichtige Eigenheiten
- Service Worker: network-first. Bei App-Änderungen Cache-Namen hochzählen (Flux `flux-vNN` in `public/sw.js`, Faden `ffaden-vN` in `public/faden/sw.js`).
- Firestore-Dokumentlimit ~1 MB: Faden-Threads mit vielen Screenshots werden ab 950000 Zeichen nicht mehr synchronisiert (Warnung). Bei Bedarf Bilder auslagern.
- Datenschutz im Faden: Kunde, Ansprechpartner und Zusatzbegriffe werden vor der KI durch Platzhalter (⟦K1⟧ …) ersetzt und danach zurückgetauscht. Bilder und Handschrift werden NICHT anonymisiert (nur mit Häkchen senden).
- Stift: Pointer-Events, Stift zeichnet, Finger scrollt (Einstellung „Finger“). Striche als flache Int-Arrays im 1000er-Koordinatenraum.
- Faden-Reihenfolge im Stand: Stand der Dinge, Nächster Schritt, Offene Fragen, Aufgaben, Beschlüsse, Screenshots.

## Testen
Playwright (headless Chromium) gegen `python3 -m http.server -d public`, `fb.js` abbrechen (Stub), `/api/ai` mocken. Server pro Lauf neu starten.

## Offen / ungeprüft
- Wetter in Flux nach Absicherung: Rückmeldung steht aus.
- HA-Panel: echte Verbindung (http/https, gemischte Inhalte) ungeprüft.
- Echte KI mit Schlüsseln, Firebase-Sync von `threads`, Installation von Faden als App: ungeprüft.
- Ideen: Teams-Webhook, Push-Erinnerungen für Wiedervorlagen (Firebase Cloud Functions + FCM), Bilder auslagern.
