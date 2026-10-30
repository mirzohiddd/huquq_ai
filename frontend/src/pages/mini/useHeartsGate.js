/**
 * YURAKCHA DARVOZASI (MiniApp uchun):
 *  - `gated(fn)` — yurakcha 0 bo'lsa dars/imtihon/vaziyat/takrorlash UMUMAN
 *    ochilmaydi, darhol to'ldirish oynasi chiqadi (javob paytida emas);
 *  - dars ichida oxirgi yurakcha ketsa — dars yopiladi va oyna ochiladi.
 * Server ham tekshiradi (403 noHearts) — bu faqat foydalanuvchi tajribasi.
 */
import { useEffect } from "react";
import { useHearts, openHearts, liveOf } from "./heartsStore";

const HEART_KINDS = new Set(["lesson", "course", "situation", "exam"]);
export const noHearts = () => liveOf()?.hearts === 0;
export const gated = (fn) => (...a) => (noHearts() ? openHearts() : fn(...a));

export function useHeartsGate(overlay, closeOverlay) {
  const { live } = useHearts();
  useEffect(() => {
    if (live?.hearts !== 0 || !overlay || !HEART_KINDS.has(overlay.kind)) return undefined;
    const id = setTimeout(() => {
      closeOverlay();
      openHearts();
    }, 1600); // «Noto'g'ri» ekrani bir lahza ko'rinsin
    return () => clearTimeout(id);
  }, [live?.hearts, overlay, closeOverlay]);
}
