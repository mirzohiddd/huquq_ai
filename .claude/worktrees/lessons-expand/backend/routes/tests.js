"use strict";
/**
 * TESTLAR — ro'yxatdan o'tgan foydalanuvchilar uchun.
 * Kontent admin panelidan (routes/adminContent.js) boshqariladi;
 * bu yerda faqat o'qish (GET) uchun ochiq endpointlar bor.
 */
const router = require("express").Router();
const { Quiz } = require("../models");
const { userGuard } = require("../middleware/auth");
const { translateQuiz, translateQuizList } = require("../services/contentI18n");

function langOf(req) {
  const l = String(req.query.lang || "").toLowerCase();
  return ["uz", "ru"].includes(l) ? l : "uz";
}

/* GET /api/tests — nashr qilingan testlar ro'yxati, tartib bo'yicha */
router.get("/", userGuard, async (req, res) => {
  try {
    const tests = await Quiz.find({ published: true })
      .sort({ order: 1, createdAt: 1 })
      .lean();
    // Savollar ham tarjima qilinadi: frontend testni shu ro'yxatdagi
    // ma'lumot bilan boshlaydi, alohida so'rov yubormaydi.
    res.json({ tests: await translateQuizList(tests, langOf(req)) });
  } catch (err) {
    console.error("tests list xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* GET /api/tests/:id — bitta test (savollari bilan) */
router.get("/:id", userGuard, async (req, res) => {
  try {
    const test = await Quiz.findOne({
      _id: req.params.id,
      published: true,
    }).lean();
    if (!test) return res.status(404).json({ error: "Test topilmadi" });
    res.json({ test: await translateQuiz(test, langOf(req)) });
  } catch (err) {
    console.error("test get xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

module.exports = router;
