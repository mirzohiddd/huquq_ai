/**
 * TAKRORLASH MASHQI — tanlangan xatolar ketma-ket (savol → natija).
 * To'g'ri javob — xato ro'yxatdan chiqadi va +2 XP (serverda, bir marta). Xato javobda
 * to'g'ri javob ochilmaydi: qayta urinish yoki darsni qayta o'qish.
 */
import React, { useState } from "react";
import { mini } from "./miniApi";
import QuestionView from "./QuestionView";
import ResultView from "./ResultView";
import WrongView from "./WrongView";
import ExplainSheet from "./ExplainSheet";
import { openHearts } from "./heartsStore";

/* Kalit → «Tushuntirib ber» so'rovi: "Q:<dars>:<i>" kurs savoli, "L:<dars>", "S:<vaziyat>:<qadam>" */
const explainReq = (key) => {
  const [kind, id, step] = key.split(":");
  if (kind === "Q") return { kind: "course", id, step: Number(step) };
  if (kind === "L") return { kind: "lesson", id };
  if (kind === "S") return { kind: "situation", id, step: Number(step) };
  return null; // imtihon savoli — faqat qayta yechiladi
};

export default function ReviewRunner({ items, ctx, onDone }) {
  const { t, lang } = ctx;
  const [i, setI] = useState(0);
  const [res, setRes] = useState(null);
  const [sheet, setSheet] = useState(null);
  const q = items[i];
  const req = explainReq(q.key);
  const last = i + 1 >= items.length;

  const check = async (opt) => {
    try {
      const r = await mini.reviewAnswer(q.key, opt);
      if (r.xp) ctx.reloadPath(); // headerdagi XP yangilansin
      // Oxirgi yurakcha ketdi — mashq to'xtaydi (davom ettirib bo'lmaydi)
      if (!r.ok && r.hearts?.hearts === 0) setTimeout(() => (onDone(), openHearts()), 1600);
      setRes(r);
    } catch {
      next(); // allaqachon tuzatilgan (boshqa qurilmada) — keyingisiga
    }
  };
  const next = () => {
    setRes(null);
    if (!last) setI(i + 1);
    else onDone();
  };

  return (
    <div key={`${i}-${res ? 1 : 0}`}>
      {!res && (
        <QuestionView icon={q.icon} tag={`${q.title} · ${i + 1} / ${items.length}`} text={q.text} question={q.q} options={q.options} onCheck={check} t={t} />
      )}
      {res && !res.ok && (
        <WrongView
          t={t}
          hint={t.wrongs.review}
          mainIcon="retry"
          mainLabel={t.tryAgain}
          onMain={() => setRes(null)}
          altLabel={t.wrongs.openLesson}
          onAlt={q.lesson ? () => ctx.openLesson(q.lesson) : null}
        />
      )}
      {res?.ok && (
        <ResultView
          res={{ ...res, rightWhy: res.rightWhy || "" }}
          xp={res.xp}
          t={t}
          nextLabel={last ? t.wrongs.toList : t.nextQuestion}
          onNext={next}
          onSource={req ? () => setSheet("source") : null}
          onExplain={req ? () => setSheet("ai") : null}
        />
      )}
      {sheet && req && res?.ok && <ExplainSheet req={req} res={res} lang={lang} t={t} sourceOnly={sheet === "source"} onClose={() => setSheet(null)} />}
    </div>
  );
}
