import React, { useState, useEffect, useCallback } from "react";
import { CreditCard, RefreshCw, Wallet, TrendingUp, Star } from "lucide-react";
import api from "../utils/api";
import {
  PageHeader,
  Select,
  StatCard,
  Badge,
  Btn,
  Loader,
  EmptyState,
  Pagination,
} from "../components/Shared";
import s from "./Table.module.css";
import ds from "./Dashboard.module.css";

const TIER_LABELS = { basic: "Basic", pro: "Pro", premium: "Premium" };
const STATUS_BADGE = {
  paid: { type: "active", label: "To'langan" },
  pending: { type: "meros", label: "Kutilmoqda" },
  cancelled: { type: "blocked", label: "Bekor qilingan" },
  failed: { type: "blocked", label: "Xato" },
};

function fmtNum(n) {
  return Number(n || 0).toLocaleString();
}
function fmtDate(d) {
  if (!d) return "—";
  return new Date(d).toLocaleString("uz-UZ", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function Payments() {
  const [payments, setPayments] = useState([]);
  const [stats, setStats] = useState(null);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const p = new URLSearchParams({ page, limit: 25 });
      if (status) p.set("status", status);
      const [{ data }, { data: statData }] = await Promise.all([
        api.get(`/admin/payments?${p}`),
        api.get(`/admin/payments/stats`),
      ]);
      setPayments(data.payments);
      setTotal(data.total);
      setPages(data.pages);
      setStats(statData);
    } catch {
      /* silent */
    } finally {
      setLoading(false);
    }
  }, [page, status]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div>
      <PageHeader title={<><CreditCard size={20} /> To'lovlar ({total})</>}>
        <Btn variant="ghost" onClick={load}>
          <RefreshCw size={16} /> Yangilash
        </Btn>
      </PageHeader>

      {stats && (
        <div className={ds.statsGrid}>
          <StatCard
            icon={<Wallet size={18} />}
            label="Jami tushum"
            value={`${fmtNum(stats.totalRevenueUzs)} so'm`}
            color="green"
          />
          <StatCard
            icon={<TrendingUp size={18} />}
            label="To'langan tranzaksiyalar"
            value={fmtNum(stats.paidCount)}
            color="accent"
          />
          <StatCard
            icon={<Star size={18} />}
            label="Faol obunachilar"
            value={fmtNum(stats.activeProUsers)}
            color="yellow"
          />
        </div>
      )}

      <div className={s.filters}>
        <Select
          value={status}
          onChange={(v) => {
            setStatus(v);
            setPage(1);
          }}
          placeholder="Barcha holatlar"
          options={[
            { value: "paid", label: "To'langan" },
            { value: "pending", label: "Kutilmoqda" },
            { value: "cancelled", label: "Bekor qilingan" },
            { value: "failed", label: "Xato" },
          ]}
        />
      </div>

      {loading && <Loader />}
      {!loading && payments.length === 0 && (
        <EmptyState icon={<CreditCard size={32} />} text="To'lov topilmadi" />
      )}

      {!loading && payments.length > 0 && (
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>Foydalanuvchi</th>
                <th>Provayder</th>
                <th>Tarif</th>
                <th>Summa</th>
                <th>Holat</th>
                <th>Sana</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p) => {
                const badge = STATUS_BADGE[p.status] || STATUS_BADGE.pending;
                return (
                  <tr key={p._id}>
                    <td>
                      <span className={s.username}>
                        @{p.userId?.username || "—"}
                      </span>
                      <span className={s.fullname}>{p.userId?.email || ""}</span>
                    </td>
                    <td style={{ textTransform: "capitalize" }}>{p.provider}</td>
                    <td>{TIER_LABELS[p.plan] || p.plan}</td>
                    <td>{fmtNum(p.amount)} so'm</td>
                    <td>
                      <Badge type={badge.type}>{badge.label}</Badge>
                    </td>
                    <td className={s.nowrap}>{fmtDate(p.createdAt)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <Pagination page={page} pages={pages} onChange={setPage} />
    </div>
  );
}
