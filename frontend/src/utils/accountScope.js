/**
 * HISOB BO'YICHA AJRATILGAN LOKAL XOTIRA.
 *
 * ⚠️ NIMA UCHUN KERAK (foydalanuvchi xabari, 2026-08-11):
 * o'quv progressi `localStorage` da UMUMIY kalitlar bilan saqlanardi
 * (`lessonState`, `lessonXp`, `savedLessons`). Ya'ni kalit qurilmaga
 * bog'langan, hisobga EMAS. Oqibati: bitta kompyuterda A hisobi bilan
 * darsni tugatgan odam chiqib, B hisobi bilan kirsa — B ham barcha
 * darslarni "tugallandi" holatida ko'rardi. Progress hisobga tegishli
 * bo'lishi kerak, qurilmaga emas.
 *
 * Yechim: har bir kalitga hisob identifikatori qo'shiladi
 * (`lessonState:68f2…`). Login qilinmagan holat alohida ("guest")
 * bo'shliqda qoladi va hech qachon hisob ma'lumoti bilan aralashmaydi.
 *
 * ⚠️ Bu KESH, haqiqiy manba emas. Haqiqiy manba — server
 * (`/api/progress`, foydalanuvchi tokeni bo'yicha). Kesh faqat sahifa
 * serverdan javob kelguncha darhol biror narsa ko'rsatishi va tarmoq
 * yo'q bo'lganda ishlashi uchun.
 */

const USER_KEY = "user";

/** Joriy hisob identifikatori yoki `null` (mehmon).
    Manba — `localStorage.user`, uni `AuthContext` login/logout paytida
    yozadi va o'chiradi, ya'ni bu qiymat har doim dolzarb. */
export function currentUserId() {
  try {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return null;
    const u = JSON.parse(raw);
    const id = u?.id || u?._id;
    return id ? String(id) : null;
  } catch {
    return null;
  }
}

/**
 * Kalitni joriy hisobga bog'laydi.
 * ⚠️ Har CHAQIRUVDA qayta hisoblanadi (bir marta emas) — foydalanuvchi
 * sahifani yangilamasdan boshqa hisobga kirishi mumkin.
 */
export function scopedKey(base) {
  const id = currentUserId();
  return id ? `${base}:${id}` : `${base}:guest`;
}

/**
 * Eski UMUMIY kalitlarni o'chiradi.
 *
 * Ular endi ishlatilmaydi, lekin brauzerda qolib ketsa foyda ham
 * bermaydi, zarar ham: shunchaki hisoblar aralashgan davrdagi ma'lumot
 * bo'lib turadi. Ko'chirilmaydi ham — o'sha ma'lumot QAYSI hisobga
 * tegishli ekani noma'lum va uni joriy hisobga ko'chirish aynan
 * tuzatilayotgan xatoni takrorlardi. Yo'qotish xavfi yo'q: progress
 * allaqachon serverga yuborilgan va `pullProgress()` uni qaytaradi.
 */
export function purgeSharedKeys(keys) {
  try {
    for (const k of keys) localStorage.removeItem(k);
  } catch {
    /* xotira mavjud emas — e'tiborsiz qoldiramiz */
  }
}
