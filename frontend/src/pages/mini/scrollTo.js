/**
 * SILLIQ SCROLL — elementni ekran o'rtasiga olib keladi.
 * ⚠️ `scrollIntoView({ behavior: "smooth" })` ishlatilmaydi: Telegram
 * Desktop / ba'zi WebView'larda sichqoncha bilan bosilganda u jim hech narsa
 * qilmasdi (telefonda sensor bilan ishlardi). SABAB: saytning g'ildirak
 * inersiyasi (`utils/smoothScroll.js` → initSmoothWheel) sichqoncha bilan
 * scroll qilingandan keyin ham ishlab turadi va dasturiy scrollni o'z
 * «maqsadi»ga qaytarib tortadi. Oyna scrolli uchun saytning `scrollToY`
 * ishlatiladi — u `smoothscroll:start` yuborib inersiyani to'xtatadi.
 * Ichki konteyner scroll bo'lsa — o'zimiz requestAnimationFrame bilan.
 */
import { scrollToY } from "../../utils/smoothScroll";

function scrollerOf(el) {
  for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
    const oy = getComputedStyle(p).overflowY;
    if ((oy === "auto" || oy === "scroll") && p.scrollHeight > p.clientHeight + 1) return p;
  }
  return document.scrollingElement || document.documentElement;
}

export function smoothCenter(el, ms = 650) {
  const box = scrollerOf(el);
  const isRoot = box === document.scrollingElement || box === document.documentElement;
  const view = isRoot ? window.innerHeight : box.clientHeight;
  const boxTop = isRoot ? 0 : box.getBoundingClientRect().top;
  const r = el.getBoundingClientRect();
  const from = isRoot ? window.scrollY || box.scrollTop : box.scrollTop;
  const max = box.scrollHeight - view;
  const to = Math.max(0, Math.min(max, from + r.top - boxTop - (view - r.height) / 2));
  if (isRoot) return scrollToY(to, { duration: ms });
  const set = (y) => {
    box.scrollTop = y;
  };
  const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  if (reduce || Math.abs(to - from) < 2) return set(to);
  const t0 = performance.now();
  const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - (-2 * x + 2) ** 3 / 2);
  const step = (now) => {
    const k = Math.min(1, (now - t0) / ms);
    set(from + (to - from) * ease(k));
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
