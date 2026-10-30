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
const runs = require("../services/miniApp/runs");
const path = require("../services/miniApp/path");
const { accessOf } = require("../services/miniApp/access");
const hearts = require("../services/miniApp/hearts");

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

router.get("/situation/:id", userGuard, async (req, res) => {
  try {
    const s = content.situationById.get(String(req.params.id));
    if (!s) return res.status(404).json({ error: "Vaziyat topilmadi" });
    if (!hearts.guard(await store.getDoc(req.authUser.id), res)) return;
    res.json({ situation: content.publicSituation(s) });
  } catch (err) {
    fail(res, err, "situation");
  }
});

/* Javob ko'rinishi: to'g'ri/xato, izoh, to'g'ri variant va manba iqtibosi. */
async function verdict(key, options, pub, refs) {
  const view = content.optionView(key, options);
  const opt = view.pick(pub);
  if (!opt) return null;
  const right = options.find((x) => x.ok);
  const review = content.reviewOf(key, options); // har bir variant nega to'g'ri/xato
  return { opt, body: { ok: opt.ok, why: opt.why, correct: view.correct, rightText: right.t, rightWhy: right.why, review, quotes: await quotesOf(refs) } };
}

/* Bitta qaror: oqibat (to'g'ri/xato + nima uchun). Xato — "Takrorlash"ga. */
router.post("/situation/:id/step", userGuard, async (req, res) => {
  try {
    const s = content.situationById.get(String(req.params.id));
    const idx = Number(req.body?.step);
    const st = s?.steps[idx];
    const v = st && (await verdict(content.stepKey(s.id, idx), st.options, req.body?.option, s.refs));
    if (!v) return res.status(400).json({ error: "Noto'g'ri so'rov" });
    if (!hearts.guard(await store.getDoc(req.authUser.id), res)) return;
    if (v.opt.ok) return res.json(v.body);
    await store.addMistake(req.authUser.id, content.stepKey(s.id, idx));
    res.json({ ok: false, hearts: await hearts.lose(req.authUser.id) }); // xato qarorda to'g'ri yo'l ochilmaydi
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
    const before = await store.getDoc(req.authUser.id);
    const mistakes = s.steps.length - score; // har bir noto'g'ri qaror XP'ni kamaytiradi
    const xp = await store.finishOnce(req.authUser.id, "situations", s.id, runs.xpFor(store.XP.situation, mistakes), { score });
    const doc = await store.getDoc(req.authUser.id);
    res.json({ score, total: s.steps.length, xp, maxXp: store.XP.situation, mistakes, totalXp: doc.xp || 0, ...store.streakChange(before, doc) });
  } catch (err) {
    fail(res, err, "finish");
  }
});

/* GET /api/mini/review — xato qilingan savollar; xato bo'lmasa — tugatilgan darslardan mashq */
router.get("/review", userGuard, async (req, res) => {
  try {
    const doc = await store.getDoc(req.authUser.id);
    await require("../services/miniApp/course").ready(); // kurs savollari kalitdan topilishi uchun
    // Xatolar QILINGAN TARTIBDA (eng eskisi birinchi); har biri qaysi darsdan
    const mistakes = (doc.mistakes || []).map(content.questionByKey).filter(Boolean);
    const items = mistakes.slice(0, 50).map((q) => {
      const [kind, id] = q.key.split(":");
      return { key: q.key, lesson: kind === "Q" || kind === "X" ? id : null, title: q.title, icon: q.icon || null, text: q.text, q: q.q, options: content.optionView(q.key, q.options).texts };
    });
    const topics = Object.keys(doc.lessons || {}).length;
    res.json({ items, practice: false, mistakes: mistakes.length, topics, reviewed: doc.reviewed || 0, week: store.weekDots(doc) });
  } catch (err) {
    fail(res, err, "review");
  }
});

router.post("/review/answer", userGuard, async (req, res) => {
  try {
    const key = String(req.body?.key || "");
    // Faqat O'Z xatolari takrorlanadi — aks holda yopiq dars savollarini shu yerdan "terib" bo'lardi
    const doc = await store.getDoc(req.authUser.id);
    if (!(doc.mistakes || []).includes(key)) return res.status(404).json({ error: "Bu savol takrorlash ro'yxatida yo'q", gone: true });
    if (!hearts.guard(doc, res)) return;
    const q = content.questionByKey(key);
    const v = q && (await verdict(key, q.options, req.body?.option, q.refs));
    if (!v) return res.status(400).json({ error: "Noto'g'ri so'rov" });
    // Takrorlashda XP BERILMAYDI (faqat ro'yxatdan chiqadi); xato javob ochilmaydi
    if (v.opt.ok) await store.fixMistake(req.authUser.id, key);
    res.json(v.opt.ok ? { ...v.body, xp: 0 } : { ok: false, hearts: await hearts.lose(req.authUser.id) });
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
    const kind = req.body?.kind;
    // ⚠️ Yopiq (tarifli yoki navbati kelmagan) dars savoliga tushuntirish BERILMAYDI —
    // aks holda javoblar va AI kvotasi to'lovsiz olinardi. Ochiq/tugatilgan dars — mumkin.
    if (kind === "course" || kind === "lesson") {
      const a = await accessOf(req.authUser.id);
      if (!path.lessonAccess(a.doc, String(req.body?.id), a.paid, a.s).ok) return res.status(403).json({ error: "Bu dars hali ochilmagan", locked: true });
    }
    const r = await explain({ kind: req.body?.kind, id: req.body?.id, step: req.body?.step }, lang);
    if (!r) return res.status(404).json({ error: "Savol topilmadi" });
    res.json(r);
  } catch (err) {
    fail(res, err, "explain");
  }
});

router.use(require("./miniAppExam")); // bo'lim imtihonlari

// Ruscha tarjimani oldindan tayyorlash — faqat keshda yo'qlari (keyingi ishga tushishlarda AI chaqirilmaydi)
setTimeout(() => warmAll().then((r) => r.translated && console.log("Mini app ruscha tarjima:", r)).catch(() => {}), 90 * 1000).unref();

module.exports = router;
