"use strict";
/**
 * JAVOB USLUBI BUYRUQLARI — "qisqa javob ber", "batafsil", "oddiy tilda" (2026-10-14).
 *
 * ⚠️ MUAMMO: foydalanuvchi uzun javobdan keyin "qisqa javob ber" deb
 * yozsa, xabarda mavzu yo'qligi uchun lokal AI OLDINGI savolni qayta
 * ishlab, AYNAN o'sha uzun javobni qaytarardi — "AI meni tushunmayapti,
 * bir xil javob tashlayapti". Endi bunday xabar BUYRUQ sifatida taniladi:
 * oldingi savol javobi qayta yig'iladi va so'ralgan shaklga keltiriladi.
 *
 * ⚠️ Yangi ma'lumot TO'QILMAYDI — qisqa/sodda javob to'liq javobning O'Z
 * qismlaridan (sarlavha, xulosa, qadamlar, qonun iqtibosi) yig'iladi.
 */
const { words } = require("./text");

const STYLES = [
  ["short", /qisqa|lo\W?nda|bir (gap|jumla)|ikki (gap|og\W?iz)|qisqart|кратк|коротк|короче|в двух словах|без воды|одним предложением/i],
  ["simple", /oddiy(roq)? (til|so\W?z)|sodda(roq)?|tushunarli(roq)?|tushunmadim|tushunmayapman|проще|понятн|не понял|не понятно|простыми словами/i],
  ["steps", /faqat (qadam|nima qilish)|qadam(ma)?[- ]?qadam|qadamlar(ni)?\b|по шагам|пошагов|только (шаги|что делать)/i],
  ["detail", /batafsil|to\W?liq(roq)?|kengroq|chuqurroq|ko\W?proq (ma\W?lumot|tushuntir)|подробн|развернут|полностью/i],
  ["other", /boshqacha|boshqa javob|boshqa (manba|modda)|yana bir (bor|marta)|другой ответ|иначе|по-другому/i],
];

/* Buyruq ichidagi "to'ldiruvchi" so'zlar — ulardan tashqari so'z qolsa,
   xabarda YANGI savol bor ("qisqa qilib ayt: aliment qancha?"). */
const FILLER = /^(qisqa\w*|lo\w*nda|batafsil\w*|toliq\w*|keng\w*|chuqur\w*|oddiy\w*|sodda\w*|tushun\w*|boshqa\w*|javob\w*|ber\w*|yoz\w*|ayt\w*|qil\w*|gap\w*|jumla\w*|ikki|bir|bor|marta|yana|iltimos|menga|faqat|qadam\w*|tilda|til|soz\w*|ozbek\w*|kerak|kratko|кратк\w*|коротк\w*|короче|подробн\w*|развернут\w*|полност\w*|прощ\w*|понятн\w*|понял|не|ответ\w*|напиш\w*|скаж\w*|объясн\w*|пожалуйста|мне|другой|иначе|по|шаг\w*|только|в|двух|словах|без|воды|одним|предложением|словами|простыми)$/i;

/** @returns {{ style: string, rest: string, cleaned: string } | null} */
function detectStyle(msg) {
  const text = String(msg || "");
  if (text.length > 220) return null;
  const hit = STYLES.find(([, re]) => re.test(text));
  if (!hit) return null;
  const rest = words(text).filter((w) => !FILLER.test(w)).join(" ");
  // Buyruq iborasi olib tashlangan asl matn — xabarda yangi savol bo'lsa shu qidiriladi
  const cleaned = text.replace(new RegExp(hit[1].source, "gi"), " ").replace(/\s+/g, " ").trim();
  return { style: hit[0], rest, cleaned };
}

const TXT = {
  uz: { basis: "Asos", law: "Qonunda", step: "Birinchi qadam", todo: "Nima qilish kerak", simple: "Oddiy qilib aytganda", more: "_Batafsil javob kerak bo'lsa — «batafsil» deb yozing._", points: "Asosiy fikrlar" },
  ru: { basis: "Основание", law: "В законе", step: "Первый шаг", todo: "Что делать", simple: "Простыми словами", more: "_Нужен подробный ответ — напишите «подробнее»._", points: "Главное" },
};

const strip = (s) => s.replace(/\*\*/g, "").replace(/^_|_$/g, "").trim();
const sentences = (s, n) => (s.match(/[^.!?…]+[.!?…]+|[^.!?…]+$/g) || [s]).slice(0, n).map((x) => x.trim()).join(" ");
const clip = (s, max) => (s.length > max ? `${s.slice(0, max).replace(/\s+\S*$/, "")}…` : s);

