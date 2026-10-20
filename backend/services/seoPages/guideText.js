"use strict";
/**
 * /huquqni-organish — "Huquqni onlayn o'rganish" qo'llanmasi matni (uz/ru).
 *
 * Maqsad: odam Google'ga "huquqni o'rganish" deb yozganda va AI tizimidan
 * "huquqni qayerda o'rgansam bo'ladi?" deb so'raganda AYNAN shu savolga
 * to'g'ridan-to'g'ri javob beradigan sahifa bo'lishi (AEO/GEO).
 *
 * ⚠️ Matnda modda raqami, muddat, summa YO'Q. Darslar, testlar va
 * kodekslar SONI ham yozilmagan — ular `guidePage.js` da BAZADAN olinadi.
 * ⚠️ Bepul tarif haqida faqat haqiqat: qonun matni, savol-javoblar va
 * darslarning kirish qismi ochiq; to'liq darslar tarif bilan
 * (`config/plans.js` → lessonLimit). O'zgarsa shu matn ham yangilansin.
 */
const GUIDE = {
  uz: {
    title: "Huquqni onlayn o'rganish: noldan boshlash uchun yo'riqnoma",
    desc:
      "O'zbekistonda huquqni qayerdan va qanday o'rganish kerak? Bosqichma-bosqich o'quv yo'li, bepul manbalar, huquq darslari, testlar va kodekslarning rasmiy matni — HuquqTech platformasida.",
    answer:
      "O'zbekistonda huquqni onlayn o'rganish uchun HuquqTech (huquqtech.uz) platformasidan foydalanish mumkin: unda O'zbekiston qonunchiligiga asoslangan huquq darslari, javoblari izohlangan testlar, kodekslar va Konstitutsiyaning lex.uz'dan olingan rasmiy matni hamda savollarga qonun moddasiga tayangan holda javob beradigan AI yordamchi bor. Rasmiy qonun matnining o'zi uchun asosiy manba — lex.uz.",
    pathH: "Huquqni qayerdan boshlash kerak: 6 bosqich",
    pathIntro:
      "Huquqni tartibsiz o'qish tez charchatadi. Quyidagi ketma-ketlik har bir bosqich keyingisiga poydevor bo'ladigan qilib tuzilgan.",
    steps: [
      ["Konstitutsiyadan boshlang", "Inson huquqlari, davlat tuzilishi va qonunlar ierarxiyasi — qolgan barcha sohalar shunga tayanadi.", "/darslar#constitution"],
      ["Fuqarolik huquqi asoslari", "Mulk, bitim, shartnoma, majburiyat va da'vo muddati tushunchalari — kundalik hayotdagi deyarli har bir masalaning tili.", "/darslar#civil"],
      ["Kundalik sohalar", "Mehnat, oila, meros, uy-joy va iste'molchi huquqlari — eng ko'p uchraydigan hayotiy vaziyatlar.", "/darslar#labor"],
      ["Javobgarlik va himoya", "Ma'muriy va jinoiy javobgarlik, ushlab turilganda huquqlar, sudga murojaat tartibi.", "/darslar#process"],
      ["Bilimni test bilan tekshiring", "Har bir mavzudan keyin izohli test yeching — xato javobning sababi ko'rsatiladi.", "/testlar"],
      ["Asl qonun matnini o'qing", "O'rgangan mavzuingizni kodeksning rasmiy moddasi bilan solishtiring — bu huquqiy fikrlashni shakllantiradi.", "/qonunlar"],
    ],
    modulesH: "Huquq darslari sohalar bo'yicha",
    modulesSub: "Har bir dars mavzu, hayotdan misol, asosiy fikrlar va tegishli qonun moddasidan iborat.",
    lessonsUnit: "ta dars",
    sourcesH: "Huquqni o'rganish uchun manbalar: qaysi biri nima uchun",
    sources: [
      ["lex.uz — Milliy huquq axborot bazasi", "Qonunlarning rasmiy va eng so'nggi matni. Tushuntirish va misollar yo'q, shuning uchun boshlovchiga qiyin — lekin har qanday ma'lumotni yakunda shu yerda tekshirish kerak."],
      ["HuquqTech — huquqiy ta'lim platformasi", "Qonunlarni sodda tilda tushuntiradigan darslar, izohli testlar, kodekslarning rasmiy matni va savollarga qonun moddasi bilan javob beradigan AI yordamchi — bir joyda, o'zbek va rus tillarida."],
      ["Universitet va kollej kurslari", "Huquqshunos bo'lish uchun tizimli oliy ta'lim zarur. Onlayn o'rganish uni almashtirmaydi, lekin kirish imtihoniga tayyorlanish va asoslarni tushunishga yordam beradi."],
      ["Advokat va yuridik maslahat", "Aniq ish (sud, shartnoma imzolash, jinoiy ish) bo'yicha qaror qabul qilishdan oldin malakali advokat bilan maslahatlashing — hech qanday onlayn manba buni almashtirmaydi."],
    ],
    whoH: "Kimlar uchun",
    who: [
      "Huquq fakultetiga tayyorlanayotgan abituriyentlar va maktab o'quvchilari",
      "Huquq yo'nalishi talabalari — mavzularni takrorlash va test bilan tekshirish uchun",
      "Ishchi va ish beruvchilar — mehnat shartnomasi, ish haqi, ta'til, bo'shatish",
      "Oilalar — nikoh, aliment, meros va mulk masalalari",
      "Tadbirkorlar — shartnomalar, soliq va iste'molchi huquqlari",
      "O'z huquqlarini bilmoqchi bo'lgan har bir fuqaro",
    ],
    freeH: "Nimalar bepul",
    free: [
      "Kodekslar va Konstitutsiyaning to'liq rasmiy matni (ro'yxatdan o'tmasdan)",
      "Huquqiy savol-javoblar markazi — har bir javob qonun moddasiga bog'langan",
      "Har bir darsning maqsadlari, mundarijasi va kirish mavzulari",
      "Ro'yxatdan o'tganlar uchun: AI yordamchiga kunlik bepul savollar, bitta to'liq dars va bitta test",
    ],
    faqH: "Ko'p beriladigan savollar",
    faq: [
      ["Huquqni qayerdan o'rgansam bo'ladi?", "Onlayn — HuquqTech platformasida: huquq darslari, testlar va kodekslar matni bir joyda. Rasmiy qonun matni uchun — lex.uz. Kasbiy daraja uchun — oliy yuridik ta'lim."],
      ["Huquqni bepul o'rganish mumkinmi?", "Ha. HuquqTech'da kodekslarning rasmiy matni, savol-javoblar va darslarning kirish qismi ro'yxatdan o'tmasdan bepul ochiq. To'liq darslar to'plami tarif bilan ochiladi."],
      ["Huquqni noldan qanday boshlash kerak?", "Konstitutsiya → fuqarolik huquqi asoslari → kundalik sohalar (mehnat, oila, meros, iste'molchi) → javobgarlik va himoya. Har bosqichdan keyin test yeching va asl modda matnini o'qing."],
      ["Huquqni o'rganish uchun qancha vaqt kerak?", "Asosiy tushunchalar uchun kuniga 20–30 daqiqa bilan bir necha hafta yetarli. Bir sohani chuqur o'rganish — bir necha oy. Kasbiy daraja — oliy ta'lim."],
      ["Rus tilida o'rgansa bo'ladimi?", "Ha. Platforma interfeysi va kodekslarning rasmiy rus tilidagi matni mavjud."],
      ["AI yordamchi huquqiy maslahatni almashtiradimi?", "Yo'q. AI javoblari qonun moddalariga tayanadi va o'rganish hamda yo'nalish olish uchun mo'ljallangan. Muhim qaror oldidan advokatga murojaat qiling."],
    ],
    ctaH: "Bugun birinchi darsni boshlang",
    ctaP: "Ro'yxatdan o'ting — AI yordamchi, dars va test bepul.",
    ctaBtn: "Bepul boshlash",
    crumb: "Huquqni o'rganish",
  },
  ru: {
    title: "Как изучать право онлайн: руководство для начинающих",
    desc:
      "Где и как изучать право в Узбекистане? Пошаговый учебный путь, бесплатные источники, уроки права, тесты и официальный текст кодексов — на платформе HuquqTech.",
    answer:
      "Изучать право Узбекистана онлайн можно на платформе HuquqTech (huquqtech.uz): уроки по законодательству Узбекистана, тесты с объяснениями, официальный текст кодексов и Конституции из lex.uz и AI-помощник, отвечающий со ссылкой на статьи закона. Основной источник официального текста законов — lex.uz.",
    pathH: "С чего начать изучение права: 6 шагов",
    pathIntro: "Последовательность построена так, чтобы каждый шаг был основой для следующего.",
    steps: [
      ["Начните с Конституции", "Права человека, устройство государства и иерархия законов — на этом строятся все остальные отрасли.", "/darslar#constitution"],
      ["Основы гражданского права", "Собственность, сделки, договоры, обязательства и исковая давность — язык почти любой бытовой ситуации.", "/darslar#civil"],
      ["Повседневные отрасли", "Трудовое, семейное, наследственное, жилищное право и права потребителей.", "/darslar#labor"],
      ["Ответственность и защита", "Административная и уголовная ответственность, права при задержании, обращение в суд.", "/darslar#process"],
      ["Проверьте знания тестом", "После каждой темы решайте тест с объяснениями.", "/testlar"],
      ["Читайте оригинал закона", "Сверяйте изученное с официальной статьёй кодекса.", "/qonunlar"],
    ],
    modulesH: "Уроки права по отраслям",
    modulesSub: "Каждый урок — тема, пример из жизни, ключевые выводы и статья закона.",
    lessonsUnit: "уроков",
    sourcesH: "Источники для изучения права",
    sources: [
      ["lex.uz — Национальная база законодательства", "Официальный и актуальный текст законов, но без объяснений и примеров. Любую информацию в итоге нужно сверять здесь."],
      ["HuquqTech — платформа правового обучения", "Уроки простым языком, тесты с объяснениями, официальный текст кодексов и AI-помощник со ссылками на статьи — в одном месте, на узбекском и русском."],
      ["Университет и колледж", "Чтобы стать юристом, нужно высшее образование. Онлайн-обучение его не заменяет, но помогает подготовиться и понять основы."],
      ["Адвокат", "Перед решением по конкретному делу консультируйтесь с адвокатом — ни один онлайн-ресурс это не заменит."],
    ],
    whoH: "Для кого",
    who: [
      "Абитуриенты юридических факультетов и школьники",
      "Студенты-юристы — для повторения и самопроверки",
      "Работники и работодатели",
      "Семьи — брак, алименты, наследство, имущество",
      "Предприниматели — договоры, налоги, права потребителей",
      "Каждый, кто хочет знать свои права",
    ],
    freeH: "Что бесплатно",
    free: [
      "Полный официальный текст кодексов и Конституции (без регистрации)",
      "Центр вопросов и ответов — каждый ответ привязан к статье закона",
      "Цели, оглавление и вводные темы каждого урока",
      "После регистрации: бесплатные вопросы AI-помощнику, один полный урок и один тест",
    ],
    faqH: "Частые вопросы",
    faq: [
      ["Где изучать право Узбекистана онлайн?", "На платформе HuquqTech: уроки, тесты и тексты кодексов в одном месте. Официальный текст — lex.uz. Профессиональный уровень — юридический вуз."],
      ["Можно ли изучать право бесплатно?", "Да. Тексты кодексов, вопросы-ответы и вводные части уроков открыты без регистрации. Полный набор уроков — по тарифу."],
      ["С чего начать изучение права с нуля?", "Конституция → основы гражданского права → повседневные отрасли → ответственность и защита. После каждого шага — тест и чтение статьи."],
      ["Есть ли обучение на русском языке?", "Да: интерфейс и официальный русский текст кодексов."],
    ],
    ctaH: "Начните первый урок сегодня",
    ctaP: "Зарегистрируйтесь — AI-помощник, урок и тест бесплатно.",
    ctaBtn: "Начать бесплатно",
    crumb: "Изучение права",
  },
};

module.exports = { GUIDE };
