import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLang } from "../context/LangContext";

/**
 * Sahifaga xos SEO meta-teglarini boshqaradi (title, description,
 * canonical, robots, Open Graph, Twitter, <html lang>).
 *
 * Nega tashqi kutubxona (react-helmet) emas?
 *  — loyihaga yangi bog'liqlik qo'shmaslik uchun. Sayt SPA bo'lgani
 *    sababli baribir teglar brauzerda o'rnatiladi; Google JavaScript'ni
 *    render qilib indekslaydi, shuning uchun bu yondashuv yetarli.
 *    (To'liq SSR kerak bo'lsa — bu alohida, kattaroq ish.)
 *
 * Ishlatilishi:
 *   <Seo title="..." description="..." />           // indekslanadigan sahifa
 *   <Seo title="..." noindex />                     // shaxsiy sahifa
 */

const SITE_NAME = "Huquq AI";
const SITE_URL = (
  import.meta.env.VITE_SITE_URL || "https://huquq-ai-xi.vercel.app"
).replace(/\/$/, "");
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;
const OG_LOCALE = { uz: "uz_UZ", ru: "ru_RU", en: "en_US" };

/** <head> ichida kerakli <meta>ni topadi yoki yaratadi va qiymatini yozadi */
function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function Seo({
  title,
  description,
  image,
  noindex = false,
  jsonLd = null,
}) {
  const { lang } = useLang();
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${SITE_NAME}`
      : `${SITE_NAME} — O'zbekiston qonunchiligi bo'yicha AI huquqiy maslahatchi`;
    const url = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
    const img = image || DEFAULT_IMAGE;

    document.title = fullTitle;
    document.documentElement.lang = lang || "uz";

    setMeta("name", "description", description);
    // Har safar aniq yoziladi — aks holda noindex sahifadan chiqilganda
    // teg oldingi holatida qolib ketardi.
    setMeta(
      "name",
      "robots",
      noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large",
    );
    setLink("canonical", url);

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", img);
    setMeta("property", "og:locale", OG_LOCALE[lang] || OG_LOCALE.uz);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", img);
  }, [title, description, image, noindex, lang, pathname]);

  // Sahifaga xos structured data (masalan FAQ, Product) — faqat shu
  // sahifa ochiq turganda <head>da bo'ladi.
  useEffect(() => {
    if (!jsonLd) return undefined;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seoPage = "true";
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => script.remove();
  }, [jsonLd]);

  return null;
}
