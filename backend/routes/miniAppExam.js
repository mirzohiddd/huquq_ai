"use strict";
/**
 * TELEGRAM MINI APP — BO'LIM IMTIHONI (`/api/mini/exam/:unit`).
 *
 * Natijaga yo'naltirilgan metodika: bo'lim darslaridan keyin bilim
 * tekshiriladi; o'tish chegarasidan yuqori — bo'lim o'zlashtirildi, XP (bir
 * marta, xatolarga qarab kamayadi) va keyingi bo'lim ochiladi.
 *  - «Hayotiy asoslar»: 5 dars tanlovi, kamida 4 to'g'ri (`X:<dars>`);
 *  - saytdan qurilgan kurslar: 8 savol (avval saytdagi testlar), 80% (`X:<dars>:<savol>`).
 * Savollar darslardagidan BOSHQA tartibda aralashadi, javob serverda tekshiriladi.
 * `miniAppMore.js` ichida ulanadi (o'sha routerning `?lang=` tarjimasi ishlaydi).
 */
const router = require("express").Router();
const { userGuard } = require("../middleware/auth");
const store = require("../services/miniApp/store");
const content = require("../services/miniApp/content");
const course = require("../services/miniApp/course");
const path = require("../services/miniApp/path");
const runs = require("../services/miniApp/runs");
const { accessOf, planLocked } = require("../services/miniApp/access");

/** Imtihon savollari (to'liq, javoblari bilan — faqat serverda). */
function itemsOf(at, s) {
  if (at.course === "basics") {
    return content.LESSONS.filter((l) => l.unit === at.unit.key).map((l) => ({
      key: content.examKey(l.id), title: l.title, icon: l.icon || at.unit.icon, text: l.story, q: l.choice.q, options: l.choice.options,
    }));
  }
  return course.examItems(s, s.unitByKey.get(at.unit.key));
}
const viewOf = (at, key, options) => (at.course === "basics" ? content.optionView(key, options) : course.optionView(key, options));
const passFor = (at, n) => (at.course === "basics" ? path.BASIC_EXAM_PASS : course.passOf(n));

async function openExam(req, res) {
  const a = await accessOf(req.authUser.id);
  const at = path.locate(a.doc, { unitKey: String(req.params.unit), paid: a.paid, s: a.s });
  if (!at) {
    res.status(404).json({ error: "Bo'lim topilmadi" });
    return null;
  }
  if (at.unit.paywall) {
    planLocked(res);
    return null;
  }
  if (at.unit.exam.status === "locked") {
    res.status(403).json({ error: "Avval bo'limdagi barcha darslarni tugating", locked: true });
    return null;
  }
  const items = itemsOf(at, a.s);
  return { ...a, at, items };
}

router.get("/exam/:unit", userGuard, async (req, res) => {
  try {
    const o = await openExam(req, res);
    if (!o) return;
    const items = o.items.map((x) => ({ key: x.key, title: x.title, icon: x.icon, text: x.text, q: x.q, options: viewOf(o.at, x.key, x.options).texts }));
    const u = o.at.unit;
    res.json({ unit: { key: u.key, title: u.title, level: u.level }, items, pass: passFor(o.at, items.length), passed: o.doc.exams?.[u.key] || null });
  } catch (err) {
    console.error("mini exam:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* Bitta savol: to'g'ri/xato + tahlil (xato «Takrorlash»ga tushmaydi — bu nazorat). */
router.post("/exam/:unit/answer", userGuard, async (req, res) => {
  try {
    const o = await openExam(req, res);
    if (!o) return;
    const q = o.items.find((x) => x.key === String(req.body?.key || ""));
    const view = q && viewOf(o.at, q.key, q.options);
    const opt = view?.pick(req.body?.option);
    if (!opt) return res.status(400).json({ error: "Noto'g'ri so'rov" });
    if (!opt.ok) return res.json({ ok: false }); // imtihonda xato javob ochilmaydi
    const right = q.options.find((x) => x.ok);
    const review = view.texts.map((t) => q.options.find((x) => x.t === t)).map((x) => ({ t: x.t, ok: x.ok, why: x.why }));
    res.json({ ok: opt.ok, why: opt.why, rightText: right.t, rightWhy: right.why, review });
  } catch (err) {
    console.error("mini exam answer:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* Yakun: ball birinchi javoblar bo'yicha SERVERDA hisoblanadi; XP xatolarga qarab. */
router.post("/exam/:unit/finish", userGuard, async (req, res) => {
  try {
    const o = await openExam(req, res);
    if (!o) return;
    const answers = Array.isArray(req.body?.answers) ? req.body.answers : [];
    const total = o.items.length;
    if (answers.length !== total) return res.status(400).json({ error: "Noto'g'ri so'rov" });
    const score = o.items.filter((x, i) => viewOf(o.at, x.key, x.options).pick(answers[i])?.ok).length;
    const pass = passFor(o.at, total);
    const passed = score >= pass;
    const u = o.at.unit;
    const xp = passed ? await store.finishOnce(req.authUser.id, "exams", u.key, runs.xpFor(store.XP.exam, total - score), { score, total }) : 0;
    const doc = await store.getDoc(req.authUser.id);
    res.json({ score, total, pass, passed, xp, maxXp: store.XP.exam, mistakes: total - score, totalXp: doc.xp || 0, unitTitle: u.title, ...store.streakChange(o.doc, doc) });
  } catch (err) {
    console.error("mini exam finish:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

module.exports = router;
