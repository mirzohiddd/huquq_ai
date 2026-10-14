"use strict";
/**
 * OCHIQ DARS VA TEST SAHIFALARI — ma'lumot qatlami (2026-10-14).
 *
 * ⚠️ NIMA UCHUN: darslar (130 ta) va testlar faqat login bilan ochilardi,
 * ya'ni Google "huquq darslik", "huquqiy test" kabi so'rovlarda saytni
 * umuman ko'rmasdi. Endi har bir dars va test uchun OCHIQ, serverda
 * chiziladigan sahifa bor.
 *
 * ⚠️ TARIF TIZIMI BUZILMAYDI: ochiq sahifada darsning faqat KIRISH qismi
 * (maqsadlar, mundarija, birinchi mavzular) va testning bir nechta
 * namunaviy savoli ko'rsatiladi. To'liq kontent avvalgidek tarifga bog'liq.
 */
const { Lesson, Quiz } = require("../../models");

const CACHE_MS = 10 * 60 * 1000;
const cache = new Map();

async function cached(key, load) {
  const hit = cache.get(key);
  if (hit && Date.now() - hit.at < CACHE_MS) return hit.data;
  const data = await load();
  cache.set(key, { at: Date.now(), data });
  return data;
}

/** "Mehnat huquqi asoslari" → "mehnat-huquqi-asoslari" */
function slugify(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[ʻʼ'’`‘]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70);
}

/* Manzil: /dars/mehnat-huquqi-asoslari-<24 belgili id>. Sarlavha
   o'zgarsa ham eski havola ishlaydi — ID bo'yicha topilib 301 qilinadi. */
const slugOf = (doc) => `${slugify(doc.title) || "dars"}-${doc._id}`;
const idOf = (slug) => (/([a-f0-9]{24})$/.exec(String(slug || "")) || [])[1] || null;

/** Modullar (dars kategoriyalari) — tartib va nomlar frontend bilan bir xil. */
const MODULES = [
  ["constitution", "Konstitutsiya va davlat", "Конституция и государство"],
  ["civil", "Fuqarolik huquqi", "Гражданское право"],
  ["contracts", "Shartnomalar", "Договоры"],
  ["family", "Oila huquqi", "Семейное право"],
  ["inheritance", "Meros huquqi", "Наследственное право"],
  ["labor", "Mehnat huquqi", "Трудовое право"],
  ["housing", "Uy-joy va yer", "Жильё и земля"],
  ["consumer", "Iste'molchi huquqlari", "Права потребителей"],
  ["tax", "Soliq va tadbirkorlik", "Налоги и предпринимательство"],
  ["administrative", "Ma'muriy huquq", "Административное право"],
  ["criminal", "Jinoyat huquqi", "Уголовное право"],
  ["process", "Sud va himoya", "Суд и защита"],
  ["special", "Maxsus sohalar", "Специальные сферы"],
  ["", "Boshqa mavzular", "Другие темы"],
].map(([key, uz, ru]) => ({ key, uz, ru }));

const moduleOf = (key) => MODULES.find((m) => m.key === key) || MODULES[MODULES.length - 1];

/** Darslar ro'yxati — matnsiz (faqat sarlavha, tavsif, mavzular soni). */
function lessonList() {
  return cached("lessons", () =>
    Lesson.aggregate([
      { $match: { published: true } },
      { $sort: { order: 1, createdAt: 1 } },
      {
        $project: {
          title: 1,
          desc: 1,
          category: 1,
          level: 1,
          updatedAt: 1,
          sectionCount: { $size: "$sections" },
        },
      },
    ]),
  );
}

function lessonById(id) {
  return cached(`lesson:${id}`, () =>
    Lesson.findOne({ _id: id, published: true })
      .select("title desc objectives category level sections updatedAt createdAt")
      .lean(),
  );
}

function quizList() {
  return cached("quizzes", () =>
    Quiz.aggregate([
      { $match: { published: true } },
      { $sort: { order: 1, createdAt: 1 } },
      { $project: { title: 1, desc: 1, updatedAt: 1, questionCount: { $size: "$questions" } } },
    ]),
  );
}

function quizById(id) {
  return cached(`quiz:${id}`, () =>
    Quiz.findOne({ _id: id, published: true }).select("title desc questions updatedAt").lean(),
  );
}

/** O'qish vaqti (daqiqa) — o'rtacha 180 so'z/daqiqa. */
const readMinutes = (chars) => Math.max(1, Math.round(chars / 5.5 / 180));

module.exports = {
  slugOf,
  idOf,
  MODULES,
  moduleOf,
  lessonList,
  lessonById,
  quizList,
  quizById,
  readMinutes,
};
