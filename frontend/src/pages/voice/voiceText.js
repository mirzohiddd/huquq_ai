/* Ovozli yordamchi sahifasi matnlari (uz/ru). Asosiy lug'at og'irlashmasin
   deb alohida faylda — xuddi `pages/legislation/i18n.js` kabi. */
const uz = {
  title: "Ovozli yordamchi",
  back: "Orqaga",
  start: "Gapirishni boshlash",
  stop: "To'xtatish",
  send: "Gapni tugatish va yuborish",
  idle: "Salom! Huquqiy savolingizni ayting",
  listening: "Eshityapman… tugatgach yana bosing",
  thinking: "O'ylayapman…",
  speaking: "Javob beryapman… to'xtatish uchun bosing",
  tapHint: "Gapirish uchun robotni bosing",
  orKey: "yoki",
  noMic: "Mikrofonga ruxsat bering — brauzer manzil qatoridagi belgidan.",
  noSupport: "Brauzeringiz ovoz yozishni qo'llab-quvvatlamaydi.",
  error: "Xatolik yuz berdi. Qayta urinib ko'ring.",
  register: "Ro'yxatdan o'tish",
};

const ru = {
  title: "Голосовой помощник",
  back: "Назад",
  start: "Начать говорить",
  stop: "Остановить",
  send: "Закончить и отправить",
  idle: "Здравствуйте! Задайте правовой вопрос",
  listening: "Слушаю… нажмите ещё раз, когда закончите",
  thinking: "Думаю…",
  speaking: "Отвечаю… нажмите, чтобы остановить",
  tapHint: "Нажмите на робота, чтобы говорить",
  orKey: "или",
  noMic: "Разрешите доступ к микрофону — значок в адресной строке.",
  noSupport: "Ваш браузер не поддерживает запись звука.",
  error: "Произошла ошибка. Попробуйте ещё раз.",
  register: "Зарегистрироваться",
};

export const voiceText = (lang) => (lang === "ru" ? ru : uz);
