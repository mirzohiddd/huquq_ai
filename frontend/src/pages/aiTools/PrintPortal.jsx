import { createPortal } from "react-dom";
import s from "./AiTools.module.css";

/**
 * Chop etish / PDF uchun nusxa. `body` ga to'g'ridan-to'g'ri portal
 * qilinadi: chop etishda butun sayt (#root) yashiriladi va faqat shu
 * blok chiqadi — navbar, menyu va bo'sh sahifalarsiz. Ekranda ko'rinmaydi.
 */
export default function PrintPortal({ children }) {
  if (typeof document === "undefined") return null;
  return createPortal(<div className={s.printPortal}>{children}</div>, document.body);
}
