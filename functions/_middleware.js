// Zweite Domain für die Notizen-App (flux-notizen.pages.dev): Startseite leitet auf /notes/ um.
export async function onRequest({ request, next }) {
  const u = new URL(request.url);
  if (u.hostname.startsWith('flux-notizen') && (u.pathname === '/' || u.pathname === '/index.html')) {
    return Response.redirect(u.origin + '/notes/', 302);
  }
  return next();
}
