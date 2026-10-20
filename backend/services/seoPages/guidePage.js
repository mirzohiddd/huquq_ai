"use strict";
/**
 * /huquqni-organish — "Huquqni onlayn o'rganish" qo'llanmasi (pillar sahifa).
 *
 * ⚠️ SERVER TOMONDA chiziladi — AI botlari JavaScript'ni ishga
 * tushirmaydi. Sahifa boshidagi `.answer` bloki savolga BIRINCHI jumlada
 * to'g'ridan-to'g'ri javob beradi: AI tizimlari iqtibos uchun aynan
 * shunday "javob-birinchi" paragrafni tanlaydi.
 *
 * Darslar/testlar/kodekslar soni BAZADAN (jonli) — qattiq yozilsa eskiradi.
 */
const { page, esc, crumbs } = require("./layout");
const { SITE_URL, SITE_NAME, T } = require("./meta");
const { ORG_ID } = require("./entity");
const { breadcrumb } = require("./listPages");
const { GUIDE } = require("./guideText");

const PATH = "/huquqni-organish";
const fmt = (lang, n) => new Intl.NumberFormat(lang === "ru" ? "ru-RU" : "uz-UZ").format(n);

function statsLine(lang, s) {
  return lang === "ru"
    ? `${fmt(lang, s.lessons)} уроков · ${fmt(lang, s.quizzes)} тестов · ${fmt(lang, s.laws)} кодексов и законов · ${fmt(lang, s.articles)} статей`
    : `${fmt(lang, s.lessons)} ta dars · ${fmt(lang, s.quizzes)} ta test · ${fmt(lang, s.laws)} ta kodeks va qonun · ${fmt(lang, s.articles)} ta modda`;
}

function guidePage({ lang, stats, modules }) {
  const t = T[lang] || T.uz;
  const g = GUIDE[lang] || GUIDE.uz;
  const url = `${SITE_URL}${PATH}`;

  const steps = g.steps
    .map(([h, p, href]) => `<li><b>${esc(h)}</b> — ${esc(p)} <a href="${esc(href)}">→</a></li>`)
    .join("");
  const mods = modules
    .map((m) => `<a class="lawCard" href="/darslar#${esc(m.key)}"><h3>${esc(m.name)}</h3><span>${fmt(lang, m.count)} ${esc(g.lessonsUnit)}</span></a>`)
    .join("");
  const sources = g.sources.map(([h, p]) => `<h3>${esc(h)}</h3><p>${esc(p)}</p>`).join("");
  const list = (arr) => `<ul>${arr.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;
  const faq = g.faq
    .map(([q, a]) => `<details><summary><b>${esc(q)}</b></summary><p>${esc(a)}</p></details>`)
    .join("");

  const body = `<section class="hero"><div class="wrap">
      ${crumbs([{ name: t.home, href: `${SITE_URL}/` }, { name: g.crumb }], lang)}
      <span class="eyebrow">${esc(SITE_NAME)}</span>
      <h1>${esc(g.title)}</h1>
      <p class="lede answer">${esc(g.answer)}</p>
      <div class="meta"><span class="chip">${esc(statsLine(lang, stats))}</span></div>
    </div></section>
    <main><div class="wrap">
      <section class="card"><h2>${esc(g.pathH)}</h2><p class="sub">${esc(g.pathIntro)}</p><ol>${steps}</ol></section>
      <section class="card"><h2>${esc(g.modulesH)}</h2><p class="sub">${esc(g.modulesSub)}</p><div class="grid">${mods}</div></section>
      <section class="card"><h2>${esc(g.sourcesH)}</h2>${sources}</section>
      <section class="card"><h2>${esc(g.whoH)}</h2>${list(g.who)}</section>
      <section class="card"><h2>${esc(g.freeH)}</h2>${list(g.free)}</section>
      <section class="card"><h2>${esc(g.faqH)}</h2>${faq}</section>
      <div class="ctaBox"><h2>${esc(g.ctaH)}</h2><p>${esc(g.ctaP)}</p><a href="${SITE_URL}/register">${esc(g.ctaBtn)}</a></div>
    </div></main>`;

  return page({
    lang,
    title: g.title,
    description: g.desc,
    canonical: PATH,
    mdPath: `${PATH}.md`,
    body,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": ["Article", "LearningResource"],
        "@id": `${url}#guide`,
        headline: g.title,
        description: g.desc,
        abstract: g.answer,
        inLanguage: lang,
        educationalLevel: "Beginner",
        learningResourceType: "Guide",
        teaches: g.steps.map((s) => s[0]),
        audience: { "@type": "EducationalAudience", educationalRole: "student" },
        about: { "@type": "Thing", name: lang === "ru" ? "Право Узбекистана" : "O'zbekiston huquqi" },
        author: { "@id": ORG_ID },
        publisher: { "@id": ORG_ID },
        dateModified: new Date().toISOString().slice(0, 10),
        speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".answer"] },
      },
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: g.pathH,
        step: g.steps.map(([h, p, href], i) => ({
          "@type": "HowToStep", position: i + 1, name: h, text: p, url: `${SITE_URL}${href}`,
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: g.faq.map(([q, a]) => ({
          "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
      breadcrumb([
        { name: t.home, url: `${SITE_URL}/` },
        { name: g.crumb, url },
      ]),
    ],
  });
}

/** LLM uchun toza Markdown nusxasi. */
function guideMd({ lang, stats, modules }) {
  const g = GUIDE[lang] || GUIDE.uz;
  const out = [
    `# ${g.title}`, "", `> ${g.answer}`, "", statsLine(lang, stats), "",
    `## ${g.pathH}`, "",
    ...g.steps.map(([h, p, href], i) => `${i + 1}. **${h}** — ${p} (${SITE_URL}${href})`),
    "", `## ${g.modulesH}`, "",
    ...modules.map((m) => `- [${m.name}](${SITE_URL}/darslar#${m.key}) — ${m.count} ${g.lessonsUnit}`),
    "", `## ${g.sourcesH}`, "",
    ...g.sources.map(([h, p]) => `- **${h}** — ${p}`),
    "", `## ${g.whoH}`, "", ...g.who.map((x) => `- ${x}`),
    "", `## ${g.freeH}`, "", ...g.free.map((x) => `- ${x}`),
    "", `## ${g.faqH}`, "",
    ...g.faq.flatMap(([q, a]) => [`### ${q}`, "", a, ""]),
    `Manba: ${SITE_URL}${PATH}`,
  ];
  return out.join("\n");
}

module.exports = { guidePage, guideMd, GUIDE_PATH: PATH };
