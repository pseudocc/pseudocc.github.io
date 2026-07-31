const CACHE_NAME = 'toggle-walker-3823a3a72faa';
const PRECACHE_URLS = [
  "/toggle-walker/",
  "/toggle-walker/assets/fa-solid-900-IAB4Droh.woff2",
  "/toggle-walker/assets/index-BJQT3_qr.css",
  "/toggle-walker/assets/index-BwWLwqDr.js",
  "/toggle-walker/assets/level-worker-D2WJnIap.js",
  "/toggle-walker/assets/solver-tJUP-Vax.js",
  "/toggle-walker/icons/icon-192.png",
  "/toggle-walker/icons/icon-512.png",
  "/toggle-walker/icons/icon.svg",
  "/toggle-walker/index.html",
  "/toggle-walker/manifest.webmanifest"
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    try {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(PRECACHE_URLS);
      await self.skipWaiting();
    } catch (error) {
      await caches.delete(CACHE_NAME);
      throw error;
    }
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const versions = (await caches.keys()).filter((key) => key.startsWith('toggle-walker-') && key !== CACHE_NAME);
    await Promise.all(versions.slice(0, -1).map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(event.request, { ignoreVary: true })
      ?? await caches.match(event.request, { ignoreVary: true });
    if (cached) return cached;
    if (event.request.mode === 'navigate') {
      return cache.match(new URL('index.html', self.registration.scope).href);
    }

    const response = await fetch(event.request);
    if (response.ok) event.waitUntil(cache.put(event.request, response.clone()));
    return response;
  })());
});
