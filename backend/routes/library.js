"use strict";
/**
 * QONUNLAR KUTUBXONASI — ro'yxatdan o'tgan foydalanuvchilar uchun.
 *
 * Ma'lumot manbai: LegalChunk kolleksiyasi (scripts/ingestLaws.js orqali
 * lex.uz'dan yuklangan va har 24 soatda avtomatik yangilanadigan qonun
 * moddalari). Ya'ni bu bo'lim uchun alohida kontent yozilmaydi — RAG
 * uchun allaqachon mavjud bazadan foydalaniladi.
 *
 * MUHIM: javoblarda `embedding` maydoni HECH QACHON qaytarilmaydi —
 * u 1024 ta sondan iborat va javobni behuda og'irlashtiradi.
 */
const router = require("express").Router();
const { LegalChunk } = require("../models");
const { userGuard } = require("../middleware/auth");
// Qonunlar ro'yxati endi BAZADAN keladi (admin panelidan boshqariladi),
// `config/laws.js` faqat dastlabki to'ldirish uchun ishlatiladi.
const { getLaws } = require("../services/lawRegistry");
const { getCached, setCached } = require("../utils/queryCache");
// `translateArticleList` endi ishlatilmaydi — moddalar ro'yxati
// bloklanmaydigan kesh rejimiga o'tkazildi (pastga qarang).
const { translateArticle } = require("../services/contentI18n");
const {
  translateMany,
  translateManyCached,
  warmTranslate,
  translationStatus,
} = require("../services/translator");

function langOf(req) {
  const l = String(req.query.lang || "").toLowerCase();
  return ["uz", "ru"].includes(l) ? l : "uz";
}

/* Kodeks nomi tanlangan tilda.

   Birinchi navbatda QO'LDA yozilgan rasmiy nom ishlatiladi (reyestrdagi
   `nameRu`) — u aniqroq va o'zgarmas. Admin uni to'ldirmagan
   bo'lsa, nom AI tarjimasiga tushadi (`translateLawNames`), aks holda
   ruscha rejimda o'zbekcha nom ko'rinib qolardi. */
function lawName(law, lang) {
  if (!law) return "";
  if (lang === "uz") return law.name;
  return law.nameI18n?.[lang] || law.name;
}

/**
 * Ro'yxatdagi qo'lda tarjimasi YO'Q nomlarni AI orqali o'giradi.
 * Qo'lda yozilganlari tegilmaydi — bitta so'rovga faqat yetishmayotgan
 * nomlar yuboriladi (odatda 0 ta, ya'ni AI umuman chaqirilmaydi).
 */
async function translateLawNames(laws, lang) {
  if (lang === "uz") return laws.map((l) => ({ ...l, label: l.name }));

  const out = laws.map((l) => ({ ...l, label: lawName(l, lang) }));
  // Tarjimasi bo'lmagan (ya'ni hali o'zbekcha qolgan) nomlar
  const idx = out
    .map((l, i) => (l.nameI18n?.[lang] ? -1 : i))
    .filter((i) => i >= 0);
  if (!idx.length) return out;

  try {
    const done = await translateMany(
      idx.map((i) => out[i].name),
      lang,
    );
    idx.forEach((i, k) => (out[i].label = done[k]));
  } catch {
    // Tarjima bo'lmasa o'zbekcha nom qoladi — ro'yxat baribir ishlaydi
  }
  return out;
}

// O'zbek matnida apostrof turlicha yoziladi: lex.uz "taʼtil", "boʻlim"
// (U+02BC / U+02BB) shaklida saqlaydi, foydalanuvchi esa odatda oddiy
// apostrof (') yozadi. Shu sabab qidiruvda har qanday apostrof varianti
// bir-biriga mos kelishi uchun ularni umumiy belgi sinfiga aylantiramiz.
const APOSTROPHES = "['’‘ʻʼ`´]";

