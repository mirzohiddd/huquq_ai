import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import s from "./Acts.module.css";

/** Prezident hujjati qatori: tur · raqam · sana va nom. */
export default function ActRow({ act }) {
  return (
    <li>
      <Link to={`/legislation/act/${act.docId}`} className={s.row}>
        <span className={`${s.formTag} ${s[`f_${act.form}`] || ""}`}>{act.formLabel}</span>
        <span className={s.rowBody}>
          <span className={s.rowTitle}>{act.title}</span>
          <span className={s.rowMeta}>
            {[act.number, act.date].filter(Boolean).join(" · ")}
          </span>
        </span>
        <ChevronRight size={16} className={s.rowArrow} />
      </Link>
    </li>
  );
}
