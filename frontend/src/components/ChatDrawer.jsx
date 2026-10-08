import React, { useState, useEffect, useRef, useCallback } from "react";
import { useAuth } from "../context/AuthContext";
import { useLang } from "../context/LangContext";
import { useChatPanel } from "../context/ChatPanelContext";
import { Lock, AlertTriangle } from "lucide-react";
import ChatHeader from "./chat/ChatHeader";
import ChatMessage from "./chat/ChatMessage";
import ChatComposer from "./chat/ChatComposer";
import ChatHistory from "./chat/ChatHistory";
import RegisterPrompt from "./chat/RegisterPrompt";
import useChatSession from "./chat/useChatSession";
import useChatActions from "./chat/useChatActions";
import useMobileViewport from "./chat/useMobileViewport";
import { useChatText } from "./chat/chatText";
import s from "./ChatDrawer.module.css";
import x from "./chat/ChatTools.module.css";
import { BrandMark } from "./brand/BrandLogo";

/**
 * AI chat oynasi. Mantiq bo'laklarga ajratilgan (200 qator qoidasi):
 * holat — chat/useChatSession, amallar — chat/useChatActions, xabar —
 * chat/ChatMessage, yozish paneli (+ vositalar, ovoz, fayl) — chat/ChatComposer.
 */
export default function ChatDrawer() {
  const { user } = useAuth();
  const { t, lang } = useLang();
  const c = useChatText();
  const { isOpen, closeChat, pendingMessage, clearPending } = useChatPanel();
  const [showRegister, setShowRegister] = useState(false);
  const [notice, setNotice] = useState("");
  const isGuest = !user;

  const bottomRef = useRef(null);
  const textaRef = useRef(null);
  const drawerRef = useRef(null);

  const session = useChatSession({ user, active: isOpen, noTitle: t.drawer_no_title });
  const { view, setView, messages, loading, sessionId, historyList, usage } = session;
  const act = useChatActions({ session, isGuest, lang, t, c, setShowRegister });

  useEffect(() => {
    if (!isOpen) return undefined;
    document.body.style.overflow = "hidden";
    setTimeout(() => textaRef.current?.focus(), 100);
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useMobileViewport(isOpen, drawerRef);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading, isOpen, view]);

  // Tashqaridan tayyor savol bilan ochilgan bo'lsa (darsdagi "Bu joyni
  // tushuntirib ber") — sessiya tayyor bo'lishi bilan avtomatik yuboriladi.
  useEffect(() => {
    if (!isOpen || !pendingMessage || !sessionId || loading) return;
    const text = pendingMessage;
    clearPending();
    setView("chat");
    act.send(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, pendingMessage, sessionId]);

  const showNotice = useCallback((msg) => {
    setNotice(msg);
    setTimeout(() => setNotice(""), 4000);
  }, []);

  if (!isOpen) return null;
  const limitReached = usage && usage.remaining === 0;
  const lastAssistant = messages.length - 1;

  return (
    <>
      <div className={s.backdrop} onClick={closeChat} aria-hidden="true" />
      <aside ref={drawerRef} className={s.drawer} role="dialog" aria-modal="true" aria-label={t.drawer_title}>
        <ChatHeader
          user={user}
          usage={usage}
          view={view}
          onToggleView={() => {
            if (view === "chat") session.refreshHistory();
            setView(view === "chat" ? "history" : "chat");
          }}
          onClose={closeChat}
        />

        {view === "history" ? (
          <ChatHistory
            items={historyList}
            activeId={sessionId}
            onNew={session.startNew}
            onOpen={(item) => session.restoreSession(item.sessionId)}
            onDelete={session.deleteHistoryItem}
          />
        ) : (
          <>
            <div className={s.msgArea} aria-live="polite">
              {messages.length === 0 && !loading && (
                <div className={s.welcome}>
                  <div className={s.wIcon}>
                    <img width={40} height={40} src="/logo-96.png?v=2" alt="" />
                  </div>
                  <h3>
                    {t.chat_welcome_title}
                    {user ? `, ${user.fullName || user.username}` : ""}!
                  </h3>
                  <p>{t.chat_welcome_desc}</p>
                  <div className={s.quickGrid}>
                    {(t.quick_questions || []).slice(0, 4).map((q) => (
                      <button key={q} type="button" className={s.quickBtn} onClick={() => act.send(q)}>
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((m, i) => (
                <ChatMessage
                  key={i}
                  m={m}
                  i={i}
                  isLast={i === lastAssistant}
                  busy={loading}
                  avatarLetter={user?.username?.[0]?.toUpperCase() || "?"}
                  onRegenerate={act.regenerate}
                  onFeedback={act.feedback}
                />
              ))}
              {loading && (
                <div className={`${s.msg} ${s.assistant}`}>
                  <div className={s.avatar}>
                    <BrandMark size={18} />
                  </div>
                  <div className={s.bubble}>
                    <div className={s.typing}>
                      <span /><span /><span />
                    </div>
                    {messages[messages.length - 1]?.fileName && <small className={x.typingNote}>{c.analyzing}</small>}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {notice && <div className={x.notice} role="alert">{notice}</div>}
            {limitReached &&
              (isGuest ? (
                <button type="button" className={s.guestLimitBar} onClick={() => setShowRegister(true)}>
                  <Lock size={14} />
                  {(t.guest_limit_bar || "").replace("{n}", usage?.limit)}
                </button>
              ) : (
                <div className={x.limitBar}>
                  <AlertTriangle size={15} />
                  {t.drawer_limit_reached?.replace("{n}", usage?.limit)}
                </div>
              ))}

            <ChatComposer
              input={act.input}
              setInput={act.setInput}
              onSend={act.send}
              onNew={session.startNew}
              loading={loading}
              limitReached={limitReached}
              isGuest={isGuest}
              attachment={act.attachment}
              setAttachment={act.setAttachment}
              onNotice={showNotice}
              textaRef={textaRef}
              onNavigate={closeChat}
            />
          </>
        )}

        {showRegister && <RegisterPrompt freeLimit={usage?.limit ?? 2} onClose={() => setShowRegister(false)} />}
      </aside>
    </>
  );
}
