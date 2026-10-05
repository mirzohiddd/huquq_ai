import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Presentation, ListChecks, BookOpenCheck, FileSearch, ImageUp, Lock } from "lucide-react";
import { useChatText } from "./chatText";
import s from "./ChatTools.module.css";

/**
 * "+" menyusi: AI slayd, test, dars reja (alohida sahifa — /ai-tools),
 * hujjat va rasm tahlili (fayl tanlanadi, natija shu chatga yoziladi).
 * Generatorlar ro'yxatdan o'tganlar uchun — mehmon ro'yxatdan o'tishga
 * yo'naltiriladi (sahifa ham `RequireAuth` bilan himoyalangan).
 */
export default function ToolsMenu({ isGuest, disabled, onPickFile, onNavigate }) {
  const c = useChatText();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onDoc = (e) => !wrapRef.current?.contains(e.target) && setOpen(false);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const go = (tool) => {
    setOpen(false);
    onNavigate?.();
    navigate(isGuest ? "/register" : `/ai-tools?tool=${tool}`);
  };
  const pick = (kind) => {
    setOpen(false);
    onPickFile(kind);
  };

  const items = [
    { key: "slides", icon: Presentation, title: c.slides, sub: c.slidesSub, run: () => go("slides"), locked: isGuest },
    { key: "quiz", icon: ListChecks, title: c.quiz, sub: c.quizSub, run: () => go("quiz"), locked: isGuest },
    { key: "plan", icon: BookOpenCheck, title: c.plan, sub: c.planSub, run: () => go("plan"), locked: isGuest },
    { key: "doc", icon: FileSearch, title: c.doc, sub: c.docSub, run: () => pick("doc") },
    { key: "img", icon: ImageUp, title: c.img, sub: c.imgSub, run: () => pick("image") },
  ];

  return (
    <div className={s.toolsWrap} ref={wrapRef}>
      <button
        type="button"
        className={`${s.plusBtn} ${open ? s.plusOpen : ""}`}
        onClick={() => setOpen((v) => !v)}
        disabled={disabled}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={c.tools}
        title={c.tools}
      >
        <Plus size={18} />
      </button>
      {open && (
        <div className={s.menu} role="menu">
          {items.map(({ key, icon: Icon, title, sub, run, locked }) => (
            <button key={key} type="button" role="menuitem" className={s.menuItem} onClick={run} title={locked ? c.loginNeeded : title}>
              <span className={`${s.menuIcon} ${s[`ic_${key}`]}`}>
                <Icon size={17} />
              </span>
              <span className={s.menuText}>
                <span className={s.menuTitle}>{title}</span>
                <span className={s.menuSub}>{locked ? c.loginNeeded : sub}</span>
              </span>
              {locked && <Lock size={13} className={s.menuLock} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
