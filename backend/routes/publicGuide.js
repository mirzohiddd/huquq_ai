"use strict";
/**
 * /huquqni-organish (+ `.md`) — "Huquqni onlayn o'rganish" qo'llanmasi.
 *
 * Alohida fayl: `publicQa.js` va `publicLearn.js` 200 qatorga yaqin.
 * ⚠️ `.md` marshruti HTML marshrutidan OLDIN (publicQa.js dagi sabab).
 */
const router = require("express").Router();
const rateLimit = require("express-rate-limit");
const { langOf } = require("../services/seoPages/meta");
const { publicPageCsp, cacheHeaders } = require("../services/seoPages/httpHeaders");
const { guidePage, guideMd, GUIDE_PATH } = require("../services/seoPages/guidePage");
const { MODULES, moduleOf, lessonList, quizList } = require("../services/seoPages/learnData");
const { activeLaws } = require("../services/seoPages/lawData");
const { LegalChunk } = require("../models");

router.use(publicPageCsp);
router.use(rateLimit({ windowMs: 60 * 1000, max: 600, standardHeaders: true, legacyHeaders: false }));

/** Jonli raqamlar va modullar bo'yicha darslar soni (bo'sh modul chiqmaydi). */
async function load(lang) {
  const [lessons, quizzes, laws, articles] = await Promise.all([
    lessonList(),
    quizList(),
    activeLaws(),
    LegalChunk.estimatedDocumentCount(),
  ]);
  const modules = MODULES.filter((m) => m.key)
    .map((m) => ({
      key: m.key,
      name: lang === "ru" ? m.ru : m.uz,
      count: lessons.filter((l) => moduleOf(l.category).key === m.key).length,
    }))
    .filter((m) => m.count);
  return {
    lang,
    modules,
    stats: { lessons: lessons.length, quizzes: quizzes.length, laws: laws.length, articles },
  };
}

router.get(`${GUIDE_PATH}.md`, async (req, res, next) => {
  try {
    const data = await load(langOf(req));
    cacheHeaders(res);
    return res.type("text/plain; charset=utf-8").send(guideMd(data));
  } catch (e) {
    return next(e);
  }
});

router.get(GUIDE_PATH, async (req, res, next) => {
  try {
    const data = await load(langOf(req));
    cacheHeaders(res);
    return res.type("html").send(guidePage(data));
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
