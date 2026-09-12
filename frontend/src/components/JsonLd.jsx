import { useEffect } from "react";

/**
 * Sahifaning bir BO'LIMI qo'shadigan structured data bloki.
 *
 * `Seo.jsx` dan farqi: u butun SAHIFAGA tegishli (bitta bo'lishi kerak va
 * `data-seo-page` bilan belgilanadi), bu esa alohida komponent uchun —
 * masalan Narxlar bo'limi o'z tariflar sxemasini qo'shadi. Ikkalasi
 * bir-birini o'chirmaydi, chunki belgilari boshqa (`data-seo-block`).
 */
export default function JsonLd({ id, data }) {
  useEffect(() => {
    if (!data) return undefined;
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.dataset.seoBlock = id;
    el.textContent = JSON.stringify(data);
    document.head.appendChild(el);
    return () => el.remove();
  }, [id, data]);

  return null;
}
