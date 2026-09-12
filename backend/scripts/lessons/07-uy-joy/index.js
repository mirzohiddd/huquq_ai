"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  MODUL 7 — UY-JOY VA YER HUQUQI
 * ═══════════════════════════════════════════════════════════════════
 *
 * Manbalar: Uy-joy kodeksi (UJK, 141 modda), Yer kodeksi (YK, 110),
 * Shaharsozlik kodeksi (SHK, 85) va Fuqarolik kodeksi 2-qism
 * (FK2 — ko'chmas mulk sotish va uy-joy ijarasi).
 *
 * Tuzilma va qoida `04-oila/index.js` dagi bilan BIR XIL — u yerda
 * batafsil izohlangan.
 *
 * ── TAQSIMOT (moddalar chegarasi) ──────────────────────────────────
 *   01 Uy-joy huquqi asoslari  UJK 1–24
 *   02 Yashovchilar huquqlari  UJK 32, 38–47, 50–56, 61, 116–123
 *   03 Turar joy ijarasi       UJK 25, 33–37, 48–49, 57–69, 75–95
 *                              + FK2 600–616
 *   04 Ko'p kvartirali uy      UJK 96–104, 124–141
 *   05 Buzish va ko'chirish    UJK 27–31, 70–74 + YK 37, 37-1, 86
 *   06 Yer uchastkasi huquqi   YK 1–24, 31–36, 38
 *   07 Yerdan foydalanish      YK 25–30, 39–91-1
 *   08 Shaharsozlik            SHK
 *   09 Ko'chmas mulk bitimlari FK2 479–496 + UJK 26, 105–115
 *
 * ⚠️ FK2 479–496 (ko'chmas mulk va korxona sotish) hamda
 * FK2 600–616 (uy-joyni ijaraga berish) ATAYLAB SHU MODULDA,
 * SHARTNOMALAR modulida (03) EMAS — foydalanuvchi uchun ular
 * uy-joy masalasi, shartnoma nazariyasi emas. Shartnomalar
 * modulida bu chegara izohda qayd etilgan.
 *
 * ⚠️ YK 37, 37-1, 86 (olib qo'yish va zarar) 05-darsda —
 * uy buzilishi bilan bir kontekstda beriladi. 07-dars ularni
 * takrorlamaydi.
 *
 * ✅ MODUL TO'LIQ TUGALLANGAN — 9/9 dars kengaytirilgan.
 */

const REWRITTEN = new Set([
  "uy-joy-huquqi",
  "uy-joy-yashovchilar",
  "uy-joy-ijara",
  "kop-kvartirali-uy",
  "uy-joy-olib-qoyish",
  "yer-uchastka",
  "yerdan-foydalanish",
  "shaharsozlik",
  "kochmas-mulk-bitim",
]);

const EXPANDED = [
  require("./01-uy-joy-huquqi").LESSON,
  require("./02-uy-joy-yashovchilar").LESSON,
  require("./03-uy-joy-ijara").LESSON,
  require("./04-kop-kvartirali-uy").LESSON,
  require("./05-uy-joy-olib-qoyish").LESSON,
  require("./06-yer-uchastka").LESSON,
  require("./07-yerdan-foydalanish").LESSON,
  require("./08-shaharsozlik").LESSON,
  require("./09-kochmas-mulk-bitim").LESSON,
];

const rest = require("./00-qolganlar").LESSONS.filter(
  (l) => !REWRITTEN.has(l.key),
);

const LESSONS = [...EXPANDED, ...rest].sort((a, b) => a.order - b.order);

/* Takroriy kalit tekshiruvi — izoh `04-oila/index.js` da. */
const seen = new Set();
for (const l of LESSONS) {
  if (seen.has(l.key)) {
    throw new Error(
      `Uy-joy modulida takroriy libraryKey: ${l.key}. ` +
        `Darsni kengaytirgan bo'lsangiz uni REWRITTEN ro'yxatiga qo'shing.`,
    );
  }
  seen.add(l.key);
}

module.exports = { LESSONS };
