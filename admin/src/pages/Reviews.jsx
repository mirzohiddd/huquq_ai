import React, { useState, useEffect, useCallback } from "react";
import { MessageSquareQuote, RefreshCw, Check, X, Trash2, Star } from "lucide-react";
import api from "../utils/api";
import { PageHeader, Select, Badge, Btn, Loader, EmptyState, Pagination } from "../components/Shared";
import s from "./Table.module.css";
import { fmtDate } from "./ordersUtils";

/**
 * SHARHLAR (2026-10-14) — foydalanuvchilar saytda qoldirgan fikrlar.
 * Har bir sharh "Kutilmoqda" holatida keladi va Landing Page'dagi
 * "Foydalanuvchilar fikri" bo'limida FAQAT "Tasdiqlangan" bo'lsa chiqadi.
 */
const STATUS = {
  pending: { type: "meros", label: "Kutilmoqda" },
  approved: { type: "active", label: "Tasdiqlangan" },
  rejected: { type: "blocked", label: "Rad etilgan" },
};

function Stars({ value }) {
  return (
    <span className={s.nowrap} title={`${value} / 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} size={13} color="#f5b100" fill={n <= value ? "#f5b100" : "transparent"} />
      ))}
    </span>
  );
}

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [total, setTotal] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [status, setStatus] = useState("pending");
  const [loading, setLoading] = useState(false);
  const [busyId, setBusyId] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const p = new URLSearchParams({ page, limit: 25 });
      if (status) p.set("status", status);
      const { data } = await api.get(`/admin/reviews?${p}`);
      setReviews(data.reviews);
      setTotal(data.total);
      setPages(data.pages);
      setPendingCount(data.pendingCount);
    } catch {
      /* silent */
    } finally {
      setLoading(false);
    }
  }, [page, status]);

  useEffect(() => {
    load();
  }, [load]);

  async function setReviewStatus(r, next) {
    setBusyId(r._id);
    try {
      await api.patch(`/admin/reviews/${r._id}`, { status: next });
      await load();
    } catch {
      alert("Holatni o'zgartirib bo'lmadi");
    } finally {
      setBusyId(null);
    }
  }

  async function remove(r) {
    if (!window.confirm("Sharhni butunlay o'chirasizmi?")) return;
    setBusyId(r._id);
    try {
      await api.delete(`/admin/reviews/${r._id}`);
      await load();
    } catch {
      alert("O'chirib bo'lmadi");
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div>
      <PageHeader
        title={
          <>
            <MessageSquareQuote size={20} /> Sharhlar ({total})
            {pendingCount > 0 && <Badge type="meros">{pendingCount} ta kutilmoqda</Badge>}
          </>
        }
      >
        <Btn variant="ghost" onClick={load}>
          <RefreshCw size={16} /> Yangilash
        </Btn>
      </PageHeader>

      <div className={s.filters}>
        <Select
          value={status}
          onChange={(v) => {
            setStatus(v);
            setPage(1);
          }}
          placeholder="Barcha holatlar"
          options={Object.entries(STATUS).map(([value, x]) => ({ value, label: x.label }))}
        />
      </div>

      {loading && <Loader />}
      {!loading && reviews.length === 0 && (
        <EmptyState icon={<MessageSquareQuote size={32} />} text="Sharh topilmadi" />
      )}

      {!loading && reviews.length > 0 && (
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>Muallif</th>
                <th>Baho</th>
                <th>Sharh</th>
                <th>Holat</th>
                <th>Sana</th>
                <th>Amal</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((r) => {
                const st = STATUS[r.status] || STATUS.pending;
                const busy = busyId === r._id;
                return (
                  <tr key={r._id}>
                    <td>
                      <span className={s.username}>{r.name}</span>
                      <span className={s.fullname}>
                        {[r.role, r.userId?.email || r.userId?.username].filter(Boolean).join(" · ")}
                      </span>
                    </td>
                    <td><Stars value={r.rating} /></td>
                    <td style={{ maxWidth: 420, whiteSpace: "pre-line", lineHeight: 1.5 }}>{r.text}</td>
                    <td><Badge type={st.type}>{st.label}</Badge></td>
                    <td className={s.nowrap}>{fmtDate(r.updatedAt || r.createdAt)}</td>
                    <td>
                      <div className={s.actions}>
                        {r.status !== "approved" && (
                          <Btn small variant="success" disabled={busy} title="Tasdiqlash — saytda chiqadi"
                            onClick={() => setReviewStatus(r, "approved")}>
                            <Check size={13} /> Tasdiqlash
                          </Btn>
                        )}
                        {r.status !== "rejected" && (
                          <Btn small variant="ghost" disabled={busy} title="Rad etish — saytda chiqmaydi"
                            onClick={() => setReviewStatus(r, "rejected")}>
                            <X size={13} /> Rad etish
                          </Btn>
                        )}
                        <Btn small variant="danger" disabled={busy} title="O'chirish" onClick={() => remove(r)}>
                          <Trash2 size={13} />
                        </Btn>
                      </div>
                    </td>
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
