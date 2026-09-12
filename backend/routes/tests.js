"use strict";
/**
 * TESTLAR — ro'yxatdan o'tgan foydalanuvchilar uchun.
 * Kontent admin panelidan (routes/adminContent.js) boshqariladi;
 * bu yerda faqat o'qish (GET) uchun ochiq endpointlar bor.
 */
const router = require("express").Router();
const { Quiz } = require("../models");
const { userGuard } = require("../middleware/auth");
const {
  attachPlan,
  lockedResponse,
  allowedIds,
} = require("../middleware/planAccess");
const { translateQuiz, translateQuizList } = require("../services/contentI18n");

function langOf(req) {
  const l = String(req.query.lang || "").toLowerCase();
  return ["uz", "ru"].includes(l) ? l : "uz";
}

/**
 * Qulflangan testdan SAVOLLARNI olib tashlaydi.
 * ⚠️ Ro'yxat endpointi savollarni TO'G'RI JAVOBI bilan qaytaradi
 * (frontend testni shu ma'lumot bilan boshlaydi) — qulflangan test uchun
 * ularni yuborish kontentni ham, javoblarni ham oshkor qilardi.
 * Kartochkadagi "N ta savol" yozuvi uchun faqat SON qoldiriladi.
 */
function stripLocked(test) {
  const count = (test.questions || []).length;
  return { ...test, locked: true, questions: [], questionCount: count };
}

/* GET /api/tests — nashr qilingan testlar ro'yxati, tartib bo'yicha.
   Tarif cheklovi bo'lsa — birinchi N ta test ochiq, qolganlari
   `locked: true` bilan, savollarsiz qaytadi. */
router.get("/", userGuard, attachPlan, async (req, res) => {
  try {
    const tests = await Quiz.find({ published: true })
      .sort({ order: 1, createdAt: 1 })
      .lean();

    const limit = req.planConfig.testLimit;
    const visible =
      limit === null || limit === undefined
        ? tests
        : tests.map((q, i) => (i < limit ? q : stripLocked(q)));

    // Savollar ham tarjima qilinadi: frontend testni shu ro'yxatdagi
    // ma'lumot bilan boshlaydi, alohida so'rov yubormaydi.
    res.json({
      tests: await translateQuizList(visible, langOf(req)),
      plan: { tier: req.planTier, testLimit: limit ?? null },
    });
  } catch (err) {
    console.error("tests list xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* GET /api/tests/:id — bitta test (savollari bilan) */
router.get("/:id", userGuard, attachPlan, async (req, res) => {
  try {
    const test = await Quiz.findOne({
      _id: req.params.id,
      published: true,
    }).lean();
    if (!test) return res.status(404).json({ error: "Test topilmadi" });

    const allowed = await allowedIds(Quiz, req.planConfig.testLimit);
    if (allowed && !allowed.has(String(test._id))) {
      return lockedResponse(res, "test", req.planTier);
    }
    res.json({ test: await translateQuiz(test, langOf(req)) });
  } catch (err) {
    console.error("test get xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

module.exports = router;
