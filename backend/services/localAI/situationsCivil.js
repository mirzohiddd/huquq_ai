"use strict";
/**
 * HAYOTIY VAZIYATLAR — QARZ, ISTE'MOLCHI, MEROS.
 * Tuzilma va qoidalar — situationsFamily.js izohida.
 */

module.exports = [
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
