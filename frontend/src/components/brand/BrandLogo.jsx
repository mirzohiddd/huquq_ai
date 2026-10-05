import { useLang } from "../../context/LangContext";
import s from "./Brand.module.css";

/**
 * HUQUQTECH LOGOSI (2026-10-05).
 *
 * Belgi — ochiq kitob: qalin yumaloq tashqi muqova, chap sahifa
 * to'ldirilgan, o'ng sahifa faqat kontur. Namuna ko'k rangda edi —
 * foydalanuvchi talabi bilan saytning o'z ranglarida: belgi va "Tech"
 * qismi OLTIN, "Huquq" — navy (to'q fonda oq).
 *
 * Inline SVG: istalgan o'lchamda tiniq, alohida rasm so'rovi yo'q,
 * rang esa `currentColor` orqali CSS'dan boshqariladi.
 * ⚠️ Rasm fayllari (favicon, PWA ikonkalari, logo-*.png) shu belgidan
 * `scripts/brand/renderIcons.mjs` bilan yasalgan — shakl o'zgarsa,
 * ular ham qayta yasalsin.
 */
export function BrandMark({ size = 36, className = "", title }) {
  return (
    <svg
      className={`${s.mark} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 48 40"
      fill="none"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : "true"}
      aria-label={title}
    >
      <g stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
        {/* tashqi muqova */}
        <path d="M24 36.5 L6.2 32.6 Q3.5 32 3.5 29.3 V12.2 Q3.5 9.5 6.2 9.5 H7.5" />
        <path d="M24 36.5 L41.8 32.6 Q44.5 32 44.5 29.3 V12.2 Q44.5 9.5 41.8 9.5 H40.5" />
        {/* chap sahifa — to'ldirilgan */}
        <path
          d="M24 12.5 Q17.5 5.8 10 6 Q8.5 6.05 8.5 7.6 V27.8 Q8.5 29.3 10 29.3 Q17.5 29.2 24 33.2 Z"
          fill="currentColor"
          fillOpacity="0.88"
        />
        {/* o'ng sahifa — kontur */}
        <path d="M24 12.5 Q30.5 5.8 38 6 Q39.5 6.05 39.5 7.6 V27.8 Q39.5 29.3 38 29.3 Q30.5 29.2 24 33.2 Z" />
      </g>
    </svg>
  );
}

/** "Huquq" + oltin "Tech" — matn sifatida (qidiruv va ekran o'quvchisi o'qiydi).
    `onDark` — to'q fonda "Tech" yorqinroq oltin; "Huquq" rangi ota elementdan. */
export function BrandWord({ className = "", onDark = false }) {
  return (
    <span className={`${s.word} ${className}`}>
      Huquq<span className={onDark ? s.techDark : s.tech}>Tech</span>
    </span>
  );
}

/**
 * To'liq logo: belgi + nom (+ ixtiyoriy "HUQUQIY TA'LIM PLATFORMASI").
 * @param {"light"|"dark"} tone — fon: och (navy matn) yoki to'q (oq matn)
 */
export default function BrandLogo({ tone = "light", sub = false, size = "md", className = "" }) {
  const { t } = useLang();
  return (
    <span className={`${s.logo} ${s[tone]} ${s[size]} ${className}`}>
      <BrandMark className={s.logoMark} size={size === "lg" ? 44 : size === "sm" ? 30 : 36} />
      <span className={s.text}>
        <BrandWord />
        {sub && <span className={s.sub}>{t.brand_sub}</span>}
      </span>
    </span>
  );
}
