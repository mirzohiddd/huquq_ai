"use strict";
/**
 * IndexNow — sayt sahifalarini Bing, Yandex, Seznam, Naver'ga DARHOL xabar qilish.
 *
 * Nima uchun: ChatGPT qidiruvi (va Copilot) Bing indeksiga tayanadi.
 * Bing sahifani bilmasa, ChatGPT ham saytni tavsiya qila olmaydi.
 * IndexNow orqali yuborilgan manzil odatda bir necha soat ichida
 * ko'riladi (oddiy crawl haftalar olishi mumkin).
 *
 * Ishga tushirish (DEPLOY'DAN KEYIN — kalit fayli jonli bo'lishi shart):
 *   node scripts/indexNow.js                 # barcha sitemap manzillari
 *   node scripts/indexNow.js /huquqni-organish /savollar   # faqat shular
 *
 * ⚠️ Kalit fayli: frontend/public/<KEY>.txt (ichida faqat kalitning o'zi).
 * Kalit almashtirilsa ikkalasi ham birga o'zgarsin.
 */
const SITE = "https://www.huquqtech.uz";
const KEY = "fd80731be2b0393e0fd7ec4312524d8b";
const ENDPOINT = "https://api.indexnow.org/indexnow";
const BATCH = 10000; // IndexNow bir so'rovda ko'pi bilan 10 000 manzil qabul qiladi

const UA = { "User-Agent": "Mozilla/5.0 (HuquqTech IndexNow)" };

async function getText(url) {
  const r = await fetch(url, { headers: UA });
  if (!r.ok) throw new Error(`${url} → ${r.status}`);
  return r.text();
}

const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

/** Sitemap index → barcha ichki sitemap'lar → barcha sahifa manzillari. */
async function allUrls() {
  const index = locs(await getText(`${SITE}/sitemap.xml`));
  const urls = [];
  for (const sm of index) {
    try {
      urls.push(...locs(await getText(sm)));
    } catch (e) {
      console.warn(`  ! ${e.message}`);
    }
  }
  return [...new Set(urls)].filter((u) => u.startsWith(SITE));
}

async function main() {
  const keyLive = (await getText(`${SITE}/${KEY}.txt`).catch(() => "")).trim();
  if (keyLive !== KEY) {
    console.error(`Kalit fayli jonli emas: ${SITE}/${KEY}.txt — avval frontend'ni deploy qiling.`);
    process.exit(1);
  }

  const args = process.argv.slice(2);
  const urls = args.length ? args.map((p) => (p.startsWith("http") ? p : SITE + p)) : await allUrls();
  console.log(`Yuboriladi: ${urls.length} ta manzil`);

  for (let i = 0; i < urls.length; i += BATCH) {
    const urlList = urls.slice(i, i + BATCH);
    const r = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8", ...UA },
      body: JSON.stringify({
        host: new URL(SITE).host,
        key: KEY,
        keyLocation: `${SITE}/${KEY}.txt`,
        urlList,
      }),
    });
    // 200/202 — qabul qilindi; 422 — manzillar host'ga mos emas; 403 — kalit topilmadi.
    console.log(`  ${i + 1}–${i + urlList.length}: HTTP ${r.status} ${await r.text()}`);
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
