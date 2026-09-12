"use strict";
/**
 * Qonun sahifalari uchun sayt xaritasi (~7 100 manzil).
 *
 * ⚠️ TEZLIK — bu yerda oson yo'l qo'yiladigan xato bor edi: har bir
 * `LegalChunk` hujjati ~19,6 KB (1024 o'lchamli embedding shuncha joy
 * oladi). Agar so'rov `updatedAt` yoki `title` ni ham so'rasa, MongoDB
 * 7 100 ta TO'LIQ hujjatni diskdan o'qishga majbur bo'ladi (~139 MB).
 * Shuning uchun faqat `lawCode` va `articleNumber` olinadi — ular
 * `law_list_covered` indeksining O'ZIDA bor, ya'ni hujjatlarga umuman
 * murojaat qilinmaydi. `lastmod` esa moddadan emas, KODEKSNING oxirgi
 * yuklanish sanasidan (`LawSource.lastIngestAt`, 21 ta hujjat) olinadi.
 */
const { SITE_URL, path } = require("./meta");

const CACHE_MS = 6 * 60 * 60 * 1000; // 6 soat
let cache = null;
let cacheAt = 0;

function xmlEscape(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
}

function urlNode(loc, lastmod, changefreq, priority) {
  return [
    "  <url>",
    `    <loc>${xmlEscape(SITE_URL + loc)}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : "",
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n");
}

const day = (d) => (d ? new Date(d).toISOString().slice(0, 10) : "");

/**
 * @param {Array} laws     [{code, lastIngestAt}]
 * @param {Array} articles [{lawCode, articleNumber}] — tartiblangan
 */
function buildSitemap(laws, articles) {
  const lastByCode = new Map(laws.map((l) => [l.code, day(l.lastIngestAt)]));
  const nodes = [urlNode(path.laws(), "", "weekly", "0.9")];

  for (const l of laws) {
    nodes.push(urlNode(path.code(l.code), lastByCode.get(l.code), "weekly", "0.8"));
  }
  for (const a of articles) {
    nodes.push(
      urlNode(
        path.article(a.lawCode, a.articleNumber),
        lastByCode.get(a.lawCode),
        "monthly",
        "0.6",
      ),
    );
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- Huquq AI — qonun moddalari sayt xaritasi (avtomatik yaratiladi). -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${nodes.join("\n")}
</urlset>`;
}

function getCached() {
  return cache && Date.now() - cacheAt < CACHE_MS ? cache : null;
}

function setCached(xml) {
  cache = xml;
  cacheAt = Date.now();
}

module.exports = { buildSitemap, getCached, setCached };
