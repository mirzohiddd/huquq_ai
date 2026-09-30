"use strict";
/**
 * PREZIDENT HUJJATLARI — API (`/api/legislation/acts`, `/api/legislation/act/:docId`).
 * Ro'yxat — xotiradagi indeksdan; to'liq matn — ochilganda LexUZ'dan (kesh).
 */
const router = require("express").Router();
const { userGuard, adminGuard } = require("../middleware/auth");
const { searchActs, findAct } = require("../services/presidentActs/actsIndex");
const { getActText } = require("../services/presidentActs/actText");
const { crawlActs } = require("../services/presidentActs/crawl");

const langOf = (req) => (String(req.query.lang || "").toLowerCase() === "ru" ? "ru" : "uz");
const FORMS = ["decree", "resolution", "order"];

/* Kartochkada organ nomi ruscha — o'zbekcha rejimda o'zbekcha. */
const organOf = (name, lang) =>
  lang === "ru" || !/президент/i.test(name) ? name : "O'zbekiston Respublikasi Prezidenti";

router.get("/acts", userGuard, async (req, res) => {
  try {
    const form = FORMS.includes(req.query.form) ? req.query.form : "";
    res.json({
      success: true,
      ...(await searchActs({
        q: String(req.query.q || "").slice(0, 120),
        form,
        year: Number(req.query.year) || "",
        page: req.query.page,
        size: 20,
        lang: langOf(req),
      })),
    });
  } catch (e) {
    console.error("acts list:", e.message);
    res.status(500).json({ success: false, message: "Server xatosi" });
  }
});

router.get("/act/:docId", userGuard, async (req, res) => {
  const docId = String(req.params.docId || "");
  if (!/^-?\d{1,10}$/.test(docId)) return res.status(404).json({ success: false, message: "Hujjat topilmadi" });
  try {
    const act = await findAct(docId, langOf(req));
    if (!act) return res.status(404).json({ success: false, message: "Hujjat topilmadi" });
    let text = null;
    try {
      text = await getActText(docId);
    } catch (e) {
      console.warn("act text:", e.message); // LexUZ ishlamasa ham rekvizitlar ko'rsatiladi
    }
    const meta = text?.meta || null;
    const status = meta?.status || act.status;
    res.json({
      success: true,
      act: { ...act, status },
      meta: meta && {
        adoptedAt: meta.adoptedAt,
        effectiveAt: meta.effectiveAt || text?.effectiveAt || "",
        endedAt: meta.endedAt,
        organ: organOf(meta.organs?.[0]?.name || "", langOf(req)),
        publication: meta.sourceNumber
          ? `${langOf(req) === "ru" ? meta.source || "" : String(meta.source || "").replace("НБДЗ", "QMMB")} ${meta.sourceNumber}`.trim()
          : "",
        publishedAt: meta.publishedAt,
      },
      blocks: text?.blocks || [],
      hasText: Boolean(text?.hasText),
      fetchedAt: text?.fetchedAt || null,
      sourceUrl: `https://lex.uz/uz/docs/${docId}`,
      pdfUrl: `https://lex.uz/uz/pdfs/${docId}`,
    });
  } catch (e) {
    console.error("act:", e.message);
    res.status(500).json({ success: false, message: "Server xatosi" });
  }
});

/* Admin: ro'yxatni hozir LexUZ'dan qayta yig'ish (fon). */
router.post("/acts/refresh", adminGuard, (req, res) => {
  crawlActs({ full: Boolean(req.body?.full) }).catch((e) => console.warn("acts refresh:", e.message));
  res.json({ success: true, message: "Yig'ish fonda boshlandi" });
});

module.exports = router;
