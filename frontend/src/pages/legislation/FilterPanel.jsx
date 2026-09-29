import React from "react";
import { SlidersHorizontal, RotateCcw } from "lucide-react";
import { useL } from "./i18n";
import s from "./Catalog.module.css";

const YEARS = Array.from({ length: 2026 - 1991 + 1 }, (_, i) => String(2026 - i));

/**
 * Filtrlar: hujjat turi, holati, huquq sohasi, sana (qabul qilingan /
 * kuchga kirgan yil). Hujjati bo'lmagan qiymat ham ko'rinadi (0 bilan) —
 * foydalanuvchi bo'lim tuzilmasini ko'rsin, lekin tanlab bo'sh natija
 * olmasin (o'chirilgan holatda).
 */
export default function FilterPanel({ facets, filters, onChange }) {
  const L = useL();
  const set = (k, v) => onChange({ ...filters, [k]: filters[k] === v ? "" : v });
  const active = ["type", "status", "area", "year"].some((k) => filters[k]);

  const chips = (key, rows) => (
    <div className={s.chips}>
      {rows.map((r) => (
        <button
          key={r.id}
          type="button"
          disabled={!r.count && filters[key] !== r.id}
          className={`${s.chip} ${filters[key] === r.id ? s.chipOn : ""}`}
          onClick={() => set(key, r.id)}
        >
          {r.label}
          <span className={s.chipCount}>{r.count}</span>
        </button>
      ))}
    </div>
  );

  return (
    <aside className={s.filters}>
      <div className={s.filtersHead}>
        <span>
          <SlidersHorizontal size={15} /> {L.filters}
        </span>
        {active && (
          <button
            type="button"
            className={s.resetBtn}
            onClick={() => onChange({ ...filters, type: "", status: "", area: "", year: "" })}
          >
            <RotateCcw size={13} /> {L.reset}
          </button>
        )}
      </div>

      <div className={s.fGroup}>
        <h4>{L.fType}</h4>
        {chips("type", facets.types)}
      </div>

      <div className={s.fGroup}>
        <h4>{L.fStatus}</h4>
        {chips("status", facets.statuses)}
      </div>

      <div className={s.fGroup}>
        <h4>{L.fDate}</h4>
        <div className={s.dateRow}>
          <select
            value={filters.dateField || "adopted"}
            onChange={(e) => onChange({ ...filters, dateField: e.target.value })}
            aria-label={L.fDate}
          >
            <option value="adopted">{L.adoptedYear}</option>
            <option value="effective">{L.effectiveYear}</option>
          </select>
          <select
            value={filters.year || ""}
            onChange={(e) => onChange({ ...filters, year: e.target.value })}
            aria-label={L.anyYear}
          >
            <option value="">{L.anyYear}</option>
            {YEARS.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={s.fGroup}>
        <h4>{L.fArea}</h4>
        {chips("area", facets.areas)}
      </div>
    </aside>
  );
}
