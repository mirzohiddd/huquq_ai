import React, { useEffect, useRef } from "react";
import { faceFor, mouthPath } from "./robotFace";
import s from "./RobotHead.module.css";

const EYES = [
  { cx: 122, side: -1 },
  { cx: 198, side: 1 },
];
const EYE_Y = 160;

/**
 * Robot boshi (SVG). His-tuyg'u — `emotion`, holat — `state`
 * ("idle" | "listening" | "thinking" | "speaking").
 *
 * Og'iz va antenna har kadrda `levelRef` (ijro etilayotgan ovoz) yoki
 * `micRef` (mikrofon) balandligidan yangilanadi — React qayta chizilmaydi,
 * faqat atribut o'zgaradi (60 fps, arzon).
 */
export default function RobotHead({ emotion = "neutral", state = "idle", levelRef, micRef, size = 320 }) {
  const f = faceFor(emotion, state);
  const mouthRef = useRef(null);
  const bulbRef = useRef(null);
  const faceRef = useRef(f);
  faceRef.current = f;
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    let raf = 0;
    let open = 0;
    const tick = (t) => {
      const st = stateRef.current;
      let target = 0;
      if (st === "speaking") {
        const lv = levelRef?.current ?? 0;
        target = lv > 0.01 ? Math.min(1, lv * 1.6) : 0.12 + 0.12 * Math.sin(t / 90);
      } else if (st === "listening") {
        target = Math.min(0.35, (micRef?.current || 0) * 0.8);
      }
      open += (target - open) * 0.35;
      const face = faceRef.current;
      mouthRef.current?.setAttribute("d", mouthPath(face.smile, Math.max(0, open)));
      const lv = st === "listening" ? micRef?.current || 0 : st === "speaking" ? levelRef?.current || 0 : 0;
      bulbRef.current?.setAttribute("r", String(9 + lv * 7));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [levelRef, micRef]);

  const lookX = f.lookX || 0;
  const lookY = f.lookY || 0;
  const cls = [s.robot, s[`st_${state}`], s[`em_${emotion}`], f.shake && state !== "thinking" ? s.shake : ""].join(" ");

  return (
    <svg
      className={cls}
      viewBox="0 0 320 340"
      width={size}
      height={(size * 340) / 320}
      style={{ "--c": f.color, "--tint": f.tint || "transparent" }}
      role="img"
      aria-label="HuquqTech robot yordamchisi"
    >
      <defs>
        <linearGradient id="rb-shell" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.55" stopColor="#e7ebf3" />
          <stop offset="1" stopColor="#b9c2d4" />
        </linearGradient>
        <linearGradient id="rb-visor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#141c30" />
          <stop offset="1" stopColor="#05080f" />
        </linearGradient>
        <radialGradient id="rb-glow" cx="0.5" cy="0.55" r="0.6">
          <stop offset="0" className={s.glowStop} stopOpacity="0.5" />
          <stop offset="1" className={s.glowStop} stopOpacity="0" />
        </radialGradient>
        <filter id="rb-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.2" />
        </filter>
        <clipPath id="rb-visor-clip">
          <rect x="70" y="100" width="180" height="140" rx="52" />
        </clipPath>
      </defs>

      <ellipse className={s.shadow} cx="160" cy="326" rx="92" ry="9" />

      <g className={s.float}>
        <g className={s.tilt} style={{ transform: `rotate(${f.tilt || 0}deg)` }}>
          {/* Antenna */}
          <rect x="157" y="30" width="6" height="36" rx="3" fill="#aab4c8" />
          <circle className={s.bulbGlow} cx="160" cy="26" r="16" />
          <circle ref={bulbRef} className={s.bulb} cx="160" cy="26" r="9" />

          {/* Quloqlar */}
          {[22, 266].map((x) => (
            <g key={x}>
              <rect x={x} y="134" width="32" height="74" rx="13" fill="url(#rb-shell)" />
              <rect x={x + 10} y="148" width="12" height="46" rx="6" className={s.led} />
            </g>
          ))}

          {/* Bo'yin */}
          <rect x="128" y="270" width="64" height="26" rx="10" fill="#c3cbdb" />
          <rect x="120" y="290" width="80" height="12" rx="6" className={s.collar} />

          {/* Korpus */}
          <rect x="44" y="62" width="232" height="216" rx="80" fill="url(#rb-shell)" />
          <rect x="44" y="62" width="232" height="216" rx="80" className={s.tint} />
          <path d="M 92 84 Q 160 62 228 84" className={s.rim} />

          {/* Visor */}
          <rect x="70" y="100" width="180" height="140" rx="52" fill="url(#rb-visor)" className={s.visor} />
          <g clipPath="url(#rb-visor-clip)">
            <ellipse cx="160" cy="176" rx="110" ry="86" fill="url(#rb-glow)" />
            <path d="M 78 118 Q 120 104 170 106" className={s.glare} />

            {/* Ko'zlar */}
            <g className={state === "idle" || state === "speaking" ? s.blink : ""} transform={`translate(${lookX} ${lookY})`}>
              {EYES.map(({ cx, side }) =>
                f.eye === "arc" ? (
                  <path key={cx} d={`M ${cx - 16} ${EYE_Y + 5} Q ${cx} ${EYE_Y - 15} ${cx + 16} ${EYE_Y + 5}`} className={s.eyeArc} />
                ) : (
                  <g key={cx}>
                    <ellipse cx={cx} cy={EYE_Y} rx="17" ry={f.ry} className={s.eyeGlow} filter="url(#rb-blur)" />
                    <ellipse cx={cx} cy={EYE_Y} rx="16" ry={f.ry} className={s.eye} />
                    <circle cx={cx + 5} cy={EYE_Y - 5} r="3.6" fill="#fff" opacity="0.85" />
                    {f.lid !== 0 && (
                      <rect
                        x={cx - 26}
                        y={EYE_Y - 44}
                        width="52"
                        height="34"
                        fill="#0a0f1c"
                        style={{
                          transformOrigin: `${cx}px ${EYE_Y - 10}px`,
                          transform: `rotate(${f.lid * 28 * -side}deg) translateY(${Math.abs(f.lid) * 9}px)`,
                        }}
                      />
                    )}
                  </g>
                ),
              )}
            </g>

            {/* Qoshlar */}
            {EYES.map(({ cx, side }, i) => {
              const raise = f.browSkew && i === 0 ? -9 : 0;
              return (
                <line
                  key={cx}
                  x1={cx - 15}
                  y1={EYE_Y - 30 + raise}
                  x2={cx + 15}
                  y2={EYE_Y - 30 + raise}
                  className={s.brow}
                  style={{ transformOrigin: `${cx}px ${EYE_Y - 30}px`, transform: `rotate(${f.brow * -side}deg)` }}
                />
              );
            })}

            {/* Yonoqlar */}
            {[96, 224].map((x) => (
              <ellipse key={x} cx={x} cy="198" rx="17" ry="8" className={s.cheek} style={{ opacity: f.blush }} />
            ))}

            {/* Og'iz */}
            <path ref={mouthRef} d={mouthPath(f.smile, 0)} className={s.mouth} />

            {f.tear && <path d="M 112 182 q -5 9 0 13 q 5 -4 0 -13 z" className={s.tear} />}
            {state === "thinking" && (
              <g className={s.dots}>
                {[146, 160, 174].map((x, i) => (
                  <circle key={x} cx={x} cy="226" r="3.4" style={{ animationDelay: `${i * 0.16}s` }} />
                ))}
              </g>
            )}
          </g>
        </g>
      </g>
    </svg>
  );
}
