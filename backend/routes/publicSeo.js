"use strict";
/**
 * OCHIQ (INDEKSLANADIGAN) QONUN SAHIFALARI — server tomonda chiziladi.
 *
 * Nima uchun kerak: asosiy sayt SPA (React), AI botlari (GPTBot,
 * PerplexityBot, ClaudeBot) esa JavaScript'ni ishga tushirmaydi va
 * saytni BO'SH ko'radi. Shu sabab qonun matni tayyor HTML sifatida
 * beriladi. Foydalanuvchi bu manzillarni ASOSIY domenda ochadi
 * (`/qonunlar`, `/qonun/MK/109`) — `frontend/vercel.json` dagi rewrite
 * so'rovni shu yerga uzatadi.
 *
 * ⚠️ Bu sahifalar login TALAB QILMAYDI, lekin platformaning pullik
 * qismi ochilmaydi: bu yerda faqat lex.uz dagi RASMIY qonun matni bor
 * (u allaqachon ochiq ma'lumot). AI maslahatchi, darslar, testlar va
 * amaliyot avvalgidek ro'yxatdan o'tishni talab qiladi.
 *
 * ⚠️ HECH QANDAY QONUN MATNI, MODDA RAQAMI YOKI MUDDAT BU YERDA
 * YOZILMAGAN — hammasi `LegalChunk` bazasidan jonli olinadi va lex.uz
 * yangilanganda o'z-o'zidan yangilanadi.
 */
const router = require("express").Router();
const rateLimit = require("express-rate-limit");
const { langOf } = require("../services/seoPages/meta");
const { lawsIndexPage, lawCodePage } = require("../services/seoPages/listPages");
const { articlePage, notFoundPage } = require("../services/seoPages/articlePage");
const { buildSitemap, getCached, setCached } = require("../services/seoPages/sitemap");
const { publicPageCsp, cacheHeaders } = require("../services/seoPages/httpHeaders");
const {
  articleList,
  activeLaws,
  findArticle,
  allArticleRefs,
} = require("../services/seoPages/lawData");

router.use(publicPageCsp);

/* Yumshoq chegara: qidiruv robotlari ko'p sahifani ketma-ket ochadi —
   chegara qattiq bo'lsa Googlebot bloklanib qolardi. */
router.use(
  rateLimit({
    windowMs: 60 * 1000,
    max: 600,
    standardHeaders: true,
    legacyHeaders: false,
  }),
);

const html = (res, body, status = 200) =>
  res.status(status).type("html").send(body);

/**
 * ⚠️ Kod har doim BOSH HARFDA — kanonik shakl.
 * `/qonun/mk/109` ham ishlar edi, lekin u holda bir xil sahifa ikki
 * manzilda ochilib, qidiruv tizimi uchun takroriy kontent hosil
 * bo'lardi. Boshqa yozuvdagi manzil 301 bilan kanonikka yo'naltiriladi.
 * `null` qaytsa — javob allaqachon yuborilgan.
 */
function canonicalCode(req, res) {
  const raw = String(req.params.code || "");
  const code = raw.toUpperCase();
  if (raw === code) return code;

  const rest = req.params.article
    ? `/${encodeURIComponent(req.params.article)}`
    : "";
  const q = req.originalUrl.includes("?")
    ? `?${req.originalUrl.split("?")[1]}`
    : "";
  res.redirect(301, `/qonun/${encodeURIComponent(code)}${rest}${q}`);
  return null;
}

/* ── /qonunlar — barcha kodekslar ── */
router.get("/qonunlar", async (req, res, next) => {
  try {
    cacheHeaders(res);
    html(res, lawsIndexPage({ lang: langOf(req), laws: await activeLaws() }));
  } catch (e) {
    next(e);
  }
});

/* `/qonun` (kodsiz) — Vercel rewrite'da `:path*` bo'sh ham bo'lishi
   mumkin, ya'ni bu manzil haqiqatda so'raladi. Qoldirilsa foydalanuvchi
   JSON xatosini ko'rardi. */
router.get("/qonun", (req, res) => res.redirect(301, "/qonunlar"));

/* ── /qonun/:code — bitta kodeksning modda ro'yxati ── */
router.get("/qonun/:code", async (req, res, next) => {
  try {
    const lang = langOf(req);
    const code = canonicalCode(req, res);
    if (code === null) return undefined;

    const law = (await activeLaws()).find((l) => l.code === code);
    if (!law) return html(res, notFoundPage({ lang }), 404);

    cacheHeaders(res);
    return html(
      res,
      lawCodePage({ lang, law, articles: await articleList(code) }),
    );
  } catch (e) {
    return next(e);
  }
});

/* ── /qonun/:code/:article — modda matni ── */
router.get("/qonun/:code/:article", async (req, res, next) => {
  try {
    const lang = langOf(req);
    const code = canonicalCode(req, res);
    if (code === null) return undefined;

    const num = String(req.params.article || "").trim();
    const law = (await activeLaws()).find((l) => l.code === code);
    if (!law) return html(res, notFoundPage({ lang }), 404);

    const article = await findArticle(code, num);
    if (!article) return html(res, notFoundPage({ lang, code }), 404);

    // Qo'shni moddalar KESHLANGAN ro'yxatdan olinadi (qo'shimcha baza
    // so'rovisiz) — ichki havolalar qidiruv roboti uchun muhim: ularsiz
    // robot chuqurdagi moddalarga yo'l topa olmaydi.
    const list = await articleList(code);
    const i = list.findIndex((a) => a.articleNumber === num);
    const near = i >= 0 ? list.slice(Math.max(0, i - 3), i + 4) : [];

    cacheHeaders(res);
    return html(
      res,
      articlePage({
        lang,
        law,
        article,
        prev: i > 0 ? list[i - 1] : null,
        next: i >= 0 && i < list.length - 1 ? list[i + 1] : null,
        siblings: near.filter((a) => a.articleNumber !== num),
      }),
    );
  } catch (e) {
    return next(e);
  }
});

/* ── Sayt xaritasi (~7 100 manzil) ── */
router.get("/sitemap-qonunlar.xml", async (req, res, next) => {
  try {
    cacheHeaders(res);
    const cached = getCached();
    if (cached) return res.type("application/xml").send(cached);

    const xml = buildSitemap(await activeLaws(), await allArticleRefs());
    setCached(xml);
    return res.type("application/xml").send(xml);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
