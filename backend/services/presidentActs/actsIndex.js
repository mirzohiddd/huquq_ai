"use strict";
/**
 * PREZIDENT HUJJATLARI — XOTIRADAGI RO'YXAT (filtr, qidiruv, sahifalash).
 *
 * ~5 600 ta yengil yozuv (nom, raqam, sana) xotirada — har qidiruvda
 * Atlas'ga regex so'rovi yuborilmaydi (M0 da sekin). 10 daqiqada yoki
 * yangi yig'ishdan keyin yangilanadi.
 */
const { LegalAct } = require("../../models/legalActs");
const { FORMS } = require("./listing");

const TTL = 10 * 60 * 1000;
let cache = null; // { at, rows }
let loading = null;

const norm = (s = "") =>
  String(s).toLowerCase().replace(/[’ʻʼ‘`'“”"«»]/g, "").replace(/\s+/g, " ").trim();

async function allActs() {
  if (cache && Date.now() - cache.at < TTL) return cache.rows;
  if (!loading) {
    loading = LegalAct.find({})
      .select("docId form number date dateKey year title statusCode listed -_id")
      .sort({ dateKey: -1 })
      .lean()
      .then((rows) => {
        for (const r of rows) r._hay = norm(`${r.title} ${r.number} ${r.date}`);
        cache = { at: Date.now(), rows };
        return rows;
      })
      .finally(() => (loading = null));
  }
  return loading;
}

function invalidate() {
  cache = null;
}

const view = (r, lang) => ({
  docId: r.docId,
  form: r.form,
  formLabel: FORMS[r.form]?.[lang === "ru" ? "ru" : "uz"] || r.form,
  number: r.number,
  date: r.date,
  title: r.title,
  status: r.listed === false ? "unknown" : r.statusCode === "y" ? "active" : "unknown",
});

/**
 * @param {{ q?, form?, year?, page?, size?, lang? }} f
 */
async function searchActs(f = {}) {
  const rows = await allActs();
  /* Ruscha raqam shakllari (УП-206, ПП-346) LexUZ'dagi lotincha raqamga. */
  const q = norm(f.q).replace(/уп-/g, "pf-").replace(/пп-/g, "pq-").replace(/(^|\s)р-(?=\d)/g, "$1f-");
  const words = q.split(" ").filter(Boolean);
  const size = Math.min(Number(f.size) || 20, 50);
  const page = Math.max(1, Number(f.page) || 1);
  const list = rows.filter(
    (r) =>
      (!f.form || r.form === f.form) &&
      (!f.year || r.year === Number(f.year)) &&
      words.every((w) => r._hay.includes(w)),
  );
  return {
    total: list.length,
    page,
    pages: Math.max(1, Math.ceil(list.length / size)),
    items: list.slice((page - 1) * size, page * size).map((r) => view(r, f.lang)),
  };
}

/** Katalog uchun: tur bo'yicha sonlar, yillar, eng yangilari. */
async function actsSummary(lang = "uz") {
  const rows = await allActs();
  const counts = { decree: 0, resolution: 0, order: 0 };
  const years = new Set();
  for (const r of rows) {
    counts[r.form] = (counts[r.form] || 0) + 1;
    if (r.year) years.add(r.year);
  }
  return {
    counts,
    total: rows.length,
    years: [...years].sort((a, b) => b - a),
    latest: rows.slice(0, 6).map((r) => view(r, lang)),
  };
}

async function findAct(docId, lang) {
  const rows = await allActs();
  const r = rows.find((x) => x.docId === docId);
  return r ? view(r, lang) : null;
}

module.exports = { allActs, invalidate, searchActs, actsSummary, findAct, view };
