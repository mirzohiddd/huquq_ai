"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  JINOIY JAVOBGARLIK — 50 MAVZULI DARSLIK
 * ═══════════════════════════════════════════════════════════════════
 *
 * Manba: Jinoyat kodeksi (JK, 404 modda).
 *
 * ⚠️ DARSLIKNING YO'NALISHI: bu darslik jinoyat sodir etishni
 * emas, HUQUQNI TUSHUNISHNI o'rgatadi. Oddiy fuqaro uchun
 * yozilgan: qachon javobgarlik yuzaga keladi, qanday himoya
 * vositalari mavjud va jabrlanuvchi hamda ayblanuvchi sifatida
 * qanday huquqlarga egasiz.
 *
 * Shuning uchun 3-qismda jinoyat tarkiblari JABRLANUVCHI nuqtai
 * nazaridan berilgan (qanday himoyalanish, qanday dalil to'plash),
 * 4-qism esa butunlay amaliy huquqlarga bag'ishlangan.
 *
 * ── KETMA-KETLIK MANTIG'I ──────────────────────────────────────────
 *   1-qism  (1–10)  ASOSLAR         — jinoyat nima, ayb, mudofaa
 *   2-qism  (11–22) JAZO            — turlari, tayinlash, ozod qilish
 *   3-qism  (23–34) JINOYAT TURLARI — shaxs, mulk, korrupsiya
 *   4-qism  (35–50) HUQUQLAR        — himoyachi, ariza, dalil, shikoyat
 *
 * 4-QISM ATAYLAB ENG KATTA (16 mavzu): foydalanuvchi uchun eng
 * qimmatli qism aynan shu — nazariya emas, "endi nima qilaman"
 * degan savolga javob.
 *
 * ⚠️ HUQUQIY ANIQLIK QOIDASI: matnda aniq muddat, jarima miqdori
 * yoki jazo yillari YOZILMAYDI — ular `lawRefs` orqali bazadagi
 * JONLI qonun matnidan keladi va qonun yangilanganda o'z-o'zidan
 * yangilanadi. Bu ayniqsa jinoyat huquqida muhim: jazo miqdorlari
 * tez-tez o'zgaradi va eskirgan raqam og'ir chalg'itishga olib
 * kelardi.
 *
 * ⚠️ Barcha `lawRefs` bazadan tekshirilgan.
 */

const { assembleLesson } = require("../assemble");

const SECTIONS = assembleLesson(
  "Jinoiy javobgarlik",
  [
    "./01-asoslar",
    "./02-jazo",
    "./03-shaxsga-qarshi",
    "./04-huquqlar-amaliyot",
  ],
  require,
);

module.exports = { SECTIONS };
