"use strict";
/**
 * HUJJAT SAHIFASI — rekvizitlar + tuzilma daraxti (qism → bo'lim → bob →
 * paragraf → modda) + o'zgartirishlar + muhim moddalar.
 */
const { getLaws } = require("../lawRegistry");
const { getIndex } = require("../localAI/lawIndex");
const { getDossier, listDossiers } = require("./dossier");
const { entryOf } = require("./catalog");
const { importantArticles, explainedSet } = require("./explain");

/** Kodeks moddalari (korpus tartibida — lex.uz tartibi). */
async function articlesOf(code) {
  const { docs } = await getIndex();
  return docs.filter((d) => d.lawCode === code);
}

const titleOf = (d, lang) => (lang === "ru" && d.titleRu ? d.titleRu : d.title) || "";

/* Tekis tugunlar ro'yxati (darajasi bilan) → ichma-ich daraxt. */
function buildTree(nodes, titles) {
  const root = { children: [] };
  const stack = [{ level: 0, node: root }];
  for (const n of nodes) {
    const item = {
      id: n.id,
      kind: n.kind,
      title: n.title,
      articles: n.articles.filter((a) => titles.has(a)).map((a) => ({ num: a, title: titles.get(a) })),
      children: [],
    };
    while (stack.length > 1 && stack[stack.length - 1].level >= n.level) stack.pop();
    stack[stack.length - 1].node.children.push(item);
    stack.push({ level: n.level, node: item });
  }
  return root.children;
}

/* Modda o'zgarishlarini o'zgartirgan HUJJAT bo'yicha guruhlash. */
function amendmentsOf(changes = {}) {
  const map = new Map();
  for (const [num, list] of Object.entries(changes)) {
    for (const c of list) {
      const key = c.doc || c.url || c.text.slice(0, 40);
      if (!map.has(key)) map.set(key, { doc: c.doc, date: c.date, url: c.url, articles: [] });
      const row = map.get(key);
      if (!row.articles.includes(num)) row.articles.push(num);
    }
  }
  const toTime = (d = "") => {
    const [dd, mm, yy] = d.split(".");
    return yy ? Date.UTC(+yy, +mm - 1, +dd) : 0;
  };
  return [...map.values()].sort((a, b) => toTime(b.date) - toTime(a.date));
}

async function getDocument(code, lang = "uz") {
  const law = (await getLaws()).find((l) => l.code === code);
  if (!law) return null;
  const [dossier, lite, arts] = await Promise.all([getDossier(code), listDossiers(), articlesOf(code)]);
  const titles = new Map(arts.map((d) => [d.articleNumber, titleOf(d, lang)]));
  const entry = entryOf(law, lite.get(code), arts.length, lang);

  const nodesLang = dossier?.structure?.[lang]?.length ? lang : "uz";
  let tree = buildTree(dossier?.structure?.[nodesLang] || [], titles);
  const placed = new Set();
  const walk = (list) => list.forEach((n) => (n.articles.forEach((a) => placed.add(a.num)), walk(n.children)));
  walk(tree);
  /* Tuzilma hali olinmagan yoki moddalarning bir qismi tugunga tushmagan
     bo'lsa — ular yo'qolmasin: alohida guruhda. */
  const rest = arts.filter((d) => !placed.has(d.articleNumber));
  if (rest.length) {
    tree = tree.concat({
      id: "rest",
      kind: "root",
      title: "",
      articles: rest.map((d) => ({ num: d.articleNumber, title: titleOf(d, lang) })),
      children: [],
    });
  }

  const changes = dossier?.changes?.[lang] && Object.keys(dossier.changes[lang]).length
    ? dossier.changes[lang]
    : dossier?.changes?.uz || {};
  const explained = explainedSet(code);
  return {
    doc: entry,
    tree,
    amendments: amendmentsOf(changes).slice(0, 60),
    changedArticles: Object.keys(changes).length,
    editions: dossier?.editions || [],
    related: (dossier?.correspondents || []).slice(0, 40),
    important: importantArticles(code)
      .filter((n) => titles.has(n))
      .map((n) => ({ num: n, title: titles.get(n) })),
    explainedCount: [...explained].filter((n) => titles.has(n)).length,
    explained: [...explained].filter((n) => titles.has(n)),
  };
}

module.exports = { getDocument, articlesOf, titleOf };
