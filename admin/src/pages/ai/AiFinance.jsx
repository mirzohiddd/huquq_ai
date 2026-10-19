import { useCallback, useEffect, useState } from "react";
import { Wallet, Cpu, TrendingUp, PiggyBank, RefreshCw } from "lucide-react";
import api from "../../utils/api";
import { PageHeader, StatCard, Select, Btn, Loader, Pagination } from "../../components/Shared";
import { KindTable, TierTable, ModelTable, UserTable } from "./FinanceTables";
import { monthOptions, usd, uzs } from "./format";
import a from "./Ai.module.css";

/* ───────── AI moliya ─────────
   To'lovlar (daromad), AI xarajati (chat / voice / STT / TTS), tariflar
   budjeti va taxminiy sof foyda. Barcha raqamlar backend hisobotidan
   (/admin/ai/report) — xarajatlar haqiqiy token sarfi bo'yicha. */
export default function AiFinance() {
  const months = monthOptions();
  const [month, setMonth] = useState(months[0].value);
  const [report, setReport] = useState(null);
  const [users, setUsers] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setErr("");
    try {
      const [{ data: r }, { data: u }] = await Promise.all([
        api.get(`/admin/ai/report?month=${month}`),
        api.get(`/admin/ai/users?month=${month}&page=${page}`),
      ]);
      setReport(r);
      setUsers(u);
    } catch (ex) {
      setErr(ex.response?.data?.error || "Hisobotni yuklab bo'lmadi");
    } finally {
      setLoading(false);
    }
  }, [month, page]);

  useEffect(() => {
    load();
  }, [load]);

  const t = report?.totals;
  return (
    <div>
      <PageHeader title="AI moliya">
        <Select value={month} onChange={(v) => { setMonth(v); setPage(1); }} options={months} />
        <Btn onClick={load} disabled={loading}><RefreshCw size={14} /> Yangilash</Btn>
      </PageHeader>
      {err && <div className={`${a.notice} ${a.err}`}>{err}</div>}
      {!report && loading && <Loader />}
      {report && (
        <>
          <div className={a.grid}>
            <StatCard icon={<Wallet size={18} />} label="Daromad (to'lovlar)" value={uzs(t.revenueUzs)} color="green" />
            <StatCard icon={<Cpu size={18} />} label="AI xarajati" value={usd(t.costUsd)} sub={uzs(t.costUzs)} color="purple" />
            <StatCard
              icon={<TrendingUp size={18} />}
              label="Taxminiy sof foyda"
              value={uzs(t.netUzs)}
              sub={`1$ = ${report.usdToUzs.toLocaleString("ru-RU")} so'm`}
              color={t.netUzs >= 0 ? "accent" : "red"}
            />
            <StatCard
              icon={<PiggyBank size={18} />}
              label="Umumiy AI budjeti qoldig'i"
              value={t.globalRemainingUsd === null ? "Cheksiz" : usd(t.globalRemainingUsd)}
              sub={t.globalBudgetUsd ? `Oylik: ${usd(t.globalBudgetUsd)}` : ""}
              color="yellow"
            />
          </div>

          <div className={a.section}>
            <h2 className={a.sectionTitle}>Tariflar bo'yicha</h2>
            <TierTable tiers={report.tiers} rate={report.usdToUzs} />
          </div>
          <div className={a.section}>
            <h2 className={a.sectionTitle}>Xizmat turlari: Chat · Voice · STT · TTS</h2>
            <KindTable rows={report.byKind} rate={report.usdToUzs} />
          </div>
          <div className={a.section}>
            <h2 className={a.sectionTitle}>Modellar</h2>
            <ModelTable rows={report.byModel} />
          </div>
          <div className={a.section}>
            <h2 className={a.sectionTitle}>Foydalanuvchilar (eng ko'p sarflaganlar)</h2>
            <UserTable items={users?.items || []} />
            <Pagination page={page} pages={Math.max(1, Math.ceil((users?.total || 0) / 25))} onChange={setPage} />
          </div>
        </>
      )}
    </div>
  );
}
