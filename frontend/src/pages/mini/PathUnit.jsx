/**
 * BITTA BO'LIM YO'LI — zigzag 3D tugunlar (dars), o'rtada sandiq, oxirida
 * imtihon kubogi, yon tomonda turli ish bilan band qalqonchalar. Tugun
 * bosilganda ostida oyna chiqadi: nomi, «Dars 2 / 5», «Boshlash +20 XP».
 */
import React from "react";
import { Check, Star, BookOpen, Scale, Gavel, Lock, Trophy } from "lucide-react";
import Hero from "./Hero";
import Chest from "./Chest";
import NodePop from "./NodePop";
import { POSE_NAMES } from "./HeroProps";
import { haptic } from "./tg";
import s from "./PathNodes.module.css";

const OFFSET = [0, 46, 72, 46, 0, -46, -72, -46]; // ilon izi
const STEP = 116; // tugunlar orasidagi masofa (px) — «Boshlash» yorlig'i oldingi tugunni yopmasin
const ICONS = [Star, BookOpen, Scale, Gavel];

function itemsOf(unit) {
  const items = [];
  unit.lessons.forEach((l, i) => {
    items.push({ type: "lesson", l, i });
    if (unit.chest && i === unit.chest.at - 1) items.push({ type: "chest" });
  });
  items.push({ type: "exam" });
  return items;
}

export default function PathUnit({ unit, ui, t, ctx, pop, setPop }) {
  const items = itemsOf(unit);
  const total = unit.lessons.length;
  const tap = (id, fn) => () => {
    haptic("light");
    setPop(pop === id ? null : id);
    if (fn) fn();
  };
  // Qahramonlar: yo'l eng chetga borgan joyda — qarama-qarshi tomonda
  const chars = items
    .map((_, k) => k)
    .filter((k) => Math.abs(OFFSET[k % 8]) === 72)
    .slice(0, 2)
    .map((k, j) => ({ k, x: OFFSET[k % 8] > 0 ? -118 : 118, pose: POSE_NAMES[(ui * 2 + j) % POSE_NAMES.length] }));

  return (
    <section className={s.unit} data-unit={unit.key} data-title={unit.title} data-n={unit.n}>
      {ui > 0 && (
        <div className={s.divider}>
          <span>{t.course.unitN(unit.n)} · {unit.title}</span>
        </div>
      )}
      <div className={s.road} style={{ height: items.length * STEP + 24 }}>
        {chars.map((c) => (
          <div key={c.k} className={`${s.char} ${unit.paywall || unit.lessons[0].status === "locked" ? s.charOff : ""}`} style={{ top: c.k * STEP - 10, "--x": `${c.x}px` }}>
            <Hero pose={c.pose} mood="happy" size={98} />
          </div>
        ))}
        {items.map((it, k) => {
          const style = { top: k * STEP, "--x": `${OFFSET[k % 8]}px` };
          if (it.type === "chest") {
            const id = `chest:${unit.key}`;
            return (
              <div key={id} className={s.item} style={style} data-current={unit.chest.status === "open" ? "1" : undefined}>
                {unit.chest.status === "open" && <em className={s.bubble}>{t.chest.ready}</em>}
                <button type="button" className={s.chestBtn} onClick={unit.chest.status === "open" ? () => (haptic("light"), ctx.claimChest(unit.key)) : tap(id)} aria-label={t.chest.title}>
                  <Chest status={unit.chest.status} />
                </button>
                {pop === id && unit.chest.status !== "open" && <NodePop title={t.chest.title} sub={unit.chest.status === "done" ? t.chest.empty : t.chest.locked} />}
              </div>
            );
          }
          if (it.type === "exam") {
            const id = `exam:${unit.key}`;
            const st = unit.exam.status;
            return (
              <div key={id} className={s.item} style={style} data-current={st === "open" ? "1" : undefined}>
                {st === "open" && <em className={s.bubble}>{t.met.exam}</em>}
                <button type="button" className={`${s.node} ${s.trophy} ${s[st]}`} onClick={tap(id)} aria-label={t.met.exam}>
                  {unit.paywall ? <Lock /> : <Trophy />}
                </button>
                {pop === id && (
                  <NodePop
                    title={t.met.exam}
                    sub={unit.paywall ? t.course.planText : st === "done" ? `${t.met.examDone} · ${unit.exam.score}/${unit.exam.total || total}` : st === "locked" ? t.met.examLocked : t.met.examPass}
                    action={unit.paywall ? t.lib.upgrade : st === "locked" ? null : st === "done" ? t.met.retry : t.met.examStart}
                    onAction={() => (unit.paywall ? ctx.openPlans() : ctx.openExam(unit.key))}
                    dark={st !== "locked"}
                  />
                )}
              </div>
            );
          }
          const { l, i } = it;
          const Icon = ICONS[i % ICONS.length];
          const id = l.id;
          return (
            <div key={id} className={s.item} style={style} data-current={l.status === "open" ? "1" : undefined}>
              {l.status === "open" && <em className={s.bubble}>{t.start}</em>}
              <button type="button" className={`${s.node} ${s[l.status]}`} onClick={tap(id)} aria-label={`${l.title} — ${t[l.status]}`}>
                {l.status === "done" ? <Check /> : unit.paywall ? <Lock /> : <Icon />}
              </button>
              {pop === id && (
                <NodePop
                  title={l.title}
                  sub={unit.paywall ? t.course.planText : l.status === "locked" ? t.lockedHint : t.course.lessonN(i + 1, total)}
                  action={unit.paywall ? t.lib.upgrade : l.status === "open" ? t.course.startXp(20) : l.status === "done" ? t.course.review : null}
                  onAction={() => (unit.paywall ? ctx.openPlans() : ctx.openLesson(l.id))}
                  dark={l.status !== "locked" || unit.paywall}
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
