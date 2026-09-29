"use strict";
/**
 * "ODDIY TILDA TUSHUNTIRISH" VA "MISOL" — manbasi saytning O'Z darslari
 * va savol-javob markazi.
 *
 * ⚠️ Tushuntirish bu yerda YARATILMAYDI va AI'dan so'ralmaydi. Darslarning
 * har bir mavzusida `lawRefs` bor — bazadan raqami VA sarlavhasi
 * tekshirilgan modda havolalari (`verifyLessonRefs.js`, 3278/3278). Xuddi
 * shunday savol-javoblarda `refs` (`verifyQaRefs.js`, 174/174). Shu
 * havolalarni teskari aylantirib, "shu moddani tushuntiruvchi mavzular"
 * indeksi quriladi. Moddaga mavzu bo'lmasa — tushuntirish YO'Q deb
 * halol aytiladi (frontend AI yordamchiga yo'naltiradi).
 *
 * Darslar faqat o'zbek tilida; savol-javoblar ikki tilda.
 */
const { getTopicIndex } = require("../localAI/lessonTopics");

let index = null; // Map "CODE:num" → { topics: [], qa: [] }

function build() {
  const map = new Map();
  const slot = (code, num) => {
    const k = `${code}:${num}`;
    if (!map.has(k)) map.set(k, { topics: [], qa: [] });
    return map.get(k);
  };
  try {
    for (const t of getTopicIndex().topics) {
      for (const r of t.lawRefs || []) {
        if (r && r.code && r.article) slot(r.code, String(r.article)).topics.push(t);
      }
    }
  } catch (e) {
    console.warn("Qonunchilik: dars mavzulari indeksi qurilmadi:", e.message);
  }
  try {
    for (const q of require("../qaContent").QUESTIONS) {
      for (const r of q.refs || []) slot(r.code, String(r.article)).qa.push(q);
    }
  } catch (e) {
    console.warn("Qonunchilik: savol-javob indeksi qurilmadi:", e.message);
  }
  return map;
}

function getIndex() {
  if (!index) index = build();
  return index;
}

const topicView = (t) => ({
  lesson: t.lesson || "",
  heading: t.heading || "",
  text: t.text || "",
  example: t.example || "",
  keyPoints: t.keyPoints || [],
  warning: t.warning || "",
});

/**
 * Modda uchun platforma izohi.
 * Eng mos mavzu — havolasi KAM bo'lgani (ya'ni aynan shu moddaga
 * bag'ishlangani): 1 ta havolali mavzu 6 ta havolalidan aniqroq.
 */
function explainArticle(code, num, lang = "uz") {
  const hit = getIndex().get(`${code}:${num}`);
  if (!hit) return { explanation: null, more: [], qa: [] };
  const topics = [...hit.topics].sort(
    (a, b) => (a.lawRefs || []).length - (b.lawRefs || []).length,
  );
  const pick = (v) => (v && typeof v === "object" ? v[lang] || v.uz || "" : v || "");
  return {
    explanation: topics[0] ? topicView(topics[0]) : null,
    more: topics.slice(1, 4).map((t) => ({ lesson: t.lesson, heading: t.heading })),
    qa: hit.qa.slice(0, 4).map((q) => ({
      slug: q.slug,
      q: pick(q.q),
      short: pick(q.short),
    })),
  };
}

/** Hujjatning "muhim moddalari" — darslarda eng ko'p tushuntirilganlari. */
function importantArticles(code, limit = 12) {
  const rows = [];
  for (const [k, v] of getIndex()) {
    const [c, num] = k.split(":");
    if (c !== code) continue;
    rows.push({ num, weight: v.topics.length * 2 + v.qa.length * 3 });
  }
  return rows.sort((a, b) => b.weight - a.weight).slice(0, limit).map((r) => r.num);
}

/** Tushuntirishi bor moddalar to'plami (katalogda belgi uchun). */
function explainedSet(code) {
  const out = new Set();
  for (const k of getIndex().keys()) {
    const [c, num] = k.split(":");
    if (c === code) out.add(num);
  }
  return out;
}

module.exports = { explainArticle, importantArticles, explainedSet };
