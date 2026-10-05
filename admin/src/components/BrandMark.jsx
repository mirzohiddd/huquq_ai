/**
 * HuquqTech belgisi (ochiq kitob) — asosiy saytdagi
 * frontend/src/components/brand/BrandLogo.jsx → BrandMark bilan BIR XIL.
 * Admin alohida ilova (umumiy paket yo'q), shuning uchun nusxa;
 * shakl o'zgarsa ikkalasi ham yangilansin.
 */
export default function BrandMark({ size = 22, color = "#c9953a" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 40" fill="none" aria-hidden="true" style={{ display: "block", color }}>
      <g stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 36.5 L6.2 32.6 Q3.5 32 3.5 29.3 V12.2 Q3.5 9.5 6.2 9.5 H7.5" />
        <path d="M24 36.5 L41.8 32.6 Q44.5 32 44.5 29.3 V12.2 Q44.5 9.5 41.8 9.5 H40.5" />
        <path d="M24 12.5 Q17.5 5.8 10 6 Q8.5 6.05 8.5 7.6 V27.8 Q8.5 29.3 10 29.3 Q17.5 29.2 24 33.2 Z" fill="currentColor" fillOpacity="0.88" />
        <path d="M24 12.5 Q30.5 5.8 38 6 Q39.5 6.05 39.5 7.6 V27.8 Q39.5 29.3 38 29.3 Q30.5 29.2 24 33.2 Z" />
      </g>
    </svg>
  );
}
