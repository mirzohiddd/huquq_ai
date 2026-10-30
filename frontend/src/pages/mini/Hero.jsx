/**
 * QAHRAMON — oltin qalqoncha (HuquqTech himoyachisi).
 * mood: "cheer" (qo'llar tepada), "happy", "wave", "think", "sad".
 * talking: og'iz qimirlaydi va atrofida oltin chiziqlar chaqnaydi.
 * pose: yo'l yonidagi ish-harakat (HeroProps.jsx) — "book", "phone", "music"…
 *
 * 3D ko'rinish (gradient, yorug'lik, soya) — HeroParts.jsx. Qo'l-oyoqlar
 * to'q ko'k fonda ham ko'rinishi uchun yupqa och hoshiya bilan chiziladi.
 */
import React, { useId } from "react";
import { POSES } from "./HeroProps";
import { HeroDefs, Limb, Hand, Shoe, ShieldBody, NAVY } from "./HeroParts";
import s from "./Hero.module.css";

/* Qo'llar: [yelka→tirsak→musht] har kayfiyat uchun */
const ARMS = {
  cheer: ["M52 96 Q34 84 28 62", "M148 96 Q166 84 172 62"],
  wave: ["M52 100 Q38 116 34 134", "M148 96 Q166 84 172 62"],
  happy: ["M52 100 Q36 112 30 128", "M148 100 Q164 112 170 128"],
  think: ["M52 100 Q38 116 34 134", "M148 100 Q160 120 128 118"],
  sad: ["M54 104 Q44 122 44 140", "M146 104 Q156 122 156 140"],
};

/* Atrofdagi oltin chiziqlar (rasmdagidek) */
const RAYS = [[18, 44, 30, 54], [8, 92, 24, 94], [22, 140, 34, 132], [182, 44, 170, 54], [192, 92, 176, 94], [178, 140, 166, 132], [60, 14, 66, 26], [140, 14, 134, 26]];

export default function Hero({ mood = "happy", size = 140, talking = false, pose = null }) {
  const id = `h${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const P = pose && POSES[pose];
  const arms = P?.arms || ARMS[mood] || ARMS.happy;
  const hands = <g>{arms.map((d, i) => <Hand key={i} d={d} id={id} className={i ? s.armR : s.armL} />)}</g>;
  const closedEyes = mood === "cheer" || mood === "happy";
  const showRays = talking || mood === "cheer";
  return (
    <div className={`${s.wrap} ${s[mood] || ""} ${P ? s[`p_${pose}`] : ""} ${talking ? s.talking : ""}`} style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 200 200" width={size} height={size}>
        <HeroDefs id={id} />
        <ellipse cx="100" cy="190" rx="44" ry="7" fill={`url(#${id}shadow)`} />
        {showRays && (
          <g className={s.rays} stroke="#f0b429" strokeWidth="6" strokeLinecap="round">
            {RAYS.map(([x1, y1, x2, y2], i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} style={{ animationDelay: `${i * 0.08}s` }} />)}
          </g>
        )}
        <g className={s.body}>
          {/* oyoqlar */}
          <Limb d="M88 158 L86 176" w={10} />
          <Limb d="M112 158 L114 176" w={10} />
          <Shoe cx={84} id={id} />
          <Shoe cx={116} id={id} />
          {P?.back}
          {/* qo'llar */}
          {arms.map((d, i) => <Limb key={i} d={d} w={11} className={i ? s.armR : s.armL} />)}
          {!P && hands}
          {/* qalqon */}
          <ShieldBody id={id} />
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
              <circle cx="84" cy="87" r="2.2" fill="#fff" />
              <circle cx="120" cy="87" r="2.2" fill="#fff" />
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
          {P?.front}
          {P && hands /* pozada qo'llar narsani OLDINDAN ushlaydi */}
        </g>
      </svg>
    </div>
  );
}
