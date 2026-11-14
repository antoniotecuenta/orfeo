// Orfeo: funciona sin internet. La página se pide primero a la red; si no hay, sale de la caché.
const CACHE = 'orfeo-v2';
const BASE = ['./', 'index.html', 'config.js', 'supabase.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET') return;
  const propio = u.origin === location.origin, fuentes = /fonts\.(googleapis|gstatic)\.com$/.test(u.hostname);
  if (!propio && !fuentes) return; // Supabase va siempre directo a la red
  e.respondWith(
    fetch(propio ? new Request(r, { cache: 'no-cache' }) : r).then(res => {
      if (res.ok || res.type === 'opaque') { const copia = res.clone(); caches.open(CACHE).then(c => c.put(r, copia)); }
      return res;
    }).catch(() => caches.match(r, { ignoreSearch: true }).then(m => m || caches.match('index.html')))
  );
});
