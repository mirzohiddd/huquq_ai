/* AI sahifalari uchun formatlash yordamchilari */
export const TIER_LABEL = { free: "Bepul", basic: "Basic", pro: "Pro", premium: "Premium" };
export const KIND_LABEL = { chat: "Chat AI", voice: "Voice AI", stt: "Speech-to-Text", tts: "Text-to-Speech" };

export const usd = (n) => `$${Number(n || 0).toFixed(Number(n || 0) < 1 ? 4 : 2)}`;
export const uzs = (n) => `${Math.round(Number(n || 0)).toLocaleString("ru-RU")} so'm`;
export const int = (n) => Math.round(Number(n || 0)).toLocaleString("ru-RU");
export const tokens = (n) => {
  const v = Number(n || 0);
  return v >= 1e6 ? `${(v / 1e6).toFixed(2)}M` : v >= 1e3 ? `${(v / 1e3).toFixed(1)}K` : String(v);
};

/** Joriy oy va oldingi 11 oy — "YYYY-MM" (Toshkent vaqti) */
export function monthOptions() {
  const now = new Date(Date.now() + 5 * 3600 * 1000);
  const out = [];
  for (let i = 0; i < 12; i++) {
    const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - i, 1));
    const v = d.toISOString().slice(0, 7);
    out.push({ value: v, label: v });
  }
  return out;
}
