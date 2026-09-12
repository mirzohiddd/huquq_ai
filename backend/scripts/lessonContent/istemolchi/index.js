"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  ISTE'MOLCHI HUQUQLARI — 50 MAVZULI DARSLIK
 * ═══════════════════════════════════════════════════════════════════
 *
 * Manbalar: Iste'molchilarning huquqlarini himoya qilish
 * to'g'risidagi qonun (IHQ, 33 modda) va Fuqarolik kodeksi
 * 2-qism (FK2) — oldi-sotdi, pudrat va xizmat ko'rsatish.
 *
 * ⚠️ NIMA UCHUN IKKI MANBA: IHQ atigi 33 moddadan iborat va u
 * asosiy huquqlarni belgilaydi, lekin oldi-sotdining texnik
 * qoidalari (sifat, kafolat, butlik, miqdor, assortiment) FK2 da.
 * Faqat IHQ ga tayanish darsni yuzaki qilib qo'yardi.
 *
 * ── KETMA-KETLIK MANTIG'I ──────────────────────────────────────────
 * Tartib xaridorning haqiqiy yo'lini takrorlaydi: kim ekanini
 * bilish → xarid qilish → sifat muammosi → talab qo'yish →
 * himoya qilish.
 *
 *   1-qism  (1–8)   ASOSLAR        — kim, qanday huquq, ma'lumot
 *   2-qism  (9–18)  XARID QILISH   — shartnoma, narx, onlayn, qaytarish
 *   3-qism  (19–28) SIFAT VA KAFOLAT — muddatlar, nuqson, talablar
 *   4-qism  (29–38) ISH VA XIZMATLAR — pudrat, moliyaviy, kommunal
 *   5-qism  (39–50) HIMOYA QILISH  — da'vo, ekspertiza, agentlik, sud
 *
 * 5-qism ATAYLAB oxirida: u "endi nima qilaman" degan savolga
 * javob beradi va oldingi qismlardagi bilimni harakatga
 * aylantiradi.
 *
 * ⚠️ HUQUQIY ANIQLIK QOIDASI: matnda aniq muddat, foiz yoki summa
 * YOZILMAYDI — ular `lawRefs` orqali bazadagi JONLI qonun
 * matnidan keladi va qonun yangilanganda o'z-o'zidan yangilanadi.
 *
 * ⚠️ Barcha `lawRefs` bazadan tekshirilgan.
 */

const { assembleLesson } = require("../assemble");

const SECTIONS = assembleLesson(
  "Iste'molchi huquqlari",
  [
    "./01-asoslar",
    "./02-xarid",
    "./03-sifat-kafolat",
    "./04-xizmatlar",
    "./05-himoya",
  ],
  require,
);

module.exports = { SECTIONS };
