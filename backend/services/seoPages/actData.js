"use strict";
/**
 * OCHIQ PREZIDENT HUJJATLARI — ma'lumot qatlami (2026-10-03).
 *
 * Ro'yxat xotiradagi indeksdan (`presidentActs/actsIndex.js`), matn esa
 * `getActText` orqali: avval bazadagi keshdan, bo'lmasa LexUZ'dan.
 *
 * ⚠️ LEXUZ'NI HIMOYA QILISH: 5 600 ta hujjat sitemap'da. Googlebot ularni
 * ketma-ket ochsa, keshlanmagan har biri LexUZ'ga so'rov bo'lardi. Shuning
 * uchun bir vaqtda ko'pi bilan `MAX_PARALLEL` ta yangi yuklash; navbat
 * to'lsa yoki javob `WAIT_MS` dan kechiksa, sahifa matnsiz (noindex) beriladi,
 * yuklash esa fonda davom etib keshga tushadi — robot keyingi safar to'liq
 * matnni ko'radi. Robot hech qachon 60 soniya kutib qolmaydi.
 */
const { LegalActText } = require("../../models/legalActs");
const { allActs, view } = require("../presidentActs/actsIndex");
const { getActText } = require("../presidentActs/actText");

const MAX_PARALLEL = 2;
const MAX_QUEUE = 20;
const WAIT_MS = 8000;
let running = 0;
const queue = [];

function runLimited(fn) {
  return new Promise((resolve, reject) => {
    const start = () => {
      running++;
      fn()
        .then(resolve, reject)
        .finally(() => {
          running--;
          const nextJob = queue.shift();
          if (nextJob) nextJob();
        });
    };
    if (running < MAX_PARALLEL) start();
    else if (queue.length < MAX_QUEUE) queue.push(start);
    else reject(new Error("busy"));
  });
}

/** Hujjat matni: kesh → (cheklangan) LexUZ. `null` — hozircha yo'q. */
async function actTextFor(docId) {
  const hit = await LegalActText.findOne({ docId }).lean();
  if (hit?.hasText) {
    // Eskirgan bo'lsa fonda yangilanadi, sahifa kutmaydi
    getActTextQuiet(docId);
    return hit;
  }
  const job = runLimited(() => getActText(docId));
  job.catch(() => {}); // fondagi xato jim qolsin
  const timeout = new Promise((r) => setTimeout(() => r(null), WAIT_MS).unref?.());
  return Promise.race([job, timeout]).catch(() => hit || null);
}

function getActTextQuiet(docId) {
  if (running >= MAX_PARALLEL) return;
  runLimited(() => getActText(docId)).catch(() => {});
}

/** Hujjat + qo'shnilar (bir xil turdagi, sanasi yaqin) */
async function findActWithNeighbors(docId) {
  const rows = await allActs();
  const i = rows.findIndex((r) => r.docId === docId);
  if (i < 0) return null;
  const r = rows[i];
  const same = [];
  for (let j = i - 1, k = i + 1; same.length < 6 && (j >= 0 || k < rows.length); j--, k++) {
    if (k < rows.length && rows[k].form === r.form) same.push(rows[k]);
    if (j >= 0 && rows[j].form === r.form && same.length < 6) same.push(rows[j]);
  }
  return { act: view(r, "uz"), raw: r, related: same.map((x) => view(x, "uz")) };
}

const FORM_SLUG = { farmon: "decree", qaror: "resolution", farmoyish: "order" };
const PAGE_SIZE = 50;

/** /hujjatlar?tur=farmon&yil=2026&sahifa=2 */
async function listActs({ tur, yil, sahifa }) {
  const rows = await allActs();
  const form = FORM_SLUG[tur] || "";
  const year = Number(yil) || 0;
  const list = rows.filter((r) => (!form || r.form === form) && (!year || r.year === year));
  const pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  const page = Math.min(pages, Math.max(1, Number(sahifa) || 1));
  const years = [...new Set(rows.map((r) => r.year).filter(Boolean))].sort((a, b) => b - a);
  const counts = { decree: 0, resolution: 0, order: 0 };
  for (const r of rows) counts[r.form] = (counts[r.form] || 0) + 1;
  return {
    total: list.length,
    all: rows.length,
    counts,
    years,
    page,
    pages,
    form,
    year,
    items: list.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map((r) => view(r, "uz")),
  };
}

/** Sitemap uchun: barcha hujjatlar (eng yangisi birinchi) */
async function allActRefs() {
  return (await allActs()).map((r) => ({ docId: r.docId, dateKey: r.dateKey }));
}

module.exports = { actTextFor, findActWithNeighbors, listActs, allActRefs, FORM_SLUG, PAGE_SIZE };
