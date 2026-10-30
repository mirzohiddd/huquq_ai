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
const { explain, quotesOf } = require("../services/miniApp/explain");
const { localizeJson } = require("../services/miniApp/i18n");
const { warmAll } = require("../services/miniApp/i18n");

router.use(localizeJson); // ?lang=ru — javob matnlari rus tilida (kesh)

const fail = (res, err, where) => {
  console.error(`mini ${where}:`, err.message);
  res.status(500).json({ error: "Server xatosi" });
};

/* GET /api/mini/situations — toifalar (har biri 5 vaziyat) va yechilganlari */
router.get("/situations", userGuard, async (req, res) => {
  try {
    const doc = await store.getDoc(req.authUser.id);
    const item = (s) => ({ id: s.id, title: s.title, icon: s.icon || null, steps: s.steps.length, done: !!doc.situations?.[s.id], score: doc.situations?.[s.id]?.score ?? null });
    res.json({
      cats: content.SIT_CATS.map((c) => {
        const items = content.SITUATIONS.filter((s) => s.cat === c.key).map(item);
        return { ...c, items, done: items.filter((x) => x.done).length };
      }),
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

/* Javob ko'rinishi: to'g'ri/xato, izoh, to'g'ri variant va manba iqtibosi. */
async function verdict(key, options, pub, refs) {
  const view = content.optionView(key, options);
  const opt = view.pick(pub);
  if (!opt) return null;
  const right = options.find((x) => x.ok);
  return { opt, body: { ok: opt.ok, why: opt.why, correct: view.correct, rightText: right.t, rightWhy: right.why, quotes: await quotesOf(refs) } };
}

/* Bitta qaror: oqibat (to'g'ri/xato + nima uchun). Xato — "Takrorlash"ga. */
router.post("/situation/:id/step", userGuard, async (req, res) => {
  try {
    const s = content.situationById.get(String(req.params.id));
    const idx = Number(req.body?.step);
    const st = s?.steps[idx];
    const v = st && (await verdict(content.stepKey(s.id, idx), st.options, req.body?.option, s.refs));
    if (!v) return res.status(400).json({ error: "Noto'g'ri so'rov" });
    if (!v.opt.ok) await store.addMistake(req.authUser.id, content.stepKey(s.id, idx));
    res.json(v.body);
  } catch (err) {
    fail(res, err, "step");
  }
});

/* Vaziyat yakuni: ball serverda hisoblanadi (birinchi tanlovlar bo'yicha). */
router.post("/situation/:id/finish", userGuard, async (req, res) => {
  try {
    const s = content.situationById.get(String(req.params.id));
    const answers = Array.isArray(req.body?.answers) ? req.body.answers : [];
    if (!s || answers.length !== s.steps.length) return res.status(400).json({ error: "Noto'g'ri so'rov" });
    const score = s.steps.filter((st, i) => content.optionView(content.stepKey(s.id, i), st.options).pick(answers[i])?.ok).length;
    const xp = await store.finishOnce(req.authUser.id, "situations", s.id, store.XP.situation, { score });
    const doc = await store.getDoc(req.authUser.id);
    res.json({ score, total: s.steps.length, xp, totalXp: doc.xp || 0 });
  } catch (err) {
    fail(res, err, "finish");
  }
});

/* GET /api/mini/review — xato qilingan savollar; xato bo'lmasa — tugatilgan darslardan mashq */
router.get("/review", userGuard, async (req, res) => {
  try {
    const doc = await store.getDoc(req.authUser.id);
    const done = content.LESSONS.filter((l) => doc.lessons?.[l.id]);
    const mistakes = (doc.mistakes || []).map(content.questionByKey).filter(Boolean);
    const practice = !mistakes.length;
    const list = practice ? done.slice(-10).map((l) => content.questionByKey(content.lessonKey(l.id))) : mistakes.slice(0, 20);
    const items = list.map((q) => ({ key: q.key, title: q.title, icon: q.icon || null, text: q.text, q: q.q, options: content.optionView(q.key, q.options).texts }));
    res.json({ items, practice, mistakes: mistakes.length, topics: done.length, reviewed: doc.reviewed || 0, week: store.weekDots(doc) });
  } catch (err) {
    fail(res, err, "review");
  }
});

router.post("/review/answer", userGuard, async (req, res) => {
  try {
    const key = String(req.body?.key || "");
    const q = content.questionByKey(key);
    const v = q && (await verdict(key, q.options, req.body?.option, q.refs));
    if (!v) return res.status(400).json({ error: "Noto'g'ri so'rov" });
    const xp = v.opt.ok ? await store.fixMistake(req.authUser.id, key) : 0;
    if (!v.opt.ok) await store.addMistake(req.authUser.id, key);
    res.json({ ...v.body, xp });
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

// Ruscha tarjimani oldindan tayyorlash — faqat keshda yo'qlari (keyingi ishga tushishlarda AI chaqirilmaydi)
setTimeout(() => warmAll().then((r) => r.translated && console.log("Mini app ruscha tarjima:", r)).catch(() => {}), 90 * 1000).unref();

module.exports = router;
