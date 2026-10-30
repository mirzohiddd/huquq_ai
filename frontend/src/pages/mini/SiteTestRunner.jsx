/**
 * SAYT TESTINI O'TISH — har savol mini app uslubida: savol ekrani → natija
 * (qalqon gapiradi, «Nega?»). Variantlar har savolda aralashtiriladi
 * (to'g'ri javob doim bir joyda turmasin); serverga ASL indeks yuboriladi.
 * Oxirida natija `/submit` da hisoblanadi va saytning progressiga yoziladi.
 */
import React, { useEffect, useState } from "react";
import { ChevronLeft, X } from "lucide-react";
import { siteApi } from "./miniApi";
import { sfx } from "./sound";
import { openLink } from "./tg";
import { Spinner } from "./Gate";
import Hero from "./Hero";
import QuestionView from "./QuestionView";
import ResultView from "./ResultView";
import m from "./Mini.module.css";
import l from "./Lesson.module.css";
import q from "./Quiz.module.css";
import s from "./Library.module.css";

/* Kalit bo'yicha barqaror aralashtirish (har ochilishda bir xil tartib). */
function order(key, n) {
  let h = 2166136261;
  for (const c of key) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  const idx = [...Array(n).keys()];
  for (let i = n - 1; i > 0; i--) {
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    const j = (h >>> 0) % (i + 1);
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx;
}

export default function SiteTestRunner({ id, ctx, onBack }) {
  const { t } = ctx;
  const [test, setTest] = useState(null);
  const [err, setErr] = useState("");
  const [i, setI] = useState(0);
  const [res, setRes] = useState(null);
  const [answers, setAnswers] = useState({});
  const [final, setFinal] = useState(null);

  useEffect(() => {
    siteApi
      .test(id)
      .then((d) => setTest(d.test))
      .catch((e) => setErr(e?.response?.data?.message || e?.response?.data?.error || t.error));
  }, [id, t.error]);

  if (err) return <div><p className={s.empty}>{err}</p><button type="button" className={m.btn} onClick={onBack}>{t.lib.back}</button></div>;
  if (!test) return <Spinner />;

  const total = test.questions.length;
  const cur = test.questions[i];
  const perm = order(`${id}:${i}`, cur?.options.length || 0);

  const check = async (sel) => {
    const choice = perm[sel];
    const r = await siteApi.answer(id, i, choice);
    setAnswers((a) => ({ ...a, [i]: a[i] ?? choice }));
    const right = cur.options[r.correctIndex] || "";
    setRes({ ok: r.correct, why: r.correct ? r.explain : "", rightText: right, rightWhy: r.explain || "" });
  };

  const next = async () => {
    setRes(null);
    if (i + 1 < total) return setI(i + 1);
    try {
      const r = await siteApi.submit(id, answers);
      setFinal(r);
      sfx(r.passed ? "lesson" : "wrong");
    } catch {
      setErr(t.error);
    }
  };

  if (final) {
    return (
      <div className={`${s.result} ${m.fadeIn}`}>
        <Hero mood={final.passed ? "cheer" : "think"} size={150} />
        <h2>{final.passed ? t.lib.passed : t.lib.failed}</h2>
        <div className={s.ring} style={{ "--p": final.percent }}><span>{final.percent}%</span></div>
        <p>{t.lib.score(final.score, final.total, final.percent)}</p>
        {final.lessons?.length > 0 && (
          <div style={{ textAlign: "left", marginTop: 16 }}>
            <div className={s.group}>{t.lib.related}</div>
            <div className={s.list}>
              {final.lessons.slice(0, 5).map((x) => (
                <button key={x._id} type="button" className={s.row} onClick={() => (x.locked ? openLink("https://www.huquqtech.uz/#pricing") : ctx.openLibrary(x._id))}>
                  <span className={s.body}><b>{x.title}</b></span>
                </button>
              ))}
            </div>
          </div>
        )}
        <div className={q.footer}>
          <button type="button" className={q.main} onClick={onBack}>{t.lib.back}</button>
        </div>
      </div>
    );
  }

  return (
    <div className={l.player} key={`${i}-${res ? 1 : 0}`}>
      <div className={l.topbar}>
        <button type="button" className={l.close} onClick={onBack} aria-label={t.lib.back}>{i === 0 && !res ? <ChevronLeft /> : <X />}</button>
        <div className={l.progress} role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={i}>
          <i style={{ width: `${((i + (res ? 1 : 0.3)) / total) * 100}%` }} />
        </div>
      </div>
      {!res ? (
        <QuestionView
          icon={test.kind === "life" ? "Scale" : "BookOpen"}
          tag={`${test.title} · ${i + 1} / ${total}`}
          text={cur.situation}
          question={cur.q}
          options={perm.map((k) => cur.options[k])}
          onCheck={check}
          t={t}
        />
      ) : (
        <ResultView res={res} t={t} nextLabel={i + 1 < total ? t.nextQuestion : t.finishBtn} onNext={next} />
      )}
    </div>
  );
}
