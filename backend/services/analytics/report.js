"use strict";
/**
 * Admin "Analitika" hisoboti — tanlangan davr va undan oldingi teng davr.
 *
 * Har bir brauzer (vid) davr ichida UCH guruhdan biriga tushadi:
 *   • registered — shu davrda ro'yxatdan o'tgan (hisobi shu davrda yaratilgan)
 *   • member     — avvaldan ro'yxatdan o'tgan, kirib foydalangan
 *   • left       — umuman kirmagan/ro'yxatdan o'tmagan holda chiqib ketgan
 * Uchalasi yig'indisi = tashrif buyurgan brauzerlar soni.
 */
const { SiteVisit } = require("../../models/analytics");
const { User } = require("../../models");
const { dayKey } = require("./track");

const DAY_MS = 86400000;
const FIELDS = "vid day hour firstAt lastAt pages landing source device firstVisit sawRegister loggedIn userId";

function dayList(fromKey, n) {
  const start = new Date(`${fromKey}T00:00:00Z`).getTime();
  return Array.from({ length: n }, (_, i) => new Date(start + i * DAY_MS).toISOString().slice(0, 10));
}

/** Toshkent kun kalitidan UTC chegara (00:00 Toshkent = 19:00 UTC oldingi kun). */
const tzStart = (key) => new Date(new Date(`${key}T00:00:00Z`).getTime() - 5 * 3600 * 1000);

async function loadPeriod(days) {
  const from = days[0];
  const to = days[days.length - 1];
  const visits = await SiteVisit.find({ day: { $gte: from, $lte: to } }, FIELDS).lean();
  const ids = [...new Set(visits.filter((v) => v.userId).map((v) => String(v.userId)))];
  const users = ids.length ? await User.find({ _id: { $in: ids } }, "createdAt").lean() : [];
  const created = new Map(users.map((u) => [String(u._id), u.createdAt]));
  const signups = await User.countDocuments({
    createdAt: { $gte: tzStart(from), $lt: new Date(tzStart(to).getTime() + DAY_MS) },
  });
  return { visits, created, signups, from, to };
}

function classify(v, created, from, to) {
  if (v.userId) {
    const c = created.get(String(v.userId));
    const k = c ? dayKey(c) : "";
    if (k >= from && k <= to) return "registered";
  }
  return v.loggedIn ? "member" : "left";
}

function summarize({ visits, created, signups, from, to }) {
  const byVid = new Map();
  for (const v of visits) {
    const cur = byVid.get(v.vid) || { pages: 0, secs: 0, seg: "left", sawRegister: false, firstVisit: false };
    cur.pages += v.pages || 0;
    cur.secs += Math.max(0, (new Date(v.lastAt) - new Date(v.firstAt)) / 1000);
    cur.sawRegister ||= !!v.sawRegister;
    cur.firstVisit ||= !!v.firstVisit;
    const seg = classify(v, created, from, to);
    // Ustunlik: registered > member > left
    if (seg === "registered" || (seg === "member" && cur.seg === "left")) cur.seg = seg;
    byVid.set(v.vid, cur);
  }
  const all = [...byVid.values()];
  const count = (f) => all.filter(f).length;
  const left = all.filter((x) => x.seg === "left");
  const guests = all.filter((x) => x.seg !== "member").length;
  const registered = count((x) => x.seg === "registered");
  return {
    visitors: all.length,
    newVisitors: count((x) => x.firstVisit),
    pageviews: all.reduce((s, x) => s + x.pages, 0),
    registered,
    members: count((x) => x.seg === "member"),
    left: left.length,
    bounced: left.filter((x) => x.pages <= 1).length,
    signupsAll: signups,
    conversion: guests ? registered / guests : 0,
    avgSecs: all.length ? Math.round(all.reduce((s, x) => s + x.secs, 0) / all.length) : 0,
    funnel: {
      guests,
      sawRegister: count((x) => x.seg !== "member" && (x.sawRegister || x.seg === "registered")),
      registered,
    },
  };
}

function top(visits, key, limit = 6) {
  const m = new Map();
  for (const v of visits) m.set(v[key], (m.get(v[key]) || 0) + 1);
  return [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, limit).map(([name, value]) => ({ name, value }));
}

function series(p, days) {
  const rows = new Map(days.map((d) => [d, { day: d, registered: 0, members: 0, left: 0 }]));
  for (const v of p.visits) {
    const row = rows.get(v.day);
    if (row) row[classify(v, p.created, v.day, v.day)] += 1;
  }
  return [...rows.values()];
}

async function buildReport(nDays = 30) {
  const n = Math.min(365, Math.max(1, Number(nDays) || 30));
  const today = dayKey();
  const curDays = dayList(dayKey(new Date(Date.now() - (n - 1) * DAY_MS)), n);
  const prevDays = dayList(dayKey(new Date(Date.now() - (2 * n - 1) * DAY_MS)), n);

  const [cur, prev, first] = await Promise.all([
    loadPeriod(curDays),
    loadPeriod(prevDays),
    SiteVisit.findOne({}, "day").sort({ day: 1 }).lean(),
  ]);

  const hours = Array.from({ length: 24 }, (_, h) => ({ hour: h, value: 0 }));
  for (const v of cur.visits) hours[v.hour || 0].value += 1;

  return {
    days: n,
    today,
    dataSince: first?.day || null,
    current: summarize(cur),
    previous: summarize(prev),
    daily: series(cur, curDays),
    devices: top(cur.visits, "device", 3),
    sources: top(cur.visits, "source"),
    landings: top(cur.visits, "landing"),
    hours,
  };
}

module.exports = { buildReport };
