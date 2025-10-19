const CACHE_NAME = 'absurde-cache-v1';
const urlsToCache = [
  '/Tiragedelabsurde/',
  '/Tiragedelabsurde/index.html',
  '/Tiragedelabsurde/style.css',
  '/Tiragedelabsurde/script.js',
  '/Tiragedelabsurde/icon.png',
  '/Tiragedelabsurde/assets/danseuse.png'
];

self.addEventListener('install', function(event) {
  console.log('Service Worker installé.');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});

