"use strict";
/**
 * QONUNCHILIK HUJJATLARI — API (`/api/legislation`).
 *
 * Hujjat → Bo'lim → Bob → Modda → Rasmiy matn → Oddiy tushuntirish →
 * Misol → Huquq/Majburiyat → O'zgartirishlar → Bog'liq hujjatlar →
 * Rasmiy manba. Ma'lumot manbalari: `LegalChunk` (modda matni),
 * `LawDossier` (lex.uz rekvizitlari va tuzilmasi), darslar va
 * savol-javoblar (platforma izohi). Hammasi ro'yxatdan o'tganlar uchun —
 * kutubxona bilan bir xil (`userGuard`).
 */
const router = require("express").Router();
const { userGuard, adminGuard } = require("../middleware/auth");
const { getCatalog, filterDocs } = require("../services/legislation/catalog");
const { searchArticles } = require("../services/legislation/articleSearch");
const { getDocument } = require("../services/legislation/docView");
const { getArticle } = require("../services/legislation/articleView");
const { compareArticle } = require("../services/legislation/editions");
const { buildQuiz } = require("../services/legislation/quiz");
const { refreshAll } = require("../services/legislation/dossier");
const { GLOSSARY } = require("../config/legalGlossary");

const langOf = (req) => (String(req.query.lang || "").toLowerCase() === "ru" ? "ru" : "uz");
const codeOf = (req) => String(req.params.code || "").toUpperCase().slice(0, 12);
const numOf = (req) => String(req.params.num || "").slice(0, 20);

function fail(res, err, where) {
  console.error(`legislation ${where}:`, err.message);
  res.status(err.status || 500).json({ success: false, message: err.status ? err.message : "Server xatosi" });
}

router.get("/catalog", userGuard, async (req, res) => {
  try {
    res.json({ success: true, ...(await getCatalog(langOf(req))) });
  } catch (e) {
    fail(res, e, "catalog");
  }
});

/* Qidiruv: hujjatlar (nomi, raqami, sanasi, organ, soha, tur bo'yicha)
   va barcha hujjatlardagi moddalar. Filtrlar ikkalasiga ham qo'llanadi. */
router.get("/search", userGuard, async (req, res) => {
  try {
    const lang = langOf(req);
    const q = String(req.query.q || "").trim().slice(0, 120);
    const f = {
      q,
      type: req.query.type || "",
      group: req.query.group || "",
      area: req.query.area || "",
      status: req.query.status || "",
      year: req.query.year || "",
      dateField: req.query.dateField || "adopted",
    };
    const { docs: all } = await getCatalog(lang);
    const docs = filterDocs(all, f);
    const scope = filterDocs(all, { ...f, q: "" }).map((d) => d.code);
    const articles = q.length >= 2 ? await searchArticles(q, { lang, codes: scope, limit: 40 }) : [];
    res.json({ success: true, docs, articles });
  } catch (e) {
    fail(res, e, "search");
  }
});

router.get("/glossary", userGuard, (req, res) => {
  const lang = langOf(req);
  res.json({
    success: true,
    terms: GLOSSARY.map((g) => ({
      id: g.id,
      forms: lang === "ru" ? g.ru : g.uz,
      def: lang === "ru" ? g.defRu : g.defUz,
    })).filter((g) => g.forms.length),
  });
});

router.get("/doc/:code", userGuard, async (req, res) => {
  try {
    const data = await getDocument(codeOf(req), langOf(req));
    if (!data) return res.status(404).json({ success: false, message: "Hujjat topilmadi" });
    res.json({ success: true, ...data });
  } catch (e) {
    fail(res, e, "doc");
  }
});

router.get("/doc/:code/quiz", userGuard, async (req, res) => {
  try {
    const questions = await buildQuiz(codeOf(req), { lang: langOf(req), seed: req.query.seed });
    res.json({ success: true, questions });
  } catch (e) {
    fail(res, e, "quiz");
  }
});

router.get("/doc/:code/article/:num", userGuard, async (req, res) => {
  try {
    const data = await getArticle(codeOf(req), numOf(req), langOf(req));
    if (!data) return res.status(404).json({ success: false, message: "Modda topilmadi" });
    res.json({ success: true, ...data });
  } catch (e) {
    fail(res, e, "article");
  }
});

router.get("/doc/:code/article/:num/compare", userGuard, async (req, res) => {
  try {
    const date = String(req.query.date || "");
    if (!/^\d{2}\.\d{2}\.\d{4}$/.test(date)) {
      return res.status(400).json({ success: false, message: "Sana noto'g'ri" });
    }
    res.json({ success: true, ...(await compareArticle(codeOf(req), numOf(req), date)) });
  } catch (e) {
    fail(res, e, "compare");
  }
});

/* Admin: lex.uz rekvizitlari va tuzilmasini hozir qayta olish (fon). */
router.post("/refresh", adminGuard, (req, res) => {
  const onlyCode = req.body?.code ? String(req.body.code).toUpperCase() : undefined;
  refreshAll({ force: true, onlyCode }).catch((e) => console.warn("legislation refresh:", e.message));
  res.json({ success: true, message: "Yangilash fonda boshlandi" });
});

module.exports = router;
