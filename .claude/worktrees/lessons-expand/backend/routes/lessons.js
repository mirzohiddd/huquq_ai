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

/* GET /api/lessons — nashr qilingan darslar ro'yxati, tartib bo'yicha */
router.get("/", userGuard, async (req, res) => {
  try {
    const lessons = await Lesson.find({ published: true })
      .sort({ order: 1, createdAt: 1 })
      .lean();
    // Ro'yxatda faqat sarlavha/tavsif tarjima qilinadi — bo'lim
    // matnlari dars ochilganda (pastdagi endpoint) o'giriladi.
    res.json({ lessons: await translateLessonList(lessons, langOf(req)) });
  } catch (err) {
    console.error("lessons list xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* GET /api/lessons/:id — bitta dars (to'liq bo'limlari bilan) */
router.get("/:id", userGuard, async (req, res) => {
  try {
    const lesson = await Lesson.findOne({
      _id: req.params.id,
      published: true,
    }).lean();
    if (!lesson) return res.status(404).json({ error: "Dars topilmadi" });

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
