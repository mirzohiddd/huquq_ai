/**
 * Shu qurilmada saqlanadigan sozlamalar: Profil → «Til» va oxirgi ochilgan kurs.
 * Saqlash yopiq bo'lsa (maxfiy rejim) — sessiya davomida xotirada ishlaydi.
 */
export const LANG_KEY = "miniLang";
export const COURSE_KEY = "miniCourse";

export const read = (k) => {
  try {
    return localStorage.getItem(k);
  } catch {
    return null;
  }
};
export const save = (k, v) => {
  try {
    localStorage.setItem(k, v);
  } catch {
    /* yopiq saqlash */
  }
};
export const savedLang = () => (["ru", "uz"].includes(read(LANG_KEY)) ? read(LANG_KEY) : null);
