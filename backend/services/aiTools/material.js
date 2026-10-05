"use strict";
/**
 * AI VOSITALAR — MAVZU BO'YICHA TEKSHIRILGAN MATERIAL TANLASH.
 *
 * Slayd, test va dars reja generatorlari kontentni O'ZIDAN to'qimaydi:
 * manba — saytning darslar bilim bazasi (124 dars + 6 darslik ≈ 1369
 * mavzu, `localAI/lessonTopics.js`). Har mavzuda oddiy tilda tushuntirish,
 * hayotiy misol, asosiy fikrlar, ogohlantirish va bazadan TEKSHIRILGAN
 * qonun havolalari (`lawRefs`) bor. Shu sabab generatsiya API'siz,
 * tez (millisekundlar) va loyihaning huquqiy aniqlik qoidasiga mos:
 * muddat/summa/modda raqami faqat qonun iqtibosida (jonli) ko'rinadi.
 */
const { searchTopics, getTopicIndex } = require("../localAI/lessonTopics");
const { queryPrefixes, tokenize } = require("../localAI/text");
const { getIndex } = require("../localAI/lawIndex");

const RANK_POOL = 40;

/** Mavzu nomi bo'yicha eng mos DARSni va uning mavzularini tanlash. */
function pickMaterial(query, want) {
  const ranked = searchTopics(query, RANK_POOL);
  if (!ranked.length) return null;

  // Dars bo'yicha ball yig'iladi: bitta darsdagi bir nechta mos mavzu —
  // tasodifiy bitta yuqori mavzudan kuchliroq signal.
  const byLesson = new Map();
  for (const r of ranked) {
    const k = r.topic.lesson;
    byLesson.set(k, (byLesson.get(k) || 0) + r.score * (0.5 + r.coverage));
  }
  // Dars NOMI so'rovga mos bo'lsa — kuchli ustunlik ("Mehnat shartnomasi"
  // so'roviga umumiy "Mehnat huquqi" darsligi emas, aynan shu nomli dars)
  const own = queryPrefixes(query);
  for (const [k, v] of byLesson) {
    const toks = tokenize(k);
    const fit = own.filter((p) => toks.some((t) => t.startsWith(p))).length / (own.length || 1);
    byLesson.set(k, v * (1 + 2 * fit * fit));
  }
  const lesson = [...byLesson.entries()].sort((a, b) => b[1] - a[1])[0][0];

  // Darsning mavzulari ASL tartibida (dars mantiqiy ketma-ketlikda yozilgan)
  const all = getTopicIndex().topics.filter((t) => t.lesson === lesson);
  const hit = new Set(ranked.filter((r) => r.topic.lesson === lesson).map((r) => r.topic.heading));
  let chosen = all;
  if (all.length > want) {
    // Avval so'rovga mos mavzular, keyin qolganlari — lekin tartib saqlanadi
    const keep = new Set([...all.filter((t) => hit.has(t.heading)), ...all].slice(0, want));
    chosen = all.filter((t) => keep.has(t));
  }
  // Darsning o'zi kam bo'lsa — boshqa darslardagi eng mos mavzular qo'shiladi
  if (chosen.length < want) {
    const extra = ranked
      .map((r) => r.topic)
      .filter((t) => t.lesson !== lesson && t.lawRefs.length)
      .slice(0, want - chosen.length);
    chosen = [...chosen, ...extra];
  }
  const meta = lessonMeta(lesson);
  return { lesson, topics: chosen, objectives: meta?.objectives || [], steps: meta?.practicalSteps || [], coverage: ranked[0].coverage };
}

let lessonCache = null;
function lessonMeta(title) {
  if (!lessonCache) {
    lessonCache = new Map();
    try {
      for (const l of require("../../scripts/lessons").NEW_LESSONS) lessonCache.set(l.title, l);
    } catch {
      /* darslar yuklanmasa — maqsadlarsiz davom etiladi */
    }
  }
  return lessonCache.get(title) || null;
}

/** Boshqa (mavzudan uzoq) darslardan tasodifiy mavzular — test chalg'ituvchilari uchun. */
function foreignTopics(lesson, n, seed = 1) {
  const all = getTopicIndex().topics.filter((t) => t.lesson !== lesson && t.keyPoints?.length);
  const out = [];
  let x = seed * 9301 + 49297;
  for (let i = 0; i < n * 3 && out.length < n; i++) {
    x = (x * 9301 + 49297) % 233280;
    const t = all[Math.floor((x / 233280) * all.length)];
    if (t && !out.includes(t)) out.push(t);
  }
  return out;
}

/* Qonun indeksi (modda sarlavhasi va matni). Ishlamasa ham generatorlar
   ishlaydi — havola faqat kod va raqam bilan ko'rsatiladi. */
async function lawState(timeoutMs = 8000) {
  try {
    return await Promise.race([getIndex(), new Promise((r) => setTimeout(() => r(null), timeoutMs))]);
  } catch {
    return null;
  }
}

/** Mavzu havolalarini qonun moddalariga aylantirish (sarlavha va matn bilan). */
function resolveRefs(refs, state, lang, max = 3) {
  const out = [];
  for (const r of refs || []) {
    const num = String(r.article);
    const doc = state?.docs.find((d) => d.lawCode === r.code && d.articleNumber === num);
    const ru = lang === "ru" && doc?.textRu;
    out.push({
      code: r.code,
      article: num,
      law: doc ? (ru ? doc.lawNameRu : doc.lawName) || r.code : r.code,
      title: doc ? (ru ? doc.titleRu : doc.title) || "" : "",
      text: doc ? (ru ? doc.textRu : doc.text) || "" : "",
    });
    if (out.length >= max) break;
  }
  return out;
}

/** "Mehnat kodeksi, 106-modda" / "Трудовой кодекс, статья 106" */
function refLabel(ref, lang) {
  return lang === "ru" ? `${ref.law}, статья ${ref.article}` : `${ref.law}, ${ref.article}-modda`;
}

/** Matnni so'z chegarasida qisqartirish. */
function clip(text = "", max = 220) {
  const s = String(text).replace(/\s+/g, " ").trim();
  return s.length > max ? `${s.slice(0, max).replace(/\s+\S*$/, "")}…` : s;
}

/** Birinchi 1–2 gap. */
function lead(text = "", max = 260) {
  const parts = String(text).replace(/\s+/g, " ").match(/[^.!?]+[.!?]+/g) || [text];
  let out = "";
  for (const p of parts) {
    if (out && out.length + p.length > max) break;
    out += p;
  }
  return clip(out.trim(), max);
}

module.exports = { pickMaterial, foreignTopics, lawState, resolveRefs, refLabel, clip, lead };
