"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  KUZATILADIGAN QONUN HUJJATLARI — BOSHLANG'ICH (SEED) RO'YXAT
 * ═══════════════════════════════════════════════════════════════════
 *
 * ⚠️ DIQQAT — bu ro'yxat endi YAGONA manba EMAS.
 * Haqiqiy (jonli) ro'yxat bazada — `LawSource` kolleksiyasida saqlanadi
 * va admin panelidan boshqariladi (qo'shish / tahrirlash / o'chirish /
 * qayta yuklash). Bu fayl faqat DASTLABKI to'ldirish uchun ishlatiladi:
 * kolleksiya bo'sh bo'lsa, server ishga tushganda shu ro'yxat bazaga
 * ko'chiriladi (`services/lawRegistry.js` → `seedLawSources()`).
 *
 * Ya'ni: yangi kodeks qo'shish uchun endi KODGA TEGISH SHART EMAS —
 * admin panelidan qo'shiladi. Bu fayl "zavod sozlamalari" bo'lib qoladi.
 *
 * ─────────────────────────────────────────────────────────────────
 * lex.uz HUJJAT ID'LARI
 * Quyidagi ID'larning BARCHASI 2026-08-06 da lex.uz'ga haqiqiy so'rov
 * yuborib TEKSHIRILGAN: har bir sahifa ochilgan, sarlavhasi o'qilgan va
 * amaldagi tahrir ekani tasdiqlangan.
 *
 * Bu shart, chunki oldin taxminiy ID'lar 404 qaytargan (masalan Mehnat
 * kodeksi 2022-yilda TO'LIQ yangilangan — eski ID `-161439` endi
 * mavjud emas). Yangi hujjat qo'shishdan oldin ID ni ALBATTA tekshiring:
 * https://lex.uz/docs/<ID> ochilishi va "amaldagi tahrir" bo'lishi kerak.
 *
 * ESKIRGAN, ATAYLAB QO'SHILMAGANLAR (adashtirmaslik uchun):
 *   -142859   Mehnat kodeksi (1995) — o'rniga -6257288 (2022)
 *   -152637   Soliq kodeksi (1997)  — o'rniga -4674902 (2019)
 *   -1286558  Soliq kodeksi (2007)  — o'rniga -4674902 (2019)
 *   -186105   Fuqarolik protsessual kodeksi (1997) — o'rniga -3517337 (2018)
 * ═══════════════════════════════════════════════════════════════════
 */

