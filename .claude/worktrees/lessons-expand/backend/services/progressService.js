"use strict";
/**
 * O'QUV PROGRESSI — YAGONA manba.
 *
 * ⚠️ Bu fayl ATAYLAB `routes/` dan tashqarida: undan IKKI mijoz
 * foydalanadi — sayt (HTTP orqali, `routes/progress.js`) va Telegram
 * bot (to'g'ridan-to'g'ri chaqirib). Agar mantiq marshrut ichida
 * yozilganda, bot uni takrorlashga majbur bo'lardi va ikkalasi vaqt
 * o'tib bir-biridan uzoqlashib ketardi — natijada "telegramda tugatdim,
 * saytda tugallanmagan" degan aynan shu muammo qaytib kelardi.
 *
 * Tuzilma frontend'dagi `pages/lessonProgress.js` bilan bir xil:
 *   lessons[lessonId] = { read: number[], completed, attempts,
 *                         completedAt, practice: { turi: xp } }
 */
const { LessonProgress } = require("../models");

const XP_PER_LESSON = 10;

/** Foydalanuvchining yozuvini oladi (bo'lmasa — bo'sh andoza). */
async function getProgress(userId) {
  const doc = await LessonProgress.findOne({ userId }).lean();
  return {
    lessons: doc?.lessons || {},
    xp: doc?.xp || 0,
    quizResults: doc?.quizResults || [],
  };
}

function emptyLesson() {
  return { read: [], completed: false, attempts: 0, practice: {} };
}

/**
 * Bitta darsning holatini QISMAN yangilaydi (patch).
 *
 * ⚠️ MUHIM: `read` maydoni ALMASHTIRILMAYDI, BIRLASHTIRILADI. Sabab:
 * foydalanuvchi darsni telefonda 1-3 bo'limgacha, kompyuterda 4-5
 * bo'limgacha o'qishi mumkin. Almashtirilsa, oxirgi qurilma oldingisini
 * o'chirib yuborardi.
 *
 * `completed` esa faqat `true` tomonga o'zgaradi — tugallangan dars
 * boshqa qurilmadagi eski holat bilan "tugallanmagan"ga qaytmasin.
 */
/** Mongo maydon nomi bo'la oladimi (`.` va `$` taqiqlangan). */
function safeKey(id) {
  const k = String(id || "");
  if (!k || /[.$\0]/.test(k)) throw new Error("Yaroqsiz lessonId");
  return k;
}

async function updateLesson(userId, lessonId, patch = {}) {
  /* ⚠️ ATOMIK OPERATORLAR — SHART, qulaylik uchun emas.
     Avval bu funksiya "o'qi → o'zgartir → saqla" naqshi bilan
     yozilgan edi. Telegram botda foydalanuvchi bo'limlarni tez
     bosganda bir nechta yozuv PARALLEL ketadi va ular bir-birini
     bosib ketardi — sinovda 5 ta bo'limdan faqat 4 tasi saqlandi.
     `$addToSet`/`$max` bilan har bir yozuv mustaqil qo'llanadi. */
  const base = `lessons.${safeKey(lessonId)}`;
  const upd = {};
  const setOn = (op, key, val) => {
    upd[op] = upd[op] || {};
    upd[op][key] = val;
  };

  if (Array.isArray(patch.read) && patch.read.length) {
    setOn("$addToSet", `${base}.read`, {
      $each: patch.read.map(Number).filter(Number.isFinite),
    });
  }
  if (typeof patch.attempts === "number") {
    setOn("$max", `${base}.attempts`, patch.attempts);
  }
  if (patch.completed === true) {
    setOn("$set", `${base}.completed`, true);
    // `$min` — birinchi tugatish vaqti saqlanib qoladi
    setOn("$min", `${base}.completedAt`, new Date());
  }
  if (patch.practice && typeof patch.practice === "object") {
    for (const [type, xp] of Object.entries(patch.practice)) {
      setOn("$max", `${base}.practice.${safeKey(type)}`, Number(xp) || 0);
    }
  }
  if (Array.isArray(patch.burned)) {
    setOn("$set", `${base}.burned`, patch.burned.slice(-200));
  }

  if (!Object.keys(upd).length) {
    const cur = await getProgress(userId);
    return cur.lessons[lessonId] || emptyLesson();
  }

  const doc = await LessonProgress.findOneAndUpdate({ userId }, upd, {
    upsert: true,
    new: true,
    setDefaultsOnInsert: true,
  }).lean();
  return doc?.lessons?.[lessonId] || emptyLesson();
}

