/**
 * Mini app matnlari (davomi): saytdagi barcha darslar, testlar va mavzular nomi.
 * Mavzu nomlari saytning `lesson_mod_*` kalitlari bilan bir xil (i18n/uz.js, ru.js).
 */
export const LIB_UZ = {
  lib: {
    lessons: "Barcha darslar", lessonsSub: "Saytdagi barcha darslar — mavzular bo'yicha",
    tests: "Testlar", testsSub: "Saytdagi barcha testlar — bilimingizni sinang",
    search: "Dars qidirish…", nothing: "Hech narsa topilmadi",
    sections: (n) => `${n} ta bo'lim`, minutes: (n) => `~${n} daqiqa`, questions: (n) => `${n} ta savol`,
    locked: "Tarifingizda yopiq", upgrade: "Tariflarni ko'rish",
    objectives: "Darsdan keyin bilasiz", example: "Hayotiy misol", keyPoints: "Asosiy fikrlar",
    warning: "Diqqat", steps: "Amaliy qadamlar", markDone: "Darsni tugatdim",
    doneMsg: "Dars tugallandi!", alreadyDone: "Bu dars avval tugatilgan", done: "Tugatilgan",
    passed: "Test topshirildi!", failed: "Yana bir urinib ko'ring",
    score: (s, t, p) => `${t} tadan ${s} ta to'g'ri · ${p}%`, related: "Shu mavzudagi darslar",
    retake: "Qayta topshirish", back: "Orqaga", art: (n) => `${n}-modda`,
  },
  mods: { constitution: "Konstitutsiya va davlat", civil: "Fuqarolik huquqi", contracts: "Shartnomalar", family: "Oila huquqi", inheritance: "Meros huquqi", labor: "Mehnat huquqi", housing: "Uy-joy va yer", consumer: "Iste'molchi huquqlari", tax: "Soliq va tadbirkorlik", administrative: "Ma'muriy huquq", criminal: "Jinoyat huquqi", process: "Sud va himoya", special: "Maxsus sohalar", other: "Boshqa mavzular" },
  language: "Til",
};

export const LIB_RU = {
  lib: {
    lessons: "Все уроки", lessonsSub: "Все уроки сайта — по темам",
    tests: "Тесты", testsSub: "Все тесты сайта — проверьте знания",
    search: "Поиск урока…", nothing: "Ничего не найдено",
    sections: (n) => `Разделов: ${n}`, minutes: (n) => `~${n} мин`, questions: (n) => `Вопросов: ${n}`,
    locked: "Закрыто на вашем тарифе", upgrade: "Посмотреть тарифы",
    objectives: "После урока вы узнаете", example: "Пример из жизни", keyPoints: "Главное",
    warning: "Внимание", steps: "Практические шаги", markDone: "Я прошёл урок",
    doneMsg: "Урок пройден!", alreadyDone: "Этот урок уже пройден", done: "Пройдено",
    passed: "Тест сдан!", failed: "Попробуйте ещё раз",
    score: (s, t, p) => `${s} из ${t} верно · ${p}%`, related: "Уроки по этой теме",
    retake: "Пройти заново", back: "Назад", art: (n) => `Статья ${n}`,
  },
  mods: { constitution: "Конституция и государство", civil: "Гражданское право", contracts: "Договоры", family: "Семейное право", inheritance: "Наследственное право", labor: "Трудовое право", housing: "Жильё и земля", consumer: "Права потребителей", tax: "Налоги и предпринимательство", administrative: "Административное право", criminal: "Уголовное право", process: "Суд и защита", special: "Специальные сферы", other: "Другие темы" },
  language: "Язык",
};
