/**
 * "AI VOSITALAR" SAHIFASI MATNLARI (uz/ru) — lazy bo'lak ichida turadi,
 * asosiy lug'atni og'irlashtirmaydi (legislation/i18n.js bilan bir xil naqsh).
 */
import { useLang } from "../../context/LangContext";

const uz = {
  title: "AI vositalar",
  sub: "Mavzuni kiriting — taqdimot, test yoki dars reja bir necha soniyada tayyor. Kontent saytdagi tekshirilgan darslar va rasmiy qonun matnlaridan olinadi.",
  tabs: { slides: "AI Slayd", quiz: "Test", plan: "Dars reja" },
  topic: "Mavzu", topicPh: "Masalan: Mehnat shartnomasi", grade: "Sinf / auditoriya", lang: "Til",
  count: "Slaydlar soni", qCount: "Savollar soni", difficulty: "Qiyinlik", duration: "Davomiyligi (daqiqa)",
  diff: { easy: "Oson", medium: "O'rta", hard: "Qiyin" },
  grades: { student: "Talabalar", adult: "Kattalar" }, gradeN: (n) => `${n}-sinf`,
  langs: { uz: "O'zbekcha", ru: "Ruscha" },
  generate: "Yaratish", generating: "Yaratilmoqda…", again: "Boshqa variant",
  ideas: "Tayyor mavzular",
  empty: "Mavzu va parametrlarni tanlang, so'ng «Yaratish» tugmasini bosing.",
  error: "Yaratib bo'lmadi. Internet aloqasini tekshirib, qayta urinib ko'ring.",
  partial: "Ruscha tarjima to'liq emas — ba'zi matnlar asl tilida qoldi.",
  source: "Manba", basedOn: "Asos: dars", ms: (n) => `${n} ms da tayyorlandi`,
  slide: "Slayd", of: "/", prev: "Oldingi", next: "Keyingi", present: "Taqdimot rejimi", exit: "Chiqish (Esc)",
  pptx: "PowerPoint (.pptx)", pdf: "PDF / Chop etish", exporting: "Tayyorlanmoqda…", exportFail: "Eksport qilib bo'lmadi.",
  example: "Hayotiy misol", law: "Qonun", agenda: "Reja",
  check: "Tekshirish", reset: "Qayta yechish", showKey: "Javob kaliti", hideKey: "Kalitni yashirish",
  score: (a, b) => `Natija: ${a} / ${b}`, correct: "To'g'ri", wrong: "Noto'g'ri", skipped: "Javob berilmagan", answer: "To'g'ri javob",
  printQuiz: "Testni chop etish", printKey: "Kalit bilan chop etish",
  goals: "Dars maqsadlari", outcomes: "O'quvchilar darsdan keyin", tools: "Jihozlar", stages: "Dars bosqichlari",
  min: "daq", keyPoints: "Asosiy tushunchalar", laws: "Qonunchilik manbalari", homework: "Uy vazifasi",
  criteria: "Baholash mezonlari", docx: "Word (.doc)", copy: "Nusxa olish", copied: "Nusxalandi",
  toSlides: "Shu mavzuda slayd yaratish", toQuiz: "Shu mavzuda test yaratish",
  teacherNote: "O'qituvchilar uchun: taqdimotni sinfda TV yoki proyektorda «Taqdimot rejimi» orqali ko'rsating — matn katta ekranga moslashadi.",
};

const ru = {
  title: "AI-инструменты",
  sub: "Введите тему — презентация, тест или план урока будут готовы за секунды. Контент берётся из проверенных уроков сайта и официальных текстов законов.",
  tabs: { slides: "AI-слайды", quiz: "Тест", plan: "План урока" },
  topic: "Тема", topicPh: "Например: Трудовой договор", grade: "Класс / аудитория", lang: "Язык",
  count: "Количество слайдов", qCount: "Количество вопросов", difficulty: "Сложность", duration: "Длительность (мин)",
  diff: { easy: "Лёгкий", medium: "Средний", hard: "Сложный" },
  grades: { student: "Студенты", adult: "Взрослые" }, gradeN: (n) => `${n} класс`,
  langs: { uz: "Узбекский", ru: "Русский" },
  generate: "Создать", generating: "Создаём…", again: "Другой вариант",
  ideas: "Готовые темы",
  empty: "Выберите тему и параметры, затем нажмите «Создать».",
  error: "Не удалось создать. Проверьте подключение и попробуйте ещё раз.",
  partial: "Перевод на русский неполный — часть текста осталась на языке оригинала.",
  source: "Источник", basedOn: "Основа: урок", ms: (n) => `готово за ${n} мс`,
  slide: "Слайд", of: "/", prev: "Назад", next: "Далее", present: "Режим показа", exit: "Выход (Esc)",
  pptx: "PowerPoint (.pptx)", pdf: "PDF / Печать", exporting: "Готовим…", exportFail: "Не удалось экспортировать.",
  example: "Пример из жизни", law: "Закон", agenda: "План",
  check: "Проверить", reset: "Решить заново", showKey: "Ключ ответов", hideKey: "Скрыть ключ",
  score: (a, b) => `Результат: ${a} / ${b}`, correct: "Верно", wrong: "Неверно", skipped: "Нет ответа", answer: "Правильный ответ",
  printQuiz: "Печать теста", printKey: "Печать с ключом",
  goals: "Цели урока", outcomes: "После урока ученики", tools: "Оборудование", stages: "Этапы урока",
  min: "мин", keyPoints: "Ключевые понятия", laws: "Правовые источники", homework: "Домашнее задание",
  criteria: "Критерии оценки", docx: "Word (.doc)", copy: "Копировать", copied: "Скопировано",
  toSlides: "Слайды по этой теме", toQuiz: "Тест по этой теме",
  teacherNote: "Учителям: показывайте презентацию на ТВ или проекторе в «Режиме показа» — текст подстраивается под большой экран.",
};

export const IDEAS = {
  uz: ["Konstitutsiya", "Mehnat shartnomasi", "Nikoh tuzish", "Iste'molchi huquqlari", "Meros huquqi", "Soliq tizimi asoslari"],
  ru: ["Конституция", "Трудовой договор", "Заключение брака", "Права потребителей", "Наследование", "Налоговая система"],
};

export function useToolsText() {
  const { lang } = useLang();
  return lang === "ru" ? ru : uz;
}
