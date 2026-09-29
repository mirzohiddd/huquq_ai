"use strict";
/**
 * QONUNCHILIK HUJJATLARI KATALOGI — hujjatlar ro'yxati, filtrlar va
 * hujjat darajasidagi qidiruv (nomi, raqami, sanasi, organ, soha, tur).
 *
 * Manbalar: `LawSource` reyestri (qaysi hujjatlar bor) + `LawDossier`
 * (lex.uz rekvizitlari) + `config/legalAreas.js` (tur va sohalar) +
 * lokal AI korpusi (modda soni; bazaga qayta so'rov yubormaslik uchun).
 */
const { getLaws } = require("../lawRegistry");
const { getIndex } = require("../localAI/lawIndex");
const { listDossiers } = require("./dossier");
const { AREAS, DOC_TYPES, GROUPS, STATUSES, DOC_INFO, typeFromForm } = require("../../config/legalAreas");

const pick = (row, lang) => (lang === "ru" ? row.ru : row.uz);
const TYPE = new Map(DOC_TYPES.map((t) => [t.id, t]));
const AREA = new Map(AREAS.map((a) => [a.id, a]));

/* Organ nomi lex.uz kartochkasida ruscha — o'zbekcha ko'rinishi. */
const ORGAN_UZ = [
  [/олий мажлис/i, "O'zbekiston Respublikasi Oliy Majlisi"],
  [/референдум/i, "O'zbekiston Respublikasi referendumi"],
  [/верховный совет/i, "O'zbekiston Respublikasi Oliy Kengashi"],
  [/президент/i, "O'zbekiston Respublikasi Prezidenti"],
  [/кабинет министров/i, "O'zbekiston Respublikasi Vazirlar Mahkamasi"],
];
function organName(name = "", lang) {
  if (lang === "ru") return name;
  const hit = ORGAN_UZ.find(([re]) => re.test(name));
  return hit ? hit[1] : name;
}

async function articleCounts() {
  const counts = {};
  try {
    const { docs } = await getIndex();
    for (const d of docs) counts[d.lawCode] = (counts[d.lawCode] || 0) + 1;
  } catch {
    /* indeks hali tayyor emas — son ko'rsatilmaydi */
  }
  return counts;
}

/** Bitta hujjatning katalog yozuvi. */
function entryOf(law, dossier, count, lang) {
  const meta = dossier?.meta || {};
  const info = DOC_INFO[law.code] || {};
  const type = info.type || typeFromForm(meta.form) || "law";
  const t = TYPE.get(type) || TYPE.get("law");
  const editions = dossier?.editions || [];
  return {
    code: law.code,
    name: lang === "ru" ? law.nameI18n?.ru || law.name : law.name,
    // Rasmiy sarlavha o'zbekcha manbadan — ruscha rejimda ko'rsatilmaydi.
    officialTitle: lang === "ru" ? "" : meta.title || "",
    type,
    typeLabel: pick(t, lang),
    group: t.group,
    areas: info.areas || [],
    areaLabels: (info.areas || []).map((id) => pick(AREA.get(id) || { uz: id, ru: id }, lang)),
    status: meta.status || "active",
    amended: editions.length > 1,
    adoptedAt: meta.adoptedAt || "",
    effectiveAt: meta.effectiveAt || "",
    number: meta.number || "",
    /* НБДЗ — Qonunchilik ma'lumotlari milliy bazasi (QMMB). */
    publication: meta.sourceNumber
      ? `${lang === "ru" ? meta.source || "" : String(meta.source || "").replace("НБДЗ", "QMMB")} ${meta.sourceNumber}`.trim()
      : "",
    publishedAt: meta.publishedAt || "",
    organ: organName(meta.organs?.[0]?.name || "", lang),
    articleCount: count || 0,
    editionsCount: editions.length,
    lastEdition: editions[0] || "",
    related: dossier?.related || 0,
    url: lang === "ru" && law.urlRu ? law.urlRu : law.url,
    urlUz: law.url,
    urlRu: law.urlRu || "",
    checkedAt: dossier?.fetchedAt || null,
    hasMeta: Boolean(dossier?.meta?.status),
  };
}

async function getCatalog(lang = "uz") {
  const [laws, dossiers, counts] = await Promise.all([getLaws(), listDossiers(), articleCounts()]);
  const docs = laws.map((l) => entryOf(l, dossiers.get(l.code), counts[l.code], lang));
  const countBy = (fn) => docs.reduce((m, d) => (fn(d).forEach((k) => (m[k] = (m[k] || 0) + 1)), m), {});
  const byType = countBy((d) => [d.type]);
  const byArea = countBy((d) => d.areas);
  const byGroup = countBy((d) => [d.group]);
  const byStatus = countBy((d) => [d.status, ...(d.amended ? ["amended"] : [])]);
  return {
    docs,
    facets: {
      types: DOC_TYPES.map((t) => ({ id: t.id, label: pick(t, lang), group: t.group, count: byType[t.id] || 0 })),
      groups: GROUPS.map((g) => ({ id: g.id, label: pick(g, lang), count: byGroup[g.id] || 0 })),
      areas: AREAS.map((a) => ({ id: a.id, label: pick(a, lang), count: byArea[a.id] || 0 })),
      statuses: STATUSES.map((s) => ({ id: s.id, label: pick(s, lang), count: byStatus[s.id] || 0 })),
    },
  };
}

/* ── Hujjat darajasidagi filtr va qidiruv ────────────────────────────── */
const norm = (s = "") =>
  String(s).toLowerCase().replace(/[’ʻʼ‘`']/g, "").replace(/\s+/g, " ").trim();

function yearOf(d = "") {
  return (String(d).match(/(\d{4})$/) || [])[1] || "";
}

function filterDocs(docs, f = {}) {
  const q = norm(f.q);
  return docs.filter((d) => {
    if (f.type && d.type !== f.type) return false;
    if (f.group && d.group !== f.group) return false;
    if (f.area && !d.areas.includes(f.area)) return false;
    if (f.status && !(d.status === f.status || (f.status === "amended" && d.amended))) return false;
    if (f.year) {
      const y = f.dateField === "effective" ? yearOf(d.effectiveAt) : yearOf(d.adoptedAt);
      if (y !== String(f.year)) return false;
    }
    if (!q) return true;
    const hay = norm(
      [d.code, d.name, d.officialTitle, d.number, d.publication, d.adoptedAt,
        d.effectiveAt, d.organ, d.typeLabel, ...d.areaLabels].join(" "),
    );
    return q.split(" ").every((w) => hay.includes(w));
  });
}

module.exports = { getCatalog, filterDocs, entryOf, articleCounts };
