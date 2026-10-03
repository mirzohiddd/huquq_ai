import React, { useState, useEffect, useCallback } from "react";
import { ShoppingCart, RefreshCw, Phone, Send, AlertTriangle } from "lucide-react";
import api from "../utils/api";
import { PageHeader, Select, SearchBar, Badge, Btn, Loader, EmptyState, Pagination } from "../components/Shared";
import s from "./Table.module.css";
import { STATUS, TIER, fmtNum, fmtPhone, fmtDate, tgLink } from "./ordersUtils";

/**
 * BUYURTMALAR (2026-10-03) — saytdagi Narxlar bo'limi yoki botdagi
 * «💎 Tariflar» orqali "Sotib olish" bosgan mijozlar. Har biri uchun
 * adminga Telegram xabari ham ketadi; bu sahifa — to'liq ro'yxat va
 * holatni yuritish (yangi → bog'lanildi → yakunlandi).
 * Tarifni yoqish Foydalanuvchilar sahifasidagi tarif tanlovi orqali.
 */
export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const [newCount, setNewCount] = useState(0);
  const [notifyOk, setNotifyOk] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [busyId, setBusyId] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const p = new URLSearchParams({ page, limit: 25 });
      if (status) p.set("status", status);
      if (search.trim()) p.set("search", search.trim());
      const { data } = await api.get(`/admin/orders?${p}`);
      setOrders(data.orders);
      setTotal(data.total);
      setPages(data.pages);
      setNewCount(data.newCount);
      setNotifyOk(data.notifyConfigured);
    } catch {
      /* silent */
    } finally {
      setLoading(false);
    }
  }, [page, status, search]);

  useEffect(() => {
    const id = setTimeout(load, search ? 300 : 0);
    return () => clearTimeout(id);
  }, [load, search]);

  async function changeStatus(o, next) {
    setBusyId(o._id);
    try {
      const { data } = await api.patch(`/admin/orders/${o._id}`, { status: next });
      setOrders((list) => list.map((x) => (x._id === o._id ? { ...x, status: data.order.status } : x)));
      if (o.status === "new" && next !== "new") setNewCount((n) => Math.max(0, n - 1));
      if (o.status !== "new" && next === "new") setNewCount((n) => n + 1);
    } catch {
      alert("Holatni o'zgartirib bo'lmadi");
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div>
      <PageHeader
        title={
          <>
            <ShoppingCart size={20} /> Buyurtmalar ({total})
            {newCount > 0 && <Badge type="meros">{newCount} ta yangi</Badge>}
          </>
        }
      >
        <Btn variant="ghost" onClick={load}>
          <RefreshCw size={16} /> Yangilash
        </Btn>
      </PageHeader>

      {!notifyOk && (
        <div className={s.notice}>
          <AlertTriangle size={16} />
          <span>
            Telegram xabarnomasi sozlanmagan — yangi buyurtmalar faqat shu yerda ko'rinadi.
            Botga <b>/myid</b> yozib ID'ingizni oling va serverda{" "}
            <code>ADMIN_TELEGRAM_IDS</code> ga qo'shing.
          </span>
        </div>
      )}

      <div className={s.filters}>
        <SearchBar
          value={search}
          onChange={(v) => {
            setSearch(v);
            setPage(1);
          }}
          placeholder="Ism, telefon yoki @username..."
        />
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
      {!loading && orders.length === 0 && (
        <EmptyState icon={<ShoppingCart size={32} />} text="Buyurtma topilmadi" />
      )}

      {!loading && orders.length > 0 && (
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>Mijoz</th>
                <th>Telefon</th>
                <th>Tarif</th>
                <th>Manba</th>
                <th>Holat</th>
                <th>Sana</th>
                <th>Amal</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => {
                const st = STATUS[o.status] || STATUS.new;
                return (
                  <tr key={o._id}>
                    <td>
                      <span className={s.username}>
                        {`${o.firstName} ${o.lastName}`.trim() || "—"}
                      </span>
                      <span className={s.fullname}>
                        {o.telegramUsername ? `@${o.telegramUsername}` : o.userId?.email || ""}
                      </span>
                    </td>
                    <td className={s.nowrap}>
                      <a href={`tel:${o.phone}`} className={s.phoneLink}>
                        <Phone size={12} /> {fmtPhone(o.phone)}
                      </a>
                    </td>
                    <td className={s.nowrap}>
                      <b>{TIER[o.tier] || o.tier}</b>
                      <span className={s.fullname}>{fmtNum(o.priceUzs)} so'm/oy</span>
                    </td>
                    <td>
                      <Badge type={o.source === "telegram" ? "telegram" : "web"}>
                        {o.source === "telegram" ? "Telegram" : "Sayt"}
                      </Badge>
                    </td>
                    <td>
                      <Badge type={st.type}>{st.label}</Badge>
                    </td>
                    <td className={s.nowrap}>{fmtDate(o.createdAt)}</td>
                    <td>
                      <div className={s.actions}>
                        <a href={tgLink(o)} target="_blank" rel="noreferrer" title="Telegram'da yozish">
                          <Btn small variant="primary">
                            <Send size={13} /> Yozish
                          </Btn>
                        </a>
                        <select
                          className={s.statusSelect}
                          value={o.status}
                          disabled={busyId === o._id}
                          onChange={(e) => changeStatus(o, e.target.value)}
                        >
                          {Object.entries(STATUS).map(([v, x]) => (
                            <option key={v} value={v}>
                              {x.label}
                            </option>
                          ))}
                        </select>
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
