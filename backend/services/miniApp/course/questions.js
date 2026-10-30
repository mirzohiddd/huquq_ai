"use strict";
/**
 * KURS SAVOLLARI — saytdagi dars mavzularidan avtomatik va saytdagi
 * testlardan (qo'lda yozilgan) olinadi.
 *
 * ⚠️ AI ISHLATILMAYDI va raqam/modda TO'QILMAYDI: har bir savolning to'g'ri
 * javobi mavzuning O'Z matnidan olinadi (misol → mavzu, asosiy xulosa,
 * ogohlantirish). Shu sabab to'g'ri javob doim haqiqiy. Chalg'ituvchi
 * variantlar faqat MAZMUNAN UZOQ mavzulardan tanlanadi — aks holda bir-biriga
 * yaqin ikki mavzu (umumiy va batafsil dars) ikkita "to'g'ri" javob berardi.
 */
const WORD = /[\p{L}ʻʼ'’]{5,}/gu;
const STOP = new Set(["qanday", "bo'lsa", "bo'ladi", "kerak", "mumkin", "uchun", "bilan", "hamda", "yoki", "agar", "lekin", "shuning", "barcha", "boshqa", "qilish", "qiladi", "huquqi", "huquqlari"]);
const stem = (w) => w.toLowerCase().replace(/[ʻʼ’]/g, "'").slice(0, 6);
const tokensOf = (s) => new Set((String(s).match(WORD) || []).map(stem).filter((w) => !STOP.has(w)));
const overlap = (a, b) => {
  let n = 0;
  for (const w of a) if (b.has(w)) n++;
  return n / Math.max(1, Math.min(a.size, b.size));
};

function seeded(seed) {
  let h = 2166136261;
  for (const c of String(seed)) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => ((h = Math.imul(h ^ (h >>> 13), 3266489909)) >>> 0) / 4294967296;
}

/** Hovuzdan shartga mos `n` ta element (seed bilan barqaror). */
function pickFrom(pool, n, seed, ok) {
  const r = seeded(seed);
  const out = [];
  const start = Math.floor(r() * pool.length);
  for (let i = 0; i < pool.length && out.length < n; i++) {
    const x = pool[(start + i * 7919) % pool.length];
    if (x && ok(x) && !out.includes(x)) out.push(x);
  }
  return out;
}

const short = (s, n = 180) => (s.length > n ? `${s.slice(0, n).replace(/\s+\S*$/, "")}…` : s);
const far = (sec) => (o) => o.uid !== sec.uid && !o.generic && o.heading !== sec.heading && overlap(o.tok, sec.tok) < 0.12;

/** Bitta mavzu kartasidan bitta savol. `kind` — "case" | "point" | "warn". */
function fromSection(sec, kind, pools) {
  const kp = sec.keyPoints[0] || "";
  if (kind === "case" && sec.example && !sec.generic) {
    const wrong = pickFrom(pools.course, 3, `c:${sec.uid}`, far(sec));
    if (wrong.length >= 2) {
      return {
        kind, q: "Bu holat qaysi mavzuga oid?", text: sec.example,
        options: [
          { t: sec.heading, ok: true, why: `To'g'ri. ${kp}` },
          ...wrong.map((o) => ({ t: o.heading, ok: false, why: `«${o.heading}» — boshqa masala. Bu holatning mohiyati: ${kp}` })),
        ],
      };
    }
  }
  if (kind === "warn" && sec.warning) {
    const wrong = pickFrom(pools.other, 3, `w:${sec.uid}`, (o) => o.warning && far(sec)(o));
    if (wrong.length >= 2) {
      return {
        kind, q: `«${sec.heading}» mavzusida qaysi xatodan saqlanish kerak?`,
        options: [
          { t: short(sec.warning), ok: true, why: `To'g'ri. ${kp}` },
          ...wrong.map((o) => ({ t: short(o.warning), ok: false, why: `Bu ogohlantirish boshqa mavzudan — «${o.heading}».` })),
        ],
      };
    }
  }
  const right = sec.keyPoints[Math.floor(seeded(`p:${sec.uid}`)() * sec.keyPoints.length)] || kp;
  const wrong = pickFrom(pools.other, 3, `p:${sec.uid}`, (o) => o.keyPoints.length && far(sec)(o));
  if (!right || wrong.length < 2) return null;
  return {
    kind: "point", q: `«${sec.heading}» mavzusiga qaysi xulosa tegishli?`,
    options: [
      { t: right, ok: true, why: `To'g'ri — bu mavzuning asosiy xulosasi.${sec.warning ? ` Diqqat: ${short(sec.warning, 140)}` : ""}` },
      ...wrong.map((o) => ({ t: o.keyPoints[0], ok: false, why: `Bu fikr boshqa mavzudan — «${o.heading}».` })),
    ],
  };
}

/** Saytdagi test savoli → mini savol (izoh har bir variantga). */
function fromQuiz(item) {
  const opts = item.options || [];
  const right = opts[item.correct];
  if (opts.length < 3 || right === undefined) return null;
  const why = item.explain || "";
  return {
    kind: "test", q: item.q, text: item.situation || "",
    options: opts.map((t, i) => ({ t, ok: i === item.correct, why: i === item.correct ? `To'g'ri. ${why}` : `Noto'g'ri. To'g'ri javob — «${right}». ${why}` })),
  };
}

/** Test savolini mazmunan eng yaqin darsga biriktiradi (so'zlar kesishmasi). */
function bestLesson(item, lessons) {
  const tok = tokensOf(`${item.q} ${item.options?.[item.correct] || ""} ${item.explain || ""}`);
  let best = null;
  let score = -1;
  for (const l of lessons) {
    const s = overlap(tok, l.tok);
    if (s > score) [best, score] = [l, s];
  }
  return best;
}

module.exports = { tokensOf, fromSection, fromQuiz, bestLesson, seeded };
