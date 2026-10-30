"use strict";
/**
 * MINI APP — progress yozuvlari (XP, darslar, vaziyatlar, xatolar).
 *
 * ⚠️ XP faqat ATOMIK operatorlar bilan va faqat BIRINCHI marta beriladi:
 * shart so'rovning o'zida ("dars hali tugallanmagan"), aks holda ikki
 * parallel so'rov XP'ni ikki marta qo'shardi va reyting buzilardi.
 */
const { MiniProgress } = require("../../models/miniApp");
const content = require("./content");
const stats = require("./stats");
const path = require("./path");

/* Asosiy XP — xatosiz bajarilganda; xato qilinsa kamayadi (`runs.xpFor`) */
const XP = { lesson: 20, situation: 20, review: 5, exam: 40, chest: 20 };
const EXAM_PASS = path.BASIC_EXAM_PASS;

async function getDoc(userId) {
  return (await MiniProgress.findOne({ userId }).lean()) || { xp: 0, lessons: {}, situations: {}, mistakes: [], days: {}, reviewed: 0, goal: 20 };
}

/** Seriya animatsiyasi uchun: shu harakat bugungi BIRINCHI XP'mi (seriya oshdimi). */
function streakChange(before, after) {
  const today = stats.dayKey();
  const up = !(before.days?.[today] > 0) && after.days?.[today] > 0;
  return { streakUp: up, streakFrom: up ? stats.streakOf(before.days) : null, streak: stats.streakOf(after.days), week: up ? weekDots(after) : undefined };
}

async function touch(userId, name) {
  await MiniProgress.updateOne({ userId }, { $set: { name } }, { upsert: true });
}

const safe = (id) => {
  if (!/^[a-z0-9-]{1,40}$/.test(String(id))) throw new Error("Yaroqsiz id");
  return id;
};

/** Mavzu birinchi marta tugatilsa XP qo'shiladi. @returns {Promise<number>} berilgan XP */
async function finishOnce(userId, field, id, xp, extra = {}) {
  const key = `${field}.${safe(id)}`;
  await MiniProgress.updateOne({ userId }, { $setOnInsert: { goal: 20 } }, { upsert: true }); // hujjat bo'lmasa — yaratiladi
  const res = await MiniProgress.updateOne(
    { userId, [key]: { $exists: false } },
    { $set: { [key]: { at: new Date(), ...extra } }, $inc: { xp, [`days.${stats.dayKey()}`]: xp } },
  );
  return res.modifiedCount ? xp : 0;
}

async function addMistake(userId, key) {
  await MiniProgress.updateOne({ userId }, { $addToSet: { mistakes: key } }, { upsert: true });
}

/** Takrorlashda tuzatilgan xato — ro'yxatdan chiqadi va XP beradi (faqat bir marta). */
async function fixMistake(userId, key) {
  const res = await MiniProgress.updateOne(
    { userId, mistakes: key },
    { $pull: { mistakes: key }, $inc: { xp: XP.review, reviewed: 1, [`days.${stats.dayKey()}`]: XP.review } },
  );
  return res.modifiedCount ? XP.review : 0;
}

async function setGoal(userId, goal) {
  const g = [20, 40, 60].includes(Number(goal)) ? Number(goal) : 20;
  await MiniProgress.updateOne({ userId }, { $set: { goal: g } }, { upsert: true });
  return g;
}

/** Joriy hafta (dushanbadan): har kun faolmi. Takrorlash sahifasidagi nuqtalar. */
function weekDots(doc) {
  const today = (new Date(`${stats.dayKey()}T00:00:00Z`).getUTCDay() + 6) % 7; // 0 = dushanba
  return [...Array(7).keys()].map((i) => {
    const key = stats.dayKey(new Date(), i - today);
    return { day: key, active: (doc.days?.[key] || 0) > 0, today: i === today, future: i > today };
  });
}

/** Profil va yutuqlar uchun umumiy xulosa. `courseTotal` — saytdan qurilgan kurs darslari soni. */
function summaryOf(doc, courseTotal = 0) {
  const lessonsDone = content.LESSONS.filter((l) => doc.lessons?.[l.id]);
  const allDone = Object.keys(doc.lessons || {}).length; // «Hayotiy asoslar» + kurslar
  const fullUnits = content.UNITS.filter((u) => content.LESSONS.filter((l) => l.unit === u.key).every((l) => doc.lessons?.[l.id])).length;
  const s = {
    xp: doc.xp || 0,
    lessons: allDone,
    totalLessons: content.LESSONS.length + courseTotal,
    situations: content.SITUATIONS.filter((x) => doc.situations?.[x.id]).length,
    totalSituations: content.SITUATIONS.length,
    firstTry: Object.values(doc.lessons || {}).filter((l) => l?.firstTry).length,
    reviewed: doc.reviewed || 0,
    mistakes: (doc.mistakes || []).length,
    streak: stats.streakOf(doc.days),
    fullUnits: Math.max(fullUnits, Object.keys(doc.exams || {}).length), // imtihondan o'tilgan bo'limlar ham
    goal: doc.goal || 20,
    todayXp: doc.days?.[stats.dayKey()] || 0,
  };
  return {
    ...s,
    level: stats.levelOf(s.xp),
    weekly: stats.weeklyOf(doc.days),
    badges: stats.badgesOf(s),
    learned: content.UNITS.map((u) => ({
      title: u.title,
      topics: lessonsDone.filter((l) => l.unit === u.key).map((l) => l.title),
    })).filter((u) => u.topics.length),
  };
}

/** Reyting: faqat TOP 5 hammaga ko'rinadi, qolganlar faqat o'z o'rnini ko'radi. */
async function rating(userId) {
  const top = await MiniProgress.find({ xp: { $gt: 0 } }).sort({ xp: -1, updatedAt: 1 }).limit(5).select("userId name xp").lean();
  const me = await MiniProgress.findOne({ userId }).select("xp").lean();
  const myXp = me?.xp || 0;
  const rank = myXp > 0 ? (await MiniProgress.countDocuments({ xp: { $gt: myXp } })) + 1 : null;
  const total = await MiniProgress.countDocuments({ xp: { $gt: 0 } });
  return {
    top: top.map((r, i) => ({ rank: i + 1, name: r.name || "Foydalanuvchi", xp: r.xp, level: stats.levelOf(r.xp).level, me: String(r.userId) === String(userId) })),
    me: { rank, xp: myXp, level: stats.levelOf(myXp).level },
    total,
  };
}

module.exports = { XP, EXAM_PASS, getDoc, touch, finishOnce, addMistake, fixMistake, setGoal, weekDots, streakChange, summaryOf, rating };