/* ── MODDA RAQAMI BO'YICHA QIDIRUV ────────────────────────────────
   Foydalanuvchi "23" yoki "23-modda" deb qidirsa AYNAN o'sha modda
   chiqishi kerak.

   ⚠️ Avval bunday so'rov ham matn ichidan qidirilardi:
     { $or: [ {articleNumber: "23"}, {title: /23/}, {text: /23/} ] }
   Natijada matnida "23" uchraydigan HAMMA modda chiqardi — sana,
   yosh, summa, boshqa moddaga havola va hokazo. Bu foydalanuvchi
   shikoyat qilgan xato.

   Endi so'rov modda raqamiga o'xshasa — FAQAT raqam bo'yicha, aniq
   moslik bilan qidiriladi. Qo'shimcha moddalar ham qo'llab-quvvatlanadi
   ("61-1", "276-13"), uch tildagi "modda/статья/article" so'zi ham
   tanib olinadi. */
const ARTICLE_QUERY_RE =
  /^\s*(?:(?:modda|статья|article)\s*)?(\d+(?:-\d+)?)\s*(?:-?\s*(?:modda|модда|статьи|статья|article))?\.?\s*$/i;

function articleNumberQuery(input = "") {
  const m = String(input).match(ARTICLE_QUERY_RE);
  return m ? m[1] : null;
}

/**
 * Qidiruv shartini quradi.
 * - modda raqami berilsa → faqat shu modda (aniq moslik);
 * - aks holda → sarlavha va matn ichidan qidiriladi.
 */
function buildSearchFilter(base, search, lang) {
  if (!search) return base;

  const num = articleNumberQuery(search);
  if (num) return { ...base, articleNumber: num };

  const pattern = buildSearchPattern(search);
  const fields = ["title", "text"];
  /* Rus tilida qidirilganda RASMIY rus matni ham qamrab olinadi.
     Aks holda sahifa ruscha ko'rinib turib, ruscha so'z bilan qidiruv
     hech narsa topmasdi (matn bazada o'zbekcha izlanardi). O'zbekcha
     maydonlar ham qoldirilgan: modda raqami yoki lotincha atama bilan
     qidirish baribir ishlashi kerak. */
  if (lang === "ru") fields.push("titleRu", "textRu");

  return {
    ...base,
    $or: fields.map((f) => ({ [f]: { $regex: pattern, $options: "i" } })),
  };
}

