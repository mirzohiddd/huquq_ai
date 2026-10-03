"use strict";
/**
 * BOT MATNLARI — o'zbek va rus tillarida (2026-10-03 qayta yozildi).
 *
 * ⚠️ Eski matnlarda xato ma'lumot bor edi: "kuniga 20 ta bepul savol"
 * (haqiqatda bepul tarif limiti `config/plans.js` da — 5 ta) va
 * "ingliz tilida" (ingliz tili loyihadan olib tashlangan). Endi limit
 * raqami QOTIRILMAYDI — `{free}` o'rniga tarif sozlamasidan qo'yiladi.
 */
const T = {
  uz: {
    // ── Kirish (hisob ulanmagan) ──
    onboard:
      "🏛 <b>Huquq AI</b> — O'zbekiston qonunchiligi bo'yicha sun'iy intellekt yordamchingiz.\n\n" +
      "<b>Nimalar qila olaman:</b>\n" +
      "⚖️ Savolingizga qonun moddalari asosida javob beraman\n" +
      "🎤 Ovozli xabarni ham tushunaman\n" +
      "📚 Darslar va 📝 testlar orqali huquqni o'rgataman\n\n" +
      "🎁 Bepul: kuniga <b>{free} ta</b> savol\n\n" +
      "👇 Boshlash uchun <b>bitta qadam</b>: pastdagi <b>«📱 Raqamni yuborish»</b> tugmasini bosing — hisobingiz bir zumda ochiladi.",
    onboard_site:
      "💻 Saytda hisobingiz bormi? Uni shu yerdan ulang — darslar, tarif va tarix bitta bo'ladi:",
    btn_contact: "📱 Raqamni yuborish",
    btn_link_site: "🔗 Saytdagi hisobni ulash",
    btn_open_site: "🌐 Saytni ochish",
    contact_foreign: "⚠️ Iltimos, boshqa odamning emas, <b>o'zingizning</b> raqamingizni pastdagi tugma orqali yuboring.",
    contact_bad: "⚠️ Raqamni o'qib bo'lmadi. Pastdagi «📱 Raqamni yuborish» tugmasini bosing.",
    contact_exists:
      "ℹ️ Bu raqam bilan saytda hisob allaqachon ochilgan.\n\nXavfsizlik uchun uni sayt orqali ulang — saytga kiring va bot avtomatik ochiladi:",
    signed_up:
      "🎉 <b>Tabriklaymiz, {name}!</b> Hisobingiz ochildi.\n\n" +
      "Endi huquqiy savolingizni oddiy so'zlar bilan yozing yoki ovozli xabar yuboring. Masalan:\n" +
      "<i>«Ishdan ogohlantirmasdan bo'shatishdi, nima qilsam bo'ladi?»</i>",
    linked: "✅ <b>Hisobingiz ulandi!</b>\n\nEndi savolingizni yozing yoki pastdagi menyudan foydalaning 👇",
    already_linked: "✅ Hisobingiz allaqachon ulangan. Savolingizni yozing 👇",
    phone_saved: "✅ Raqamingiz saqlandi.",
    link_expired:
      "⌛️ Ulash havolasining muddati tugagan.\n\nSaytga kirib, «Telegram'ni ulash» tugmasini qayta bosing:",
    link_conflict: "⚠️ Bu Telegram hisob boshqa akkauntga ulangan. Avval o'sha akkauntdan foydalaning yoki admin bilan bog'laning.",
    blocked: "⛔️ Hisobingiz bloklangan. Savollar bo'lsa, sayt orqali texnik yordamga yozing.",
    // ── Asosiy ──
    welcome:
      "👋 <b>Assalomu alaykum{name}!</b>\n\n" +
      "Huquqiy savolingizni yozing yoki 🎤 ovozli xabar yuboring — qonun moddalari asosida javob beraman.\n\n" +
      "Pastdagi menyu orqali darslar, testlar va tariflarni ochishingiz mumkin 👇",
    new_prompt: "🆕 Yangi suhbat boshlandi. Savolingizni yozing 👇",
    help:
      "ℹ️ <b>Qanday foydalanish kerak</b>\n\n" +
      "1️⃣ Savolingizni oddiy so'zlar bilan yozing yoki ovozli xabar yuboring.\n" +
      "2️⃣ Bot qonun moddalariga tayanib javob beradi.\n" +
      "3️⃣ Boshqa mavzuga o'tsangiz — «🔄 Yangi savol».\n\n" +
      "<b>Buyruqlar:</b>\n/start — bosh menyu\n/yangi — yangi suhbat\n/tariflar — tariflar\n/hisob — hisobim\n/lang — til\n\n" +
      "⚠️ Bot advokat o'rnini bosmaydi — muhim ishlarda mutaxassis bilan maslahatlashing.\n\n🌐 {site}",
    analyzing: "⏳ Qonunlardan qidirilmoqda...",
    error: "😔 Xatolik yuz berdi. Bir ozdan keyin qayta urinib ko'ring.",
    unsupported:
      "📎 Hozircha rasm va fayllarni tahlil qila olmayman.\nSavolingizni <b>matn</b> yoki 🎤 <b>ovozli xabar</b> bilan yuboring.",
    voice_processing: "🎤 Ovozli xabaringiz tinglanmoqda...",
    voice_error: "😔 Ovozli xabarni tushunib bo'lmadi. Aniqroq gapirib qayta yuboring yoki matn bilan yozing.",
    voice_recognized: "🎤 <b>Tushundim:</b>",
    limit:
      "⏳ <b>Bugungi limit tugadi</b>\n\n" +
      "📊 Ishlatildi: <b>{used} ta</b> savol\n🔓 Yangilanadi: <b>{at}</b> ({left} qoldi)\n\n" +
      "💎 Ko'proq savol kerakmi? Tarifni yangilang:",
    lang_choose: "🌐 Tilni tanlang / Выберите язык:",
    lang_set: "✅ Til: O'zbekcha",
    myid: "🆔 Sizning chat ID: <code>{id}</code>\n\nAdmin xabarlarini olish uchun shu raqamni serverdagi <code>ADMIN_TELEGRAM_IDS</code> ga yozing.",
  },
  ru: {
    onboard:
      "🏛 <b>Huquq AI</b> — ваш AI-помощник по законодательству Узбекистана.\n\n" +
      "<b>Что я умею:</b>\n" +
      "⚖️ Отвечаю на вопросы со ссылками на статьи закона\n" +
      "🎤 Понимаю голосовые сообщения\n" +
      "📚 Уроки и 📝 тесты по праву\n\n" +
      "🎁 Бесплатно: <b>{free}</b> вопросов в день\n\n" +
      "👇 Остался <b>один шаг</b>: нажмите <b>«📱 Отправить номер»</b> внизу — аккаунт откроется мгновенно.",
    onboard_site: "💻 Уже есть аккаунт на сайте? Подключите его — уроки, тариф и история будут общими:",
    btn_contact: "📱 Отправить номер",
    btn_link_site: "🔗 Подключить аккаунт сайта",
    btn_open_site: "🌐 Открыть сайт",
    contact_foreign: "⚠️ Пожалуйста, отправьте <b>свой</b> номер через кнопку внизу.",
    contact_bad: "⚠️ Не удалось прочитать номер. Нажмите «📱 Отправить номер» внизу.",
    contact_exists:
      "ℹ️ На этот номер уже зарегистрирован аккаунт на сайте.\n\nДля безопасности подключите его через сайт — войдите, и бот откроется автоматически:",
    signed_up:
      "🎉 <b>Поздравляем, {name}!</b> Аккаунт создан.\n\n" +
      "Напишите юридический вопрос простыми словами или отправьте голосовое. Например:\n" +
      "<i>«Меня уволили без предупреждения, что делать?»</i>",
    linked: "✅ <b>Аккаунт подключён!</b>\n\nНапишите вопрос или воспользуйтесь меню внизу 👇",
    already_linked: "✅ Аккаунт уже подключён. Напишите вопрос 👇",
    phone_saved: "✅ Номер сохранён.",
    link_expired: "⌛️ Срок ссылки истёк.\n\nВойдите на сайт и снова нажмите «Подключить Telegram»:",
    link_conflict: "⚠️ Этот Telegram уже привязан к другому аккаунту. Используйте его или напишите администратору.",
    blocked: "⛔️ Ваш аккаунт заблокирован. По вопросам напишите в поддержку на сайте.",
    welcome:
      "👋 <b>Здравствуйте{name}!</b>\n\n" +
      "Напишите юридический вопрос или отправьте 🎤 голосовое — отвечу со ссылками на статьи закона.\n\n" +
      "Уроки, тесты и тарифы — в меню внизу 👇",
    new_prompt: "🆕 Новый диалог начат. Напишите вопрос 👇",
    help:
      "ℹ️ <b>Как пользоваться</b>\n\n" +
      "1️⃣ Опишите вопрос простыми словами или отправьте голосовое.\n" +
      "2️⃣ Бот ответит со ссылками на статьи закона.\n" +
      "3️⃣ Новая тема — «🔄 Новый вопрос».\n\n" +
      "<b>Команды:</b>\n/start — главное меню\n/yangi — новый диалог\n/tariflar — тарифы\n/hisob — мой аккаунт\n/lang — язык\n\n" +
      "⚠️ Бот не заменяет адвоката — по важным делам консультируйтесь со специалистом.\n\n🌐 {site}",
    analyzing: "⏳ Ищу в законах...",
    error: "😔 Произошла ошибка. Попробуйте чуть позже.",
    unsupported:
      "📎 Пока не умею анализировать фото и файлы.\nОтправьте вопрос <b>текстом</b> или 🎤 <b>голосовым</b>.",
    voice_processing: "🎤 Слушаю голосовое сообщение...",
    voice_error: "😔 Не удалось распознать голосовое. Скажите чётче или напишите текстом.",
    voice_recognized: "🎤 <b>Я понял:</b>",
    limit:
      "⏳ <b>Дневной лимит исчерпан</b>\n\n" +
      "📊 Использовано: <b>{used}</b> вопросов\n🔓 Обновится: <b>{at}</b> (осталось {left})\n\n" +
      "💎 Нужно больше вопросов? Повысьте тариф:",
    lang_choose: "🌐 Tilni tanlang / Выберите язык:",
    lang_set: "✅ Язык: Русский",
    myid: "🆔 Ваш chat ID: <code>{id}</code>\n\nЧтобы получать уведомления администратора, добавьте его в <code>ADMIN_TELEGRAM_IDS</code> на сервере.",
  },
};

/** "{name}" kabi joylarni to'ldiradi */
function fill(str, vars = {}) {
  return String(str).replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
}

module.exports = { T, fill };
