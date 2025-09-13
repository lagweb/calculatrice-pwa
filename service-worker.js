const CACHE_NAME = 'calc-cache-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  // ajoute ici css/js/images...
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
