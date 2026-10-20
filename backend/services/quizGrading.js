"use strict";
/**
 * TESTLARNI SERVER TOMONDA BAHOLASH (2026-10-20).
 *
 * ⚠️ XAVFSIZLIK SABABI: avval `GET /api/tests` savollarni TO'G'RI JAVOB
 * (`correct`) va izoh bilan brauzerga yuborardi, natija esa brauzerda
 * hisoblanib `/progress/quiz` ga "score" sifatida yuborilardi. Ya'ni
 * javoblarni DevTools'da ko'rish va istalgan natijani yozish mumkin edi.
 * Endi mijozga faqat savol va variantlar ketadi; to'g'ri javob va izoh
 * javob BERILGANDAN KEYIN, natija esa faqat serverda hisoblanadi.
 */
const { Lesson } = require("../models");
const { allowedIds } = require("../middleware/planAccess");

/** Javobsiz (xavfsiz) nusxa: `i` — savolning asl indeksi (aralashtirilgandan keyin ham). */
function publicQuiz(quiz) {
  return {
    ...quiz,
    questions: (quiz.questions || []).map((q, i) => ({
      i,
      q: q.q,
      situation: q.situation || "",
      options: q.options,
    })),
  };
}

/** Bitta javobni tekshiradi. `choice` — variantning ASL indeksi. */
function gradeOne(quiz, qIndex, choice) {
  const q = (quiz.questions || [])[qIndex];
  if (!q) return null;
  const c = Number(choice);
  return {
    i: qIndex,
    correct: Number.isInteger(c) && c === q.correct,
    correctIndex: q.correct,
    explain: q.explain || "",
  };
}

/* Sarlavhadan modul (Lesson.category) — `category` bo'sh eski testlar uchun.
   Tartib muhim: aniqroq naqsh birinchi. */
const TITLE_MAP = [
  [/iste.?molchi/i, "consumer"],
  [/mehnat|ish haqi|ishdan/i, "labor"],
  [/oila|nikoh|aliment/i, "family"],
  [/meros|vasiyat/i, "inheritance"],
  [/yer|ko.?chmas|uy-joy|ijara/i, "housing"],
  [/konstitutsiya/i, "constitution"],
  [/shartnoma|qarz/i, "contracts"],
  [/fuqarolik/i, "civil"],
  [/ma.?muriy|jarima/i, "administrative"],
  [/sud|himoya|murojaat/i, "process"],
  [/jinoi|jinoyat/i, "criminal"],
  [/soliq/i, "tax"],
];

function categoryOf(quiz) {
  if (quiz.category) return quiz.category;
  const hit = TITLE_MAP.find(([re]) => re.test(quiz.title || ""));
  return hit ? hit[1] : "";
}

/**
 * Shu test moduliga oid darslar (ko'pi bilan 4 ta) — tarif bo'yicha
 * `locked` bayrog'i bilan. ⚠️ Bayroq faqat KO'RSATISH uchun: dars matni
 * baribir `GET /api/lessons/:id` da tarif bo'yicha alohida tekshiriladi.
 */
async function relatedLessons(quiz, planConfig) {
  const category = categoryOf(quiz);
  if (!category) return [];
  const [lessons, allowed] = await Promise.all([
    Lesson.find({ published: true, category })
      .sort({ order: 1, createdAt: 1 })
      .limit(4)
      .select("title desc")
      .lean(),
    allowedIds(Lesson, planConfig?.lessonLimit),
  ]);
  return lessons.map((l) => ({
    _id: String(l._id),
    title: l.title,
    desc: l.desc || "",
    locked: Boolean(allowed && !allowed.has(String(l._id))),
  }));
}

/** O'tish chegarasi: shundan past bo'lsa darslar tavsiya qilinadi. */
const PASS_PERCENT = 80;

module.exports = { publicQuiz, gradeOne, relatedLessons, categoryOf, PASS_PERCENT };
