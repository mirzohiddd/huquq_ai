import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLang } from "../context/LangContext";
import { setMeta, setLink, setAlternates, setJsonLd } from "../seo/head";
import {
  SITE_URL,
  SITE_NAME,
  OG_IMAGE,
  OG_IMAGE_BY_LANG,
  OG_IMAGE_W,
  OG_IMAGE_H,
  OG_LOCALE,
  DEFAULT_LOCALE,
  GEO,
  AI_SUMMARY,
} from "../seo/siteMeta";

/**
 * Sahifaga xos SEO/AEO/SMO meta-teglarini boshqaradi:
 * title, description, canonical, robots, hreflang, Open Graph, Twitter,
 * GEO teglari va JSON-LD.
 *
 * Nega tashqi kutubxona (react-helmet) emas?
 *  — loyihaga yangi bog'liqlik qo'shmaslik uchun. Sayt SPA bo'lgani
 *    sababli baribir teglar brauzerda o'rnatiladi; Google JavaScript'ni
 *    render qilib indekslaydi, shuning uchun bu yondashuv yetarli.
 *
 * ⚠️ AI qidiruv botlari (GPTBot, PerplexityBot, ClaudeBot) JavaScript'ni
 * ODATDA ishga tushirmaydi — ular uchun `index.html` dagi STATIK teglar
 * va `<noscript>` bloki, hamda `public/llms.txt` ishlaydi. Shu sabab
 * ikkala qatlam ham to'ldirilgan.
 *
 * Ishlatilishi:
 *   <Seo title="..." description="..." />           // indekslanadigan
 *   <Seo title="..." noindex />                     // shaxsiy sahifa
 *   <Seo ... jsonLd={[schema1, schema2]} />         // bir yoki bir nechta
 */
export default function Seo({
  title,
  description,
  keywords,
  image,
  type = "website",
  noindex = false,
  jsonLd = null,
}) {
  const { lang } = useLang();
  const { pathname } = useLocation();

  useEffect(() => {
    const safeLang = OG_LOCALE[lang] ? lang : DEFAULT_LOCALE;
    const fullTitle = title
      ? `${title} | ${SITE_NAME}`
      : `${SITE_NAME} — O'zbekiston qonunchiligi bo'yicha AI huquqiy maslahatchi`;
    const url = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
    const img = image || OG_IMAGE_BY_LANG[safeLang] || OG_IMAGE;
    // Tavsif har doim bo'lishi shart: bo'sh qolsa `setMeta` tegni
    // o'chiradi va sahifa ijtimoiy tarmoqda tavsifsiz ulashiladi.
    const desc = description || AI_SUMMARY[safeLang] || AI_SUMMARY.uz;

    document.title = fullTitle;
    document.documentElement.lang = safeLang;

    setMeta("name", "description", desc);
    setMeta("name", "keywords", keywords);
    // Har safar aniq yoziladi — aks holda noindex sahifadan chiqilganda
    // teg oldingi holatida qolib ketardi.
    setMeta(
      "name",
      "robots",
      noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );
    setLink("canonical", url);
    setAlternates(pathname);

    /* ── Open Graph (Telegram, Facebook, LinkedIn) ── */
    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", img);
    setMeta("property", "og:image:secure_url", img);
    setMeta("property", "og:image:width", String(OG_IMAGE_W));
    setMeta("property", "og:image:height", String(OG_IMAGE_H));
    setMeta("property", "og:image:alt", fullTitle);
    setMeta("property", "og:locale", OG_LOCALE[safeLang]);

    /* ── Twitter / X ── */
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", desc);
    setMeta("name", "twitter:image", img);
    setMeta("name", "twitter:image:alt", fullTitle);

    /* ── GEO: xizmat qaysi hududga mo'ljallanganini bildiradi ── */
    setMeta("name", "geo.region", GEO.region);
    setMeta("name", "geo.placename", GEO.placename);
    setMeta("name", "geo.position", `${GEO.latitude};${GEO.longitude}`);
    setMeta("name", "ICBM", `${GEO.latitude}, ${GEO.longitude}`);
  }, [title, description, keywords, image, type, noindex, lang, pathname]);

  // Sahifaga xos structured data — faqat shu sahifa ochiq turganda
  // <head>da bo'ladi. Massiv ham, bitta obyekt ham qabul qilinadi.
  useEffect(() => {
    if (!jsonLd) return undefined;
    setJsonLd(jsonLd);
    return () => setJsonLd([]);
  }, [jsonLd]);

  return null;
}
