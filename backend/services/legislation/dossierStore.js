"use strict";
/**
 * QONUNCHILIK MA'LUMOTI — XOTIRA + DISK NUSXASI.
 *
 * ⚠️ TEZLIK (o'lchangan, 2026-09-29): Atlas M0 dan bitta `LawDossier`
 * hujjatini (50 KB – 1 MB) o'qish 7 soniyagacha cho'zildi — hujjat
 * sahifasi shuncha ochilmasdi. Barcha 21 ta hujjat jami ~6 MB, shuning
 * uchun ular xotirada saqlanadi, disk nusxasi esa server qayta ishga
 * tushganda bazaga qaytmaslik uchun (`.cache/`, lokal AI korpusi kabi).
 * Bazadagi yozuv — asosiy manba; disk faqat tezkor nusxa.
 */
const fs = require("fs");
const path = require("path");
const { LawDossier } = require("../../models/legislation");

const SNAPSHOT = path.join(__dirname, "../../.cache/legislation-dossiers.json");
const docs = new Map(); // code → dossier
let loading = null;
let loaded = false;

function writeSnapshot() {
  try {
    fs.mkdirSync(path.dirname(SNAPSHOT), { recursive: true });
    fs.writeFileSync(SNAPSHOT, JSON.stringify([...docs.values()]));
  } catch (e) {
    console.warn("Qonunchilik snapshot yozilmadi:", e.message);
  }
}

function readSnapshot() {
  try {
    const rows = JSON.parse(fs.readFileSync(SNAPSHOT, "utf8"));
    return Array.isArray(rows) && rows.length ? rows : null;
  } catch {
    return null;
  }
}

/* Bazadan: har hujjat alohida va parallel (bitta katta kursor sekinroq). */
async function readFromDb() {
  const codes = (await LawDossier.find({}).select("code -_id").lean()).map((r) => r.code);
  return Promise.all(codes.map((code) => LawDossier.findOne({ code }).select("-__v").lean()));
}

async function ensureLoaded() {
  if (loaded) return;
  if (!loading) {
    loading = (async () => {
      const snap = readSnapshot();
      const rows = snap || (await readFromDb());
      for (const r of rows) if (r) docs.set(r.code, r);
      loaded = true;
      if (!snap && docs.size) writeSnapshot();
    })().finally(() => (loading = null));
  }
  return loading;
}

async function getStored(code) {
  await ensureLoaded();
  return docs.get(code) || null;
}

async function allStored() {
  await ensureLoaded();
  return [...docs.values()];
}

/** Yangilangan hujjatni xotira va diskka yozish (bazaga dossier.js yozadi). */
function putStored(doc) {
  const prev = docs.get(doc.code) || {};
  docs.set(doc.code, { ...prev, ...doc });
  writeSnapshot();
}

module.exports = { getStored, allStored, putStored, ensureLoaded };
