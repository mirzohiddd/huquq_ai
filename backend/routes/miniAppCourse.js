"use strict";
/**
 * TELEGRAM MINI APP — saytdagi darslardan qurilgan KURSLAR (`/api/mini`).
 *
 *   GET  /c/:id            — o'yin-dars (mavzu kartalari + tekshiruv savollari)
 *   POST /c/:id/answer     — savol javobi (xato → «Takrorlash» va kamroq XP)
 *   POST /c/:id/complete   — yakun: barcha savollar to'g'ri yechilgan bo'lishi shart
 *   POST /chest/:unit      — bo'lim sandig'i (tasodifiy 1–20 XP, bir marta; ochilmaguncha keyingi dars yopiq)
 *   GET  /plans · POST /order — mini ilova ichidagi tariflar va buyurtma
 * `miniApp.js` ichida ulanadi (o'sha routerning `?lang=` tarjimasi ishlaydi).
 */
const router = require("express").Router();
const { userGuard } = require("../middleware/auth");
const store = require("../services/miniApp/store");
const course = require("../services/miniApp/course");
const path = require("../services/miniApp/path");
const runs = require("../services/miniApp/runs");
const { quotesOf } = require("../services/miniApp/explain");
const { accessOf, planLocked } = require("../services/miniApp/access");
const hearts = require("../services/miniApp/hearts");

const fail = (res, err, where) => {
  console.error(`mini ${where}:`, err.message);
  res.status(500).json({ error: "Server xatosi" });
};

async function openCourseLesson(req, res) {
  const a = await accessOf(req.authUser.id);
  const l = a.s.lessons.get(String(req.params.id));
  if (!l) {
    res.status(404).json({ error: "Dars topilmadi" });
    return null;
  }
  const acc = path.lessonAccess(a.doc, l.id, a.paid, a.s);
  if (!acc.ok) {
    if (acc.why === "plan") planLocked(res);
    else res.status(403).json({ error: "Avval oldingi darsni tugating", locked: true });
    return null;
  }
  return { ...a, l, at: acc.at };
}

router.get("/c/:id", userGuard, async (req, res) => {
  try {
    const o = await openCourseLesson(req, res);
    if (!o || !hearts.guard(o.doc, res)) return; // yurakcha yo'q — dars ochilmaydi
    await runs.start(req.authUser.id, o.l.id);
    const lesson = course.publicLesson(o.l, o.at.unit);
    // Har bir mavzu kartasiga qonundan JONLI iqtibos (raqam matnga yozilmaydi)
    const quotes = await Promise.all(o.l.cards.map((c) => quotesOf(c.refs)));
    lesson.cards.forEach((c, i) => (c.quotes = quotes[i].slice(0, 2)));
    res.json({ lesson, done: !!o.doc.lessons?.[o.l.id] });
  } catch (err) {
    fail(res, err, "course lesson");
  }
});

router.post("/c/:id/answer", userGuard, async (req, res) => {
  try {
    const o = await openCourseLesson(req, res);
    if (!o || !hearts.guard(o.doc, res)) return;
    const i = Number(req.body?.i);
    const q = o.l.quiz[i];
    const key = course.qKey(o.l.id, i);
    const opt = q && course.optionView(key, q.options).pick(req.body?.option);
    if (!opt) return res.status(400).json({ error: "Noto'g'ri so'rov" });
    if (opt.ok) await runs.solved(req.authUser.id, o.l.id, i);
    else {
      await runs.miss(req.authUser.id, o.l.id);
      if (!o.doc.lessons?.[o.l.id]) await store.addMistake(req.authUser.id, key);
    }
    // ⚠️ Xato javobda to'g'ri javob, izohlar va variantlar tahlili YUBORILMAYDI —
    // foydalanuvchi mavzuni qayta o'qib, javobni o'zi topishi kerak (`card` — qaytiladigan karta).
    if (!opt.ok) return res.json({ ok: false, card: q.card ?? null, hearts: await hearts.lose(req.authUser.id) });
    const right = q.options.find((x) => x.ok);
    const review = course.optionView(key, q.options).texts.map((t) => q.options.find((x) => x.t === t)).map((x) => ({ t: x.t, ok: x.ok, why: x.why }));
    res.json({ ok: opt.ok, why: opt.why, correct: course.optionView(key, q.options).correct, rightText: right.t, rightWhy: right.why, review, quotes: await quotesOf(q.refs) });
  } catch (err) {
    fail(res, err, "course answer");
  }
});

router.post("/c/:id/complete", userGuard, async (req, res) => {
  try {
    const o = await openCourseLesson(req, res);
    if (!o) return;
    const { l } = o;
    const run = runs.of(o.doc, l.id);
    if (!l.quiz.every((_, i) => run.ok.has(String(i)))) return res.status(400).json({ error: "Dars hali yakunlanmagan" });
    const xp = await store.finishOnce(req.authUser.id, "lessons", l.id, runs.xpFor(store.XP.lesson, run.m), { firstTry: run.m === 0, mistakes: run.m });
    await runs.end(req.authUser.id, l.id);
    const doc = await store.getDoc(req.authUser.id);
    const s = store.summaryOf(doc);
    const unit = o.s.unitByKey.get(l.unit);
    const allDone = unit.lessons.every((id) => doc.lessons?.[id]);
    const exam = allDone && !doc.exams?.[unit.key] ? unit.key : null;
    const next = path.nextAfter(o.at, l.id);
    res.json({
      unitDone: xp > 0 && allDone, unitTitle: unit.title,
      xp, maxXp: store.XP.lesson, mistakes: run.m, ...store.streakChange(o.doc, doc),
      totalXp: s.xp, level: s.level, streak: s.streak,
      goals: l.goals, quotes: await quotesOf(l.cards.flatMap((c) => c.refs).slice(0, 2)),
      next: exam ? null : next?.id || null, exam, course: l.course,
      newBadges: s.badges.filter((x) => x.earned).map((x) => x.id),
    });
  } catch (err) {
    fail(res, err, "course complete");
  }
});

/* Sandiq: bo'limning dastlabki darslari tugagach — bir marta bonus XP */
router.post("/chest/:unit", userGuard, async (req, res) => {
  try {
    const a = await accessOf(req.authUser.id);
    const at = path.locate(a.doc, { unitKey: String(req.params.unit), paid: a.paid, s: a.s });
    if (!at?.unit.chest) return res.status(404).json({ error: "Sandiq topilmadi" });
    if (at.unit.paywall) return planLocked(res);
    if (at.unit.chest.status === "locked") return res.status(403).json({ error: "Avval darslarni tugating", locked: true });
    // XP serverda tasodifiy tanlanadi (mijoz miqdorni bera olmaydi); bir marta
    const prize = path.chestXp();
    const xp = await store.finishOnce(req.authUser.id, "chests", at.unit.key, prize, { xp: prize });
    const doc = await store.getDoc(req.authUser.id);
    res.json({ xp, totalXp: doc.xp || 0, ...store.streakChange(a.doc, doc) });
  } catch (err) {
    fail(res, err, "chest");
  }
});

router.use(require("./miniAppPlans")); // tariflar va buyurtma

module.exports = router;
