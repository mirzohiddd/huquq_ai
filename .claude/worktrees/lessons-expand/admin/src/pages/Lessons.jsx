import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  GraduationCap,
  Plus,
  Pencil,
  Trash2,
  X,
  RefreshCw,
  UploadCloud,
  FileText,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import api from "../utils/api";
import {
  PageHeader,
  Btn,
  Loader,
  EmptyState,
  Badge,
} from "../components/Shared";
import s from "./Table.module.css";
import ms from "./Modal.module.css";
import es from "./ContentEditor.module.css";

// HTML teglarini olib tashlab, bo'lim ichidagi matndan qisqa
// ko'rinish (preview snippet) yasaydi — admin panelida oldindan
// ko'rish uchun, saqlashda ishlatilmaydi.
function stripHtmlPreview(html, max = 140) {
  const text = String(html || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > max ? text.slice(0, max) + "…" : text;
}

/* ── Modal wrapper (Users.jsx bilan bir xil naqsh) ── */
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
      <div className={`${ms.modal} ${ms.wide}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

/* ── Dars qo'shish/tahrirlash oynasi ──
   Kontent endi qo'lda yozilmaydi — faqat PDF import orqali to'ldiriladi
   (pastdagi "PDF orqali import qilish" bloki). Title/Desc/Video/Order
   kabi metama'lumotlar qo'lda tahrirlanadi. */
function LessonEditor({ lesson, onClose, onSaved }) {
  const isNew = !lesson;
  const [title, setTitle] = useState(lesson?.title || "");
  const [desc, setDesc] = useState(lesson?.desc || "");
  const [videoUrl, setVideoUrl] = useState(lesson?.videoUrl || "");
  const [order, setOrder] = useState(lesson?.order ?? 0);
  const [published, setPublished] = useState(lesson?.published ?? true);
  const [sections, setSections] = useState(lesson?.sections || []);
  const [sourceType, setSourceType] = useState(lesson?.sourceType || "manual");
  const [importMeta, setImportMeta] = useState(lesson?.importMeta || null);

  const [importing, setImporting] = useState(false);
  const [importWarnings, setImportWarnings] = useState([]);
  const [importedFileName, setImportedFileName] = useState("");
  const fileInputRef = useRef(null);

  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  async function handlePdfSelected(e) {
    const file = e.target.files?.[0];
    e.target.value = ""; // xuddi shu faylni qayta tanlash imkonini saqlab qolish
    if (!file) return;

    setErr("");
    setImportWarnings([]);
    setImporting(true);
    try {
      const form = new FormData();
      form.append("file", file);
      const { data } = await api.post("/admin/content/lessons/import-pdf", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSections(data.sections || []);
      setSourceType("pdf");
      setImportMeta(data.meta || null);
      setImportedFileName(file.name);
      setImportWarnings(data.warnings || []);
      // Sarlavha bo'sh bo'lsa — PDF'dan aniqlangan nom bilan to'ldiramiz
      // (admin baribir keyin o'zgartira oladi).
      if (!title.trim() && data.title) setTitle(data.title);
    } catch (ex) {
      setErr(ex.response?.data?.error || "PDF import qilishda xatolik yuz berdi");
    } finally {
      setImporting(false);
    }
  }

  async function save() {
    setErr("");
    if (!title.trim()) return setErr("Sarlavha kerak");
    if (!sections.length) {
      return setErr("Kontent yo'q — avval PDF fayl import qiling");
    }
    setBusy(true);
    try {
      const payload = {
        title: title.trim(),
        desc: desc.trim(),
        videoUrl: videoUrl.trim(),
        sections,
        sourceType,
        importMeta,
        order: Number(order) || 0,
        published,
      };
      if (isNew) {
        await api.post("/admin/content/lessons", payload);
      } else {
        await api.put(`/admin/content/lessons/${lesson._id}`, payload);
      }
      onSaved();
    } catch (ex) {
      setErr(ex.response?.data?.error || "Xatolik yuz berdi");
    } finally {
      setBusy(false);
    }
  }

  return (
    <Modal onClose={onClose}>
      <div className={ms.header}>
        <div className={ms.headerLeft}>
          <div className={ms.headerIcon}>
            <GraduationCap size={18} />
          </div>
          <div>
            <div className={ms.headerTitle}>
              {isNew ? "Yangi dars qo'shish" : "Darsni tahrirlash"}
            </div>
            <div className={ms.headerSub}>Darslar bo'limi</div>
          </div>
        </div>
        <button className={ms.closeBtn} onClick={onClose}>
          <X size={16} />
        </button>
      </div>

      <div className={ms.body} style={{ maxHeight: "70vh", overflowY: "auto" }}>
        <div className={ms.field}>
          <label className={ms.fieldLabel}>Sarlavha</label>
          <input
            className={ms.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Masalan: Mehnat huquqi asoslari"
          />
        </div>

        <div className={ms.field}>
          <label className={ms.fieldLabel}>Qisqa tavsif</label>
          <textarea
            className={es.textarea}
            style={{ minHeight: 44 }}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Kartada ko'rinadigan qisqa izoh"
          />
        </div>

        <div className={ms.field}>
          <label className={ms.fieldLabel}>Video havolasi (ixtiyoriy)</label>
          <input
            className={ms.input}
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="YouTube havolasi yoki to'g'ridan-to'g'ri video manzili"
          />
        </div>

        <div className={es.inlineRow}>
          <div className={ms.field}>
            <label className={ms.fieldLabel}>Tartib raqami</label>
            <input
              className={ms.input}
              type="number"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
            />
          </div>
          <div className={ms.field} style={{ justifyContent: "flex-end" }}>
            <label className={es.checkboxRow}>
              <input
                type="checkbox"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
              />
              Foydalanuvchilarga ko'rinsin (nashr qilingan)
            </label>
          </div>
        </div>

        <div className={ms.field}>
          <label className={ms.fieldLabel}>Dars kontenti — PDF orqali import</label>

          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
            style={{ display: "none" }}
            onChange={handlePdfSelected}
          />
          <button
            type="button"
            className={es.addBtn}
            disabled={importing}
            onClick={() => fileInputRef.current?.click()}
          >
            {importing ? (
              <>
                <span className={ms.spinner} /> PDF qayta ishlanmoqda...
              </>
            ) : (
              <>
                <UploadCloud size={15} />
                {sections.length ? "Boshqa PDF bilan almashtirish" : "PDF fayl yuklash"}
              </>
            )}
          </button>

          {importedFileName && !importing && (
            <div className={es.checkboxRow} style={{ marginTop: 8 }}>
              <FileText size={14} /> {importedFileName} — {sections.length} ta bo'lim aniqlandi
            </div>
          )}

          {importWarnings.length > 0 && (
            <div className={ms.alertErr} style={{ marginTop: 8 }}>
              {importWarnings.map((w, i) => (
                <div key={i} style={{ display: "flex", gap: 6, alignItems: "flex-start" }}>
                  <AlertTriangle size={13} style={{ flexShrink: 0, marginTop: 2 }} /> {w}
                </div>
              ))}
            </div>
          )}

          {/* Import qilingan bo'limlarning o'qish uchun preview'i —
              bu yerda kontent qo'lda tahrirlanmaydi, faqat ko'zdan
              kechiriladi. O'zgartirish kerak bo'lsa yangi PDF import
              qilinadi. */}
          {sections.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: 12 }}>
              {sections.map((sec, i) => (
                <div key={sec.anchor || i} className={es.repeaterItem}>
                  <div className={es.repeaterHead}>
                    <span className={es.repeaterIndex}>
                      Bo'lim {i + 1} · #{sec.level || 2}
                    </span>
                    <CheckCircle2 size={14} style={{ color: "var(--green)" }} />
                  </div>
                  <strong style={{ fontSize: 13.5 }}>{sec.heading}</strong>
                  <p style={{ fontSize: 12.5, color: "var(--text3)", margin: 0 }}>
                    {stripHtmlPreview(sec.html || sec.text)}
                  </p>
                </div>
              ))}
            </div>
          )}

          {!sections.length && !importing && (
            <p style={{ fontSize: 12.5, color: "var(--text3)", marginTop: 8 }}>
              Hali kontent yo'q — dars matnini avtomatik chiqarib olish uchun
              yuqoridagi tugma orqali PDF fayl yuklang.
            </p>
          )}
        </div>

        {err && <div className={ms.alertErr}>{err}</div>}
      </div>

      <div className={ms.footer}>
        <button className={ms.btnCancel} onClick={onClose}>
          Bekor qilish
        </button>
        <button className={ms.btnPrimary} onClick={save} disabled={busy}>
          {busy ? (
            <>
              <span className={ms.spinner} /> Saqlanmoqda...
            </>
          ) : (
            "Saqlash"
          )}
        </button>
      </div>
    </Modal>
  );
}

/* ── Asosiy komponent ── */
export default function Lessons() {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(null); // null=yopiq, {}=yangi, obj=tahrirlash
  const [busy, setBusy] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await api.get("/admin/content/lessons");
      setLessons(data.lessons || []);
    } catch {
      /* silent */
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function remove(id, title) {
    if (!window.confirm(`"${title}" darsini o'chirishni tasdiqlaysizmi?`)) return;
    setBusy(id);
    try {
      await api.delete(`/admin/content/lessons/${id}`);
      load();
    } finally {
      setBusy(null);
    }
  }

  async function togglePublish(lesson) {
    setBusy(lesson._id);
    try {
      await api.put(`/admin/content/lessons/${lesson._id}`, {
        title: lesson.title,
        desc: lesson.desc,
        videoUrl: lesson.videoUrl,
        sections: lesson.sections,
        order: lesson.order,
        published: !lesson.published,
      });
      load();
    } finally {
      setBusy(null);
    }
  }

  return (
    <div>
      {editing !== null && (
        <LessonEditor
          lesson={editing._id ? editing : null}
          onClose={() => setEditing(null)}
          onSaved={() => {
            setEditing(null);
            load();
          }}
        />
      )}

      <PageHeader
        title={
          <>
            <GraduationCap size={20} /> Darslar ({lessons.length})
          </>
        }
      >
        <Btn variant="ghost" onClick={load}>
          <RefreshCw size={16} /> Yangilash
        </Btn>
        <Btn variant="primary" onClick={() => setEditing({})}>
          <Plus size={16} /> Yangi dars
        </Btn>
      </PageHeader>

      {loading && <Loader />}
      {!loading && lessons.length === 0 && (
        <EmptyState icon={<GraduationCap size={32} />} text="Hali dars qo'shilmagan" />
      )}

      {!loading && lessons.length > 0 && (
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>Tartib</th>
                <th>Sarlavha</th>
                <th>Bo'limlar</th>
                <th>Video</th>
                <th>Holat</th>
                <th>Amal</th>
              </tr>
            </thead>
            <tbody>
              {lessons.map((l) => (
                <tr key={l._id}>
                  <td className={s.center}>
                    <span className={s.count}>{l.order}</span>
                  </td>
                  <td>
                    <span className={s.username}>{l.title}</span>
                    {l.desc && <span className={s.fullname}>{l.desc}</span>}
                  </td>
                  <td className={s.center}>{l.sections?.length || 0}</td>
                  <td className={s.center}>
                    {l.videoUrl ? (
                      <Badge type="active">Bor</Badge>
                    ) : (
                      <span className={s.anon}>—</span>
                    )}
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => togglePublish(l)}
                      disabled={busy === l._id}
                      className={`${es.publishBadge} ${l.published ? es.publishOn : es.publishOff}`}
                      style={{ cursor: "pointer" }}
                      title="Bosib holatni almashtiring"
                    >
                      {l.published ? "Ko'rinadi" : "Yashirin"}
                    </button>
                  </td>
                  <td>
                    <div className={s.actions}>
                      <Btn
                        small
                        variant="ghost"
                        disabled={busy === l._id}
                        onClick={() => setEditing(l)}
                        title="Tahrirlash"
                      >
                        <Pencil size={14} />
                      </Btn>
                      <Btn
                        small
                        variant="danger"
                        disabled={busy === l._id}
                        onClick={() => remove(l._id, l.title)}
                        title="O'chirish"
                      >
                        <Trash2 size={14} />
                      </Btn>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
