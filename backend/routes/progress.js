"use strict";
/**
 * O'QUV PROGRESSI — sayt uchun HTTP interfeysi.
 *
 * Mantiq bu yerda EMAS, `services/progressService.js` da — chunki
 * Telegram bot ham xuddi shu mantiqni ishlatadi (u HTTP orqali emas,
 * to'g'ridan-to'g'ri chaqiradi). Shu sabab ikkala kanalda progress
 * bir xil qoidalar bo'yicha hisoblanadi.
 */
const router = require("express").Router();
const { userGuard } = require("../middleware/auth");
const progress = require("../services/progressService");

/* GET /api/progress — foydalanuvchining to'liq o'quv holati */
router.get("/", userGuard, async (req, res) => {
  try {
    res.json(await progress.getProgress(req.authUser.id));
  } catch (err) {
    console.error("progress get xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* PATCH /api/progress/lesson/:lessonId — qisman yangilash
   (o'qilgan bo'limlar, urinishlar soni, amaliyot XP'si) */
router.patch("/lesson/:lessonId", userGuard, async (req, res) => {
  try {
    const state = await progress.updateLesson(
      req.authUser.id,
      String(req.params.lessonId),
      req.body || {},
    );
    res.json({ lesson: state });
  } catch (err) {
    console.error("progress patch xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* POST /api/progress/lesson/:lessonId/complete — darsni tugatish */
router.post("/lesson/:lessonId/complete", userGuard, async (req, res) => {
  try {
    const result = await progress.completeLesson(
      req.authUser.id,
      String(req.params.lessonId),
    );
    res.json(result);
  } catch (err) {
    console.error("progress complete xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* POST /api/progress/practice — amaliyot topshirig'i XP'si */
router.post("/practice", userGuard, async (req, res) => {
  try {
    const { lessonId, type, xp } = req.body || {};
    if (!lessonId || !type)
      return res.status(400).json({ error: "lessonId va type kerak" });
    const result = await progress.recordPracticeXp(
      req.authUser.id,
      String(lessonId),
      String(type),
      Number(xp) || 0,
    );
    res.json(result);
  } catch (err) {
    console.error("progress practice xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* POST /api/progress/quiz — Testlar bo'limidagi natija */
router.post("/quiz", userGuard, async (req, res) => {
  try {
    const { quizId, title, score, total } = req.body || {};
    const saved = await progress.recordQuizResult(req.authUser.id, {
      quizId: quizId || undefined,
      title,
      score: Number(score) || 0,
      total: Number(total) || 0,
      source: "web",
    });
    res.json({ result: saved });
  } catch (err) {
    console.error("progress quiz xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

module.exports = router;
