"use strict";
/**
 * DARSLAR MODULLARI UCHUN TEZKOR TEKSHIRUV
 *
 * Nima uchun `verifyLessonRefs.js` dan alohida: u BAZADAGI darslarni
 * (yoki butun kutubxonani) tekshiradi va bazaga ulanishni talab
 * qiladi. Bu skript esa kontent YOZILAYOTGAN paytda ishlaydi — hali
 * seed qilinmagan modul fayllarini tekshiradi va tuzilma xatolarini
 * (bo'sh matn, yo'q maydon, takroriy kalit, noto'g'ri modul id)
 * bazaga ulanmasdan topadi.
 *
 * Modda havolalari (`lawRefs`) BAZADAN tekshirilishi shart, shuning
 * uchun `--refs` bayrog'i bilan ishga tushirilganda u `verifyRefs`
 * ni ham chaqiradi. Bayroqsiz — faqat tuzilma (tez, offline).
 *
 * Ishlatish:
 *   node scripts/checkLessonModules.js          — tuzilma
 *   node scripts/checkLessonModules.js --refs   — tuzilma + modda havolalari
 */

const { NEW_LESSONS, MODULES } = require("./lessons");

const MODULE_IDS = new Set(MODULES.map((m) => m.id));
const LEVELS = new Set(["basic", "mid", "advanced"]);

/* Bo'lim matni uchun eng kam hajm. Nima uchun tekshiriladi: qisqa
   matn dars sahifasida "kontent bor" bo'lib ko'rinadi, lekin
   o'quvchiga hech narsa bermaydi — aynan shu muammo tufayli darslar
   qayta yozilgan edi. Chegara pastdan qo'yilgan (ogohlantirish
   sifatida), maqsad — bo'sh yoki bir jumlalik bo'limni tutish. */
const MIN_TEXT = 400;

function checkStructure() {
  const problems = [];
  const add = (key, msg) => problems.push(`${key}: ${msg}`);

  for (const l of NEW_LESSONS) {
    const key = l.key || "(kalitsiz!)";
    if (!l.key) add(key, "libraryKey yo'q");
    if (!l.title?.trim()) add(key, "sarlavha yo'q");
    if (!l.desc?.trim()) add(key, "tavsif yo'q");
    if (!MODULE_IDS.has(l.category)) {
      add(key, `noma'lum modul: "${l.category}"`);
    }
    if (!LEVELS.has(l.level)) add(key, `noma'lum daraja: "${l.level}"`);
    if (!Number.isFinite(l.order)) add(key, "order raqam emas");
    if (!Array.isArray(l.objectives) || l.objectives.length < 3) {
      add(key, "objectives kamida 3 ta bo'lishi kerak");
    }
    if (!Array.isArray(l.practicalSteps) || l.practicalSteps.length < 3) {
      add(key, "practicalSteps kamida 3 ta bo'lishi kerak");
    }
    if (!Array.isArray(l.sections) || l.sections.length < 2) {
      add(key, "kamida 2 ta bo'lim kerak");
      continue;
    }
    l.sections.forEach((s, i) => {
      const at = `${i + 1}-bo'lim`;
      if (!s.heading?.trim()) add(key, `${at}: sarlavha yo'q`);
      const len = (s.text || "").length;
      if (len < MIN_TEXT) add(key, `${at}: matn juda qisqa (${len} belgi)`);
      if (!s.example?.trim()) add(key, `${at}: misol yo'q`);
      if (!Array.isArray(s.keyPoints) || s.keyPoints.length < 3) {
        add(key, `${at}: keyPoints kamida 3 ta bo'lishi kerak`);
      }
      if (!s.warning?.trim()) add(key, `${at}: ogohlantirish yo'q`);
      if (!Array.isArray(s.lawRefs) || !s.lawRefs.length) {
        add(key, `${at}: lawRefs yo'q — dars qonunga bog'lanmagan`);
      }
    });
  }
  return problems;
}

function summary() {
  const byModule = new Map();
  for (const l of NEW_LESSONS) {
    const m = byModule.get(l.category) || { n: 0, chars: 0 };
    m.n += 1;
    m.chars += (l.sections || []).reduce(
      (sum, s) =>
        sum +
        (s.text || "").length +
        (s.example || "").length +
        (s.warning || "").length +
        (s.keyPoints || []).join(" ").length,
      0,
    );
    byModule.set(l.category, m);
  }
  return byModule;
}

if (require.main === module) {
  (async () => {
    const problems = checkStructure();
    const byModule = summary();

    console.log("MODULLAR:");
    let total = 0;
    for (const m of MODULES) {
      const s = byModule.get(m.id);
      if (!s) {
        console.log(`  ${m.id.padEnd(16)} —`);
        continue;
      }
      total += s.n;
      console.log(
        `  ${m.id.padEnd(16)} ${String(s.n).padStart(3)} dars   ` +
          `o'rtacha ${Math.round(s.chars / s.n)} belgi`,
      );
    }
    console.log(`\n  JAMI: ${total} dars`);

    if (problems.length) {
      console.log(`\n❌ TUZILMA XATOLARI (${problems.length}):`);
      problems.forEach((p) => console.log(`   ${p}`));
    } else {
      console.log("\n✅ Tuzilma toza");
    }

    if (process.argv.includes("--refs")) {
      require("dotenv").config();
      const mongoose = require("mongoose");
      await mongoose.connect(process.env.MONGODB_URI);
      const { collectRefs, verifyRefs } = require("./verifyLessonRefs");
      const refs = await collectRefs(NEW_LESSONS);
      const { ok, bad } = await verifyRefs(refs);
      console.log(
        `\nMODDA HAVOLALARI: ${refs.length} ta — ` +
          `${ok.length} to'g'ri, ${bad.length} xato`,
      );
      if (bad.length) {
        console.log("❌ MAVJUD BO'LMAGAN MODDALAR:");
        bad.forEach((r) =>
          console.log(`   ${r.code} ${r.article}  ← "${r.lesson}"`),
        );
      }
      await mongoose.disconnect();
      if (bad.length) process.exit(1);
    }

    process.exit(problems.length ? 1 : 0);
  })().catch((e) => {
    console.error("XATO:", e.message);
    process.exit(1);
  });
}

module.exports = { checkStructure };
