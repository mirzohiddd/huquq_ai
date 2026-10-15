/* Analitika — umumiy konstantalar va formatlash.
   Ranglar dataviz palitrasining QORONG'U qadamlari (admin faqat dark):
   validator bilan #0d1322 fonida tekshirilgan — barcha juftlar rang
   ko'rligida ham ajraladi (CVD ΔE ≥ 9.4), kontrast ≥ 3:1. */
export const SEGMENTS = [
  { key: "registered", label: "Ro'yxatdan o'tdi", color: "#3987e5" },
  { key: "left", label: "Ro'yxatdan o'tmay chiqib ketdi", color: "#d95926" },
  { key: "members", label: "A'zolar (kirib foydalangan)", color: "#199e70" },
];
export const ACCENT = "#3987e5";
export const SURFACE = "#0d1322";
export const GRID = "#1f2d45";

const MONTHS = ["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avg", "sen", "okt", "noy", "dek"];

export function fmtNum(n) {
  const v = Number(n || 0);
  if (v >= 1e6) return `${(v / 1e6).toFixed(1).replace(/\.0$/, "")}M`;
  if (v >= 1e4) return `${(v / 1e3).toFixed(1).replace(/\.0$/, "")}K`;
  return v.toLocaleString("uz-UZ");
}

export const fmtPct = (x, digits = 1) => `${(Number(x || 0) * 100).toFixed(digits).replace(/\.0$/, "")}%`;

export function fmtDur(secs) {
  const s = Math.round(Number(secs || 0));
  if (s < 60) return `${s} s`;
  const m = Math.floor(s / 60);
  return m < 60 ? `${m} daq ${s % 60} s` : `${Math.floor(m / 60)} soat ${m % 60} daq`;
}

export function dayLabel(key) {
  const [, m, d] = String(key).split("-");
  return `${Number(d)}-${MONTHS[Number(m) - 1] || ""}`;
}

/** O'zgarish: { pct, dir } — oldingi davr 0 bo'lsa foiz ko'rsatilmaydi. */
export function delta(cur, prev) {
  const c = Number(cur || 0);
  const p = Number(prev || 0);
  if (!p) return { pct: null, dir: c > 0 ? 1 : 0 };
  const pct = (c - p) / p;
  return { pct, dir: Math.abs(pct) < 0.005 ? 0 : Math.sign(pct) };
}

export const SOURCE_LABELS = { direct: "To'g'ridan-to'g'ri" };
export const DEVICE_LABELS = { desktop: "Kompyuter", mobile: "Telefon", tablet: "Planshet" };
