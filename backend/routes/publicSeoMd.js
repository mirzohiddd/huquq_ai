"use strict";
/**
 * QONUN SAHIFALARINING MARKDOWN NUSXALARI (LLMO).
 *
 * `/qonunlar.md` · `/qonun/:code.md` · `/qonun/:code/:article.md`
 *
 * ⚠️ ALOHIDA FAYL: `routes/publicSeo.js` allaqachon 200 qatorga yaqin
 * (CLAUDE.md qoidasi), va bu marshrutlar HTML marshrutlaridan OLDIN
 * ro'yxatdan o'tkazilishi shart — Express qoidalarni tartib bo'yicha
 * tekshiradi va `/qonun/:code/:article` naqshi `.md` bilan tugagan
 * manzilni ham tutib olardi. Alohida router server.js da avvalroq
 * ulanadi, ya'ni tartib kodning tuzilishidan ko'rinib turadi.
 *
 * ⚠️ NIMA UCHUN: HTML da navigatsiya, uslub va CTA bloklari bor — til
 * modeli uchun bular shovqin. Markdown variantida faqat qonun matni
 * qoladi: model aniqroq o'qiydi va kamroq token sarflaydi.
 */
const router = require("express").Router();
const rateLimit = require("express-rate-limit");
const { langOf } = require("../services/seoPages/meta");
const { cacheHeaders } = require("../services/seoPages/httpHeaders");
const { nameOf } = require("../services/seoPages/listPages");
const { lawsIndexMd, lawCodeMd, articleMd } = require("../services/seoPages/markdown");
const {
  articleList,
  activeLaws,
  findArticle,
} = require("../services/seoPages/lawData");

router.use(
  rateLimit({ windowMs: 60 * 1000, max: 600, standardHeaders: true, legacyHeaders: false }),
);

/* Markdown `text/plain` sifatida beriladi: brauzer uni yuklab olishga
   urinmaydi, bot esa matnni to'g'ridan-to'g'ri o'qiydi. */
const md = (res, body) => res.type("text/plain; charset=utf-8").send(body);
const notFound = (res) => res.status(404).type("text/plain").send("Not found");

router.get("/qonunlar.md", async (req, res, next) => {
  try {
    cacheHeaders(res);
    return md(
      res,
      lawsIndexMd({ lang: langOf(req), laws: await activeLaws(), nameOf }),
    );
  } catch (e) {
    return next(e);
  }
});

router.get("/qonun/:code.md", async (req, res, next) => {
  try {
    const lang = langOf(req);
    const code = String(req.params.code || "").toUpperCase();
    const law = (await activeLaws()).find((l) => l.code === code);
    if (!law) return notFound(res);

    cacheHeaders(res);
    return md(
      res,
      lawCodeMd({ lang, law, articles: await articleList(code), nameOf }),
    );
  } catch (e) {
    return next(e);
  }
});

router.get("/qonun/:code/:article.md", async (req, res, next) => {
  try {
    const lang = langOf(req);
    const code = String(req.params.code || "").toUpperCase();
    const law = (await activeLaws()).find((l) => l.code === code);
    if (!law) return notFound(res);

    const article = await findArticle(code, String(req.params.article || "").trim());
    if (!article) return notFound(res);

    cacheHeaders(res);
    return md(res, articleMd({ lang, law, article, nameOf }));
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
