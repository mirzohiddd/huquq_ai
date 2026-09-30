"use strict";
/**
 * PREZIDENT HUJJATLARI RO'YXATINI LexUZ'DAN YIG'ISH (fon rejimida).
 *
 * - Birinchi marta (bazada hujjat kam bo'lsa) — TO'LIQ yig'iladi:
 *   ~5 600 hujjat ≈ 280 sahifa, sahifalar orasida tanaffus bilan (~10 daq).
 * - Har kuni — faqat yangilari: eng yangi sahifalardan boshlab, sahifadagi
 *   hujjatlarning HAMMASI bazada bor bo'lsa to'xtaydi.
 * - Haftada bir marta (yakshanba) — yana to'liq: ro'yxatdan chiqib ketgan
 *   (masalan o'z kuchini yo'qotgan) hujjat `listed: false` bo'ladi.
 *   Aniq holat hujjat ochilganda LexUZ kartochkasidan olinadi.
 */
const { LegalAct } = require("../../models/legalActs");
const { FORMS, listUrl, parseListPage } = require("./listing");

const H = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
  Accept: "text/html",
  "Accept-Language": "uz,ru;q=0.9",
};
const GAP_MS = 1500;
const DAY_MS = 24 * 60 * 60 * 1000;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function request(url, { cookie, form } = {}) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 60000);
  try {
    const r = await fetch(url, {
      method: form ? "POST" : "GET",
      headers: {
        ...H,
        ...(cookie ? { Cookie: cookie } : {}),
        ...(form ? { "Content-Type": "application/x-www-form-urlencoded" } : {}),
      },
      body: form ? new URLSearchParams(form) : undefined,
      signal: ctrl.signal,
    });
    if (!r.ok) throw new Error(`LexUZ HTTP ${r.status}`);
    const set = r.headers.getSetCookie?.() || [];
    return { html: await r.text(), cookie: set.length ? set.map((c) => c.split(";")[0]).join("; ") : cookie };
  } finally {
    clearTimeout(timer);
  }
}

async function save(form, items) {
  if (!items.length) return 0;
  const known = new Set(
    (await LegalAct.find({ docId: { $in: items.map((i) => i.docId) } }).select("docId -_id").lean()).map((d) => d.docId),
  );
  const now = new Date();
  await LegalAct.bulkWrite(
    items.map((it) => ({
      updateOne: {
        filter: { docId: it.docId },
        update: { $set: { ...it, form, listed: true, lastSeenAt: now } },
        upsert: true,
      },
    })),
    { ordered: false },
  );
  return items.filter((i) => !known.has(i.docId)).length;
}

async function crawlForm(form, { full }) {
  const url = listUrl(form);
  const started = new Date();
  let { html, cookie } = await request(url);
  let page = parseListPage(html);
  const maxPages = Math.ceil((page.total || 20) / 20) + 1;
  const seen = new Set();
  let added = 0;
  for (let p = 1; p <= maxPages && page.items.length; p++) {
    const fresh = page.items.filter((i) => !seen.has(i.docId));
    if (!fresh.length) break; // sahifa takrorlandi — ro'yxat tugadi
    fresh.forEach((i) => seen.add(i.docId));
    const newOnPage = await save(form, fresh);
    added += newOnPage;
    if (!full && newOnPage === 0) break; // kundalik: yangilar tugadi
    if (!page.hasNext) break;
    await sleep(GAP_MS);
    ({ html, cookie } = await request(url, {
      cookie,
      form: { ...page.hidden, __EVENTTARGET: "ucFoundActsControl$LinkButton1", __EVENTARGUMENT: "" },
    }));
    page = parseListPage(html);
  }
  if (full && seen.size >= (page.total || 0) * 0.9) {
    await LegalAct.updateMany({ form, lastSeenAt: { $lt: started } }, { $set: { listed: false } });
  }
  return { form, seen: seen.size, added };
}

let running = false;

async function crawlActs({ full = false } = {}) {
  if (running) return { skipped: "running" };
  running = true;
  const out = [];
  try {
    for (const form of Object.keys(FORMS)) {
      try {
        out.push(await crawlForm(form, { full }));
      } catch (e) {
        console.warn(`Prezident hujjatlari (${form}) yig'ilmadi:`, e.message);
      }
    }
  } finally {
    running = false;
  }
  console.log("🏛️ Prezident hujjatlari:", out.map((r) => `${r.form} ${r.seen} (+${r.added})`).join(", "));
  require("./actsIndex").invalidate();
  return out;
}

function startActsCrawl() {
  const run = async () => {
    const count = await LegalAct.estimatedDocumentCount().catch(() => 0);
    const full = count < 1000 || new Date().getDay() === 0;
    await crawlActs({ full }).catch((e) => console.warn("Prezident hujjatlari:", e.message));
  };
  setTimeout(run, 3 * 60 * 1000).unref?.();
  setInterval(run, DAY_MS).unref?.();
}

module.exports = { crawlActs, startActsCrawl };
