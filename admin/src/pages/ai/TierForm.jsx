import { Badge } from "../../components/Shared";
import { TIER_LABEL, uzs } from "./format";
import a from "./Ai.module.css";

const EFFORTS = ["minimal", "low", "medium", "high"];

function Num({ label, hint, value, onChange, step = 1, allowEmpty = false }) {
  return (
    <label className={a.label}>
      {label}
      <input
        className={a.input}
        type="number"
        min="0"
        step={step}
        value={value === null || value === undefined ? "" : value}
        placeholder={allowEmpty ? "standart" : ""}
        onChange={(e) => onChange(e.target.value === "" ? (allowEmpty ? null : 0) : Number(e.target.value))}
      />
      {hint && <span className={a.hint}>{hint}</span>}
    </label>
  );
}

/* Bitta tarifning AI konfiguratsiyasi. `models` — narx jadvalidagi modellar
   (taklif ro'yxati; admin boshqa nom ham yoza oladi). */
export default function TierForm({ tier, cfg, plan, models, onChange }) {
  const set = (k) => (v) => onChange({ ...cfg, [k]: v });
  const llm = cfg.mode === "openai";
  return (
    <div className={a.tierCard}>
      <div className={a.tierHead}>
        <div>
          <div className={a.tierName}>{TIER_LABEL[tier]}</div>
          <div className={a.tierPrice}>{plan ? (plan.priceUzs ? `${uzs(plan.priceUzs)} / oy` : "Bepul") : ""}</div>
        </div>
        <Badge type={llm ? "active" : "default"}>{llm ? "OpenAI" : "Lokal AI"}</Badge>
      </div>

      <div className={a.fields}>
        <label className={a.label}>
          AI rejimi
          <select className={a.input} value={cfg.mode} onChange={(e) => set("mode")(e.target.value)}>
            <option value="local">Lokal (sayt bazasi, $0)</option>
            <option value="openai">OpenAI + RAG</option>
          </select>
        </label>
        <label className={a.label}>
          Asosiy model
          <input className={a.input} list="ai-models" value={cfg.model} disabled={!llm} onChange={(e) => set("model")(e.target.value)} />
        </label>
        <label className={a.label}>
          Chuqur tahlil modeli
          <input className={a.input} list="ai-models" value={cfg.deepModel} disabled={!llm} placeholder="yo'q" onChange={(e) => set("deepModel")(e.target.value)} />
          <span className={a.hint}>Murakkab savol, hujjat, rasm uchun</span>
        </label>
        <label className={a.label}>
          Reasoning (asosiy / chuqur)
          <div style={{ display: "flex", gap: 6 }}>
            {["reasoningEffort", "deepReasoningEffort"].map((k) => (
              <select key={k} className={a.input} value={cfg[k]} disabled={!llm} onChange={(e) => set(k)(e.target.value)}>
                {EFFORTS.map((e) => <option key={e} value={e}>{e}</option>)}
              </select>
            ))}
          </div>
        </label>
        <Num label="Javob hajmi (token)" value={cfg.maxOutputTokens} onChange={set("maxOutputTokens")} />
        <Num label="RAG moddalari soni" value={cfg.ragArticles} onChange={set("ragArticles")} />
        <Num label="Modda matni (belgi)" value={cfg.articleChars} onChange={set("articleChars")} step={100} />
        <Num label="Suhbat xotirasi (xabar)" value={cfg.historyTurns} onChange={set("historyTurns")} />
        <Num
          label="Kunlik savol limiti"
          hint={plan ? `Standart: ${plan.baseDailyLimit}` : ""}
          value={cfg.dailyLimit}
          onChange={set("dailyLimit")}
          allowEmpty
        />
        <Num
          label="Kunlik ovoz limiti"
          hint={plan ? `Standart: ${plan.baseVoiceDailyLimit}` : ""}
          value={cfg.voiceDailyLimit}
          onChange={set("voiceDailyLimit")}
          allowEmpty
        />
        <Num label="Oylik token limiti (1 kishi)" hint="0 = cheksiz" value={cfg.monthlyTokenLimit} onChange={set("monthlyTokenLimit")} step={10000} />
        <Num label="Oylik budjet $ (1 kishi)" hint="0 = cheksiz" value={cfg.monthlyBudgetUsd} onChange={set("monthlyBudgetUsd")} step={0.1} />
        <Num label="Tarif oylik budjeti $ (hamma)" hint="0 = cheksiz" value={cfg.tierMonthlyBudgetUsd} onChange={set("tierMonthlyBudgetUsd")} step={1} />
        <div className={a.label}>
          Premium funksiyalar
          <label className={a.check}>
            <input type="checkbox" checked={cfg.images} onChange={(e) => set("images")(e.target.checked)} /> Rasm tahlili
          </label>
          <label className={a.check}>
            <input type="checkbox" checked={cfg.docAnalysis} onChange={(e) => set("docAnalysis")(e.target.checked)} /> Hujjat tahlili (LLM)
          </label>
        </div>
      </div>
      <datalist id="ai-models">{models.map((m) => <option key={m} value={m} />)}</datalist>
    </div>
  );
}
