"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  MODUL 8 — ISTE'MOLCHI HUQUQLARI
 * ═══════════════════════════════════════════════════════════════════
 *
 * Manba: Iste'molchilar huquqlarini himoya qilish to'g'risidagi
 * qonun (IHQ — atigi 33 modda) + Fuqarolik kodeksi 2-qism (FK2).
 *
 * ⚠️ NIMA UCHUN IKKI MANBA: IHQ juda ixcham va unda kafolat
 * muddatini hisoblash, butlik, namuna bo'yicha sotish kabi
 * mavzular umuman yo'q. Faqat IHQ ga tayanilsa darslar yarim
 * qolardi — shuning uchun FK2 ning oldi-sotdi (403–436) va
 * ish/xizmat sifati (647–650, 706) moddalari qo'shildi.
 *
 * ⚠️ PUDRAT VA XIZMAT SHARTNOMASINING UMUMIY qoidalari
 * (FK2 631–646, 703–708) BU YERGA OLINMADI — ular shartnomalar
 * moduliga tegishli. Bu yerda faqat SIFAT va JAVOBGARLIK moddalari.
 *
 * ── TAQSIMOT (moddalar chegarasi) ──────────────────────────────────
 *   01 Asosiy huquqlar     IHQ 1,2*,4,5,6,7,8,9,12 + FK2 425,426,427,407
 *   02 Nuqsonli tovar      IHQ 13–18 + FK2 408,409,410,433,434,435
 *   03 Kafolat va muddat   IHQ 10,11,12-1 + FK2 403,404,405,406,411,412,413
 *   04 Ish/xizmat sifati   IHQ 19,20,22 + FK2 647,648,649,650,706
 *   05 Himoya yo'llari     IHQ 2,3,21,23,24,25,26,27,27-1,29,30
 *   06 Onlayn savdo        IHQ 6*,28,28-1 + FK2 428,429,430,431,432
 *
 * (*) — 1-darsda IHQ 2 va 6-darsda IHQ 6 ATAYLAB takrorlanadi:
 * ular boshqa RAKURSDA beriladi (birinchisida umumiy ta'rif,
 * ikkinchisida onlayn kontekstda dalil to'plash). Qolgan barcha
 * moddalar bitta darsda.
 *
 * ✅ MODUL TO'LIQ TUGALLANGAN — 6/6 dars kengaytirilgan, 51 mavzu.
 */

const REWRITTEN = new Set([
  "istemolchi-asosiy-huquqlar",
  "nuqsonli-tovar",
  "kafolat-muddati",
  "xizmat-sifati",
  "istemolchi-himoya",
  "onlayn-savdo",
]);

const EXPANDED = [
  require("./01-asosiy-huquqlar").LESSON,
  require("./02-nuqsonli-tovar").LESSON,
  require("./03-kafolat-muddati").LESSON,
  require("./04-xizmat-sifati").LESSON,
  require("./05-istemolchi-himoya").LESSON,
  require("./06-onlayn-savdo").LESSON,
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
      `Iste'molchi modulida takroriy libraryKey: ${l.key}. ` +
        `Darsni kengaytirgan bo'lsangiz uni REWRITTEN ro'yxatiga qo'shing.`,
    );
  }
  seen.add(l.key);
}

module.exports = { LESSONS };
