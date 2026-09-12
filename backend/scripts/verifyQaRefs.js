"use strict";
/**
 * SAVOL-JAVOB MARKAZIDAGI QONUN HAVOLALARINI TEKSHIRISH.
 *
 * Nima uchun kerak: savol matnida modda raqami yozilmaydi, javob esa
 * `refs` orqali HAQIQIY moddaga bog'lanadi va matn bazadan jonli
 * olinadi. Havola mavjud bo'lmagan moddaga qarasa, sahifada iqtibos
 * JIMGINA ko'rinmay qoladi — xato sezilmasdan qolib ketadi.
 *
 * ⚠️ Faqat "modda bor" tekshiruvi YETARLI EMAS: mavjud, lekin BOSHQA
 * mavzudagi moddaga havola sahifada ishonarli ko'rinadigan, lekin
 * noto'g'ri iqtibos beradi. Shuning uchun topilgan moddaning
 * SARLAVHASI ham chiqariladi — mavzuga mos kelishini ko'z bilan
 * tasdiqlash mumkin bo'lsin.
 *
 * Ishlatish: node scripts/verifyQaRefs.js
 */
require("dotenv").config();
const mongoose = require("mongoose");

async function main() {
  const { QUESTIONS } = require("../services/qaContent");
  const { LegalChunk } = require("../models");

  await mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 20000,
  });

  const refs = [];
  for (const q of QUESTIONS) {
    for (const r of q.refs) {
      refs.push({ slug: q.slug, code: String(r.code), article: String(r.article) });
    }
  }

  const found = await LegalChunk.find({
    $or: refs.map((r) => ({ lawCode: r.code, articleNumber: r.article })),
  })
    .select("lawCode articleNumber title text -_id")
    .lean();

  const map = new Map(found.map((a) => [`${a.lawCode}:${a.articleNumber}`, a]));
  const bad = [];

  for (const r of refs) {
    const hit = map.get(`${r.code}:${r.article}`);
    if (!hit) {
      bad.push(r);
      continue;
    }
    // Konstitutsiyada modda sarlavhasi yo'q — matn boshi ko'rsatiladi.
    const label =
      (hit.title || "").trim() ||
      `${hit.text.replace(/\s+/g, " ").slice(0, 70)}…`;
    console.log(`  ${r.code} ${r.article} — ${label}   [${r.slug}]`);
  }

  console.log(`\nJami: ${refs.length} havola, ${bad.length} xato`);
  for (const r of bad) {
    console.log(`  ❌ TOPILMADI: ${r.code} ${r.article} (${r.slug})`);
  }

  await mongoose.disconnect();
  process.exit(bad.length ? 1 : 0);
}

main().catch((e) => {
  console.error("Xato:", e.message);
  process.exit(1);
});
