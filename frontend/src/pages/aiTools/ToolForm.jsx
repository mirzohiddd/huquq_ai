import React from "react";
import { Sparkles, Loader2 } from "lucide-react";
import { useLang } from "../../context/LangContext";
import { useToolsText, IDEAS } from "./i18n";
import s from "./AiTools.module.css";

const GRADES = ["5", "6", "7", "8", "9", "10", "11", "student", "adult"];
const COUNTS = { slides: [5, 6, 8, 10, 12, 15, 20], quiz: [5, 10, 15, 20, 30] };
const DURATIONS = [30, 40, 45, 60, 80, 90];

/** Generator formasi — mavzu, sinf, til va vositaga xos parametr. */
export default function ToolForm({ tool, form, setForm, onSubmit, loading }) {
  const c = useToolsText();
  const { lang } = useLang();
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <form
      className={s.form}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <label className={`${s.field} ${s.fieldWide}`}>
        <span>{c.topic}</span>
        <input
          className={s.input}
          value={form.topic}
          onChange={set("topic")}
          placeholder={c.topicPh}
          maxLength={160}
          required
          minLength={3}
          enterKeyHint="go"
        />
      </label>
      <div className={s.ideas} aria-label={c.ideas}>
        {IDEAS[lang === "ru" ? "ru" : "uz"].map((idea) => (
          <button key={idea} type="button" className={s.idea} onClick={() => setForm((f) => ({ ...f, topic: idea }))}>
            {idea}
          </button>
        ))}
      </div>

      <label className={s.field}>
        <span>{c.grade}</span>
        <select className={s.input} value={form.grade} onChange={set("grade")}>
          {GRADES.map((g) => (
            <option key={g} value={g}>
              {c.grades[g] || c.gradeN(g)}
            </option>
          ))}
        </select>
      </label>

      <label className={s.field}>
        <span>{c.lang}</span>
        <select className={s.input} value={form.lang} onChange={set("lang")}>
          <option value="uz">{c.langs.uz}</option>
          <option value="ru">{c.langs.ru}</option>
        </select>
      </label>

      {tool !== "plan" && (
        <label className={s.field}>
          <span>{tool === "slides" ? c.count : c.qCount}</span>
          <select className={s.input} value={form[tool === "slides" ? "count" : "qcount"]} onChange={set(tool === "slides" ? "count" : "qcount")}>
            {COUNTS[tool].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
      )}
      {tool === "quiz" && (
        <label className={s.field}>
          <span>{c.difficulty}</span>
          <select className={s.input} value={form.difficulty} onChange={set("difficulty")}>
            {["easy", "medium", "hard"].map((d) => (
              <option key={d} value={d}>
                {c.diff[d]}
              </option>
            ))}
          </select>
        </label>
      )}
      {tool === "plan" && (
        <label className={s.field}>
          <span>{c.duration}</span>
          <select className={s.input} value={form.duration} onChange={set("duration")}>
            {DURATIONS.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
      )}

      <button type="submit" className={s.submit} disabled={loading || form.topic.trim().length < 3}>
        {loading ? <Loader2 size={18} className={s.spin} /> : <Sparkles size={18} />}
        {loading ? c.generating : c.generate}
      </button>
    </form>
  );
}
