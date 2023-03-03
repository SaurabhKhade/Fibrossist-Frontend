const store = "fibrossist-cache-v1";

const precaches = [
  "/",
  "http://localhost:3000/assets/misc/firstView.png",
  "http://localhost:3000/assets/misc/secondView.png",
  "http://localhost:3000/assets/misc/thirdView.png",
  "http://localhost:3000/_next/static/chunks/framework-7751730b10fa0f74.js",
  "http://localhost:3000/_next/static/chunks/pages/_app-2c350274ba9b048d.js",
  "http://localhost:3000/_next/static/chunks/main-591bb7ec51acdc0d.js",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(store).then((cache) => {
      cache.addAll(precaches);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }
        let responseToCache = response.clone();

        caches.open(store).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});

self.addEventListener("activate", (event) => {
  let whitelist = [store];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!whitelist.includes(cacheName)) return caches.delete(cacheName);
        })
      );
    })
  );
});
