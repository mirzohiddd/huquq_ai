import React, { memo, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Scale, AlertCircle, Copy, Check, RotateCcw, ThumbsUp, ThumbsDown } from "lucide-react";
import SpeakButton from "../SpeakButton";
import { useChatText } from "./chatText";
import d from "../ChatDrawer.module.css";
import s from "./ChatTools.module.css";

const MD = {
  p: (p) => <p className={d.mdP} {...p} />,
  strong: (p) => <strong className={d.mdB} {...p} />,
  ul: (p) => <ul className={d.mdUl} {...p} />,
  ol: (p) => <ol className={d.mdOl} {...p} />,
  li: (p) => <li className={d.mdLi} {...p} />,
};

/* Nusxa: Markdown belgilarisiz toza matn (Word/Telegram'ga qo'yishga qulay) */
/* ⚠️ Lookbehind (`(?<=…)`) ishlatilmaydi — eski iOS Safari'da u butun
   bo'lakni SyntaxError bilan yiqitardi. */
const plain = (md) =>
  String(md || "")
    .replace(/\*\*/g, "")
    .replace(/^#+\s*/gm, "")
    .replace(/(^|\s)_([^_\n]+)_(?=\s|$|[.,!?;:])/gm, "$1$2");

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Eski brauzerlar / HTTP — vaqtinchalik maydon orqali
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.cssText = "position:fixed;opacity:0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok;
  }
}

function Actions({ m, isLast, busy, onRegenerate, onFeedback }) {
  const c = useChatText();
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    if (await copyText(plain(m.content))) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }
  };
  const fb = m.feedback || null;
  return (
    <div className={s.actions}>
      <SpeakButton text={m.content} />
      <button type="button" className={s.act} onClick={copy} title={copied ? c.copied : c.copy} aria-label={c.copy}>
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>
      {isLast && onRegenerate && !m.noRegen && (
        <button type="button" className={s.act} onClick={onRegenerate} disabled={busy} title={c.regen} aria-label={c.regen}>
          <RotateCcw size={14} />
        </button>
      )}
      <button
        type="button"
        className={`${s.act} ${fb === "like" ? s.actOn : ""}`}
        onClick={() => onFeedback(fb === "like" ? null : "like")}
        aria-pressed={fb === "like"}
        title={c.like}
        aria-label={c.like}
      >
        <ThumbsUp size={14} />
      </button>
      <button
        type="button"
        className={`${s.act} ${fb === "dislike" ? s.actOnBad : ""}`}
        onClick={() => onFeedback(fb === "dislike" ? null : "dislike")}
        aria-pressed={fb === "dislike"}
        title={c.dislike}
        aria-label={c.dislike}
      >
        <ThumbsDown size={14} />
      </button>
      {m.note && <span className={s.actNote}>{m.note}</span>}
    </div>
  );
}

function ChatMessage({ m, i, isLast, busy, avatarLetter, onRegenerate, onFeedback }) {
  if (m.role === "assistant") {
    return (
      <div className={`${d.msg} ${d.assistant}`} style={{ animationDelay: `${Math.min(i, 8) * 0.04}s` }}>
        <div className={d.avatar}>
          <Scale size={16} />
        </div>
        <div className={d.bubbleWrap}>
          <div className={`${d.bubble} ${m.isError ? d.errBubble : ""}`}>
            {m.isError && <AlertCircle size={14} className={s.errIcon} />}
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={MD}>
              {m.content}
            </ReactMarkdown>
          </div>
          {!m.isError && m.content?.trim() && (
            <Actions m={m} isLast={isLast} busy={busy} onRegenerate={onRegenerate} onFeedback={(v) => onFeedback(i, v)} />
          )}
        </div>
      </div>
    );
  }
  return (
    <div className={`${d.msg} ${d.user}`} style={{ animationDelay: `${Math.min(i, 8) * 0.04}s` }}>
      <div className={d.bubble}>
        {m.imagePreview && <img src={m.imagePreview} alt="" className={s.sentImg} />}
        <p>{m.content}</p>
      </div>
      <div className={d.avatarU}>{avatarLetter}</div>
    </div>
  );
}

export default memo(ChatMessage);
