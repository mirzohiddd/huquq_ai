import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  ClipboardCheck,
  Plus,
  Pencil,
  Trash2,
  X,
  RefreshCw,
  UploadCloud,
  FileText,
  AlertTriangle,
} from "lucide-react";
import api from "../utils/api";
import {
  PageHeader,
  Btn,
  Loader,
  EmptyState,
} from "../components/Shared";
import s from "./Table.module.css";
import ms from "./Modal.module.css";
import es from "./ContentEditor.module.css";

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

function emptyQuestion() {
  return { q: "", options: ["", ""], correct: 0, explain: "" };
}

/* ── Test qo'shish/tahrirlash oynasi ── */
function TestEditor({ test, onClose, onSaved }) {
  const isNew = !test;
  const [title, setTitle] = useState(test?.title || "");
  const [desc, setDesc] = useState(test?.desc || "");
  const [order, setOrder] = useState(test?.order ?? 0);
  const [published, setPublished] = useState(test?.published ?? true);
  const [questions, setQuestions] = useState(
    test?.questions?.length ? test.questions : [emptyQuestion()],
  );
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  const [importing, setImporting] = useState(false);
  const [importWarnings, setImportWarnings] = useState([]);
  const [importedFileName, setImportedFileName] = useState("");
  const fileInputRef = useRef(null);

  // PDF ichida nechta savol bo'lsa, shuncha savol qaytariladi — soni
  // qattiq belgilanmagan. Qayta PDF yuklansa, mavjud savollar
  // YANGISI BILAN ALMASHTIRILADI (admin baribir saqlashdan oldin
  // pastdagi ro'yxatda ko'rib, kerak bo'lsa qo'lda tuzatishi mumkin).
  async function handlePdfSelected(e) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    setErr("");
    setImportWarnings([]);
    setImporting(true);
    try {
      const form = new FormData();
      form.append("file", file);
      const { data } = await api.post("/admin/content/tests/import-pdf", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (data.questions?.length) setQuestions(data.questions);
      setImportedFileName(file.name);
      setImportWarnings(data.warnings || []);
      if (!title.trim() && data.title) setTitle(data.title);
    } catch (ex) {
      setErr(ex.response?.data?.error || "PDF import qilishda xatolik yuz berdi");
    } finally {
      setImporting(false);
    }
  }

  function updateQ(i, field, value) {
    setQuestions((prev) =>
      prev.map((q, idx) => (idx === i ? { ...q, [field]: value } : q)),
    );
  }
  function updateOption(qi, oi, value) {
    setQuestions((prev) =>
      prev.map((q, idx) => {
        if (idx !== qi) return q;
        const options = q.options.map((o, oidx) => (oidx === oi ? value : o));
        return { ...q, options };
      }),
    );
  }
  function addOption(qi) {
    setQuestions((prev) =>
      prev.map((q, idx) =>
        idx === qi ? { ...q, options: [...q.options, ""] } : q,
      ),
    );
  }
  function removeOption(qi, oi) {
    setQuestions((prev) =>
      prev.map((q, idx) => {
        if (idx !== qi) return q;
        const options = q.options.filter((_, oidx) => oidx !== oi);
        const correct = q.correct >= options.length ? 0 : q.correct;
        return { ...q, options, correct };
      }),
    );
  }
  function addQuestion() {
    setQuestions((prev) => [...prev, emptyQuestion()]);
  }
  function removeQuestion(i) {
    setQuestions((prev) => prev.filter((_, idx) => idx !== i));
  }

  async function save() {
    setErr("");
    if (!title.trim()) return setErr("Sarlavha kerak");
    const cleanQuestions = questions.map((q) => ({
      q: q.q.trim(),
      options: q.options.map((o) => o.trim()).filter(Boolean),
      correct: Number(q.correct) || 0,
      explain: q.explain.trim(),
    }));
    if (cleanQuestions.some((q) => !q.q)) {
      return setErr("Har bir savol matni to'ldirilishi kerak");
    }
    if (cleanQuestions.some((q) => q.options.length < 2)) {
      return setErr("Har bir savolda kamida 2 ta variant bo'lishi kerak");
    }
    if (cleanQuestions.some((q) => q.correct >= q.options.length)) {
      return setErr("To'g'ri javob belgilanmagan savol bor");
    }
    setBusy(true);
    try {
      const payload = {
        title: title.trim(),
        desc: desc.trim(),
        questions: cleanQuestions,
        order: Number(order) || 0,
        published,
      };
      if (isNew) {
        await api.post("/admin/content/tests", payload);
      } else {
        await api.put(`/admin/content/tests/${test._id}`, payload);
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
            <ClipboardCheck size={18} />
          </div>
          <div>
            <div className={ms.headerTitle}>
              {isNew ? "Yangi test qo'shish" : "Testni tahrirlash"}
            </div>
            <div className={ms.headerSub}>Testlar bo'limi</div>
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
            placeholder="Masalan: Mehnat huquqi"
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
          <label className={ms.fieldLabel}>Savollarni PDF orqali import qilish (ixtiyoriy)</label>

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
                <UploadCloud size={15} /> PDF fayl yuklash
              </>
            )}
          </button>

          {importedFileName && !importing && (
            <div className={es.checkboxRow} style={{ marginTop: 8 }}>
              <FileText size={14} /> {importedFileName} — {questions.length} ta savol aniqlandi
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

          <p style={{ fontSize: 12.5, color: "var(--text3)", marginTop: 8 }}>
            Format: har bir savol "1. Savol matni?" bilan boshlanadi, variantlar
            "A) ...", "B) ..." qatorlarida, to'g'ri javob "Javob: B" qatorida
            ko'rsatiladi (izoh uchun ixtiyoriy "Izoh: ..." qatori). Yuklangan
            savollar pastdagi ro'yxatga tushadi — saqlashdan oldin kerak bo'lsa
            qo'lda tuzatishingiz mumkin.
          </p>
        </div>

        <div className={ms.field}>
          <label className={ms.fieldLabel}>Savollar</label>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {questions.map((q, qi) => (
              <div key={qi} className={es.repeaterItem}>
                <div className={es.repeaterHead}>
                  <span className={es.repeaterIndex}>Savol {qi + 1}</span>
                  {questions.length > 1 && (
                    <button
                      type="button"
                      className={es.removeBtn}
                      onClick={() => removeQuestion(qi)}
                    >
                      <Trash2 size={13} />
                    </button>
                  )}
                </div>

                <textarea
                  className={es.textarea}
                  style={{ minHeight: 44 }}
                  value={q.q}
                  onChange={(e) => updateQ(qi, "q", e.target.value)}
                  placeholder="Savol matni"
                />

                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {q.options.map((opt, oi) => (
                    <div key={oi} className={es.optionRow}>
                      <input
                        type="radio"
                        className={es.correctRadio}
                        name={`correct-${qi}`}
                        checked={q.correct === oi}
                        onChange={() => updateQ(qi, "correct", oi)}
                        title="To'g'ri javob"
                      />
                      <input
                        className={`${ms.input} ${es.optionInput}`}
                        value={opt}
                        onChange={(e) => updateOption(qi, oi, e.target.value)}
                        placeholder={`Variant ${oi + 1}`}
                      />
                      {q.options.length > 2 && (
                        <button
                          type="button"
                          className={es.removeBtn}
                          onClick={() => removeOption(qi, oi)}
                        >
                          <Trash2 size={12} />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    className={es.addBtn}
                    onClick={() => addOption(qi)}
                  >
                    <Plus size={13} /> Variant qo'shish
                  </button>
                </div>

                <div className={ms.field} style={{ gap: "0.3rem" }}>
                  <label className={ms.fieldLabel}>Javob izohi (ixtiyoriy)</label>
                  <textarea
                    className={es.textarea}
                    style={{ minHeight: 44 }}
                    value={q.explain}
                    onChange={(e) => updateQ(qi, "explain", e.target.value)}
                    placeholder="Javob berilgandan keyin foydalanuvchiga chiqadigan tushuntirish"
                  />
                </div>
              </div>
            ))}
            <button type="button" className={es.addBtn} onClick={addQuestion}>
              <Plus size={14} /> Savol qo'shish
            </button>
          </div>
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
export default function Tests() {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(null);
  const [busy, setBusy] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await api.get("/admin/content/tests");
      setTests(data.tests || []);
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
    if (!window.confirm(`"${title}" testini o'chirishni tasdiqlaysizmi?`)) return;
    setBusy(id);
    try {
      await api.delete(`/admin/content/tests/${id}`);
      load();
    } finally {
      setBusy(null);
    }
  }

  async function togglePublish(test) {
    setBusy(test._id);
    try {
      await api.put(`/admin/content/tests/${test._id}`, {
        title: test.title,
        desc: test.desc,
        questions: test.questions,
        order: test.order,
        published: !test.published,
      });
      load();
    } finally {
      setBusy(null);
    }
  }

  return (
    <div>
      {editing !== null && (
        <TestEditor
          test={editing._id ? editing : null}
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
            <ClipboardCheck size={20} /> Testlar ({tests.length})
          </>
        }
      >
        <Btn variant="ghost" onClick={load}>
          <RefreshCw size={16} /> Yangilash
        </Btn>
        <Btn variant="primary" onClick={() => setEditing({})}>
          <Plus size={16} /> Yangi test
        </Btn>
      </PageHeader>

      {loading && <Loader />}
      {!loading && tests.length === 0 && (
        <EmptyState icon={<ClipboardCheck size={32} />} text="Hali test qo'shilmagan" />
      )}

      {!loading && tests.length > 0 && (
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>Tartib</th>
                <th>Sarlavha</th>
                <th>Savollar</th>
                <th>Holat</th>
                <th>Amal</th>
              </tr>
            </thead>
            <tbody>
              {tests.map((t) => (
                <tr key={t._id}>
                  <td className={s.center}>
                    <span className={s.count}>{t.order}</span>
                  </td>
                  <td>
                    <span className={s.username}>{t.title}</span>
                    {t.desc && <span className={s.fullname}>{t.desc}</span>}
                  </td>
                  <td className={s.center}>{t.questions?.length || 0}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => togglePublish(t)}
                      disabled={busy === t._id}
                      className={`${es.publishBadge} ${t.published ? es.publishOn : es.publishOff}`}
                      style={{ cursor: "pointer" }}
                      title="Bosib holatni almashtiring"
                    >
                      {t.published ? "Ko'rinadi" : "Yashirin"}
                    </button>
                  </td>
                  <td>
                    <div className={s.actions}>
                      <Btn
                        small
                        variant="ghost"
                        disabled={busy === t._id}
                        onClick={() => setEditing(t)}
                        title="Tahrirlash"
                      >
                        <Pencil size={14} />
                      </Btn>
                      <Btn
                        small
                        variant="danger"
                        disabled={busy === t._id}
                        onClick={() => remove(t._id, t.title)}
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
