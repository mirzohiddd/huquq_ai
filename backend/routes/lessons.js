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
const { attachLawQuotes } = require("../services/lessonQuotes");
const { getCached, setCached } = require("../utils/queryCache");

/* Foydalanuvchi tanlagan til `?lang=` orqali keladi (frontend
   LangContext'dan). Noto'g'ri/yo'q bo'lsa — "uz" (asosiy til). */
function langOf(req) {
  const l = String(req.query.lang || "").toLowerCase();
  return ["uz", "ru"].includes(l) ? l : "uz";
}

/* ⚠️ TEZLIK (o'lchangan, 2026-09-29): ro'yxat avval har bir darsning
   BARCHA mavzu matnini qaytarardi — 130 dars ≈ 2 MB, jonli serverda
   23 soniya. Kartochkaga esa faqat sarlavha, tavsif, mavzular soni va
   hajm (o'qish vaqti uchun) kerak. Endi sonlar bazaning O'ZIDA
   hisoblanadi (matn tarmoq orqali umuman kelmaydi) va natija qisqa
   muddat keshlanadi. Mavzu matnlari dars ochilganda keladi
   (`GET /lessons/:id`) — frontend buni `summary: true` dan biladi.

   Admin darsni o'zgartirsa kesh darhol tozalanadi (adminContent.js). */
const LIST_TTL = 60 * 1000;
const LESSON_TTL = 5 * 60 * 1000;

async function lessonSummaries() {
  const hit = getCached("lessons:list", LIST_TTL);
  if (hit) return hit;
  const rows = await Lesson.aggregate([
    { $match: { published: true } },
    { $sort: { order: 1, createdAt: 1 } },
    /* Avval hisoblanadi, keyin og'ir maydonlar olib tashlanadi — MongoDB
       bitta $project ichida chiqarish va hisoblashni aralashtirmaydi. */
    {
      $addFields: {
        sectionCount: { $size: { $ifNull: ["$sections", []] } },
        contentChars: {
          $sum: {
            $map: {
              input: { $ifNull: ["$sections", []] },
              in: { $strLenCP: { $ifNull: ["$$this.text", ""] } },
            },
          },
        },
      },
    },
    { $project: { sections: 0, objectives: 0, practicalSteps: 0 } },
  ]);
  setCached("lessons:list", rows);
  return rows;
}

/* GET /api/lessons — nashr qilingan darslar ro'yxati, tartib bo'yicha.
   Tarif cheklovi bo'lsa (bepul tarif) — birinchi N ta dars ochiq,
   qolganlari `locked: true` bilan, matnsiz qaytadi. */
router.get("/", userGuard, attachPlan, async (req, res) => {
  try {
    const lessons = await lessonSummaries();
    const limit = req.planConfig.lessonLimit;
    const hasLimit = limit !== null && limit !== undefined;
    const visible = lessons.map((l, i) => ({
      ...l,
      sections: [],
      summary: true,
      ...(hasLimit && i >= limit ? { locked: true } : {}),
    }));

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
    /* Bazadagi dars (5 daqiqa kesh) — har ochilishda Atlas'dan ~200 KB
       qayta o'qilmasin. Nusxa olinadi: iqtiboslar joyida qo'shiladi. */
    const key = `lessons:one:${req.params.id}`;
    let raw = getCached(key, LESSON_TTL);
    if (!raw) {
      if (!/^[a-f\d]{24}$/i.test(req.params.id)) {
        return res.status(404).json({ error: "Dars topilmadi" });
      }
      raw = await Lesson.findOne({ _id: req.params.id, published: true }).lean();
      if (raw) setCached(key, raw);
    }
    if (!raw) return res.status(404).json({ error: "Dars topilmadi" });
    const lesson = { ...raw, sections: (raw.sections || []).map((sec) => ({ ...sec })) };

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
    await attachLawQuotes(lesson);

    res.json({ lesson: await translateLesson(lesson, langOf(req)) });
  } catch (err) {
    console.error("lesson get xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

module.exports = router;
