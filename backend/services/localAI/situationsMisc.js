"use strict";
/**
 * HAYOTIY VAZIYATLAR — TA'LIM, OILA, HARBIY, MEHNAT, SOLIQ (2026-09-28).
 * Tuzilma va qoidalar — situationsFamily.js izohida.
 */

module.exports = [
  {
    id: "teacher_violence",
    match: (t) =>
      /(oqituvchi|ustoz|domla|tarbiyachi|murabbiy|maktabda|bogchada|учител|воспитат)\S*.{0,40}(\bur(di|adi|ib|gan|yapti)|kaltak|haqorat|zoravon|бил|удар|оскорб)/.test(t),
    title: { uz: "Ta'lim muassasasida bolaga nisbatan zo'ravonlik", ru: "Насилие над ребёнком в учебном заведении" },
    summary: {
      uz:
        "Tarbiya va ta'lim berish jarayonida bolaga nisbatan zo'ravonlik qonun bilan taqiqlangan va ma'muriy " +
        "javobgarlikka sabab bo'ladi; tan jarohati yetkazilgan bo'lsa, uning og'irligiga qarab ma'muriy yoki jinoiy javobgarlik qo'llanadi.",
      ru:
        "Насилие над ребёнком в процессе воспитания и обучения запрещено и влечёт административную " +
        "ответственность; при телесных повреждениях — административную или уголовную в зависимости от их тяжести.",
    },
    pins: [["MJK", "47"], ["MJK", "52"], ["JK", "109"]],
    codes: ["MJK", "JK"],
    terms: "",
    steps: {
      uz: [
        "Jarohat bo'lsa, bolani darhol shifokorga olib boring va jarohatni rasmiy qayd ettiring.",
        "Maktab (bog'cha) rahbariyatiga yozma shikoyat bering va javobni yozma so'rang.",
        "Ichki ishlar organiga ariza bering; ta'lim sohasidagi yuqori tashkilotga ham murojaat qilishingiz mumkin.",
        "Guvohlar (boshqa bolalar, ota-onalar) va xabarlarni saqlang.",
      ],
      ru: [
        "При травме сразу отведите ребёнка к врачу и официально зафиксируйте повреждения.",
        "Подайте письменную жалобу руководству школы (сада) и попросите письменный ответ.",
        "Подайте заявление в органы внутренних дел; можно обратиться и в вышестоящий орган образования.",
        "Сохраните сведения о свидетелях и переписку.",
      ],
    },
  },
  {
    id: "polygamy",
    match: (t) => /ikkinchi xotin|kop xotin|ikkita xotin|ikki xotin|многожен|вторая жена/.test(t),
    title: { uz: "Ko'p xotinlilik", ru: "Многожёнство" },
    summary: {
      uz:
        "Umumiy ro'zg'or asosida ikki yoki undan ortiq xotin bilan er-xotin bo'lib yashash — jinoyat. Bundan tashqari, " +
        "boshqa ro'yxatdan o'tgan nikohda turgan shaxs bilan nikoh tuzishga yo'l qo'yilmaydi.",
      ru:
        "Сожительство с двумя или более жёнами при ведении общего хозяйства — преступление. Кроме того, брак с " +
        "лицом, уже состоящим в зарегистрированном браке, не допускается.",
    },
    pins: [["JK", "126"], ["OK", "13"], ["OK", "16"]],
    codes: ["JK", "OK"],
    terms: "",
    steps: {
      uz: [
        "Bunday nikoh (masalan, faqat diniy marosim bilan) davlat tomonidan tan olinmaydi va ikkinchi \"xotin\" hamda bolalarning huquqlarini qonuniy nikoh darajasida himoya qilmaydi.",
        "Bolalarning huquqlari (aliment, meros) otalik belgilangan bo'lsa, nikohdan qat'i nazar saqlanadi.",
      ],
      ru: [
        "Такой «брак» (например, только религиозный обряд) государством не признаётся и не защищает права второй «жены» так, как законный брак.",
        "Права детей (алименты, наследство) сохраняются при установленном отцовстве независимо от брака.",
      ],
    },
  },
  {
    id: "military_evasion",
    match: (t) =>
      /(harbiy|armiya|muqobil) xizmat\S*.{0,30}(qoch|bor(may|mas)|boyin|chetla|bormasa)|armiya\S*.{0,25}(qoch|bormay|bormasa)|уклон\S* от (армии|службы|призыва)/.test(t),
    title: { uz: "Harbiy xizmatdan bo'yin tovlash", ru: "Уклонение от военной службы" },
    summary: {
      uz:
        "Harbiy yoki muqobil xizmatdan bo'yin tovlash ma'muriy javobgarlikka, ma'muriy jazodan keyin yana " +
        "sodir etilsa — jinoiy javobgarlikka sabab bo'ladi. Qonunda nazarda tutilgan asos bo'lsa (sog'liq, oilaviy holat), kechiktirish yoki ozod qilish rasmiy tartibda so'raladi.",
      ru:
        "Уклонение от военной или альтернативной службы влечёт административную, а после административного " +
        "взыскания — уголовную ответственность. При законных основаниях (здоровье, семейное положение) отсрочка или освобождение оформляются официально.",
    },
    pins: [["MJK", "237"], ["JK", "225"]],
    codes: ["MJK", "JK"],
    terms: "",
    steps: {
      uz: [
        "Chaqiruv qog'ozi kelsa, belgilangan vaqtda mudofaa ishlari bo'limiga boring — kelmaslikning o'zi javobgarlikka olib keladi.",
        "Kechiktirish yoki ozod qilish uchun asos bo'lsa, tasdiqlovchi hujjatlarni (tibbiy xulosa, oilaviy holat) oldindan tayyorlang.",
      ],
      ru: [
        "Получив повестку, явитесь в отдел по делам обороны в срок — сама неявка влечёт ответственность.",
        "При основаниях для отсрочки или освобождения заранее подготовьте подтверждающие документы.",
      ],
    },
  },
  {
    id: "maternity_leave",
    match: (t) => /(homilador|tugish|tugruq|dekret)\S*.{0,25}tatil|dekret|декрет|отпуск по беремен/.test(t),
    title: { uz: "Homiladorlik va tug'ish ta'tili", ru: "Отпуск по беременности и родам" },
    summary: {
      uz:
        "Ayolga tug'ruqdan oldin va keyin homiladorlik va tug'ish ta'tili nafaqa bilan beriladi, so'ng bola parvarishi " +
        "ta'tili olish mumkin. Kunlar soni va nafaqa miqdori quyidagi moddada.",
      ru:
        "Женщине предоставляется оплачиваемый отпуск по беременности и родам до и после родов, затем — отпуск по " +
        "уходу за ребёнком. Число дней и размер пособия — в статье ниже.",
    },
    pins: [["MK", "404"], ["MK", "405"], ["MK", "408"]],
    codes: ["MK"],
    terms: "",
    steps: {
      uz: [
        "Tibbiy muassasadan mehnatga qobiliyatsizlik varaqasini oling va ish beruvchiga topshiring.",
        "Ta'til va nafaqa to'lanmasa, ish beruvchiga yozma murojaat qiling, so'ng mehnat inspeksiyasi yoki sudga.",
      ],
      ru: [
        "Получите в медучреждении листок нетрудоспособности и передайте работодателю.",
        "Если отпуск или пособие не предоставляют — письменно обратитесь к работодателю, затем в инспекцию труда или суд.",
      ],
    },
  },
  {
    id: "tax_evasion",
    match: (t) => /soliq\S*.{0,30}(tolamas|tolamay|tolamasa|yashir|boyin)|уклон\S* от (уплаты )?налог|не плат\S* налог/.test(t),
    title: { uz: "Soliq to'lamaslik oqibatlari", ru: "Последствия неуплаты налогов" },
    summary: {
      uz:
        "Soliq yoki yig'imlarni to'lashdan bo'yin tovlash ma'muriy javobgarlikka sabab bo'ladi; ma'muriy jazodan keyin " +
        "yana sodir etilsa (ancha miqdorda), takroran yoki ko'p miqdorda bo'lsa — jinoiy javobgarlik.",
      ru:
        "Уклонение от уплаты налогов влечёт административную ответственность; после административного взыскания " +
        "(в значительном размере), повторно или в крупном размере — уголовную.",
    },
    pins: [["MJK", "174"], ["JK", "184"]],
    codes: ["MJK", "JK", "SK"],
    terms: "",
    steps: {
      uz: [
        "Qarzdorlik bo'lsa, soliq organidan hisob-kitob ko'chirmasini oling va imkon qadar tezroq to'lang.",
        "Soliq organining qaroriga rozi bo'lmasangiz, uni yuqori soliq organiga yoki sudga shikoyat qilishingiz mumkin.",
      ],
      ru: [
        "При задолженности получите выписку в налоговом органе и погасите её как можно скорее.",
        "С решением налогового органа можно не согласиться и обжаловать его в вышестоящий орган или суд.",
      ],
    },
  },
];
