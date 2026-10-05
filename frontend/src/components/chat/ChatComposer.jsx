import React, { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { RefreshCw, Send, Mic, Square, Loader2, X, FileText, AudioLines } from "lucide-react";
import { useLang } from "../../context/LangContext";
import ToolsMenu from "./ToolsMenu";
import useVoiceRecorder from "./useVoiceRecorder";
import { useChatText } from "./chatText";
import d from "../ChatDrawer.module.css";
import s from "./ChatTools.module.css";

const MAX_FILE = 10 * 1024 * 1024;
const ACCEPT = { doc: ".pdf,.txt,application/pdf,text/plain", image: "image/jpeg,image/png,image/webp" };

/**
 * Yozish paneli: "+" vositalar menyusi, biriktirilgan fayl ko'rinishi,
 * matn maydoni, ovoz bilan yozish (diktovka), ovozli suhbat rejimi va yuborish.
 */
export default function ChatComposer({
  input, setInput, onSend, onNew, loading, limitReached, isGuest,
  attachment, setAttachment, onNotice, textaRef, onNavigate,
}) {
  const { t, lang } = useLang();
  const c = useChatText();
  const navigate = useNavigate();
  const fileRef = useRef(null);
  const kindRef = useRef("doc");

  const onText = useCallback((text) => {
    setInput((prev) => (prev.trim() ? `${prev.trim()} ${text}` : text));
    setTimeout(() => textaRef.current?.focus(), 30);
  }, [setInput, textaRef]);
  const onVoiceError = useCallback((code, msg) => {
    onNotice(msg || (code === "denied" ? c.micDenied : code === "unsupported" ? c.micUnsupported : c.sttFail));
  }, [onNotice, c]);
  const rec = useVoiceRecorder({ lang, onText, onError: onVoiceError });

  const pickFile = (kind) => {
    kindRef.current = kind;
    if (fileRef.current) {
      fileRef.current.accept = ACCEPT[kind];
      fileRef.current.click();
    }
  };
  const onFile = (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (file.size > MAX_FILE) return onNotice(c.fileTooBig);
    const isImg = file.type.startsWith("image/");
    if (attachment?.preview) URL.revokeObjectURL(attachment.preview);
    setAttachment({ file, kind: isImg ? "image" : "doc", name: file.name, preview: isImg ? URL.createObjectURL(file) : null });
    textaRef.current?.focus();
  };
  const clearAttachment = () => {
    if (attachment?.preview) URL.revokeObjectURL(attachment.preview);
    setAttachment(null);
  };

  // Buferdan rasm qo'yish (skrinshot) — avvalgidek ishlaydi
  const onPaste = (e) => {
    for (const item of e.clipboardData?.items || []) {
      if (!item.type.startsWith("image/")) continue;
      const file = item.getAsFile();
      if (!file) continue;
      e.preventDefault();
      if (file.size > MAX_FILE) return onNotice(c.fileTooBig);
      if (attachment?.preview) URL.revokeObjectURL(attachment.preview);
      setAttachment({ file, kind: "image", name: file.name || "image.png", preview: URL.createObjectURL(file) });
      return;
    }
  };
  const onKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };
  const recording = rec.state === "recording";
  const busy = loading || rec.state === "transcribing";
  const mm = `${Math.floor(rec.seconds / 60)}:${String(rec.seconds % 60).padStart(2, "0")}`;

  return (
    <>
      {attachment && (
        <div className={s.attachBar}>
          {attachment.preview ? (
            <img src={attachment.preview} alt="" className={s.attachImg} />
          ) : (
            <span className={s.attachDoc}>
              <FileText size={18} />
            </span>
          )}
          <span className={s.attachName}>
            {attachment.name}
            {attachment.kind === "image" && <small>{c.imgHint}</small>}
          </span>
          <button type="button" className={s.attachX} onClick={clearAttachment} aria-label={c.remove}>
            <X size={14} />
          </button>
        </div>
      )}
      <footer className={d.inputBar}>
        <button type="button" className={d.newChatBtn} onClick={onNew} title={t.drawer_new_chat} aria-label={t.drawer_new_chat}>
          <RefreshCw size={18} />
        </button>
        <div className={d.inputWrap}>
          <ToolsMenu isGuest={isGuest} disabled={busy || limitReached} onPickFile={pickFile} onNavigate={onNavigate} />
          <input ref={fileRef} type="file" hidden onChange={onFile} />
          {recording ? (
            <div className={s.recBar} role="status">
              <span className={s.recDot} /> {c.recording} <b>{mm}</b>
            </div>
          ) : (
            <textarea
              ref={textaRef}
              className={d.ta}
              rows={1}
              value={input}
              disabled={busy || limitReached}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              onPaste={onPaste}
              placeholder={
                rec.state === "transcribing" ? c.transcribing : limitReached ? t.drawer_limit_placeholder : t.chat_placeholder
              }
              aria-label={t.chat_placeholder}
            />
          )}
          {!limitReached && (
            <button
              type="button"
              className={`${d.micBtn} ${recording ? s.micOn : ""}`}
              onClick={recording ? rec.stop : rec.start}
              disabled={loading || rec.state === "transcribing"}
              title={recording ? c.stopRec : c.record}
              aria-label={recording ? c.stopRec : c.record}
            >
              {rec.state === "transcribing" ? <Loader2 size={18} className={s.spin} /> : recording ? <Square size={16} fill="currentColor" /> : <Mic size={19} />}
            </button>
          )}
          <button type="button" className={`${d.iconBtn} ${s.hideXs}`} onClick={() => navigate("/voice")} title={c.voiceMode} aria-label={c.voiceMode}>
            <AudioLines size={18} />
          </button>
          <button
            type="button"
            className={d.sendBtn}
            onClick={() => onSend()}
            disabled={(!input.trim() && !attachment) || busy || limitReached || recording}
            aria-label={t.chat_send || "Send"}
          >
            {loading ? <Loader2 size={17} className={s.spin} /> : <Send size={18} />}
          </button>
        </div>
      </footer>
    </>
  );
}
