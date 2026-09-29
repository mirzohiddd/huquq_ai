"use strict";
/**
 * QONUNCHILIK HUJJATLARI — rasmiy ma'lumotni lex.uz'dan yangilash.
 *
 * Har bir hujjat uchun 4 ta sahifa o'qiladi: o'zbekcha matn (tuzilma +
 * modda o'zgarishlari + tahrir sanalari), ruscha matn (ruscha tuzilma),
 * "Yuridik analiz kartochkasi" (rekvizitlar, holat) va korrespondentlar
 * (shu hujjatga havola qiluvchi / uni o'zgartirgan hujjatlar).
 *
 * ⚠️ Fon rejimida, ketma-ket va tanaffus bilan — lex.uz'ni ortiqcha
 * yuklamaslik uchun. Server ishga tushgach 2 daqiqa kutiladi (qonun
 * matnini yuklash o'z ishini boshlab olsin), keyin har 24 soatda.
 * Yaqinda (20 soat ichida) yangilangan hujjat o'tkazib yuboriladi.
 */
const { LawDossier } = require("../../models/legislation");
const { getLaws } = require("../lawRegistry");
const { parseDocument, parseCard, parseCorrespondents } = require("./lexParse");
const { getStored, allStored, putStored, ensureLoaded } = require("./dossierStore");

const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
  Accept: "text/html,application/xhtml+xml",
  "Accept-Language": "uz,ru;q=0.9",
};
const FRESH_MS = 20 * 60 * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;
const GAP_MS = 3000;

async function fetchHtml(url) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 90000);
  try {
    const r = await fetch(url, { headers: HEADERS, signal: ctrl.signal });
    if (!r.ok) throw new Error(`HTTP ${r.status} — ${url}`);
    return await r.text();
  } finally {
    clearTimeout(timer);
  }
}

/** "https://lex.uz/uz/docs/-6257288" → "-6257288" */
function docIdOf(url = "") {
  return (String(url).match(/docs\/(-?\d+)/) || [])[1] || "";
}

async function refreshDossier(law) {
  const docId = law.docId || docIdOf(law.url);
  const uz = parseDocument(await fetchHtml(law.url));
  let ru = null;
  if (law.urlRu) {
    ru = await fetchHtml(law.urlRu).then(parseDocument).catch(() => null);
  }
  /* Kartochka ba'zan boshqa yozuvdagi yorliqlar bilan keladi va maydonlar
     o'qilmaydi — bir marta qayta so'raladi, baribir bo'lmasa oldingi
     (tekshirilgan) rekvizitlar saqlanib qoladi. */
  let meta = null;
  for (let i = 0; i < 2 && !meta?.status; i++) {
    meta = await fetchHtml(`https://lex.uz/uz/actinfo/card1/${docId}`).then(parseCard).catch(() => meta);
  }
  if (!meta?.status) {
    const prev = await getStored(law.code);
    if (prev?.meta?.status) meta = prev.meta;
  }
  const correspondents = await fetchHtml(`https://lex.uz/uz/actinfo/correspondents/${docId}`)
    .then(parseCorrespondents)
    .catch(() => []);

  const doc = {
    code: law.code,
    docId,
    meta: meta ? { ...meta, title: uz.title } : { title: uz.title },
    structure: { uz: uz.nodes, ru: ru ? ru.nodes : [] },
    changes: { uz: uz.changes, ru: ru ? ru.changes : {} },
    editions: uz.editions,
    correspondents,
    fetchedAt: new Date(),
    error: "",
  };
  await LawDossier.updateOne({ code: law.code }, { $set: doc }, { upsert: true });
  putStored(doc);
  return doc;
}

let running = false;

async function refreshAll({ force = false, onlyCode } = {}) {
  if (running) return { skipped: "running" };
  running = true;
  const done = [];
  try {
    const laws = (await getLaws()).filter((l) => !onlyCode || l.code === onlyCode);
    const existing = await allStored();
    const fresh = new Map(existing.map((d) => [d.code, d.fetchedAt]));
    for (const law of laws) {
      const at = fresh.get(law.code);
      if (!force && at && Date.now() - new Date(at).getTime() < FRESH_MS) continue;
      try {
        await refreshDossier(law);
        done.push(law.code);
      } catch (e) {
        console.warn(`Qonunchilik ma'lumoti (${law.code}) yangilanmadi:`, e.message);
        await LawDossier.updateOne(
          { code: law.code },
          { $set: { error: e.message } },
          { upsert: true },
        ).catch(() => {});
      }
      await new Promise((r) => setTimeout(r, GAP_MS));
    }
  } finally {
    running = false;
  }
  if (done.length) console.log(`📜 Qonunchilik ma'lumoti yangilandi: ${done.join(", ")}`);
  return { updated: done };
}

/* ── O'qish — xotiradan (qarang: dossierStore.js) ──────────────────── */
const getDossier = (code) => getStored(code);

/** Katalog uchun yengil ro'yxat: faqat rekvizitlar va hisoblagichlar. */
async function listDossiers() {
  const rows = await allStored();
  return new Map(
    rows.map((r) => [
      r.code,
      {
        meta: r.meta || null,
        editions: r.editions || [],
        fetchedAt: r.fetchedAt,
        related: (r.correspondents || []).length,
      },
    ]),
  );
}

function startDossierRefresh() {
  const run = () =>
    refreshAll().catch((e) => console.warn("Qonunchilik yangilanishi:", e.message));
  // Xotira nusxasi oldindan tayyorlanadi — birinchi foydalanuvchi kutmasin.
  setTimeout(() => ensureLoaded().catch((e) => console.warn("Qonunchilik xotirasi:", e.message)), 8000).unref?.();
  setTimeout(run, 2 * 60 * 1000).unref?.();
  setInterval(run, DAY_MS).unref?.();
}

module.exports = { refreshAll, refreshDossier, getDossier, listDossiers, startDossierRefresh };
