"use strict";
/**
 * O'QITUVCHI REJIMI — bilim manbalari (2026-10-15).
 *
 * Yangi huquqiy matn TO'QILMAYDI. Ikki manba:
 *  1) Sayt darslari (`scripts/lessons`, 124 dars ≈ 1069 mavzu) — har mavzuda
 *     oddiy tildagi tushuntirish, misol, asosiy fikrlar va bazadan tekshirilgan
 *     qonun havolalari. Mavzular dars tartibida (oddiydan murakkabga).
 *  2) Test bazasi (`Quiz`, admin tomonidan kiritilgan savollar + izohlar).
 *
 * Mavzu savoli: "«X» mavzusiga qaysi fikr tegishli?" — to'g'ri variant shu
 * mavzuning asosiy fikri, qolganlari BOSHQA sohalar mavzularining asosiy
 * fikrlari. Hammasi tekshirilgan haqiqiy jumlalar, shuning uchun noto'g'ri
 * huquqiy da'vo eshitilmaydi. Savol identifikatordan qayta tiklanadi
 * (seed bilan) — to'g'ri javob mijozga yuborilmaydi.
 */
const { Quiz } = require("../../models");

const AREAS = [
  { key: "constitution", uz: "Konstitutsiya", ru: "Конституция", quiz: "Konstitutsiya asoslari" },
  { key: "labor", uz: "Mehnat huquqi", ru: "Трудовое право", quiz: "Mehnat huquqi" },
  { key: "family", uz: "Oila huquqi", ru: "Семейное право", quiz: "Oila huquqi" },
  { key: "inheritance", uz: "Meros huquqi", ru: "Наследственное право", quiz: "Meros huquqi" },
  { key: "civil", uz: "Fuqarolik huquqi", ru: "Гражданское право", quiz: "Fuqarolik huquqi va shartnomalar" },
  { key: "contracts", uz: "Shartnomalar", ru: "Договоры", quiz: "Fuqarolik huquqi va shartnomalar" },
  { key: "housing", uz: "Uy-joy va yer", ru: "Жильё и земля", quiz: "Yer va ko'chmas mulk" },
  { key: "consumer", uz: "Iste'molchi huquqlari", ru: "Права потребителей", quiz: "Iste'molchi huquqlari" },
  { key: "criminal", uz: "Jinoyat huquqi", ru: "Уголовное право", quiz: "Jinoiy kodeks" },
  { key: "administrative", uz: "Ma'muriy javobgarlik", ru: "Административная ответственность", quiz: "Ma'muriy javobgarlik" },
  { key: "process", uz: "Sud jarayoni", ru: "Судебный процесс", quiz: "Sudga murojaat va hujjatlar" },
  { key: "tax", uz: "Soliq", ru: "Налоги", quiz: null },
  { key: "special", uz: "Maxsus mavzular", ru: "Особые темы", quiz: null },
];
const AREA = new Map(AREAS.map((a) => [a.key, a]));

let topicsByArea = null;
function topics() {
  if (topicsByArea) return topicsByArea;
  topicsByArea = new Map(AREAS.map((a) => [a.key, []]));
  try {
    const lessons = [...require("../../scripts/lessons").NEW_LESSONS].sort((a, b) => (a.order || 0) - (b.order || 0));
    for (const l of lessons) {
      const list = topicsByArea.get(l.category);
      if (!list) continue;
      for (const s of l.sections) {
        if (s.keyPoints?.length >= 2 && s.text) list.push({ lesson: l.title, ...s, lawRefs: s.lawRefs || [] });
      }
    }
  } catch (err) {
    console.error("Tutor: darslar yuklanmadi:", err.message);
  }
  return topicsByArea;
}

