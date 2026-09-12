"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  QONUNLARNING RASMIY RUS MATNINI YUKLASH
 * ═══════════════════════════════════════════════════════════════════
 *
 * MUAMMO
 * Foydalanuvchi tilni rus tiliga o'zgartirganda moddalar o'zbekcha
 * qolib ketardi. Sabab AI tarjimasining KVOTASI edi — o'lchandi:
 *   · Cloudflare — kunlik 10 000 neuron TUGAGAN
 *   · Groq       — 99 583 / 100 000 token TUGAGAN
 *   · Gemini     — daqiqasiga 5 so'rov, kunlik kvota TUGAGAN
 * Shu tezlikda 28 412 ta matn ~14 kun olardi va 20 ta kodeksdan
 * faqat 3 tasi tarjima qilingan edi (MK, BK, UJK).
 *
 * YECHIM — AI UMUMAN KERAK EMAS
 * lex.uz har bir kodeksni RASMIY rus tilida ham chop etadi (alohida
 * hujjat ID bilan). Shu matn to'g'ridan-to'g'ri yuklanadi:
 *   · ANIQ    — rasmiy huquqiy tarjima, AI taxmini emas. Huquqiy
 *               mahsulot uchun bu hal qiluvchi: AI modda mazmunini
 *               buzsa, foydalanuvchi noto'g'ri huquqiy xulosa chiqaradi.
 *   · TEKIN   — hech qanday AI kvotasi sarflanmaydi.
 *   · TEZ     — bir necha daqiqada barcha kodekslar.
 *
 * ⚠️ NIMAGA TEGILMAYDI
 *   · `ingestLaws.js` (o'zbekcha yuklash) — umuman o'zgarmagan.
 *   · `embedding` — RAG o'zbekcha matn bo'yicha ishlaydi va shundayligicha
 *     qoladi. Bu yerda embedding QAYTA HISOBLANMAYDI (kerak emas va
 *     Mistral kvotasini bekorga sarflagan bo'lardi).
 *   · Ingliz tili — lex.uz'da rasmiy ingliz varianti yo'q, shuning uchun
 *     u avvalgidek AI tarjimasi bilan ishlaydi.
 *
 * MODDALAR QANDAY MOSLASHTIRILADI
 * Rus va o'zbek hujjatlari BIR XIL modda raqamlashiga ega, shuning
 * uchun moslash `{lawCode, articleNumber}` bo'yicha amalga oshiriladi.
 * Mos kelmagan modda (manbalar tahriri farq qilsa) shunchaki
 * o'tkazib yuboriladi — hech narsa buzilmaydi, o'sha modda uchun
 * tizim AI tarjimasiga qaytadi.
 */
const cheerio = require("cheerio");
const { getLaws } = require("../services/lawRegistry");

const FETCH_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
    "(KHTML, like Gecko) Chrome/120.0 Safari/537.36",
};

/** <sup> ni chiziqcha bilan ajratadi — "276<sup>13</sup>" → "276-13".
    Izoh uchun qarang: `ingestLaws.js` dagi shu nomli funksiya. */
function extractText($, el) {
  const $target = $(el).find("> div[name]").first();
  $target.find("sup").each((_, supEl) => {
    const $sup = $(supEl);
    $sup.replaceWith("-" + $sup.text());
  });
  return $target.text().trim().replace(/\s+/g, " ");
}

/* Rus tilidagi modda sarlavhasi: "Статья 25. Nomi" yoki "Статья 61-1. ..." */
const ARTICLE_RE = /^Стать[яи]\s+(\d+(?:-\d+)?)\.?\s*(.*)$/i;

/* Bo'lim: "РАЗДЕЛ ПЕРВЫЙ. ОСНОВНЫЕ ПРИНЦИПЫ".
   Katta harf sharti ATAYLAB — modda matni ichida "в разделе втором"
   kabi HAVOLALAR uchraydi va ular sarlavha deb qabul qilinmasligi
   kerak (o'zbekcha yuklashda ham xuddi shu qoida bor). */
const SECTION_RU_RE = /^РАЗДЕЛ\s+[А-ЯЁ]/;

/* ⚠️ KIRILL HOMOGLIFLARI — nozik va oson e'tibordan chetda qoladigan xato.

   lex.uz rus sahifalarida rim raqamlari BIR XIL emas: bitta hujjat
   ichida ham lotin, ham kirill harflari aralash ishlatiladi.
   Haqiqiy misol (Konstitutsiya):
     "Глава VIII"  → V,I lotin        (U+0056, U+0049)
     "Глава IХ"    → X KIRILL         (U+0425)
     "Глава ХII"   → X KIRILL         (U+0425)
     "Глава XVIII" → X LOTIN          (U+0058)
   Ular ekranda BIR XIL ko'rinadi, lekin `[IVXLC]` faqat lotinni
   taniydi — natijada IX-bobdan keyingi barcha boblar aniqlanmay
   qolgan edi (o'lchandi: Konstitutsiyaning 3-bo'limidan boshlab
   boblar rus tilida bo'sh chiqardi).

   Shuning uchun tekshirishdan OLDIN homogliflar lotinga o'giriladi. */
const CYRILLIC_ROMAN = { "Х": "X", "С": "C", "І": "I", "М": "M", "В": "V" };

function normalizeRoman(s) {
  return String(s).replace(/[ХСІМВ]/g, (c) => CYRILLIC_ROMAN[c]);
}

/* Bob: "Глава I. ...", "ГЛАВА 5. ..." */
const CHAPTER_RU_RE = /^ГЛАВА\s+([IVXLC]+|\d+)\b/i;

/** Rus sahifasidan moddalarni ajratib oladi */
function parseArticlesRu(html) {
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
      const m = text.match(ARTICLE_RE);
      if (current) articles.push(current);
      current = m
        ? { articleNumber: m[1], title: m[2].trim(), text: "" }
        : null;
    } else if (current) {
      current.text += (current.text ? "\n" : "") + text;
    }
  });
  if (current) articles.push(current);

  return articles.filter((a) => a.text.trim().length > 0);
}

