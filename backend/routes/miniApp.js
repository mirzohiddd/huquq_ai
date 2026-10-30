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

const BOT = (process.env.TELEGRAM_BOT_USERNAME || "mening_huquqlarim_bot").replace(/^@/, "");
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

/* GET /api/mini/path — darslar xaritasi + qisqa holat */
router.get("/path", userGuard, async (req, res) => {
  try {
    const doc = await store.getDoc(req.authUser.id);
    const s = store.summaryOf(doc);
    res.json({ units: store.pathOf(doc), xp: s.xp, level: s.level, streak: s.streak, todayXp: s.todayXp, goal: s.goal, mistakes: s.mistakes });
  } catch (err) {
    fail(res, err, "path");
  }
});

async function openLesson(req, res) {
  const l = content.lessonById.get(String(req.params.id));
  if (!l) {
    res.status(404).json({ error: "Dars topilmadi" });
    return null;
  }
  const doc = await store.getDoc(req.authUser.id);
  if (!store.isUnlocked(doc, l.id)) {
    res.status(403).json({ error: "Avval oldingi darsni tugating", locked: true });
    return null;
  }
  return { l, doc };
}

const orderOk = (l, order) => Array.isArray(order) && order.length === l.game.items.length && order.every((v, i) => Number(v) === i);

router.get("/lesson/:id", userGuard, async (req, res) => {
  try {
    const o = await openLesson(req, res);
    if (o) res.json({ lesson: content.publicLesson(o.l), done: !!o.doc.lessons?.[o.l.id] });
  } catch (err) {
    fail(res, err, "lesson");
  }
});

/* Tanlov javobi — to'g'ri/xato + izoh. Xato bo'lsa "Takrorlash"ga tushadi. */
router.post("/lesson/:id/choice", userGuard, async (req, res) => {
  try {
    const o = await openLesson(req, res);
    if (!o) return;
    const opt = o.l.choice.options[Number(req.body?.option)];
    if (!opt) return res.status(400).json({ error: "Variant noto'g'ri" });
    if (!opt.ok && !o.doc.lessons?.[o.l.id]) await store.addMistake(req.authUser.id, `L:${o.l.id}`);
    const correct = o.l.choice.options.findIndex((x) => x.ok);
    res.json({ ok: opt.ok, why: opt.why, correct, rightWhy: o.l.choice.options[correct].why });
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
    if (game.type === "order") {
      const order = Array.isArray(b.order) ? b.order.map(Number) : [];
      const ok = orderOk(o.l, order);
      const right = order.filter((v, i) => v === i).length;
      const solution = ok || b.reveal ? game.items.map((t, id) => ({ id, t })) : undefined;
      return res.json({ ok, right, total: game.items.length, why: ok || b.reveal ? game.why : undefined, solution });
    }
    const ok = Number(b.line) === game.answer;
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
    const first = l.choice.options[Number(b.firstOption)];
    if (!solved || !first) return res.status(400).json({ error: "Dars hali yakunlanmagan" });
    const xp = await store.finishOnce(req.authUser.id, "lessons", l.id, store.XP.lesson, { firstTry: !!first.ok });
    const doc = await store.getDoc(req.authUser.id);
    const s = store.summaryOf(doc);
    const idx = content.LESSONS.findIndex((x) => x.id === l.id);
    res.json({
      xp,
      totalXp: s.xp,
      level: s.level,
      streak: s.streak,
      takeaway: l.takeaway,
      quotes: await quotesOf(l.refs),
      next: content.LESSONS[idx + 1]?.id || null,
      newBadges: s.badges.filter((x) => x.earned).map((x) => x.id),
    });
  } catch (err) {
    fail(res, err, "complete");
  }
});

module.exports = router;
