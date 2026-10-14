"use strict";
/**
 * OCHIQ DARS SAHIFALARI — /darslar va /dars/:slug (2026-10-14).
 *
 * Kontent faqat o'zbekcha (darslar o'zbek tilida yozilgan), shuning
 * uchun `altLangs: false` — ruscha hreflang e'lon qilinmaydi.
 * Sxema: `Course` (Google "Course" natijasi) + BreadcrumbList.
 */
const { page, esc, crumbs } = require("./layout");
const { SITE_URL, path } = require("./meta");
const { ORG_ID } = require("./entity");
const { breadcrumb } = require("./listPages");
const { slugOf, MODULES, moduleOf, readMinutes } = require("./learnData");

/** Ochiq sahifada TO'LIQ ko'rsatiladigan mavzular soni (qolgani — tarif). */
const FREE_TOPICS = 2;
const LEVEL = { basic: "Boshlang'ich", mid: "O'rta", advanced: "Chuqur" };
const LEVEL_SCHEMA = { basic: "Beginner", mid: "Intermediate", advanced: "Advanced" };
const REGISTER = `${SITE_URL}/register`;

const lessonUrl = (l) => path.lesson(slugOf(l));
const paras = (s) =>
  String(s || "").split(/\n{2,}|\n/).map((p) => p.trim()).filter(Boolean)
    .map((p) => `<p>${esc(p)}</p>`).join("");

