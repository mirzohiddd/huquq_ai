"use strict";
/**
 * DARS BO'LIMLARIDAGI QONUN IQTIBOSLARI (`lawRefs` → haqiqiy modda matni).
 *
 * ⚠️ TEZLIK (o'lchangan, 2026-09-29): avval iqtiboslar `LegalChunk` dan
 * `$or` bilan olinardi. 50 mavzuli darsda ~178 ta havola bor va har bir
 * `LegalChunk` hujjati embedding tufayli ~19 KB — Atlas M0 ularni diskdan
 * o'qishga 6,4 soniya sarflardi va dars shuncha ochilmasdi.
 *
 * Endi manba — lokal AI korpusi: xuddi shu `LegalChunk` ning xotiradagi
 * nusxasi (embeddingsiz, har 6 soatda yangilanadi). Qidiruv bir zumda.
 * Korpus hali tayyor bo'lmasa — avvalgidek bazadan (zaxira yo'l).
 */
const { getIndex } = require("./localAI/lawIndex");

let byKey = null; // { builtAt, map: Map("CODE:num" → doc) }

async function corpusMap() {
  const state = await getIndex();
  if (!byKey || byKey.builtAt !== state.builtAt) {
    byKey = {
      builtAt: state.builtAt,
      map: new Map(state.docs.map((d) => [`${d.lawCode}:${d.articleNumber}`, d])),
    };
  }
  return byKey.map;
}

async function fromDb(refs) {
  const { LegalChunk } = require("../models");
  const rows = await LegalChunk.find({
    $or: refs.map((r) => ({ lawCode: r.code, articleNumber: r.article })),
  })
    .select("lawCode lawName articleNumber title text -_id")
    .lean();
  return new Map(rows.map((a) => [`${a.lawCode}:${a.articleNumber}`, a]));
}

/**
 * Bo'limlarga `lawQuotes` qo'shadi (joyida). Modda topilmasa — havola
 * jim tashlab yuboriladi, dars baribir ochiladi.
 */
async function attachLawQuotes(lesson) {
  const refs = [];
  (lesson.sections || []).forEach((sec) =>
    (sec.lawRefs || []).forEach((r) => {
      if (r?.code && r?.article) {
        refs.push({ code: String(r.code).toUpperCase(), article: String(r.article) });
      }
    }),
  );
  if (!refs.length) return;

  let map;
  try {
    map = await corpusMap();
  } catch {
    map = await fromDb(refs);
  }

  (lesson.sections || []).forEach((sec) => {
    sec.lawQuotes = (sec.lawRefs || [])
      .map((r) => map.get(`${String(r.code).toUpperCase()}:${r.article}`))
      .filter(Boolean)
      .map((a) => ({
        code: a.lawCode,
        lawName: a.lawName,
        articleNumber: a.articleNumber,
        title: a.title,
        // Uzun moddalar darsda o'qishni og'irlashtiradi — qisqartiramiz,
        // to'liq matn kutubxonada (havola beriladi)
        text: a.text.length > 700 ? a.text.slice(0, 700).trim() + "…" : a.text,
        truncated: a.text.length > 700,
      }));
  });
}

module.exports = { attachLawQuotes };
