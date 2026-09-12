"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  TARJIMA KESHINI OLDINDAN TO'LDIRISH
 * ═══════════════════════════════════════════════════════════════════
 *
 * MUAMMO
 * Foydalanuvchi tilni o'zgartirganda kontent (qonun moddalari,
 * darslar, testlar) AI orqali tarjima qilinadi. Kesh bo'sh bo'lsa bu
 * daqiqalar oladi — o'lchandi: kesh qamrovi 8,7% bo'lganda sahifa
 * matni manba tilida qolib ketardi.
 *
 * YECHIM
 * Kontent FON rejimida, foydalanuvchi so'ramasdan OLDIN tarjima
 * qilinadi. Kesh to'lgach til almashtirish oddiy baza o'qishiga
 * aylanadi (~300 ms) — ya'ni bir zumda.
 *
 * ⚠️ NIMA UCHUN SEKIN-ASTA (bir zarbada emas)
 * Bepul AI provayderlarining kunlik kvotasi bor (Gemini 20 so'rov,
 * Cloudflare 10 000 neuron, Groq 100 000 token) va ular bir kunda
 * tugab qolgan holat allaqachon kuzatilgan. Shu sabab:
 *   · har "to'lqin"da faqat kichik qism tarjima qilinadi;
 *   · to'lqinlar orasida uzoq tanaffus bor;
 *   · AI ishlamayotgani aniqlansa (uzilish himoyasi) ish TO'XTAYDI.
 * Bu server yukini ham, kvotani ham asraydi.
 *
 * NAVBAT TARTIBI — foydalanuvchi eng ko'p ko'radigani birinchi:
 *   1. Konstitutsiya (alohida sahifa, bo'lim/bob/sarlavha/matn)
 *   2. Darslar va testlar (kichik, tez tugaydi)
 *   3. Qonun moddalari SARLAVHALARI (kutubxona ro'yxatida ko'rinadi)
 *   4. Qonun moddalari MATNI (faqat modda ochilganda kerak)
 */
const { LegalChunk, Lesson, Quiz, Translation } = require("../models");
const {
  translateMany,
  translationStatus,
  detectLang,
} = require("./translator");

const TARGET_LANGS = ["ru"];

/* Bir to'lqinda nechta matn tarjima qilinadi.

   ⚠️ O'LCHOV ASOSIDA OSHIRILDI. Avval 60 ta / 3 daqiqa edi — bu butun
   baza (28 412 ta matn) uchun ~24 SOAT degani. Natijada foydalanuvchi
   tilni almashtirganda kodekslarning aksariyati tarjimasiz qolardi:
   o'lchandi — 20 ta kodeksdan faqat 3 tasi to'liq keshlangan, qolgani
   0-41%.

   Endi 200 ta / 1 daqiqa. Bu AI provayderining javob tezligiga
   bog'liq real chegara; kvota tugasa uzilish himoyasi ishni
   to'xtatadi, ya'ni oshirish xavfsiz. */
const BATCH_SIZE = 200;

/* To'lqinlar orasidagi tanaffus */
const WAVE_INTERVAL_MS = 60 * 1000; // 1 daqiqa

let running = false;
let timer = null;

/** Keshda BO'LMAGAN matnlarni ajratib beradi */
async function filterUncached(texts, lang) {
  const crypto = require("crypto");
  const uniq = [...new Set(texts.filter((x) => x && x.trim()))];
  if (!uniq.length) return [];

  const hashes = uniq.map((t) => ({
    text: t,
    hash: crypto.createHash("sha1").update(t, "utf8").digest("hex"),
  }));
  const found = await Translation.find({
    hash: { $in: hashes.map((h) => h.hash) },
    lang,
  })
    .select("hash")
    .lean();
  const have = new Set(found.map((f) => f.hash));

  return hashes
    .filter((h) => !have.has(h.hash))
    // Manba tili bilan bir xil bo'lsa tarjima kerak emas
    .filter((h) => detectLang(h.text) !== lang)
    .map((h) => h.text);
}

/** Navbat: eng muhim kontentdan boshlab matnlar to'plami.
 *
 *  ⚠️ TILGA BOG'LIQ. Rus tili uchun qonun moddalari YIG'ILMAYDI —
 *  ularning RASMIY rus tarjimasi lex.uz'dan yuklab olingan va bazada
 *  saqlanadi (`titleRu`/`textRu`, qarang: `scripts/ingestLawsRu.js`).
 *  Ularni AI bilan qayta tarjima qilish ham keraksiz, ham zararli
 *  bo'lardi: bepul kvota (kuniga ~2 000 matn) rasmiy matn bor joyga
 *  sarflanib, ingliz tiliga hech narsa qolmasdi. */
async function collectTexts(lang) {
  const out = [];
  const officialRu = lang === "ru";

  // 1) Konstitutsiya — alohida sahifa, eng ko'p ochiladigan
  if (!officialRu) {
    const kons = await LegalChunk.find({ lawCode: "KONS" })
      .select("section chapter title text -_id")
      .lean();
    kons.forEach((a) => out.push(a.section, a.chapter, a.title, a.text));
  }

  // 2) Darslar va testlar
  const lessons = await Lesson.find({ published: true })
    .select("title desc sections -_id")
    .lean();
  lessons.forEach((l) => {
    out.push(l.title, l.desc);
    (l.sections || []).forEach((s) => out.push(s.heading, s.html, s.text));
  });

  const quizzes = await Quiz.find({ published: true })
    .select("title desc questions -_id")
    .lean();
  quizzes.forEach((q) => {
    out.push(q.title, q.desc);
    (q.questions || []).forEach((qq) => {
      out.push(qq.q, qq.explain);
      (qq.options || []).forEach((o) => out.push(o));
    });
  });

  if (!officialRu) {
    // 3) Qolgan qonunlarning SARLAVHALARI (ro'yxatda ko'rinadi)
    const titles = await LegalChunk.find({ lawCode: { $ne: "KONS" } })
      .select("title -_id")
      .lean();
    titles.forEach((a) => out.push(a.title));

    // 4) Qolgan qonunlarning MATNI (faqat modda ochilganda kerak —
    //    shuning uchun eng oxirida)
    const texts = await LegalChunk.find({ lawCode: { $ne: "KONS" } })
      .select("text -_id")
      .lean();
    texts.forEach((a) => out.push(a.text));
  }

  return out.filter((x) => x && String(x).trim());
}

/** Bitta to'lqin: har til uchun keshda yo'q matnlardan bir qismi */
async function runWave() {
  if (running) return;
  if (!translationStatus().available) {
    // AI ishlamayapti (kvota tugagan / provayderlar javob bermayapti)
    return;
  }
  running = true;
  try {
    for (const lang of TARGET_LANGS) {
      if (!translationStatus().available) break;
      const all = await collectTexts(lang);
      const missing = await filterUncached(all, lang);
      if (!missing.length) continue;

      const chunk = missing.slice(0, BATCH_SIZE);
      await translateMany(chunk, lang);
      console.log(
        `🌐 Tarjima keshi to'ldirilmoqda [${lang}]: ${chunk.length} ta matn ` +
          `(qolgani ~${missing.length - chunk.length})`,
      );
    }
  } catch (err) {
    console.warn("translationWarmup xato:", err.message);
  } finally {
    running = false;
  }
}

/** Server ishga tushganda chaqiriladi (await QILINMAYDI) */
function startWarmup() {
  if (timer) return;
  // Birinchi to'lqin — server so'rovlarga javob bera boshlagandan keyin
  setTimeout(runWave, 45 * 1000).unref?.();
  timer = setInterval(runWave, WAVE_INTERVAL_MS);
  timer.unref?.();
}

function stopWarmup() {
  if (timer) clearInterval(timer);
  timer = null;
}

module.exports = { startWarmup, stopWarmup, runWave };
