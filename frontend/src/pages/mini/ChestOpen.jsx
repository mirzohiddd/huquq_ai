/**
 * SANDIQNI OCHISH — to'liq ekran (namunadagi videodek):
 *   1) oltin fon, sandiq silkinadi, atrofida uchqunlar — «Ochish uchun bosing!»;
 *   2) bosilganda qopqoq ochiladi, ichidan nur va uchqunlar otiladi;
 *   3) mukofot: «+N XP» sanab chiqadi → «Davom etish».
 * XP miqdori SERVERDA tasodifiy tanlanadi (1–20, kam XP ko'proq tushadi).
 */
import React, { useEffect, useState } from "react";
import { Zap } from "lucide-react";
import { mini } from "./miniApi";
import { sfx } from "./sound";
import { haptic } from "./tg";
import s from "./ChestOpen.module.css";

const SPARKS = Array.from({ length: 14 }, (_, i) => i);

function BigChest({ open }) {
  return (
    <svg viewBox="0 0 200 180" className={s.chest} aria-hidden="true">
      <defs>
        <linearGradient id="cbody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f6cf6e" /><stop offset="1" stopColor="#c98f2c" /></linearGradient>
        <linearGradient id="clid" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffe08f" /><stop offset="1" stopColor="#e0a843" /></linearGradient>
        <radialGradient id="cglow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stopColor="#fff7d6" /><stop offset="1" stopColor="#fff7d6" stopOpacity="0" /></radialGradient>
      </defs>
      <ellipse cx="100" cy="170" rx="70" ry="8" fill="#5c3d0a" opacity="0.25" />
      {open && <ellipse className={s.glow} cx="100" cy="84" rx="90" ry="70" fill="url(#cglow)" />}
      <rect x="28" y="80" width="144" height="86" rx="14" fill="url(#cbody)" stroke="#1b2a4a" strokeWidth="6" />
      <rect x="28" y="130" width="144" height="36" rx="12" fill="#b97f22" opacity="0.55" />
      <rect x="88" y="80" width="24" height="86" fill="#1b2a4a" />
      {open && <ellipse cx="100" cy="84" rx="64" ry="12" fill="#6b4410" />}
      <g className={open ? s.lidOpen : s.lid}>
        <path d="M24 86 Q24 30 100 30 Q176 30 176 86 Z" fill="url(#clid)" stroke="#1b2a4a" strokeWidth="6" strokeLinejoin="round" />
        <path d="M88 30 h24 v56 h-24 Z" fill="#1b2a4a" />
        <path d="M44 62 Q60 42 92 38" stroke="#fff6d0" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.7" />
        {!open && <rect x="84" y="74" width="32" height="28" rx="6" fill="#ffd970" stroke="#1b2a4a" strokeWidth="5" />}
      </g>
    </svg>
  );
}

export default function ChestOpen({ unit, ctx }) {
  const { t } = ctx;
  const [stage, setStage] = useState("ready"); // ready | opening | prize
  const [xp, setXp] = useState(0);
  const [shown, setShown] = useState(0);
  const [err, setErr] = useState("");

  const open = async () => {
    if (stage !== "ready") return;
    haptic("medium");
    setStage("opening");
    try {
      const [r] = await Promise.all([mini.chest(unit), new Promise((ok) => setTimeout(ok, 900))]);
      setXp(r.xp || 0);
      sfx("unit");
      setStage("prize");
    } catch (e) {
      if (e?.response?.data?.plan) return ctx.openPlans();
      setErr(e?.response?.data?.error || t.error);
      setStage("prize");
    }
  };

  // «+N XP» sanab chiqadi
  useEffect(() => {
    if (stage !== "prize" || !xp) return undefined;
    let n = 0;
    const id = setInterval(() => {
      n += 1;
      setShown(n);
      if (n >= xp) clearInterval(id);
    }, Math.max(30, 700 / xp));
    return () => clearInterval(id);
  }, [stage, xp]);

  if (stage === "prize") {
    return (
      <div className={`${s.screen} ${s.prizeBg}`}>
        <div className={s.center}>
          <div className={s.prize}><Zap aria-hidden="true" /></div>
          <b className={s.amount}>{err ? "—" : `+${shown} XP`}</b>
          <p className={s.note}>{err || (xp ? t.chest.got(xp) : t.chest.empty)}</p>
        </div>
        <div className={s.footer}>
          <button type="button" className={s.btn} onClick={ctx.close}>{t.streak.next}</button>
        </div>
      </div>
    );
  }

  return (
    <button type="button" className={`${s.screen} ${s.goldBg} ${stage === "opening" ? s.opening : ""}`} onClick={open} aria-label={t.chest.ready}>
      <span className={s.tag}>{t.chest.title}</span>
      <span className={`${s.chestBox} ${stage === "opening" ? s.burst : s.wiggle}`}>
        <BigChest open={stage === "opening"} />
        {SPARKS.map((i) => <i key={i} className={s.spark} style={{ "--a": `${i * 26}deg`, "--d": `${(i % 5) * 0.22}s` }} />)}
      </span>
      <span className={s.tapHint}>{t.chest.tap}</span>
    </button>
  );
}
