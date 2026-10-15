/* Yagona AudioContext — foydalanuvchi bosganda (gesture) yaratiladi/uyg'otiladi.
   iOS Safari ovozni faqat shunday "ochilgan" kontekst orqali ijro etadi. */
let ctx = null;

export function unlockAudio() {
  try {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === "suspended") ctx.resume().catch(() => {});
  } catch {
    ctx = null;
  }
  return ctx;
}

export const audioCtx = () => ctx || unlockAudio();
