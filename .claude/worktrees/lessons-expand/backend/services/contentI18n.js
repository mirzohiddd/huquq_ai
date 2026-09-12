"use strict";
/**
 * KONTENT TARJIMASI — Lesson / Quiz / LegalChunk uchun.
 *
 * `translator.js` umumiy (matn ro'yxatini tarjima qiladi), bu modul esa
 * shu loyihaning ANIQ tuzilmalarini biladi: darsning bo'limlari, testning
 * savol-variantlari, moddaning sarlavha va matni.
 *
 * Har bir funksiya bitta hujjatning (yoki ro'yxatning) BARCHA tarjima
 * kerak matnlarini yig'ib, `translateMany`ga BIR MARTA beradi — shunda
 * AI so'rovlari soni minimal bo'ladi (masalan 5 bo'limli dars uchun
 * 11 ta alohida so'rov emas, 1-2 ta).
 *
 * Hech bir funksiya xato tashlamaydi: tarjima bo'lmasa manba matn
 * qaytadi (translator.js dagi asosiy qoida).
 */
const { translateMany, SUPPORTED } = require("./translator");

/* ── Ichki yordamchi: yig'ish → tarjima → joyiga qaytarish ──
   `collect` matnlarni to'playdi va har biri uchun "qaytarish"
   funksiyasini beradi. Shu tarzda ixtiyoriy chuqurlikdagi tuzilma
   bilan ishlash mumkin. */
function makeCollector() {
  const texts = [];
  const setters = [];
  return {
    /** Matnni tarjimaga qo'shadi; natija `set(value)` orqali qaytadi */
    add(value, set) {
      if (typeof value === "string" && value.trim()) {
        texts.push(value);
        setters.push(set);
      }
    },
    async run(targetLang) {
      if (!texts.length) return;
      const out = await translateMany(texts, targetLang);
      out.forEach((value, i) => setters[i](value));
    },
  };
}

/* ═══════════════════ DARS ═══════════════════ */

/**
 * Bitta darsni tarjima qiladi (bo'limlari bilan birga).
 * @param {object} lesson — `.lean()` qilingan oddiy obyekt
 */
async function translateLesson(lesson, targetLang) {
  if (!lesson || !SUPPORTED.includes(targetLang)) return lesson;

  const out = {
    ...lesson,
    objectives: [...(lesson.objectives || [])],
    practicalSteps: [...(lesson.practicalSteps || [])],
    sections: (lesson.sections || []).map((s) => ({
      ...s,
      keyPoints: [...(s.keyPoints || [])],
    })),
  };
  const c = makeCollector();

  c.add(out.title, (v) => (out.title = v));
  c.add(out.desc, (v) => (out.desc = v));

  // Dars maqsadlari va amaliy qadamlar
  (out.objectives || []).forEach((o, i) =>
    c.add(o, (v) => (out.objectives[i] = v)),
  );
  (out.practicalSteps || []).forEach((o, i) =>
    c.add(o, (v) => (out.practicalSteps[i] = v)),
  );

  out.sections.forEach((sec) => {
    c.add(sec.heading, (v) => (sec.heading = v));
    // `html` — tayyor HTML (yangi darslar), `text` — eski darslar.
    // Ikkalasi ham tarjima qilinadi; teglar promptda himoyalangan.
    c.add(sec.html, (v) => (sec.html = v));
    c.add(sec.text, (v) => (sec.text = v));
    // Pedagogik qismlar
    c.add(sec.example, (v) => (sec.example = v));
    c.add(sec.warning, (v) => (sec.warning = v));
    (sec.keyPoints || []).forEach((k, i) =>
      c.add(k, (v) => (sec.keyPoints[i] = v)),
    );
  });

  await c.run(targetLang);
  return out;
}

/**
 * Darslar RO'YXATI — faqat sarlavha va tavsif tarjima qilinadi.
 * Bo'lim matnlari ataylab tegilmaydi: ro'yxatda ular ko'rsatilmaydi,
 * lekin tarjima qilinsa har bir ro'yxat so'rovi o'nlab AI chaqiruviga
 * aylanib ketardi. To'liq matn dars OCHILGANDA tarjima qilinadi.
 */
async function translateLessonList(lessons, targetLang) {
  if (!Array.isArray(lessons) || !lessons.length) return lessons;
  if (!SUPPORTED.includes(targetLang)) return lessons;

  const copies = lessons.map((l) => ({ ...l }));
  const c = makeCollector();
  copies.forEach((l) => {
    c.add(l.title, (v) => (l.title = v));
    c.add(l.desc, (v) => (l.desc = v));
  });
  await c.run(targetLang);
  return copies;
}

