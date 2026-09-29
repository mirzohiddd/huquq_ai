import React from "react";
import { CheckCircle2, XCircle, Clock, PenLine } from "lucide-react";
import { useLang } from "../../context/LangContext";
import s from "./Cards.module.css";

const LABELS = {
  uz: { active: "Amalda", repealed: "O'z kuchini yo'qotgan", pending: "Kuchga kirishi kutilmoqda", new_edition: "Yangi tahrirda", amended: "O'zgartirishlar bilan" },
  ru: { active: "Действует", repealed: "Утратил силу", pending: "Ожидает вступления в силу", new_edition: "В новой редакции", amended: "С изменениями" },
};
const ICON = { active: CheckCircle2, repealed: XCircle, pending: Clock, new_edition: PenLine };

/**
 * Hujjat holati. `amended` — hujjatning bir nechta tahriri bor (LexUZ
 * tahrir sanalari), ya'ni amaldagi matn qisman o'zgartirilgan.
 */
export default function StatusBadge({ status = "active", amended = false, small = false }) {
  const { lang } = useLang();
  const T = LABELS[lang] || LABELS.uz;
  const Icon = ICON[status] || CheckCircle2;
  return (
    <span className={s.statusWrap}>
      <span className={`${s.status} ${s[`st_${status}`] || ""} ${small ? s.statusSm : ""}`}>
        <Icon size={small ? 12 : 14} /> {T[status] || status}
      </span>
      {amended && status === "active" && !small && (
        <span className={`${s.status} ${s.st_amended}`}>
          <PenLine size={14} /> {T.amended}
        </span>
      )}
    </span>
  );
}
