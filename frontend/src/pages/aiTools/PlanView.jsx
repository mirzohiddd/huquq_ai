import React, { useState } from "react";
import { Printer, FileDown, Copy, Check, Presentation, ListChecks } from "lucide-react";
import PrintPortal from "./PrintPortal";
import { useToolsText } from "./i18n";
import a from "./AiTools.module.css";

/** Dars rejaning to'liq mazmuni — ekranda, chop etishda va Word faylida bir xil. */
function PlanBody({ plan, c }) {
  return (
    <>
      <h1 className={a.pTitle}>{plan.title}</h1>
      <p className={a.pMeta}>
        {plan.gradeLabel} · {plan.duration} {c.min} · {c.basedOn}: «{plan.lesson}»
      </p>
      <h2 className={a.h2}>{c.goals}</h2>
      <ul className={a.list}>
        {plan.goals.map((g) => (
          <li key={g.type}>
            <b>{g.type}:</b> {g.text}
          </li>
        ))}
      </ul>
      {plan.outcomes?.length > 0 && (
        <>
          <h2 className={a.h2}>{c.outcomes}</h2>
          <ul className={a.list}>{plan.outcomes.map((o) => <li key={o}>{o}</li>)}</ul>
        </>
      )}
      <h2 className={a.h2}>{c.tools}</h2>
      <ul className={a.list}>{plan.tools.map((o) => <li key={o}>{o}</li>)}</ul>
      <h2 className={a.h2}>{c.stages}</h2>
      <ol className={a.stages}>
        {plan.stages.map((st) => (
          <li key={st.key} className={a.stage}>
            <div className={a.stageHead}>
              <b>{st.name}</b>
              <span className={a.minutes}>
                {st.minutes} {c.min}
              </span>
            </div>
            <p>{st.text}</p>
            {st.details?.length > 0 && <ul className={a.list}>{st.details.map((d) => <li key={d}>{d}</li>)}</ul>}
          </li>
        ))}
      </ol>
      <h2 className={a.h2}>{c.keyPoints}</h2>
      <ul className={a.list}>{plan.keyPoints.map((k) => <li key={k}>{k}</li>)}</ul>
      {plan.laws?.length > 0 && (
        <>
          <h2 className={a.h2}>{c.laws}</h2>
          <ul className={a.list}>
            {plan.laws.map((l) => (
              <li key={`${l.code}${l.article}`}>
                {l.source}
                {l.lawTitle ? ` — ${l.lawTitle}` : ""}
              </li>
            ))}
          </ul>
        </>
      )}
      <h2 className={a.h2}>{c.homework}</h2>
      <p>{plan.homework}</p>
      <h2 className={a.h2}>{c.criteria}</h2>
      <ul className={a.list}>{plan.criteria.map((k) => <li key={k}>{k}</li>)}</ul>
      <p className={a.pSource}>{plan.source}</p>
    </>
  );
}

function toText(el) {
  return (el?.innerText || "").replace(/\n{3,}/g, "\n\n").trim();
}

export default function PlanView({ plan, onSlides, onQuiz }) {
  const c = useToolsText();
  const [copied, setCopied] = useState(false);
  const id = "plan-body";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(toText(document.getElementById(id)));
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard ruxsati yo'q */
    }
  };
  // Word: HTML ni .doc sifatida saqlash — Word va LibreOffice to'g'ri ochadi
  const toWord = () => {
    const html = document.getElementById(id)?.innerHTML || "";
    const doc = `<html><head><meta charset="utf-8"><title>${plan.title.replace(/[<>&]/g, "")}</title></head><body style="font-family:Calibri,Arial;font-size:12pt">${html}</body></html>`;
    const url = URL.createObjectURL(new Blob(["﻿", doc], { type: "application/msword" }));
    const link = Object.assign(document.createElement("a"), { href: url, download: `${plan.title.slice(0, 60)}.doc` });
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  };

  return (
    <div className={a.doc}>
      <div className={`${a.toolbar} ${a.noPrint}`}>
        <div className={a.metaLine}>{plan.ms != null && <span className={a.ms}>{c.ms(plan.ms)}</span>}</div>
        <div className={a.btnRow}>
          <button type="button" className={a.btnGhost} onClick={() => window.print()}>
            <Printer size={16} /> {c.pdf}
          </button>
          <button type="button" className={a.btnGhost} onClick={toWord}>
            <FileDown size={16} /> {c.docx}
          </button>
          <button type="button" className={a.btnGhost} onClick={copy}>
            {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? c.copied : c.copy}
          </button>
        </div>
      </div>
      <article id={id} className={a.paper}>
        <PlanBody plan={plan} c={c} />
      </article>
      <div className={`${a.btnRow} ${a.noPrint}`}>
        <button type="button" className={a.btnGhost} onClick={onSlides}>
          <Presentation size={16} /> {c.toSlides}
        </button>
        <button type="button" className={a.btnGhost} onClick={onQuiz}>
          <ListChecks size={16} /> {c.toQuiz}
        </button>
      </div>
      <PrintPortal>
        <PlanBody plan={plan} c={c} />
      </PrintPortal>
    </div>
  );
}
