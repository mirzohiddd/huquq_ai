"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  MODUL 01 — KONSTITUTSIYA
 * ═══════════════════════════════════════════════════════════════════
 *
 * Manba: O'zbekiston Respublikasi Konstitutsiyasi (KONS), 155 modda.
 *
 * ── TAQSIMOT (moddalar chegarasi) ──────────────────────────────────
 *   01 Konstitutsiya nima      KONS 1–6, 15–18, 55, 154, 155
 *   02 Asosiy huquqlar         KONS 25–35
 *   03 Siyosiy huquqlar        KONS 36–40, 69–75, 81, 82, 128, 129
 *   04 Ijtimoiy huquqlar       KONS 41–53, 57, 65–68, 76–80
 *   05 Kafolatlar              KONS 19–21, 54–56, 58, 132, 133,
 *                              141, 142
 *   06 Burchlar                KONS 59–64
 *   07 Davlat tuzilishi        KONS 7–14, 83–153 (qisman)
 *   08 Fuqarolik               KONS 22–24
 *
 * ⚠️ KONS 55 IKKI DARSDA — ATAYLAB. Bu yagona istisno va u
 * takrorlash emas. 05-darsda modda O'Z MAVZUSI sifatida ochiladi
 * ("Huquqni himoya qilishning barcha usullari"), 01-darsda esa
 * Konstitutsiya bevosita amal qilishiga MISOL sifatida keltiriladi
 * ("Konstitutsiya sizga amalda nima beradi"). Ya'ni ikkinchi
 * darsda u mavzu emas, ko'rgazma.
 *
 * ⚠️ 14 TA MODDA ATAYLAB OLINMADI: 89, 90, 96, 97, 101, 103,
 * 111–113, 118, 119, 124, 125, 146. Bularning barchasi — davlat
 * organlarining ICHKI protsedura tafsilotlari (Senat raisini
 * saylash tartibi, Bosh vazir nomzodini ko'rsatish, hokim
 * vakolatlarini yakkaboshchilik asosida amalga oshirish va
 * shu kabilar). Ular 07-darsdagi organlarning O'ZI haqidagi
 * mavzularga kiradi, lekin alohida mavzu sifatida oddiy
 * foydalanuvchiga amaliy foyda bermaydi — dars uni hech qachon
 * ishlatmaydigan tartib bilan og'irlashtirardi.
 *
 * ✅ MODUL TO'LIQ TUGALLANGAN — 8/8 dars kengaytirilgan,
 *    jami 97 mavzu (avval 29).
 */

const REWRITTEN = new Set([
  "konstitutsiya-nima",
  "konstitutsiya-huquqlar",
  "konstitutsiya-siyosiy-huquqlar",
  "konstitutsiya-ijtimoiy-huquqlar",
  "konstitutsiya-kafolatlar",
  "konstitutsiya-burchlar",
  "konstitutsiya-davlat",
  "konstitutsiya-fuqarolik",
]);

const EXPANDED = [
  require("./01-konstitutsiya-nima").LESSON,
  require("./02-konstitutsiya-huquqlar").LESSON,
  require("./03-siyosiy-huquqlar").LESSON,
  require("./04-ijtimoiy-huquqlar").LESSON,
  require("./05-kafolatlar").LESSON,
  require("./06-burchlar").LESSON,
  require("./07-davlat-tuzilishi").LESSON,
  require("./08-fuqarolik").LESSON,
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
      `Konstitutsiya modulida takroriy libraryKey: ${l.key}. ` +
        `Darsni kengaytirgan bo'lsangiz uni REWRITTEN ro'yxatiga qo'shing.`,
    );
  }
  seen.add(l.key);
}

module.exports = { LESSONS };
