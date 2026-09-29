"use strict";
/**
 * MODDA SAHIFASI — tartib: modda raqami → nomi → RASMIY matn →
 * oddiy tildagi tushuntirish → misol → kimlarga tegishli → huquqlar /
 * majburiyatlar / javobgarlik → tegishli moddalar va qonunlar →
 * o'zgartirishlar → rasmiy manba.
 *
 * Rasmiy manbadan olingan ma'lumot (`official`) va platforma izohi
 * (`platform`) javobda ATAYLAB alohida obyektlarda — frontend ularni
 * vizual jihatdan ajratadi va foydalanuvchi adashmaydi.
 */
const { getLaws } = require("../lawRegistry");
const { getDossier } = require("./dossier");
const { articlesOf, titleOf } = require("./docView");
const { explainArticle } = require("./explain");
const { extractRoles, extractSubjects, crossRefs, relatedLaws } = require("./articleRoles");

/* Modda qaysi tugunlar ichida: ["I BO'LIM. ...", "1-bob. ..."] */
function pathOf(nodes = [], num) {
  const idx = nodes.findIndex((n) => n.articles.includes(num));
  if (idx < 0) return [];
  const chain = [nodes[idx]];
  let level = nodes[idx].level;
  for (let i = idx - 1; i >= 0 && level > 1; i--) {
    if (nodes[i].level < level) {
      chain.unshift(nodes[i]);
      level = nodes[i].level;
    }
  }
  return chain.map((n) => ({ kind: n.kind, title: n.title }));
}

const toTime = (d = "") => {
  const [dd, mm, yy] = String(d).split(".");
  return yy ? Date.UTC(+yy, +mm - 1, +dd) : 0;
};

async function getArticle(code, num, lang = "uz") {
  const laws = await getLaws();
  const law = laws.find((l) => l.code === code);
  if (!law) return null;
  const arts = await articlesOf(code);
  const i = arts.findIndex((d) => d.articleNumber === num);
  if (i < 0) return null;
  const d = arts[i];
  const dossier = await getDossier(code);

  const useRu = lang === "ru" && Boolean(d.textRu);
  const text = useRu ? d.textRu : d.text;
  const nodesLang = useRu && dossier?.structure?.ru?.length ? "ru" : "uz";
  const changesLang = useRu && dossier?.changes?.ru?.[num] ? "ru" : "uz";
  const changes = dossier?.changes?.[changesLang]?.[num] || [];
  const existing = new Set(arts.map((a) => a.articleNumber));
  const titles = new Map(arts.map((a) => [a.articleNumber, titleOf(a, lang)]));
  const nameOf = (l) => (lang === "ru" ? l.nameI18n?.ru || l.name : l.name);
  const lastChange = changes.map((c) => c.date).sort((a, b) => toTime(b) - toTime(a))[0] || "";

  return {
    law: { code, name: nameOf(law) },
    articleNumber: num,
    prev: arts[i - 1] ? { num: arts[i - 1].articleNumber, title: titleOf(arts[i - 1], lang) } : null,
    next: arts[i + 1] ? { num: arts[i + 1].articleNumber, title: titleOf(arts[i + 1], lang) } : null,
    official: {
      title: titleOf(d, lang),
      text,
      textLang: useRu ? "ru" : "uz",
      path: pathOf(dossier?.structure?.[nodesLang] || [], num),
      changes,
      lastChange,
      editions: dossier?.editions || [],
      sourceUrl: useRu && law.urlRu ? law.urlRu : law.url,
      sourceUz: law.url,
      sourceRu: law.urlRu || "",
      checkedAt: dossier?.fetchedAt || null,
    },
    extracted: {
      roles: extractRoles(text, useRu ? "ru" : "uz"),
      subjects: extractSubjects(text, useRu ? "ru" : "uz"),
      refs: crossRefs(text, num, existing).map((n) => ({ num: n, title: titles.get(n) || "" })),
      laws: relatedLaws(d.text + "\n" + (d.textRu || ""), laws, code).map((c) => {
        const l = laws.find((x) => x.code === c);
        return { code: c, name: nameOf(l) };
      }),
    },
    platform: explainArticle(code, num, lang),
  };
}

module.exports = { getArticle };
