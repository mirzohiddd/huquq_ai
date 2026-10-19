import { useState } from "react";
import { Plus } from "lucide-react";
import { Btn } from "../../components/Shared";
import s from "../Table.module.css";
import a from "./Ai.module.css";

function Cell({ value, onChange, step = 0.001 }) {
  return (
    <td>
      <input className={a.input} type="number" min="0" step={step} value={value ?? 0} onChange={(e) => onChange(Number(e.target.value))} />
    </td>
  );
}

/* Model narxlari — OpenAI narx o'zgarsa yoki yangi model qo'shilsa,
   kodga tegmasdan shu yerda yangilanadi. Narx faqat KEYINGI yozuvlarga
   ta'sir qiladi (o'tgan oylar hisoboti o'zgarmaydi). */
export default function PricingForm({ pricing, audio, onPricing, onAudio }) {
  const [name, setName] = useState("");
  const setP = (m, k) => (v) => onPricing({ ...pricing, [m]: { ...pricing[m], [k]: v } });
  const setA = (m, k) => (v) => onAudio({ ...audio, [m]: { ...audio[m], [k]: v } });

  return (
    <>
      <div className={s.tableWrap}>
        <table className={`${s.table} ${a.priceTable}`}>
          <thead>
            <tr><th>Model</th><th>Kirish</th><th>Keshlangan kirish</th><th>Chiqish</th></tr>
          </thead>
          <tbody>
            {Object.entries(pricing).map(([m, p]) => (
              <tr key={m}>
                <td className={a.mono}>{m}</td>
                <Cell value={p.input} onChange={setP(m, "input")} />
                <Cell value={p.cachedInput} onChange={setP(m, "cachedInput")} />
                <Cell value={p.output} onChange={setP(m, "output")} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={a.bar} style={{ margin: ".6rem 0 1.2rem" }}>
        <input className={a.input} style={{ maxWidth: 240 }} placeholder="yangi model nomi" value={name} onChange={(e) => setName(e.target.value.trim())} />
        <Btn
          small
          disabled={!/^[\w.:-]{2,60}$/.test(name) || pricing[name]}
          onClick={() => {
            onPricing({ ...pricing, [name]: { input: 0, cachedInput: 0, output: 0 } });
            setName("");
          }}
        >
          <Plus size={13} /> Model qo'shish
        </Btn>
      </div>

      <div className={s.tableWrap}>
        <table className={`${s.table} ${a.priceTable}`}>
          <thead>
            <tr><th>Ovoz xizmati</th><th>$ / daqiqa (STT)</th><th>$ / 1M belgi (TTS)</th></tr>
          </thead>
          <tbody>
            {Object.entries(audio).map(([m, p]) => (
              <tr key={m}>
                <td className={a.mono}>{m}</td>
                <Cell value={p.perMinute} onChange={setA(m, "perMinute")} step={0.0001} />
                <Cell value={p.perMillionChars} onChange={setA(m, "perMillionChars")} step={1} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