/**
 * Darsni TUGALLANGAN deb belgilaydi va XP beradi.
 * XP faqat BIRINCHI marta beriladi — aks holda darsni qayta-qayta
 * "tugatib" XP yig'ib olish mumkin bo'lardi.
 * @returns {{ alreadyDone: boolean, xpAwarded: number, totalXp: number }}
 */
async function completeLesson(userId, lessonId) {
  const base = `lessons.${safeKey(lessonId)}`;

  /* XP faqat BIRINCHI tugatishda beriladi. Buni ishonchli aniqlash
     uchun "avval tugallanmagan" shartini SO'ROVNING O'ZIGA qo'yamiz —
     shunda ikkita parallel so'rov kelsa ham XP faqat bittasiga tegadi
     (ikkinchisi hech qanday hujjat topmaydi). */
  const awarded = await LessonProgress.findOneAndUpdate(
    { userId, [`${base}.completed`]: { $ne: true } },
    {
      $set: { [`${base}.completed`]: true },
      $min: { [`${base}.completedAt`]: new Date() },
      $inc: { xp: XP_PER_LESSON, [`${base}.attempts`]: 1 },
    },
    { upsert: true, new: true, setDefaultsOnInsert: true },
  )
    .lean()
    .catch(async (err) => {
      // Upsert paytida boshqa so'rov hujjatni yaratib ulgurgan bo'lsa
      // (E11000) — demak dars allaqachon tugallangan.
      if (err?.code === 11000) return null;
      throw err;
    });

  if (awarded) {
    return { alreadyDone: false, xpAwarded: XP_PER_LESSON, totalXp: awarded.xp };
  }

  // Allaqachon tugallangan — faqat urinishlar sonini oshiramiz
  const doc = await LessonProgress.findOneAndUpdate(
    { userId },
    { $inc: { [`${base}.attempts`]: 1 } },
    { new: true },
  ).lean();
  return { alreadyDone: true, xpAwarded: 0, totalXp: doc?.xp || 0 };
}

/** Amaliyot topshirig'i XP'si — tur bo'yicha eng yuqorisi saqlanadi,
    qaytariladigan qiymat esa FARQI (web'dagi mantiq bilan bir xil). */
async function recordPracticeXp(userId, lessonId, type, earnedXp) {
  const key = `lessons.${safeKey(lessonId)}.practice.${safeKey(type)}`;
  const cur = await LessonProgress.findOne({ userId }).lean();
  const before = cur?.lessons?.[lessonId]?.practice?.[type] || 0;
  if (earnedXp <= before) return { gained: 0, totalXp: cur?.xp || 0 };

  const gained = earnedXp - before;
  // Shart so'rovda: oradan boshqa yozuv o'tib ketgan bo'lsa XP
  // ikki marta berilmaydi.
  const doc = await LessonProgress.findOneAndUpdate(
    { userId, $or: [{ [key]: { $lt: earnedXp } }, { [key]: { $exists: false } }] },
    { $set: { [key]: earnedXp }, $inc: { xp: gained } },
    { upsert: true, new: true, setDefaultsOnInsert: true },
  )
    .lean()
    .catch((err) => (err?.code === 11000 ? null : Promise.reject(err)));

  if (!doc) return { gained: 0, totalXp: cur?.xp || 0 };
  return { gained, totalXp: doc.xp };
}

/** Testlar bo'limidagi natijani qayd etadi (oxirgi 50 tasi saqlanadi). */
async function recordQuizResult(userId, { quizId, title, score, total, source }) {
  const doc =
    (await LessonProgress.findOne({ userId })) ||
    new LessonProgress({ userId, lessons: {}, xp: 0 });

  doc.quizResults = [
    ...(doc.quizResults || []),
    {
      quizId,
      title: title || "",
      score,
      total,
      source: source === "telegram" ? "telegram" : "web",
      at: new Date(),
    },
  ].slice(-50);
  await doc.save();
  return doc.quizResults[doc.quizResults.length - 1];
}

module.exports = {
  XP_PER_LESSON,
  getProgress,
  updateLesson,
  completeLesson,
  recordPracticeXp,
  recordQuizResult,
};
