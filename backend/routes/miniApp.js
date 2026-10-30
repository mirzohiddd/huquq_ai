"use strict";
/**
 * TELEGRAM MINI APP — kirish va dars yo'li (`/api/mini`).
 * Vaziyatlar, takrorlash, profil, reyting, tushuntirish — `miniAppMore.js`.
 * Javoblar SERVERDA tekshiriladi (reyting XP'ga qurilgan).
 */
const router = require("express").Router();
const { userGuard } = require("../middleware/auth");
const { loginWithInitData } = require("../services/miniApp/auth");
const store = require("../services/miniApp/store");
const content = require("../services/miniApp/content");
const { quotesOf } = require("../services/miniApp/explain");
const { localizeJson } = require("../services/miniApp/i18n");
const path = require("../services/miniApp/path");
const runs = require("../services/miniApp/runs");
const { accessOf, planLocked } = require("../services/miniApp/access");

const BOT = (process.env.TELEGRAM_BOT_USERNAME || "mening_huquqlarim_bot").replace(/^@/, "");
router.use(localizeJson); // ?lang=ru — javob matnlari rus tilida (kesh)

const fail = (res, err, where) => {
  console.error(`mini ${where}:`, err.message);
  res.status(500).json({ error: "Server xatosi" });
};

/* POST /api/mini/auth { initData } → token (bot orqali ochilgan hisob bilan) */
router.post("/auth", async (req, res) => {
  try {
    const r = await loginWithInitData(String(req.body?.initData || ""));
    if (r.error === "blocked") return res.status(403).json({ error: "Hisobingiz bloklangan" });
    if (r.error) return res.status(401).json({ error: "Telegram ma'lumoti tasdiqlanmadi" });
    if (r.needsRegister) return res.status(404).json({ needsRegister: true, bot: `https://t.me/${BOT}?start=miniapp`, firstName: r.tg.first_name || "" });
    await store.touch(r.user._id, r.name);
    res.json({ token: r.token, name: r.name, lang: r.lang });
  } catch (err) {
    fail(res, err, "auth");
  }
});

/* GET /api/mini/path?course= — kurs yo'li (bo'limlar, sandiq, imtihon) + kurslar ro'yxati + tarif */
router.get("/path", userGuard, async (req, res) => {
  try {
    const a = await accessOf(req.authUser.id);
    const courses = path.coursesOf(a.doc, a.s);
    const course = courses.some((c) => c.key === req.query.course) ? String(req.query.course) : "basics";
    const s = store.summaryOf(a.doc);
    res.json({
      course, courses, units: path.pathOf(a.doc, { course, paid: a.paid, s: a.s }),
      plan: { tier: a.tier, label: a.planLabel, paid: a.paid },
      xp: s.xp, level: s.level, streak: s.streak, todayXp: s.todayXp, goal: s.goal, mistakes: s.mistakes,
    });
  } catch (err) {
    fail(res, err, "path");
  }
});

/* «Hayotiy asoslar» darsi: tartib va tarif bo'yicha ochiqmi */
async function openLesson(req, res) {
  const l = content.lessonById.get(String(req.params.id));
  if (!l) {
    res.status(404).json({ error: "Dars topilmadi" });
    return null;
  }
  const a = await accessOf(req.authUser.id);
  const acc = path.lessonAccess(a.doc, l.id, a.paid, a.s);
  if (!acc.ok) {
    if (acc.why === "plan") planLocked(res);
    else res.status(403).json({ error: "Avval oldingi darsni tugating", locked: true });
    return null;
  }
  return { l, doc: a.doc, at: acc.at };
}

const orderOk = (l, order) => Array.isArray(order) && order.length === l.game.items.length && order.every((v, i) => Number(v) === i);

router.get("/lesson/:id", userGuard, async (req, res) => {
  try {
    const o = await openLesson(req, res);
    if (!o) return;
    await runs.start(req.authUser.id, o.l.id); // yangi urinish — xatolar noldan
    res.json({ lesson: content.publicLesson(o.l), done: !!o.doc.lessons?.[o.l.id] });
  } catch (err) {
    fail(res, err, "lesson");
  }
});

