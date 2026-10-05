"use strict";
/**
 * HAYOTIY VAZIYATLAR — IJARA VA YO'L-TRANSPORT HODISASI (2026-10-05).
 * Tuzilma va qoidalar — situationsFamily.js izohida.
 *
 * ⚠️ Nega qo'shildi: "Ijarachi uydan chiqmayapti", "Uy egasi depozitni
 * qaytarmayapti" → "topilmadi"; "Avtohalokat bo'ldi, aybdor kim" →
 * Jinoyat kodeksining JAVOBGARLIKKA TORTISH MUDDATI moddasi (aloqasiz).
 * Pin'lar bazadan raqami va sarlavhasi bo'yicha tekshirilgan.
 */

module.exports = [
  {
    // Ijaradan OLDIN: "ijaraga olingan mashina avariyaga uchradi" — bu YTH
    id: "car_accident",
    match: (t) =>
      (/avtohalokat|avariya|yol transport hodisa|\bytx\b|\bdtp\b|дтп|авари|столкнов/.test(t) &&
        !/avariya holat|аварийн|(uy|bino|turar joy)\S* avariya/.test(t)) ||
      /(mashina|avtomobil|машин)\S*.{0,25}(urib ket|urib yubor|bosib ket|сбил)|(urib|bosib) ket\S*.{0,20}(mashina|haydovchi)/.test(t),
    title: { uz: "Yo'l-transport hodisasi (avariya)", ru: "Дорожно-транспортное происшествие" },
    summary: {
      uz:
        "Transport vositasi oshiqcha xavf manbai hisoblanadi: uning egasi yetkazilgan zararni, agar zarar yengib " +
        "bo'lmaydigan kuch yoki jabrlanuvchining qasddan qilgan harakati oqibatida bo'lganini isbotlay olmasa, " +
        "to'lashi shart. Aybdorni hodisa joyida rasmiylashtirilgan hujjatlar va ekspertiza aniqlaydi. Hodisa " +
        "joyidan ketib qolish va odamga shikast yetkazish uchun alohida javobgarlik bor.",
      ru:
        "Транспортное средство — источник повышенной опасности: его владелец обязан возместить причинённый вред, " +
        "если не докажет, что вред возник вследствие непреодолимой силы или умысла потерпевшего. Виновника " +
        "устанавливают документы, оформленные на месте, и экспертиза. За оставление места ДТП и причинение " +
        "вреда здоровью предусмотрена отдельная ответственность.",
    },
    pins: [["FK2", "999"], ["FK2", "1003"], ["MJK", "137"], ["JK", "266"]],
    codes: ["FK2", "MJK", "JK"],
    terms: "yoʻl-transport hodisasi oshiqcha xavf manbai zararni qoplash",
    steps: {
      uz: [
        "Hodisa joyidan ketmang, transport vositalarini joyidan siljitmang va 102 raqamiga (yo'l harakati xavfsizligi xizmati) xabar bering. Jarohatlangan bo'lsa — 103.",
        "Joyni har tomondan suratga oling, guvohlarning ism va telefonlarini yozib oling, videoregistrator yozuvini saqlang.",
        "Rasmiylashtirilgan hujjatlar (sxema, bayonnoma) nusxasini oling va o'zingiz rozi bo'lmagan narsaga imzo qo'ymang.",
        "Zararni avval aybdorning sug'urta kompaniyasidan talab qiling; yetmasa yoki rad etilsa — qolgan qismini aybdordan sud orqali undiring.",
      ],
      ru: [
        "Не покидайте место происшествия, не сдвигайте транспорт и сообщите по номеру 102 (служба безопасности дорожного движения). При травмах — 103.",
        "Сфотографируйте место со всех сторон, запишите имена и телефоны свидетелей, сохраните запись видеорегистратора.",
        "Получите копии оформленных документов (схема, протокол) и не подписывайте то, с чем не согласны.",
        "Сначала требуйте возмещения от страховой компании виновника; если не хватит или откажут — взыщите остаток с виновника через суд.",
      ],
    },
  },
  {
    id: "rent",
    match: (t) =>
      /ijara|ijarach|kvartirant|arenda|(uy|kvartira|xonadon) egasi|аренд|квартирант|съ[её]м|сдаю квартир|сдал квартир|арендодат|наним/.test(t) &&
      !/yer ijara|аренд\S* земл/.test(t),
    title: { uz: "Uy-joy ijarasi bo'yicha nizo", ru: "Спор по аренде жилья" },
    summary: {
      uz:
        "Uy yoki kvartirani ijaraga berish va olish shartlari — muddat, to'lov, kafolat puli, kim nimani ta'mirlaydi — " +
        "asosan taraflarning shartnomasi bilan belgilanadi. Shartnoma muddatidan oldin faqat qonunda ko'rsatilgan " +
        "asoslar bo'yicha va sud orqali bekor qilinadi; ijara tugagach ijarachi mulkni qaytarishi, kechiktirsa — " +
        "shu vaqt uchun haq to'lashi shart.",
      ru:
        "Условия аренды дома или квартиры — срок, оплата, залог, кто делает ремонт — в основном определяются " +
        "договором сторон. Досрочно договор расторгается только по основаниям закона и через суд; по окончании " +
        "аренды арендатор обязан вернуть имущество, а при просрочке — платить за это время.",
    },
    pins: [["UJK", "25"], ["FK2", "539"], ["FK2", "551"], ["FK2", "554"]],
    codes: ["UJK", "FK2"],
    terms: "turar joyni ijaraga berish shartnomasi mulk ijarasi",
    steps: {
      uz: [
        "Ijara shartnomasini yozma tuzing: muddat, oylik to'lov, kafolat puli (depozit) va u qaysi holatda qaytarilishi aniq yozilsin.",
        "Har bir to'lovni tilxat yoki bank o'tkazmasi bilan qayd eting; uyni topshirish va qaytarishda holatini suratga oling.",
        "Nizo bo'lsa — talabingizni (uydan chiqish, qarzni yoki depozitni qaytarish) ikkinchi tomonga yozma yuboring.",
        "Kelishilmasa — sudga murojaat qiling. Ijarachini o'zboshimchalik bilan, kuch ishlatib chiqarish mumkin emas — bu faqat sud qarori bilan bo'ladi.",
      ],
      ru: [
        "Заключите договор аренды письменно: срок, ежемесячная плата, залог (депозит) и условия его возврата.",
        "Фиксируйте каждый платёж распиской или банковским переводом; при передаче и возврате жилья фотографируйте его состояние.",
        "При споре направьте другой стороне письменное требование (освободить жильё, вернуть долг или залог).",
        "Если договориться не удалось — обращайтесь в суд. Самовольно, силой выселять арендатора нельзя — только по решению суда.",
      ],
    },
  },
];
