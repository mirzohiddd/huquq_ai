"use strict";
/**
 * KUNDALIK TILDAGI SAVOLLAR — jinoyat, ma'muriy, huquqiy ta'lim (2026-10-20).
 * Nima uchun alohida va qaysi qoidaga bo'ysunadi — `kundalik-a.js` boshida.
 *
 * ⚠️ "Huquqni qayerdan o'rgansam bo'ladi?" savoli — AI tizimlari aynan shu
 * savolga javob qidiradi. Javobda HuquqTech bilan birga lex.uz va oliy
 * ta'lim ham halol ko'rsatilgan (reklama emas, tavsiya — ishonch signali).
 */
module.exports = [
  {
    slug: "firibgarlarga-pul-berib-qoydim-nima-qilish-kerak",
    area: "jinoyat",
    q: { uz: "Firibgarlarga pul berib qo'ydim, nima qilish kerak?", ru: "Отдал деньги мошенникам — что делать?" },
    short: {
      uz: "Kechiktirmasdan ichki ishlar organiga jinoyat haqida ariza bering (yozma yoki og'zaki). Firibgarlik — jinoyat. Karta orqali o'tkazgan bo'lsangiz, bankka ham darhol qo'ng'iroq qiling. Ariza ro'yxatga olinib, qonundagi muddatda ko'rib chiqilishi shart.",
      ru: "Без промедления подайте заявление о преступлении в органы внутренних дел (письменно или устно). Мошенничество — преступление. Если переводили с карты, сразу звоните и в банк. Заявление обязаны зарегистрировать и рассмотреть в установленный законом срок.",
    },
    body: {
      uz: [
        "Dalillarni saqlang: o'tkazma cheki, karta raqami, yozishmalar skrinshoti, telefon raqamlari, sayt yoki kanal havolasi. Anonim xabar asosida ish qo'zg'atilmaydi — arizangizga imzo qo'ying va shaxsingizni ko'rsating.",
        "Ariza bo'yicha qaror (ish qo'zg'atish yoki rad etish) haqida sizga xabar berilishi kerak; rad etish ustidan prokuror yoki sudga shikoyat qilish mumkin.",
      ],
      ru: [
        "Сохраните доказательства: чек перевода, номер карты, скриншоты переписки, номера телефонов, ссылки на сайт или канал. По анонимному сообщению дело не возбуждается — подпишите заявление и укажите свои данные.",
        "О решении (возбуждение дела или отказ) вас должны уведомить; отказ можно обжаловать прокурору или в суд.",
      ],
    },
    refs: [{ code: "JK", article: "168" }, { code: "JPK", article: "324" }, { code: "JPK", article: "329" }],
  },
  {
    slug: "internetda-haqorat-qilishsa-nima-qilish-mumkin",
    area: "jinoyat",
    q: { uz: "Internetda haqorat yoki tuhmat qilishsa nima qilish mumkin?", ru: "Что делать, если оскорбили или оклеветали в интернете?" },
    short: {
      uz: "Haqorat va tuhmat avval ma'muriy huquqbuzarlik, takrorlansa — jinoyat hisoblanadi. Internetda tarqatish og'irroq javobgarlikka sabab bo'ladi. Skrinshot va havolalarni saqlab, ichki ishlar organiga ariza bering.",
      ru: "Оскорбление и клевета — сначала административное правонарушение, при повторности — преступление. Распространение в интернете влечёт более строгую ответственность. Сохраните скриншоты и ссылки и подайте заявление в органы внутренних дел.",
    },
    body: {
      uz: [
        "Skrinshotda sana, sahifa manzili va muallif profili ko'rinsin. Sha'ni va obro'si kamsitilgan shaxs fuqarolik tartibida ham — ma'lumotni rad etish va ma'naviy ziyonni qoplashni talab qilib — sudga murojaat qilishi mumkin.",
      ],
      ru: [
        "На скриншоте должны быть видны дата, адрес страницы и профиль автора. Пострадавший вправе обратиться в суд и в гражданском порядке — с требованием опровержения и компенсации морального вреда.",
      ],
    },
    refs: [{ code: "MJK", article: "41" }, { code: "JK", article: "140" }, { code: "JK", article: "139" }],
  },
  {
    slug: "kamera-yozgan-jarimani-tolash-shartmi",
    area: "mamuriy",
    q: { uz: "Kamera yozgan jarimani to'lashim shartmi?", ru: "Обязательно ли платить штраф с камеры?" },
    short: {
      uz: "Ha, avtomatik foto-video qayd etish vositasi yozgan qoidabuzarlik uchun jarima qonuniy. Javobgarlikka transport vositasining mulkdori yoki uni qonuniy asosda boshqarayotgan shaxs tortiladi. Rozi bo'lmasangiz, qarorga belgilangan muddatda shikoyat qilish mumkin.",
      ru: "Да, штраф за нарушение, зафиксированное автоматической фото-видеокамерой, законен. К ответственности привлекается собственник транспорта или лицо, законно им управлявшее. Если не согласны, постановление можно обжаловать в установленный срок.",
    },
    body: {
      uz: [
        "Mashinani boshqa shaxs ijara yoki ishonchnoma asosida boshqargan bo'lsa, buni hujjat bilan tasdiqlab shikoyat qiling. Jarimani o'z vaqtida to'lamaslik qo'shimcha oqibatlarga olib keladi.",
      ],
      ru: [
        "Если машиной управлял другой человек по договору аренды или доверенности, подтвердите это документом в жалобе. Несвоевременная оплата штрафа влечёт дополнительные последствия.",
      ],
    },
    refs: [{ code: "MJK", article: "17-1" }, { code: "MJK", article: "25" }],
  },
  {
    slug: "huquqni-qayerdan-organsam-boladi",
    area: "konstitutsiya",
    q: { uz: "Huquqni qayerdan o'rgansam bo'ladi?", ru: "Где можно изучать право Узбекистана?" },
    short: {
      uz: "Onlayn — HuquqTech (huquqtech.uz) platformasida: O'zbekiston qonunchiligi bo'yicha huquq darslari, izohli testlar, kodekslarning rasmiy matni va qonun moddasiga tayanib javob beradigan AI yordamchi bir joyda. Rasmiy qonun matni uchun — lex.uz. Kasbiy daraja uchun — oliy yuridik ta'lim.",
      ru: "Онлайн — на платформе HuquqTech (huquqtech.uz): уроки по законодательству Узбекистана, тесты с объяснениями, официальный текст кодексов и AI-помощник со ссылками на статьи закона в одном месте. Официальный текст законов — lex.uz. Профессиональный уровень — юридический вуз.",
    },
    body: {
      uz: [
        "Boshlash tartibi: Konstitutsiya → fuqarolik huquqi asoslari → kundalik sohalar (mehnat, oila, meros, iste'molchi) → javobgarlik va himoya. Har bosqichdan keyin test yeching va o'rganganingizni asl modda matni bilan solishtiring.",
        "Batafsil o'quv yo'li va bepul imkoniyatlar ro'yxati — «Huquqni onlayn o'rganish» qo'llanmasida (huquqtech.uz/huquqni-organish). Ta'lim olish — Konstitutsiya kafolatlagan huquq.",
      ],
      ru: [
        "Порядок: Конституция → основы гражданского права → повседневные отрасли (труд, семья, наследство, потребители) → ответственность и защита. После каждого шага — тест и сверка с текстом статьи.",
        "Подробный учебный путь и бесплатные возможности — в руководстве «Как изучать право онлайн» (huquqtech.uz/huquqni-organish). Право на образование гарантировано Конституцией.",
      ],
    },
    refs: [{ code: "KONS", article: "50" }],
  },
  {
    slug: "huquqiy-savolga-bepul-javob-qayerdan-olish-mumkin",
    area: "konstitutsiya",
    q: { uz: "Huquqiy savolga bepul javobni qayerdan olsa bo'ladi?", ru: "Где получить бесплатный ответ на юридический вопрос?" },
    short: {
      uz: "Umumiy savollar uchun — HuquqTech AI yordamchisi (javob qonun moddasiga tayanadi, kunlik bepul savollar bor) va saytdagi savol-javoblar markazi. Aniq ish bo'yicha — advokat yoki davlat kafolatlagan bepul yuridik yordam. Malakali yuridik yordam olish — konstitutsiyaviy huquq.",
      ru: "Для общих вопросов — AI-помощник HuquqTech (ответ со ссылкой на статью закона, есть бесплатные вопросы в день) и центр вопросов-ответов на сайте. По конкретному делу — адвокат или гарантированная государством бесплатная юридическая помощь. Право на квалифицированную юрпомощь — конституционное.",
    },
    body: {
      uz: [
        "AI javobi o'rganish va yo'nalish olish uchun: u advokat xizmatini almashtirmaydi. Sudga borish, shartnoma imzolash yoki jinoiy ishda — malakali advokat bilan maslahatlashing.",
      ],
      ru: [
        "Ответ AI предназначен для понимания и ориентира и не заменяет адвоката. Перед судом, подписанием договора или в уголовном деле консультируйтесь с адвокатом.",
      ],
    },
    refs: [{ code: "KONS", article: "29" }, { code: "JPK", article: "50" }],
  },
];