// Mavzular aralash rejimi ("mix") — sohalar navbat bilan
function topicAt(area, pos) {
  const map = topics();
  let key = area;
  let p = Math.max(0, Number(pos) || 0);
  if (area === "mix" || !map.get(area)?.length) {
    const keys = AREAS.map((a) => a.key).filter((k) => map.get(k).length);
    key = keys[p % keys.length];
    p = Math.floor(p / keys.length);
  }
  const list = map.get(key);
  return { area: key, topic: list[p % list.length], index: p % list.length, total: list.length };
}

/* Seed'li tasodif — bir xil qid har doim bir xil savolni beradi. */
function rng(seedStr) {
  let h = 2166136261;
  for (const c of String(seedStr)) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}
function shuffle(arr, rand) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* Mustaqil o'qiladigan asosiy fikr: olmosh bilan boshlanmaydi va yetarli uzun. */
const SELF_CONTAINED = (kp) => kp.split(/\s+/).length >= 4 && !/^(bu|u|ular|shu|bunda|unda|это|он|она)\b/i.test(kp);

/* "«fikr» — bu qaysi mavzuga oid?" Variantlar — SHU sohaning boshqa
   darslaridagi mavzu nomlari (yaqin, lekin aniq farqli). */
function keyPointQuestion(area, pos) {
  const { area: key, topic } = topicAt(area, pos);
  const rand = rng(`kp:${area}:${pos}`);
  const pool = topic.keyPoints.filter(SELF_CONTAINED);
  const fact = (pool.length ? pool : topic.keyPoints)[Math.floor(rand() * (pool.length || topic.keyPoints.length))];
  const list = topics().get(key);
  const wrong = [];
  for (let i = 0; wrong.length < 3 && i < 40; i++) {
    const t = list[Math.floor(rand() * list.length)];
    if (t.lesson !== topic.lesson && t.heading !== topic.heading && !wrong.includes(t.heading) && t.heading.length < 90) wrong.push(t.heading);
  }
  const options = shuffle([topic.heading, ...wrong], rand);
  return {
    id: `kp:${area}:${pos}`,
    q: `«${String(fact).replace(/[.]+$/, "")}» — bu fikr qaysi mavzuga oid?`,
    options,
    correct: options.indexOf(topic.heading),
    explain: `Bu «${topic.heading}» mavzusining asosiy fikri.`,
  };
}

let quizCache = { at: 0, list: [] };
async function quizzes() {
  if (Date.now() - quizCache.at < 10 * 60 * 1000) return quizCache.list;
  const list = await Quiz.find({ published: true }, "title questions").lean().catch(() => quizCache.list);
  quizCache = { at: Date.now(), list };
  return list;
}

async function bankQuestion(area, pos) {
  const title = AREA.get(area)?.quiz;
  if (!title) return null;
  const quiz = (await quizzes()).find((q) => q.title === title);
  if (!quiz?.questions?.length) return null;
  const qi = Math.floor(rng(`qz:${area}:${pos}`)() * quiz.questions.length);
  const q = quiz.questions[qi];
  return { id: `qz:${quiz._id}:${qi}`, q: q.q, options: q.options, correct: q.correct, explain: q.explain || "" };
}

/** Savolni identifikatordan qayta tiklash (baholash uchun). */
async function questionById(id) {
  const [kind, a, b] = String(id || "").split(":");
  if (kind === "kp") return keyPointQuestion(a, Number(b));
  if (kind === "qz") {
    const quiz = (await quizzes()).find((q) => String(q._id) === a);
    const q = quiz?.questions?.[Number(b)];
    return q ? { id, q: q.q, options: q.options, correct: q.correct, explain: q.explain || "" } : null;
  }
  return null;
}

/** Har 2-qadamda (agar soha uchun test bo'lsa) — test bazasidan savol. */
async function questionFor(area, pos) {
  const { area: key } = topicAt(area, pos);
  if (pos % 2 === 1) {
    const bank = await bankQuestion(key, pos);
    if (bank) return bank;
  }
  return keyPointQuestion(area, pos);
}

module.exports = { AREAS, AREA, topicAt, questionFor, questionById };
