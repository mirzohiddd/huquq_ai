/**
 * schema.org (JSON-LD) tuzilmalarini yasovchi funksiyalar.
 *
 * Nima uchun kerak?
 *  — SEO: Google saytni "huquqiy xizmat" deb tanib, boyitilgan natija
 *    (rich result) ko'rsatadi.
 *  — AEO: FAQPage/QAPage bo'lgan sahifa "javob mashinalari"da (Google AI
 *    Overview, Bing Copilot) to'g'ridan-to'g'ri javob sifatida chiqadi.
 *  — GEO/LLMO: ChatGPT va Perplexity kabi tizimlar sahifani tahlil
 *    qilganda tuzilgan ma'lumot matnni tahmin qilishdan ko'ra ishonchli.
 *
 * Har bir funksiya SOF (pure) — bir xil kirishda bir xil obyekt beradi,
 * shuning uchun `useMemo` bilan xavfsiz ishlatiladi.
 */

import { SITE_URL, SITE_NAME, LOCALES, GEO } from "./siteMeta";

const ORG_ID = `${SITE_URL}/#organization`;

/* ⚠️ Organization, WebSite va WebApplication sxemalari BU YERDA YO'Q —
   ular `index.html` da STATIK yozilgan. Sabab: AI botlari (GPTBot,
   PerplexityBot, ClaudeBot) JavaScript'ni ishga tushirmaydi, ya'ni JS
   orqali qo'shilgan sxemani umuman ko'rmaydi. Sayt darajasidagi
   o'zgarmas ma'lumot statik bo'lishi shart; bu yerda esa faqat TILGA
   yoki MA'LUMOTGA bog'liq (o'zgaruvchan) sxemalar quriladi. */

/**
 * Tariflar sxemasi — narxlar BACKEND dan kelgan haqiqiy qiymatlardan
 * quriladi (`/payment/plans`). Narxni kodga yozib qo'yish noto'g'ri
 * bo'lardi: u o'zgarganda qidiruv natijasida eski narx ko'rinib qolardi.
 */
export function pricingSchema(plans) {
  const offers = (Array.isArray(plans) ? plans : [])
    .filter((p) => p && p.id)
    .map((p) => ({
      "@type": "Offer",
      name: p.label || p.id,
      price: String(p.priceUzs ?? 0),
      priceCurrency: "UZS",
      category: p.id,
      url: `${SITE_URL}/#pricing`,
      availability: "https://schema.org/InStock",
    }));
  if (!offers.length) return null;

  return {
    "@type": "Service",
    "@id": `${SITE_URL}/#pricing`,
    name: `${SITE_NAME} — obuna tariflari`,
    serviceType: "AI huquqiy maslahat",
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: GEO.countryName },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tariflar",
      itemListElement: offers,
    },
  };
}

/**
 * FAQPage — AEO ning asosiy quroli. Savol-javoblar qidiruv natijasida
 * ochiladigan ro'yxat bo'lib chiqadi va AI javoblarida iqtibos qilinadi.
 */
export function faqSchema(items) {
  const list = (items || []).filter((it) => it?.q && it?.a);
  if (!list.length) return null;
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    inLanguage: LOCALES[0],
    mainEntity: list.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

/** Sahifa yo'li — Google natijada "Bosh sahifa › Narxlar" ko'rinishini beradi. */
export function breadcrumbSchema(trail) {
  if (!trail?.length) return null;
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/**
 * HowTo — "Qanday ishlaydi" bo'limi uchun. AEO da "qanday qilib huquqiy
 * maslahat olaman?" turidagi savollarga bevosita javob sifatida chiqadi.
 */
export function howToSchema({ name, description, steps }) {
  const list = (steps || []).filter((s) => s?.name);
  if (!list.length) return null;
  return {
    "@type": "HowTo",
    name,
    description,
    totalTime: "PT2M",
    step: list.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text || s.name,
      url: `${SITE_URL}/#steps`,
    })),
  };
}

/**
 * Ovozli yordamchilar (Google Assistant, Siri) sahifaning QAYSI qismini
 * o'qishini ko'rsatadi — AEO ning ovozli qidiruv qismi.
 */
export function speakableSchema(cssSelectors) {
  return {
    "@type": "WebPage",
    "@id": `${SITE_URL}/#speakable`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };
}

/** Bir nechta sxemani bitta `@graph` ga birlashtiradi (tavsiya etilgan shakl). */
export function graph(...nodes) {
  const clean = nodes.flat().filter(Boolean);
  if (!clean.length) return null;
  return { "@context": "https://schema.org", "@graph": clean };
}