function buildSearchPattern(input) {
  const escaped = input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // Har qanday apostrof (yoki uning yo'qligi) mos kelsin
  return escaped.replace(/['’‘ʻʼ`´]/g, `${APOSTROPHES}?`);
}

/* Har bir kodeksdagi modda soni.

   ⚠️ TEZLIK: bu sanoq avval HAR BIR so'rovda `$group` bilan
   hisoblanardi va MongoDB butun kolleksiyani skanerlardi (COLLSCAN).
   Har bir hujjat ~19,6 KB (embedding), 6000+ modda = **~120 MB
   o'qish** — kutubxona sahifasi shu sababdan juda sekin ochilardi
   (o'lchangan: 1078 ms, Render/Atlas'da bundan ham yomon).

   Ikki chora:
   1) `.hint({ lawCode: 1 })` — MongoDB indeksdan foydalanishga
      majbur qilinadi (PROJECTION_COVERED + IXSCAN), ya'ni hujjatlar
      umuman o'qilmaydi;
   2) natija keshlanadi — modda soni faqat yuklash paytida
      o'zgaradi, ya'ni har so'rovda qayta hisoblash keraksiz. */

/* Kesh muddati: 10 daqiqa.
   Avval 60 soniya edi — bu juda qisqa bo'lgani uchun foydalanuvchilar
   soatiga 60 marta og'ir DB o'qishga tushib qolardi. Qonun matni
   lex.uz'dan KUNIGA BIR MARTA yangilanadi, ya'ni 60 soniyalik kesh
   hech qanday yangilikni tezroq ko'rsatmasdi — faqat Atlas M0 (bepul
   tier) ni bekorga yuklardi.
   ⚠️ Yangilanish kechikmasligi uchun ingest tugagach kesh ATAYLAB
   tozalanadi (`ingestLaws.js` → `clearCache("law:")`), ya'ni yangi
   matn 10 daqiqa kutmasdan darhol ko'rinadi. */
const COUNT_CACHE_MS = 10 * 60 * 1000;
const LIST_CACHE_MS = 10 * 60 * 1000;

async function getArticleCounts() {
  /* Kalit `law:` bilan boshlanadi — ingest tugagach barcha kutubxona
     keshi bitta `clearCache("law:")` bilan tozalanadi. */
  const cached = getCached("law:counts", COUNT_CACHE_MS);
  if (cached) return cached;

  const counts = await LegalChunk.aggregate([
    { $group: { _id: "$lawCode", count: { $sum: 1 } } },
  ]).hint({ lawCode: 1 });

  const map = Object.fromEntries(counts.map((c) => [c._id, c.count]));
  setCached("law:counts", map);
  return map;
}

/* GET /api/library/laws — qonunlar ro'yxati va har biridagi modda soni */
router.get("/laws", userGuard, async (req, res) => {
  try {
    const countMap = await getArticleCounts();

    const lang = langOf(req);
    /* BARCHA yoqilgan kodekslar ko'rsatiladi — moddalari hali
       yuklanmaganlari ham (ular "tayyorlanmoqda" holatida turadi).

       `showInLibrary: false` bo'lganlar CHIQARIB TASHLANADI: kutubxona
       faqat KODEKSLAR uchun. Hozircha bunday yagona hujjat —
       Konstitutsiya: unga alohida sahifa ajratilgan (/constitution).
       U reyestrdan olib tashlanmagan, ya'ni lex.uz'dan yangilanishda
       va AI qidiruvida (RAG) avvalgidek qatnashadi. */
    const tracked = (await getLaws()).filter((l) => l.showInLibrary);
    const named = await translateLawNames(tracked, lang);
    const laws = named.map((law) => ({
      code: law.code,
      name: law.label,
      url: law.url,
      articleCount: countMap[law.code] || 0,
      ready: (countMap[law.code] || 0) > 0,
    }));

    res.json({ laws });
  } catch (err) {
    console.error("library/laws xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* GET /api/library/laws/:code — moddalar ro'yxati (qidiruv + sahifalash) */
router.get("/laws/:code", userGuard, async (req, res) => {
  try {
    const code = String(req.params.code || "").toUpperCase();
    const search = (req.query.search || "").trim().slice(0, 100);

    const filter = buildSearchFilter({ lawCode: code }, search, langOf(req));

    /* SAHIFALASH OLIB TASHLANDI — kodeksning BARCHA moddalari bir
       yo'la qaytadi (talab: "barcha moddalar saytda ko'rinsin").

       Buni imkonli qilgan narsa — ro'yxatdan `text` maydoni olib
       tashlangani: avval har bir modda MATNI ham kelardi (800 modda ≈
       1,6 MB), endi faqat raqam va sarlavha (≈ 80 KB). Modda matni
       foydalanuvchi uni OCHGANDA alohida so'rov bilan keladi
       (/laws/:code/:articleNumber) — u yerda tarjima ham bo'ladi. */
    /* KESH: qidiruvsiz so'rov — bu kutubxonada kodeks ochilgandagi
       ODATIY holat va eng og'iri (581-810 modda). Qidiruvli so'rov
       keshlanmaydi: kalitlar cheksiz ko'payib ketardi va qidiruv
       baribir tor natija qaytaradi.

       Kalit tilga bog'liq EMAS: qidiruvsiz filtr faqat `{lawCode}`
       bo'ladi, ya'ni DB'dan kelgan xom ma'lumot uchala til uchun bir
       xil. Tarjima quyida, keshdan TASHQARIDA qo'llanadi. */
    const cacheKey = search ? null : `law:${code}`;
    let items = cacheKey ? getCached(cacheKey, LIST_CACHE_MS) : null;

    if (!items) {
      items = await LegalChunk.find(filter)
        // Faqat ro'yxat uchun KERAK bo'lgan maydonlar. `lawName` va
        // `sourceUrl` ataylab olinmaydi — ular kodeksdagi HAR BIR modda
        // uchun bir xil va javobda 800 marta takrorlanardi (javob hajmi
        // ikki barobar edi); ular allaqachon javobning `law` qismida bor.
        // `titleRu` — lex.uz'dagi RASMIY rus tarjimasi. U qoplovchi
        // indeksga ham kiritilgan, shuning uchun uni qo'shish so'rovni
        // sekinlashtirmaydi (hujjatlar baribir o'qilmaydi).
        .select("articleNumber title titleRu -_id")
        .limit(3000) // himoya chegarasi; eng katta kodeks ~1600 modda
        .lean();

      /* Tartiblash: "10-modda" "9-modda"dan KEYIN kelishi kerak (matn
         bo'yicha saralansa "10" < "9" bo'lib qolardi). Qo'shimcha
         moddalar ham hisobga olinadi: "61-1" → 61 dan keyin, 62 dan
         oldin (shuning uchun ikkinchi qism ham solishtiriladi).
         ⚠️ Saralash keshga YOZISHDAN OLDIN — aks holda har so'rovda
         qaytarilardi. */
      items.sort((a, b) => {
        const pa = String(a.articleNumber).split("-").map((x) => parseInt(x, 10) || 0);
        const pb = String(b.articleNumber).split("-").map((x) => parseInt(x, 10) || 0);
        return (pa[0] - pb[0]) || ((pa[1] || 0) - (pb[1] || 0));
      });

      if (cacheKey) setCached(cacheKey, items);
    }
    const total = items.length;

    const lang = langOf(req);
    const law = (await getLaws()).find((l) => l.code === code);

    /* TARJIMA BLOKLAMAYDI.
       800 ta sarlavhani AI bilan tarjima qilish ~2 daqiqa oladi —
       foydalanuvchi shuncha kuta olmaydi. Shuning uchun:
         1) keshda BOR tarjimalar darhol qo'llanadi;
         2) qolganlari manba tilida qaytadi (sahifa DARHOL ochiladi);
         3) yetishmayotganlari FON rejimida tarjima qilinib keshga
            yoziladi — sahifa qayta ochilganda hammasi tayyor.
       `pendingTranslation` — frontend "tarjima tayyorlanmoqda" deb
       ko'rsatishi va biroz keyin qayta so'rashi uchun. */
    let translated = items;
    let pendingTranslation = 0;
    if (lang === "ru") {
      /* RUS TILI — AI TARJIMASI ISHLATILMAYDI.
         lex.uz har bir kodeksni rasmiy rus tilida chop etadi va shu
         matn bazada saqlanadi (`titleRu`). Bu ham ANIQROQ (rasmiy
         huquqiy tarjima, AI taxmini emas), ham BIR ZUMDA (kutish yo'q).
         Rasmiy tarjimasi yo'q noyob modda uchun AI keshiga qaytiladi. */
      const noOfficial = [];
      items.forEach((a) => {
        if (!a.titleRu && a.title) noOfficial.push(a.title);
      });
      let fallback = {};
      if (noOfficial.length) {
        const { result, missing } = await translateManyCached(noOfficial, lang);
        noOfficial.forEach((t, i) => (fallback[t] = result[i]));
        pendingTranslation = missing.length;
        if (missing.length) warmTranslate(missing, lang);
      }
      translated = items.map(({ titleRu, ...a }) => ({
        ...a,
        title: titleRu || fallback[a.title] || a.title,
      }));
    } else if (lang !== "uz") {
      // Ingliz tili — lex.uz'da rasmiy ingliz varianti yo'q, shuning
      // uchun avvalgidek AI tarjimasi + kesh ishlatiladi.
      const titles = items.map((a) => a.title || "");
      const { result, missing } = await translateManyCached(titles, lang);
      translated = items.map(({ titleRu, ...a }, i) => ({ ...a, title: result[i] }));
      pendingTranslation = missing.length;
      if (missing.length) warmTranslate(missing, lang);
    } else {
      // O'zbek tili — `titleRu` javobga qo'shilmasligi kerak
      translated = items.map(({ titleRu, ...a }) => a);
    }

    res.json({
      law: law ? { code: law.code, name: lawName(law, lang), url: law.url } : null,
      items: translated,
      total,
      pendingTranslation,
      /* Tarjima xizmati hozir ishlayaptimi. Kvota tugagan bo'lsa
         frontend "tayyorlanmoqda" yozuvini KO'RSATMAYDI va behuda
         qayta so'rov yubormaydi — aks holda foydalanuvchi hech qachon
         bajarilmaydigan va'dani ko'rib turardi. */
      translationAvailable: translationStatus().available,
    });
  } catch (err) {
    console.error("library/laws/:code xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* GET /api/library/laws/:code/:articleNumber — bitta moddaning TO'LIQ
   matni, tanlangan tilda.

   Alohida endpoint qilingani: modda matni uzun, va foydalanuvchi
   odatda sahifadagi 40 ta moddadan bir-ikkitasini ochadi. Shu sabab
   tarjima aynan ochilgan modda uchun, kerak bo'lgandagina bajariladi
   (natija keshlanadi — ikkinchi marta darhol keladi). */
router.get("/laws/:code/:articleNumber", userGuard, async (req, res) => {
  try {
    const code = String(req.params.code || "").toUpperCase();
    const articleNumber = String(req.params.articleNumber || "").slice(0, 20);

    const article = await LegalChunk.findOne({ lawCode: code, articleNumber })
      .select("lawCode lawName articleNumber title titleRu text textRu sourceUrl")
      .lean();
    if (!article) return res.status(404).json({ error: "Modda topilmadi" });

    const lang = langOf(req);
    const { titleRu, textRu, ...plain } = article;

    /* Rasmiy rus matni bor bo'lsa AI umuman chaqirilmaydi — javob
       darhol qaytadi va matn qonunning rasmiy tarjimasi bo'ladi.
       `lawName` esa reyestrdan tarjima qilinadi (u modda matni emas). */
    if (lang === "ru" && textRu) {
      return res.json({
        article: {
          ...plain,
          title: titleRu || plain.title,
          text: textRu,
          lawName: lawName(
            (await getLaws()).find((l) => l.code === code) || {},
            lang,
          ) || plain.lawName,
        },
      });
    }

    res.json({ article: await translateArticle(plain, lang) });
  } catch (err) {
    console.error("library/article xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* ═══════════════════════════════════════════════════════════════
   GET /api/library/constitution — KONSTITUTSIYA (alohida sahifa)

   Kodekslardan farqli o'laroq, bu yerda moddalarning TO'LIQ MATNI ham
   qaytadi va ular BOBLAR bo'yicha guruhlanadi. Sabab: Konstitutsiya
   kichik (155 modda, ~130 KB) va u ro'yxat emas, O'QISH uchun hujjat —
   foydalanuvchi har bir moddani alohida ochib o'tirmasligi kerak.

   Tarjima kodekslardagi kabi BLOKLAMAYDI: keshda bori darhol
   qo'llanadi, qolgani fonda tayyorlanadi.
   ═══════════════════════════════════════════════════════════════ */
const CONSTITUTION_CODE = "KONS";

router.get("/constitution", userGuard, async (req, res) => {
  try {
    const lang = langOf(req);
    const search = (req.query.search || "").trim().slice(0, 100);

    const filter = buildSearchFilter(
      { lawCode: CONSTITUTION_CODE },
      search,
      lang,
    );

    /* KESH: Konstitutsiya sahifasi eng og'ir o'qish — 155 ta modda
       TO'LIQ MATNI bilan (~104 KB, ikkala tilda). Matn kuniga bir
       marta (ingest'da) o'zgaradi, shuning uchun qidiruvsiz so'rov
       keshdan beriladi. */
    const cacheKey = search ? null : `law:${CONSTITUTION_CODE}:full`;
    let items = cacheKey ? getCached(cacheKey, LIST_CACHE_MS) : null;

    if (!items) {
      items = await LegalChunk.find(filter)
        .select(
          "articleNumber title section chapter text " +
            "titleRu sectionRu chapterRu textRu -_id",
        )
        .lean();

      items.sort((a, b) => {
        const pa = String(a.articleNumber).split("-").map((x) => parseInt(x, 10) || 0);
        const pb = String(b.articleNumber).split("-").map((x) => parseInt(x, 10) || 0);
        return pa[0] - pb[0] || (pa[1] || 0) - (pb[1] || 0);
      });

      if (cacheKey) setCached(cacheKey, items);
    }

    const law = (await getLaws()).find((l) => l.code === CONSTITUTION_CODE);

    /* Tarjima: bo'lim + bob + sarlavha + matn BIRGA yig'iladi (bitta
       kesh so'rovi), keyin joyiga qaytariladi. */
    const strip = ({ titleRu, sectionRu, chapterRu, textRu, ...rest }) => rest;

    let translated = items.map(strip);
    let pendingTranslation = 0;
    if (lang === "ru") {
      /* Konstitutsiyaning RASMIY rus matni (lex.uz) — AI ishlatilmaydi.
         Moddalarida sarlavha yo'q (bu manba xususiyati, xato emas),
         shuning uchun `titleRu` bo'sh bo'lishi normal. */
      translated = items.map((a) => ({
        ...strip(a),
        section: a.sectionRu || a.section,
        chapter: a.chapterRu || a.chapter,
        title: a.titleRu || "",
        text: a.textRu || a.text,
      }));
    } else if (lang !== "uz") {
      const texts = [];
      items.forEach((a) =>
        texts.push(a.section || "", a.chapter || "", a.title || "", a.text || ""),
      );
      const { result, missing } = await translateManyCached(texts, lang);
      translated = items.map((a, i) => ({
        ...strip(a),
        section: result[i * 4],
        chapter: result[i * 4 + 1],
        title: result[i * 4 + 2],
        text: result[i * 4 + 3],
      }));
      pendingTranslation = missing.length;
      if (missing.length) warmTranslate(missing, lang);
    }

    /* ── UCH BOSQICHLI TUZILMA: BO'LIM → BOB → MODDA ──
       Tartib SAQLANADI: moddalar allaqachon raqam bo'yicha saralangan,
       bo'lim va boblar esa hujjatdagi tartibda birinchi marta
       uchraganda ro'yxatga qo'shiladi. */
    const sections = [];
    const secIndex = new Map();
    for (const art of translated) {
      const sName = art.section || "";
      if (!secIndex.has(sName)) {
        const group = { section: sName, chapters: [], chapterIndex: new Map() };
        secIndex.set(sName, group);
        sections.push(group);
      }
      const sec = secIndex.get(sName);

      const cName = art.chapter || "";
      if (!sec.chapterIndex.has(cName)) {
        const ch = { chapter: cName, articles: [] };
        sec.chapterIndex.set(cName, ch);
        sec.chapters.push(ch);
      }
      sec.chapterIndex.get(cName).articles.push({
        articleNumber: art.articleNumber,
        title: art.title,
        text: art.text,
      });
    }
    // Ichki yordamchi maydonni javobdan olib tashlaymiz
    sections.forEach((s) => delete s.chapterIndex);

    // Har bir bo'lim/bob uchun modda soni — interfeys ko'rsatadi
    sections.forEach((sec) => {
      sec.articleCount = sec.chapters.reduce((n, c) => n + c.articles.length, 0);
      sec.chapters.forEach((c) => (c.articleCount = c.articles.length));
    });

    res.json({
      law: law
        ? { code: law.code, name: lawName(law, lang), url: law.url }
        : null,
      sections,
      total: translated.length,
      pendingTranslation,
      translationAvailable: translationStatus().available,
    });
  } catch (err) {
    console.error("library/constitution xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

module.exports = router;