const TRACKED_LAWS = [
  /* ── KONSTITUTSIYA ────────────────────────────────────────────────
     Eng yuqori yuridik kuchga ega hujjat, shuning uchun ro'yxatda
     BIRINCHI (order: 1) va saytda unga ALOHIDA sahifa ajratilgan
     (/constitution). 2023-yil 30-aprel tahriri — amaldagisi. */
  {
    code: "KONS",
    name: "O'zbekiston Respublikasi Konstitutsiyasi",
    nameI18n: {
      ru: "Конституция Республики Узбекистан",
    },
    docId: "-6445145",
    url: "https://lex.uz/docs/-6445145",
    urlRu: "https://lex.uz/ru/docs/6445147",
    order: 1,
    /* Kutubxona ro'yxatida KO'RINMAYDI — u yerda faqat kodekslar
       bo'lishi kerak. Konstitutsiya /constitution sahifasida.
       DIQQAT: hujjatning o'zi to'liq ishlaydi — lex.uz'dan
       yangilanadi va AI qidiruvida (RAG) qatnashadi. */
    showInLibrary: false,
  },

  // ── Asosiy moddiy huquq ──────────────────────────────────────────
  {
    code: "MK",
    name: "Mehnat kodeksi",
    nameI18n: { ru: "Трудовой кодекс" },
    docId: "-6257288",
    url: "https://lex.uz/uz/docs/-6257288",
    urlRu: "https://lex.uz/ru/docs/6257291",
    order: 10,
  },
  {
    code: "OK",
    name: "Oila kodeksi",
    nameI18n: { ru: "Семейный кодекс" },
    docId: "-104720",
    url: "https://lex.uz/docs/-104720",
    urlRu: "https://lex.uz/ru/docs/104723",
    order: 20,
  },
  {
    code: "FK",
    name: "Fuqarolik kodeksi (birinchi qism)",
    nameI18n: {
      ru: "Гражданский кодекс (часть первая)",
    },
    docId: "-111189",
    url: "https://lex.uz/docs/-111189",
    urlRu: "https://lex.uz/ru/docs/111181",
    order: 30,
  },
  {
    code: "FK2",
    name: "Fuqarolik kodeksi (ikkinchi qism)",
    nameI18n: {
      ru: "Гражданский кодекс (часть вторая)",
    },
    docId: "-180552",
    url: "https://lex.uz/docs/-180552",
    urlRu: "https://lex.uz/ru/docs/180550",
    order: 40,
  },
  {
    code: "JK",
    name: "Jinoyat kodeksi",
    nameI18n: { ru: "Уголовный кодекс" },
    docId: "-111453",
    url: "https://lex.uz/docs/-111453",
    urlRu: "https://lex.uz/ru/docs/111457",
    order: 50,
  },
  {
    code: "MJK",
    name: "Ma'muriy javobgarlik to'g'risidagi kodeks",
    nameI18n: {
      ru: "Кодекс об административной ответственности",
    },
    docId: "-97664",
    url: "https://lex.uz/docs/-97664",
    urlRu: "https://lex.uz/ru/docs/97661",
    order: 60,
  },

  // ── Protsessual (sud) kodekslari ─────────────────────────────────
  {
    code: "FPK",
    name: "Fuqarolik protsessual kodeksi",
    nameI18n: {
      ru: "Гражданский процессуальный кодекс",
    },
    docId: "-3517337",
    url: "https://lex.uz/docs/-3517337",
    urlRu: "https://lex.uz/ru/docs/3517334",
    order: 70,
  },
  {
    code: "JPK",
    name: "Jinoyat-protsessual kodeksi",
    nameI18n: {
      ru: "Уголовно-процессуальный кодекс",
    },
    docId: "-111460",
    url: "https://lex.uz/docs/-111460",
    urlRu: "https://lex.uz/ru/docs/111463",
    order: 80,
  },
  {
    code: "JIK",
    name: "Jinoyat-ijroiya kodeksi",
    nameI18n: {
      ru: "Уголовно-исполнительный кодекс",
    },
    docId: "-163629",
    url: "https://lex.uz/docs/-163629",
    urlRu: "https://lex.uz/ru/docs/163627",
    order: 90,
  },
  {
    code: "IPK",
    name: "Iqtisodiy protsessual kodeksi",
    nameI18n: {
      ru: "Экономический процессуальный кодекс",
    },
    docId: "-3523891",
    url: "https://lex.uz/docs/-3523891",
    urlRu: "https://lex.uz/ru/docs/3523895",
    order: 100,
  },
  {
    code: "MSK",
    name: "Ma'muriy sud ishlarini yuritish to'g'risidagi kodeks",
    nameI18n: {
      ru: "Кодекс об административном судопроизводстве",
    },
    docId: "-3527353",
    url: "https://lex.uz/docs/-3527353",
    urlRu: "https://lex.uz/ru/docs/3527365",
    order: 110,
  },

  // ── Soha kodekslari ──────────────────────────────────────────────
  {
    code: "SK",
    name: "Soliq kodeksi",
    nameI18n: { ru: "Налоговый кодекс" },
    docId: "-4674902",
    url: "https://lex.uz/docs/-4674902",
    urlRu: "https://lex.uz/ru/docs/4674893",
    order: 120,
  },
  {
    code: "BJK",
    name: "Bojxona kodeksi",
    nameI18n: { ru: "Таможенный кодекс" },
    docId: "-2876354",
    url: "https://lex.uz/docs/-2876354",
    urlRu: "https://lex.uz/ru/docs/2876352",
    order: 130,
  },
  {
    code: "BK",
    name: "Budjet kodeksi",
    nameI18n: { ru: "Бюджетный кодекс" },
    docId: "-2304138",
    url: "https://lex.uz/docs/-2304138",
    urlRu: "https://lex.uz/ru/docs/2304140",
    order: 140,
  },
  {
    code: "YK",
    name: "Yer kodeksi",
    nameI18n: { ru: "Земельный кодекс" },
    docId: "-152653",
    url: "https://lex.uz/docs/-152653",
    urlRu: "https://lex.uz/ru/docs/149947",
    order: 150,
  },
  {
    code: "UJK",
    name: "Uy-joy kodeksi",
    nameI18n: { ru: "Жилищный кодекс" },
    docId: "-106136",
    url: "https://lex.uz/docs/-106136",
    urlRu: "https://lex.uz/ru/docs/106134",
    order: 160,
  },
  {
    code: "SHK",
    name: "Shaharsozlik kodeksi",
    nameI18n: { ru: "Градостроительный кодекс" },
    docId: "-5307951",
    url: "https://lex.uz/docs/-5307951",
    urlRu: "https://lex.uz/ru/docs/5307955",
    order: 170,
  },
  {
    code: "HK",
    name: "Havo kodeksi",
    nameI18n: { ru: "Воздушный кодекс" },
    docId: "-55594",
    url: "https://lex.uz/docs/-55594",
    urlRu: "https://lex.uz/ru/docs/55599",
    order: 180,
  },
  {
    code: "SYK",
    name: "Saylov kodeksi",
    nameI18n: { ru: "Избирательный кодекс" },
    docId: "-4386848",
    url: "https://lex.uz/docs/-4386848",
    urlRu: "https://lex.uz/ru/docs/4386846",
    order: 190,
  },

  // ── Kodeks emas, lekin ko'p so'raladigan qonun ────────────────────
  {
    code: "IHQ",
    name: "Iste'molchilarning huquqlarini himoya qilish to'g'risida (qonun)",
    nameI18n: {
      ru: "О защите прав потребителей (закон)",
    },
    docId: "-4704",
    url: "https://lex.uz/docs/-4704",
    urlRu: "https://lex.uz/ru/docs/14643",
    order: 200,
  },
];

module.exports = { TRACKED_LAWS };
