"use strict";
/**
 * Qonunlarni lex.uz'dan olib, moddalarga bo'lib, embedding qilib,
 * LegalChunk kolleksiyasiga yuklaydi (RAG uchun).
 *
 * Ishlatilishi:
 *   node scripts/ingestLaws.js              — barcha kuzatiladigan qonunlar
 *   node scripts/ingestLaws.js MK            — faqat bitta qonun (lawCode)
 *
 * Auto-update: server.js har 24 soatda shu skriptni chaqiradi — faqat
 * MATNI O'ZGARGAN moddalar qayta embedding qilinadi (contentHash orqali
 * aniqlanadi), shu bilan xarajat tejaladi va qonun o'zgarishlari (masalan
 * yangi tahrir, modda qo'shilishi/bekor qilinishi) avtomatik tutib olinadi.
 *
 * lex.uz HTML tuzilishi (tekshirilgan, 2026-08-03):
 *   <div class="CLAUSE_DEFAULT lx_elem">...<div name="-ID" id="-ID">N-modda. Sarlavha</div></div>
 *   <div class="ACT_TEXT lx_elem">...<div name="-ID" id="-ID">Modda matni (paragraf)</div></div>
 *   <div class="TEXT_HEADER_DEFAULT ...">...</div>  — bo'lim/bob sarlavhasi, modda EMAS
 * Bir moddadan keyin bir nechta ACT_TEXT paragraf kelishi mumkin — ular
 * navbatdagi CLAUSE_DEFAULT (keyingi modda) kelgunga qadar shu moddaga tegishli.
 */
// MUHIM: dotenv eng birinchi yuklanishi kerak — aks holda quyida
// require qilinadigan embeddings.js OPENAI_API_KEY'ni hali bo'sh holda
// o'qib, modul darajasida "client = null" bo'lib qolib ketadi (keyin
// dotenv yuklansa ham bu o'zgarmaydi, chunki require natijasi keshlanadi).
require("dotenv").config();

const crypto = require("crypto");
const cheerio = require("cheerio");
const mongoose = require("mongoose");
const { getLaws } = require("../services/lawRegistry");
const { embedBatch, isConfigured: embeddingsConfigured } = require("../services/embeddings");

const FETCH_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
  Accept: "text/html,application/xhtml+xml",
  "Accept-Language": "uz,ru;q=0.9",
};

