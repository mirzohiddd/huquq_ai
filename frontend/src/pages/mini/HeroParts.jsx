/**
 * QALQONCHA — 3D ko'rinish qismlari (gradient, yorug'lik, soya).
 * Rasm namunasidek: bo'rtib turgan to'q ko'k hoshiya, ikki tusli oltin yuz
 * (chap yorug', o'ng soyada), naycha qo'l-oyoqlar, oltin bilaguzukli
 * shar-mushtlar va oltin hoshiyali poyabzal.
 *
 * ⚠️ Faqat gradient ishlatiladi (feGaussianBlur YO'Q) — yo'lda bir vaqtda
 * o'nlab qalqoncha bor, filtrlar telefonda sekinlashtiradi.
 * Gradient id'lari har nusxada boshqa (`id` prefiksi) — bir sahifada bir
 * nechta qalqoncha bir-birining gradientini «o'g'irlamasin».
 */
import React from "react";

export const NAVY = "#1b2a4a";
const GOLD = "#f2c14e";
export const SHIELD = "M100 30 C84 40 66 44 50 44 C47.8 44 46 45.8 46 48 L46 98 C46 132 70 154 100 168 C130 154 154 132 154 98 L154 48 C154 45.8 152.2 44 150 44 C134 44 116 40 100 30 Z";
const RIGHT_HALF = "M100 30 C116 40 134 44 150 44 C152.2 44 154 45.8 154 48 L154 98 C154 132 130 154 100 168 Z";

export function HeroDefs({ id }) {
  return (
    <defs>
      <linearGradient id={`${id}l`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffe58a" />
        <stop offset="0.55" stopColor="#f7c948" />
        <stop offset="1" stopColor="#e9b030" />
      </linearGradient>
      <linearGradient id={`${id}r`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#f2bb3a" />
        <stop offset="1" stopColor="#d4951c" />
      </linearGradient>
      <linearGradient id={`${id}rim`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#34497a" />
        <stop offset="0.5" stopColor="#1d2c50" />
        <stop offset="1" stopColor="#0e1830" />
      </linearGradient>
      <radialGradient id={`${id}ball`} cx="0.35" cy="0.3" r="0.75">
        <stop offset="0" stopColor="#5a73ad" />
        <stop offset="0.45" stopColor="#22335a" />
        <stop offset="1" stopColor="#0d1630" />
      </radialGradient>
      <radialGradient id={`${id}gloss`} cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#fff" stopOpacity="0.75" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
      <radialGradient id={`${id}shadow`} cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#0b1322" stopOpacity="0.28" />
        <stop offset="1" stopColor="#0b1322" stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

/** Naycha: to'q soya qatlami, asosiy rang va ustida yaltiroq chiziq */
export function Limb({ d, w, className }) {
  return (
    <g className={className} fill="none" strokeLinecap="round">
      <path d={d} stroke="rgba(255,244,214,0.55)" strokeWidth={w + 4} />
      <path d={d} stroke="#0e1830" strokeWidth={w + 1.5} />
      <path d={d} stroke="#25365e" strokeWidth={w - 1.5} />
      <path d={d} stroke="#5068a3" strokeWidth={w * 0.28} opacity="0.7" transform="translate(-1.4 -1.4)" />
    </g>
  );
}

/** Musht: oltin bilaguzuk + 3D shar */
export function Hand({ d, id, className }) {
  const n = d.match(/-?[\d.]+/g).map(Number);
  const [cx, cy, ex, ey] = [n[n.length - 4], n[n.length - 3], n[n.length - 2], n[n.length - 1]];
  const len = Math.hypot(ex - cx, ey - cy) || 1;
  const [ux, uy] = [(ex - cx) / len, (ey - cy) / len];
  const [bx, by] = [ex - ux * 7, ey - uy * 7];
  const band = `M${bx - uy * 7.5} ${by + ux * 7.5} L${bx + uy * 7.5} ${by - ux * 7.5}`;
  return (
    <g className={className}>
      <path d={band} stroke="#b9861f" strokeWidth="6" strokeLinecap="round" />
      <path d={band} stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx={ex} cy={ey} r="10.5" fill="rgba(255,244,214,0.55)" />
      <circle cx={ex} cy={ey} r="9.5" fill={`url(#${id}ball)`} />
      <ellipse cx={ex - 3} cy={ey - 3.5} rx="3.2" ry="2.2" fill="#fff" opacity="0.35" />
    </g>
  );
}

export function Shoe({ cx, id }) {
  return (
    <g>
      <ellipse cx={cx} cy="182" rx="12" ry="7" fill={GOLD} />
      <ellipse cx={cx} cy="180.5" rx="10.5" ry="6" fill={`url(#${id}ball)`} />
      <ellipse cx={cx - 3} cy="178" rx="4" ry="1.8" fill="#fff" opacity="0.3" />
    </g>
  );
}

/** Qalqon tanasi: ikki tusli yuz, bo'rtma hoshiya, ichki yorug' qirra, yaltiroq dog' */
export function ShieldBody({ id }) {
  return (
    <g>
      <path d={SHIELD} fill={`url(#${id}l)`} />
      <path d={RIGHT_HALF} fill={`url(#${id}r)`} />
      <path d="M100 32 L100 166" stroke="#fff3c0" strokeWidth="1.6" opacity="0.6" />
      <path d={SHIELD} fill="none" stroke="#fff6d8" strokeWidth="2" opacity="0.55" transform="translate(100 98) scale(0.9) translate(-100 -98)" />
      <ellipse cx="72" cy="62" rx="16" ry="9" fill={`url(#${id}gloss)`} transform="rotate(-24 72 62)" />
      <path d={SHIELD} fill="none" stroke="#0e1830" strokeWidth="10" strokeLinejoin="round" />
      <path d={SHIELD} fill="none" stroke={`url(#${id}rim)`} strokeWidth="7" strokeLinejoin="round" />
      <path d="M58 48 C74 47 88 42 100 35" stroke="#7d93c9" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.8" />
    </g>
  );
}
