// Direction artistique: Atelier de performance — cache minimal et discret, sans détourner l’usage principal.
const CACHE = "imperium-gym-v1";
const APP_SHELL = ["/", "/manifest.webmanifest", "/imperium-logo.svg"];
self.addEventListener("install", (event) => event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(APP_SHELL))));
self.addEventListener("activate", (event) => event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))));
self.addEventListener("fetch", (event) => event.respondWith(fetch(event.request).catch(() => caches.match(event.request))));
