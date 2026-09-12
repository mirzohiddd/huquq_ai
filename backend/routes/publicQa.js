"use strict";
/**
 * OCHIQ SAVOL-JAVOB SAHIFALARI + METODOLOGIYA + MARKDOWN NUSXALARI.
 *
 * Alohida marshrut fayli: `routes/publicSeo.js` (qonun sahifalari)
 * 200 qatordan oshib ketardi (CLAUDE.md qoidasi) va ikki bo'limning
 * vazifasi ham boshqa — u QONUN MATNI, bu esa SAVOLGA JAVOB beradi.
 *
 * ⚠️ Bu sahifalar login TALAB QILMAYDI va indekslanadi. Sabab qonun
 * sahifalaridagi bilan bir xil: AI botlari JavaScript'ni ishga
 * tushirmaydi, shuning uchun eng qimmatli javob kontenti server
 * tomonda tayyor HTML sifatida berilishi kerak.
 */
const router = require("express").Router();
const rateLimit = require("express-rate-limit");
const { langOf, SITE_URL } = require("../services/seoPages/meta");
const { publicPageCsp, cacheHeaders } = require("../services/seoPages/httpHeaders");
const { qaIndexPage, qaNotFoundPage, areaName } = require("../services/seoPages/qaPages");
const { qaPage } = require("../services/seoPages/qaAnswerPage");
const { methodPage } = require("../services/seoPages/methodPage");
const { METHOD } = require("../services/seoPages/methodText");
const { attachQuotes } = require("../services/seoPages/qaData");
const { qaIndexMd, qaAnswerMd, methodMd } = require("../services/seoPages/markdown");
const { activeLaws } = require("../services/seoPages/lawData");
const {
  QUESTIONS,
  AREAS,
  findQuestion,
  questionsOfArea,
  pick,
} = require("../services/qaContent");
const { LegalChunk } = require("../models");

router.use(publicPageCsp);
router.use(
  rateLimit({ windowMs: 60 * 1000, max: 600, standardHeaders: true, legacyHeaders: false }),
);

const html = (res, body, status = 200) => res.status(status).type("html").send(body);
/* Markdown `text/plain` sifatida beriladi: brauzer uni yuklab olishga
   urinmaydi, bot esa matnni to'g'ridan-to'g'ri o'qiydi. */
const md = (res, body) => res.type("text/plain; charset=utf-8").send(body);

/** Bo'sh sohalar tushib qolsin — bo'sh sarlavha indekslanmasin. */
const groups = () =>
  AREAS.map((area) => ({ area, items: questionsOfArea(area.key) })).filter(
    (g) => g.items.length,
  );

/* ── /savollar ── */
router.get("/savollar", (req, res) => {
  cacheHeaders(res);
  html(res, qaIndexPage({ lang: langOf(req), groups: groups() }));
});

router.get("/savollar.md", (req, res) => {
  const lang = langOf(req);
  cacheHeaders(res);
  md(res, qaIndexMd({ lang, groups: groups(), areaName, pick }));
});

/* ── /savol/:slug ── */
async function loadQa(req) {
  const lang = langOf(req);
  const slug = String(req.params.slug || "").replace(/\.md$/, "");
  const item = findQuestion(slug);
  if (!item) return { lang, item: null };
  const quotes = await attachQuotes(item.refs, lang);
  return { lang, item, quotes, area: AREAS.find((a) => a.key === item.area) };
}

/* ⚠️ `.md` MARSHRUTI HTML MARSHRUTIDAN OLDIN turishi SHART. Express
   qoidalarni tartib bo'yicha tekshiradi va `/savol/:slug` naqshi
   `/savol/xyz.md` ni ham tutib olardi (slug = "xyz.md") — natijada
   Markdown so'ralganda HTML qaytardi. */
router.get("/savol/:slug.md", async (req, res, next) => {
  try {
    const { lang, item, quotes, area } = await loadQa(req);
    if (!item) return res.status(404).type("text/plain").send("Not found");
    cacheHeaders(res);
    return md(res, qaAnswerMd({ lang, item, quotes, areaName, area, pick }));
  } catch (e) {
    return next(e);
  }
});

router.get("/savol/:slug", async (req, res, next) => {
  try {
    const { lang, item, quotes } = await loadQa(req);
    if (!item) return html(res, qaNotFoundPage({ lang }), 404);

    // Aloqador savollar — SHU sohadan, o'zidan tashqari. Ichki havolalar
    // roboti uchun muhim: ularsiz savol sahifalari bir-biriga bog'lanmagan
    // "orolchalar" bo'lib qolardi.
    const related = questionsOfArea(item.area)
      .filter((q) => q.slug !== item.slug)
      .slice(0, 6);

    cacheHeaders(res);
    return html(res, qaPage({ lang, item, quotes, related }));
  } catch (e) {
    return next(e);
  }
});

/* ── /metodologiya (E-E-A-T) ── */
async function methodData() {
  const laws = await activeLaws();
  const articleCount = await LegalChunk.estimatedDocumentCount();
  return { laws, articleCount };
}

router.get("/metodologiya", async (req, res, next) => {
  try {
    const lang = langOf(req);
    const { laws, articleCount } = await methodData();
    cacheHeaders(res);
    return html(res, methodPage({ lang, laws, articleCount }));
  } catch (e) {
    return next(e);
  }
});

router.get("/metodologiya.md", (req, res) => {
  const lang = langOf(req);
  cacheHeaders(res);
  md(res, methodMd({ lang, method: METHOD[lang] || METHOD.uz }));
});

/* ── /sitemap-savollar.xml ── */
router.get("/sitemap-savollar.xml", (req, res) => {
  cacheHeaders(res);
  const urls = [
    { loc: "/savollar", pri: "0.9" },
    { loc: "/metodologiya", pri: "0.7" },
    ...QUESTIONS.map((q) => ({ loc: `/savol/${q.slug}`, pri: "0.8" })),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Huquq AI — savol-javob markazi sayt xaritasi (avtomatik). -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u.loc}</loc>
    <xhtml:link rel="alternate" hreflang="uz-UZ" href="${SITE_URL}${u.loc}"/>
    <xhtml:link rel="alternate" hreflang="ru-UZ" href="${SITE_URL}${u.loc}?lang=ru"/>
    <changefreq>monthly</changefreq>
    <priority>${u.pri}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;
  res.type("application/xml").send(xml);
});

/* Foydalanuvchi `/savol` deb kirsa — ro'yxatga. */
router.get("/savol", (req, res) => res.redirect(301, "/savollar"));

module.exports = router;