/** Modda → { section, chapter } xaritasi (rus tilida) */
function parseChapterMapRu(html) {
  const $ = cheerio.load(html);
  const own = (el) =>
    $(el).clone().children().remove().end().text().replace(/\s+/g, " ").trim();

  const map = {};
  let section = "";
  let chapter = "";
  $("*").each((_, el) => {
    const t = own(el);
    if (!t || t.length > 200) return;

    if (SECTION_RU_RE.test(t)) {
      // Yangi bo'lim boshlanganda bob tozalanadi — aks holda oldingi
      // bo'limning oxirgi bobi keyingi bo'lim moddalariga yopishib qolardi.
      section = t;
      chapter = "";
      return;
    }
    // Homogliflar lotinga o'girilgan NUSXA bo'yicha tekshiriladi, lekin
    // saqlanadigan matn ASL holicha qoladi (manba matni o'zgartirilmaydi).
    if (CHAPTER_RU_RE.test(normalizeRoman(t))) {
      chapter = t;
      return;
    }

    const art = t.match(/^Стать[яи]\s+(\d+(?:-\d+)?)\b/i);
    if (art && !map[art[1]]) map[art[1]] = { section, chapter };
  });
  return map;
}

async function fetchHtml(url) {
  const resp = await fetch(url, { headers: FETCH_HEADERS });
  if (!resp.ok) throw new Error(`HTTP ${resp.status} — ${url}`);
  const html = await resp.text();
  if (html.includes("Страница не найдена")) {
    throw new Error(`Hujjat topilmadi (404) — rus ID eskirgan: ${url}`);
  }
  return html;
}

/** Bitta qonunning rus matnini yuklab, mavjud moddalarga biriktiradi */
async function ingestLawRu(law) {
  const { LegalChunk } = require("../models");
  const url = law.urlRu;
  if (!url) return { code: law.code, skipped: "urlRu yo'q" };

  const html = await fetchHtml(url);
  const articles = parseArticlesRu(html);
  if (!articles.length) {
    return { code: law.code, skipped: "modda topilmadi" };
  }
  const chapterMap = parseChapterMapRu(html);

  /* Faqat MAVJUD moddalar yangilanadi (yangi hujjat YARATILMAYDI):
     o'zbekcha matn va embedding — asosiy yozuv, bu esa unga qo'shimcha.
     `updateOne` filtri mos kelmasa amal jimgina o'tkazib yuboriladi. */
  const ops = articles.map((a) => ({
    updateOne: {
      filter: { lawCode: law.code, articleNumber: a.articleNumber },
      update: {
        $set: {
          titleRu: a.title,
          textRu: a.text,
          sectionRu: chapterMap[a.articleNumber]?.section || "",
          chapterRu: chapterMap[a.articleNumber]?.chapter || "",
        },
      },
    },
  }));

  let matched = 0;
  const CHUNK = 500;
  for (let i = 0; i < ops.length; i += CHUNK) {
    const res = await LegalChunk.bulkWrite(ops.slice(i, i + CHUNK), {
      ordered: false,
    });
    matched += res.matchedCount || 0;
  }

  return { code: law.code, parsed: articles.length, matched };
}

