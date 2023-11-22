const cacheName = 'calculator-app-cache-v1'; // Unique name for the cache

// This event is fired when the service worker is first installed
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll([
                '/src/assets/site-light.webmanifest?v=1.1',
                // Add other files you want to cache...
            ]);
        })
    );
});

// This event is fired when the service worker is activated
self.addEventListener('activate', (event) => {
    // Delete old caches if necessary
    // ...

    // Claim clients to ensure that updates take effect immediately
    self.clients.claim();
});

// This event is fired when a network request is made
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // If the request is in the cache, return the cached response
            if (response) {
                return response;
            }

            // Otherwise, fetch the request from the network and cache it
            return fetch(event.request).then((response) => {
                return caches.open(cacheName).then((cache) => {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});
