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

const XP = { lesson: 20, situation: 10, review: 5 };

async function getDoc(userId) {
  return (await MiniProgress.findOne({ userId }).lean()) || { xp: 0, lessons: {}, situations: {}, mistakes: [], days: {}, reviewed: 0, goal: 20 };
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

/** Dars yo'li: tugatilgan, ochiq (keyingisi) va yopiq. */
function pathOf(doc) {
  let open = true;
  return content.UNITS.map((u) => ({
    key: u.key,
    title: u.title,
    lessons: content.LESSONS.filter((l) => l.unit === u.key).map((l) => {
      const done = !!doc.lessons?.[l.id];
      const status = done ? "done" : open ? "open" : "locked";
      if (!done) open = false; // birinchi tugallanmagan dars ochiq, keyingilari yopiq
      return { id: l.id, title: l.title, status };
    }),
  }));
}

function isUnlocked(doc, lessonId) {
  for (const u of pathOf(doc)) {
    const l = u.lessons.find((x) => x.id === lessonId);
    if (l) return l.status !== "locked";
  }
  return false;
}

/** Profil va yutuqlar uchun umumiy xulosa. */
function summaryOf(doc) {
  const lessonsDone = content.LESSONS.filter((l) => doc.lessons?.[l.id]);
  const fullUnits = content.UNITS.filter((u) => content.LESSONS.filter((l) => l.unit === u.key).every((l) => doc.lessons?.[l.id])).length;
  const s = {
    xp: doc.xp || 0,
    lessons: lessonsDone.length,
    totalLessons: content.LESSONS.length,
    situations: Object.keys(doc.situations || {}).length,
    totalSituations: content.SITUATIONS.length,
    firstTry: lessonsDone.filter((l) => doc.lessons[l.id].firstTry).length,
    reviewed: doc.reviewed || 0,
    mistakes: (doc.mistakes || []).length,
    streak: stats.streakOf(doc.days),
    fullUnits,
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

module.exports = { XP, getDoc, touch, finishOnce, addMistake, fixMistake, setGoal, pathOf, isUnlocked, summaryOf, rating };
