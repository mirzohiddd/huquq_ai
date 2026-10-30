"use strict";
/**
 * TELEGRAM MINI APP — BO'LIM IMTIHONI (`/api/mini/exam/:unit`).
 *
 * Natijaga yo'naltirilgan metodika: bo'limning 5 ta darsidan keyin bilim
 * tekshiriladi; kamida `EXAM_PASS` ta to'g'ri javob — bo'lim o'zlashtirildi,
 * +XP (bir marta) va keyingi bo'lim ochiladi. Savollar darslardagidan BOSHQA
 * tartibda aralashadi (`X:` kaliti), javoblar serverda tekshiriladi.
 * `miniAppMore.js` ichida ulanadi (o'sha routerning `?lang=` tarjimasi ishlaydi).
 */
const router = require("express").Router();
const { userGuard } = require("../middleware/auth");
const store = require("../services/miniApp/store");
const content = require("../services/miniApp/content");

const unitLessons = (unit) => content.LESSONS.filter((l) => l.unit === unit);

async function openExam(req, res) {
  const unit = content.UNITS.find((u) => u.key === String(req.params.unit));
  if (!unit) {
    res.status(404).json({ error: "Bo'lim topilmadi" });
    return null;
  }
  const doc = await store.getDoc(req.authUser.id);
  if (!store.examOpen(doc, unit.key)) {
    res.status(403).json({ error: "Avval bo'limdagi barcha darslarni tugating", locked: true });
    return null;
  }
  return { unit, doc };
}

router.get("/exam/:unit", userGuard, async (req, res) => {
  try {
    const o = await openExam(req, res);
    if (!o) return;
    const items = unitLessons(o.unit.key).map((l) => ({
      key: content.examKey(l.id),
      title: l.title,
      icon: l.icon || o.unit.icon,
      text: l.story,
      q: l.choice.q,
      options: content.optionView(content.examKey(l.id), l.choice.options).texts,
    }));
    res.json({ unit: { key: o.unit.key, title: o.unit.title, level: o.unit.level }, items, pass: store.EXAM_PASS, passed: o.doc.exams?.[o.unit.key] || null });
  } catch (err) {
    console.error("mini exam:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* Bitta savol: to'g'ri/xato + tahlil (xato «Takrorlash»ga tushmaydi — bu nazorat). */
router.post("/exam/:unit/answer", userGuard, async (req, res) => {
  try {
    if (!(await openExam(req, res))) return;
    const key = String(req.body?.key || "");
    const q = key.startsWith("X:") && content.questionByKey(key);
    const opt = q && content.optionView(key, q.options).pick(req.body?.option);
    if (!opt) return res.status(400).json({ error: "Noto'g'ri so'rov" });
    const right = q.options.find((x) => x.ok);
    res.json({ ok: opt.ok, why: opt.why, rightText: right.t, rightWhy: right.why, review: content.reviewOf(key, q.options) });
  } catch (err) {
    console.error("mini exam answer:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* Yakun: ball birinchi javoblar bo'yicha SERVERDA hisoblanadi. */
router.post("/exam/:unit/finish", userGuard, async (req, res) => {
  try {
    const o = await openExam(req, res);
    if (!o) return;
    const lessons = unitLessons(o.unit.key);
    const answers = Array.isArray(req.body?.answers) ? req.body.answers : [];
    if (answers.length !== lessons.length) return res.status(400).json({ error: "Noto'g'ri so'rov" });
    const score = lessons.filter((l, i) => content.optionView(content.examKey(l.id), l.choice.options).pick(answers[i])?.ok).length;
    const passed = score >= store.EXAM_PASS;
    const xp = passed ? await store.finishOnce(req.authUser.id, "exams", o.unit.key, store.XP.exam, { score }) : 0;
    const doc = await store.getDoc(req.authUser.id);
    res.json({ score, total: lessons.length, pass: store.EXAM_PASS, passed, xp, totalXp: doc.xp || 0, unitTitle: o.unit.title });
  } catch (err) {
    console.error("mini exam finish:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

module.exports = router;
