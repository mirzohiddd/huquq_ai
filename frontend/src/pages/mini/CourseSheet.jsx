/**
 * KURSLAR — pastdan chiquvchi oyna: har bir kurs, bo'limlar soni va progress.
 * Barcha kurslar saytdagi darslardan qurilgan (har kursning 1-bo'limi bepul).
 */
import React from "react";
import { X, Check } from "lucide-react";
import { iconOf } from "./icons";
import s from "./Path.module.css";

export default function CourseSheet({ t, courses = [], current, onPick, onClose }) {
  return (
    <div className={s.sheetBack} onClick={onClose}>
      <div className={s.sheet} onClick={(e) => e.stopPropagation()} role="dialog" aria-label={t.course.choose}>
        <div className={s.sheetHead}>
          <b>{t.course.choose}</b>
          <button type="button" onClick={onClose} aria-label="X"><X /></button>
        </div>
        <ul className={s.courses}>
          {courses.map((c) => {
            const Icon = iconOf(c.icon);
            const pct = c.lessons ? Math.round((c.done / c.lessons) * 100) : 0;
            return (
              <li key={c.key}>
                <button type="button" className={c.key === current ? s.courseOn : ""} onClick={() => onPick(c.key)}>
                  <span className={s.courseIcon}><Icon aria-hidden="true" /></span>
                  <span className={s.courseText}>
                    <b>{c.title}</b>
                    <small>{t.course.unitsN(c.units)} · {t.course.lessonsOf(c.done, c.lessons)}</small>
                    <i className={s.goal}><i style={{ width: `${pct}%` }} /></i>
                  </span>
                  {c.key === current && <Check className={s.courseCheck} aria-hidden="true" />}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
