"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  MODUL 1 — KONSTITUTSIYAVIY HUQUQ
 * ═══════════════════════════════════════════════════════════════════
 *
 * Manba: O'zbekiston Respublikasi Konstitutsiyasi (KONS, 155 modda,
 * 2023-yil 30-aprel tahriri).
 *
 * Tuzilma va qoida `04-oila/index.js` dagi bilan BIR XIL — u yerda
 * batafsil izohlangan. Qisqacha: har darsga AYNAN O'SHA mavzuga oid
 * moddalar bo'yicha mavzu yoziladi, sun'iy raqam qo'yilmaydi va
 * modda chegaralari darslar o'rtasida takrorlanmaydi.
 *
 * ── TAQSIMOT (moddalar chegarasi) ──────────────────────────────────
 *   01 Konstitutsiya nima     KONS 1–6, 15–18, 55, 154, 155
 *   02 Shaxsiy huquqlar       KONS 25–35
 *   03 Siyosiy huquqlar       KONS 36–40, 69–75, 81, 82, 128, 129
 *   04 Ijtimoiy-iqtisodiy     KONS 41–53, 57, 65–68, 76–80
 *   05 Huquq kafolatlari      KONS 19–21, 54–56, 58, 132, 133, 141, 142
 *   06 Fuqaroning burchlari   KONS 59–64
 *   07 Davlat tuzilishi       KONS 7–14, 83–153 (hokimiyat organlari)
 *   08 Fuqarolik              KONS 22–24, 55, 56 (fuqarolik instituti)
 *
 * ⚠️ 01-DARS "ASOSIY PRINSIPLAR"NI, 07-DARS esa "DAVLAT
 * ORGANLARINI" oladi — ikkalasi ham 1-bo'limga tegishli, lekin
 * kesishmaydi: birinchisi davlat QANDAY tuzilgani (suverenitet,
 * shakl, tillar), ikkinchisi KIM qanday vakolatga ega ekani.
 *
 * ⚠️ 55–56-moddalar 05 va 08-darslarda turli RAKURSDA uchraydi:
 * 05-darsda huquqni himoya qilish kafolati sifatida, 08-darsda esa
 * fuqarolikning huquqiy oqibati sifatida.
 */

/* Hali kengaytirilmagan darslar — asl holida ishlashda davom
   etadi. Kengaytirilgan dars bu ro'yxatdan CHIQARIB tashlanadi,
   aks holda bazada ikkita bir xil `libraryKey` paydo bo'lardi. */
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

/* `order` bo'yicha saralanadi — modul ichidagi o'quv ketma-ketligi
   shu maydonda saqlanadi va u kengaytirishdan keyin ham o'zgarmaydi. */
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
