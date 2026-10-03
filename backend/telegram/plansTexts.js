"use strict";
/** «💎 Tariflar» va «👤 Hisobim» matnlari (uz/ru) — `telegram/plans.js` uchun. */
const ICON = { free: "🆓", basic: "⚡️", pro: "⭐️", premium: "💎" };
const P = {
  uz: {
    title: "💎 <b>Tariflar</b>",
    current: "Joriy tarifingiz: <b>{plan}</b>",
    perMonth: "so'm/oy",
    q: "kuniga {n} ta savol",
    lessons: "{n} ta dars",
    tests: "{n} ta test",
    lessonsAll: "barcha darslar",
    testsAll: "barcha testlar",
    voice: "kuniga {n} ta ovozli savol",
    pick: "👇 Sotib olish uchun tarifni tanlang:",
    confirm:
      "🛒 <b>{plan}</b> tarifi — <b>{price} so'm/oy</b>\n\n" +
      "«✅ Buyurtma berish» tugmasini bossangiz, admin siz bilan <b>{phone}</b> raqami orqali Telegram'da bog'lanadi va to'lovni tushuntiradi.",
    btn_order: "✅ Buyurtma berish",
    btn_back: "◀️ Orqaga",
    need_phone: "📱 Buyurtma uchun raqamingiz kerak — admin shu raqam orqali bog'lanadi.\nPastdagi «📱 Raqamni yuborish» tugmasini bosing.",
    ordered:
      "✅ <b>Buyurtmangiz qabul qilindi!</b>\n\n💎 Tarif: <b>{plan}</b>\n📞 Raqam: <b>{phone}</b>\n\nAdmin tez orada siz bilan Telegram'da bog'lanadi. Rahmat! 🙏",
    duplicate: "ℹ️ Bu tarifga buyurtmangiz allaqachon qabul qilingan — admin tez orada bog'lanadi.",
    already: "✅ Bu tarif sizda allaqachon faol.",
    acc_title: "👤 <b>Hisobim</b>",
    name: "Ism",
    phone: "Telefon",
    plan: "Tarif",
    days: "{n} kun qoldi",
    today: "Bugungi savollar",
    none: "—",
    btn_plans: "💎 Tariflar",
    btn_site: "🌐 Saytda ochish",
  },
  ru: {
    title: "💎 <b>Тарифы</b>",
    current: "Ваш тариф: <b>{plan}</b>",
    perMonth: "сум/мес",
    q: "{n} вопросов в день",
    lessons: "уроков: {n}",
    tests: "тестов: {n}",
    lessonsAll: "все уроки",
    testsAll: "все тесты",
    voice: "{n} голосовых в день",
    pick: "👇 Выберите тариф для покупки:",
    confirm:
      "🛒 Тариф <b>{plan}</b> — <b>{price} сум/мес</b>\n\n" +
      "Нажмите «✅ Оформить заказ» — администратор свяжется с вами в Telegram по номеру <b>{phone}</b> и объяснит оплату.",
    btn_order: "✅ Оформить заказ",
    btn_back: "◀️ Назад",
    need_phone: "📱 Для заказа нужен ваш номер — по нему с вами свяжется администратор.\nНажмите «📱 Отправить номер» внизу.",
    ordered:
      "✅ <b>Заказ принят!</b>\n\n💎 Тариф: <b>{plan}</b>\n📞 Номер: <b>{phone}</b>\n\nАдминистратор скоро свяжется с вами в Telegram. Спасибо! 🙏",
    duplicate: "ℹ️ Заказ на этот тариф уже принят — администратор скоро свяжется.",
    already: "✅ Этот тариф у вас уже активен.",
    acc_title: "👤 <b>Мой аккаунт</b>",
    name: "Имя",
    phone: "Телефон",
    plan: "Тариф",
    days: "осталось {n} дн.",
    today: "Вопросы сегодня",
    none: "—",
    btn_plans: "💎 Тарифы",
    btn_site: "🌐 Открыть на сайте",
  },
};

module.exports = { ICON, P };
