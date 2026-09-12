"use strict";
/**
 * DARSLAR — ro'yxatdan o'tgan foydalanuvchilar uchun.
 * Kontent admin panelidan (routes/adminContent.js) boshqariladi;
 * bu yerda faqat o'qish (GET) uchun ochiq endpointlar bor.
 */
const router = require("express").Router();
const { Lesson } = require("../models");
const { userGuard } = require("../middleware/auth");
const {
  attachPlan,
  lockedResponse,
  allowedIds,
} = require("../middleware/planAccess");
const {
  translateLesson,
  translateLessonList,
} = require("../services/contentI18n");

/* Foydalanuvchi tanlagan til `?lang=` orqali keladi (frontend
   LangContext'dan). Noto'g'ri/yo'q bo'lsa — "uz" (asosiy til). */
function langOf(req) {
  const l = String(req.query.lang || "").toLowerCase();
  return ["uz", "ru"].includes(l) ? l : "uz";
}

/**
 * Bo'limlardagi `lawRefs` ni haqiqiy modda matni bilan to'ldiradi.
 * Barcha havolalar BITTA so'rovda olinadi (dars boshiga 1 ta so'rov).
 * Modda topilmasa — havola jim tashlab yuboriladi, dars baribir ochiladi.
 */
async function attachLawQuotes(lesson, lang) {
  const refs = [];
  (lesson.sections || []).forEach((sec) =>
    (sec.lawRefs || []).forEach((r) => {
      if (r?.code && r?.article) refs.push(r);
    }),
  );
  if (!refs.length) return;

  const { LegalChunk } = require("../models");
  const found = await LegalChunk.find({
    $or: refs.map((r) => ({
      lawCode: String(r.code).toUpperCase(),
      articleNumber: String(r.article),
    })),
  })
    .select("lawCode lawName articleNumber title text sourceUrl -_id")
    .lean();

  const map = new Map(found.map((a) => [`${a.lawCode}:${a.articleNumber}`, a]));
  (lesson.sections || []).forEach((sec) => {
    sec.lawQuotes = (sec.lawRefs || [])
      .map((r) => map.get(`${String(r.code).toUpperCase()}:${r.article}`))
      .filter(Boolean)
      .map((a) => ({
        code: a.lawCode,
        lawName: a.lawName,
        articleNumber: a.articleNumber,
        title: a.title,
        // Uzun moddalar darsda o'qishni og'irlashtiradi — qisqartiramiz,
        // to'liq matn kutubxonada (havola beriladi)
        text:
          a.text.length > 700 ? a.text.slice(0, 700).trim() + "…" : a.text,
        truncated: a.text.length > 700,
      }));
  });
}

/**
 * Qulflangan darsdan MATNNI olib tashlaydi.
 *
 * ⚠️ Bu shunchaki UI bezagi emas: ro'yxat endpointi avval har bir darsning
 * BARCHA bo'lim matnini qaytarardi — ya'ni qulf faqat ekranda ko'rinib,
 * kontentning o'zi baribir javobda ketardi. Endi matn umuman yuborilmaydi.
 *
 * Kartochka ma'lumoti (bo'limlar soni, o'qish vaqti) yo'qolmasligi uchun
 * uning O'RNIGA ikkita son qoldiriladi — ular kontentni oshkor qilmaydi.
 */
function stripLocked(lesson) {
  const sections = lesson.sections || [];
  const chars = sections.reduce((n, sec) => n + (sec.text || "").length, 0);
  return {
    ...lesson,
    locked: true,
    sections: [],
    sectionCount: sections.length,
    contentChars: chars,
    objectives: [],
    practicalSteps: [],
  };
}

/* GET /api/lessons — nashr qilingan darslar ro'yxati, tartib bo'yicha.
   Tarif cheklovi bo'lsa (bepul tarif) — birinchi N ta dars ochiq,
   qolganlari `locked: true` bilan, matnsiz qaytadi. */
router.get("/", userGuard, attachPlan, async (req, res) => {
  try {
    const lessons = await Lesson.find({ published: true })
      .sort({ order: 1, createdAt: 1 })
      .lean();

    const limit = req.planConfig.lessonLimit;
    const visible =
      limit === null || limit === undefined
        ? lessons
        : lessons.map((l, i) => (i < limit ? l : stripLocked(l)));

    // Ro'yxatda faqat sarlavha/tavsif tarjima qilinadi — bo'lim
    // matnlari dars ochilganda (pastdagi endpoint) o'giriladi.
    res.json({
      lessons: await translateLessonList(visible, langOf(req)),
      plan: { tier: req.planTier, lessonLimit: limit ?? null },
    });
  } catch (err) {
    console.error("lessons list xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* GET /api/lessons/:id — bitta dars (to'liq bo'limlari bilan) */
router.get("/:id", userGuard, attachPlan, async (req, res) => {
  try {
    const lesson = await Lesson.findOne({
      _id: req.params.id,
      published: true,
    }).lean();
    if (!lesson) return res.status(404).json({ error: "Dars topilmadi" });

    /* Tarif cheklovi — ochiq darslar ro'yxati RO'YXAT bilan bir xil
       tartibda hisoblanadi, shuning uchun ekranda ochiq ko'ringan dars
       shu yerda ham ochiq bo'ladi. */
    const allowed = await allowedIds(Lesson, req.planConfig.lessonLimit);
    if (allowed && !allowed.has(String(lesson._id))) {
      return lockedResponse(res, "lesson", req.planTier);
    }

    /* Bo'limlardagi qonun havolalarini JONLI matn bilan to'ldiramiz.
       Dars faqat {code, article} saqlaydi — matn bazadan olinadi,
       shunda qonun yangilanganda iqtibos ham yangilanadi. */
    await attachLawQuotes(lesson, langOf(req));

    res.json({ lesson: await translateLesson(lesson, langOf(req)) });
  } catch (err) {
    console.error("lesson get xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

module.exports = router;
