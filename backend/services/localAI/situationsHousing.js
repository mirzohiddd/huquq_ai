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
    /* Ijarachini muddatidan oldin chiqarish — umumiy "rent" dan OLDIN.
       ⚠️ 2026-10-28: "Uy egasi ijara tugamasdan «chiqib ket» deyapti" umumiy
       ijara qolipiga tushib, 1-qadam "shartnomani yozma tuzing" bo'lardi —
       ijarachi uchun bu savolga javob emas. */
    id: "early_eviction",
    match: (t) =>
      /((uy|kvartira|xonadon) egasi|arendodatel|арендодат|хозя\S* (квартир|дом|жиль))\S*.{0,70}(chiqib ket|chiqarmoqchi|chiqaryapti|haydayapti|haydamoqchi|bosh(at|ating)|muddatidan oldin|tugamasdan|выселя|выгоня|съезжа|освобод)/.test(t) ||
      /ijara\S* (muddati )?(tugamasdan|tugamay|muddatidan oldin)|до окончания (срока )?аренд/.test(t),
    title: { uz: "Uy egasi ijara muddati tugamasdan chiqib ketishni talab qilyapti", ru: "Арендодатель выселяет до окончания срока аренды" },
    summary: {
      uz:
        "Muddatli ijara shartnomasini ijaraga beruvchi o'z xohishi bilan muddatidan oldin bekor qila olmaydi: bu faqat " +
        "SUD orqali va qonunda sanab o'tilgan asoslarda — ijarachi mulkdan shartnomaga zid foydalansa, uni jiddiy " +
        "yomonlashtirsa, to'lovni bir necha marta kechiktirsa — mumkin. Muddat belgilanmagan shartnomadan esa yozma " +
        "oldindan ogohlantirish bilan voz kechish mumkin. Ikkala holatda ham ijarachini kuch bilan chiqarib bo'lmaydi.",
      ru:
        "Арендодатель не может по своему желанию досрочно расторгнуть срочный договор аренды: это возможно только " +
        "ЧЕРЕЗ СУД и по основаниям закона — если арендатор использует имущество с нарушением договора, существенно " +
        "его ухудшает, неоднократно просрочивает оплату. От договора без срока можно отказаться с письменным " +
        "предупреждением заранее. В обоих случаях выселить арендатора силой нельзя.",
    },
    pins: [["FK2", "551"], ["FK2", "540"], ["FK2", "539"], ["FK2", "554"]],
    codes: ["FK2", "UJK"],
    terms: "mulk ijarasi shartnomasini muddatidan oldin bekor qilish",
    steps: {
      uz: [
        "Shartnomangizni tekshiring: unda muddat yozilganmi (masalan bir yilga) va muddatidan oldin bekor qilish haqida qanday shart bor. Shartnoma og'zaki bo'lsa — to'lov cheklari, o'tkazmalar va yozishmalar ijarani isbotlaydi.",
        "Uy egasidan talabini va sababini yozma ravishda so'rang. To'lovni kechiktirmagan va uyni buzmagan bo'lsangiz — buni ham yozma javobingizda ko'rsating.",
        "Kelishuvga erishsangiz — chiqish sanasi, kafolat puli (depozit) va oldindan to'langan oylar qaytarilishini yozma rasmiylashtiring.",
        "Sizni kuch bilan chiqarishsa, narsalaringizni olib qo'yishsa yoki qulfni almashtirishsa — 102 raqamiga xabar bering. Nizo davom etsa — masalani sud hal qiladi; muddatidan oldin chiqishga majbur bo'lsangiz, zararni qoplashni talab qilishingiz mumkin.",
      ],
      ru: [
        "Проверьте договор: указан ли срок (например, год) и какие условия досрочного расторжения. Если договор устный — аренду подтверждают чеки, переводы и переписка.",
        "Попросите арендодателя изложить требование и причину письменно. Если вы не задерживали оплату и не портили жильё — укажите это в письменном ответе.",
        "Если договорились — оформите письменно дату выезда, возврат залога (депозита) и предоплаченных месяцев.",
        "Если вас выселяют силой, забирают вещи или меняют замок — звоните 102. Если спор продолжается, его решает суд; если вас вынудили съехать досрочно, можно требовать возмещения убытков.",
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
