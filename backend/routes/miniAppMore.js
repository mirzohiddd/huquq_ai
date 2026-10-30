"use strict";
/**
 * TELEGRAM MINI APP — vaziyatlar, takrorlash, profil, reyting va
 * "Tushuntirib ber" (`/api/mini`). Kirish va dars yo'li — `miniApp.js`.
 */
const router = require("express").Router();
const { userGuard } = require("../middleware/auth");
const { webLimitGuard } = require("../middleware/usageLimit");
const store = require("../services/miniApp/store");
const content = require("../services/miniApp/content");
const { explain } = require("../services/miniApp/explain");

const fail = (res, err, where) => {
  console.error(`mini ${where}:`, err.message);
  res.status(500).json({ error: "Server xatosi" });
};

/* GET /api/mini/situations — ro'yxat (yechilganlari belgilangan) */
router.get("/situations", userGuard, async (req, res) => {
  try {
    const doc = await store.getDoc(req.authUser.id);
    res.json({
      units: content.UNITS,
      items: content.SITUATIONS.map((s) => ({ id: s.id, unit: s.unit, title: s.title, steps: s.steps.length, done: !!doc.situations?.[s.id], score: doc.situations?.[s.id]?.score ?? null })),
    });
  } catch (err) {
    fail(res, err, "situations");
  }
});

router.get("/situation/:id", userGuard, (req, res) => {
  const s = content.situationById.get(String(req.params.id));
  if (!s) return res.status(404).json({ error: "Vaziyat topilmadi" });
  res.json({ situation: content.publicSituation(s) });
});

/* Bitta qaror: oqibat (to'g'ri/xato + nima uchun). Xato — "Takrorlash"ga. */
router.post("/situation/:id/step", userGuard, async (req, res) => {
  try {
    const s = content.situationById.get(String(req.params.id));
    const idx = Number(req.body?.step);
    const st = s?.steps[idx];
    const opt = st?.options[Number(req.body?.option)];
    if (!opt) return res.status(400).json({ error: "Noto'g'ri so'rov" });
    if (!opt.ok) await store.addMistake(req.authUser.id, `S:${s.id}:${idx}`);
    const correct = st.options.findIndex((x) => x.ok);
    res.json({ ok: opt.ok, why: opt.why, correct, rightWhy: st.options[correct].why });
  } catch (err) {
    fail(res, err, "step");
  }
});

/* Vaziyat yakuni: ball serverda hisoblanadi (birinchi tanlovlar bo'yicha). */
router.post("/situation/:id/finish", userGuard, async (req, res) => {
  try {
    const s = content.situationById.get(String(req.params.id));
    const answers = Array.isArray(req.body?.answers) ? req.body.answers.map(Number) : [];
    if (!s || answers.length !== s.steps.length) return res.status(400).json({ error: "Noto'g'ri so'rov" });
    const score = s.steps.filter((st, i) => st.options[answers[i]]?.ok).length;
    const xp = await store.finishOnce(req.authUser.id, "situations", s.id, store.XP.situation, { score });
    const doc = await store.getDoc(req.authUser.id);
    res.json({ score, total: s.steps.length, xp, totalXp: doc.xp || 0 });
  } catch (err) {
    fail(res, err, "finish");
  }
});

/* GET /api/mini/review — avval xato qilingan savollar (javobsiz) */
router.get("/review", userGuard, async (req, res) => {
  try {
    const doc = await store.getDoc(req.authUser.id);
    const items = (doc.mistakes || []).map(content.questionByKey).filter(Boolean).slice(0, 20)
      .map((q) => ({ key: q.key, title: q.title, text: q.text, q: q.q, options: q.options.map((o) => o.t) }));
    res.json({ items, reviewed: doc.reviewed || 0 });
  } catch (err) {
    fail(res, err, "review");
  }
});

router.post("/review/answer", userGuard, async (req, res) => {
  try {
    const key = String(req.body?.key || "");
    const q = content.questionByKey(key);
    const opt = q?.options[Number(req.body?.option)];
    if (!opt) return res.status(400).json({ error: "Noto'g'ri so'rov" });
    const xp = opt.ok ? await store.fixMistake(req.authUser.id, key) : 0;
    const correct = q.options.findIndex((x) => x.ok);
    res.json({ ok: opt.ok, why: opt.why, correct, rightWhy: q.options[correct].why, xp });
  } catch (err) {
    fail(res, err, "review answer");
  }
});

/* GET /api/mini/me — profil, yutuqlar, haftalik natija */
router.get("/me", userGuard, async (req, res) => {
  try {
    const doc = await store.getDoc(req.authUser.id);
    res.json({ name: doc.name || "", ...store.summaryOf(doc) });
  } catch (err) {
    fail(res, err, "me");
  }
});

router.post("/goal", userGuard, async (req, res) => {
  try {
    res.json({ goal: await store.setGoal(req.authUser.id, req.body?.goal) });
  } catch (err) {
    fail(res, err, "goal");
  }
});

/* GET /api/mini/rating — TOP 5 hammaga, qolganlar faqat o'z o'rnini ko'radi */
router.get("/rating", userGuard, async (req, res) => {
  try {
    res.json(await store.rating(req.authUser.id));
  } catch (err) {
    fail(res, err, "rating");
  }
});

/* POST /api/mini/explain { kind: "lesson"|"situation", id, step? } — tarif limiti bilan */
router.post("/explain", userGuard, webLimitGuard, async (req, res) => {
  try {
    const lang = req.body?.lang === "ru" ? "ru" : "uz";
    const r = await explain({ kind: req.body?.kind, id: req.body?.id, step: req.body?.step }, lang);
    if (!r) return res.status(404).json({ error: "Savol topilmadi" });
    res.json(r);
  } catch (err) {
    fail(res, err, "explain");
  }
});

module.exports = router;
