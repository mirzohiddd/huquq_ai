import React from "react";
import { Trash2 } from "lucide-react";
import { useLang } from "../../context/LangContext";
import s from "../ChatDrawer.module.css";

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

/** Suhbatlar tarixi ro'yxati (ChatDrawer.jsx dan ajratildi — mantiq o'zgarmagan). */
export default function ChatHistory({ items, activeId, onNew, onOpen, onDelete }) {
  const { t, lang } = useLang();
  return (
    <div className={s.historyArea}>
      <button type="button" className={s.newChatFull} onClick={onNew}>
        + {t.drawer_new_chat}
      </button>
      {items.length === 0 ? (
        <p className={s.emptyHistory}>{t.drawer_no_history}</p>
      ) : (
        items.map((item) => (
          <div
            key={item.sessionId}
            className={`${s.historyItem} ${activeId === item.sessionId ? s.historyActive : ""}`}
            onClick={() => onOpen(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onOpen(item)}
          >
            <div className={s.historyMeta}>
              <span className={s.historyTitle}>{item.title}</span>
              <button
                type="button"
                className={s.historyDelete}
                onClick={(e) => onDelete(e, item.sessionId)}
                aria-label="Delete"
              >
                <Trash2 size={14} />
              </button>
            </div>
            <span className={s.historyDate}>
              {item.updatedAt ? formatDate(item.updatedAt, lang) : ""}
              {item.messageCount ? ` · ${item.messageCount} ${t.chat_messages || "xabar"}` : ""}
            </span>
          </div>
        ))
      )}
    </div>
  );
}
