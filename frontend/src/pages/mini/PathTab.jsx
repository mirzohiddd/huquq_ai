/**
 * O'RGANISH — Duolingo uslubidagi yo'l. Tepada yopishqoq banner: joriy
 * kurs, ko'rinib turgan bo'lim va kunlik maqsad; bosilsa kurslar ro'yxati.
 * Barcha darslar, testlar va imtihonlar shu yo'lning ICHIDA (alohida
 * «Barcha darslar» / «Testlar» bo'limlari yo'q). Pastda — joriy darsga tugma.
 */
import React, { useEffect, useRef, useState } from "react";
import { ListTree, ArrowUp, ArrowDown, Crown } from "lucide-react";
import PathUnit from "./PathUnit";
import CourseSheet from "./CourseSheet";
import { iconOf } from "./icons";
import { mini } from "./miniApi";
import { smoothCenter } from "./scrollTo";
import m from "./Mini.module.css";
import s from "./Path.module.css";

export default function PathTab({ ctx }) {
  const { t, path } = ctx;
  const [pop, setPop] = useState(null);
  const [sheet, setSheet] = useState(false);
  const [seen, setSeen] = useState(null); // ko'rinib turgan bo'lim
  const [dir, setDir] = useState(null); // joriy dars ekrandan yuqori/pastda
  const box = useRef(null);

  // Bo'sh joy bosilsa oyna yopiladi
  useEffect(() => {
    if (!pop) return undefined;
    const close = () => setPop(null);
    const id = setTimeout(() => window.addEventListener("click", close), 0);
    return () => {
      clearTimeout(id);
      window.removeEventListener("click", close);
    };
  }, [pop]);

  // Banner: ekranda qaysi bo'lim turibdi; tugma: joriy dars qayerda
  useEffect(() => {
    const onScroll = () => {
      const units = box.current?.querySelectorAll("[data-unit]") || [];
      let cur = null;
      units.forEach((el) => {
        if (el.getBoundingClientRect().top < 160) cur = el;
      });
      setSeen(cur ? { n: cur.dataset.n, title: cur.dataset.title } : null);
      const now = box.current?.querySelector("[data-current]");
      const r = now?.getBoundingClientRect();
      // Tepada yopishqoq sarlavha + banner (~170px), pastda menyu (~90px) — ular ostida qolgan dars ham «ko'rinmaydi»
      const top = (box.current?.querySelector("[data-banner]")?.getBoundingClientRect().bottom || 66) + 8;
      setDir(!r ? null : r.bottom < top ? "up" : r.top > window.innerHeight - 90 ? "down" : null);
    };
    onScroll();
    // capture: ichki konteyner scroll bo'lsa ham (Telegram Desktop) ushlanadi
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    return () => window.removeEventListener("scroll", onScroll, { capture: true });
  }, [path]);

  // Joriy dars ma'lumoti oldindan — bosilganda darhol ochiladi
  useEffect(() => {
    const cur = path?.units.flatMap((u) => (u.paywall ? [] : u.lessons)).find((l) => l.status === "open");
    if (cur?.id?.startsWith("c-")) mini.prefetchLesson(cur.id);
  }, [path]);

  if (!path) return null;
  const course = path.courses?.find((c) => c.key === path.course) || {};
  const first = path.units[0];
  const head = seen || (first && { n: first.n, title: first.title });
  const goalPct = Math.min(100, Math.round(((path.todayXp || 0) / (path.goal || 20)) * 100));
  const CourseIcon = iconOf(course.icon);
  // Joriy darsga silliq qaytish; yetib borgach dars bir-ikki marta yarqirab ko'rsatiladi
  const toCurrent = () => {
    const el = box.current?.querySelector("[data-current]");
    if (!el) return;
    smoothCenter(el);
    el.removeAttribute("data-flash");
    setTimeout(() => el.setAttribute("data-flash", ""), 350);
    setTimeout(() => el.removeAttribute("data-flash"), 2200);
  };

  return (
    <div className={`${m.fadeIn} ${s.road}`} ref={box}>
      <button type="button" className={s.banner} data-banner onClick={() => setSheet(true)}>
        <span className={s.bannerIcon}><CourseIcon aria-hidden="true" /></span>
        <span className={s.bannerText}>
          <small>{course.title} · {head ? t.course.unitN(head.n) : ""}</small>
          <b>{head?.title}</b>
          <i className={s.goal}><i style={{ width: `${goalPct}%` }} /></i>
        </span>
        <span className={s.bannerBtn}><ListTree aria-hidden="true" /></span>
      </button>

      {!path.plan?.paid && (
        <button type="button" className={s.planNote} onClick={ctx.openPlans}>
          <Crown aria-hidden="true" /> <span>{t.plans.free}</span> <b>{t.lib.upgrade}</b>
        </button>
      )}

      {path.units.map((u, i) => (
        <PathUnit key={u.key} unit={u} ui={i} t={t} ctx={ctx} pop={pop} setPop={setPop} />
      ))}

      {dir && (
        <button type="button" className={s.jump} onClick={toCurrent} aria-label={t.course.toCurrent}>
          {dir === "up" ? <ArrowUp style={{ "--bob": "-3px" }} /> : <ArrowDown />}
        </button>
      )}

      {sheet && (
        <CourseSheet
          t={t}
          courses={path.courses}
          current={path.course}
          onPick={(key) => {
            setSheet(false);
            ctx.setCourse(key);
          }}
          onClose={() => setSheet(false)}
        />
      )}
    </div>
  );
}
