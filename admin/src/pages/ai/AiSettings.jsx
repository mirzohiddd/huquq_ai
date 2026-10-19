import { useEffect, useState } from "react";
import { Save, RotateCcw, Eraser } from "lucide-react";
import api from "../../utils/api";
import { PageHeader, Btn, Loader, Card } from "../../components/Shared";
import TierForm from "./TierForm";
import PricingForm from "./PricingForm";
import a from "./Ai.module.css";

const TIERS = ["free", "basic", "pro", "premium"];

/* ───────── AI sozlamalari ─────────
   Har tarifning modeli, limitlari va budjeti, model narxlari, umumiy
   o'chirgich. Saqlangach backend qiymatlarni tekshiradi va 30 soniya
   ichida (shu serverda — darhol) barcha chat/ovoz yo'llariga qo'llanadi. */
export default function AiSettings() {
  const [data, setData] = useState(null);
  const [draft, setDraft] = useState(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    api.get("/admin/ai/settings")
      .then(({ data: d }) => { setData(d); setDraft(d.settings); })
      .catch((ex) => setMsg({ type: "err", text: ex.response?.data?.error || "Yuklab bo'lmadi" }));
  }, []);

  async function run(fn, ok) {
    setBusy(true);
    setMsg(null);
    try {
      const { data: d } = await fn();
      if (d.settings) {
        setDraft(d.settings);
        setData((p) => ({ ...p, settings: d.settings, plans: d.plans || p.plans }));
      }
      setMsg({ type: "ok", text: typeof ok === "function" ? ok(d) : ok });
    } catch (ex) {
      setMsg({ type: "err", text: ex.response?.data?.error || "Xatolik" });
    } finally {
      setBusy(false);
    }
  }

  if (!draft) return msg ? <div className={`${a.notice} ${a.err}`}>{msg.text}</div> : <Loader />;

  const set = (k) => (v) => setDraft((p) => ({ ...p, [k]: v }));
  const setTier = (t) => (cfg) => setDraft((p) => ({ ...p, tiers: { ...p.tiers, [t]: cfg } }));
  const numField = (label, k, hint, step = 1) => (
    <label className={a.label}>
      {label}
      <input className={a.input} type="number" min="0" step={step} value={draft[k]} onChange={(e) => set(k)(Number(e.target.value))} />
      {hint && <span className={a.hint}>{hint}</span>}
    </label>
  );

  return (
    <div>
      <PageHeader title="AI sozlamalari">
        <Btn variant="primary" disabled={busy} onClick={() => run(() => api.put("/admin/ai/settings", draft), "Saqlandi — yangi sozlamalar ishga tushdi")}>
          <Save size={14} /> Saqlash
        </Btn>
        <Btn disabled={busy} onClick={() => window.confirm("Barcha AI sozlamalari standart holatga qaytsinmi?") && run(() => api.post("/admin/ai/settings/reset"), "Standart sozlamalar tiklandi")}>
          <RotateCcw size={14} /> Standart
        </Btn>
        <Btn disabled={busy} onClick={() => run(() => api.post("/admin/ai/cache/clear"), (d) => `Kesh tozalandi (${d.deleted} ta javob)`)}>
          <Eraser size={14} /> Keshni tozalash
        </Btn>
      </PageHeader>

      {msg && <div className={`${a.notice} ${a[msg.type]}`}>{msg.text}</div>}
      {!data.openaiConfigured && (
        <div className={`${a.notice} ${a.warn}`}>
          Serverda OPENAI_API_KEY yo'q — barcha tariflar lokal AI'da ishlaydi (javoblar to'xtamaydi).
        </div>
      )}

      <Card title="Umumiy">
        <div className={a.fields}>
          <label className={a.label}>
            Pullik AI (OpenAI)
            <label className={a.check}>
              <input type="checkbox" checked={draft.llmEnabled} onChange={(e) => set("llmEnabled")(e.target.checked)} />
              Yoqilgan (o'chirilsa hamma lokal AI'ga o'tadi)
            </label>
          </label>
          {numField("1 $ = so'm", "usdToUzs", "Foyda hisobi uchun kurs")}
          {numField("Butun sayt oylik AI budjeti $", "globalMonthlyBudgetUsd", "0 = cheksiz. Tugasa — lokal AI", 1)}
          {numField("Daqiqalik chegara (1 kishi)", "perMinuteLimit", "Pullik modelga daqiqada nechta so'rov")}
          {numField("Javob keshi (soat)", "cacheTtlHours", "0 = kesh o'chiq. Bir xil birinchi savol qayta to'lanmaydi")}
        </div>
      </Card>

      <div className={a.section}>
        <h2 className={a.sectionTitle}>Tariflar</h2>
        <div className={a.tierGrid}>
          {TIERS.map((t) => (
            <TierForm key={t} tier={t} cfg={draft.tiers[t]} plan={data.plans?.[t]} models={Object.keys(draft.pricing)} onChange={setTier(t)} />
          ))}
        </div>
      </div>

      <div className={a.section}>
        <h2 className={a.sectionTitle}>Narxlar ($ / 1M token, ovoz — $ / daqiqa yoki $ / 1M belgi)</h2>
        <PricingForm pricing={draft.pricing} audio={draft.audio} onPricing={set("pricing")} onAudio={set("audio")} />
      </div>
    </div>
  );
}
