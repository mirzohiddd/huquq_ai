"use strict";
/**
 * Matnni URL-xavfsiz anchor slugiga aylantiradi (masalan "1. Mehnat
 * shartnomasi" -> "1-mehnat-shartnomasi"). Unicode harflarni (krill,
 * lotin diakritikalari) saqlab qoladi — faqat probel/tinish
 * belgilarini "-" bilan almashtiradi, shuning uchun o'zbek va rus
 * tilidagi sarlavhalar uchun ham ishlaydi.
 *
 * `usedSlugs` (Set) berilsa, takrorlanishlar avtomatik -2, -3 ...
 * qo'shimchasi bilan noyob qilinadi.
 */
function slugify(text, usedSlugs) {
  let slug = String(text || "")
    .trim()
    .toLowerCase()
    .replace(/['ʻʼ`´]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);

  if (!slug) slug = "bolim";

  if (usedSlugs) {
    const base = slug;
    let i = 2;
    while (usedSlugs.has(slug)) {
      slug = `${base}-${i++}`;
    }
    usedSlugs.add(slug);
  }

  return slug;
}

module.exports = { slugify };
