/**
 * HUQUQTECH — LOGO RASMLARINI YASASH (2026-10-05).
 *
 * Sayt ichida logo inline SVG (src/components/brand/BrandLogo.jsx), lekin
 * ba'zi joylar RASM faylini talab qiladi: favicon, PWA ikonkalari
 * (site.webmanifest), apple-touch-icon, chat avatari, schema.org logosi,
 * ijtimoiy tarmoq rasmi (og-image). Ular shu skript bilan BIR XIL
 * belgidan yasaladi va ESKI FAYL NOMLARI saqlanadi — shuning uchun ular
 * ishlatilgan joylarda kodni o'zgartirish kerak bo'lmadi.
 *
 * Ishga tushirish (loyihaga bog'liqlik qo'shilmagan — bir martalik):
 *   npm i --no-save playwright-core   (yoki istalgan joyga)
 *   PLAYWRIGHT_CORE=<.../node_modules/playwright-core/index.mjs> \
 *   CHROME_PATH=<chromium yoki Chrome yo'li> node scripts/brand/renderIcons.mjs
 * AVIF nusxalar macOS `sips` bilan olinadi.
 */

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { pathToFileURL, fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const PUB = path.join(ROOT, "public");
const { chromium } = await import(pathToFileURL(process.env.PLAYWRIGHT_CORE).href);

const NAVY = "#0b1322";
const GOLD = "#c9953a";
// BrandLogo.jsx → BrandMark bilan BIR XIL yo'llar
const BOOK = `<g fill="none" stroke="${GOLD}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">
<path d="M24 36.5 L6.2 32.6 Q3.5 32 3.5 29.3 V12.2 Q3.5 9.5 6.2 9.5 H7.5"/>
<path d="M24 36.5 L41.8 32.6 Q44.5 32 44.5 29.3 V12.2 Q44.5 9.5 41.8 9.5 H40.5"/>
<path d="M24 12.5 Q17.5 5.8 10 6 Q8.5 6.05 8.5 7.6 V27.8 Q8.5 29.3 10 29.3 Q17.5 29.2 24 33.2 Z" fill="${GOLD}" fill-opacity="0.88"/>
<path d="M24 12.5 Q30.5 5.8 38 6 Q39.5 6.05 39.5 7.6 V27.8 Q39.5 29.3 38 29.3 Q30.5 29.2 24 33.2 Z"/></g>`;

/* Kvadrat ikonka: navy fon + markazda oltin kitob. Kitob eni ~58% —
   maskable ikonkaning xavfsiz doirasi (radius 40%) ichida qoladi va
   chat avatari doira bo'lib kesilganda ham to'liq ko'rinadi. */
function iconSvg(size, radius = 0) {
  const w = size * 0.58;
  const k = w / 48;
  const x = (size - w) / 2;
  const y = (size - 40 * k) / 2 + size * 0.015;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
<rect width="${size}" height="${size}" rx="${radius}" fill="${NAVY}"/>
<g transform="translate(${x} ${y}) scale(${k})">${BOOK}</g></svg>`;
}

// [fayl, o'lcham, burchak radiusi]. logo-72/96 — interfeys avatarlari
// (chat, o'rnatish oynasi), shuning uchun yumaloq burchakli; ilova
// ikonkalari (180/192/512) TO'LIQ kvadrat — ularni telefon o'zi kesadi.
const ICONS = [
  ["favicon-32.png", 32, 7],
  ["logo-72.png", 72, 16],
  ["logo-96.png", 96, 21],
  ["logo-180.png", 180, 0],
  ["logo-192.png", 192, 0],
  ["logo-512.png", 512, 0],
  ["logo.png", 600, 0],
];

// Shrift ICHIGA joylanadi: setContent sahifasi file:// shriftni yuklay olmaydi
const font = (w) => {
  const b64 = fs.readFileSync(path.join(PUB, `fonts/poppins-${w}-latin.woff2`)).toString("base64");
  return `@font-face{font-family:P;font-weight:${w};src:url(data:font/woff2;base64,${b64}) format("woff2")}`;
};

function ogHtml(lang) {
  const T = lang === "ru"
    ? { chip: "ПРАВОВОЕ ОБУЧЕНИЕ · УЗБЕКИСТАН", sub: "Платформа правового обучения", desc: "Кодексы, уроки, тесты и AI-помощник по законодательству Узбекистана — ответы опираются на действующие статьи.", stats: [["20", "кодексов"], ["7000+", "статей"], ["124", "урока"]] }
    : { chip: "HUQUQIY TA'LIM · O'ZBEKISTON", sub: "Huquqiy ta'lim platformasi", desc: "Kodekslar, darslar, testlar va AI yordamchi — javoblar amaldagi qonun moddalariga asoslanadi.", stats: [["20", "kodeks"], ["7000+", "modda"], ["124", "dars"]] };
  return `<style>${[400, 600, 700].map(font).join("")}
*{margin:0;box-sizing:border-box}body{width:1200px;height:630px;font-family:P,sans-serif;color:#fff;
background:radial-gradient(600px 380px at 88% 12%,rgba(201,149,58,.28),transparent 70%),linear-gradient(135deg,#132447 0%,#0b1322 60%,#0a1020 100%);position:relative;overflow:hidden}
.grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);background-size:60px 60px}
.tile{position:absolute;left:84px;top:203px;width:224px;height:224px;border-radius:30px;background:#fffcf5;display:grid;place-items:center;box-shadow:0 30px 60px rgba(0,0,0,.35)}
.main{position:absolute;left:366px;top:157px;right:60px}
.chip{display:inline-flex;align-items:center;gap:10px;padding:10px 20px;border:1px solid rgba(201,149,58,.45);border-radius:99px;color:#e0b060;font-weight:600;font-size:16px;letter-spacing:.08em}
.chip i{width:8px;height:8px;border-radius:50%;background:#e0b060}
h1{margin-top:26px;font-size:86px;font-weight:700;letter-spacing:-.02em;line-height:1}h1 b{color:#e0b060}
.sub{margin-top:12px;font-size:17px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.6)}
p{margin-top:22px;font-size:25px;line-height:1.45;color:rgba(255,255,255,.82);max-width:720px}
.bar{margin-top:30px;width:100px;height:4px;border-radius:4px;background:linear-gradient(90deg,#e0b060,transparent)}
.stats{position:absolute;left:84px;bottom:46px;display:flex;gap:34px;font-size:19px;color:rgba(255,255,255,.7)}.stats b{color:#e0b060}</style>
<div class="grid"></div><div class="tile"><svg width="150" height="125" viewBox="0 0 48 40">${BOOK}</svg></div>
<div class="main"><span class="chip"><i></i>${T.chip}</span><h1>Huquq<b>Tech</b></h1><div class="sub">${T.sub}</div><p>${T.desc}</p><div class="bar"></div></div>
<div class="stats">${T.stats.map(([n, l]) => `<span><b>${n}</b> ${l}</span>`).join("")}</div>`;
}

const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH });
const page = await browser.newPage();
for (const [name, size, radius] of ICONS) {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(`<body style="margin:0;background:transparent">${iconSvg(size, radius)}</body>`);
  await page.screenshot({ path: path.join(PUB, name), omitBackground: true, clip: { x: 0, y: 0, width: size, height: size } });
  console.log("✓", name);
}
for (const [name, lang] of [["og-image.jpg", "uz"], ["og-image-ru.jpg", "ru"]]) {
  await page.setViewportSize({ width: 1200, height: 630 });
  await page.setContent(ogHtml(lang));
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(PUB, name), type: "jpeg", quality: 90 });
  console.log("✓", name);
}
await browser.close();

for (const n of ["logo-72", "logo-96"]) {
  execFileSync("sips", ["-s", "format", "avif", path.join(PUB, `${n}.png`), "--out", path.join(PUB, `${n}.avif`)], { stdio: "ignore" });
  console.log("✓", `${n}.avif`);
}
