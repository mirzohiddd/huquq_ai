import React, { useState, useEffect, useCallback } from "react";
import {
  Scale,
  Plus,
  Pencil,
  Trash2,
  X,
  RefreshCw,
  DownloadCloud,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
} from "lucide-react";
import api from "../utils/api";
import { PageHeader, Btn, Loader, EmptyState } from "../components/Shared";
import s from "./Table.module.css";
import ms from "./Modal.module.css";

/**
 * QONUNLAR KUTUBXONASI — kodekslarni boshqarish.
 *
 * Bu yerda admin lex.uz'dan kuzatiladigan hujjatlar ro'yxatini
 * boshqaradi. Ro'yxat bazada (`LawSource`), foydalanuvchi tomonidagi
 * "Qonunlar kutubxonasi" sahifasi va AI'ning RAG qidiruvi — ikkalasi
 * ham SHU ro'yxatdan oziqlanadi.
 *
 * Muhim nuqta: hujjat qo'shilganda moddalar DARHOL paydo bo'lmaydi —
 * avval lex.uz'dan yuklanishi kerak ("Yuklash" tugmasi). Yuklash fon
 * rejimida ketadi va bir necha daqiqa davom etishi mumkin.
 */

function Modal({ onClose, children }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <div className={ms.overlay} onClick={onClose}>
      <div
        className={`${ms.modal} ${ms.wide}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

/* ── Kodeks qo'shish / tahrirlash ── */
function LawEditor({ law, onClose, onSaved }) {
  const isNew = !law;
  const [code, setCode] = useState(law?.code || "");
  const [name, setName] = useState(law?.name || "");
  const [nameRu, setNameRu] = useState(law?.nameRu || "");
  const [url, setUrl] = useState(law?.url || "");
  const [urlRu, setUrlRu] = useState(law?.urlRu || "");
  const [order, setOrder] = useState(law?.order ?? 999);
  const [enabled, setEnabled] = useState(law?.enabled !== false);
  const [showInLibrary, setShowInLibrary] = useState(
    law?.showInLibrary !== false,
  );

  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(null);

  /* Saqlashdan oldin lex.uz manzilini tekshirish. Backend ham
     saqlashda tekshiradi, lekin bu yerda admin natijani DARHOL
     ko'radi: hujjat nomi va nechta modda topilgani. */
  async function verify() {
    if (!url.trim()) return setErr("Avval lex.uz manzili yoki ID kiriting");
    setVerifying(true);
    setErr("");
    setVerified(null);
    try {
      const { data } = await api.post("/admin/laws/verify", { url: url.trim() });
      setVerified(data);
      // Nomi bo'sh bo'lsa — lex.uz sarlavhasidan taklif qilamiz
      if (!name.trim() && data.title) {
        const clean = data.title
          .replace(/^\s*\d{2}\.\d{2}\.\d{4}\.\s*/, "")
          .replace(/^O['ʻ]?zbekiston Respublikasining\s*/i, "")
          .trim();
        setName(clean);
      }
    } catch (e) {
      setErr(e.response?.data?.error || "Tekshirib bo'lmadi");
    } finally {
      setVerifying(false);
    }
  }

  async function save() {
    if (!code.trim()) return setErr("Kod kerak (masalan: SK)");
    if (!name.trim()) return setErr("Nomi kerak");
    if (!url.trim()) return setErr("lex.uz manzili yoki ID kerak");

    setBusy(true);
    setErr("");
    const body = {
      code: code.trim(),
      name: name.trim(),
      nameRu: nameRu.trim(),
      url: url.trim(),
      urlRu: urlRu.trim(),
      order: Number(order) || 999,
      enabled,
      showInLibrary,
    };
    try {
      if (isNew) await api.post("/admin/laws", body);
      else await api.put(`/admin/laws/${law._id}`, body);
      onSaved();
    } catch (e) {
      setErr(e.response?.data?.error || "Saqlab bo'lmadi");
    } finally {
      setBusy(false);
    }
  }

  return (
    <Modal onClose={onClose}>
      <div className={ms.header}>
        <div className={ms.headerLeft}>
          <div className={ms.headerIcon}>
            <Scale size={18} />
          </div>
          <div>
            <div className={ms.headerTitle}>
              {isNew ? "Yangi kodeks" : "Kodeksni tahrirlash"}
            </div>
            <div className={ms.headerSub}>{isNew ? "lex.uz manbasi" : law.code}</div>
          </div>
        </div>
        <button className={ms.closeBtn} onClick={onClose}>
          <X size={16} />
        </button>
      </div>

      <div className={ms.body}>
        {err && <div className={ms.alertErr}>{err}</div>}

        <div className={ms.field}>
          <label className={ms.fieldLabel}>lex.uz manzili yoki hujjat ID *</label>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              className={ms.input}
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setVerified(null);
              }}
              placeholder="https://lex.uz/docs/-4674902  yoki  -4674902"
              style={{ flex: 1 }}
            />
            <Btn onClick={verify} disabled={verifying}>
              {verifying ? "Tekshirilmoqda…" : "Tekshirish"}
            </Btn>
          </div>
          <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 4 }}>
            Manzil saqlashdan oldin tekshiriladi — hujjat ochilishi va
            moddalarga bo'lingan bo'lishi shart.
          </div>
        </div>

        {verified && (
          <div className={ms.alertOk}>
            <strong>{verified.title || "Hujjat topildi"}</strong>
            <br />
            {verified.articleCount} ta modda ({verified.firstArticle}—
            {verified.lastArticle})
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 12 }}>
          <div className={ms.field}>
            <label className={ms.fieldLabel}>Kod *</label>
            <input
              className={ms.input}
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="SK"
              maxLength={8}
            />
          </div>
          <div className={ms.field}>
            <label className={ms.fieldLabel}>Nomi (o'zbekcha) *</label>
            <input
              className={ms.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Soliq kodeksi"
            />
          </div>
        </div>

        <div className={ms.field}>
          <label className={ms.fieldLabel}>Ruscha nomi</label>
          <input
            className={ms.input}
            value={nameRu}
            onChange={(e) => setNameRu(e.target.value)}
            placeholder="Налоговый кодекс"
          />
          <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 4 }}>
            Bo'sh qoldirilsa — kodeks nomi AI tarjimasidan o'tadi. Rasmiy nom
            yozilgani aniqroq.
          </div>
        </div>

        {/* lex.uz har bir kodeksni rasmiy rus tilida ham chop etadi —
            ALOHIDA hujjat ID bilan. Kiritilsa, moddalarning rus matni
            AI tarjimasisiz, to'g'ridan-to'g'ri manbadan olinadi. */}
        <div className={ms.field}>
          <label className={ms.fieldLabel}>Ruscha manba (lex.uz)</label>
          <input
            className={ms.input}
            value={urlRu}
            onChange={(e) => setUrlRu(e.target.value)}
            placeholder="https://lex.uz/ru/docs/4674893  yoki  4674893"
          />
          <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 4 }}>
            Rasmiy rus tarjimasi. Kiritilsa moddalar rus tilida shu manbadan
            olinadi (aniqroq va tezroq). Bo'sh qoldirilsa AI tarjima qiladi.
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 12 }}>
          <div className={ms.field}>
            <label className={ms.fieldLabel}>Tartib</label>
            <input
              className={ms.input}
              type="number"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
            />
          </div>
          <div className={ms.field}>
            <label className={ms.fieldLabel}>Holat</label>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingTop: 8 }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  color: "var(--text2)",
                }}
              >
                <input
                  type="checkbox"
                  checked={enabled}
                  onChange={(e) => setEnabled(e.target.checked)}
                />
                Yoqilgan (lex.uz'dan yangilanadi, AI qidiruvida qatnashadi)
              </label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  color: "var(--text2)",
                }}
              >
                <input
                  type="checkbox"
                  checked={showInLibrary}
                  onChange={(e) => setShowInLibrary(e.target.checked)}
                />
                Qonunlar kutubxonasida ko'rinsin
              </label>
              <div style={{ fontSize: 11, color: "var(--text3)", marginLeft: 22 }}>
                Belgi olib tashlansa hujjat to'liq ishlaydi, lekin
                kutubxona ro'yxatida ko'rinmaydi (masalan unga alohida
                sahifa ajratilgan bo'lsa).
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={ms.footer}>
        <button className={ms.btnCancel} onClick={onClose}>
          Bekor qilish
        </button>
        <button className={ms.btnPrimary} onClick={save} disabled={busy}>
          {busy ? "Saqlanmoqda…" : "Saqlash"}
        </button>
      </div>
    </Modal>
  );
}

export default function Laws() {
  const [laws, setLaws] = useState(null);
  const [editing, setEditing] = useState(undefined); // undefined=yopiq, null=yangi
  const [busyCode, setBusyCode] = useState("");
  const [msg, setMsg] = useState("");

  const load = useCallback(async () => {
    try {
      const { data } = await api.get("/admin/laws");
      setLaws(data.laws || []);
    } catch {
      setLaws([]);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function ingest(law) {
    setBusyCode(law.code);
    setMsg("");
    try {
      const { data } = await api.post(`/admin/laws/${law._id}/ingest`);
      setMsg(data.message || "Yuklash boshlandi");
    } catch (e) {
      setMsg(e.response?.data?.error || "Yuklashni boshlab bo'lmadi");
    } finally {
      setBusyCode("");
    }
  }

  async function remove(law) {
    const withArticles = window.confirm(
      `"${law.name}" ro'yxatdan olib tashlansinmi?\n\n` +
        `OK — moddalari ham o'chiriladi (${law.articleCount} ta)\n` +
        `Bekor — faqat ro'yxatdan olinadi, moddalar bazada qoladi`,
    );
    if (
      !window.confirm(
        withArticles
          ? `TASDIQLANG: "${law.name}" va uning ${law.articleCount} ta moddasi o'chiriladi.`
          : `TASDIQLANG: "${law.name}" ro'yxatdan olinadi (moddalar qoladi).`,
      )
    )
      return;

    try {
      await api.delete(
        `/admin/laws/${law._id}${withArticles ? "?withArticles=1" : ""}`,
      );
      load();
    } catch (e) {
      setMsg(e.response?.data?.error || "O'chirib bo'lmadi");
    }
  }

  async function sync() {
    try {
      const { data } = await api.post("/admin/laws/sync");
      setMsg(
        data.added
          ? `${data.added} ta yangi hujjat qo'shildi: ${data.codes.join(", ")}`
          : "Yangi hujjat yo'q — ro'yxat to'liq",
      );
      load();
    } catch {
      setMsg("Sinxronlashda xato");
    }
  }

  const total = laws?.reduce((sum, l) => sum + (l.articleCount || 0), 0) || 0;

  return (
    <>
      <PageHeader title="Qonunlar kutubxonasi">
        <Btn onClick={sync} title="config/laws.js dagi yangi hujjatlarni qo'shish">
          <RefreshCw size={14} /> Sinxronlash
        </Btn>
        <Btn variant="primary" onClick={() => setEditing(null)}>
          <Plus size={14} /> Kodeks qo'shish
        </Btn>
      </PageHeader>

      {msg && (
        <div
          style={{
            margin: "0 0 1rem",
            padding: ".75rem 1rem",
            borderRadius: 10,
            background: "var(--accent-glow)",
            color: "var(--accent2)",
            fontSize: 13,
          }}
        >
          {msg}
        </div>
      )}

      {laws === null ? (
        <Loader />
      ) : laws.length === 0 ? (
        <EmptyState icon={<Scale size={28} />} text="Hujjat yo'q" />
      ) : (
        <>
          <div
            style={{
              marginBottom: "1rem",
              fontSize: 13,
              color: "var(--text3)",
            }}
          >
            {laws.length} ta hujjat · {total.toLocaleString("ru-RU")} ta modda
            bazada
          </div>

          <div className={s.tableWrap}>
            <table className={s.table}>
              <thead>
                <tr>
                  <th>Kod</th>
                  <th>Nomi</th>
                  <th className={s.center}>Moddalar</th>
                  <th className={s.center}>Holat</th>
                  <th>Oxirgi yuklash</th>
                  <th className={s.center}>Amallar</th>
                </tr>
              </thead>
              <tbody>
                {laws.map((law) => (
                  <tr key={law._id} className={law.enabled ? "" : s.blockedRow}>
                    <td>
                      <span className={s.username}>{law.code}</span>
                    </td>
                    <td>
                      <div>{law.name}</div>
                      <a
                        href={law.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          fontSize: 11,
                          color: "var(--text3)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        lex.uz{law.docId ? ` ${law.docId}` : ""}{" "}
                        <ExternalLink size={10} />
                      </a>
                    </td>
                    <td className={s.center}>
                      <span className={s.count}>
                        {(law.articleCount || 0).toLocaleString("ru-RU")}
                      </span>
                    </td>
                    <td className={s.center}>
                      {law.enabled ? (
                        <CheckCircle2 size={15} color="var(--green, #22c55e)" />
                      ) : (
                        <span style={{ fontSize: 11, color: "var(--text3)" }}>
                          o'chiq
                        </span>
                      )}
                    </td>
                    <td className={s.nowrap} style={{ fontSize: 12 }}>
                      {law.lastIngestError ? (
                        <span
                          style={{
                            color: "var(--red, #ef4444)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                          }}
                          title={law.lastIngestError}
                        >
                          <AlertTriangle size={12} /> xato
                        </span>
                      ) : law.lastIngestAt ? (
                        new Date(law.lastIngestAt).toLocaleString("ru-RU")
                      ) : (
                        <span style={{ color: "var(--text3)" }}>—</span>
                      )}
                    </td>
                    <td>
                      <div className={s.actions}>
                        <Btn
                          small
                          onClick={() => ingest(law)}
                          disabled={busyCode === law.code}
                          title="lex.uz'dan qayta yuklash (fon rejimida)"
                        >
                          <DownloadCloud size={13} />
                        </Btn>
                        <Btn small onClick={() => setEditing(law)} title="Tahrirlash">
                          <Pencil size={13} />
                        </Btn>
                        <Btn
                          small
                          variant="danger"
                          onClick={() => remove(law)}
                          title="O'chirish"
                        >
                          <Trash2 size={13} />
                        </Btn>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {editing !== undefined && (
        <LawEditor
          law={editing}
          onClose={() => setEditing(undefined)}
          onSaved={() => {
            setEditing(undefined);
            load();
          }}
        />
      )}
    </>
  );
}
