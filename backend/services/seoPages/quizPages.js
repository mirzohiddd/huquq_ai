"use strict";
/**
 * OCHIQ TEST SAHIFALARI — /testlar va /test/:slug (2026-10-14).
 *
 * Har bir testning bir nechta NAMUNAVIY savoli javobi va izohi bilan
 * ochiq ko'rsatiladi (Google "Practice problems" — `Quiz` sxemasi).
 * Qolgan savollar va natijani saqlash — ro'yxatdan o'tgan foydalanuvchiga.
 * Javob `<details>` ichida: JavaScript'siz ishlaydi (sahifalarda CSP
 * `script-src 'none'`).
 */
const { page, esc, crumbs } = require("./layout");
const { SITE_URL, path } = require("./meta");
const { ORG_ID } = require("./entity");
const { breadcrumb } = require("./listPages");
const { slugOf } = require("./learnData");

const SAMPLE = 5;
const REGISTER = `${SITE_URL}/register`;
const quizUrl = (q) => path.test(slugOf(q));
const LETTERS = ["A", "B", "C", "D", "E", "F"];

/* ── /testlar ── */
function testsIndexPage({ quizzes }) {
  const total = quizzes.reduce((n, q) => n + (q.questionCount || 0), 0);
  const body = `<section class="hero"><div class="wrap">
      ${crumbs([{ name: "Bosh sahifa", href: `${SITE_URL}/` }, { name: "Testlar" }], "uz")}
      <span class="eyebrow">Bilimni sinash</span>
      <h1>Huquq bo'yicha testlar — javoblari va izohlari bilan</h1>
      <p class="lede">${quizzes.length} ta mavzu bo'yicha ${total} ta test savoli: mehnat, oila, meros, iste'molchi huquqlari, jinoyat, Konstitutsiya va boshqalar. Har bir savolning to'g'ri javobi va qisqa izohi bor.</p>
      <div class="meta">
        <span class="chip">${quizzes.length} ta test</span>
        <span class="chip">${total} ta savol</span>
        <a class="chip" href="${esc(path.lessons())}">Huquq darslari</a>
      </div>
    </div></section>
    <main><div class="wrap">
      <div class="grid">${quizzes.map((q) => `<a class="lawCard" href="${esc(quizUrl(q))}">
        <span class="code">${q.questionCount} ta savol</span>
        <h3>${esc(q.title)}</h3>
        ${q.desc ? `<span>${esc(q.desc)}</span>` : ""}
      </a>`).join("")}</div>
      <div class="ctaBox">
        <h2>Testlarni to'liq yeching</h2>
        <p>Ro'yxatdan o'ting — natijangiz saqlanadi va xatolaringiz bo'yicha AI tushuntirish beradi.</p>
        <a href="${REGISTER}">Bepul boshlash</a>
      </div>
    </div></main>`;

  return page({
    lang: "uz",
    altLangs: false,
    ogType: "website",
    title: "Huquq bo'yicha testlar — onlayn huquqiy test javoblari bilan",
    description: `O'zbekiston qonunchiligi bo'yicha ${total} ta onlayn test savoli: mehnat, oila, meros, iste'molchi, jinoyat huquqi va Konstitutsiya. To'g'ri javoblar va izohlar bilan.`,
    canonical: path.tests(),
    body,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "HuquqTech huquqiy testlari",
        numberOfItems: quizzes.length,
        itemListElement: quizzes.map((q, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}${quizUrl(q)}`,
          name: q.title,
        })),
      },
      breadcrumb([
        { name: "Bosh sahifa", url: `${SITE_URL}/` },
        { name: "Testlar", url: `${SITE_URL}${path.tests()}` },
      ]),
    ],
  });
}

function questionHtml(q, i) {
  const right = q.options[q.correct];
  return `<article class="card qz" id="savol-${i + 1}">
      <h2>${i + 1}. ${esc(q.q)}</h2>
      <ol class="opts">${q.options.map((o, k) => `<li><b>${LETTERS[k] || k + 1}</b> ${esc(o)}</li>`).join("")}</ol>
      <details><summary>To'g'ri javobni ko'rish</summary>
        <p><b>${LETTERS[q.correct] || q.correct + 1}) ${esc(right)}</b></p>
        ${q.explain ? `<p>${esc(q.explain)}</p>` : ""}
      </details>
    </article>`;
}

/* ── /test/:slug ── */
function testPage({ quiz, others }) {
  const qs = (quiz.questions || []).filter((q) => q.options?.[q.correct] != null);
  const sample = qs.slice(0, SAMPLE);
  const url = quizUrl(quiz);
  const desc = quiz.desc || `${quiz.title} bo'yicha ${qs.length} ta test savoli — to'g'ri javoblar va izohlar bilan.`;

  const body = `<section class="hero"><div class="wrap">
      ${crumbs([{ name: "Bosh sahifa", href: `${SITE_URL}/` }, { name: "Testlar", href: path.tests() }, { name: quiz.title }], "uz")}
      <span class="eyebrow">Huquqiy test</span>
      <h1>${esc(quiz.title)} — test savollari va javoblari</h1>
      <p class="lede">${esc(desc)}</p>
      <div class="meta">
        <span class="chip">${qs.length} ta savol</span>
        <span class="chip">${sample.length} ta namunaviy savol ochiq</span>
      </div>
    </div></section>
    <main><div class="wrap">
      ${sample.map(questionHtml).join("")}
      ${qs.length > sample.length ? `<div class="ctaBox">
        <h2>Qolgan ${qs.length - sample.length} ta savolni yeching</h2>
        <p>To'liq test, natija hisobi va xatolar bo'yicha AI izohi ro'yxatdan o'tgan foydalanuvchilar uchun.</p>
        <a href="${REGISTER}">Testni boshlash</a>
      </div>` : ""}
      ${others.length ? `<section class="card"><h2>Boshqa testlar</h2><ul class="qaList">${others.map((o) => `<li><a href="${esc(quizUrl(o))}">${esc(o.title)}</a></li>`).join("")}</ul></section>` : ""}
      <p class="note">Savollar O'zbekiston Respublikasining amaldagi qonunchiligi asosida tuzilgan. Aniq muddat va summalarni <a href="${esc(path.laws())}">qonun matnidan</a> tekshiring.</p>
    </div></main>`;

  return page({
    lang: "uz",
    altLangs: false,
    title: `${quiz.title} — huquqiy test`,
    description: desc.slice(0, 300),
    canonical: url,
    body,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Quiz",
        "@id": `${SITE_URL}${url}#quiz`,
        name: quiz.title,
        description: desc,
        url: `${SITE_URL}${url}`,
        inLanguage: "uz",
        about: { "@type": "Thing", name: "O'zbekiston Respublikasi qonunchiligi" },
        educationalAlignment: {
          "@type": "AlignmentObject",
          alignmentType: "educationalSubject",
          targetName: "Huquq",
        },
        provider: { "@id": ORG_ID },
        hasPart: sample.map((q) => ({
          "@type": "Question",
          eduQuestionType: "Multiple choice",
          learningResourceType: "Practice problem",
          name: q.q,
          text: q.q,
          acceptedAnswer: { "@type": "Answer", text: q.options[q.correct], ...(q.explain ? { answerExplanation: { "@type": "Comment", text: q.explain } } : {}) },
          suggestedAnswer: q.options.filter((_, k) => k !== q.correct).map((o) => ({ "@type": "Answer", text: o })),
        })),
      },
      breadcrumb([
        { name: "Bosh sahifa", url: `${SITE_URL}/` },
        { name: "Testlar", url: `${SITE_URL}${path.tests()}` },
        { name: quiz.title, url: `${SITE_URL}${url}` },
      ]),
    ],
  });
}

module.exports = { testsIndexPage, testPage, quizUrl };
