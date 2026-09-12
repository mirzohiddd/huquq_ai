/* Huquq AI — service worker (PWA o'rnatish uchun).

   ⚠️ ATAYLAB MINIMAL: hech qanday JS/CSS/API javobi keshlanmaydi.
   Keshlangan eski `index.html` yangi deploy'dan keyin mavjud bo'lmagan
   bo'laklarga murojaat qilib, saytni oq ekranga aylantirishi mumkin edi.
   Shu sabab faqat SAHIFA so'rovlari tarmoqdan olinadi va internet
   bo'lmagandagina oflayn sahifa ko'rsatiladi. Qolgan barcha so'rovlar
   (API, rasm, /qonun rewrite'lari) SW'ga umuman tegmaydi. */

const CACHE = "huquq-offline-v1";
const OFFLINE_URL = "/offline.html";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((c) => c.addAll([OFFLINE_URL, "/logo-192.png"]))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.mode !== "navigate" || req.method !== "GET") return;
  event.respondWith(
    fetch(req).catch(() =>
      caches.match(OFFLINE_URL).then((r) => r || Response.error()),
    ),
  );
});