function hashText(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

/**
 * lex.uz "qo'shimcha modda" raqamlarini superscript (<sup>) bilan
 * yozadi, masalan: 276<sup>13</sup>-modda (= "276-13-modda", ya'ni
 * 276-moddadan keyin qo'shilgan 13-modda). Oddiy cheerio .text() bu
 * <sup> tegini ajratuvchisiz matnga qo'shib yuboradi — natijada
 * "276" va "13" chiziqchasiz ulanib, "27613-modda" kabi BUTUNLAY
 * NOTO'G'RI modda raqami hosil bo'ladi (haqiqiy son 276 emas, 27613
 * bo'lib qolardi).
 *
 * Shu funksiya <sup> matnidan oldin "-" qo'yib, keyin oddiy matnga
 * aylantiradi — shunda "276-13-modda" to'g'ri chiqadi.
 */
function extractText($, el) {
  const $target = $(el).find("> div[name]").first();
  $target.find("sup").each((_, supEl) => {
    const $sup = $(supEl);
    $sup.replaceWith("-" + $sup.text());
  });
  return $target.text().trim().replace(/\s+/g, " ");
}

/** lex.uz sahifasidan moddalarni ajratib oladi */
function parseArticles(html) {
  const $ = cheerio.load(html);
  const elements = $(".CLAUSE_DEFAULT, .ACT_TEXT");
  const articles = [];
  let current = null;

  elements.each((_, el) => {
    const $el = $(el);
    const isHeading = $el.hasClass("CLAUSE_DEFAULT");
    const text = extractText($, el);
    if (!text) return;

    if (isHeading) {
      const m = text.match(/^(\d+(?:-\d+)?)-modda\.?\s*(.*)$/i);
      if (current) articles.push(current);
      current = m ? { articleNumber: m[1], title: m[2].trim(), text: "" } : null;
    } else if (current) {
      current.text += (current.text ? "\n" : "") + text;
    }
  });
  if (current) articles.push(current);

  return articles.filter((a) => a.text.trim().length > 0);
}

/* ── TUZILMA XARITASI: BO'LIM → BOB → MODDA ────────────────────
   Har bir modda qaysi bo'lim va bobga tegishli ekanini aniqlaydi:
     { "25": { section: "IKKINCHI BOʻLIM. ...", chapter: "VII bob. ..." } }

   ⚠️ `parseArticles()` ATAYLAB o'zgartirilmadi — u 21 ta hujjat uchun
   to'g'ri ishlab turibdi va unga tegish hammasini buzish xavfini
   tug'diradi. Bu funksiya mustaqil: hujjat bo'ylab tartib bilan
   yuradi, sarlavhalarni eslab qoladi va keyingi moddalarga biriktiradi.

   Sarlavhalar lex.uz'da alohida klassda (`search-text`) va
   `parseArticles` ishlatadigan `.CLAUSE_DEFAULT`/`.ACT_TEXT`
   to'plamiga kirmaydi — shuning uchun barcha elementlar keziladi.

   BO'LIM nomlari SON BILAN emas, SO'Z bilan yoziladi ("BIRINCHI
   BOʻLIM") va bosh harfda. Katta harf sharti muhim: modda matni
   ichida "V boʻlimi", "toʻrtinchi boʻlimi" kabi HAVOLALAR uchraydi va
   ular sarlavha deb qabul qilinmasligi kerak. */
const SECTION_RE =
  /^(?:BIRINCHI|IKKINCHI|UCHINCHI|TO[’'ʻʼ]?RTINCHI|BESHINCHI|OLTINCHI|YETTINCHI|SAKKIZINCHI|TO[’'ʻʼ]?QQIZINCHI|O[’'ʻʼ]?NINCHI)\s+BO[’'ʻʼ]?LIM\b/;

const CHAPTER_RE = /^(?:[IVXLC]+|\d+)\s*[-–]?\s*(?:bob|BOB|bo[’'ʻʼ]?lim|BO[’'ʻʼ]?LIM)\b/i;

function parseChapterMap(html) {
  const $ = cheerio.load(html);
  const own = (el) =>
    $(el).clone().children().remove().end().text().replace(/\s+/g, " ").trim();

  const map = {};
  let section = "";
  let chapter = "";
  $("*").each((_, el) => {
    const t = own(el);
    if (!t || t.length > 200) return;

    if (SECTION_RE.test(t)) {
      section = t;
      /* Yangi bo'lim boshlanganda BOB tozalanadi. Aks holda oldingi
         bo'limning oxirgi bobi keyingi bo'lim moddalariga "yopishib"
         qolardi — haqiqiy holat: Konstitutsiyaning 154-155-moddalari
         "XXVII bob. Mudofaa va xavfsizlik" ga tegishli deb ko'rsatilardi,
         holbuki ular OLTINCHI BO'LIM ga tegishli va o'z bobi yo'q. */
      chapter = "";
      return;
    }
    if (CHAPTER_RE.test(t)) {
      chapter = t;
      return;
    }

    const art = t.match(/^(\d+(?:-\d+)?)-modda\b/i);
    // Faqat BIRINCHI uchrashi hisobga olinadi — hujjat oxiridagi
    // havolalar/izohlarda modda raqami qayta uchrashi mumkin.
    if (art && !map[art[1]]) map[art[1]] = { section, chapter };
  });
  return map;
}

async function fetchLawHtml(url) {
  const resp = await fetch(url, { headers: FETCH_HEADERS });
  if (!resp.ok) throw new Error(`HTTP ${resp.status} — ${url}`);
  const html = await resp.text();
  if (html.includes("404. Страница не найдена") || html.includes("Страница не найдена")) {
    throw new Error(`Hujjat topilmadi (404) — lex.uz ID eskirgan bo'lishi mumkin: ${url}`);
  }
  return html;
}

async function ingestLaw(law) {
  const { LegalChunk } = require("../models");
  const html = await fetchLawHtml(law.url);
  const articles = parseArticles(html);
  const chapterMap = parseChapterMap(html);

  let added = 0,
    updated = 0,
    unchanged = 0;
  const toEmbed = []; // { articleData, hash }

  /* ⚠️ TEZLIK — bu joy avval saytni sekinlashtirishning ASOSIY sababi edi.
     Har bir modda uchun IKKI ta alohida baza so'rovi bajarilardi
     (`findOne` + o'zgarmaganlar uchun `updateOne`). 20 ta kodeks va
     8000 ga yaqin modda = ~16 000 ta KETMA-KET so'rov. Atlas'gacha
     borish-kelish ~30-50 ms bo'lgani uchun bu 8-13 daqiqa sof kutish
     demakdir — va bu server HAR ISHGA TUSHGANDA takrorlanardi
     (Render bepul tarifi tez-tez qayta ishga tushadi), ya'ni server
     shu vaqt davomida so'rovlarga zo'rg'a javob berardi.

     Endi: bitta kodeksning BARCHA mavjud hash'lari BITTA so'rovda
     olinadi, `lastCheckedAt` esa oxirida BITTA `updateMany` bilan
     yangilanadi. 16 000 so'rov → kodeks boshiga ~2 ta. */
  const existingRows = await LegalChunk.find({ lawCode: law.code })
    .select("articleNumber contentHash -_id")
    .lean();
  const existingMap = new Map(
    existingRows.map((r) => [r.articleNumber, r.contentHash]),
  );

  const unchangedNumbers = [];
  for (const art of articles) {
    const hash = hashText(art.text);
    const prev = existingMap.get(art.articleNumber);

    if (prev && prev === hash) {
      unchanged++;
      unchangedNumbers.push(art.articleNumber);
      continue;
    }
    toEmbed.push({ art, hash, isNew: prev === undefined });
  }

  // O'zgarmaganlarning "oxirgi tekshirilgan" vaqti — bitta so'rovda
  if (unchangedNumbers.length) {
    await LegalChunk.updateMany(
      { lawCode: law.code, articleNumber: { $in: unchangedNumbers } },
      { $set: { lastCheckedAt: new Date() } },
    );
  }

  // Embeddinglarni partiyalarda olish (API limitidan saqlanish uchun)
  const BATCH = 40;
  for (let i = 0; i < toEmbed.length; i += BATCH) {
    const batch = toEmbed.slice(i, i + BATCH);
    const texts = batch.map(
      ({ art }) => `${law.name}, ${art.articleNumber}-modda. ${art.title}\n${art.text}`,
    );
    const vectors = await embedBatch(texts);

    for (let j = 0; j < batch.length; j++) {
      const { art, hash, isNew } = batch[j];
      await LegalChunk.updateOne(
        { lawCode: law.code, articleNumber: art.articleNumber },
        {
          $set: {
            lawName: law.name,
            lawDocId: law.docId,
            title: art.title,
            section: chapterMap[art.articleNumber]?.section || "",
            chapter: chapterMap[art.articleNumber]?.chapter || "",
            text: art.text,
            sourceUrl: law.url,
            contentHash: hash,
            embedding: vectors[j],
            lastCheckedAt: new Date(),
          },
        },
        { upsert: true },
      );
      if (isNew) added++;
      else updated++;
    }
  }

  // Manba sahifasida endi mavjud bo'lmagan (bekor qilingan, yoki
  // avvalgi noto'g'ri parsing natijasida xato raqam bilan saqlangan)
  // eski yozuvlarni tozalaymiz — aks holda ular bazada abadiy "yetim"
  // bo'lib qolib, RAG qidiruvida noto'g'ri/eskirgan modda sifatida
  // chiqishda davom etaverardi.
  const currentNumbers = articles.map((a) => a.articleNumber);
  const { deletedCount: removed } = await LegalChunk.deleteMany({
    lawCode: law.code,
    articleNumber: { $nin: currentNumbers },
  });

  return { law: law.code, totalArticles: articles.length, added, updated, unchanged, removed };
}

async function ingestAllLaws(onlyCode, { force = false } = {}) {
  if (!embeddingsConfigured) {
    throw new Error("OPENAI_API_KEY sozlanmagan — embedding qilib bo'lmaydi");
  }
  // Yoqilgan hujjatlar BAZADAN olinadi — admin qo'shgan yangi kodeks
  // shu yerga avtomatik tushadi, kodga tegish shart emas.
  const tracked = await getLaws();
  let laws = onlyCode ? tracked.filter((l) => l.code === onlyCode) : tracked;

  /* ⚠️ TEZLIK: yaqinda tekshirilgan kodekslar CHETLAB o'tiladi.

     Sabab: bu funksiya server HAR ISHGA TUSHGANDA chaqiriladi. Render
     bepul tarifi kuniga bir necha marta qayta ishga tushadi va har
     safar 20 ta kodeksning lex.uz sahifasi qayta yuklanib, 7000 ta
     moddaning hash'i qayta hisoblanardi — qonun matni o'zgarmagan
     bo'lsa ham. Bu server resurslarini band qilib, saytni
     sekinlashtirardi.

     Endi oxirgi tekshiruvdan 20 soat o'tmagan kodeks o'tkazib
     yuboriladi. Sutkalik avtomatik yangilanish (24 soat) baribir
     ishlaydi, admin panelidan qo'lda yuklash esa `onlyCode` bilan
     keladi va bu cheklovga TUSHMAYDI. */
  if (!onlyCode && !force) {
    const FRESH_MS = 20 * 60 * 60 * 1000;
    const now = Date.now();
    const { LawSource } = require("../models");
    const rows = await LawSource.find()
      .select("code lastIngestAt -_id")
      .lean();
    const lastMap = new Map(rows.map((r) => [r.code, r.lastIngestAt]));

    const before = laws.length;
    laws = laws.filter((l) => {
      const last = lastMap.get(l.code);
      return !last || now - new Date(last).getTime() > FRESH_MS;
    });
    const skipped = before - laws.length;
    if (skipped) {
      console.log(
        `⚖️  ${skipped} ta kodeks yaqinda tekshirilgan — o'tkazib yuborildi`,
      );
    }
    if (!laws.length) return [];
  }

  const results = [];
  for (const law of laws) {
    try {
      const r = await ingestLaw(law);
      results.push(r);
      // "Yaqinda tekshirilgan" belgisi — keyingi ishga tushishda shu
      // kodeks behuda qayta ishlanmasligi uchun
      try {
        const { LawSource } = require("../models");
        await LawSource.updateOne(
          { code: law.code },
          { $set: { lastIngestAt: new Date(), lastIngestStats: r, lastIngestError: "" } },
        );
      } catch {
        /* belgilanmasa ham yuklash muvaffaqiyatli hisoblanadi */
      }
      console.log(
        `✅ ${law.code} (${law.name}): ${r.totalArticles} modda — ${r.added} yangi, ${r.updated} yangilandi, ${r.unchanged} o'zgarmadi, ${r.removed || 0} eskirgan o'chirildi`,
      );
    } catch (err) {
      console.error(`❌ ${law.code} (${law.name}): ${err.message}`);
      results.push({ law: law.code, error: err.message });
    }
  }
  return results;
}

module.exports = { ingestAllLaws, parseArticles, parseChapterMap };

// To'g'ridan-to'g'ri ishga tushirilganda (CLI orqali)
if (require.main === module) {
  const onlyCode = process.argv[2] || null;
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(async () => {
      console.log("✅ MongoDB ulandi. Qonunlarni yuklash boshlandi...\n");
      await ingestAllLaws(onlyCode);
      await mongoose.disconnect();
      process.exit(0);
    })
    .catch((err) => {
      console.error("❌ Xato:", err.message);
      process.exit(1);
    });
}
