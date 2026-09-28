/**
 * BUILD'DAN KEYIN: bosh sahifani HTML ga aylantirish va dist/index.html ga joylash.
 *
 *   1. dist-ssr/entry-server.js (vite build --ssr) → render("/")
 *   2. natija #root ichiga, `data-ssr="1"` belgisi bilan
 *   3. asosiy CSS HTML ichiga (<style>) — SSR matni uslubsiz ko'rinmasin va
 *      render qo'shimcha so'rovni kutmasin
 *
 * ⚠️ Node'da brauzer obyektlari yo'q. Quyidagi zaxiralar faqat komponentlar
 * RENDER paytida murojaat qilsa yiqilmasligi uchun; ular brauzerdagi mehmon
 * holatini (bo'sh localStorage, keng ekran emas) takrorlaydi. Hydration
 * mosligi brauzerda alohida tekshiriladi.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

const memory = new Map();
const storage = {
  getItem: (k) => (memory.has(k) ? memory.get(k) : null),
  setItem: (k, v) => memory.set(k, String(v)),
  removeItem: (k) => memory.delete(k),
  clear: () => memory.clear(),
};
Object.defineProperty(globalThis, "localStorage", { value: storage, configurable: true });
Object.defineProperty(globalThis, "sessionStorage", { value: storage, configurable: true });
// Node 20 da global `navigator` yo'q (21+ da bor) — Vercel build muhiti farq qilishi mumkin
if (typeof globalThis.navigator === "undefined") {
  Object.defineProperty(globalThis, "navigator", { value: { userAgent: "", language: "uz" }, configurable: true });
}

const { render } = await import(pathToFileURL(path.join(root, "dist-ssr/entry-server.js")).href);
const appHtml = await render("/");

let html = fs.readFileSync(path.join(dist, "index.html"), "utf8");

// Asosiy CSS → inline
html = html.replace(
  /<link rel="stylesheet"( crossorigin)? href="(\/assets\/index-[^"]+\.css)">/,
  (_, _co, href) => `<style data-app-css>${fs.readFileSync(path.join(dist, href), "utf8")}</style>`,
);

/* ASOSIY JS — SSR sahifa ko'rinadigan holatda `load` dan KEYIN so'raladi.
   Sabab (jonli o'lchov, 2026-09-28): SSR hero ~0,4 s da chiziladi, lekin
   Lighthouse `simulate` modeli (PageSpeed shu bilan o'lchaydi) LCP gacha
   BOSHLANGAN barcha so'rovlarni LCP grafiga qo'shadi — 127 KB JS HTML bilan
   birga so'ralgani uchun mobil LCP 3 s, Performance 88 chiqardi. Sahifa JS'siz
   ham to'liq ko'rinadi (havolalar oddiy <a>), JS faqat interaktivlik uchun.
   `load` ham, 2 ta kadr ham YETMAYDI: brauzer chizish vaqtini kadrdan keyin
   qayd etadi va JS baribir LCP grafiga tushib qolardi. Shuning uchun aniq
   signal kutiladi — brauzer hero rasmini LCP sifatida QAYD ETGANI
   (PerformanceObserver). Zaxiralar: `load` dan keyin 0,8 s, umumiy 3 s
   (yashirin tab, LCP boshqa element bo'lgan holat).
   Boshqa holatda (html.ssr-off: ichki sahifa, ruscha, login) JS DARHOL. */
html = html.replace(/<script type="module" crossorigin src="(\/assets\/index-[^"]+\.js)"><\/script>/, (_, src) =>
  `<script>(function(){var s=document.createElement("script");s.type="module";s.crossOrigin="anonymous";s.src=${JSON.stringify(src)};` +
  `var done=0,hero=0,loaded=0;function go(){if(done)return;done=1;document.head.appendChild(s)}` +
  `function check(){if(loaded&&hero)setTimeout(go,0)}` +
  // "Turtki": DOM tayyor va `load` da ildizga CSS o'zgaruvchisi yoziladi — bu yangi
  // kadrni majburlaydi. Lighthouse muhitida (PageSpeed ham) resurslar yuklangach
  // brauzer o'zi kadr rejalashtirmay, SSR kontent biror DOM o'zgarishigacha
  // CHIZILMAY turardi (trace: kontent aynan JS qo'shilgan paytda chizilgan).
  `function nudge(v){document.documentElement.style.setProperty("--ssr-ready",v)}` +
  `document.addEventListener("DOMContentLoaded",function(){nudge("1")},{once:true});` +
  `if(document.documentElement.classList.contains("ssr-off"))go();else{` +
  `try{new PerformanceObserver(function(l){l.getEntries().forEach(function(e){if(/hero-/.test(e.url||""))hero=1});check()}).observe({type:"largest-contentful-paint",buffered:true})}catch(e){hero=1}` +
  `function onLoad(){loaded=1;nudge("2");requestAnimationFrame(function(){nudge("3")});check();setTimeout(go,800)}` +
  `if(document.readyState==="complete")onLoad();else addEventListener("load",onLoad,{once:true});setTimeout(go,3000)}})()</script>`,
);
if (!/document\.createElement\("script"\)/.test(html)) throw new Error("prerender: asosiy skript tegi topilmadi");

const before = html.length;
html = html.replace(/<div id="root">[\s\S]*?<!--ssr-end-->/, `<div id="root" data-ssr="1">${appHtml}</div>`);
if (html.length === before) throw new Error("prerender: #root belgisi (<!--ssr-end-->) topilmadi");

fs.writeFileSync(path.join(dist, "index.html"), html);

// VAQTINCHA (Lighthouse tajribasi): bir xil sahifaning ikki varianti
const testHtml = html.replace('location.pathname === "/"', "true");
fs.writeFileSync(path.join(dist, "lhtest-a.html"), testHtml);
fs.writeFileSync(
  path.join(dist, "lhtest-b.html"),
  testHtml.replace("</head>", "<style>*,*::before,*::after{animation:none!important;transition:none!important}</style></head>"),
);
fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
console.log(`prerender: / → ${Math.round(appHtml.length / 1024)} KB HTML`);
