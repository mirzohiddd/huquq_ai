"use strict";
/**
 * TESTLAR — ro'yxatdan o'tgan foydalanuvchilar uchun.
 * Kontent admin panelidan (routes/adminContent.js) boshqariladi.
 *
 * ⚠️ XAVFSIZLIK (2026-10-20): mijozga TO'G'RI JAVOB va izoh yuborilmaydi
 * (`publicQuiz`). Javob `POST /:id/answer` da tekshiriladi, yakuniy natija
 * `POST /:id/submit` da SERVERDA hisoblanadi va saqlanadi. Har bir
 * endpoint tarif cheklovini (`allowedIds`) qaytadan tekshiradi — qulflangan
 * testning javobini ID orqali so'rab olib bo'lmaydi.
 */
const router = require("express").Router();
const rateLimit = require("express-rate-limit");
const { Quiz } = require("../models");
const { userGuard } = require("../middleware/auth");
const { attachPlan, lockedResponse, allowedIds } = require("../middleware/planAccess");
const { translateQuiz, translateQuizList } = require("../services/contentI18n");
const progress = require("../services/progressService");
const {
  publicQuiz,
  gradeOne,
  relatedLessons,
  PASS_PERCENT,
} = require("../services/quizGrading");

function langOf(req) {
  const l = String(req.query.lang || "").toLowerCase();
  return ["uz", "ru"].includes(l) ? l : "uz";
}

/** Qulflangan test: savollar umuman yuborilmaydi, faqat soni. */
function stripLocked(test) {
  const count = (test.questions || []).length;
  return { ...test, locked: true, questions: [], questionCount: count };
}

/* Javob tekshirish — bir daqiqada cheklangan (javoblarni ommaviy terib olishga qarshi). */
const answerLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 120,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => req.authUser?.id || req.ip,
  validate: false,
});

/** Test ochiq bo'lsa hujjatini (tarjima bilan) qaytaradi, aks holda javobni o'zi yuboradi. */
async function loadAllowed(req, res) {
  const test = await Quiz.findOne({ _id: req.params.id, published: true }).lean();
  if (!test) {
    res.status(404).json({ error: "Test topilmadi" });
    return null;
  }
  const allowed = await allowedIds(Quiz, req.planConfig.testLimit);
  if (allowed && !allowed.has(String(test._id))) {
    lockedResponse(res, "test", req.planTier);
    return null;
  }
  return translateQuiz(test, langOf(req));
}

const validId = (req, res, next) =>
  /^[a-f0-9]{24}$/i.test(req.params.id) ? next() : res.status(404).json({ error: "Test topilmadi" });

/* GET /api/tests — ro'yxat (javobsiz). Tarif cheklovi bo'lsa birinchi N ta ochiq. */
router.get("/", userGuard, attachPlan, async (req, res) => {
  try {
    const tests = await Quiz.find({ published: true }).sort({ order: 1, createdAt: 1 }).lean();
    const limit = req.planConfig.testLimit;
    const visible =
      limit === null || limit === undefined
        ? tests
        : tests.map((q, i) => (i < limit ? q : stripLocked(q)));
    const translated = await translateQuizList(visible, langOf(req));
    res.json({
      tests: translated.map((q) => (q.locked ? q : publicQuiz(q))),
      plan: { tier: req.planTier, testLimit: limit ?? null },
    });
  } catch (err) {
    console.error("tests list xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* POST /api/tests/check — dars yakunidagi mini-test: [{quizId, i, choice}] */
router.post("/check", userGuard, attachPlan, answerLimiter, async (req, res) => {
  try {
    const items = Array.isArray(req.body?.items) ? req.body.items.slice(0, 20) : [];
    const ids = [...new Set(items.map((x) => String(x.quizId)).filter((x) => /^[a-f0-9]{24}$/i.test(x)))];
    const allowed = await allowedIds(Quiz, req.planConfig.testLimit);
    const quizzes = await Quiz.find({ _id: { $in: ids }, published: true }).lean();
    const byId = new Map(quizzes.map((q) => [String(q._id), q]));
    const results = items.map((x) => {
      const quiz = byId.get(String(x.quizId));
      if (!quiz || (allowed && !allowed.has(String(quiz._id)))) return null;
      const r = gradeOne(quiz, Number(x.i), x.choice);
      return r && { correct: r.correct, correctIndex: r.correctIndex };
    });
    res.json({ results });
  } catch (err) {
    console.error("tests check xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* GET /api/tests/:id — bitta test (javobsiz) */
router.get("/:id", validId, userGuard, attachPlan, async (req, res) => {
  try {
    const test = await loadAllowed(req, res);
    if (test) res.json({ test: publicQuiz(test) });
  } catch (err) {
    console.error("test get xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* POST /api/tests/:id/answer — {i, choice} → to'g'rimi, to'g'ri variant, izoh */
router.post("/:id/answer", validId, userGuard, attachPlan, answerLimiter, async (req, res) => {
  try {
    const test = await loadAllowed(req, res);
    if (!test) return undefined;
    const r = gradeOne(test, Number(req.body?.i), req.body?.choice);
    if (!r) return res.status(400).json({ error: "Savol topilmadi" });
    return res.json(r);
  } catch (err) {
    console.error("test answer xato:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* POST /api/tests/:id/submit — {answers: {i: choice}} → natija SERVERDA hisoblanadi.
   80% dan past bo'lsa shu mavzudagi darslar (tarif bo'yicha qulf holati bilan). */
router.post("/:id/submit", validId, userGuard, attachPlan, answerLimiter, async (req, res) => {
  try {
    const test = await loadAllowed(req, res);
    if (!test) return undefined;
    const answers = req.body?.answers && typeof req.body.answers === "object" ? req.body.answers : {};
    const total = test.questions.length;
    const wrong = [];
    let score = 0;
    test.questions.forEach((_, i) => {
      const r = gradeOne(test, i, answers[i]);
      if (r.correct) score += 1;
      else wrong.push(i);
    });
    const percent = total ? Math.round((score / total) * 100) : 0;
    const passed = percent >= PASS_PERCENT;

    await progress
      .recordQuizResult(req.authUser.id, { quizId: test._id, title: test.title, score, total, source: "web" })
      .catch((e) => console.error("quiz natijasini saqlash xato:", e.message));

    const lessons = passed ? [] : await relatedLessons(test, req.planConfig);
    return res.json({ score, total, percent, passed, passPercent: PASS_PERCENT, wrong, lessons });
  } catch (err) {
    console.error("test submit xato:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

module.exports = router;
