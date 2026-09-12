"use strict";
/**
 * Testlarni kengaytiradi: mavjud testlarga yangi savollar qo'shadi va
 * ro'yxatda bo'lmagan mavzular uchun yangi test yaratadi
 * (manba: scripts/testContentData.js).
 *
 * ⚠️ NIMAGA TEGILMAYDI:
 *  - mavjud savollar O'ZGARTIRILMAYDI va O'CHIRILMAYDI — faqat yangilari
 *    qo'shiladi (admin qo'lda tahrirlagan savol saqlanib qoladi);
 *  - `match` ga tushmagan testlar (admin qo'shganlari) umuman tegilmaydi;
 *  - mavjud testning `title` i o'zgartirilmaydi (foydalanuvchi ko'nikkan
 *    nom va tarjima keshi shu nomga bog'langan), faqat `desc` bo'sh yoki
 *    eskirgan bo'lsa yangilanadi.
 *
 * IDEMPOTENT: savol matni bo'yicha solishtiriladi, shuning uchun skriptni
 * qayta ishga tushirish takroriy savol hosil qilmaydi.
 *
 * Ishga tushirish:  node scripts/expandTests.js
 */
const { TEST_CONTENT } = require("./testContentData");

// Savol matnini solishtirish uchun normallashtirish: registr, ortiqcha
// bo'shliq va o'zbek apostrofining turli variantlari (' ʼ ʻ ' ) hisobga
// olinadi — aks holda "ko'chmas" va "koʻchmas" boshqa savol deb qabul
// qilinardi va takrorlanib ketardi.
function normQ(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[''ʼʻ`]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

async function expandTests() {
  const { Quiz } = require("../models");
  const all = await Quiz.find().lean();
  const report = [];

  for (const tpl of TEST_CONTENT) {
    const found = all.find((q) => tpl.match.test(q.title || ""));

    /* ── Yangi test ── */
    if (!found) {
      const created = await Quiz.create({
        title: tpl.title,
        desc: tpl.desc,
        questions: tpl.questions,
        order: tpl.order,
        published: true,
      });
      report.push({
        title: created.title,
        status: "yangi test yaratildi",
        questions: created.questions.length,
      });
      continue;
    }

    /* ── Mavjud testga savol qo'shish ── */
    const existing = new Set((found.questions || []).map((q) => normQ(q.q)));
    const fresh = tpl.questions.filter((q) => !existing.has(normQ(q.q)));

    if (!fresh.length) {
      report.push({
        title: found.title,
        status: "o'zgarishsiz (savollar allaqachon mavjud)",
        questions: found.questions.length,
      });
      continue;
    }

    const update = { $push: { questions: { $each: fresh } } };
    // Tavsif faqat manba faylda aniqroq matn bo'lsa yangilanadi.
    if (tpl.desc && tpl.desc !== found.desc) {
      update.$set = { desc: tpl.desc };
    }
    await Quiz.updateOne({ _id: found._id }, update);

    report.push({
      title: found.title,
      status: "savollar qo'shildi",
      before: found.questions.length,
      added: fresh.length,
      questions: found.questions.length + fresh.length,
    });
  }

  return report;
}

module.exports = { expandTests };

if (require.main === module) {
  require("dotenv").config();
  const mongoose = require("mongoose");
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(async () => {
      const report = await expandTests();
      for (const r of report) {
        console.log(
          `${r.title.padEnd(34)} ${r.status}` +
            (r.added ? ` (+${r.added} → ${r.questions})` : ` (${r.questions})`),
        );
      }
      const total = report.reduce((n, r) => n + (r.questions || 0), 0);
      console.log(`\nJami: ${report.length} ta test, ${total} ta savol.`);
      process.exit(0);
    })
    .catch((err) => {
      console.error("Xato:", err.message);
      process.exit(1);
    });
}
