"use strict";
/**
 * Prezident hujjatlarini "Qonunchilik hujjatlari" katalogi va qidiruviga
 * qo'shish. Kodekslar mantig'iga (catalog.js) tegilmaydi — natija ustiga
 * qo'shiladi.
 */
const { actsSummary, searchActs } = require("./actsIndex");

const ACT_FORMS = ["decree", "resolution", "order"];

/** Katalog facet'lari: tur/guruh/holat sonlariga Prezident hujjatlari. */
async function mergeCatalog(catalog, lang) {
  const summary = await actsSummary(lang).catch(() => null);
  if (!summary || !summary.total) return { ...catalog, president: null };
  const f = catalog.facets;
  const bump = (list, id, n) => list.map((x) => (x.id === id ? { ...x, count: x.count + n } : x));
  let types = f.types;
  for (const form of ACT_FORMS) types = bump(types, form, summary.counts[form] || 0);
  return {
    ...catalog,
    facets: {
      ...f,
      types,
      groups: bump(f.groups, "president", summary.total),
      statuses: bump(f.statuses, "active", summary.total),
    },
    president: summary,
  };
}

/**
 * Qidiruv/filtrga mos Prezident hujjatlari.
 * Soha filtri berilsa — qo'shilmaydi: hujjatlar hali sohalarga ajratilmagan
 * (taxmin bilan bog'lash noto'g'ri natija berardi).
 */
async function actsForSearch(f, lang) {
  if (f.area) return null;
  if (f.status && f.status !== "active") return null;
  if (f.type && !ACT_FORMS.includes(f.type)) return null;
  if (f.group && f.group !== "president") return null;
  if (!f.q && !f.type && !f.group && !f.year) return null;
  return searchActs({ q: f.q, form: f.type || "", year: f.year || "", size: 20, lang });
}

module.exports = { mergeCatalog, actsForSearch, ACT_FORMS };