/* ═══════════════════ TEST ═══════════════════ */

/**
 * Bitta testni to'liq tarjima qiladi: sarlavha, tavsif, savollar,
 * variantlar va izohlar.
 *
 * ⚠️ `correct` (to'g'ri javob indeksi) TEGILMAYDI — u raqam, va
 * variantlar TARTIBI o'zgarmaganligi uchun indeks to'g'ri qoladi.
 * Variantlar tartibi o'zgarmasligi muhim, shuning uchun ular
 * ro'yxat sifatida emas, har biri alohida matn sifatida tarjima
 * qilinadi (AI ro'yxatni qayta tartiblab yuborishi mumkin edi).
 */
async function translateQuiz(quiz, targetLang) {
  if (!quiz || !SUPPORTED.includes(targetLang)) return quiz;

  const out = {
    ...quiz,
    questions: (quiz.questions || []).map((q) => ({
      ...q,
      options: [...(q.options || [])],
    })),
  };
  const c = makeCollector();

  c.add(out.title, (v) => (out.title = v));
  c.add(out.desc, (v) => (out.desc = v));

  out.questions.forEach((q) => {
    c.add(q.q, (v) => (q.q = v));
    c.add(q.explain, (v) => (q.explain = v));
    q.options.forEach((opt, oi) => {
      c.add(opt, (v) => (q.options[oi] = v));
    });
  });

  await c.run(targetLang);
  return out;
}

/**
 * Testlar RO'YXATI.
 *
 * DIQQAT: bu yerda savollar HAM tarjima qilinadi, chunki frontend
 * (`pages/Tests.jsx`) testni ro'yxat so'rovidan olingan ma'lumot bilan
 * boshlaydi — alohida "bitta test" so'rovi yubormaydi. Agar faqat
 * sarlavha tarjima qilinsa, test ichi o'zbekcha qolib ketardi.
 */
async function translateQuizList(quizzes, targetLang) {
  if (!Array.isArray(quizzes) || !quizzes.length) return quizzes;
  if (!SUPPORTED.includes(targetLang)) return quizzes;

  const copies = quizzes.map((q) => ({
    ...q,
    questions: (q.questions || []).map((qq) => ({
      ...qq,
      options: [...(qq.options || [])],
    })),
  }));

  const c = makeCollector();
  copies.forEach((quiz) => {
    c.add(quiz.title, (v) => (quiz.title = v));
    c.add(quiz.desc, (v) => (quiz.desc = v));
    quiz.questions.forEach((q) => {
      c.add(q.q, (v) => (q.q = v));
      c.add(q.explain, (v) => (q.explain = v));
      q.options.forEach((opt, oi) => {
        c.add(opt, (v) => (q.options[oi] = v));
      });
    });
  });
  await c.run(targetLang);
  return copies;
}

/* ═══════════════════ QONUN MODDALARI ═══════════════════ */

/**
 * Moddalar ro'yxati — FAQAT sarlavhalar (`title`).
 *
 * Nima uchun matn emas: bitta sahifada 40 tagacha modda keladi va har
 * birining matni 500-3000 belgi — bu bitta so'rovda ~80 000 belgi
 * degani, ya'ni o'nlab AI chaqiruvi va uzoq kutish. Kutubxonada modda
 * matni faqat foydalanuvchi uni OCHGANDA ko'rinadi, shuning uchun
 * matn `translateArticleText()` orqali alohida, kerak bo'lgandagina
 * tarjima qilinadi.
 */
async function translateArticleList(items, targetLang) {
  if (!Array.isArray(items) || !items.length) return items;
  if (!SUPPORTED.includes(targetLang)) return items;

  const copies = items.map((a) => ({ ...a }));
  const c = makeCollector();
  copies.forEach((a) => {
    c.add(a.title, (v) => (a.title = v));
    c.add(a.lawName, (v) => (a.lawName = v));
  });
  await c.run(targetLang);
  return copies;
}

/** Bitta moddaning sarlavhasi va to'liq matni */
async function translateArticle(article, targetLang) {
  if (!article || !SUPPORTED.includes(targetLang)) return article;
  const out = { ...article };
  const c = makeCollector();
  c.add(out.title, (v) => (out.title = v));
  c.add(out.text, (v) => (out.text = v));
  c.add(out.lawName, (v) => (out.lawName = v));
  await c.run(targetLang);
  return out;
}

module.exports = {
  translateLesson,
  translateLessonList,
  translateQuiz,
  translateQuizList,
  translateArticleList,
  translateArticle,
};
