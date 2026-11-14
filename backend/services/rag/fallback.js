"use strict";
/**
 * FOYDALI ZAXIRA JAVOB — "topilmadi" o'rniga (2026-11-14).
 *
 * Foydalanuvchi talabi: AI hech qachon faqat "mos modda topilmadi" deb
 * tashlab qo'ymasin. Bu javob LLM umuman ishlamagan (kvota, tarmoq) VA
 * lokal AI ham javob topmagan holatda beriladi — AI'siz, deterministik:
 *   1. modda raqami bir nechta qonunda bor → qaysi biri ekanini so'raydi;
 *   2. aniq modda topilgan → o'sha modda matni (iqtibos);
 *   3. yaqin moddalar bor → ularni ko'rsatadi + aniqlashtiruvchi savol;
 *   4. hech narsa yo'q → aniq aniqlashtiruvchi savol.
 * ⚠️ Huquqiy fakt TO'QILMAYDI: faqat bazadagi modda matni iqtibos qilinadi.
 */
const T = {
  uz: {
    amb: (n) => `**${n}-modda** bir nechta qonun hujjatida bor. Qaysi biri kerakligini yozing:`,
    ambHint: (n) => `Masalan: «Ma'muriy javobgarlik kodeksi ${n}-modda» yoki «MJK ${n}-modda».`,
    art: "modda",
    understood: "Savolingizni shunday tushundim:",
    near: "Bazadan shu mavzuga eng yaqin moddalar:",
    full: "To'liq matn",
    ask: "Aniq javob berishim uchun quyidagilarni yozing:",
    note: "_Bu javob faqat bazadagi rasmiy qonun matnlaridan olindi. Yakuniy qaror uchun yurist bilan maslahatlashing._",
    generic: ["Voqea qachon va qayerda bo'ldi?", "Qaysi organ yoki shaxs bilan bog'liq (ish beruvchi, YHXX, sud, sotuvchi…)?", "Qo'lingizda qanday hujjat bor (shartnoma, bayonnoma, qaror, chek)?"],
  },
  ru: {
    amb: (n) => `**Статья ${n}** есть в нескольких законах. Уточните, какая нужна:`,
    ambHint: (n) => `Например: «КоАО статья ${n}» или «Трудовой кодекс статья ${n}».`,
    art: "статья",
    understood: "Я понял вопрос так:",
    near: "Наиболее близкие статьи из базы:",
    full: "Полный текст",
    ask: "Чтобы ответить точно, уточните:",
    note: "_Ответ составлен только из официальных текстов законов в базе. Для окончательного решения проконсультируйтесь с юристом._",
    generic: ["Когда и где это произошло?", "С каким органом или лицом связано (работодатель, ГАИ, суд, продавец…)?", "Какие документы у вас на руках (договор, протокол, постановление, чек)?"],
  },
};

/* Sohaga xos aniqlashtiruvchi savollar (kodeks bo'yicha) */
const ASK = {
  MJK: { uz: ["Sizga nisbatan bayonnoma tuzildimi va nusxasi berildimi?", "Qaysi qoidabuzarlik ko'rsatildi (hujjatsiz boshqarish, qoida buzish…)?", "Transport vositasi yoki hujjat olib qo'yilgan bo'lsa — bu haqda hujjat (dalolatnoma) berildimi?"], ru: ["Составлен ли на вас протокол и выдана ли копия?", "Какое нарушение указано?", "Если изъяли транспорт или документы — выдали ли об этом акт?"] },
  MK: { uz: ["Mehnat shartnomasi yozma tuzilganmi (muddatli yoki muddatsiz)?", "Ish beruvchi qanday buyruq chiqardi va sizni tanishtirdimi?", "Voqeadan beri qancha vaqt o'tdi?"], ru: ["Заключён ли письменный трудовой договор (срочный или бессрочный)?", "Какой приказ издал работодатель и ознакомили ли вас с ним?", "Сколько времени прошло с события?"] },
  OK: { uz: ["Nikoh FHDYo organida qayd etilganmi?", "Voyaga yetmagan bolalar bormi, ular kim bilan yashaydi?", "Sudga yoki FHDYo ga murojaat qilinganmi?"], ru: ["Зарегистрирован ли брак в ЗАГС?", "Есть ли несовершеннолетние дети и с кем они живут?", "Было ли обращение в суд или ЗАГС?"] },
  JK: { uz: ["Voqea qachon bo'ldi va ichki ishlar organiga ariza berildimi?", "Sizning maqomingiz qanday (jabrlanuvchi, guvoh, gumon qilinuvchi)?", "Qanday dalillar bor (guvoh, yozishma, video, tibbiy xulosa)?"], ru: ["Когда это произошло и подано ли заявление в органы внутренних дел?", "Каков ваш статус (потерпевший, свидетель, подозреваемый)?", "Какие есть доказательства?"] },
  FK2: { uz: ["Yozma shartnoma yoki tilxat bormi?", "Qancha summa/mulk haqida gap ketyapti va muddat qachon tugagan?", "Ikkinchi tomonga yozma talab yuborilganmi?"], ru: ["Есть ли письменный договор или расписка?", "О какой сумме/имуществе речь и когда истёк срок?", "Направлялась ли письменная претензия?"] },
};
ASK.FK = ASK.FK2;
ASK.JPK = ASK.JK;

const cut = (t, n) => (t.length > n ? `${t.slice(0, n).replace(/\s+\S*$/, "")}…` : t);

/**
 * @param {{ lang?: string, u?: object, docs?: object[], ambiguous?: object|null }} p
 * @returns {string} markdown javob
 */
function helpfulFallback({ lang = "uz", u = {}, docs = [], ambiguous = null }) {
  const ru = lang === "ru";
  const L = ru ? T.ru : T.uz;
  const head = (d) => (ru ? `${d.lawName}, ${L.art} ${d.articleNumber}` : `${d.lawName}, ${d.articleNumber}-${L.art}`);

  if (ambiguous && ambiguous.candidates.length) {
    const rows = ambiguous.candidates.slice(0, 16).map((c) => `• ${c.lawName}${c.title ? ` — ${c.title}` : ""}`);
    return `${L.amb(ambiguous.number)}\n\n${rows.join("\n")}\n\n${L.ambHint(ambiguous.number)}`;
  }

  const direct = docs.filter((d) => d.direct);
  if (direct.length) {
    const parts = direct.slice(0, 2).map((d) => `**${head(d)}${d.title ? ` — ${d.title}` : ""}**\n\n> ${cut(d.text, 1500)}\n\n[${L.full}](${d.sourceUrl})`);
    return `${parts.join("\n\n")}\n\n${L.note}`;
  }

  const out = [];
  if (u.via === "llm" && u.standalone) out.push(`${L.understood} _${u.standalone}_`);
  const near = docs.slice(0, 3);
  if (near.length) {
    out.push(`${L.near}\n\n${near.map((d) => `**${head(d)}${d.title ? ` — ${d.title}` : ""}**\n> ${cut(d.text, 380)} [${L.full}](${d.sourceUrl})`).join("\n\n")}`);
  }
  const code = (u.codes || []).find((c) => ASK[c]) || near.map((d) => d.lawCode).find((c) => ASK[c]);
  const qs = code ? ASK[code][ru ? "ru" : "uz"] : L.generic;
  out.push(`${L.ask}\n${qs.map((q, i) => `${i + 1}. ${q}`).join("\n")}`);
  if (near.length) out.push(L.note);
  return out.join("\n\n");
}

module.exports = { helpfulFallback };
