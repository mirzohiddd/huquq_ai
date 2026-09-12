"use strict";
/**
 * SAHIFALARNING MARKDOWN NUSXALARI (LLMO).
 *
 * ⚠️ NIMA UCHUN KERAK: HTML sahifada navigatsiya, uslub va CTA bloklari
 * bor — til modeli uchun bularning hammasi shovqin. Markdown variantida
 * faqat MA'LUMOT qoladi, ya'ni model kontentni aniqroq o'qiydi va
 * kamroq token sarflaydi. Bu llmstxt.org atrofida shakllanayotgan
 * amaliyot: har bir sahifaning `.md` ko'rinishi bo'lishi.
 *
 * HTML sahifa `<link rel="alternate" type="text/markdown">` orqali o'z
 * Markdown nusxasiga ishora qiladi (`layout.js` dagi `mdPath`), ya'ni
 * bot uni o'zi topadi.
 *
 * ⚠️ Bu yerda ham qonun matni QATTIQ YOZILMAYDI — chaqiruvchi marshrut
 * uni bazadan olib beradi.
 */
const { SITE_URL, SITE_NAME, T, path } = require("./meta");

const line = (s) => `${s}\n`;
const abs = (p) => `${SITE_URL}${p}`;

/** Har bir faylning boshidagi bir xil izoh — manba va cheklov. */
function header(lang, title, canonical) {
  const t = T[lang] || T.uz;
  return (
    line(`# ${title}`) +
    line("") +
    line(`> ${SITE_NAME} · ${abs(canonical)}`) +
    line(`> ${t.disclaimer}`) +
    line("")
  );
}

/** /qonunlar.md */
function lawsIndexMd({ lang, laws, nameOf }) {
  const t = T[lang] || T.uz;
  let out = header(lang, t.lawsTitle, path.laws());
  out += line(t.lawsDesc) + line("");
  for (const l of laws) {
    out += line(
      `- [${nameOf(l, lang)}](${abs(path.code(l.code))}) — \`${l.code}\`, ${l.articleCount} ${t.articles}`,
    );
  }
  return out;
}

/** /qonun/:code.md — modda ro'yxati */
function lawCodeMd({ lang, law, articles, nameOf }) {
  const t = T[lang] || T.uz;
  const ru = lang === "ru";
  const title = nameOf(law, lang);
  let out = header(lang, title, path.code(law.code));
  if (law.url) out += line(`${t.source}: ${law.url}`) + line("");
  out += line(`${articles.length} ${t.articles}`) + line("");
  for (const a of articles) {
    const at = (ru && a.titleRu) || a.title || "";
    out += line(
      `- [${t.articleN(a.articleNumber)}](${abs(path.article(law.code, a.articleNumber))})${at ? ` — ${at}` : ""}`,
    );
  }
  return out;
}

/** /qonun/:code/:article.md — modda matni */
function articleMd({ lang, law, article, nameOf }) {
  const t = T[lang] || T.uz;
  const ru = lang === "ru";
  const at = (ru && article.titleRu) || article.title || "";
  const text = (ru && article.textRu) || article.text || "";
  const title = `${nameOf(law, lang)} — ${t.articleN(article.articleNumber)}${at ? `. ${at}` : ""}`;

  let out = header(lang, title, path.article(law.code, article.articleNumber));
  const section = (ru && article.sectionRu) || article.section || "";
  const chapter = (ru && article.chapterRu) || article.chapter || "";
  if (section) out += line(`**${t.section}:** ${section}`);
  if (chapter) out += line(`**${t.chapter}:** ${chapter}`);
  out += line("");
  out += line(text);
  out += line("");
  out += line(`[${t.allArticles}](${abs(path.code(law.code))})`);
  return out;
}

/** /savollar.md */
function qaIndexMd({ lang, groups, areaName, pick }) {
  const t = T[lang] || T.uz;
  let out = header(lang, t.qaTitle, path.qaIndex());
  out += line(t.qaDesc) + line("");
  for (const g of groups) {
    out += line(`## ${areaName(g.area, lang)}`) + line("");
    for (const q of g.items) {
      out += line(`- [${pick(q.q, lang)}](${abs(path.qa(q.slug))})`);
    }
    out += line("");
  }
  return out;
}

/** /savol/:slug.md */
function qaAnswerMd({ lang, item, quotes, areaName, area, pick }) {
  const t = T[lang] || T.uz;
  const question = pick(item.q, lang);
  let out = header(lang, question, path.qa(item.slug));
  out += line(`**${t.qaAreas}:** ${areaName(area, lang)}`) + line("");
  out += line(`## ${t.qaAnswer}`) + line("");
  out += line(pick(item.short, lang)) + line("");
  for (const p of pick(item.body, lang)) out += line(p) + line("");
  if (quotes.length) {
    out += line(`## ${t.qaBasis}`) + line("");
    for (const q of quotes) {
      out += line(
        `### ${q.code} ${t.articleN(q.article)}${q.title ? ` — ${q.title}` : ""}`,
      );
      out += line("");
      out += line(`> ${q.text}`);
      out += line("");
      out += line(abs(path.article(q.code, q.article))) + line("");
    }
  }
  return out;
}

/** /metodologiya.md */
function methodMd({ lang, method }) {
  const t = T[lang] || T.uz;
  let out = header(lang, t.methodTitle, path.method());
  out += line(method.intro) + line("");
  for (const s of method.sections) {
    out += line(`## ${s.h}`) + line("");
    for (const p of s.p) out += line(p) + line("");
  }
  return out;
}

module.exports = {
  lawsIndexMd,
  lawCodeMd,
  articleMd,
  qaIndexMd,
  qaAnswerMd,
  methodMd,
};
