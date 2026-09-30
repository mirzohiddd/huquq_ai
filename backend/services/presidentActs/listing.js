"use strict";
/**
 * LexUZ "Prezident hujjatlari" ro'yxat sahifasini o'qish.
 *
 * Ro'yxat: https://lex.uz/uz/search/nat?lang=4&sort_id=3985&fform_id=<shakl>
 * (shakl: 3973 — farmon, 3972 — qaror, 588 — farmoyish). Sahifada 20 ta
 * hujjat, eng yangisi birinchi. Keyingi sahifa GET bilan emas, ASP.NET
 * postback bilan ochiladi (`__VIEWSTATE` + `__EVENTTARGET`) — shuning uchun
 * sahifadagi yashirin maydonlar va cookie saqlab boriladi.
 */
const cheerio = require("cheerio");

const FORMS = {
  decree: { lexId: 3973, uz: "Farmon", ru: "Указ" },
  resolution: { lexId: 3972, uz: "Qaror", ru: "Постановление" },
  order: { lexId: 588, uz: "Farmoyish", ru: "Распоряжение" },
};

const listUrl = (form) =>
  `https://lex.uz/uz/search/nat?lang=4&sort_id=3985&fform_id=${FORMS[form].lexId}`;

const clean = (s = "") => String(s).replace(/\s+/g, " ").trim();

/* "Oʻzbekiston Respublikasi Prezidentining Farmoni, 23.09.2026 yildagi
   PF-206-son" → { date, number } */
function parseBadge(badge) {
  const date = (badge.match(/(\d{2}\.\d{2}\.\d{4})/) || [])[1] || "";
  const number = (badge.match(/yildagi\s+(.+?)-son/i) || [])[1] || "";
  return { date, number: clean(number) };
}

function dateKey(d) {
  const [dd, mm, yy] = String(d).split(".");
  return yy ? Number(`${yy}${mm}${dd}`) : 0;
}

/** Sahifa → { items, total, hidden } */
function parseListPage(html) {
  const $ = cheerio.load(html);
  const items = [];
  $("tr.dd-table__main-item").each((_, tr) => {
    const $tr = $(tr);
    const a = $tr.find(".dd-table__main-left-desc a.lx_link").first();
    const docId = ((a.attr("href") || "").match(/docs\/(-?\d+)/) || [])[1];
    if (!docId) return;
    const badge = clean($tr.find(".dd-table__main-extra .badge").first().text());
    const { date, number } = parseBadge(badge);
    const icon = $tr.find(".lx_act_state i").attr("class") || "";
    items.push({
      docId,
      title: clean(a.text()),
      badge,
      number,
      date,
      dateKey: dateKey(date),
      year: Number(date.slice(6)) || 0,
      statusCode: (icon.match(/status_code_(\w+)/) || [])[1] || "",
    });
  });
  const total = Number(clean($(".refind__result-export__title").first().text()).replace(/\D/g, "")) || 0;
  const hidden = {};
  $("input[type=hidden]").each((_, el) => {
    const name = $(el).attr("name");
    if (name && name.startsWith("__")) hidden[name] = $(el).attr("value") || "";
  });
  const hasNext = $("#ucFoundActsControl_LinkButton1").length > 0;
  return { items, total, hidden, hasNext };
}

module.exports = { FORMS, listUrl, parseListPage, dateKey };
