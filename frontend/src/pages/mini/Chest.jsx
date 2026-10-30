/**
 * SANDIQ — bo'lim yo'lidagi bonus (3-darsdan keyin). Yopiq / ochishga tayyor
 * (silkinadi) / ochilgan (qopqog'i ochiq, ichida oltin).
 */
import React from "react";
import s from "./PathNodes.module.css";

const NAVY = "#1b2a4a";

export default function Chest({ status, size = 74 }) {
  const open = status === "done";
  const grey = status === "locked";
  const body = grey ? "#d9d5cc" : "#e0b060";
  const dark = grey ? "#bdb8ad" : "#b8862f";
  const band = grey ? "#a8a397" : NAVY;
  return (
    <svg viewBox="0 0 100 90" width={size} height={size * 0.9} className={`${s.chestSvg} ${status === "open" ? s.chestReady : ""}`} aria-hidden="true">
      <ellipse cx="50" cy="86" rx="34" ry="4" fill="#0b1322" opacity="0.1" />
      <rect x="14" y="40" width="72" height="44" rx="7" fill={body} />
      <rect x="14" y="66" width="72" height="18" rx="7" fill={dark} />
      <rect x="44" y="40" width="12" height="44" fill={band} />
      {open ? (
        <g>
          <ellipse cx="50" cy="42" rx="30" ry="7" fill="#7a5418" />
          <circle cx="38" cy="40" r="6" fill="#f6d27a" />
          <circle cx="52" cy="37" r="7" fill="#ffe29a" />
          <circle cx="63" cy="41" r="5" fill="#f6d27a" />
          <path d="M16 38 L22 8 Q50 0 78 8 L84 38 Z" fill={body} transform="rotate(-24 16 38)" />
        </g>
      ) : (
        <g className={s.lid}>
          <path d="M12 42 Q12 14 50 14 Q88 14 88 42 Z" fill={body} />
          <path d="M44 14 h12 v28 h-12 Z" fill={band} />
          <rect x="42" y="36" width="16" height="14" rx="3" fill={grey ? "#8f8a7f" : "#f3c75f"} stroke={band} strokeWidth="2.5" />
        </g>
      )}
    </svg>
  );
}
