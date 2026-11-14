"use strict";
/**
 * AI DEBUG REJIMI — har bir savol uchun butun zanjirni ko'rsatadi:
 * so'rov tahlili → topilgan moddalar (ball, qaysi kanaldan) → modelga
 * berilgan kontekst → javob → manbalar → ishonch tekshiruvi.
 *
 * Ishlatish:
 *   node scripts/aiDebug.js                    — 10 ta nazorat savoli
 *   node scripts/aiDebug.js "savol matni"      — bitta savol
 *   --tier=pro      tarifni taqlid qilish (free | basic | pro | premium)
 *   --context       modelga berilgan kontekstni to'liq chiqarish
 *   --only=5,6      faqat shu raqamli testlar
 * Telegram bot ishga tushmaydi, bazaga hech narsa yozilmaydi (kesh ham).
 */
require("dotenv").config();
const mongoose = require("mongoose");

const CAR = "Men qarindoshimning mashinasini minib olgan edim, egasi yonimda edi, yo'l patruli mashinani to'xtatib olib qo'ydi, 3 kundan beri bayonnoma yuborilmagan. Nima qilishim kerak?";
const CAR_TYPO = "Men garindoshimni mashinasini minib olgan o'zi yonimda edi, gap to'htatib mashinani tortib qo'ydi 3 kundan beri bayon nomani hali jo'natmagan nima qilishim kerak";
const TESTS = [
  { n: 1, q: "Mehnat shartnomasini bekor qilish tartibi qanday?" },
  { n: 2, q: "aliment undirish uchun nima qilish kerak?" },
  { n: 3, q: "sudga da'vo arizasi berish muddati qancha?" },
  { n: 4, q: "Jinoyat-protsessual kodeksining 46-moddasi nima haqida?" },
  { n: 5, q: "135 modda", note: "tarixsiz — qaysi qonun ekanini so'rashi kerak" },
  { n: 6, q: CAR },
  { n: 7, q: CAR_TYPO, note: "xuddi shu savol imlo xatolari bilan" },
  { n: 8, q: "Меня уволили без предупреждения, что мне делать?" },
  { n: 9, q: "Ishxonam zarplata bermayapti 2 oy bo'ldi, mojno li podat v sud?" },
  { n: 10, q: "135 modda", after: 7, note: "7-testdan keyingi davom savoli — oldingi vaziyatga bog'lanishi kerak" },
];

const arg = (name) => process.argv.find((a) => a.startsWith(`--${name}=`))?.split("=")[1];
const line = (ch = "─") => console.log(ch.repeat(96));

function show(t, r, ms, withContext) {
  const d = r.debug || {};
  line("═");
  console.log(`TEST ${t.n}${t.note ? ` (${t.note})` : ""}\nSAVOL: ${t.q}`);
  line();
  const u = d.understanding;
  if (u) {
    console.log(`TAHLIL [${u.via}${u.model ? ` · ${u.model}` : ""}] davom savoli: ${u.followUp ? "ha" : "yo'q"} · kodekslar: ${(u.codes || []).join(", ") || "—"} · moddalar: ${(u.articles || []).join(", ") || "—"}`);
    if (u.standalone !== t.q) console.log(`  normallashtirilgan: ${u.standalone}`);
    if (u.issue) console.log(`  huquqiy masala: ${u.issue}`);
    if (u.keywords?.length) console.log(`  kalit atamalar: ${u.keywords.join(" | ")}`);
  }
  if (d.retrieval) {
    const c = d.retrieval.channels;
    console.log(`KANALLAR  raqam: [${c.number.join(", ")}]  xom matn: [${c.bm25raw.join(", ")}]\n          normallashtirilgan: [${c.bm25norm.join(", ")}]\n          semantik: [${c.vector.join(", ")}]${d.retrieval.vectorError ? `  (XATO: ${d.retrieval.vectorError})` : ""}`);
  }
  console.log("TOPILGAN HUJJATLAR (ball · kanal):");
  for (const x of d.docs || []) console.log(`  ${String(x.score).padEnd(4)} ${x.id.padEnd(10)} ${x.direct ? "ANIQ " : ""}[${x.via.join("+")}] ${x.title.slice(0, 80)}`);
  if (!(d.docs || []).length) console.log("  — (LLM chaqirilmagan yoki hujjat topilmagan)");
  if (d.context) console.log(`KONTEKST: ${d.context.length} belgi${withContext ? `\n${d.context}` : " (to'liq ko'rish: --context)"}`);
  console.log(`PROVAYDER: ${r.provider || "—"}${r.model ? ` · ${r.model}` : ""} · tarif: ${d.access?.tier || "—"}${d.profile ? ` (manba ${d.profile.rag} ta, tarix ${d.profile.turns}, javob ${d.profile.out} token)` : ""} · ${ms} ms${d.fallback ? " · ZAXIRA JAVOB (LLM'siz)" : ""}`);
  if (d.guard) console.log(`TEKSHIRUV: tasdiqlanmagan modda: [${d.guard.unverified.join(", ")}] · qayta so'raldi: ${d.guard.retried} · jumla olib tashlandi: ${d.guard.stripped}`);
  line();
  console.log(`JAVOB:\n${r.answer}`);
  if (r.sources?.length) console.log(`\nMANBALAR (metadata): ${r.sources.map((s) => `${s.id} (${s.score})`).join(", ")}`);
}

async function main() {
  await mongoose.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 20000 });
  await require("../services/aiBilling/settings").loadSettings?.();
  const { getLegalAdvice } = require("../services/legalAI");
  const tier = arg("tier") || null;
  const only = arg("only")?.split(",").map(Number);
  const custom = process.argv.slice(2).find((a) => !a.startsWith("--"));
  const tests = custom ? [{ n: 0, q: custom }] : TESTS.filter((t) => !only || only.includes(t.n) );
  const answers = new Map();
  const summary = [];

  for (const t of tests) {
    let history = [];
    if (t.after) {
      const prev = TESTS.find((x) => x.n === t.after);
      if (!answers.has(prev.n)) answers.set(prev.n, (await getLegalAdvice(prev.q, [], null, "image/jpeg", "uz", false, { forceTier: tier })).answer);
      history = [{ role: "user", content: prev.q }, { role: "assistant", content: answers.get(prev.n) }];
    }
    const t0 = Date.now();
    const r = await getLegalAdvice(t.q, history, null, "image/jpeg", "uz", false, { debug: true, forceTier: tier });
    answers.set(t.n, r.answer);
    show(t, r, Date.now() - t0, process.argv.includes("--context"));
    const notFound = /mos modda topilmadi|не найдено статьи/i.test(r.answer);
    summary.push({ test: t.n, provider: r.provider || "—", hujjat: (r.debug?.docs || []).length, manba: (r.sources || []).length, "topilmadi?": notFound ? "HA" : "yo'q", ms: Date.now() - t0 });
  }
  line("═");
  console.table(summary);
  await mongoose.disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
