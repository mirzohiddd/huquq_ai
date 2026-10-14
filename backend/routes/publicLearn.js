"use strict";
/**
 * OCHIQ DARSLAR VA TESTLAR (2026-10-14) — SEO / AEO / LLMO.
 *
 *   /darslar, /dars/:slug, /testlar, /test/:slug  — HTML (serverda chiziladi)
 *   /darslar.md, /testlar.md                      — LLM uchun matn nusxasi
 *   /sitemap-darslar.xml                          — sayt xaritasi
 *
 * ⚠️ `.md` marshrutlari HTML'dan OLDIN (publicQa.js dagi sabab bilan).
 * ⚠️ Ilova ichidagi /lessons va /tests (login bilan) TEGILMADI — bular
 * boshqa manzillar va ular avvalgidek tarifga bog'liq.
 */
const router = require("express").Router();
const rateLimit = require("express-rate-limit");
const { SITE_URL, path } = require("../services/seoPages/meta");
const { publicPageCsp, cacheHeaders } = require("../services/seoPages/httpHeaders");
const { page, esc } = require("../services/seoPages/layout");
const D = require("../services/seoPages/learnData");
const { lessonsIndexPage, lessonPage, lessonUrl } = require("../services/seoPages/learnPages");
const { testsIndexPage, testPage, quizUrl } = require("../services/seoPages/quizPages");

router.use(publicPageCsp);
router.use(rateLimit({ windowMs: 60 * 1000, max: 600, standardHeaders: true, legacyHeaders: false }));

const html = (res, body, status = 200) => res.status(status).type("html").send(body);
const md = (res, body) => res.type("text/plain; charset=utf-8").send(body);

function notFound(res, what, back) {
  return html(
    res,
    page({
      lang: "uz",
      altLangs: false,
      noindex: true,
      title: `${what} topilmadi`,
      description: `${what} topilmadi`,
      canonical: back,
      body: `<main><div class="wrap"><div class="card"><h1>${esc(what)} topilmadi</h1>
        <p><a href="${esc(back)}">Ro'yxatga qaytish</a></p></div></div></main>`,
    }),
    404,
  );
}

/* ── Markdown nusxalari ── */
router.get("/darslar.md", async (req, res, next) => {
  try {
    const lessons = await D.lessonList();
    const lines = ["# HuquqTech — huquq darslari", "", `> O'zbekiston qonunchiligi bo'yicha ${lessons.length} ta dars.`, ""];
    for (const m of D.MODULES) {
      const items = lessons.filter((l) => D.moduleOf(l.category).key === m.key);
      if (!items.length) continue;
      lines.push(`## ${m.uz}`, "");
      for (const l of items) lines.push(`- [${l.title}](${SITE_URL}${lessonUrl(l)}) — ${l.sectionCount} ta mavzu`);
      lines.push("");
    }
    cacheHeaders(res);
    return md(res, lines.join("\n"));
  } catch (e) {
    return next(e);
  }
});

router.get("/testlar.md", async (req, res, next) => {
  try {
    const quizzes = await D.quizList();
    const lines = ["# HuquqTech — huquq bo'yicha testlar", ""];
    for (const q of quizzes) lines.push(`- [${q.title}](${SITE_URL}${quizUrl(q)}) — ${q.questionCount} ta savol`);
    cacheHeaders(res);
    return md(res, lines.join("\n"));
  } catch (e) {
    return next(e);
  }
});

/* ── HTML ── */
router.get("/darslar", async (req, res, next) => {
  try {
    const lessons = await D.lessonList();
    cacheHeaders(res);
    return html(res, lessonsIndexPage({ lessons }));
  } catch (e) {
    return next(e);
  }
});

router.get("/dars/:slug", async (req, res, next) => {
  try {
    const id = D.idOf(req.params.slug);
    const lesson = id && (await D.lessonById(id));
    if (!lesson) return notFound(res, "Dars", path.lessons());
    // Sarlavha o'zgargan yoki slug noto'g'ri — bitta canonical manzilga
    if (req.params.slug !== D.slugOf(lesson)) return res.redirect(301, lessonUrl(lesson));
    const all = await D.lessonList();
    const related = all
      .filter((l) => String(l._id) !== String(lesson._id) && (l.category || "") === (lesson.category || ""))
      .slice(0, 6);
    cacheHeaders(res);
    return html(res, lessonPage({ lesson, related }));
  } catch (e) {
    return next(e);
  }
});

router.get("/testlar", async (req, res, next) => {
  try {
    const quizzes = await D.quizList();
    cacheHeaders(res);
    return html(res, testsIndexPage({ quizzes }));
  } catch (e) {
    return next(e);
  }
});

router.get("/test/:slug", async (req, res, next) => {
  try {
    const id = D.idOf(req.params.slug);
    const quiz = id && (await D.quizById(id));
    if (!quiz) return notFound(res, "Test", path.tests());
    if (req.params.slug !== D.slugOf(quiz)) return res.redirect(301, quizUrl(quiz));
    const others = (await D.quizList()).filter((q) => String(q._id) !== String(quiz._id));
    cacheHeaders(res);
    return html(res, testPage({ quiz, others }));
  } catch (e) {
    return next(e);
  }
});

router.get("/dars", (req, res) => res.redirect(301, path.lessons()));
router.get("/test", (req, res) => res.redirect(301, path.tests()));

/* ── /sitemap-darslar.xml ── */
router.get("/sitemap-darslar.xml", async (req, res, next) => {
  try {
    const [lessons, quizzes] = await Promise.all([D.lessonList(), D.quizList()]);
    const day = (d) => (d ? new Date(d).toISOString().slice(0, 10) : "");
    const urls = [
      { loc: path.lessons(), pri: "0.9" },
      { loc: path.tests(), pri: "0.9" },
      ...lessons.map((l) => ({ loc: lessonUrl(l), pri: "0.8", mod: day(l.updatedAt) })),
      ...quizzes.map((q) => ({ loc: quizUrl(q), pri: "0.7", mod: day(q.updatedAt) })),
    ];
    cacheHeaders(res);
    res.type("application/xml").send(`<?xml version="1.0" encoding="UTF-8"?>
<!-- HuquqTech — darslar va testlar sayt xaritasi (avtomatik). -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => `  <url>
    <loc>${SITE_URL}${u.loc}</loc>${u.mod ? `\n    <lastmod>${u.mod}</lastmod>` : ""}
    <changefreq>weekly</changefreq>
    <priority>${u.pri}</priority>
  </url>`)
  .join("\n")}
</urlset>`);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
