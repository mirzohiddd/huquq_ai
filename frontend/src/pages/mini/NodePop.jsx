/**
 * Tugun ostidagi oyna (Duolingo kabi): mavzu nomi, holat va asosiy tugma.
 * `dark` — ochiq/tugatilgan (to'q ko'k), aks holda yopiq (kulrang).
 */
import React from "react";
import s from "./PathNodes.module.css";

export default function NodePop({ title, sub, action, onAction, dark = false }) {
  return (
    <div className={`${s.pop} ${dark ? s.popDark : ""}`} role="dialog" onClick={(e) => e.stopPropagation()}>
      <b>{title}</b>
      {sub && <p>{sub}</p>}
      {action && (
        <button type="button" onClick={onAction}>
          {action}
        </button>
      )}
    </div>
  );
}
