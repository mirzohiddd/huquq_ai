"use strict";
/**
 * MINI APP — daraja, ketma-ket kunlar, haftalik natija va nishonlar.
 * Hammasi `MiniProgress` hujjatidan HISOBLANADI (alohida saqlanmaydi) —
 * shuning uchun hech qachon bir-biridan ajralib ketmaydi.
 */
const TZ_OFFSET_MS = 5 * 3600 * 1000; // Toshkent (UTC+5)

/** Toshkent sanasi "YYYY-MM-DD" (kunlik XP va ketma-ket kunlar uchun). */
function dayKey(date = new Date(), shiftDays = 0) {
  return new Date(date.getTime() + TZ_OFFSET_MS + shiftDays * 86400000).toISOString().slice(0, 10);
}

const LEVELS = [
  { xp: 0, name: "Boshlovchi" },
  { xp: 60, name: "Qiziquvchan" },
  { xp: 150, name: "Huquq havaskori" },
  { xp: 300, name: "Bilimdon" },
  { xp: 500, name: "Huquqiy savodxon" },
  { xp: 800, name: "Maslahatchi" },
  { xp: 1200, name: "Ekspert" },
];

function levelOf(xp = 0) {
  let i = 0;
  while (i + 1 < LEVELS.length && xp >= LEVELS[i + 1].xp) i++;
  const next = LEVELS[i + 1];
  return {
    level: i + 1,
    name: LEVELS[i].name,
    from: LEVELS[i].xp,
    to: next ? next.xp : null,
    progress: next ? (xp - LEVELS[i].xp) / (next.xp - LEVELS[i].xp) : 1,
  };
}

/** Ketma-ket faol kunlar. Bugun hali o'qimagan bo'lsa — kechagidan hisoblanadi. */
function streakOf(days = {}) {
  let shift = days[dayKey()] ? 0 : -1;
  let n = 0;
  while (days[dayKey(new Date(), shift)] > 0) {
    n++;
    shift--;
  }
  return n;
}

/** Oxirgi 7 kun (bugun oxirida) va joriy hafta (dushanbadan) XP'si. */
function weeklyOf(days = {}) {
  const last7 = [];
  for (let s = -6; s <= 0; s++) {
    const key = dayKey(new Date(), s);
    const wd = new Date(`${key}T00:00:00Z`).getUTCDay(); // 0 = yakshanba
    last7.push({ day: key, weekday: wd, xp: days[key] || 0 });
  }
  const todayWd = (new Date(`${dayKey()}T00:00:00Z`).getUTCDay() + 6) % 7; // 0 = dushanba
  let weekXp = 0;
  let activeDays = 0;
  for (let s = -todayWd; s <= 0; s++) {
    const v = days[dayKey(new Date(), s)] || 0;
    weekXp += v;
    if (v > 0) activeDays++;
  }
  return { last7, weekXp, activeDays };
}

const BADGES = [
  { id: "first", title: "Birinchi qadam", desc: "Birinchi darsni tugatish", test: (s) => s.lessons >= 1 },
  { id: "unit", title: "Bo'lim ustasi", desc: "Bitta bo'limni to'liq tugatish", test: (s) => s.fullUnits >= 1 },
  { id: "half", title: "Yarim yo'l", desc: "Darslarning yarmini tugatish", test: (s) => s.lessons >= Math.ceil(s.totalLessons / 2) },
  { id: "all", title: "Yo'l oxiri", desc: "Barcha darslarni tugatish", test: (s) => s.lessons >= s.totalLessons },
  { id: "sharp", title: "Aniq nishon", desc: "5 ta darsda birinchi urinishda to'g'ri tanlov", test: (s) => s.firstTry >= 5 },
  { id: "life", title: "Hayot maktabi", desc: "5 ta vaziyatni yechish", test: (s) => s.situations >= 5 },
  { id: "review", title: "Xatodan saboq", desc: "5 ta xatoni takrorlab tuzatish", test: (s) => s.reviewed >= 5 },
  { id: "streak3", title: "Uch kun ketma-ket", desc: "3 kun ketma-ket o'qish", test: (s) => s.streak >= 3 },
  { id: "streak7", title: "Bir hafta", desc: "7 kun ketma-ket o'qish", test: (s) => s.streak >= 7 },
  { id: "xp500", title: "500 XP", desc: "500 XP to'plash", test: (s) => s.xp >= 500 },
];

function badgesOf(summary) {
  return BADGES.map(({ test, ...b }) => ({ ...b, earned: !!test(summary) }));
}

module.exports = { dayKey, levelOf, streakOf, weeklyOf, badgesOf, LEVELS };