/* ── /darslar ── */
function lessonsIndexPage({ lessons }) {
  const groups = MODULES.map((m) => ({
    m,
    items: lessons.filter((l) => moduleOf(l.category).key === m.key),
  })).filter((g) => g.items.length);
  const topics = lessons.reduce((n, l) => n + (l.sectionCount || 0), 0);

  const nav = `<nav class="areaNav">${groups
    .map((g) => `<a href="#${esc(g.m.key || "boshqa")}">${esc(g.m.uz)} · ${g.items.length}</a>`)
    .join("")}</nav>`;
  const blocks = groups.map((g) => `<section class="chapter" id="${esc(g.m.key || "boshqa")}">
      <h2>${esc(g.m.uz)}</h2>
      <div class="grid">${g.items.map((l) => `<a class="lawCard" href="${esc(lessonUrl(l))}">
        <span class="code">${esc(LEVEL[l.level] || LEVEL.basic)}</span>
        <h3>${esc(l.title)}</h3>
        <span>${l.sectionCount} ta mavzu</span>
      </a>`).join("")}</div>
    </section>`).join("");

  const body = `<section class="hero"><div class="wrap">
      ${crumbs([{ name: "Bosh sahifa", href: `${SITE_URL}/` }, { name: "Darslar" }], "uz")}
      <span class="eyebrow">Huquqiy ta'lim</span>
      <h1>Huquq darsliklari — O'zbekiston qonunchiligi bo'yicha bepul darslar</h1>
      <p class="lede">${lessons.length} ta dars va ${topics} ta mavzu: mehnat, oila, meros, uy-joy, iste'molchi, soliq, jinoyat va sud huquqi. Har bir mavzu sodda tilda, hayotiy misollar bilan va amaldagi kodeks moddasiga tayangan.</p>
      <div class="meta">
        <span class="chip">${lessons.length} ta dars</span>
        <span class="chip">${topics} ta mavzu</span>
        <a class="chip" href="${esc(path.tests())}">Huquqiy testlar</a>
        <a class="chip" href="${esc(path.laws())}">Qonunlar</a>
      </div>
    </div></section>
    <main><div class="wrap">${nav}${blocks}
      <div class="ctaBox">
        <h2>Darslarni to'liq o'qing va bilimingizni sinang</h2>
        <p>Ro'yxatdan o'ting — progress saqlanadi, har dars oxirida test va AI yordamchi bor.</p>
        <a href="${REGISTER}">Bepul ro'yxatdan o'tish</a>
      </div>
    </div></main>`;

  return page({
    lang: "uz",
    altLangs: false,
    ogType: "website",
    title: "Huquq darsliklari va darslar — onlayn huquqiy ta'lim",
    description: `O'zbekiston qonunchiligi bo'yicha ${lessons.length} ta huquq darsi va ${topics} ta mavzu: mehnat, oila, meros, uy-joy, soliq, jinoyat huquqi. Sodda tilda, misollar va qonun moddalari bilan.`,
    canonical: path.lessons(),
    body,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "HuquqTech huquq darslari",
        numberOfItems: lessons.length,
        itemListElement: lessons.map((l, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}${lessonUrl(l)}`,
          name: l.title,
        })),
      },
      breadcrumb([
        { name: "Bosh sahifa", url: `${SITE_URL}/` },
        { name: "Darslar", url: `${SITE_URL}${path.lessons()}` },
      ]),
    ],
  });
}

function topicHtml(sec, i) {
  const refs = (sec.lawRefs || []).filter((r) => r.code && r.article);
  return `<article class="card" id="mavzu-${i + 1}">
      <h2>${i + 1}. ${esc(sec.heading)}</h2>
      <div class="artText">${paras(sec.text)}</div>
      ${sec.example ? `<div class="answerBox"><span class="lbl">Hayotdan misol</span><p>${esc(sec.example)}</p></div>` : ""}
      ${sec.keyPoints?.length ? `<h3>Asosiy fikrlar</h3><ul>${sec.keyPoints.map((k) => `<li>${esc(k)}</li>`).join("")}</ul>` : ""}
      ${sec.warning ? `<p class="note">${esc(sec.warning)}</p>` : ""}
      ${refs.length ? `<p class="sub">Qonun asosi: ${refs.map((r) => `<a href="${esc(path.article(r.code, r.article))}">${esc(r.code)} ${esc(r.article)}-modda</a>`).join(", ")}</p>` : ""}
    </article>`;
}

/* ── /dars/:slug ── */
function lessonPage({ lesson, related }) {
  const mod = moduleOf(lesson.category);
  const secs = lesson.sections || [];
  const chars = secs.reduce((n, s) => n + (s.text || "").length, 0);
  const url = lessonUrl(lesson);
  const desc = lesson.desc || `${lesson.title} — ${secs.length} ta mavzu, sodda tilda va qonun moddalari bilan.`;

  const body = `<section class="hero"><div class="wrap">
      ${crumbs([{ name: "Bosh sahifa", href: `${SITE_URL}/` }, { name: "Darslar", href: path.lessons() }, { name: mod.uz, href: `${path.lessons()}#${mod.key || "boshqa"}` }, { name: lesson.title }], "uz")}
      <span class="eyebrow">${esc(mod.uz)}</span>
      <h1>${esc(lesson.title)}</h1>
      <p class="lede">${esc(desc)}</p>
      <div class="meta">
        <span class="chip">${secs.length} ta mavzu</span>
        <span class="chip">${readMinutes(chars)} daqiqa o'qish</span>
        <span class="chip">${esc(LEVEL[lesson.level] || LEVEL.basic)} daraja</span>
      </div>
    </div></section>
    <main><div class="wrap">
      ${lesson.objectives?.length ? `<section class="card"><h2>Ushbu darsdan keyin siz</h2><ul>${lesson.objectives.map((o) => `<li>${esc(o)}</li>`).join("")}</ul></section>` : ""}
      <section class="card"><h2>Dars mundarijasi</h2><ol class="toc">${secs
        .map((s, i) => (i < FREE_TOPICS ? `<li><a href="#mavzu-${i + 1}">${esc(s.heading)}</a></li>` : `<li>${esc(s.heading)}</li>`))
        .join("")}</ol></section>
      ${secs.slice(0, FREE_TOPICS).map(topicHtml).join("")}
      ${secs.length > FREE_TOPICS ? `<div class="ctaBox">
        <h2>Qolgan ${secs.length - FREE_TOPICS} ta mavzuni o'qing</h2>
        <p>Darsning to'liq matni, yakuniy test va AI tushuntirishlari ro'yxatdan o'tgan foydalanuvchilar uchun.</p>
        <a href="${REGISTER}">Darsni davom ettirish</a>
      </div>` : ""}
      ${related.length ? `<section class="card"><h2>Shu moduldagi boshqa darslar</h2><ul class="qaList">${related.map((l) => `<li><a href="${esc(lessonUrl(l))}">${esc(l.title)}</a></li>`).join("")}</ul></section>` : ""}
      <p class="note">Darslar O'zbekiston Respublikasining amaldagi qonunchiligiga asoslangan; moddalar matni lex.uz rasmiy manbasidan olinadi. Bu umumiy huquqiy ta'lim — aniq holat bo'yicha malakali mutaxassisga murojaat qiling.</p>
    </div></main>`;

  return page({
    lang: "uz",
    altLangs: false,
    title: `${lesson.title} — huquq darsi`,
    description: desc.slice(0, 300),
    canonical: url,
    body,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Course",
        "@id": `${SITE_URL}${url}#course`,
        name: lesson.title,
        description: desc,
        url: `${SITE_URL}${url}`,
        inLanguage: "uz",
        provider: { "@id": ORG_ID },
        publisher: { "@id": ORG_ID },
        about: mod.uz,
        educationalLevel: LEVEL_SCHEMA[lesson.level] || "Beginner",
        teaches: lesson.objectives?.length ? lesson.objectives : undefined,
        isAccessibleForFree: false,
        syllabusSections: secs.slice(0, 50).map((s) => ({ "@type": "Syllabus", name: s.heading })),
        dateModified: lesson.updatedAt,
        offers: { "@type": "Offer", category: "Partially Free", url: `${SITE_URL}/#pricing` },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "Online",
          courseWorkload: `PT${readMinutes(chars)}M`,
          inLanguage: "uz",
        },
      },
      breadcrumb([
        { name: "Bosh sahifa", url: `${SITE_URL}/` },
        { name: "Darslar", url: `${SITE_URL}${path.lessons()}` },
        { name: lesson.title, url: `${SITE_URL}${url}` },
      ]),
    ],
  });
}

module.exports = { lessonsIndexPage, lessonPage, lessonUrl };
