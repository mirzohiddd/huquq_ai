/**
 * QAHRAMON — oltin qalqoncha (HuquqTech himoyachisi).
 * mood: "cheer" (qo'llar tepada), "happy", "wave", "think", "sad".
 * talking: og'iz qimirlaydi va atrofida oltin chiziqlar chaqnaydi.
 */
import React from "react";
import s from "./Hero.module.css";

const NAVY = "#1b2a4a";
const SHIELD = "M100 30 C84 40 66 44 50 44 C47.8 44 46 45.8 46 48 L46 98 C46 132 70 154 100 168 C130 154 154 132 154 98 L154 48 C154 45.8 152.2 44 150 44 C134 44 116 40 100 30 Z";
const RIGHT_HALF = "M100 30 C116 40 134 44 150 44 C152.2 44 154 45.8 154 48 L154 98 C154 132 130 154 100 168 Z";

/* Qo'llar: [yelka→tirsak→musht] har kayfiyat uchun */
const ARMS = {
  cheer: ["M52 96 Q34 84 28 62", "M148 96 Q166 84 172 62"],
  wave: ["M52 100 Q38 116 34 134", "M148 96 Q166 84 172 62"],
  happy: ["M52 100 Q36 112 30 128", "M148 100 Q164 112 170 128"],
  think: ["M52 100 Q38 116 34 134", "M148 100 Q160 120 128 118"],
  sad: ["M54 104 Q44 122 44 140", "M146 104 Q156 122 156 140"],
};
const end = (d) => d.split(" ").slice(-2).map(Number);

/* Atrofdagi oltin chiziqlar (rasmdagidek) */
const RAYS = [[18, 44, 30, 54], [8, 92, 24, 94], [22, 140, 34, 132], [182, 44, 170, 54], [192, 92, 176, 94], [178, 140, 166, 132], [60, 14, 66, 26], [140, 14, 134, 26]];

export default function Hero({ mood = "happy", size = 140, talking = false }) {
  const arms = ARMS[mood] || ARMS.happy;
  const closedEyes = mood === "cheer" || mood === "happy";
  const showRays = talking || mood === "cheer";
  return (
    <div className={`${s.wrap} ${s[mood] || ""} ${talking ? s.talking : ""}`} style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 200 200" width={size} height={size}>
        <ellipse cx="100" cy="190" rx="38" ry="5" fill="#0b1322" opacity="0.08" />
        {showRays && (
          <g className={s.rays} stroke="#f0b429" strokeWidth="6" strokeLinecap="round">
            {RAYS.map(([x1, y1, x2, y2], i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} style={{ animationDelay: `${i * 0.08}s` }} />)}
          </g>
        )}
        <g className={s.body}>
          {/* oyoqlar */}
          <g stroke={NAVY} strokeWidth="8" strokeLinecap="round" fill={NAVY}>
            <path d="M88 160 L86 178" />
            <path d="M112 160 L114 178" />
            <ellipse cx="82" cy="181" rx="9" ry="5" stroke="none" />
            <ellipse cx="118" cy="181" rx="9" ry="5" stroke="none" />
          </g>
          {/* qo'llar */}
          <g className={s.arms} stroke={NAVY} strokeWidth="9" strokeLinecap="round" fill="none">
            {arms.map((d, i) => <path key={i} d={d} className={i ? s.armR : s.armL} />)}
          </g>
          <g fill={NAVY}>
            {arms.map((d, i) => {
              const [x, y] = end(d);
              return <circle key={i} cx={x} cy={y} r="9" className={i ? s.armR : s.armL} />;
            })}
          </g>
          {/* qalqon */}
          <path d={SHIELD} fill="#f3c75f" />
          <path d={RIGHT_HALF} fill="#e3ac3c" />
          <path d={SHIELD} fill="none" stroke={NAVY} strokeWidth="7" strokeLinejoin="round" />
          <path d="M100 34 L100 164" stroke="#c99232" strokeWidth="1.5" opacity="0.5" />
          {/* yuz */}
          <ellipse cx="72" cy="106" rx="8" ry="5" fill="#f28b82" opacity="0.45" />
          <ellipse cx="128" cy="106" rx="8" ry="5" fill="#f28b82" opacity="0.45" />
          {closedEyes ? (
            <g stroke={NAVY} strokeWidth="5" strokeLinecap="round" fill="none">
              <path d="M74 93 Q82 83 90 93" />
              <path d="M110 93 Q118 83 126 93" />
            </g>
          ) : (
            <g fill={NAVY}>
              <ellipse cx="82" cy={mood === "sad" ? 94 : 90} rx="5.5" ry="7" />
              <ellipse cx="118" cy={mood === "sad" ? 94 : 90} rx="5.5" ry="7" />
              <circle cx="84" cy="87" r="1.8" fill="#fff" />
              <circle cx="120" cy="87" r="1.8" fill="#fff" />
              {mood === "think" && <path d="M110 76 L126 72" stroke={NAVY} strokeWidth="4" strokeLinecap="round" />}
            </g>
          )}
          <g className={s.mouth}>
            {mood === "sad" ? (
              <path d="M88 118 Q100 108 112 118" stroke={NAVY} strokeWidth="5" strokeLinecap="round" fill="none" />
            ) : mood === "think" ? (
              <path d="M92 114 Q100 117 108 113" stroke={NAVY} strokeWidth="5" strokeLinecap="round" fill="none" />
            ) : (
              <>
                <path d="M85 106 Q100 126 115 106 Q100 111 85 106 Z" fill="#7a2230" stroke={NAVY} strokeWidth="3" strokeLinejoin="round" />
                <ellipse cx="100" cy="116" rx="6" ry="3.5" fill="#f2748a" />
              </>
            )}
          </g>
        </g>
      </svg>
    </div>
  );
}
