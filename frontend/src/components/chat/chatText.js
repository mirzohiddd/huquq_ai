/**
 * CHAT YANGI IMKONIYATLARI MATNLARI (uz/ru).
 *
 * Asosiy lug'atga (i18n/uz.js, ru.js) qo'shilmadi — chat lazy bo'lak,
 * bu matnlar faqat u ochilganda kerak (birinchi yuklanish og'irlashmasin).
 */
import { useLang } from "../../context/LangContext";

const uz = {
  copy: "Nusxa olish", copied: "Nusxalandi",
  regen: "Qayta yaratish", regenSame: "Boshqa mos javob topilmadi — bu javob saytdagi eng mos manba.",
  like: "Foydali javob", dislike: "Foydasiz javob", thanks: "Fikringiz uchun rahmat!",
  tools: "Vositalar", attach: "Fayl biriktirish",
  slides: "AI Slayd yaratish", slidesSub: "Mavzu bo'yicha taqdimot",
  quiz: "Test yaratish", quizSub: "Javob kaliti bilan",
  plan: "Dars reja yaratish", planSub: "O'qituvchi uchun ishlanma",
  doc: "Hujjat tahlili", docSub: "PDF yoki TXT",
  img: "Rasm tahlili", imgSub: "Hujjat surati, skrinshot",
  loginNeeded: "Bu vosita ro'yxatdan o'tganlar uchun",
  record: "Ovoz bilan yozish", stopRec: "To'xtatish", recording: "Yozilmoqda…", transcribing: "Matnga aylantirilmoqda…",
  micDenied: "Mikrofonga ruxsat berilmadi. Brauzer sozlamalaridan ruxsat bering.",
  micUnsupported: "Brauzeringiz ovoz yozishni qo'llab-quvvatlamaydi.",
  sttFail: "Ovozni tanib bo'lmadi. Qayta urinib ko'ring.",
  analyzing: "Fayl tahlil qilinmoqda…", fileTooBig: "Fayl hajmi 10 MB dan oshmasligi kerak.",
  remove: "Olib tashlash", voiceMode: "Ovozli suhbat rejimi",
  imgHint: "Rasm biriktirildi — «Yuborish» bosilsa matni o'qiladi va tahlil qilinadi.",
};

const ru = {
  copy: "Копировать", copied: "Скопировано",
  regen: "Создать заново", regenSame: "Другого подходящего ответа не найдено — это самый точный источник на сайте.",
  like: "Полезный ответ", dislike: "Бесполезный ответ", thanks: "Спасибо за отзыв!",
  tools: "Инструменты", attach: "Прикрепить файл",
  slides: "AI-презентация", slidesSub: "Слайды по теме",
  quiz: "Создать тест", quizSub: "С ключом ответов",
  plan: "План урока", planSub: "Разработка для учителя",
  doc: "Анализ документа", docSub: "PDF или TXT",
  img: "Анализ изображения", imgSub: "Фото документа, скриншот",
  loginNeeded: "Инструмент для зарегистрированных",
  record: "Голосовой ввод", stopRec: "Остановить", recording: "Идёт запись…", transcribing: "Преобразуем в текст…",
  micDenied: "Нет доступа к микрофону. Разрешите его в настройках браузера.",
  micUnsupported: "Ваш браузер не поддерживает запись звука.",
  sttFail: "Не удалось распознать речь. Попробуйте ещё раз.",
  analyzing: "Анализируем файл…", fileTooBig: "Размер файла не должен превышать 10 МБ.",
  remove: "Удалить", voiceMode: "Режим голосового диалога",
  imgHint: "Изображение прикреплено — после «Отправить» текст будет распознан и проанализирован.",
};

export function useChatText() {
  const { lang } = useLang();
  return lang === "ru" ? ru : uz;
}
