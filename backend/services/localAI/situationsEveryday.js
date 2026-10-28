"use strict";
/**
 * HAYOTIY VAZIYATLAR — TA'TIL BERILMAYAPTI, KREDITNI TO'LAY OLMAYAPMAN (2026-10-28).
 * Tuzilma va qoidalar — situationsFamily.js izohida.
 *
 * ⚠️ Nega qo'shildi: "Ish beruvchim ta'tilga chiqarmayapti" → "Ish haqi
 * saqlanmaydigan ta'til" darsi (savolga aloqasiz); "kredit oldim, to'lay
 * olmayapman" → kredit tushunchasi haqidagi umumiy dars (odam nima qilishini
 * bilmay qolardi). Pin'lar bazadan raqami VA sarlavhasi bo'yicha tekshirilgan.
 */

module.exports = [
  {
    id: "leave_denied",
    match: (t) =>
      /tatil\S*.{0,30}(chiqarmay|chiqarmadi|bermay|bermadi|ruxsat bermay|qoymay|javob bermay)|(chiqarmay|bermay)\S*.{0,15}tatil|отпуск\S*.{0,25}(не да|не отпуска|не предоставля)|не (дают|отпускают|предоставляют) (в )?отпуск/.test(t),
    title: { uz: "Ish beruvchi ta'til bermayapti", ru: "Работодатель не даёт отпуск" },
    summary: {
      uz:
        "Har yilgi mehnat ta'tili — barcha xodimlarning huquqi: bu davrda ish o'rni va o'rtacha ish haqi saqlanadi. " +
        "Ish beruvchi qonunda kafolatlangan ta'tilni berishi va ta'tillar berish tartibiga rioya qilishi SHART. " +
        "Ta'til vaqti ta'tillar jadvali bilan belgilanadi va xodim bu haqda oldindan xabardor qilinadi; ayrim " +
        "toifadagi xodimlarga esa ta'til ularning xohishiga ko'ra qulay vaqtda beriladi.",
      ru:
        "Ежегодный трудовой отпуск — право каждого работника: на это время сохраняются место работы и средний " +
        "заработок. Работодатель ОБЯЗАН предоставлять гарантированный законом отпуск и соблюдать порядок его " +
        "предоставления. Время отпуска определяется графиком отпусков, о нём работника уведомляют заранее; " +
        "отдельным категориям работников отпуск предоставляется в удобное для них время.",
    },
    pins: [["MK", "216"], ["MK", "214"], ["MK", "228"], ["MK", "217"]],
    codes: ["MK"],
    terms: "har yilgi mehnat taʼtili taʼtillar jadvali",
    steps: {
      uz: [
        "Ta'tillar jadvalida sizga qaysi oy belgilanganini so'rang — jadval ish beruvchi uchun ham majburiy.",
        "Ta'til haqida yozma ariza bering (sanasi bilan) va uning nusxasiga qabul qilinganini belgilatib oling.",
        "Rad etilsa, sababini yozma so'rang. Ta'til umuman berilmasa yoki pulga \"almashtirilmoqchi\" bo'lsa — mehnat nizolari komissiyasiga, davlat mehnat inspeksiyasiga yoki sudga murojaat qiling.",
        "Ishdan bo'shayotgan bo'lsangiz — foydalanilmagan ta'til uchun kompensatsiya hisob-kitobda bo'lishini tekshiring.",
      ],
      ru: [
        "Узнайте, на какой месяц вам назначен отпуск по графику — график обязателен и для работодателя.",
        "Подайте письменное заявление на отпуск (с датой) и получите отметку о его принятии на своей копии.",
        "При отказе попросите письменное обоснование. Если отпуск не дают вовсе или хотят «заменить» деньгами — обращайтесь в комиссию по трудовым спорам, государственную инспекцию труда или в суд.",
        "Если вы увольняетесь — проверьте, что в расчёт включена компенсация за неиспользованный отпуск.",
      ],
    },
  },
  {
    id: "loan_cant_pay",
    match: (t) =>
      /(kredit|mikroqarz|ipoteka|nasiya|кредит|ипотек|займ)\S*.{0,50}(tolay olmay|tololmay|tolay olmas|tolashga (pulim|imkon)|tolay olmadim|kechiktir|не могу (платить|выплачива|погаси)|нечем платить|просроч)/.test(t) ||
      /(не могу (платить|выплачива|погаси)|нечем (платить|погаси)).{0,30}(кредит|ипотек|займ)/.test(t),
    title: { uz: "Kreditni to'lay olmayapsiz", ru: "Не можете платить по кредиту" },
    summary: {
      uz:
        "Kredit shartnomasi bo'yicha olingan summa va foizlar qaytarilishi shart. To'lov kechiktirilsa, shartnomadagi " +
        "foizlardan tashqari kechiktirilgan davr uchun qo'shimcha foiz hisoblanadi, bo'lib to'lashda esa bank qolgan " +
        "butun summani muddatidan oldin talab qilishi mumkin. Shu sabab to'lay olmayotganingizni yashirmasdan, " +
        "bank bilan erta muzokara qilish eng foydali yo'l.",
      ru:
        "По кредитному договору полученная сумма и проценты должны быть возвращены. При просрочке, помимо " +
        "договорных процентов, начисляются проценты за просрочку, а при рассрочке банк вправе потребовать досрочно " +
        "всю оставшуюся сумму. Поэтому выгоднее всего не скрываться, а как можно раньше договариваться с банком.",
    },
    pins: [["FK2", "744"], ["FK2", "736"], ["FK2", "734"]],
    codes: ["FK2", "FK"],
    terms: "kredit shartnomasi qarz summasini qaytarish muddatini buzish oqibatlari",
    steps: {
      uz: [
        "Muddat o'tishidan OLDIN bankka yozma ariza bering: daromadingiz kamayganini (ishdan bo'shash, kasallik va h.k.) hujjat bilan ko'rsatib, to'lov muddatini uzaytirish yoki jadvalni qayta tuzish (restrukturizatsiya) ni so'rang.",
        "Imkon qadar to'lovni butunlay to'xtatmang — qisman to'lov ham kechiktirish uchun hisoblanadigan foizni kamaytiradi.",
        "Shartnomangiz va to'lov jadvalini qayta o'qing: kechiktirish uchun qanday foiz va jarima yozilganini, sug'urta bor-yo'qligini tekshiring.",
        "Qarz faqat qonuniy tartibda — sud yoki vakolatli organ qarori asosida undiriladi. Tahdid, haqorat yoki yaqinlaringizga bosim o'tkazilsa — dalillarni saqlab, ichki ishlar organiga murojaat qiling.",
      ],
      ru: [
        "ДО наступления просрочки подайте в банк письменное заявление: подтвердите документами снижение дохода (увольнение, болезнь и т.д.) и попросите отсрочку или пересмотр графика (реструктуризацию).",
        "По возможности не прекращайте платить полностью — даже частичный платёж уменьшает проценты за просрочку.",
        "Перечитайте договор и график: какие проценты и штрафы за просрочку предусмотрены, есть ли страховка.",
        "Долг взыскивается только в законном порядке — по решению суда или уполномоченного органа. При угрозах, оскорблениях или давлении на близких сохраните доказательства и обратитесь в органы внутренних дел.",
      ],
    },
  },
];
