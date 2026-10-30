/**
 * QALQONCHA POZALARI — yo'l yonida turli ishlar bilan band qahramon
 * (kitob o'qiydi, telefonda gaplashadi, musiqa tinglaydi, sud bolg'achasini
 * uradi, lupa bilan qidiradi, tarozi ushlaydi). Har pozaning o'z qo'l
 * holati va o'z animatsiyasi bor (Hero.module.css: `.p_<poza>`).
 */
import React from "react";

const NAVY = "#1b2a4a";
const GOLD = "#e0b060";

export const POSES = {
  book: {
    arms: ["M52 100 Q58 128 78 136", "M148 100 Q142 128 122 136"],
    front: (
      <g className="prop" style={{ transformOrigin: "100px 140px" }}>
        <path d="M66 124 L100 132 L134 124 L134 152 L100 160 L66 152 Z" fill={NAVY} />
        <path d="M70 126 L98 133 L98 156 L70 149 Z" fill="#fffaf0" />
        <path d="M102 133 L130 126 L130 149 L102 156 Z" fill="#fff3dc" />
        <path d="M76 134 L92 138 M76 141 L92 145 M108 138 L124 134 M108 145 L124 141" stroke="#c9b48a" strokeWidth="2" strokeLinecap="round" />
      </g>
    ),
  },
  phone: {
    arms: ["M52 100 Q36 112 30 128", "M148 100 Q174 92 158 72"],
    front: (
      <g className="prop" style={{ transformOrigin: "158px 72px" }}>
        <rect x="148" y="50" width="20" height="34" rx="5" fill={NAVY} />
        <rect x="151" y="54" width="14" height="24" rx="2" fill={GOLD} />
        <circle cx="158" cy="81" r="1.6" fill={GOLD} />
      </g>
    ),
  },
  music: {
    arms: ["M52 100 Q36 112 30 128", "M148 100 Q164 112 170 128"],
    back: (
      <g>
        <path d="M50 74 C50 22 150 22 150 74" stroke={NAVY} strokeWidth="8" fill="none" strokeLinecap="round" />
        <rect x="38" y="64" width="16" height="26" rx="7" fill={NAVY} />
        <rect x="146" y="64" width="16" height="26" rx="7" fill={NAVY} />
      </g>
    ),
    front: (
      <g className="notes" fill={GOLD}>
        <path d="M168 40 v-16 l10 -3 v16" stroke={GOLD} strokeWidth="3" fill="none" />
        <circle cx="165" cy="40" r="4" />
        <circle cx="175" cy="37" r="4" />
        <path d="M28 52 v-14" stroke={GOLD} strokeWidth="3" />
        <circle cx="25" cy="52" r="4" />
      </g>
    ),
  },
  gavel: {
    arms: ["M52 100 Q36 112 30 128", "M148 96 Q172 86 170 60"],
    front: (
      <g className="prop" style={{ transformOrigin: "170px 60px" }}>
        <rect x="167" y="26" width="6" height="38" rx="3" fill="#8b5a2b" />
        <rect x="156" y="18" width="28" height="14" rx="4" fill={NAVY} />
        <rect x="160" y="20" width="4" height="10" fill={GOLD} />
        <rect x="176" y="20" width="4" height="10" fill={GOLD} />
      </g>
    ),
  },
  search: {
    arms: ["M52 100 Q36 112 30 128", "M148 102 Q172 110 168 132"],
    front: (
      <g className="prop" style={{ transformOrigin: "168px 132px" }}>
        <path d="M168 132 L180 150" stroke="#8b5a2b" strokeWidth="7" strokeLinecap="round" />
        <circle cx="160" cy="120" r="15" fill="rgba(224,176,96,0.28)" stroke={NAVY} strokeWidth="5" />
        <path d="M152 114 Q156 108 162 108" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
    ),
  },
  scales: {
    arms: ["M52 100 Q36 112 30 128", "M148 96 Q166 84 170 60"],
    front: (
      <g className="prop" style={{ transformOrigin: "170px 40px" }}>
        <path d="M170 60 L170 34 M146 38 L194 38" stroke={NAVY} strokeWidth="4" strokeLinecap="round" />
        <path d="M146 38 L138 58 M146 38 L154 58 M194 38 L186 58 M194 38 L202 58" stroke={NAVY} strokeWidth="2" />
        <path d="M136 58 Q146 68 156 58 Z M184 58 Q194 68 204 58 Z" fill={GOLD} stroke={NAVY} strokeWidth="2" />
      </g>
    ),
  },
};

export const POSE_NAMES = Object.keys(POSES);
