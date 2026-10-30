/**
 * QAHRAMON — mini app maskoti (inline SVG, tashqi rasm yo'q).
 * mood: "wave" (salom), "think" (o'ylayapti), "happy", "cheer" (bayram — sakrash + konfetti).
 */
import React from "react";
import s from "./Hero.module.css";

const CONFETTI = ["#c9953a", "#e0b060", "#1e2d4a", "#1a7a45", "#e86a5a", "#5b8def"];

export default function Hero({ mood = "happy", size = 140 }) {
  const cheer = mood === "cheer";
  return (
    <div className={`${s.wrap} ${s[mood] || ""}`} style={{ width: size, height: size }} aria-hidden="true">
      {cheer && (
        <div className={s.confetti}>
          {Array.from({ length: 18 }, (_, i) => (
            <i key={i} style={{ "--i": i, "--c": CONFETTI[i % CONFETTI.length] }} />
          ))}
        </div>
      )}
      <svg viewBox="0 0 160 160" className={s.svg}>
        <ellipse cx="80" cy="150" rx="40" ry="6" className={s.shadow} />
        <g className={s.body}>
          {/* tana */}
          <path d="M40 92c0-24 18-40 40-40s40 16 40 40v28c0 12-10 22-22 22H62c-12 0-22-10-22-22z" fill="#162035" />
          <path d="M58 118h44v10a6 6 0 0 1-6 6H64a6 6 0 0 1-6-6z" fill="#c9953a" />
          <path d="M66 124h28" stroke="#0b1322" strokeWidth="2" strokeLinecap="round" />
          {/* yuz */}
          <circle cx="80" cy="64" r="34" fill="#f3d9b6" />
          <path d="M46 60c2-22 18-32 34-32s32 10 34 32c-10-8-22-12-34-12s-24 4-34 12z" fill="#0b1322" />
          <path d="M60 30h40l-4 10H64z" fill="#c9953a" />
          <g className={s.eyes}>
            <circle cx="68" cy="66" r="4" fill="#0b1322" />
            <circle cx="92" cy="66" r="4" fill="#0b1322" />
            <circle cx="69.5" cy="64.5" r="1.3" fill="#fff" />
            <circle cx="93.5" cy="64.5" r="1.3" fill="#fff" />
          </g>
          {mood === "think" ? (
            <path d="M72 82h16" stroke="#8b4a2b" strokeWidth="3" strokeLinecap="round" />
          ) : (
            <path d="M70 79c5 6 15 6 20 0" stroke="#8b4a2b" strokeWidth="3" fill="none" strokeLinecap="round" />
          )}
          <circle cx="60" cy="76" r="4" fill="#f0a98e" opacity="0.6" />
          <circle cx="100" cy="76" r="4" fill="#f0a98e" opacity="0.6" />
          {/* qo'llar */}
          <g className={s.armL}>
            <path d="M42 96c-10 2-16 10-16 18" stroke="#162035" strokeWidth="10" strokeLinecap="round" fill="none" />
            <circle cx="26" cy="116" r="7" fill="#f3d9b6" />
          </g>
          <g className={s.armR}>
            <path d="M118 96c10-4 16-14 18-24" stroke="#162035" strokeWidth="10" strokeLinecap="round" fill="none" />
            <circle cx="137" cy="70" r="7" fill="#f3d9b6" />
          </g>
          {/* kitob (brend belgisi) */}
          <path d="M66 100l14 4 14-4v14l-14 4-14-4z" fill="#fdf5e6" stroke="#c9953a" strokeWidth="2" strokeLinejoin="round" />
          <path d="M80 104v14" stroke="#c9953a" strokeWidth="2" />
        </g>
        {mood === "think" && (
          <g className={s.bubble}>
            <circle cx="128" cy="34" r="12" fill="#fff" stroke="#e0b060" strokeWidth="2" />
            <text x="128" y="39" textAnchor="middle" fontSize="15" fontWeight="700" fill="#8b6419">?</text>
          </g>
        )}
      </svg>
    </div>
  );
}
