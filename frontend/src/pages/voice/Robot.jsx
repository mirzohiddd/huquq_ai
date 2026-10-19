import { useEffect, useRef } from "react";
import s from "./Robot.module.css";

/**
 * Ovozli yordamchi roboti (2026-10-19) — oq dubulg'a, qora visor ichida
 * piksel (LED) yuz, quloqchinlar, "AI" yozuvli tana, ko'k poydevor.
 * Butunlay SVG: rasm fayli yo'q, har qanday o'lchamda tiniq.
 *
 * Jonli qismlar `requestAnimationFrame` da React render'siz yangilanadi:
 * og'iz — gapirayotganda ovoz balandligi (`levelRef`), tinglayotganda
 * mikrofon balandligi (`micRef`) quloq chiroqlari va halqaga `--lv` orqali.
 */
/* Og'iz: yuqori egri chiziq `curve`, pastki chiziq undan `open` qadar past.
   Tabassum — curve 14; xafa — teskari; o'ylayapti — deyarli to'g'ri chiziq. */
const mouthPath = (open, curve, w = 30) => {
  const y = 150;
  return `M${200 - w} ${y} Q200 ${y + curve} ${200 + w} ${y} Q200 ${y + curve + open} ${200 - w} ${y} Z`;
};

export default function Robot({ state, emotion, levelRef, micRef }) {
  const wrapRef = useRef(null);
  const mouthRef = useRef(null);
  const sad = emotion === "sad";

  useEffect(() => {
    let raf = 0;
    let shown = 0;
    const tick = () => {
      const lv = state === "speaking" ? levelRef.current : state === "listening" ? micRef.current : 0;
      shown += (lv - shown) * 0.35; // silliqlash — og'iz titramasin
      wrapRef.current?.style.setProperty("--lv", shown.toFixed(3));
      let d;
      if (state === "speaking") d = mouthPath(5 + shown * 24, 8);
      else if (state === "thinking") d = mouthPath(6, 0, 12);
      else if (sad) d = mouthPath(6, -12, 24);
      else d = mouthPath(9, 14);
      mouthRef.current?.setAttribute("d", d);
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(raf);
  }, [state, sad, levelRef, micRef]);

  const happy = emotion === "happy" && state === "idle";

  return (
    <div ref={wrapRef} className={s.wrap} data-state={state} data-emotion={emotion}>
      <span className={s.halo} aria-hidden="true" />
      <svg className={s.svg} viewBox="0 0 400 500" aria-hidden="true">
        <defs>
          <linearGradient id="rbShell" x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.65" stopColor="#eef3fb" />
            <stop offset="1" stopColor="#cdd9ec" />
          </linearGradient>
          <linearGradient id="rbVisor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#13234a" />
            <stop offset="1" stopColor="#050c22" />
          </linearGradient>
          <linearGradient id="rbPod" x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0" stopColor="#5b9dff" />
            <stop offset="1" stopColor="#1d4ed8" />
          </linearGradient>
          <pattern id="rbGrid" width="5" height="5" patternUnits="userSpaceOnUse">
            <rect width="4" height="4" rx="0.8" fill="#fff" />
          </pattern>
          <mask id="rbPixels">
            <rect x="100" y="50" width="200" height="150" fill="url(#rbGrid)" />
          </mask>
          <filter id="rbGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="rbShadow" x="-50%" y="-200%" width="200%" height="500%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>

        <ellipse className={s.shadow} cx="200" cy="482" rx="86" ry="11" filter="url(#rbShadow)" />

        <g className={s.bot}>
          {/* O'ng qo'l (pastda) */}
          <g>
            <line x1="282" y1="262" x2="312" y2="314" stroke="url(#rbShell)" strokeWidth="30" strokeLinecap="round" />
            <circle cx="312" cy="314" r="13" fill="#d6deeb" stroke="#9fb0c9" strokeWidth="2" />
            <line x1="312" y1="314" x2="318" y2="378" stroke="url(#rbShell)" strokeWidth="27" strokeLinecap="round" />
            <line x1="317" y1="366" x2="318" y2="382" stroke="#3b82f6" strokeWidth="27" strokeLinecap="round" />
            <rect x="305" y="386" width="28" height="22" rx="8" fill="#3a4354" />
            {[[309, 406, 307, 428], [319, 408, 319, 432], [329, 406, 333, 427]].map(([a, b, c, d]) => (
              <line key={a} x1={a} y1={b} x2={c} y2={d} stroke="#2a3140" strokeWidth="7" strokeLinecap="round" />
            ))}
          </g>

          {/* Tana */}
          <rect x="128" y="232" width="144" height="140" rx="38" fill="url(#rbShell)" />
          <path d="M150 250 h18 M232 250 h18" stroke="#c3cfe2" strokeWidth="3" strokeLinecap="round" />
          <text x="200" y="324" textAnchor="middle" className={s.ai}>AI</text>
          <rect className={s.band} x="134" y="358" width="132" height="12" rx="6" />
          <path d="M138 372 H262 Q262 422 200 452 Q138 422 138 372 Z" fill="url(#rbPod)" />
          <path d="M156 384 Q160 414 192 436" stroke="#bcd6ff" strokeOpacity="0.55" strokeWidth="5" fill="none" strokeLinecap="round" />

          {/* Chap qo'l (silkitadi) */}
          <g>
            <line x1="118" y1="262" x2="82" y2="304" stroke="url(#rbShell)" strokeWidth="30" strokeLinecap="round" />
            <circle cx="82" cy="304" r="13" fill="#d6deeb" stroke="#9fb0c9" strokeWidth="2" />
            <g className={s.forearm}>
              <line x1="82" y1="304" x2="74" y2="236" stroke="url(#rbShell)" strokeWidth="27" strokeLinecap="round" />
              <line x1="75" y1="246" x2="74" y2="232" stroke="#3b82f6" strokeWidth="27" strokeLinecap="round" />
              <rect x="58" y="196" width="32" height="28" rx="10" fill="#3a4354" />
              {[[62, 198, 55, 172], [70, 196, 67, 164], [78, 196, 80, 165], [86, 199, 92, 175]].map(([a, b, c, d]) => (
                <line key={a} x1={a} y1={b} x2={c} y2={d} stroke="#2a3140" strokeWidth="7.5" strokeLinecap="round" />
              ))}
              <line x1="89" y1="214" x2="102" y2="202" stroke="#2a3140" strokeWidth="7.5" strokeLinecap="round" />
            </g>
          </g>
          <circle cx="118" cy="262" r="14" fill="#e7edf6" stroke="#b7c5da" strokeWidth="2" />
          <circle cx="282" cy="262" r="14" fill="#e7edf6" stroke="#b7c5da" strokeWidth="2" />

          {/* Bo'yin */}
          <rect x="176" y="212" width="48" height="24" rx="9" fill="#1d2a44" />
          <rect x="176" y="222" width="48" height="4" fill="#3b82f6" opacity="0.7" />

          {/* Bosh */}
          <g className={s.head}>
            <rect x="80" y="66" width="11" height="40" rx="5.5" fill="url(#rbShell)" />
            <rect x="309" y="66" width="11" height="40" rx="5.5" fill="url(#rbShell)" />
            <rect x="88" y="30" width="224" height="190" rx="86" fill="url(#rbShell)" />
            {[84, 316].map((cx) => (
              <g key={cx}>
                <circle cx={cx} cy="126" r="31" fill="#2f6bff" />
                <circle cx={cx} cy="126" r="20" fill="#eaf1fb" />
                <circle className={s.earLight} cx={cx} cy="126" r="9" />
              </g>
            ))}
            <rect x="110" y="58" width="180" height="136" rx="60" fill="url(#rbVisor)" stroke="#2f7bff" strokeWidth="6" />
            <path d="M136 82 Q160 66 196 66" stroke="#fff" strokeOpacity="0.16" strokeWidth="8" fill="none" strokeLinecap="round" />

            <g className={s.face} mask="url(#rbPixels)" filter="url(#rbGlow)">
              <g className={s.eyes}>
                {happy ? (
                  <path d="M150 128 Q166 104 182 128 M218 128 Q234 104 250 128" stroke="currentColor" strokeWidth="10" fill="none" strokeLinecap="round" />
                ) : (
                  <>
                    <rect className={s.eye} x="150" y="98" width="32" height="40" rx="12" />
                    <rect className={s.eye} x="218" y="98" width="32" height="40" rx="12" />
                  </>
                )}
              </g>
              <path ref={mouthRef} className={s.mouth} d={mouthPath(9, 14)} />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
