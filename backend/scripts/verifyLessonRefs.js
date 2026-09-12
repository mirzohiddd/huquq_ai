"use strict";
/**
 * DARSLARDAGI MODDA HAVOLALARINI TEKSHIRISH
 *
 * Nima uchun kerak: dars matnida modda raqami yozilmaydi, lekin
 * `lawRefs` orqali HAQIQIY moddaga havola beriladi. Agar havola
 * mavjud bo'lmagan moddaga qarasa, dars sahifasida iqtibos JIMGINA
 * ko'rinmay qoladi (`attachLawQuotes` topa olmaganini o'tkazib
 * yuboradi) — ya'ni xato sezilmasdan qolib ketadi.
 *
 * Shu sabab har bir havola bazadan tekshiriladi va topilganining
 * SARLAVHASI chiqariladi — mavzuga mos kelishini ko'z bilan ham
 * tasdiqlash mumkin bo'lsin.
 *
 * Ishlatish:
 *   node scripts/verifyLessonRefs.js            — bazadagi darslar
 *   node scripts/verifyLessonRefs.js --library  — scripts/lessons/ (kutubxona)
 */

async function collectRefs(source) {
  const out = [];
  for (const lesson of source) {
    for (const sec of lesson.sections || []) {
      for (const r of sec.lawRefs || []) {
        out.push({
          lesson: lesson.title,
          heading: sec.heading,
          code: String(r.code || "").toUpperCase(),
          article: String(r.article || ""),
        });
      }
    }
  }
  return out;
}

async function verifyRefs(refs) {
  const { LegalChunk } = require("../models");
  if (!refs.length) return { ok: [], bad: [] };

  const found = await LegalChunk.find({
    $or: refs.map((r) => ({ lawCode: r.code, articleNumber: r.article })),
  })
    .select("lawCode articleNumber title text -_id")
    .lean();

  const map = new Map(found.map((a) => [`${a.lawCode}:${a.articleNumber}`, a]));
  const ok = [];
  const bad = [];
  for (const r of refs) {
    const hit = map.get(`${r.code}:${r.article}`);
    if (hit) {
      ok.push({
        ...r,
        // Konstitutsiyada modda sarlavhasi yo'q — matn boshi ko'rsatiladi
        label: (hit.title || "").trim() || hit.text.replace(/\s+/g, " ").slice(0, 70) + "…",
      });
    } else {
      bad.push(r);
    }
  }
  return { ok, bad };
}

module.exports = { collectRefs, verifyRefs };

if (require.main === module) {
  require("dotenv").config();
  const mongoose = require("mongoose");
  (async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    let source;
    if (process.argv.includes("--library")) {
      source = require("./lessons").NEW_LESSONS;
      console.log("Manba: scripts/lessons/\n");
    } else {
      const { Lesson } = require("../models");
      source = await Lesson.find().select("title sections").lean();
      console.log("Manba: baza (Lesson)\n");
    }

    const refs = await collectRefs(source);
    const { ok, bad } = await verifyRefs(refs);

    let lastLesson = "";
    for (const r of ok) {
      if (r.lesson !== lastLesson) {
        console.log(`\n── ${r.lesson}`);
        lastLesson = r.lesson;
      }
      console.log(`   ✅ ${(r.code + " " + r.article).padEnd(11)} ${r.label}`);
    }
    if (bad.length) {
      console.log("\n❌ MAVJUD BO'LMAGAN MODDALAR:");
      bad.forEach((r) =>
        console.log(`   ${r.code} ${r.article}  ← "${r.lesson}" / "${r.heading}"`),
      );
    }
    console.log(
      `\n${bad.length ? "❌" : "✅"} Jami ${refs.length} havola: ${ok.length} to'g'ri, ${bad.length} xato`,
    );
    await mongoose.disconnect();
    process.exit(bad.length ? 1 : 0);
  })().catch((e) => {
    console.error("XATO:", e.message);
    process.exit(1);
  });
}
