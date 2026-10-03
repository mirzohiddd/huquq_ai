"use strict";
/**
 * LOKAL AI — QONUN MATNLARI KORPUSI (xotirani tejaydigan saqlash).
 *
 * ⚠️ XOTIRA (o'lchangan, 2026-10-02): avval har bir modda matni oddiy JS
 * satri edi. 7126 modda × 2 til ≈ 15,5 mln belgi; kirill va "ʻ" belgisi
 * tufayli V8 ularni 2 baytli satr qilib saqlaydi — ~31 MB HEAP. Server
 * 512 MB RAM'da ishlaydi va V8 heap chegarasi ~256 MB, shuning uchun
 * har bir megabayt hisobda.
 *
 * Endi barcha matn BITTA UTF-8 Buffer'da (heap'dan TASHQARIDA, ~22 MB)
 * turadi, modda obyekti esa faqat joylashuvni (offset, uzunlik) biladi.
 * `doc.text` / `doc.textRu` — getter: matn faqat SO'RALGANDA satrga
 * aylanadi (bitta modda — bir necha KB) va ishlatilgach tozalanadi.
 * Iste'molchilar (compose, kutubxona, darslar) uchun hech narsa
 * o'zgarmadi: `doc.text` avvalgidek satr qaytaradi.
 *
 * Disk nusxasi ham shu shaklda: matn Buffer'i + kichik meta fayl.
 * Avvalgi 23 MB JSON o'qilganda 46 MB satr + tahlil xotirasi kerak edi.
 */
const fs = require("fs");
const path = require("path");

const DIR = path.join(__dirname, "../../.cache");
const BIN = path.join(DIR, "local-ai-corpus.bin");
const META = path.join(DIR, "local-ai-corpus.meta.json");
const LEGACY = path.join(DIR, "local-ai-corpus.json"); // eski format

/* Maydonlar xususiy (#) — obyekt tasodifan JSON'ga aylantirilsa yoki
   yoyilsa (`{...doc}`), 22 MB lik Buffer javobga tushib qolmaydi. */
class Doc {
  #buf;
  #uo;
  #ul;
  #ro;
  #rl;

  constructor(law, row, buf) {
    this.lawCode = law.code;
    this.lawName = law.name;
    this.lawNameRu = law.nameRu;
    this.articleNumber = row[1];
    this.title = row[2];
    this.titleRu = row[3];
    this.#buf = buf;
    this.#uo = row[4];
    this.#ul = row[5];
    this.#ro = row[6];
    this.#rl = row[7];
  }

  get text() {
    return this.#buf.toString("utf8", this.#uo, this.#uo + this.#ul);
  }

  get textRu() {
    return this.#rl ? this.#buf.toString("utf8", this.#ro, this.#ro + this.#rl) : "";
  }
}

function makeDocs(laws, rows, buf) {
  return rows.map((row) => new Doc(laws[row[0]], row, buf));
}

/**
 * Bazadan kelgan qismlarni (kodeks tartibida) yagona korpusga yig'adi.
 * @param {{code,name,nameRu}[]} lawList
 * @param {{num,title,titleRu,uz:Buffer,ru:Buffer}[][]} parts — kodeks bo'yicha
 */
function assemble(lawList, parts) {
  const laws = {};
  const rows = [];
  const chunks = [];
  let size = 0;
  lawList.forEach((law, i) => {
    laws[law.code] = law;
    for (const p of parts[i] || []) {
      rows.push([law.code, p.num, p.title, p.titleRu, size, p.uz.length, size + p.uz.length, p.ru.length]);
      chunks.push(p.uz, p.ru);
      size += p.uz.length + p.ru.length;
    }
  });
  const buf = Buffer.concat(chunks, size);
  return { laws, rows, buf, docs: makeDocs(laws, rows, buf) };
}

function writeFileAtomic(file, data) {
  fs.writeFileSync(`${file}.tmp`, data);
  fs.renameSync(`${file}.tmp`, file);
}

function writeSnapshot({ laws, rows, buf }) {
  try {
    fs.mkdirSync(DIR, { recursive: true });
    writeFileAtomic(BIN, buf);
    writeFileAtomic(META, JSON.stringify({ savedAt: Date.now(), size: buf.length, laws, rows }));
    fs.rmSync(LEGACY, { force: true }); // eski 23 MB nusxa endi kerak emas
  } catch (e) {
    console.warn("Lokal AI snapshot yozilmadi:", e.message);
  }
}

/** @returns {null | { savedAt: number, docs: Doc[] }} */
function readSnapshot() {
  try {
    const meta = JSON.parse(fs.readFileSync(META, "utf8"));
    const buf = fs.readFileSync(BIN);
    // Ikki fayl bir-biriga mos kelmasa (yozish yarmida uzilgan) — ishlatilmaydi
    if (!Array.isArray(meta.rows) || !meta.rows.length || buf.length !== meta.size) return null;
    return { savedAt: meta.savedAt, docs: makeDocs(meta.laws, meta.rows, buf) };
  } catch {
    return null;
  }
}

module.exports = { assemble, writeSnapshot, readSnapshot };
