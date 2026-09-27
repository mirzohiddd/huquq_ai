"use strict";
/**
 * HAYOTIY VAZIYATLAR — MEHNAT.
 * Tuzilma va qoidalar — situationsFamily.js izohida.
 */

module.exports = [
  {
    // ⚠️ "Ishdan bo'shatish"dan OLDIN: "amaliyotda pul berilmaydi, 2 oydan keyin
    // bo'shatishsa-chi?" savolining asosi — sinov davridagi ish haqi.
    id: "probation",
    match: (t) =>
      /(amaliyot|sinov|stajir|испытат|стажир)/.test(t) &&
      /(pul|oylik|ish haqi|maosh|tolan|beril|bermay|плат|зарплат|бесплат)/.test(t),
    title: { uz: "Sinov (amaliyot) davrida ish haqi", ru: "Оплата в период испытания" },
    summary: {
      uz:
        "\"Amaliyot\" yoki \"sinov\" davri qonunda dastlabki sinov deb ataladi. Bu davrda xodimga mehnat " +
        "qonunchiligi TO'LIQ tatbiq etiladi — ya'ni ishlagan vaqtingiz uchun ish haqi to'lanishi shart, " +
        "\"sinovda pul berilmaydi\" degan kelishuv qonunga zid. Sinov sharti mehnat shartnomasida yozilgan " +
        "bo'lishi kerak, uning eng uzoq muddati ham qonunda cheklangan. Sinov davrida ish beruvchi sizni " +
        "faqat sababini yozma ko'rsatib va oldindan ogohlantirib bo'shata oladi — bu holda ham ishlagan kunlar uchun haq to'lanadi.",
      ru:
        "Период «стажировки» или «испытания» по закону — это предварительное испытание. В этот период на " +
        "работника ПОЛНОСТЬЮ распространяется трудовое законодательство — отработанное время обязательно " +
        "оплачивается, договорённость «на испытании без оплаты» противоречит закону. Условие об испытании " +
        "должно быть в трудовом договоре, его предельный срок ограничен законом. Уволить на испытании можно " +
        "только с письменным указанием причин и предупреждением — и за отработанные дни всё равно платят.",
    },
    pins: [["MK", "131"], ["MK", "129"], ["MK", "130"], ["MK", "132"]],
    codes: ["MK"],
    terms: "dastlabki sinov davri mehnat toʻgʻrisidagi qonunchilik ish haqi",
    steps: {
      uz: [
        "Ish beruvchidan yozma mehnat shartnomasi talab qiling — unda ish haqi miqdori va sinov sharti yozilgan bo'lishi kerak. Shartnomada sinov yozilmagan bo'lsa, siz sinovsiz qabul qilingan hisoblanasiz.",
        "Ishlaganingizni isbotlovchi dalillarni saqlang: yozishmalar, topshiriqlar, ish vaqti jadvali, guvohlar.",
        "Bo'shatilsangiz yoki haq to'lanmasa — ishlagan davr uchun ish haqini yozma talab qiling; berilmasa mehnat nizolari komissiyasiga, davlat mehnat inspeksiyasiga yoki sudga murojaat qiling.",
      ],
      ru: [
        "Потребуйте письменный трудовой договор — в нём должны быть размер оплаты и условие об испытании. Если испытание в договоре не указано, вы считаетесь принятым без испытания.",
        "Сохраняйте доказательства работы: переписку, задания, график, свидетелей.",
        "При увольнении или неоплате письменно потребуйте оплату за отработанный период; при отказе обратитесь в комиссию по трудовым спорам, инспекцию труда или суд.",
      ],
    },
  },
  {
    id: "dismissal",
    match: (t) =>
      /ishdan (boshat|hayda|chiqar|ketkaz|olib tashla)|boshatib yubor|haydab yubor|увол/.test(t),
    title: { uz: "Ishdan bo'shatish", ru: "Увольнение с работы" },
    summary: {
      uz:
        "Ish beruvchi mehnat shartnomasini faqat qonunda ko'rsatilgan asoslar bo'yicha va belgilangan " +
        "tartibda bekor qila oladi. Asossiz bo'shatilgan xodim ishga tiklanishi mumkin.",
      ru:
        "Работодатель может расторгнуть трудовой договор только по основаниям, указанным в законе, и в " +
        "установленном порядке. Незаконно уволенный работник может быть восстановлен на работе.",
    },
    pins: [["MK", "161"], ["MK", "163"], ["MK", "561"], ["MK", "560"]],
    codes: ["MK"],
    terms: "mehnat shartnomasini bekor qilish ish beruvchining tashabbusi ishga tiklash",
    steps: {
      uz: [
        "Ish beruvchidan bo'shatish to'g'risidagi buyruqning nusxasini va bo'shatish asosini yozma talab qiling.",
        "Oxirgi hisob-kitob (ish haqi, foydalanilmagan ta'til kompensatsiyasi) to'liq to'langanini tekshiring.",
        "Bo'shatish asossiz deb hisoblasangiz — mehnat nizolari komissiyasiga yoki to'g'ridan-to'g'ri sudga murojaat qiling. Murojaat muddati cheklangan, shuning uchun kechiktirmang.",
      ],
      ru: [
        "Потребуйте у работодателя копию приказа об увольнении и письменное основание увольнения.",
        "Проверьте, что окончательный расчёт (зарплата, компенсация за неиспользованный отпуск) выплачен полностью.",
        "Если увольнение незаконно — обратитесь в комиссию по трудовым спорам или сразу в суд. Срок обращения ограничен, не откладывайте.",
      ],
    },
  },
  {
    id: "unpaid_salary",
    match: (t) =>
      /(ish haqi|oylik|maosh|зарплат|заработн)/.test(t) &&
      /(bermay|tolamay|tolanmay|kechik|ushlab|bermadi|tolamadi|не плат|не выплач|задерж)/.test(t),
    title: { uz: "Ish haqi to'lanmayapti", ru: "Не выплачивают зарплату" },
    summary: {
      uz:
        "Ish haqi qonunda belgilangan muddatlarda to'lanishi shart. Kechiktirilgani uchun ish beruvchi " +
        "moddiy javobgar bo'ladi.",
      ru:
        "Заработная плата должна выплачиваться в установленные законом сроки. За задержку работодатель " +
        "несёт материальную ответственность.",
    },
    pins: [["MK", "253"], ["MK", "333"], ["MK", "244"], ["MK", "560"]],
    codes: ["MK"],
    terms: "ish haqini toʻlash muddatlari kechiktirganlik uchun javobgarlik",
    steps: {
      uz: [
        "Ish beruvchiga qarzdorlikni to'lash talabi bilan yozma ariza bering va nusxasini saqlang.",
        "Mehnat shartnomasi, hisob-varaqalar va bank ko'chirmalarini dalil sifatida yig'ing.",
        "To'lanmasa — mehnat nizolari komissiyasiga, davlat mehnat inspeksiyasiga yoki sudga murojaat qiling.",
      ],
      ru: [
        "Подайте работодателю письменное требование о выплате задолженности и сохраните копию.",
        "Соберите доказательства: трудовой договор, расчётные листки, банковские выписки.",
        "Если не выплатят — обратитесь в комиссию по трудовым спорам, государственную инспекцию труда или суд.",
      ],
    },
  },
  {
    id: "employment_contract",
    match: (t) =>
      /mehnat shartnoma|ishga (kir|qabul|joylash)|трудов\S* договор|устро\S* на работу/.test(t) &&
      !/bekor|boshat|hayda|увол|расторг/.test(t),
    title: { uz: "Mehnat shartnomasi", ru: "Трудовой договор" },
    summary: {
      uz:
        "Mehnat shartnomasi — xodim va ish beruvchi o'rtasidagi kelishuv. U yozma shaklda tuziladi, " +
        "unda ish joyi, lavozim, ish haqi va boshqa majburiy shartlar ko'rsatiladi.",
      ru:
        "Трудовой договор — соглашение между работником и работодателем. Он заключается в письменной " +
        "форме и содержит место работы, должность, оплату труда и другие обязательные условия.",
    },
    pins: [["MK", "103"], ["MK", "104"], ["MK", "106"], ["MK", "107"]],
    codes: ["MK"],
    terms: "mehnat shartnomasining shakli mazmuni rekvizitlari",
    steps: {
      uz: [
        "Ishni boshlashdan oldin mehnat shartnomasi yozma tuzilishini talab qiling va bir nusxasini oling.",
        "Shartnomada ish joyi, lavozim (mehnat vazifasi), ish haqi, ish vaqti va boshlanish sanasi aniq yozilganini tekshiring.",
        "Qonundagi kafolatlaringizni kamaytiradigan shartlar haqiqiy emas — bunday shart bo'lsa, imzolashdan oldin o'zgartirishni so'rang.",
      ],
      ru: [
        "До начала работы потребуйте заключить трудовой договор в письменной форме и получите свой экземпляр.",
        "Проверьте, что в договоре точно указаны место работы, должность (трудовая функция), оплата, режим работы и дата начала.",
        "Условия, ухудшающие ваши гарантии по закону, недействительны — попросите изменить их до подписания.",
      ],
    },
  },
];
