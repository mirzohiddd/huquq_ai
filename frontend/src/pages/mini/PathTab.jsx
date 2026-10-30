/**
 * O'RGANISH — yo'l shaklidagi darslar xaritasi: tugatilgan, ochiq va yopiq bosqichlar.
 */
import React, { useEffect, useState } from "react";
import { Check, Lock, Star, ShoppingBag, Briefcase, Heart, Shield, Target, Library, ClipboardList, GraduationCap } from "lucide-react";
import Hero from "./Hero";
import { haptic } from "./tg";
import { iconOf } from "./icons";
import m from "./Mini.module.css";
import s from "./Path.module.css";
import st from "./Steps.module.css";

const UNIT_ICON = { consumer: ShoppingBag, labor: Briefcase, family: Heart, online: Shield };
const OFFSET = [0, 54, 74, 40, -20, -60, -40]; // ilon izi bo'ylab bosqichlar

const STOP_H = 128; // .stop balandligi (Path.module.css) — chiziq doira markazidan o'tadi
const NODE_Y = 49;

/* Bosqichlarni bog'laydigan egri yo'l: o'tilgan qismi oltin, qolgani shtrix. */
function RoadLine({ offsets, done }) {
  const pts = offsets.map((x, i) => [x, NODE_Y + i * STOP_H]);
  const d = (list) => list.map(([x, y], i) => (i ? `Q ${list[i - 1][0]} ${y - STOP_H / 2} ${x} ${y}` : `M ${x} ${y}`)).join(" ");
  return (
    <svg className={s.line} aria-hidden="true">
      <path d={d(pts)} className={s.lineRest} />
      {done > 0 && <path d={d(pts.slice(0, Math.min(done + 1, pts.length)))} className={s.lineDone} />}
    </svg>
  );
}

export default function PathTab({ ctx }) {
  const { t, path } = ctx;
  const [hint, setHint] = useState(null);
  useEffect(() => {
    if (!hint) return undefined;
    const id = setTimeout(() => setHint(null), 1800);
    return () => clearTimeout(id);
  }, [hint]);
  if (!path) return null;

  const goalPct = Math.min(100, Math.round(((path.todayXp || 0) / (path.goal || 20)) * 100));
  let n = 0;

  return (
    <div className={m.fadeIn}>
      <section className={s.top}>
        <div>
          <div className={s.level}>{t.level} {path.level?.level} · {path.level?.name}</div>
          <div className={s.goalRow}>
            <Target aria-hidden="true" />
            <span>{t.goal}: <b>{path.todayXp || 0}</b> / {path.goal} XP</span>
          </div>
          <div className={s.bar}><i style={{ width: `${goalPct}%` }} /></div>
        </div>
        <Hero mood={goalPct >= 100 ? "cheer" : "wave"} size={92} />
      </section>

      {/* Saytdagi barcha darslar va testlar */}
      <div className={s.more}>
        <button type="button" onClick={() => ctx.openLibrary()}>
          <Library aria-hidden="true" /><b>{t.lib.lessons}</b>
        </button>
        <button type="button" onClick={ctx.openTests}>
          <ClipboardList aria-hidden="true" /><b>{t.lib.tests}</b>
        </button>
      </div>

      {path.units.map((u) => {
        const Icon = UNIT_ICON[u.key] || iconOf(u.icon, Star);
        const doneCount = u.lessons.filter((l) => l.status === "done").length;
        return (
          <section key={u.key} className={s.unit}>
            <div className={s.unitHead}>
              <span className={s.unitIcon}><Icon aria-hidden="true" /></span>
              <div>
                <h2>{u.title}</h2>
                <small>{doneCount} / {u.lessons.length}{u.level && <span className={s.level}>{u.level}</span>}</small>
              </div>
            </div>
            <ol className={s.road}>
              <RoadLine offsets={u.lessons.map((_, i) => OFFSET[(n + i) % OFFSET.length])} done={doneCount} />
              {u.lessons.map((l) => {
                const off = OFFSET[n++ % OFFSET.length];
                const locked = l.status === "locked";
                const onClick = () => {
                  if (locked) {
                    haptic("error");
                    return setHint(l.id);
                  }
                  haptic("light");
                  ctx.openLesson(l.id);
                };
                return (
                  <li key={l.id} className={s.stop} style={{ "--x": `${off}px` }}>
                    <button type="button" className={`${s.node} ${s[l.status]}`} onClick={onClick} aria-label={`${l.title} — ${t[l.status]}`}>
                      {l.status === "done" ? <Check aria-hidden="true" /> : locked ? <Lock aria-hidden="true" /> : <Star aria-hidden="true" />}
                    </button>
                    <span className={s.label}>{l.title}</span>
                    {l.status === "open" && <em className={s.startTag}>{t.start}</em>}
                    {hint === l.id && <span className={s.tip}>{t.lockedHint}</span>}
                  </li>
                );
              })}
            </ol>
            {u.exam && (
              <button
                type="button"
                className={`${st.examNode} ${u.exam.status === "locked" ? st.examLocked : u.exam.status === "done" ? st.examDone : ""}`}
                onClick={() => (u.exam.status === "locked" ? (haptic("error"), setHint(`exam:${u.key}`)) : ctx.openExam(u.key))}
              >
                <GraduationCap aria-hidden="true" />
                <span>
                  <b>{t.met.exam}</b>
                  <small>{u.exam.status === "done" ? `${t.met.examDone} · ${u.exam.score}/${u.lessons.length}` : hint === `exam:${u.key}` || u.exam.status === "locked" ? t.met.examLocked : t.met.examStart}</small>
                </span>
              </button>
            )}
          </section>
        );
      })}
    </div>
  );
}
