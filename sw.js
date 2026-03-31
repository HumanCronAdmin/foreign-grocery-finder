const CACHE = "fgf-v1";
const ASSETS = ["./", "css/style.css", "js/data.js", "js/app.js"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener("fetch", e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));