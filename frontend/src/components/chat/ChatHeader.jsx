import React from "react";
import { MessageSquare, X, History } from "lucide-react";
import { useLang } from "../../context/LangContext";
import LangSwitcher from "../LangSwitcher";
import s from "../ChatDrawer.module.css";
import x from "./ChatTools.module.css";

/* ─── Limit indikatori ─── */
function UsageBadge({ usage }) {
  if (!usage) return null;
  const pct = Math.min(100, Math.round((usage.used / usage.limit) * 100));
  const tone = pct >= 100 ? x.usageBad : pct >= 80 ? x.usageWarn : x.usageOk;
  return (
    <div className={`${x.usage} ${tone}`}>
      {usage.used}/{usage.limit}
    </div>
  );
}

/** Chat oynasi sarlavhasi: logo, limit, tarix, til, yopish. */
export default function ChatHeader({ user, usage, view, onToggleView, onClose }) {
  const { t } = useLang();
  return (
    <header className={s.header}>
      <div className={s.headerLeft}>
        <a href="/" className={s.headerIcon}>
          <img width={30} height={30} src="/logo-96.png" alt="" />
        </a>
      </div>
      <div className={s.headerRight}>
        {usage && <UsageBadge usage={usage} />}
        {user && (
          <button
            type="button"
            className={s.historyBtn}
            onClick={onToggleView}
            title={view === "chat" ? t.drawer_history : t.drawer_back_chat}
            aria-label={view === "chat" ? t.drawer_history : t.drawer_back_chat}
          >
            {view === "chat" ? <History size={18} /> : <MessageSquare size={18} />}
          </button>
        )}
        <LangSwitcher dark compact />
        <button type="button" className={s.closeBtn} onClick={onClose} aria-label={t.drawer_close}>
          <X size={18} />
        </button>
      </div>
    </header>
  );
}
