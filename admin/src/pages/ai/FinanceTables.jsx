import { Badge, EmptyState } from "../../components/Shared";
import { KIND_LABEL, TIER_LABEL, int, tokens, usd, uzs } from "./format";
import s from "../Table.module.css";
import a from "./Ai.module.css";

function Wrap({ children, empty }) {
  if (empty) return <EmptyState text="Bu oy uchun ma'lumot yo'q" />;
  return (
    <div className={s.tableWrap}>
      <table className={s.table}>{children}</table>
    </div>
  );
}

const Money = ({ v }) => <span className={v >= 0 ? a.pos : a.neg}>{uzs(v)}</span>;

function Meter({ spent, budget }) {
  if (!budget) return <span className={a.muted}>Cheksiz</span>;
  const pct = Math.min(100, (spent / budget) * 100);
  return (
    <div title={`${pct.toFixed(0)}%`}>
      {usd(Math.max(0, budget - spent))} / {usd(budget)}
      <div className={a.meter}>
        <div className={`${a.meterFill} ${pct >= 90 ? a.meterHot : ""}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export function TierTable({ tiers, rate }) {
  return (
    <Wrap>
      <thead>
        <tr>
          <th>Tarif</th><th>AI</th><th>Faol obunachi</th><th>So'rovlar</th><th>Tokenlar (kirish/chiqish)</th>
          <th>AI xarajati</th><th>Tarif budjeti qoldig'i</th><th>Daromad</th><th>Sof foyda</th>
        </tr>
      </thead>
      <tbody>
        {tiers.map((t) => (
          <tr key={t.tier}>
            <td><b>{TIER_LABEL[t.tier]}</b></td>
            <td className={a.mono}>
              {t.mode === "local" ? <Badge type="default">Lokal</Badge> : t.model}
              {t.mode !== "local" && t.deepModel ? <div className={a.muted}>+ {t.deepModel}</div> : null}
            </td>
            <td>{t.tier === "free" ? "—" : int(t.subscribers)}</td>
            <td>{int(t.usage.requests)}</td>
            <td className={a.mono}>{tokens(t.usage.inputTokens)} / {tokens(t.usage.outputTokens)}</td>
            <td>{usd(t.usage.costUsd)}<div className={a.muted}>{uzs((t.usage.costUsd || 0) * rate)}</div></td>
            <td><Meter spent={t.usage.costUsd || 0} budget={t.budgetUsd} /></td>
            <td>{uzs(t.revenueUzs)}</td>
            <td><Money v={t.netUzs} /></td>
          </tr>
        ))}
      </tbody>
    </Wrap>
  );
}

export function KindTable({ rows, rate }) {
  return (
    <Wrap empty={!rows.length}>
      <thead>
        <tr><th>Xizmat</th><th>So'rovlar</th><th>Kirish tokenlari</th><th>Keshdan</th><th>Chiqish tokenlari</th><th>Audio / belgilar</th><th>Kesh javoblari</th><th>Xarajat</th></tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r._id}>
            <td><b>{KIND_LABEL[r._id] || r._id}</b></td>
            <td>{int(r.requests)}</td>
            <td className={a.mono}>{tokens(r.inputTokens)}</td>
            <td className={a.mono}>{tokens(r.cachedTokens)}</td>
            <td className={a.mono}>{tokens(r.outputTokens)}</td>
            <td className={a.mono}>{r.seconds ? `${(r.seconds / 60).toFixed(1)} daq` : r.chars ? `${int(r.chars)} belgi` : "—"}</td>
            <td>{int(r.cacheHits)}</td>
            <td>{usd(r.costUsd)}<div className={a.muted}>{uzs(r.costUsd * rate)}</div></td>
          </tr>
        ))}
      </tbody>
    </Wrap>
  );
}

export function ModelTable({ rows }) {
  return (
    <Wrap empty={!rows.length}>
      <thead>
        <tr><th>Provayder</th><th>Model</th><th>Xizmat</th><th>So'rovlar</th><th>Tokenlar</th><th>Xarajat</th></tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={`${r._id.provider}-${r._id.model}-${r._id.kind}`}>
            <td>{r._id.provider || "—"}</td>
            <td className={a.mono}>{r._id.model || "—"}</td>
            <td>{KIND_LABEL[r._id.kind] || r._id.kind}</td>
            <td>{int(r.requests)}</td>
            <td className={a.mono}>{tokens(r.inputTokens + r.outputTokens)}</td>
            <td>{usd(r.costUsd)}</td>
          </tr>
        ))}
      </tbody>
    </Wrap>
  );
}

export function UserTable({ items }) {
  return (
    <Wrap empty={!items.length}>
      <thead>
        <tr><th>Foydalanuvchi</th><th>Tarif</th><th>So'rovlar</th><th>Tokenlar</th><th>AI xarajati</th><th>Shaxsiy budjet qoldig'i</th><th>To'lagan (oy)</th><th>Sof</th></tr>
      </thead>
      <tbody>
        {items.map((u) => (
          <tr key={u.userId}>
            <td>
              <div className={s.username}>{u.username}</div>
              {u.fullName && <div className={s.fullname}>{u.fullName}</div>}
            </td>
            <td>{TIER_LABEL[u.tier] || u.tier}</td>
            <td>{int(u.requests)}</td>
            <td className={a.mono}>{tokens(u.tokens)}</td>
            <td>{usd(u.costUsd)}</td>
            <td><Meter spent={u.costUsd} budget={u.budgetUsd} /></td>
            <td>{uzs(u.paidUzs)}</td>
            <td><Money v={u.netUzs} /></td>
          </tr>
        ))}
      </tbody>
    </Wrap>
  );
}
