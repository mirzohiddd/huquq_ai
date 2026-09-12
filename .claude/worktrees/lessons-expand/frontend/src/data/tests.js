/**
 * Testlar kontenti — bilimni tekshirish uchun savollar (uz / ru / en).
 *
 * MUHIM: Testlar sahifasi (pages/Tests.jsx) endi bu faylni EMAS, backend
 * /api/tests endpointini o'qiydi (kontent admin panelidan boshqariladi).
 * Bu fayl faqat backend/scripts/seedContent.js uchun bir martalik "seed"
 * manba sifatida saqlanmoqda. Shuning uchun bu faylni o'chirmang.
 *
 * Savollar Darslar bo'limidagi mavzularga mos keladi va umumiy huquqiy
 * prinsiplarga asoslanadi (aniq modda raqamlari ATAYLAB ishlatilmagan —
 * qonun tahriri o'zgarsa test noto'g'ri bo'lib qolmasligi uchun).
 *
 * correct — to'g'ri javob indeksi (0 dan boshlab).
 */
export const TESTS = {
  uz: [
    {
      id: "labor",
      title: "Mehnat huquqi",
      desc: "Mehnat shartnomasi, ta'til va ishdan bo'shatish.",
      questions: [
        {
          q: "Mehnat shartnomasi qanday shaklda tuzilishi kerak?",
          options: ["Og'zaki kelishuv yetarli", "Yozma shaklda", "Faqat guvohlar oldida", "Shakli ahamiyatsiz"],
          correct: 1,
          explain: "Mehnat shartnomasi yozma shaklda tuziladi — bu xodimning huquqlarini himoya qilishning asosiy kafolati.",
        },
        {
          q: "Ish beruvchi xodimni istalgan vaqtda sababsiz ishdan bo'shata oladimi?",
          options: ["Ha, xohlagan vaqtda", "Yo'q, faqat qonunda ko'rsatilgan asoslar bo'yicha", "Faqat yozda", "Faqat sinov muddatida"],
          correct: 1,
          explain: "Ishdan bo'shatish faqat qonunda belgilangan asoslar bo'yicha va buyruq bilan rasmiylashtiriladi.",
        },
        {
          q: "Yillik mehnat ta'tili haqida qaysi javob to'g'ri?",
          options: [
            "Ta'til faqat rahbar ruxsat bersa beriladi",
            "Har bir xodimning haq to'lanadigan ta'til olish huquqi bor",
            "Ta'til faqat 5 yildan keyin beriladi",
            "Ta'tildan voz kechish majburiy",
          ],
          correct: 1,
          explain: "Har bir xodim yillik haq to'lanadigan ta'tilga ega; undan voz kechishga majburlash qonunga zid.",
        },
        {
          q: "Ish haqi kechiktirilsa, xodim birinchi navbatda nima qilishi maqsadga muvofiq?",
          options: [
            "Darhol ishni tashlab ketish",
            "Ish beruvchiga yozma ariza berish va nusxasini saqlash",
            "Hech narsa qilmaslik",
            "Ijtimoiy tarmoqda yozish",
          ],
          correct: 1,
          explain: "Yozma ariza — keyinchalik mehnat inspeksiyasi yoki sudda dalil bo'lib xizmat qiladi.",
        },
        {
          q: "Ishdan bo'shatilganda xodimga qanday hujjatlar berilishi kerak?",
          options: [
            "Hech qanday hujjat shart emas",
            "Buyruq nusxasi va mehnat daftarchasi",
            "Faqat og'zaki xabar",
            "Faqat keyingi oyda",
          ],
          correct: 1,
          explain: "Ish beruvchi bo'shatish buyrug'i nusxasi va mehnat daftarchasini berishi shart.",
        },
      ],
    },
    {
      id: "family",
      title: "Oila huquqi",
      desc: "Nikoh, ajralish, aliment va bolalar huquqlari.",
      questions: [
        {
          q: "Nikoh qachon huquqiy kuchga ega bo'ladi?",
          options: [
            "Diniy marosim o'tkazilganda",
            "FHDYo (ZAGS) da ro'yxatdan o'tkazilganda",
            "Birga yashay boshlaganda",
            "To'y qilinganda",
          ],
          correct: 1,
          explain: "Faqat davlat organida ro'yxatdan o'tkazilgan nikoh huquqiy oqibat keltiradi.",
        },
        {
          q: "Nikoh davomida orttirilgan mol-mulk kimga tegishli?",
          options: [
            "Faqat uni sotib olgan tomonga",
            "Qoida tariqasida er-xotinning umumiy mulki",
            "Faqat erkakka",
            "Faqat ota-onaga",
          ],
          correct: 1,
          explain: "Nikohda orttirilgan mulk umumiy hisoblanadi va ajralishda teng bo'linadi.",
        },
        {
          q: "Nikohga qadar olingan yoki meros tariqasida kelgan mulk qanday hisoblanadi?",
          options: ["Umumiy mulk", "Shaxsiy mulk", "Davlat mulki", "Bolalar mulki"],
          correct: 1,
          explain: "Nikohga qadar tegishli yoki meros/hadya tariqasida olingan mulk shaxsiy bo'lib qoladi.",
        },
        {
          q: "Ajrashgandan keyin bolani ta'minlash majburiyati nima bo'ladi?",
          options: [
            "Bekor bo'ladi",
            "Saqlanib qoladi",
            "Faqat onaga yuklanadi",
            "Bola 10 yoshga to'lguncha amal qiladi",
          ],
          correct: 1,
          explain: "Ajralish voyaga yetmagan bolani ta'minlash majburiyatini bekor qilmaydi.",
        },
        {
          q: "Bola kim bilan qolishini kim hal qiladi?",
          options: [
            "Faqat ota",
            "Sud, bolaning manfaatlaridan kelib chiqib",
            "Qo'shnilar",
            "Mahalla raisi yakka o'zi",
          ],
          correct: 1,
          explain: "Kelishuv bo'lmasa, masalani sud bolaning manfaatlarini hisobga olib hal qiladi.",
        },
      ],
    },
    {
      id: "inheritance",
      title: "Meros huquqi",
      desc: "Vasiyatnoma, merosxo'rlar va muddatlar.",
      questions: [
        {
          q: "Meros qachon ochiladi?",
          options: [
            "Vasiyatnoma yozilgan kuni",
            "Shaxs vafot etgan kundan",
            "Bir yildan keyin",
            "Sud qaror qilganda",
          ],
          correct: 1,
          explain: "Meros shaxs vafot etgan kundan boshlab ochiladi.",
        },
        {
          q: "Merosni qabul qilish uchun qayerga murojaat qilinadi?",
          options: ["Politsiyaga", "Notariusga", "Bankka", "Mahallaga"],
          correct: 1,
          explain: "Merosxo'rlar belgilangan muddat ichida notariusga murojaat qilishlari kerak.",
        },
        {
          q: "Vasiyatnoma bo'lmasa, meros qanday taqsimlanadi?",
          options: [
            "Davlatga o'tadi",
            "Qonun bo'yicha, merosxo'rlar navbati tartibida",
            "Eng katta farzandga",
            "Taqsimlanmaydi",
          ],
          correct: 1,
          explain: "Vasiyatnoma bo'lmaganda meros qonun bo'yicha, navbat tartibida taqsimlanadi.",
        },
        {
          q: "Merosni qabul qilish muddati o'tkazib yuborilsa nima bo'ladi?",
          options: [
            "Hech qachon tiklanmaydi",
            "Uzrli sabab bo'lsa sud orqali tiklanishi mumkin",
            "Avtomatik uzayadi",
            "Notarius o'zi hal qiladi",
          ],
          correct: 1,
          explain: "Muddat faqat sud orqali va uzrli sabab bo'lgandagina tiklanadi.",
        },
        {
          q: "Majburiy ulush nima?",
          options: [
            "Davlatga to'lanadigan soliq",
            "Ayrim shaxslarning vasiyatnomadan qat'i nazar meros olish huquqi",
            "Notarius haqi",
            "Merosdan ixtiyoriy voz kechish",
          ],
          correct: 1,
          explain: "Majburiy ulush voyaga yetmagan yoki mehnatga layoqatsiz merosxo'rlarni himoya qiladi.",
        },
      ],
    },
    {
      id: "consumer",
      title: "Iste'molchi huquqlari",
      desc: "Sifatsiz tovar, qaytarish va onlayn xaridlar.",
      questions: [
        {
          q: "Tovarda nuqson topilsa, iste'molchi nimani talab qila oladi?",
          options: [
            "Hech narsa",
            "Almashtirish, ta'mirlash yoki pulni qaytarish",
            "Faqat kechirim so'rash",
            "Faqat chegirma",
          ],
          correct: 1,
          explain: "Iste'molchi almashtirish, ta'mirlash yoki to'langan pulni qaytarishni talab qilishi mumkin.",
        },
        {
          q: "Sotuvchiga talabni qanday bildirish maqsadga muvofiq?",
          options: [
            "Og'zaki, guvohsiz",
            "Yozma ariza bilan",
            "Telefon orqali, yozib olmasdan",
            "Umuman bildirmaslik",
          ],
          correct: 1,
          explain: "Yozma ariza keyinchalik sud yoki nazorat organida dalil bo'lib xizmat qiladi.",
        },
        {
          q: "Onlayn xaridda iste'molchi huquqlari amal qiladimi?",
          options: [
            "Yo'q, umuman amal qilmaydi",
            "Ha, amal qiladi",
            "Faqat xorijiy do'konlarda",
            "Faqat 100 000 so'mdan qimmat tovarda",
          ],
          correct: 1,
          explain: "Internet orqali xarid qilinganda ham iste'molchi huquqlari to'liq amal qiladi.",
        },
        {
          q: "Xaridni tasdiqlash uchun nimani saqlash muhim?",
          options: [
            "Hech narsa",
            "Chek yoki to'lov tasdig'i",
            "Faqat reklama varaqasi",
            "Sotuvchining ismi",
          ],
          correct: 1,
          explain: "Chek yoki to'lov tasdig'i xarid faktini isbotlovchi asosiy hujjatdir.",
        },
        {
          q: "Sotuvchi iste'molchi huquqlarini cheklovchi shart qo'ya oladimi?",
          options: [
            "Ha, xohlagan shartni",
            "Yo'q, bunday shartlar qonunga zid",
            "Faqat bayramlarda",
            "Faqat yozma ravishda",
          ],
          correct: 1,
          explain: "Iste'molchi huquqlarini cheklovchi bir tomonlama shartlar qonunga ziddir.",
        },
      ],
    },
  ],

  ru: [
    {
      id: "labor",
      title: "Трудовое право",
      desc: "Трудовой договор, отпуск и увольнение.",
      questions: [
        {
          q: "В какой форме должен заключаться трудовой договор?",
          options: ["Достаточно устной договорённости", "В письменной форме", "Только при свидетелях", "Форма не важна"],
          correct: 1,
          explain: "Трудовой договор заключается письменно — это основная гарантия защиты прав работника.",
        },
        {
          q: "Может ли работодатель уволить работника в любой момент без основания?",
          options: ["Да, когда захочет", "Нет, только по основаниям, предусмотренным законом", "Только летом", "Только на испытательном сроке"],
          correct: 1,
          explain: "Увольнение возможно только по основаниям, установленным законом, и оформляется приказом.",
        },
        {
          q: "Какое утверждение о ежегодном отпуске верно?",
          options: [
            "Отпуск даётся только по желанию руководителя",
            "Каждый работник имеет право на оплачиваемый отпуск",
            "Отпуск даётся только через 5 лет",
            "Отказ от отпуска обязателен",
          ],
          correct: 1,
          explain: "Каждый работник имеет право на ежегодный оплачиваемый отпуск; принуждение к отказу незаконно.",
        },
        {
          q: "Что целесообразно сделать в первую очередь при задержке зарплаты?",
          options: [
            "Сразу бросить работу",
            "Подать работодателю письменное заявление и сохранить копию",
            "Ничего не делать",
            "Написать в соцсетях",
          ],
          correct: 1,
          explain: "Письменное заявление послужит доказательством в трудовой инспекции или суде.",
        },
        {
          q: "Какие документы должны выдать работнику при увольнении?",
          options: [
            "Никаких документов не нужно",
            "Копию приказа и трудовую книжку",
            "Только устное уведомление",
            "Только в следующем месяце",
          ],
          correct: 1,
          explain: "Работодатель обязан выдать копию приказа об увольнении и трудовую книжку.",
        },
      ],
    },
    {
      id: "family",
      title: "Семейное право",
      desc: "Брак, развод, алименты и права детей.",
      questions: [
        {
          q: "Когда брак приобретает юридическую силу?",
          options: [
            "При религиозном обряде",
            "При регистрации в органах ЗАГС",
            "При начале совместного проживания",
            "После свадьбы",
          ],
          correct: 1,
          explain: "Правовые последствия влечёт только брак, зарегистрированный в государственном органе.",
        },
        {
          q: "Кому принадлежит имущество, нажитое в браке?",
          options: [
            "Только тому, кто его купил",
            "Как правило, это общее имущество супругов",
            "Только мужчине",
            "Только родителям",
          ],
          correct: 1,
          explain: "Нажитое в браке имущество считается общим и делится поровну при разводе.",
        },
        {
          q: "Как рассматривается имущество, полученное до брака или по наследству?",
          options: ["Общее имущество", "Личное имущество", "Государственное", "Имущество детей"],
          correct: 1,
          explain: "Имущество до брака либо полученное в наследство или в дар остаётся личным.",
        },
        {
          q: "Что происходит с обязанностью содержать ребёнка после развода?",
          options: [
            "Прекращается",
            "Сохраняется",
            "Возлагается только на мать",
            "Действует до 10 лет ребёнка",
          ],
          correct: 1,
          explain: "Развод не отменяет обязанность содержать несовершеннолетнего ребёнка.",
        },
        {
          q: "Кто решает, с кем останется ребёнок?",
          options: [
            "Только отец",
            "Суд, исходя из интересов ребёнка",
            "Соседи",
            "Председатель махалли единолично",
          ],
          correct: 1,
          explain: "При отсутствии соглашения вопрос решает суд, исходя из интересов ребёнка.",
        },
      ],
    },
    {
      id: "inheritance",
      title: "Наследственное право",
      desc: "Завещание, наследники и сроки.",
      questions: [
        {
          q: "Когда открывается наследство?",
          options: [
            "В день написания завещания",
            "Со дня смерти человека",
            "Через год",
            "По решению суда",
          ],
          correct: 1,
          explain: "Наследство открывается со дня смерти человека.",
        },
        {
          q: "К кому нужно обратиться для принятия наследства?",
          options: ["В полицию", "К нотариусу", "В банк", "В махаллю"],
          correct: 1,
          explain: "Наследники должны обратиться к нотариусу в установленный срок.",
        },
        {
          q: "Как распределяется наследство при отсутствии завещания?",
          options: [
            "Переходит государству",
            "По закону, в порядке очерёдности наследников",
            "Старшему ребёнку",
            "Не распределяется",
          ],
          correct: 1,
          explain: "Без завещания наследство переходит по закону в порядке очерёдности.",
        },
        {
          q: "Что если срок принятия наследства пропущен?",
          options: [
            "Восстановить нельзя",
            "Можно восстановить через суд при уважительной причине",
            "Продлевается автоматически",
            "Решает сам нотариус",
          ],
          correct: 1,
          explain: "Срок восстанавливается только через суд и при уважительной причине.",
        },
        {
          q: "Что такое обязательная доля?",
          options: [
            "Налог государству",
            "Право отдельных лиц на наследство независимо от завещания",
            "Плата нотариусу",
            "Добровольный отказ от наследства",
          ],
          correct: 1,
          explain: "Обязательная доля защищает несовершеннолетних и нетрудоспособных наследников.",
        },
      ],
    },
    {
      id: "consumer",
      title: "Права потребителя",
      desc: "Некачественный товар, возврат и онлайн-покупки.",
      questions: [
        {
          q: "Что может потребовать потребитель при обнаружении недостатка товара?",
          options: [
            "Ничего",
            "Замену, ремонт или возврат денег",
            "Только извинения",
            "Только скидку",
          ],
          correct: 1,
          explain: "Потребитель вправе требовать замены, ремонта либо возврата уплаченных денег.",
        },
        {
          q: "Как целесообразно предъявить требование продавцу?",
          options: [
            "Устно, без свидетелей",
            "Письменным заявлением",
            "По телефону без фиксации",
            "Вообще не предъявлять",
          ],
          correct: 1,
          explain: "Письменное заявление послужит доказательством в суде или надзорном органе.",
        },
        {
          q: "Действуют ли права потребителя при онлайн-покупках?",
          options: [
            "Нет, не действуют",
            "Да, действуют",
            "Только в зарубежных магазинах",
            "Только при покупке дороже 100 000 сум",
          ],
          correct: 1,
          explain: "При покупках через интернет права потребителя действуют в полной мере.",
        },
        {
          q: "Что важно сохранить для подтверждения покупки?",
          options: [
            "Ничего",
            "Чек или подтверждение оплаты",
            "Только рекламный буклет",
            "Имя продавца",
          ],
          correct: 1,
          explain: "Чек или подтверждение оплаты — основной документ, доказывающий факт покупки.",
        },
        {
          q: "Может ли продавец установить условия, ограничивающие права потребителя?",
          options: [
            "Да, любые",
            "Нет, такие условия противоречат закону",
            "Только по праздникам",
            "Только письменно",
          ],
          correct: 1,
          explain: "Односторонние условия, ограничивающие права потребителя, противоречат закону.",
        },
      ],
    },
  ],

  en: [
    {
      id: "labor",
      title: "Employment law",
      desc: "Employment contract, leave and dismissal.",
      questions: [
        {
          q: "In what form must an employment contract be concluded?",
          options: ["A verbal agreement is enough", "In writing", "Only before witnesses", "The form does not matter"],
          correct: 1,
          explain: "An employment contract is concluded in writing — the core safeguard of an employee's rights.",
        },
        {
          q: "Can an employer dismiss an employee at any time without grounds?",
          options: ["Yes, whenever they want", "No, only on grounds provided by law", "Only in summer", "Only during probation"],
          correct: 1,
          explain: "Dismissal is possible only on statutory grounds and must be formalised by an order.",
        },
        {
          q: "Which statement about annual leave is correct?",
          options: [
            "Leave is granted only if the manager wishes",
            "Every employee is entitled to paid annual leave",
            "Leave is granted only after 5 years",
            "Giving up leave is mandatory",
          ],
          correct: 1,
          explain: "Every employee is entitled to paid annual leave; pressuring them to give it up is unlawful.",
        },
        {
          q: "What is the sensible first step if wages are delayed?",
          options: [
            "Quit immediately",
            "Submit a written request to the employer and keep a copy",
            "Do nothing",
            "Post about it on social media",
          ],
          correct: 1,
          explain: "A written request serves as evidence before the labour inspectorate or the court.",
        },
        {
          q: "Which documents must be given to an employee on dismissal?",
          options: [
            "No documents are needed",
            "A copy of the order and the employment record book",
            "Only a verbal notice",
            "Only the following month",
          ],
          correct: 1,
          explain: "The employer must hand over a copy of the dismissal order and the employment record book.",
        },
      ],
    },
    {
      id: "family",
      title: "Family law",
      desc: "Marriage, divorce, child support and children's rights.",
      questions: [
        {
          q: "When does a marriage acquire legal force?",
          options: [
            "At the religious ceremony",
            "When registered with the civil registry office",
            "When the couple starts living together",
            "After the wedding party",
          ],
          correct: 1,
          explain: "Only a marriage registered with the state authority produces legal consequences.",
        },
        {
          q: "Who owns property acquired during the marriage?",
          options: [
            "Only the person who bought it",
            "As a rule, it is the joint property of the spouses",
            "Only the husband",
            "Only the parents",
          ],
          correct: 1,
          explain: "Property acquired during marriage is joint and is divided equally on divorce.",
        },
        {
          q: "How is property owned before marriage or inherited treated?",
          options: ["Joint property", "Personal property", "State property", "The children's property"],
          correct: 1,
          explain: "Property owned before the marriage or received as inheritance or a gift remains personal.",
        },
        {
          q: "What happens to the duty to support a child after divorce?",
          options: [
            "It ends",
            "It remains",
            "It falls on the mother only",
            "It applies until the child turns 10",
          ],
          correct: 1,
          explain: "Divorce does not cancel the duty to support a minor child.",
        },
        {
          q: "Who decides which parent the child lives with?",
          options: [
            "The father only",
            "The court, based on the child's best interests",
            "The neighbours",
            "The neighbourhood head alone",
          ],
          correct: 1,
          explain: "Absent an agreement, the court decides based on the child's best interests.",
        },
      ],
    },
    {
      id: "inheritance",
      title: "Inheritance law",
      desc: "Wills, heirs and deadlines.",
      questions: [
        {
          q: "When does an inheritance open?",
          options: [
            "On the day the will is written",
            "On the day the person dies",
            "After one year",
            "When the court decides",
          ],
          correct: 1,
          explain: "An inheritance opens on the day of the person's death.",
        },
        {
          q: "Who should heirs approach to accept an inheritance?",
          options: ["The police", "A notary", "A bank", "The neighbourhood office"],
          correct: 1,
          explain: "Heirs must apply to a notary within the set deadline.",
        },
        {
          q: "How is an estate distributed if there is no will?",
          options: [
            "It passes to the state",
            "By law, in the order of priority of heirs",
            "To the eldest child",
            "It is not distributed",
          ],
          correct: 1,
          explain: "Without a will the estate passes by law in the order of priority.",
        },
        {
          q: "What if the deadline to accept an inheritance is missed?",
          options: [
            "It can never be restored",
            "It can be restored through the court for a valid reason",
            "It extends automatically",
            "The notary decides alone",
          ],
          correct: 1,
          explain: "The deadline is restored only through the court and only for a valid reason.",
        },
        {
          q: "What is a compulsory share?",
          options: [
            "A tax paid to the state",
            "Certain people's right to inherit regardless of the will",
            "The notary's fee",
            "A voluntary waiver of inheritance",
          ],
          correct: 1,
          explain: "The compulsory share protects minor and incapacitated heirs.",
        },
      ],
    },
    {
      id: "consumer",
      title: "Consumer rights",
      desc: "Defective goods, refunds and online purchases.",
      questions: [
        {
          q: "What can a consumer demand when a defect is found?",
          options: [
            "Nothing",
            "Replacement, repair or a refund",
            "Only an apology",
            "Only a discount",
          ],
          correct: 1,
          explain: "A consumer may demand replacement, repair or a refund of the amount paid.",
        },
        {
          q: "How should a claim be submitted to the seller?",
          options: [
            "Verbally, without witnesses",
            "As a written request",
            "By phone with no record",
            "Not at all",
          ],
          correct: 1,
          explain: "A written request serves as evidence in court or before a supervisory authority.",
        },
        {
          q: "Do consumer rights apply to online purchases?",
          options: [
            "No, they do not apply",
            "Yes, they do",
            "Only in foreign shops",
            "Only above 100,000 UZS",
          ],
          correct: 1,
          explain: "Consumer rights apply in full to purchases made online.",
        },
        {
          q: "What is important to keep as proof of purchase?",
          options: [
            "Nothing",
            "The receipt or payment confirmation",
            "Only the advertising leaflet",
            "The seller's name",
          ],
          correct: 1,
          explain: "A receipt or payment confirmation is the key document proving the purchase.",
        },
        {
          q: "Can a seller impose terms that limit consumer rights?",
          options: [
            "Yes, any terms",
            "No, such terms are contrary to law",
            "Only on holidays",
            "Only in writing",
          ],
          correct: 1,
          explain: "Unilateral terms restricting consumer rights are contrary to law.",
        },
      ],
    },
  ],
};
