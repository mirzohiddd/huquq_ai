"use strict";
/**
 * LOKAL AI — BM25 INDEKSINING IXCHAM KO'RINISHI.
 *
 * ⚠️ XOTIRA (o'lchangan, 2026-10-02): indeks avval `Map(so'z → [modda,
 * chastota, modda, chastota, …])` edi — 28 mingta alohida JS massivi,
 * jami 1,76 mln son. V8 da har bir son 8 bayt + massivlarning zaxira
 * joyi ≈ 20 MB heap.
 *
 * Endi barcha juftliklar BITTA tipli massivda (har son 2 bayt, heap'dan
 * tashqarida ≈ 3,5 MB), `get(so'z)` esa o'sha massivning kerakli
 * bo'lagini (nusxasiz ko'rinish) qaytaradi. `search.js` uchun interfeys
 * o'zgarmadi: `list.length`, `list[k]`, `list[k + 1]`.
 */

class Postings {
  constructor(vocab, offsets, data) {
    this.offsets = offsets;
    this.data = data;
    this.ids = new Map(vocab.map((term, i) => [term, i]));
  }

  /** So'zning [modda, chastota, …] ro'yxati (so'z yo'q bo'lsa — undefined). */
  get(term) {
    const i = this.ids.get(term);
    if (i === undefined) return undefined;
    return this.data.subarray(this.offsets[i], this.offsets[i + 1]);
  }
}

/**
 * @param {Map<string, number[]>} lists — qurilish paytidagi vaqtinchalik ro'yxatlar
 * @param {number} docCount
 * @returns {{ postings: Postings, vocab: string[] }}
 */
function packPostings(lists, docCount) {
  const vocab = [...lists.keys()].sort(); // prefiks qidiruvi uchun tartiblangan
  let total = 0;
  for (const list of lists.values()) total += list.length;

  // 65 535 dan ko'p modda bo'lsa (hozir ~7 000) — avtomatik kengroq tur
  const data = docCount > 0xffff ? new Uint32Array(total) : new Uint16Array(total);
  const max = docCount > 0xffff ? 0xffffffff : 0xffff;
  const offsets = new Uint32Array(vocab.length + 1);
  let at = 0;
  vocab.forEach((term, i) => {
    const list = lists.get(term);
    offsets[i] = at;
    for (let k = 0; k < list.length; k += 2) {
      data[at++] = list[k];
      data[at++] = Math.min(list[k + 1], max);
    }
  });
  offsets[vocab.length] = at;
  return { postings: new Postings(vocab, offsets, data), vocab };
}

module.exports = { packPostings };
