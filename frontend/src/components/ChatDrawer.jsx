import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLang } from "../context/LangContext";
import { useChatPanel } from "../context/ChatPanelContext";
import {
  MessageSquare,
  RefreshCw,
  X,
  Send,
  History,
  Trash2,
  Paperclip,
  Mic,
  Lock,
  Scale,
  AlertCircle,
  AlertTriangle,
  Check,
} from "lucide-react";
import LangSwitcher from "./LangSwitcher";
import SpeakButton from "./SpeakButton";
import api from "../utils/api";
import {
  loadHistory,
  upsertSession,
  getStoredSession,
  getActiveSessionId,
  setActiveSessionId,
  deleteStoredSession,
  clearGuestData,
} from "../utils/chatStorage";
import s from "./ChatDrawer.module.css";

const TELEGRAM_URL = "https://t.me/mening_huquqlarim_bot";

function newUserSessionId(userId) {
  // Mehmon (userId yo'q) uchun tasodifiy qism qo'shiladi — turli mehmon
  // seanslari bir xil ID olib qolmasligi uchun.
  if (!userId) {
    return `web_guest_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  }
  return `web_${userId}_${Date.now()}`;
}

function formatDate(ts, lang) {
  // MUHIM: toLocaleDateString bayroq-emoji emas, BCP-47 til kodini kutadi
  // (masalan "ru-RU") — emoji berilsa RangeError tashlab, Tarix oynasini
  // butunlay ochilmay qo'yardi.
  const locale = lang === "ru" ? "ru-RU" : "uz-UZ";
  return new Date(ts).toLocaleDateString(locale, {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/* ─── Limit indikatori ─── */
function UsageBadge({ usage }) {
  if (!usage) return null;
  const { used, limit } = usage;
  const pct = Math.min(100, Math.round((used / limit) * 100));
  const color = pct >= 100 ? "#dc2626" : pct >= 80 ? "#f59e0b" : "#16a34a";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: "0.75rem",
        color,
        fontWeight: 600,
        padding: "2px 8px",
        borderRadius: 20,
        background: color + "18",
        border: `1px solid ${color}40`,
      }}
    >
      {used}/{limit}
    </div>
  );
}

/* ─── Bepul limit tugaganda chiqadigan ro'yxatdan o'tish oynasi ───
   Mehmon (login qilmagan) foydalanuvchi bepul savollarini sarflagach
   chat ustida ko'rinadi. Chat suhbati o'chirilmaydi — foydalanuvchi
   olgan javoblarini o'qiy oladi, faqat yangi savol berish bloklanadi. */
function RegisterPrompt({ onClose, freeLimit }) {
  const navigate = useNavigate();
  const { t } = useLang();

  function goRegister() {
    onClose();
    navigate("/register");
  }
  function goLogin() {
    onClose();
    navigate("/login");
  }

  return (
    <div className={s.registerOverlay} role="dialog" aria-modal="true">
      <div className={s.registerCard}>
        <div className={s.registerIcon}>
          <Lock size={26} />
        </div>
        <h3 className={s.registerTitle}>{t.guest_limit_title}</h3>
        <p className={s.registerDesc}>
          {(t.guest_limit_desc || "").replace("{n}", freeLimit)}
        </p>

        <ul className={s.registerFeatures}>
          <li>
            <Check size={15} /> {t.guest_feature_ai}
          </li>
          <li>
            <Check size={15} /> {t.guest_feature_lessons}
          </li>
          <li>
            <Check size={15} /> {t.guest_feature_tests}
          </li>
          <li>
            <Check size={15} /> {t.guest_feature_library}
          </li>
        </ul>

        <button type="button" className={s.registerBtn} onClick={goRegister}>
          {t.nav_register}
        </button>
        <button type="button" className={s.registerLoginLink} onClick={goLogin}>
          {t.guest_have_account}
        </button>
      </div>
    </div>
  );
}

export default function ChatDrawer() {
  const { user } = useAuth();
  const { t, lang } = useLang();
  const { isOpen, closeChat, pendingMessage, clearPending } = useChatPanel();
  const navigate = useNavigate();

  const uid = user?.id || null;

  const [view, setView] = useState("chat");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [historyList, setHistoryList] = useState([]);
  const [usage, setUsage] = useState(null);
  const [imageFile, setImageFile] = useState(null); // tanlangan rasm
  const [imagePreview, setImagePreview] = useState(null); // preview URL
  // Mehmon bepul limitini sarflaganda chiqadigan ro'yxatdan o'tish oynasi
  const [showRegisterPrompt, setShowRegisterPrompt] = useState(false);

  const isGuest = !user;

  const bottomRef = useRef(null);
  const textaRef = useRef(null);
  const drawerRef = useRef(null);
  const initializedRef = useRef(false);
  const saveTimerRef = useRef(null);

  const refreshHistory = useCallback(async () => {
    if (!user) return;
    const local = loadHistory(uid);
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const { data } = await api.get("/chat/sessions");
        const apiSessions = (data.sessions || []).map((sess) => ({
          sessionId: sess.sessionId,
          title: sess.firstQuestion || t.drawer_no_title,
          updatedAt: new Date(sess.updatedAt).getTime(),
          messageCount: sess.messageCount,
          source: "api",
        }));
        const apiIds = new Set(apiSessions.map((a) => a.sessionId));
        const merged = [
          ...apiSessions,
          ...local.filter((h) => !apiIds.has(h.sessionId)),
        ].sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
        setHistoryList(merged.slice(0, 30));
        return;
      } catch {
        /* fallback */
      }
    }
    setHistoryList(local);
  }, [user, uid, t.drawer_no_title]);

  // Mehmon uchun ham ishlaydi — backend IP bo'yicha bepul limit holatini
  // qaytaradi ({ guest:true, used, limit, remaining }).
  const refreshUsage = useCallback(async () => {
    try {
      const { data } = await api.get("/chat/usage");
      setUsage(data);
    } catch {
      /* silent */
    }
  }, []);

  const restoreSession = useCallback(
    async (sid) => {
      if (!sid || !user) return;
      setLoading(true);
      setView("chat");
      setSessionId(sid);
      setActiveSessionId(sid, uid);
      const stored = getStoredSession(sid, uid);
      if (stored?.messages?.length) {
        setMessages(stored.messages);
        setLoading(false);
        return;
      }
      try {
        const { data } = await api.get(`/chat/${sid}`);
        setMessages(data.messages || []);
        upsertSession({
          sessionId: sid,
          messages: data.messages || [],
          userId: uid,
        });
      } catch {
        setMessages([]);
      } finally {
        setLoading(false);
      }
    },
    [user, uid],
  );

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      initializedRef.current = false;
      return;
    }
    document.body.style.overflow = "hidden";

    // Mehmon ham chatdan foydalana oladi — faqat serverdagi suhbatlar
    // tarixi (refreshHistory) login qilganlar uchun tortiladi.
    if (user) {
      clearGuestData();
      refreshHistory();
    }
    refreshUsage();

    if (!initializedRef.current) {
      initializedRef.current = true;
      const active = getActiveSessionId(uid);
      if (active) {
        const stored = getStoredSession(active, uid);
        if (stored?.messages?.length) {
          setSessionId(active);
          setMessages(stored.messages);
          setView("chat");
        } else {
          restoreSession(active);
        }
      } else {
        const id = newUserSessionId(uid);
        setSessionId(id);
        setActiveSessionId(id, uid);
      }
      setTimeout(() => textaRef.current?.focus(), 100);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, user, uid, refreshHistory, refreshUsage, restoreSession]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, isOpen, view]);

  /* ─── Mobil klaviatura ───
     Telefonda chat `position: fixed` bo'lgani uchun klaviatura ochilganda
     u BUTUN ekranni egallab turaveradi va pastdagi yozish qatori (shu
     jumladan YUBORISH tugmasi) klaviatura ORTIDA qolib ketadi.
     `visualViewport` haqiqiy ko'rinadigan balandlikni beradi — chat
     o'shanga moslanadi. API yo'q brauzerlarda o'zgaruvchi umuman
     qo'yilmaydi va CSS'dagi standart qiymat (100dvh) ishlaydi. */
  useEffect(() => {
    const vv = window.visualViewport;
    const el = drawerRef.current;
    if (!isOpen || !vv || !el) return;

    let raf = null;
    const write = () => {
      raf = null;
      // Faqat telefon ko'rinishida — desktopda chat yon panel va
      // uning balandligi klaviaturaga bog'liq emas.
      if (window.matchMedia("(max-width: 640px)").matches) {
        el.style.setProperty("--chat-h", `${Math.round(vv.height)}px`);
        /* ⚠️ SILJISH ham qoplanishi kerak, faqat balandlik EMAS.
           Klaviatura ochilganda brauzer ko'rinadigan maydonni pastga
           suradi (`offsetTop` > 0), `position: fixed` element esa
           MAKET maydoniga bog'langan holda qoladi — ya'ni chat
           ekranning tepasiga "ko'tarilib" ketadi va sarlavha bilan
           birinchi xabarlar ko'rinmay qoladi. Aynan shu "input'ni
           bossam tepaga ketyapti" muammosi edi. */
        el.style.setProperty("--chat-top", `${Math.round(vv.offsetTop)}px`);
      } else {
        el.style.removeProperty("--chat-h");
        el.style.removeProperty("--chat-top");
      }
    };
    /* `scroll` klaviatura ochilayotganda ketma-ket yonadi — har bir
       hodisada uslub yozish o'rniga bitta kadrga birlashtiramiz. */
    const apply = () => {
      if (raf === null) raf = requestAnimationFrame(write);
    };

    write();
    vv.addEventListener("resize", apply);
    /* ⚠️ `scroll` ham kerak: `offsetTop` klaviatura ochilgandan KEYIN,
       balandlik o'zgarmasdan ham o'zgaradi (foydalanuvchi maydonga
       bosganda brauzer ko'rinadigan maydonni suradi) va faqat `resize`
       ga tayanilsa chat siljigan holda qolib ketardi. */
    vv.addEventListener("scroll", apply);
    window.addEventListener("orientationchange", apply);
    return () => {
      if (raf !== null) cancelAnimationFrame(raf);
      vv.removeEventListener("resize", apply);
      vv.removeEventListener("scroll", apply);
      window.removeEventListener("orientationchange", apply);
      el.style.removeProperty("--chat-h");
      el.style.removeProperty("--chat-top");
    };
  }, [isOpen]);

  // Chat tashqaridan tayyor savol bilan ochilgan bo'lsa (masalan darsdagi
  // "Bu joyni tushuntirib ber" tugmasi) — sessiya tayyor bo'lishi bilan
  // savolni avtomatik yuboramiz.
  useEffect(() => {
    if (!isOpen || !pendingMessage || !sessionId || loading) return;
    const text = pendingMessage;
    clearPending();
    setView("chat");
    send(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, pendingMessage, sessionId]);

  useEffect(() => {
    if (!sessionId || messages.length === 0) return;
    clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      upsertSession({ sessionId, messages, userId: uid });
      setActiveSessionId(sessionId, uid);
      refreshHistory();
    }, 400);
    return () => clearTimeout(saveTimerRef.current);
  }, [messages, sessionId, uid, refreshHistory]);

  const startNew = useCallback(() => {
    setMessages([]);
    setView("chat");
    const id = newUserSessionId(uid);
    setSessionId(id);
    setActiveSessionId(id, uid);
  }, [uid]);

  async function openHistoryItem(item) {
    await restoreSession(item.sessionId);
  }

  async function deleteHistoryItem(e, sid) {
    e.stopPropagation();
    deleteStoredSession(sid, uid);
    try {
      await api.delete(`/chat/${sid}`);
    } catch {
      /* silent */
    }
    if (sessionId === sid) startNew();
    refreshHistory();
  }

  async function send(msgText) {
    const text = (msgText ?? input).trim();
    if (!text || loading) return;

    // Mehmon bepul savollarini sarflagan bo'lsa — server so'roviga bormay,
    // darhol ro'yxatdan o'tish oynasini ko'rsatamiz.
    if (isGuest && usage && usage.remaining === 0) {
      setShowRegisterPrompt(true);
      return;
    }

    setInput("");
    setView("chat");

    // Use existing sessionId or let backend create new one
    const sid = sessionId || null;

    // Rasim preview ni ko'rsatish
    const sentImage = imagePreview;
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: text,
        imagePreview: sentImage || undefined,
      },
    ]);
    setLoading(true);

    // Rasmni tozalash (yuborishdan oldin)
    const fileToSend = imageFile;
    setImageFile(null);
    setImagePreview(null);

    try {
      let data;
      if (fileToSend) {
        // FormData bilan yuborish
        const formData = new FormData();
        formData.append("message", text);
        if (sid) formData.append("sessionId", sid);
        formData.append("lang", lang);
        formData.append("image", fileToSend);
        const resp = await api.post("/chat", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        data = resp.data;
      } else {
        const resp = await api.post("/chat", {
          message: text,
          sessionId: sid,
          lang,
        });
        data = resp.data;
      }
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.answer },
      ]);
      setSessionId(data.sessionId);
      setActiveSessionId(data.sessionId, uid);
      if (data.usage) {
        setUsage(data.usage);
        // Mehmon oxirgi bepul savolini sarfladi — javobni o'qishga ulgursin
        // deb qisqa kechikish bilan ro'yxatdan o'tish oynasini ochamiz.
        if (data.usage.guest && data.usage.remaining === 0) {
          setTimeout(() => setShowRegisterPrompt(true), 1200);
        }
      }
    } catch (err) {
      const errData = err.response?.data;
      const msg = errData?.error || t.chat_error || "Xatolik yuz berdi";
      if (errData?.limitExceeded) {
        setUsage({
          guest: !!errData.guest,
          used: errData.used,
          limit: errData.limit,
          remaining: 0,
        });
      }
      // Mehmon limiti tugagan — chatga xato matni yozish o'rniga
      // to'g'ridan-to'g'ri ro'yxatdan o'tish oynasini ko'rsatamiz.
      if (errData?.registerRequired) {
        setShowRegisterPrompt(true);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: msg, isError: true },
        ]);
      }
    } finally {
      setLoading(false);
      textaRef.current?.focus();
    }
  }

  function onKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  function onPaste(e) {
    const items = e.clipboardData?.items;
    if (!items) return;
    for (const item of items) {
      if (item.type.startsWith("image/")) {
        const file = item.getAsFile();
        if (!file) continue;
        if (file.size > 5 * 1024 * 1024) {
          alert(
            t.chat_image_size_error || "Rasm hajmi 5MB dan oshmasligi kerak",
          );
          return;
        }
        e.preventDefault();
        setImageFile(file);
        const url = URL.createObjectURL(file);
        setImagePreview(url);
        return;
      }
    }
  }
  if (!isOpen) return null;

  const limitReached = usage && usage.remaining === 0;

  return (
    <>
      <div className={s.backdrop} onClick={closeChat} aria-hidden="true" />
      <aside
        ref={drawerRef}
        className={s.drawer}
        role="dialog"
        aria-modal="true"
        aria-label={t.drawer_title}
      >
        <header className={s.header}>
          <div className={s.headerLeft}>
            <a href="/" className={s.headerIcon}>
              <img width={30} src="/logo-96.png" alt="" />
            </a>
          </div>
          <div className={s.headerRight}>
            {usage && <UsageBadge usage={usage} />}
            {user &&
              (view === "chat" ? (
                <button
                  type="button"
                  className={s.historyBtn}
                  onClick={() => {
                    refreshHistory();
                    setView("history");
                  }}
                  title={t.drawer_history}
                >
                  <History size={18} />
                </button>
              ) : (
                <button
                  type="button"
                  className={s.historyBtn}
                  onClick={() => setView("chat")}
                  title={t.drawer_back_chat}
                >
                  <MessageSquare size={18} />
                </button>
              ))}
            <LangSwitcher dark compact />
            <button
              type="button"
              className={s.closeBtn}
              onClick={closeChat}
              aria-label={t.drawer_close}
            >
              <X size={18} />
            </button>
          </div>
        </header>

        {view === "history" ? (
          <div className={s.historyArea}>
            <button type="button" className={s.newChatFull} onClick={startNew}>
              + {t.drawer_new_chat}
            </button>
            {historyList.length === 0 ? (
              <p className={s.emptyHistory}>{t.drawer_no_history}</p>
            ) : (
              historyList.map((item) => (
                <div
                  key={item.sessionId}
                  className={`${s.historyItem} ${sessionId === item.sessionId ? s.historyActive : ""}`}
                  onClick={() => openHistoryItem(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && openHistoryItem(item)}
                >
                  <div className={s.historyMeta}>
                    <span className={s.historyTitle}>{item.title}</span>
                    <button
                      type="button"
                      className={s.historyDelete}
                      onClick={(e) => deleteHistoryItem(e, item.sessionId)}
                      aria-label="Delete"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <span className={s.historyDate}>
                    {item.updatedAt ? formatDate(item.updatedAt, lang) : ""}
                    {item.messageCount
                      ? ` · ${item.messageCount} ${t.chat_messages || "xabar"}`
                      : ""}
                  </span>
                </div>
              ))
            )}
          </div>
        ) : (
          <>
            <div className={s.msgArea}>
              {messages.length === 0 && !loading && (
                <div className={s.welcome}>
                  <div className={s.wIcon}>
                    <img width={40} src="/logo-96.png" alt="" />
                  </div>
                  <h3>
                    {t.chat_welcome_title}
                    {user ? `, ${user.fullName || user.username}` : ""}!
                  </h3>
                  <p>{t.chat_welcome_desc}</p>
                  <div className={s.quickGrid}>
                    {(t.quick_questions || []).slice(0, 4).map((q) => (
                      <button
                        key={q}
                        type="button"
                        className={s.quickBtn}
                        onClick={() => send(q)}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`${s.msg} ${s[m.role]}`}
                  style={{ animationDelay: `${i * 0.04}s` }}
                >
                  {m.role === "assistant" && (
                    <div className={s.avatar}>
                      <Scale size={16} />
                    </div>
                  )}
                  {m.role === "assistant" ? (
                    /* Ustunga o'ralgan: pufakcha tepada, "Eshitish"
                       tugmasi uning OSTIDA. `.msg` qator (flex row)
                       bo'lgani uchun o'ramsiz tugma pufakcha YONIDA
                       turib qolardi. */
                    <div className={s.bubbleWrap}>
                      <div
                        className={`${s.bubble} ${m.isError ? s.errBubble : ""}`}
                      >
                        {m.isError && (
                          <AlertCircle
                            size={14}
                            style={{ display: "inline", verticalAlign: "-2px", marginRight: 5 }}
                          />
                        )}
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            p: (p) => <p className={s.mdP} {...p} />,
                            strong: (p) => <strong className={s.mdB} {...p} />,
                            ul: (p) => <ul className={s.mdUl} {...p} />,
                            ol: (p) => <ol className={s.mdOl} {...p} />,
                            li: (p) => <li className={s.mdLi} {...p} />,
                          }}
                        >
                          {m.content}
                        </ReactMarkdown>
                      </div>
                      {/* Xato xabarini ovozga aylantirishdan ma'no yo'q */}
                      {!m.isError && m.content?.trim() && (
                        <SpeakButton text={m.content} />
                      )}
                    </div>
                  ) : (
                    <div className={s.bubble}>
                      {m.imagePreview && (
                        <img
                          src={m.imagePreview}
                          alt="yuklangan rasm"
                          style={{
                            maxWidth: "100%",
                            maxHeight: 180,
                            borderRadius: 8,
                            display: "block",
                            marginBottom: 6,
                          }}
                        />
                      )}
                      <p>{m.content}</p>
                    </div>
                  )}
                  {m.role === "user" && (
                    <div className={s.avatarU}>
                      {user?.username?.[0]?.toUpperCase() || "?"}
                    </div>
                  )}
                </div>
              ))}

              {loading && (
                <div className={`${s.msg} ${s.assistant}`}>
                  <div className={s.avatar}>
                    <Scale size={16} />
                  </div>
                  <div className={s.bubble}>
                    <div className={s.typing}>
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {limitReached &&
              (isGuest ? (
                // Mehmon uchun — cheklov emas, ro'yxatdan o'tishga taklif
                <button
                  type="button"
                  className={s.guestLimitBar}
                  onClick={() => setShowRegisterPrompt(true)}
                >
                  <Lock size={14} />
                  {(t.guest_limit_bar || "").replace("{n}", usage?.limit)}
                </button>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "0.75rem 1rem",
                    background: "#fef2f2",
                    borderTop: "1px solid #fecaca",
                    textAlign: "center",
                    fontSize: "0.82rem",
                    color: "#dc2626",
                  }}
                >
                  <AlertTriangle size={15} style={{ flexShrink: 0 }} />
                  {t.drawer_limit_reached?.replace("{n}", usage?.limit) ||
                    `Kunlik limit tugadi (${usage?.limit} ta savol). Ertaga qayta foydalanishingiz mumkin.`}
                </div>
              ))}

            {/* Rasm preview - inputdan TEPADA ko'rinadi */}
            {imagePreview && (
              <div
                style={{
                  padding: "8px 12px 4px",
                  borderTop: "1px solid var(--border,#e8e3dc)",
                  background: "var(--bg-soft,#f9f6f0)",
                }}
              >
                <div style={{ position: "relative", display: "inline-block" }}>
                  <img
                    src={imagePreview}
                    alt="preview"
                    style={{
                      width: 64,
                      height: 64,
                      objectFit: "cover",
                      borderRadius: 10,
                      border: "2px solid var(--accent,#8b6914)",
                      display: "block",
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setImageFile(null);
                      setImagePreview(null);
                    }}
                    style={{
                      position: "absolute",
                      top: -7,
                      right: -7,
                      background: "#dc2626",
                      color: "#fff",
                      border: "none",
                      borderRadius: "50%",
                      width: 20,
                      height: 20,
                      fontSize: 12,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 0,
                      boxShadow: "0 1px 4px rgba(0,0,0,.25)",
                    }}
                  >
                    <X size={12} />
                  </button>
                </div>
              </div>
            )}

            <footer className={s.inputBar}>
              <button
                type="button"
                className={s.newChatBtn}
                onClick={startNew}
                title={t.drawer_new_chat}
              >
                <RefreshCw size={18} />
              </button>
              <div className={s.inputWrap}>
                <textarea
                  ref={textaRef}
                  className={s.ta}
                  rows={1}
                  value={input}
                  disabled={loading || limitReached}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKey}
                  onPaste={onPaste}
                  placeholder={
                    limitReached
                      ? t.drawer_limit_placeholder || "Kunlik limit tugadi..."
                      : t.chat_placeholder
                  }
                />
                {/* Rasm yuklash tugmasi */}
                {!limitReached && (
                  <>
                    <input
                      type="file"
                      accept="image/*"
                      id="chat-image-input"
                      style={{ display: "none" }}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        if (file.size > 5 * 1024 * 1024) {
                          alert(
                            t.chat_image_size_error ||
                              "Rasm hajmi 5MB dan oshmasligi kerak",
                          );
                          return;
                        }
                        setImageFile(file);
                        const url = URL.createObjectURL(file);
                        setImagePreview(url);
                        e.target.value = "";
                      }}
                    />
                    <button
                      type="button"
                      className={s.iconBtn}
                      onClick={() =>
                        document.getElementById("chat-image-input")?.click()
                      }
                      disabled={loading}
                      title={t.chat_upload_image || "Rasm yuklash"}
                    >
                      <Paperclip size={18} />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  className={s.micBtn}
                  onClick={() => navigate("/voice")}
                  title="Ovozli maslahat"
                >
                  <Mic size={20} />
                </button>
                <button
                  type="button"
                  className={s.sendBtn}
                  onClick={() => send()}
                  disabled={
                    (!input.trim() && !imageFile) || loading || limitReached
                  }
                >
                  {loading ? "…" : <Send size={18} />}
                </button>
              </div>
            </footer>
          </>
        )}

        {showRegisterPrompt && (
          <RegisterPrompt
            freeLimit={usage?.limit ?? 2}
            onClose={() => setShowRegisterPrompt(false)}
          />
        )}
      </aside>
    </>
  );
}
