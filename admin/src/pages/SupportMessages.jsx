import React, { useState, useEffect } from "react";
import axios from "axios";
import s from "./Table.module.css";
import { API_BASE } from "../utils/apiBase";

const api = axios.create({
  baseURL: API_BASE,
  timeout: 20000,
});

api.interceptors.request.use((cfg) => {
  const token = localStorage.getItem("adminToken");
  if (token) cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});

export default function SupportMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // all, pending, resolved, password_reset
  // Parolni tiklash so'rovlari uchun holat: qaysi murojaat ustida ish
  // ketyapti, admin kiritgan ixtiyoriy parol va natija xabari.
  const [resettingId, setResettingId] = useState(null);
  const [customPass, setCustomPass] = useState({});
  const [resetResult, setResetResult] = useState({});

  useEffect(() => {
    loadMessages();
  }, []);

  async function loadMessages() {
    try {
      setLoading(true);
      const { data } = await api.get("/support", {
        headers: { "Cache-Control": "no-cache" },
        params: { _t: Date.now() },
      });
      const messages = Array.isArray(data) ? data : [];
      setMessages(messages);
      // Mark all pending messages as read
      const pendingIds = messages
        .filter((m) => m.status === "pending" && !m.read)
        .map((m) => m._id);
      if (pendingIds.length > 0) {
        await Promise.all(
          pendingIds.map((id) => api.patch(`/support/${id}`, { read: true })),
        );
      }
    } catch (err) {
      console.error("Xabar yuklashda xatolik:", err);
      setMessages([]);
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id, status) {
    try {
      await api.patch(`/support/${id}`, { status });
      setMessages(messages.map((m) => (m._id === id ? { ...m, status } : m)));
    } catch (err) {
      console.error("Status o'zgartirishda xatolik:", err);
    }
  }

  /* Parolni tiklash so'rovini bajarish — yangi parol o'rnatiladi va
     foydalanuvchi emailiga yuboriladi. Parol kiritilmasa, backend
     xavfsiz tasodifiy parol generatsiya qiladi. */
  async function resetPassword(msg) {
    const pass = (customPass[msg._id] || "").trim();
    if (pass && pass.length < 6) {
      setResetResult((p) => ({
        ...p,
        [msg._id]: { type: "error", text: "Parol kamida 6 ta belgi bo'lsin" },
      }));
      return;
    }
    if (
      !confirm(
        `${msg.email} uchun ${pass ? "kiritilgan" : "yangi (avtomatik)"} parol o'rnatilib, emailiga yuborilsinmi?`,
      )
    )
      return;

    setResettingId(msg._id);
    setResetResult((p) => ({ ...p, [msg._id]: null }));
    try {
      const { data } = await api.patch(`/admin/support/${msg._id}/reset-password`, {
        newPassword: pass || undefined,
      });
      setResetResult((p) => ({
        ...p,
        [msg._id]: { type: "ok", text: data.message },
      }));
      setCustomPass((p) => ({ ...p, [msg._id]: "" }));
      setMessages((prev) =>
        prev.map((m) =>
          m._id === msg._id
            ? { ...m, status: "resolved", read: true, passwordResetAt: new Date().toISOString() }
            : m,
        ),
      );
    } catch (err) {
      setResetResult((p) => ({
        ...p,
        [msg._id]: {
          type: "error",
          text: err.response?.data?.error || "Xatolik yuz berdi",
        },
      }));
    } finally {
      setResettingId(null);
    }
  }

  async function deleteMessage(id) {
    if (!confirm("Rostdan ham o'chirmoqchimisiz?")) return;
    try {
      await api.delete(`/support/${id}`);
      setMessages(messages.filter((m) => m._id !== id));
    } catch (err) {
      console.error("Xabarni o'chirishda xatolik:", err);
    }
  }

  const filtered = Array.isArray(messages)
    ? messages.filter((m) => {
        if (filter === "all") return true;
        if (filter === "password_reset") return m.type === "password_reset";
        return m.status === filter;
      })
    : [];

  const pendingCount = Array.isArray(messages)
    ? messages.filter((m) => m.status === "pending").length
    : 0;

  const resetCount = Array.isArray(messages)
    ? messages.filter(
        (m) => m.type === "password_reset" && m.status === "pending",
      ).length
    : 0;

  const filterBtnStyle = (id) => ({
    padding: "8px 16px",
    borderRadius: "8px",
    border:
      filter === id ? "2px solid var(--accent)" : "1px solid var(--border)",
    background: filter === id ? "var(--accent-bg)" : "var(--bg)",
    color: "var(--text)",
    cursor: "pointer",
  });

  return (
    <div style={{ padding: "2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "24px", color: "var(--text)" }}>
          Texnik yordam xabarlari
          {pendingCount > 0 && (
            <span
              style={{
                marginLeft: "1rem",
                background: "var(--accent)",
                color: "#fff",
                padding: "2px 10px",
                borderRadius: "12px",
                fontSize: "14px",
              }}
            >
              {pendingCount} yangi
            </span>
          )}
        </h1>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            onClick={() => setFilter("all")}
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              border:
                filter === "all"
                  ? "2px solid var(--accent)"
                  : "1px solid var(--border)",
              background: filter === "all" ? "var(--accent-bg)" : "var(--bg)",
              color: "var(--text)",
              cursor: "pointer",
            }}
          >
            Barchasi ({Array.isArray(messages) ? messages.length : 0})
          </button>
          <button
            onClick={() => setFilter("pending")}
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              border:
                filter === "pending"
                  ? "2px solid var(--accent)"
                  : "1px solid var(--border)",
              background:
                filter === "pending" ? "var(--accent-bg)" : "var(--bg)",
              color: "var(--text)",
              cursor: "pointer",
            }}
          >
            Kutilmoqda ({pendingCount})
          </button>
          <button
            onClick={() => setFilter("password_reset")}
            style={filterBtnStyle("password_reset")}
          >
            🔑 Parol tiklash ({resetCount})
          </button>
          <button
            onClick={() => setFilter("resolved")}
            style={filterBtnStyle("resolved")}
          >
            Hal qilindi (
            {Array.isArray(messages)
              ? messages.filter((m) => m.status === "resolved").length
              : 0}
            )
          </button>
        </div>
      </div>

      {loading ? (
        <div
          style={{
            textAlign: "center",
            padding: "2rem",
            color: "var(--text2)",
          }}
        >
          Yuklanmoqda...
        </div>
      ) : filtered.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "3rem",
            color: "var(--text2)",
          }}
        >
          Xabarlar yo'q
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {filtered.map((msg) => (
            <div
              key={msg._id}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "1.5rem",
                borderLeft:
                  msg.status === "pending"
                    ? "4px solid var(--accent)"
                    : "4px solid #10b981",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "16px",
                      color: "var(--text)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {msg.name || "Noma'lum"}
                    {msg.type === "password_reset" && (
                      <span
                        style={{
                          marginLeft: "0.6rem",
                          padding: "2px 10px",
                          borderRadius: "20px",
                          fontSize: "12px",
                          fontWeight: 600,
                          background: "#fef3c7",
                          color: "#b45309",
                          verticalAlign: "middle",
                        }}
                      >
                        🔑 Parolni tiklash
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: "14px", color: "var(--text2)" }}>
                    {msg.email || "Email yo'q"}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: 500,
                      background:
                        msg.status === "pending"
                          ? "var(--accent-bg)"
                          : "#d1fae5",
                      color:
                        msg.status === "pending" ? "var(--accent)" : "#10b981",
                    }}
                  >
                    {msg.status === "pending" ? "Kutilmoqda" : "Hal qilindi"}
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--text2)" }}>
                    {new Date(msg.createdAt).toLocaleString("uz-UZ")}
                  </span>
                </div>
              </div>
              <div
                style={{
                  background: "var(--bg)",
                  padding: "1rem",
                  borderRadius: "8px",
                  fontSize: "14px",
                  color: "var(--text)",
                  lineHeight: "1.6",
                }}
              >
                {msg.message}
              </div>

              {/* Parolni tiklash so'rovi — bir bosishda yangi parol
                  o'rnatiladi va foydalanuvchi emailiga yuboriladi. */}
              {msg.type === "password_reset" && (
                <div
                  style={{
                    marginTop: "1rem",
                    padding: "1rem",
                    borderRadius: "8px",
                    background: "#fffbeb",
                    border: "1px solid #fde68a",
                  }}
                >
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#92400e",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Yangi parol <b>{msg.email}</b> manziliga avtomatik
                    yuboriladi. Parolni bo'sh qoldirsangiz — tizim xavfsiz
                    tasodifiy parol yaratadi.
                  </div>
                  {msg.passwordResetAt && (
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#047857",
                        marginBottom: "0.75rem",
                      }}
                    >
                      ✓ Parol yangilangan:{" "}
                      {new Date(msg.passwordResetAt).toLocaleString("uz-UZ")}
                    </div>
                  )}
                  {resetResult[msg._id] && (
                    <div
                      style={{
                        fontSize: "13px",
                        marginBottom: "0.75rem",
                        color:
                          resetResult[msg._id].type === "ok"
                            ? "#047857"
                            : "#b91c1c",
                      }}
                    >
                      {resetResult[msg._id].type === "ok" ? "✓ " : "✕ "}
                      {resetResult[msg._id].text}
                    </div>
                  )}
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="text"
                      value={customPass[msg._id] || ""}
                      onChange={(e) =>
                        setCustomPass((p) => ({
                          ...p,
                          [msg._id]: e.target.value,
                        }))
                      }
                      placeholder="Ixtiyoriy: o'z parolingizni kiriting"
                      style={{
                        flex: "1 1 220px",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        border: "1px solid var(--border)",
                        background: "var(--bg)",
                        color: "var(--text)",
                        fontSize: "14px",
                      }}
                    />
                    <button
                      onClick={() => resetPassword(msg)}
                      disabled={resettingId === msg._id}
                      style={{
                        padding: "8px 16px",
                        borderRadius: "8px",
                        border: "none",
                        background: "#b45309",
                        color: "#fff",
                        cursor:
                          resettingId === msg._id ? "not-allowed" : "pointer",
                        fontSize: "14px",
                        fontWeight: 500,
                        opacity: resettingId === msg._id ? 0.6 : 1,
                      }}
                    >
                      {resettingId === msg._id
                        ? "Yuborilmoqda..."
                        : "🔑 Yangi parol yuborish"}
                    </button>
                  </div>
                </div>
              )}

              <div
                style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}
              >
                {msg.status === "pending" ? (
                  <button
                    onClick={() => updateStatus(msg._id, "resolved")}
                    style={{
                      padding: "8px 16px",
                      borderRadius: "8px",
                      border: "none",
                      background: "#10b981",
                      color: "#fff",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    Hal qildi
                  </button>
                ) : (
                  <button
                    onClick={() => updateStatus(msg._id, "pending")}
                    style={{
                      padding: "8px 16px",
                      borderRadius: "8px",
                      border: "1px solid var(--border)",
                      background: "var(--bg)",
                      color: "var(--text)",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    Qayta ochish
                  </button>
                )}
                <button
                  onClick={() => deleteMessage(msg._id)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    border: "1px solid #ef4444",
                    background: "transparent",
                    color: "#ef4444",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  O'chirish
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
