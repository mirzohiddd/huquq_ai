"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  YER VA KO'CHMAS MULK — 50 MAVZULI DARSLIK
 * ═══════════════════════════════════════════════════════════════════
 *
 * Manbalar: Yer kodeksi (YK), Uy-joy kodeksi (UJK), Fuqarolik
 * kodeksi 2-qism (FK2 — ko'chmas mulkni sotish).
 *
 * ⚠️ UCH MANBA ATAYLAB: foydalanuvchi uchun "yer va uy" bitta
 * amaliy masala, lekin qonunchilikda u uch hujjatga bo'lingan.
 * Faqat bittasiga tayanish darsni yarim qoldirardi — masalan
 * YK da uy sotish qoidalari yo'q, UJK da esa yer toifalari.
 *
 * ── KETMA-KETLIK MANTIG'I ──────────────────────────────────────────
 *   1-qism  (1–10)  YER ASOSLARI    — toifa, huquq turlari, ro'yxat
 *   2-qism  (11–20) YER OLISH       — berish, qurilish, majburiyatlar
 *   3-qism  (21–28) SERVITUT/TUGASH — servitut, olib qo'yish, zarar
 *   4-qism  (29–42) UY-JOY          — mulk, ijara, ko'chirish
 *   5-qism  (43–50) BITIM VA NIZO   — sotish, tekshiruv, nizolar
 *
 * UY-JOY ataylab yerdan KEYIN: uy har doim yer ustida joylashadi
 * va yerga bo'lgan huquq tushunilmasa uy-joy masalalari ham
 * to'liq anglashilmaydi (masalan uy sotilganda yerga bo'lgan
 * huquq ham o'tishi).
 *
 * BITIMLAR esa eng oxirida: xavfsiz bitim tuzish uchun yer
 * huquqi, uy-joy va ro'yxatga olish qoidalari allaqachon
 * o'zlashtirilgan bo'lishi kerak.
 *
 * ⚠️ HUQUQIY ANIQLIK QOIDASI: matnda aniq o'lcham, muddat, soliq
 * stavkasi yoki summa YOZILMAYDI — ular `lawRefs` orqali bazadagi
 * JONLI qonun matnidan keladi.
 *
 * ⚠️ Barcha `lawRefs` bazadan tekshirilgan.
 */

const { assembleLesson } = require("../assemble");

const SECTIONS = assembleLesson(
  "Yer va ko'chmas mulk",
  [
    "./01-yer-asoslari",
    "./02-yer-olish",
    "./03-servitut-olib-qoyish",
    "./04-uy-joy",
    "./05-bitim-nizolar",
  ],
  require,
);

module.exports = { SECTIONS };