/* Tanlov javobi — to'g'ri/xato + izoh. Xato bo'lsa "Takrorlash"ga tushadi. */
router.post("/lesson/:id/choice", userGuard, async (req, res) => {
  try {
    const o = await openLesson(req, res);
    if (!o) return;
    const view = content.optionView(content.lessonKey(o.l.id), o.l.choice.options);
    const opt = view.pick(req.body?.option);
    if (!opt) return res.status(400).json({ error: "Variant noto'g'ri" });
    if (!opt.ok && !o.doc.lessons?.[o.l.id]) await store.addMistake(req.authUser.id, content.lessonKey(o.l.id));
    await (opt.ok ? runs.solved(req.authUser.id, o.l.id, "c") : runs.miss(req.authUser.id, o.l.id));
    const right = o.l.choice.options.find((x) => x.ok);
    // `quotes` — «Manbani ko'rish» uchun darhol (xotiradagi korpusdan, AI'siz)
    res.json({
      ok: opt.ok, why: opt.why, correct: view.correct, rightText: right.t, rightWhy: right.why,
      review: content.reviewOf(content.lessonKey(o.l.id), o.l.choice.options), // xatolar tahlili
      quotes: await quotesOf(o.l.refs),
    });
  } catch (err) {
    fail(res, err, "choice");
  }
});

/* O'yin tekshiruvi. `reveal: true` — 3 ta urinishdan keyin to'g'ri javobni ko'rsatish. */
router.post("/lesson/:id/game", userGuard, async (req, res) => {
  try {
    const o = await openLesson(req, res);
    if (!o) return;
    const { game } = o.l;
    const b = req.body || {};
    const mark = (ok) => (ok ? runs.solved(req.authUser.id, o.l.id, "g") : runs.miss(req.authUser.id, o.l.id)); // javobni ko'rish ham xato
    if (game.type === "order") {
      const order = Array.isArray(b.order) ? b.order.map(Number) : [];
      const ok = orderOk(o.l, order);
      const right = order.filter((v, i) => v === i).length;
      const solution = ok || b.reveal ? game.items.map((t, id) => ({ id, t })) : undefined;
      await mark(ok && !b.reveal);
      return res.json({ ok, right, total: game.items.length, why: ok || b.reveal ? game.why : undefined, solution });
    }
    const ok = Number(b.line) === game.answer;
    await mark(ok && !b.reveal);
    res.json({ ok, why: ok || b.reveal ? game.why : undefined, answer: ok || b.reveal ? game.answer : undefined });
  } catch (err) {
    fail(res, err, "game");
  }
});

/* Darsni yakunlash: o'yin to'g'ri yechilgan bo'lishi shart; XP faqat birinchi marta. */
router.post("/lesson/:id/complete", userGuard, async (req, res) => {
  try {
    const o = await openLesson(req, res);
    if (!o) return;
    const { l } = o;
    const b = req.body || {};
    const solved = l.game.type === "order" ? orderOk(l, b.order) : Number(b.line) === l.game.answer;
    const first = content.optionView(content.lessonKey(l.id), l.choice.options).pick(b.firstOption);
    if (!solved || !first) return res.status(400).json({ error: "Dars hali yakunlanmagan" });
    const mistakes = runs.of(o.doc, l.id).m;
    const xp = await store.finishOnce(req.authUser.id, "lessons", l.id, runs.xpFor(store.XP.lesson, mistakes), { firstTry: !!first.ok, mistakes });
    await runs.end(req.authUser.id, l.id);
    const doc = await store.getDoc(req.authUser.id);
    const s = store.summaryOf(doc);
    const next = path.nextAfter(o.at, l.id);
    // Bo'lim to'liq tugadimi — mini app katta bayram (ovoz + animatsiya) ko'rsatadi
    const allDone = content.LESSONS.filter((x) => x.unit === l.unit).every((x) => doc.lessons?.[x.id]);
    const unitDone = xp > 0 && allDone;
    const exam = allDone && !doc.exams?.[l.unit] ? l.unit : null; // bo'lim imtihoni navbatda — keyingi dars hali yopiq
    res.json({
      unitDone,
      unitTitle: content.UNITS.find((u) => u.key === l.unit).title,
      xp,
      maxXp: store.XP.lesson,
      mistakes,
      ...store.streakChange(o.doc, doc), // seriya animatsiyasi
      totalXp: s.xp,
      level: s.level,
      streak: s.streak,
      takeaway: l.takeaway,
      goals: l.goals, // «Endi siz qila olasiz»
      quotes: await quotesOf(l.refs),
      next: exam ? null : next?.id || null,
      exam,
      newBadges: s.badges.filter((x) => x.earned).map((x) => x.id),
    });
  } catch (err) {
    fail(res, err, "complete");
  }
});

router.use(require("./miniAppCourse")); // saytdagi darslardan qurilgan kurslar, sandiq, tariflar

module.exports = router;
