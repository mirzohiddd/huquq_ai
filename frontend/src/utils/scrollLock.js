/**
 * FON SCROLLINI QULFLASH — sayt bo'ylab YAGONA manba.
 *
 * MUAMMO 1 — iPhone.  Avval har bir modal o'zi `document.body.style.overflow
 * = "hidden"` qilardi. Bu DESKTOPDA ishlaydi, lekin iOS Safari'da fonni
 * TO'XTATMAYDI: barmoq bilan surilganda sahifa modal ortida baribir
 * siljiydi. Ishonchli usul — `position: fixed` bilan sahifani "qotirish"
 * va yopilganda scroll holatini AYNAN tiklash (aks holda foydalanuvchi
 * modalni yopganda sahifa boshiga otilib ketadi).
 *
 * MUAMMO 2 — ichma-ich modallar.  Profil oynasidan To'lov usuli oynasi
 * ochiladi. Har biri o'zi qulflab, o'zi yechganda, ICHKI oyna yopilishi
 * bilan qulf butunlay yechilardi — holbuki Profil hali ochiq. Shu sabab
 * qulf SANOQLI: nechta modal ochiq bo'lsa shuncha sanaladi va faqat
 * OXIRGISI yopilganda sahifa bo'shatiladi.
 *
 * MUAMMO 3 — desktopdagi "sakrash".  Scrollbar yo'qolganda sahifa
 * kengayib, kontent yon tomonga siljiydi. Shuning uchun scrollbar eni
 * o'lchanib, o'sha en `padding-right` sifatida qaytariladi.
 *
 * `body[data-scroll-locked]` — tashqi kod (masalan `smoothScroll.js`)
 * qulf holatini shu belgidan bilib oladi.
 */

let count = 0;
let saved = null;

function scrollbarWidth() {
  // `innerWidth` scrollbarni ham qamrab oladi, `clientWidth` esa yo'q
  return window.innerWidth - document.documentElement.clientWidth;
}

/** Fonni qulflaydi. Har chaqiruv uchun BITTA `unlockScroll()` kerak. */
export function lockScroll() {
  if (typeof document === "undefined") return;
  count += 1;
  if (count > 1) return; // allaqachon qulflangan

  const body = document.body;
  const scrollY = window.scrollY || window.pageYOffset || 0;
  const gap = scrollbarWidth();

  saved = {
    scrollY,
    position: body.style.position,
    top: body.style.top,
    left: body.style.left,
    right: body.style.right,
    width: body.style.width,
    overflow: body.style.overflow,
    paddingRight: body.style.paddingRight,
  };

  body.style.position = "fixed";
  body.style.top = `-${scrollY}px`;
  body.style.left = "0";
  body.style.right = "0";
  body.style.width = "100%";
  // `overflow: hidden` ATAYLAB saqlanib qoldi: `position: fixed` asosiy
  // ishni bajaradi, lekin mavjud kod (smoothScroll) qulfni shu qiymat
  // orqali ham taniydi va eski xatti-harakat buzilmaydi.
  body.style.overflow = "hidden";
  if (gap > 0) body.style.paddingRight = `${gap}px`;
  body.setAttribute("data-scroll-locked", "");
}

/** Fonni bo'shatadi (faqat oxirgi modal yopilganda haqiqatda ishlaydi). */
export function unlockScroll() {
  if (typeof document === "undefined") return;
  if (count === 0) return;
  count -= 1;
  if (count > 0) return; // ichkarida yana modal bor

  const body = document.body;
  const s = saved;
  saved = null;
  if (!s) return;

  body.style.position = s.position;
  body.style.top = s.top;
  body.style.left = s.left;
  body.style.right = s.right;
  body.style.width = s.width;
  body.style.overflow = s.overflow;
  body.style.paddingRight = s.paddingRight;
  body.removeAttribute("data-scroll-locked");

  // Scroll holatini tiklash. `behavior: "instant"` — silliq animatsiya
  // bu yerda noto'g'ri bo'lardi: foydalanuvchi qayerda edi, o'sha yerda
  // qolishi kerak, "qaytib borish" ko'rinishi kerak emas.
  window.scrollTo({ top: s.scrollY, left: 0, behavior: "instant" });
}

/**
 * React uchun qulaylik: `useEffect` ichida bitta chaqiruv bilan
 * qulflab, tozalashda avtomatik bo'shatadi.
 *
 *   useEffect(() => scrollLockEffect(isOpen), [isOpen]);
 */
export function scrollLockEffect(active = true) {
  if (!active) return undefined;
  lockScroll();
  return unlockScroll;
}

/** Sinov uchun — nechta modal qulf ushlab turibdi */
export function lockCount() {
  return count;
}
