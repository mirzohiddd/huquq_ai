/**
 * TEZ OCHILISH (2026-10-30).
 *
 * Avval ilova ochilganda ketma-ket kutilardi: Telegram skripti → kirish →
 * yo'l → (dars bosilganda) dars bo'lagi → dars ma'lumoti. Endi:
 *  - oxirgi ko'rilgan yo'l shu qurilmada saqlanadi va DARHOL chiziladi,
 *    yangisi fonda keladi (Telegram foydalanuvchisi bo'yicha — boshqa
 *    hisobning ma'lumoti ko'rinmasin);
 *  - ilova tayyor bo'lgach, dars/imtihon/bo'lim bo'laklari bo'sh paytda
 *    oldindan yuklanadi — dars bosilganda «yuklanmoqda» ko'rinmaydi.
 */
const KEY = "miniPathCache";
let uid = null;

export const setUid = (id) => {
  uid = id ? String(id) : null;
};

export function cachedPath() {
  if (!uid) return null;
  try {
    const c = JSON.parse(localStorage.getItem(KEY) || "null");
    return c?.uid === uid && c.path?.units ? c.path : null;
  } catch {
    return null;
  }
}

export function storePath(path) {
  if (!uid || !path?.units) return;
  try {
    localStorage.setItem(KEY, JSON.stringify({ uid, path }));
  } catch {
    /* joy yo'q / yopiq saqlash — kesh shart emas */
  }
}

const idle = (fn) => (window.requestIdleCallback ? window.requestIdleCallback(fn, { timeout: 2500 }) : setTimeout(fn, 800));

/** Ilova bo'laklarini fonda oldindan yuklash (bir marta). */
let warmed = false;
export function warmChunks() {
  if (warmed) return;
  warmed = true;
  idle(() => {
    [
      () => import("./CourseLessonPlayer"),
      () => import("./ExamPlayer"),
      () => import("./PlansSheet"),
      () => import("./SituationsTab"),
      () => import("./ReviewTab"),
      () => import("./AchievementsTab"),
      () => import("./RatingTab"),
      () => import("./ProfileTab"),
    ].forEach((load) => load().catch(() => {}));
  });
}
