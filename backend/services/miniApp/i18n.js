"use strict";
/**
 * MINI APP — RUS TILI (2026-10-30).
 *
 * Dars/vaziyat mazmuni kodda faqat o'zbekcha yozilgan. Saytdagi kabi u AI
 * orqali tarjima qilinadi va umumiy `Translation` keshiga yoziladi
 * (`services/translator.js`) — kontent ikki marta yozilmaydi va matn
 * o'zgarsa eski tarjima o'z-o'zidan ishlatilmay qoladi (hash).
 *
 * `localizeJson` — `/api/mini` routerlari uchun middleware: `?lang=ru`
 * bo'lsa javobdagi barcha matnlar keshdan o'giriladi (AI KUTILMAYDI);
 * keshda yo'qlari fonda tayyorlanadi. `warmAll()` esa butun kontentni
 * oldindan tarjima qiladi — server ishga tushgandan keyin fonda.
 */
const { translateMany, translateManyCached, warmTranslate } = require("../translator");

/* Tarjima qilinmaydigan maydonlar: identifikatorlar, kalitlar, ism, token.
   ⚠️ `next` — keyingi darsning ID'si; `answer` — AI javobi allaqachon shu tilda. */
const SKIP = new Set(["id", "key", "next", "unit", "cat", "icon", "type", "status", "day", "code", "article", "token", "bot", "answer", "lang", "name", "firstName", "newBadges", "course", "kind", "tier", "exam", "source"]);
const isText = (s) => typeof s === "string" && s.length > 1 && /\p{L}/u.test(s) && !/^https?:\/\//.test(s);

/** Obyektdagi barcha tarjimaga yaroqli satrlar va ularni joyiga qo'yuvchi funksiyalar. */
function collect(node, out = []) {
  if (Array.isArray(node)) {
    node.forEach((v, i) => (isText(v) ? out.push([v, (t) => (node[i] = t)]) : collect(v, out)));
  } else if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node)) {
      if (SKIP.has(k)) continue;
      if (isText(v)) out.push([v, (t) => (node[k] = t)]);
      else collect(v, out);
    }
  }
  return out;
}

async function localize(body, lang) {
  if (lang !== "ru" || !body || typeof body !== "object") return body;
  const copy = JSON.parse(JSON.stringify(body));
  const slots = collect(copy);
  if (!slots.length) return copy;
  const { result, missing } = await translateManyCached(slots.map((s) => s[0]), "ru");
  slots.forEach(([, put], i) => put(result[i]));
  if (missing.length) warmTranslate(missing, "ru");
  return copy;
}

function localizeJson(req, res, next) {
  const lang = req.query.lang === "ru" || req.body?.lang === "ru" ? "ru" : "uz";
  // Ikkala mini router ham ulaydi — javob bir marta o'girilsin
  if (lang === "uz" || res.locals.miniLocalized) return next();
  res.locals.miniLocalized = true;
  const send = res.json.bind(res);
  res.json = (body) => {
    localize(body, lang)
      .then(send)
      .catch(() => send(body)); // tarjima xatosi javobni to'xtatmasin
    return res;
  };
  return next();
}

/** Barcha dars, vaziyat, bo'lim va nishon matnlarini oldindan tarjima qiladi. */
async function warmAll() {
  const content = require("./content");
  const stats = require("./stats");
  const texts = [];
  const add = (obj) => collect(JSON.parse(JSON.stringify(obj))).forEach(([t]) => texts.push(t));
  content.LESSONS.forEach((l) => {
    add(content.publicLesson(l));
    add({ t: l.choice.options, takeaway: l.takeaway, why: l.game.why, items: l.game.items });
  });
  content.SITUATIONS.forEach((s) => add({ v: content.publicSituation(s), o: s.steps.map((st) => st.options) }));
  add({ u: content.UNITS, c: content.SIT_CATS, b: stats.badgesOf({}), l: stats.LEVELS });
  const uniq = [...new Set(texts)];
  const { missing } = await translateManyCached(uniq, "ru");
  for (let i = 0; i < missing.length; i += 40) await translateMany(missing.slice(i, i + 40), "ru");
  return { total: uniq.length, translated: missing.length };
}

module.exports = { localize, localizeJson, warmAll };
