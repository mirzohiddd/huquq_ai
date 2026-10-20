/**
 * TESTLAR BO'LIMINING QO'SHIMCHA MATNLARI (uz/ru) — hayotiy testlar va
 * dars tavsiyasi. Asosiy lug'at og'irlashmasin deb alohida (legislation/i18n.js naqshi).
 */
import { useLang } from "../../context/LangContext";

const uz = {
  lifeBadge: "Hayotiy test",
  situation: (n) => `Vaziyat №${n}`,
  checking: "Tekshirilmoqda…",
  checkError: "Javobni tekshirib bo'lmadi. Internetni tekshirib, qayta urinib ko'ring.",
  submitError: "Natijani saqlab bo'lmadi. Qayta urinib ko'ring.",
  passLine: (p) => `O'tish chegarasi — ${p}%`,
  recTitle: "Bilimingizni mustahkamlang",
  recSub: (p, pass) => `Natijangiz ${p}% — bu ${pass}% chegaradan past. Shu mavzudagi darslarni o'rganib, testni qayta topshiring:`,
  recOpen: "Darsni ochish",
  recLocked: "Tarif bilan ochiladi",
  recAll: "Barcha darslar",
  recNone: "Bu mavzu bo'yicha darslar Darslar bo'limida.",
};

const ru = {
  lifeBadge: "Жизненный тест",
  situation: (n) => `Ситуация №${n}`,
  checking: "Проверяем…",
  checkError: "Не удалось проверить ответ. Проверьте интернет и попробуйте ещё раз.",
  submitError: "Не удалось сохранить результат. Попробуйте ещё раз.",
  passLine: (p) => `Проходной порог — ${p}%`,
  recTitle: "Укрепите знания",
  recSub: (p, pass) => `Ваш результат ${p}% — ниже порога ${pass}%. Изучите уроки по этой теме и пройдите тест снова:`,
  recOpen: "Открыть урок",
  recLocked: "Доступно по тарифу",
  recAll: "Все уроки",
  recNone: "Уроки по этой теме — в разделе «Уроки».",
};

export function useTT() {
  const { lang } = useLang();
  return lang === "ru" ? ru : uz;
}
