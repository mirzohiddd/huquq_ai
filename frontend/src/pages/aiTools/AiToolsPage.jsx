import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Presentation, ListChecks, BookOpenCheck, Info } from "lucide-react";
import { useLang } from "../../context/LangContext";
import Seo from "../../components/Seo";
import api from "../../utils/api";
import ToolForm from "./ToolForm";
import { useToolsText } from "./i18n";
import s from "./AiTools.module.css";

const SlidesView = lazy(() => import("./SlidesView"));
const QuizView = lazy(() => import("./QuizView"));
const PlanView = lazy(() => import("./PlanView"));

const TOOLS = [
  { key: "slides", icon: Presentation, path: "/ai-tools/slides" },
  { key: "quiz", icon: ListChecks, path: "/ai-tools/quiz" },
  { key: "plan", icon: BookOpenCheck, path: "/ai-tools/lesson-plan" },
];

/**
 * AI VOSITALAR: slayd generator, test generator, dars reja generatori.
 * Backend: POST /api/ai-tools/{slides|quiz|lesson-plan} — kontent saytdagi
 * tekshirilgan darslar va qonun bazasidan (API'siz, soniyadan tez).
 */
export default function AiToolsPage() {
  const c = useToolsText();
  const { lang } = useLang();
  const [params, setParams] = useSearchParams();
  const tool = TOOLS.some((x) => x.key === params.get("tool")) ? params.get("tool") : "slides";
  const [form, setForm] = useState(() => ({
    topic: params.get("topic") || "",
    grade: "9",
    lang,
    count: "10",
    qcount: "10",
    difficulty: "medium",
    duration: "45",
  }));
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [seed, setSeed] = useState(1);

  useEffect(() => setError(""), [tool]);

  const generate = useCallback(
    async (nextSeed = 1) => {
      const def = TOOLS.find((x) => x.key === tool);
      setLoading(true);
      setError("");
      try {
        const body = { topic: form.topic.trim(), grade: form.grade, lang: form.lang };
        if (tool === "slides") body.count = Number(form.count);
        if (tool === "quiz") Object.assign(body, { count: Number(form.qcount), difficulty: form.difficulty, seed: nextSeed });
        if (tool === "plan") body.duration = Number(form.duration);
        const { data } = await api.post(def.path, body);
        setResults((r) => ({ ...r, [tool]: data }));
        setSeed(nextSeed);
        requestAnimationFrame(() => document.getElementById("tool-result")?.scrollIntoView({ behavior: "smooth", block: "start" }));
      } catch (err) {
        setError(err.response?.data?.error || c.error);
      } finally {
        setLoading(false);
      }
    },
    [tool, form, c.error],
  );

  // Boshqa vositaga o'tish (masalan dars rejadan "Shu mavzuda test")
  const switchTo = useCallback(
    (key, topic) => {
      if (topic) setForm((f) => ({ ...f, topic }));
      setParams({ tool: key }, { replace: false });
    },
    [setParams],
  );

  const data = results[tool];
  return (
    <div className={s.page}>
      <Seo title={`${c.title} — HuquqTech`} noindex />
      <header className={s.hero}>
        <h1 className={s.title}>{c.title}</h1>
        <p className={s.sub}>{c.sub}</p>
        <nav className={s.tabs} role="tablist" aria-label={c.title}>
          {TOOLS.map(({ key, icon: Icon }) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={tool === key}
              className={`${s.tab} ${tool === key ? s.tabOn : ""}`}
              onClick={() => switchTo(key)}
            >
              <Icon size={18} /> {c.tabs[key]}
            </button>
          ))}
        </nav>
      </header>

      <section className={s.panel}>
        <ToolForm tool={tool} form={form} setForm={setForm} onSubmit={() => generate(1)} loading={loading} />
        {tool === "slides" && (
          <p className={s.tip}>
            <Info size={15} /> {c.teacherNote}
          </p>
        )}
        {error && (
          <p className={s.error} role="alert">
            {error}
          </p>
        )}
      </section>

      <section id="tool-result" className={s.result} aria-live="polite">
        {!data && !loading && <p className={s.empty}>{c.empty}</p>}
        {loading && !data && <div className={s.skeleton} aria-hidden="true" />}
        {data && (
          <Suspense fallback={<div className={s.skeleton} aria-hidden="true" />}>
            {data.partial && <p className={s.warn}>{c.partial}</p>}
            {tool === "slides" && <SlidesView deck={data} />}
            {tool === "quiz" && <QuizView quiz={data} onAgain={() => generate(seed + 1)} loading={loading} />}
            {tool === "plan" && <PlanView plan={data} onSlides={() => switchTo("slides", data.title)} onQuiz={() => switchTo("quiz", data.title)} />}
          </Suspense>
        )}
      </section>
    </div>
  );
}
