"use strict";
/**
 * HAYOTIY VAZIYATLAR — MEHNAT, QARZ, ISTE'MOLCHI, MEROS.
 * Tuzilma va qoidalar — situationsFamily.js izohida.
 */

module.exports = [
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
  {
    id: "debt",
    match: (t) =>
      /(qarz|долг|займ)/.test(t) && /(qaytarmay|bermay|tolamay|qaytarmadi|bermadi|qochib|не возвращ|не отда)/.test(t),
    title: { uz: "Qarz qaytarilmayapti", ru: "Не возвращают долг" },
    summary: {
      uz:
        "Qarz oluvchi qarzni shartnomada kelishilgan muddatda qaytarishi shart. Muddat kelishilmagan bo'lsa, " +
        "qarz beruvchi talab qilganidan keyin qonunda belgilangan muddatda qaytariladi; kechiktirilsa foiz to'lanadi.",
      ru:
        "Заёмщик обязан вернуть долг в срок, указанный в договоре. Если срок не оговорён, долг возвращается " +
        "в установленный законом срок после требования займодавца; за просрочку начисляются проценты.",
    },
    pins: [["FK2", "735"], ["FK2", "736"], ["FK2", "734"]],
    codes: ["FK2", "FK", "FPK"],
    terms: "qarz shartnomasi qarz summasini qaytarish majburiyati",
    steps: {
      uz: [
        "Qarz oluvchiga qarzni qaytarish haqida yozma talab yuboring (sanasi ko'rsatilgan holda) — muddat shu talabdan hisoblanishi mumkin.",
        "Dalillarni yig'ing: tilxat, qarz shartnomasi, bank o'tkazmasi, yozishmalar.",
        "Qaytarilmasa — qarzni undirish to'g'risida sudga da'vo arizasi bering; kechiktirilgan davr uchun foizlarni ham talab qilishingiz mumkin.",
      ],
      ru: [
        "Направьте заёмщику письменное требование о возврате долга (с датой) — срок может исчисляться от этого требования.",
        "Соберите доказательства: расписка, договор займа, банковский перевод, переписка.",
        "Если долг не вернут — подайте в суд иск о взыскании; можно требовать и проценты за просрочку.",
      ],
    },
  },
  {
    id: "defective_goods",
    match: (t) =>
      /(nuqsonli|sifatsiz|yaroqsiz|брак|некачеств)/.test(t) ||
      (/(tovar|mahsulot|telefon|buyum|kiyim|texnika|товар|телефон)/.test(t) &&
        /(buzuq|buzil|ishlamay|singan|nuqson|qaytar|almashtir|вернуть|обменя|сломал)/.test(t)),
    title: { uz: "Sifatsiz (nuqsonli) tovar", ru: "Некачественный товар" },
    summary: {
      uz:
        "Nuqsonli tovar sotilganda iste'molchi uni almashtirishni, bepul tuzatishni, narxni kamaytirishni " +
        "yoki pulini qaytarishni talab qilish huquqiga ega.",
      ru:
        "При продаже товара с недостатками потребитель вправе потребовать замены, бесплатного устранения " +
        "недостатков, уменьшения цены или возврата денег.",
    },
    pins: [["IHQ", "13"], ["IHQ", "14"], ["IHQ", "18"]],
    codes: ["IHQ", "FK2"],
    terms: "isteʼmolchi nuqsonli tovar almashtirib berish",
    steps: {
      uz: [
        "Sotuvchiga chek (yoki xarid dalili) va tovar bilan murojaat qilib, talabingizni yozma bering: almashtirish, tuzatish yoki pulni qaytarish.",
        "Sotuvchi rad etsa, rad javobini yozma so'rang.",
        "Keyin iste'molchilar huquqlarini himoya qilish organiga yoki sudga murojaat qiling.",
      ],
      ru: [
        "Обратитесь к продавцу с чеком (или иным доказательством покупки) и товаром, изложите требование письменно: замена, ремонт или возврат денег.",
        "Если продавец отказывает, попросите письменный отказ.",
        "Затем обратитесь в орган по защите прав потребителей или в суд.",
      ],
    },
  },
  {
    id: "inheritance",
    match: (t) => /meros|vasiyat|наслед|завещ/.test(t),
    title: { uz: "Meros", ru: "Наследство" },
    summary: {
      uz:
        "Meros vasiyatnoma yoki qonun bo'yicha o'tadi. Vasiyatnoma bo'lmasa, merosxo'rlar qonunda " +
        "belgilangan navbat bilan chaqiriladi; ayrim yaqinlar majburiy ulush olish huquqiga ega.",
      ru:
        "Наследство переходит по завещанию или по закону. Если завещания нет, наследники призываются в " +
        "установленной законом очерёдности; некоторые близкие имеют право на обязательную долю.",
    },
    pins: [["FK2", "1112"], ["FK2", "1135"], ["FK2", "1142"]],
    codes: ["FK2"],
    terms: "meros vorislik merosni qabul qilish navbat",
    steps: {
      uz: [
        "Meros ochilgan joydagi notariusga merosni qabul qilish to'g'risida ariza bering — buning muddati cheklangan.",
        "Qarindoshlikni tasdiqlovchi hujjatlar va vafot haqidagi guvohnomani tayyorlang.",
        "Merosxo'rlar o'rtasida nizo bo'lsa, sudga murojaat qiling.",
      ],
      ru: [
        "Подайте нотариусу по месту открытия наследства заявление о принятии наследства — срок ограничен.",
        "Подготовьте документы о родстве и свидетельство о смерти.",
        "При споре между наследниками обратитесь в суд.",
      ],
    },
  },
];
