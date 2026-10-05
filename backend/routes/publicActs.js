"use strict";
/**
 * OCHIQ PREZIDENT HUJJATLARI — server tomonda chiziladigan sahifalar
 * (2026-10-03, SEO). Asosiy domenda: `/hujjatlar`, `/hujjat/:docId`,
 * `/sitemap-hujjatlar.xml` — `frontend/vercel.json` rewrite shu yerga uzatadi.
 *
 * ⚠️ Login talab qilinmaydi: bu LexUZ'dagi RASMIY, ochiq matn. Ilovaning
 * ichidagi `/legislation/president` (qidiruv, filtr) avvalgidek login bilan.
 */
const router = require("express").Router();
const rateLimit = require("express-rate-limit");
const { publicPageCsp, cacheHeaders } = require("../services/seoPages/httpHeaders");
const { actPage, actsIndexPage, actNotFoundPage } = require("../services/seoPages/actPages");
const { actTextFor, findActWithNeighbors, listActs, allActRefs } = require("../services/seoPages/actData");
const { SITE_URL, path } = require("../services/seoPages/meta");

router.use(["/hujjatlar", "/hujjat", "/sitemap-hujjatlar.xml"], publicPageCsp);
router.use(
  ["/hujjatlar", "/hujjat"],
  rateLimit({ windowMs: 60 * 1000, max: 600, standardHeaders: true, legacyHeaders: false }),
);

const html = (res, body, status = 200) => res.status(status).type("html").send(body);

router.get("/hujjatlar", async (req, res, next) => {
  try {
    const d = await listActs({ tur: req.query.tur, yil: req.query.yil, sahifa: req.query.sahifa });
    cacheHeaders(res, 3600);
    return html(res, actsIndexPage(d));
  } catch (e) {
    return next(e);
  }
});

router.get("/hujjat", (req, res) => res.redirect(301, "/hujjatlar"));

router.get("/hujjat/:docId", async (req, res, next) => {
  try {
    const docId = String(req.params.docId || "");
    const found = /^-?\d{1,10}$/.test(docId) ? await findActWithNeighbors(docId) : null;
    if (!found) return html(res, actNotFoundPage(), 404);
    const text = await actTextFor(docId);
    /* Matn hali yo'q (LexUZ sekin yoki navbat to'la) — sahifa noindex va
       CDN uni QISQA keshlaydi: matn fonda yuklanib, keyingi safar to'liq. */
    cacheHeaders(res, text?.hasText ? 21600 : 300);
    return html(res, actPage({ act: found.act, text, related: found.related }));
  } catch (e) {
    return next(e);
  }
});

let smCache = null;
let smAt = 0;
router.get("/sitemap-hujjatlar.xml", async (req, res, next) => {
  try {
    cacheHeaders(res);
    if (!smCache || Date.now() - smAt > 6 * 3600 * 1000) {
      const day = (k) => (k ? `${String(k).slice(0, 4)}-${String(k).slice(4, 6)}-${String(k).slice(6, 8)}` : "");
      const node = (loc, lastmod, pr) =>
        `  <url><loc>${SITE_URL}${loc.replace(/&/g, "&amp;")}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}<priority>${pr}</priority></url>`;
      const refs = await allActRefs();
      const nodes = [
        node(path.acts(), "", "0.8"),
        ...["farmon", "qaror", "farmoyish"].map((s) => node(path.acts(`?tur=${s}`), "", "0.7")),
        ...refs.map((r) => node(path.act(r.docId), /^\d{8}$/.test(String(r.dateKey)) ? day(r.dateKey) : "", "0.5")),
      ];
      smCache = `<?xml version="1.0" encoding="UTF-8"?>\n<!-- HuquqTech — Prezident hujjatlari (avtomatik). -->\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${nodes.join("\n")}\n</urlset>`;
      smAt = Date.now();
    }
    return res.type("application/xml").send(smCache);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
