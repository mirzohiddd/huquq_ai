import { useId, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useLang } from "../../context/LangContext";
import s from "./AuthForm.module.css";

/**
 * Forma maydoni: yorliq + chapda ikonka + kiritish. `type="password"`
 * bo'lsa o'ngda "ko'rsatish/yashirish" tugmasi (namunadagi ko'z belgisi).
 * Qolgan barcha atributlar (value, onChange, required, autoComplete…)
 * `<input>` ga to'g'ridan-to'g'ri uzatiladi.
 */
export default function Field({ label, icon: Icon, type = "text", error = false, className = "", ...rest }) {
  const id = useId();
  const { t } = useLang();
  const [shown, setShown] = useState(false);
  const isPwd = type === "password";
  const cls = [s.input, isPwd && s.withEye, error && s.inputError, className].filter(Boolean).join(" ");

  return (
    <div>
      {label && (
        <label className={s.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={s.field}>
        {Icon && <Icon className={s.icon} size={19} strokeWidth={1.8} aria-hidden="true" />}
        <input id={id} className={cls} type={isPwd && shown ? "text" : type} aria-invalid={error || undefined} {...rest} />
        {isPwd && (
          <button
            type="button"
            className={s.eye}
            onClick={() => setShown((v) => !v)}
            aria-label={shown ? t.auth_hide_password : t.auth_show_password}
            aria-pressed={shown}
          >
            {shown ? <EyeOff size={19} strokeWidth={1.8} /> : <Eye size={19} strokeWidth={1.8} />}
          </button>
        )}
      </div>
    </div>
  );
}