/** To'liq javobni qismlarga ajratadi (compose*.js formatlari). */
function parseAnswer(answer) {
  const lines = String(answer || "").split("\n");
  const out = { title: "", summary: [], points: [], steps: [], laws: [] };
  let mode = "summary";
  let law = null;
  lines.forEach((raw, i) => {
    const line = raw.trim();
    if (!line || line === "…" || /^📖/.test(line) || /^_(Javob|Ответ|Mavzu|Тема)/.test(line)) return;
    if (i === 0 && /^\*\*.+\*\*$/.test(line)) return void (out.title = strip(line));
    const lawHead = /^\*\*\d+\.\s+(.+)\*\*$/.exec(line);
    if (lawHead) {
      law = { name: lawHead[1].split(" — ")[0].trim(), text: "" };
      out.laws.push(law);
      return void (mode = "law");
    }
    if (/^\*\*(Nima qilish|Что делать)/i.test(line)) return void (mode = "steps");
    if (/^\*\*(Asosiy fikr|Главное|Основн)/i.test(line)) return void (mode = "points");
    if (/^\*\*(Qonunchilikda|Что говорит)/i.test(line)) return void (mode = "law");
    if (/^\*\*(Misol|Пример)/i.test(line) || /^⚠️/.test(line)) return void (mode = "skip");
    if (mode === "summary" && !/^\*\*/.test(line)) out.summary.push(strip(line));
    else if (mode === "steps" && /^\d+\.\s/.test(line)) out.steps.push(line.replace(/^\d+\.\s*/, ""));
    else if (mode === "points" && /^[•\-]/.test(line)) out.points.push(line.replace(/^[•\-]\s*/, ""));
    else if (mode === "law" && law) {
      if (!law.text) law.text = line;
      law.full = `${law.full || ""} ${line}`; // butun iqtibos (docQA dalil sifatida ishlatadi)
    }
  });
  return out;
}

function basisLine(p, t) {
  return p.laws.length ? `**${t.basis}:** ${p.laws.slice(0, 3).map((l) => l.name).join("; ")}.` : "";
}

function toShort(p, t) {
  const lead = p.summary.length ? sentences(p.summary.join(" "), 2) : p.points[0] || "";
  const quote = p.laws[0]?.text ? `**${t.law}** (${p.laws[0].name}): «${clip(sentences(p.laws[0].text, 1), 260)}»` : "";
  const step = p.steps[0] ? `**${t.step}:** ${p.steps[0]}` : "";
  return [p.title && `**${p.title}**`, clip(lead, 380), quote, step, basisLine(p, t), t.more].filter(Boolean).join("\n\n");
}

/* "Yana qisqaroq" — eng ixcham shakl: sarlavha + qonundagi asosiy jumla
   (bo'lmasa xulosaning birinchi gapi) + bitta asos. */
function toTiny(p, t) {
  const core = p.laws[0]?.text
    ? `«${clip(sentences(p.laws[0].text, 1), 200)}» — ${p.laws[0].name}.`
    : clip(sentences(p.summary.join(" ") || p.points[0] || "", 1), 220);
  return [p.title && `**${p.title}**`, core].filter(Boolean).join("\n\n");
}

/* "Qaysi moddaga asoslanding?" — javob tayangan moddalar va ularning
   birinchi jumlasi (asos so'ralgan, xulosa emas). */
function toLaws(p, t) {
  if (!p.laws.length) return toShort(p, t);
  const list = p.laws.map((l, i) => `${i + 1}. **${l.name}** — «${clip(sentences(l.text, 1), 220)}»`);
  return [`**${p.title ? `${p.title} — ` : ""}${t.basis}:**`, list.join("\n\n")].join("\n\n");
}

function toSimple(p, t) {
  const body = p.summary.slice(0, 3).join("\n\n");
  const pts = p.points.length ? `**${t.points}:**\n${p.points.map((x) => `• ${x}`).join("\n")}` : "";
  const steps = p.steps.length ? `**${t.todo}:**\n${p.steps.map((s, i) => `${i + 1}. ${s}`).join("\n")}` : "";
  return [`**${t.simple}${p.title ? ` — ${p.title}` : ""}**`, body, pts, steps, basisLine(p, t)].filter(Boolean).join("\n\n");
}

function toSteps(p, t) {
  if (!p.steps.length) return toShort(p, t);
  return [`**${p.title ? `${p.title} — ` : ""}${t.todo}:**`, p.steps.map((s, i) => `${i + 1}. ${s}`).join("\n"), basisLine(p, t)].filter(Boolean).join("\n\n");
}

/**
 * To'liq javobni so'ralgan shaklga keltiradi. Ajratib bo'lmasa (masalan
 * "topilmadi" javobi) — asl javob o'zgarmay qaytadi.
 */
function applyStyle(answer, style, lang = "uz") {
  const t = TXT[lang] || TXT.uz;
  const p = parseAnswer(answer);
  if (!p.summary.length && !p.laws.length && !p.points.length) return answer;
  if (style === "short") return toShort(p, t);
  if (style === "tiny") return toTiny(p, t);
  if (style === "laws") return toLaws(p, t);
  if (style === "simple") return toSimple(p, t);
  if (style === "steps") return toSteps(p, t);
  return answer;
}

/** Ikki javob amalda bir xilmi (bo'sh joy va belgilar farqi hisobga olinmaydi). */
const sameAnswer = (a, b) => !!a && !!b && a.replace(/\s+/g, " ").trim() === b.replace(/\s+/g, " ").trim();

module.exports = { detectStyle, applyStyle, sameAnswer, parseAnswer };
