const CACHE_NAME = 'toggle-walker-a3ed909699cb';
const PRECACHE_URLS = [
  "/toggle-walker/",
  "/toggle-walker/assets/fa-solid-900-IAB4Droh.woff2",
  "/toggle-walker/assets/index-Bsp0vO84.css",
  "/toggle-walker/assets/index-CK89hica.js",
  "/toggle-walker/assets/level-worker-5CinhZXh.js",
  "/toggle-walker/assets/solver-BMQu5Vso.js",
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
