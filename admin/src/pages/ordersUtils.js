/** Buyurtmalar sahifasi uchun konstantalar va formatlash (Orders.jsx). */
export const STATUS = {
  new: { type: "meros", label: "Yangi" },
  contacted: { type: "web", label: "Bog'lanildi" },
  done: { type: "active", label: "Yakunlandi" },
  cancelled: { type: "blocked", label: "Bekor qilindi" },
};
export const TIER = { basic: "Basic", pro: "Pro", premium: "Premium" };

export const fmtNum = (n) => Number(n || 0).toLocaleString("ru-RU");
export function fmtPhone(p) {
  const m = /^\+998(\d{2})(\d{3})(\d{2})(\d{2})$/.exec(p || "");
  return m ? `+998 ${m[1]} ${m[2]} ${m[3]} ${m[4]}` : p || "—";
}
export function fmtDate(d) {
  return d
    ? new Date(d).toLocaleString("uz-UZ", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "—";
}
// Raqam yoki username bo'yicha Telegram chatini ochish
export const tgLink = (o) =>
  o.telegramUsername ? `https://t.me/${o.telegramUsername}` : `https://t.me/${o.phone}`;
