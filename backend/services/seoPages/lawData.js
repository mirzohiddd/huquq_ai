"use strict";
/**
 * Ochiq qonun sahifalari uchun ma'lumot olish va keshlash.
 *
 * `routes/publicSeo.js` dan ajratilgan: u 200 qatordan oshib ketardi
 * (CLAUDE.md qoidasi) va marshrutlar bilan baza so'rovlarini aralashtirish
 * o'qishni qiyinlashtirardi.
 */
const { LegalChunk } = require("../../models");
const { getLaws } = require("../lawRegistry");

const CACHE_MS = 30 * 60 * 1000;
const listCache = new Map(); // lawCode -> { at, items }
let lawsCache = null;
let lawsCacheAt = 0;

/** Modda raqamlari bo'yicha to'g'ri tartib: 61 → 61-1 → 61-2 → 62 */
function sortArticles(items) {
  return items.sort((a, b) => {
    const pa = String(a.articleNumber).split("-").map((x) => parseInt(x, 10) || 0);
    const pb = String(b.articleNumber).split("-").map((x) => parseInt(x, 10) || 0);
    return pa[0] - pb[0] || (pa[1] || 0) - (pb[1] || 0);
  });
}

/**
 * Kodeksning modda ro'yxati (raqam + sarlavha).
 *
 * ⚠️ FAQAT `articleNumber`, `title`, `titleRu` olinadi — uchalasi ham
 * `law_list_covered` indeksining ICHIDA, ya'ni MongoDB 19,6 KB lik
 * hujjatlarni umuman o'qimaydi (har birida 1024 o'lchamli embedding
 * bor). `chapter` qo'shilsa indeks qamramaydi va 810 moddali kodeks
 * uchun ~16 MB disk o'qish paydo bo'lardi — shu sabab ochiq sahifadagi
 * ro'yxat boblarga ajratilmaydi.
 */
async function articleList(code) {
  const hit = listCache.get(code);
  if (hit && Date.now() - hit.at < CACHE_MS) return hit.items;

  const items = sortArticles(
    await LegalChunk.find({ lawCode: code })
      .select("articleNumber title titleRu -_id")
      .limit(3000)
      .lean(),
  );
  listCache.set(code, { at: Date.now(), items });
  return items;
}

/** Yoqilgan va moddalari yuklangan hujjatlar (modda soni bilan). */
async function activeLaws() {
  if (lawsCache && Date.now() - lawsCacheAt < CACHE_MS) return lawsCache;

  const laws = await getLaws();
  // `.hint({lawCode: 1})` — indeks bo'yicha sanash. Usiz MongoDB butun
  // kolleksiyani skanerlardi (~136 MB, o'lchangan: 1078 ms).
  const counts = await LegalChunk.aggregate([
    { $group: { _id: "$lawCode", n: { $sum: 1 } } },
  ]).hint({ lawCode: 1 });
  const byCode = new Map(counts.map((c) => [c._id, c.n]));

  // Moddalari hali yuklanmagan hujjat ochiq sahifada KO'RSATILMAYDI —
  // bo'sh sahifa indekslansa qidiruv natijasida ham bo'sh chiqardi.
  lawsCache = laws
    .map((l) => ({ ...l, articleCount: byCode.get(l.code) || 0 }))
    .filter((l) => l.articleCount > 0);
  lawsCacheAt = Date.now();
  return lawsCache;
}

/** Bitta modda (embeddingsiz — u 1024 ta son va javobni og'irlashtiradi). */
function findArticle(code, num) {
  return LegalChunk.findOne({ lawCode: code, articleNumber: num })
    .select("-embedding")
    .lean();
}

/** Sayt xaritasi uchun barcha modda manzillari (qoplovchi indeks bilan). */
async function allArticleRefs() {
  return sortArticles(
    await LegalChunk.find({})
      .select("lawCode articleNumber -_id")
      .limit(20000)
      .lean(),
  );
}

module.exports = {
  sortArticles,
  articleList,
  activeLaws,
  findArticle,
  allArticleRefs,
};