/** Barcha qonunlar (yoki bittasi) uchun rus matnini yuklaydi */
async function ingestAllLawsRu(onlyCode, { force = false } = {}) {
  let laws = (await getLaws()).filter(
    (l) => l.urlRu && (!onlyCode || l.code === onlyCode),
  );

  /* ⚠️ TEZLIK — bu funksiya SAYTNI SEKINLASHTIRAYOTGAN asosiy sabab edi
     (o'lchandi, 2026-08-08).

     Bu funksiya server HAR ISHGA TUSHGANDA chaqiriladi (`server.js`).
     Himoya bo'lmagani uchun har safar 21 ta lex.uz sahifasi qaytadan
     yuklanib, tahlil qilinardi — qonun matni o'zgarmagan bo'lsa ham.
     `cheerio.load()` esa SINXRON amal: ishlayotgan paytda Node hech
     kimga javob bera olmaydi.

     O'lchov (tez kompyuterda): FK2 — 2,6 MB HTML, 45 626 element,
     `cheerio.load` 134 ms; JPK — 3,8 MB, 67 083 element, 201 ms. Bunga
     `parseArticlesRu` va `parseChapterMapRu` ning shu elementlar
     bo'ylab yana ikki marta aylanishi qo'shiladi. Render bepul tarifida
     (0,1 CPU) bu o'nlab barobar sekinroq.

     Natija jonli serverda o'lchandi: bo'sh `/health` so'rovi goh 0,97 s,
     goh 47 s qaytardi — so'rovlar shu bloklash ortida navbatda turardi.

     Endi `ingestLaws.js` dagi bilan bir xil qoida: oxirgi tekshiruvdan
     20 soat o'tmagan kodeks o'tkazib yuboriladi. Sutkalik avtomatik
     yangilanish (24 soat) baribir ishlaydi, `onlyCode` bilan qo'lda
     yuklash esa bu cheklovga TUSHMAYDI. */
  const { LawSource } = require("../models");

  if (!onlyCode && !force) {
    const FRESH_MS = 20 * 60 * 60 * 1000;
    const now = Date.now();
    const rows = await LawSource.find().select("code lastIngestRuAt -_id").lean();
    const lastMap = new Map(rows.map((r) => [r.code, r.lastIngestRuAt]));

    const before = laws.length;
    laws = laws.filter((l) => {
      const last = lastMap.get(l.code);
      return !last || now - new Date(last).getTime() > FRESH_MS;
    });
    const skipped = before - laws.length;
    if (skipped) {
      console.log(
        `🇷🇺 ${skipped} ta kodeks yaqinda tekshirilgan — o'tkazib yuborildi`,
      );
    }
    if (!laws.length) return [];
  }

  const results = [];
  for (const law of laws) {
    try {
      const r = await ingestLawRu(law);
      results.push(r);
      /* Belgi FAQAT sahifa haqiqatan yuklab, tahlil qilinganda qo'yiladi.
         Xato (tarmoq uzilishi, 404) bo'lsa belgilanmaydi — o'sha kodeks
         keyingi ishga tushishda qayta urinib ko'riladi. "modda topilmadi"
         holati esa belgilanadi: qimmat qism (yuklash + tahlil) allaqachon
         bajarilgan, uni har restartda takrorlash aynan shu tuzatish
         bartaraf qilayotgan isrofgarchilik bo'lardi. */
      try {
        await LawSource.updateOne(
          { code: law.code },
          { $set: { lastIngestRuAt: new Date() } },
        );
      } catch {
        /* belgilanmasa ham yuklash muvaffaqiyatli hisoblanadi */
      }
      console.log(
        `🇷🇺 ${r.code}: ${r.matched ?? 0}/${r.parsed ?? 0} modda` +
          (r.skipped ? ` — ${r.skipped}` : ""),
      );
    } catch (err) {
      results.push({ code: law.code, error: err.message });
      console.warn(`🇷🇺 ${law.code} xato: ${err.message}`);
    }
  }
  return results;
}

module.exports = {
  ingestAllLawsRu,
  ingestLawRu,
  parseArticlesRu,
  parseChapterMapRu,
};

/* Qo'lda ishga tushirish: node scripts/ingestLawsRu.js [KOD] */
if (require.main === module) {
  require("dotenv").config();
  const mongoose = require("mongoose");
  (async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    await ingestAllLawsRu(process.argv[2]);
    await mongoose.disconnect();
  })().catch((err) => {
    console.error("Xato:", err.message);
    process.exit(1);
  });
}
