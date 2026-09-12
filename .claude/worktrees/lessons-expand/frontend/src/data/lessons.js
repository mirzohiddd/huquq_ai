/**
 * Darslar kontenti — mavzular bo'yicha huquq asoslari (uz / ru / en).
 *
 * MUHIM: Darslar sahifasi (pages/Lessons.jsx) endi bu faylni EMAS,
 * backend /api/lessons endpointini o'qiydi (kontent admin panelidan
 * boshqariladi). Bu fayl faqat backend/scripts/seedContent.js uchun
 * bir martalik "seed" manba sifatida saqlanmoqda — birinchi ishga
 * tushirilganda uz massividagi darslar bazaga ko'chiriladi. Shuning
 * uchun bu faylni o'chirmang.
 *
 * MUHIM: bu yerda ATAYLAB aniq modda raqamlari yozilmagan. Qonunlar
 * o'zgarib turadi va noto'g'ri raqam foydalanuvchini chalg'itadi —
 * shuning uchun har dars oxirida "Qonunlar kutubxonasi"dagi tegishli
 * kodeksga havola beriladi (u yerdagi matn lex.uz'dan avtomatik
 * yangilanadi va har doim dolzarb bo'ladi).
 *
 * lawCode — Qonunlar kutubxonasidagi kodeks kodi (config/laws.js bilan bir xil).
 */
export const LESSONS = {
  uz: [
    {
      id: "labor",
      lawCode: "MK",
      title: "Mehnat huquqi asoslari",
      desc: "Mehnat shartnomasi, ish vaqti, ta'til va ishdan bo'shatish qoidalari.",
      sections: [
        {
          heading: "Mehnat shartnomasi",
          text: "Mehnat shartnomasi — xodim va ish beruvchi o'rtasidagi asosiy hujjat. U yozma shaklda tuziladi va unda lavozim, ish haqi miqdori, ish vaqti va tomonlarning majburiyatlari aniq ko'rsatilishi shart. Shartnoma imzolanmasdan ishga kirishish xodimni huquqiy himoyadan mahrum qiladi — nizo chiqqanda o'z huquqingizni isbotlash qiyinlashadi.",
        },
        {
          heading: "Ish vaqti va dam olish",
          text: "Qonunchilikda haftalik ish vaqtining eng ko'p miqdori belgilangan, undan ortiq ishlash qo'shimcha haq to'lanishi bilan amalga oshiriladi. Har bir xodim yillik haq to'lanadigan mehnat ta'tiliga ega. Ta'til huquqidan voz kechishga majburlash qonunga ziddir.",
        },
        {
          heading: "Ishdan bo'shatish",
          text: "Ish beruvchi xodimni faqat qonunda ko'rsatilgan asoslar bo'yicha ishdan bo'shatishi mumkin va buni buyruq bilan rasmiylashtirishi shart. Noqonuniy bo'shatilgan deb hisoblasangiz, mehnat inspeksiyasiga yoki sudga murojaat qilish huquqingiz bor. Barcha hujjatlar (buyruq nusxasi, mehnat daftarchasi) sizga berilishi kerak.",
        },
      ],
    },
    {
      id: "family",
      lawCode: "OK",
      title: "Oila huquqi",
      desc: "Nikoh, ajralish, aliment va bolalar huquqlari.",
      sections: [
        {
          heading: "Nikoh va uning bekor qilinishi",
          text: "Rasmiy nikoh faqat FHDYo (ZAGS) organlarida ro'yxatdan o'tkazilgan bo'lsa huquqiy kuchga ega. Faqat diniy marosim (nikoh o'qitish) huquqiy oqibat keltirmaydi — bu holatda mol-mulk va aliment masalalarida himoya cheklangan bo'ladi.",
        },
        {
          heading: "Er-xotinning umumiy mulki",
          text: "Nikoh davomida orttirilgan mol-mulk, qoida tariqasida, er-xotinning umumiy mulki hisoblanadi va ajralishda teng bo'linadi. Nikohga qadar tegishli bo'lgan yoki meros/hadya tariqasida olingan mulk esa shaxsiy mulk bo'lib qoladi.",
        },
        {
          heading: "Bolalar va aliment",
          text: "Ota-ona ajrashgan taqdirda ham voyaga yetmagan bolani ta'minlash majburiyati saqlanadi. Bola kim bilan qolishini sud bolaning manfaatlaridan kelib chiqib hal qiladi. Aliment miqdori bolalar soniga qarab belgilanadi yoki tomonlar kelishuvi bilan aniqlanadi.",
        },
      ],
    },
    {
      id: "inheritance",
      lawCode: "FK",
      title: "Meros huquqi",
      desc: "Vasiyatnoma, merosxo'rlar navbati va merosni qabul qilish muddati.",
      sections: [
        {
          heading: "Meros ochilishi",
          text: "Meros shaxs vafot etgan kundan boshlab ochiladi. Merosxo'rlar merosni qabul qilish uchun belgilangan muddat ichida notariusga murojaat qilishlari kerak. Muddat o'tkazib yuborilsa, uni tiklash faqat sud orqali va uzrli sabab bo'lgandagina mumkin.",
        },
        {
          heading: "Vasiyatnoma bo'yicha va qonun bo'yicha meros",
          text: "Agar vasiyatnoma bo'lsa, meros unga muvofiq taqsimlanadi. Vasiyatnoma bo'lmasa — qonun bo'yicha, merosxo'rlar navbati tartibida. Birinchi navbatdagi merosxo'rlar odatda farzandlar, turmush o'rtog'i va ota-onadir.",
        },
        {
          heading: "Majburiy ulush",
          text: "Vasiyatnoma bo'lgan taqdirda ham ayrim shaxslar (masalan voyaga yetmagan yoki mehnatga layoqatsiz farzandlar) merosdan majburiy ulush olish huquqiga ega. Bu qoida ularni vasiyatnoma orqali butunlay meros'dan mahrum qilishning oldini oladi.",
        },
      ],
    },
    {
      id: "land",
      lawCode: "YK",
      title: "Yer va ko'chmas mulk",
      desc: "Yer uchastkasiga bo'lgan huquqlar, ro'yxatdan o'tkazish va nizolar.",
      sections: [
        {
          heading: "Yerga bo'lgan huquq turlari",
          text: "O'zbekistonda yer davlat mulki hisoblanadi, fuqarolarga esa uni egallash va foydalanish huquqlari beriladi. Yer uchastkasiga bo'lgan huquq tegishli qaror va hujjatlar bilan tasdiqlanadi — ularsiz uchastkadan foydalanish huquqiy asossiz bo'ladi.",
        },
        {
          heading: "Davlat ro'yxatidan o'tkazish",
          text: "Ko'chmas mulkka bo'lgan huquqlar davlat reyestrida ro'yxatdan o'tkazilishi shart. Ro'yxatdan o'tkazilmagan bitim uchinchi shaxslarga nisbatan kuchga ega bo'lmasligi mumkin — shuning uchun uy yoki yer sotib olishda avval hujjatlarni tekshiring.",
        },
        {
          heading: "Chegara nizolari",
          text: "Qo'shni uchastka egasi chegarani buzgan deb hisoblasangiz, avval kadastr hujjatlari bilan chegarani aniqlashtiring. Kelishuvga erishilmasa, masala sud tartibida hal qilinadi. O'zboshimchalik bilan egallangan yerga nisbatan mulk huquqi yuzaga kelmaydi.",
        },
      ],
    },
    {
      id: "consumer",
      lawCode: "IHQ",
      title: "Iste'molchi huquqlari",
      desc: "Sifatsiz tovar, qaytarish, kafolat va onlayn xaridlar.",
      sections: [
        {
          heading: "Asosiy huquqlaringiz",
          text: "Iste'molchi tovar yoki xizmat haqida to'liq va aniq ma'lumot olish, sifatli tovar sotib olish va zarar qoplanishini talab qilish huquqiga ega. Sotuvchi bu huquqlarni cheklovchi shartlarni bir tomonlama belgilay olmaydi.",
        },
        {
          heading: "Sifatsiz tovar",
          text: "Tovarda nuqson aniqlansa, iste'molchi uni almashtirish, ta'mirlash yoki to'langan pulni qaytarishni talab qilishi mumkin. Talab yozma ariza shaklida sotuvchiga taqdim etilgani ma'qul — bu keyinchalik dalil bo'lib xizmat qiladi. Chek yoki to'lov tasdig'ini saqlab qo'ying.",
        },
        {
          heading: "Onlayn xaridlar",
          text: "Internet orqali xarid qilganda ham iste'molchi huquqlari amal qiladi. Buyurtma yetkazilmasa yoki tavsifga mos kelmasa, pulni qaytarishni talab qilish huquqingiz bor. Yozishmalar, buyurtma raqami va to'lov tasdig'ini saqlang.",
        },
      ],
    },
    {
      id: "criminal",
      lawCode: "JK",
      title: "Jinoiy javobgarlik asoslari",
      desc: "Jabrlanuvchi huquqlari, ariza berish va himoya.",
      sections: [
        {
          heading: "Jinoyat sodir etilganda",
          text: "Jinoyat qurboni bo'lsangiz, imkon qadar tezroq politsiyaga murojaat qiling va yozma ariza qoldiring. Arizada voqea joyi, vaqti, holatlari va guvohlar aniq ko'rsatilishi kerak. Arizangiz ro'yxatga olinganligi haqida tasdiq talab qiling.",
        },
        {
          heading: "Jabrlanuvchining huquqlari",
          text: "Jabrlanuvchi ish materiallari bilan tanishish, dalillar taqdim etish va vakil (advokat) yordamidan foydalanish huquqiga ega. Shuningdek, jinoyat natijasida yetkazilgan moddiy va ma'naviy zararni qoplashni talab qilish mumkin.",
        },
        {
          heading: "Gumon qilinuvchi sifatida",
          text: "Agar sizga nisbatan gumon bildirilsa, jim turish va advokat yordamidan foydalanish huquqingiz bor. Advokat ishtirokisiz bayonot berishga majburlash qonunga ziddir. Har qanday hujjatni imzolashdan oldin uni to'liq o'qing.",
        },
      ],
    },
  ],

  ru: [
    {
      id: "labor",
      lawCode: "MK",
      title: "Основы трудового права",
      desc: "Трудовой договор, рабочее время, отпуск и увольнение.",
      sections: [
        {
          heading: "Трудовой договор",
          text: "Трудовой договор — основной документ между работником и работодателем. Он заключается письменно и должен чётко указывать должность, размер зарплаты, рабочее время и обязанности сторон. Работа без оформленного договора лишает работника правовой защиты — при споре доказать свои права намного сложнее.",
        },
        {
          heading: "Рабочее время и отдых",
          text: "Законодательство устанавливает максимальную продолжительность рабочей недели; работа сверх неё оплачивается дополнительно. Каждый работник имеет право на ежегодный оплачиваемый отпуск. Принуждение к отказу от отпуска незаконно.",
        },
        {
          heading: "Увольнение",
          text: "Работодатель вправе уволить работника только по основаниям, предусмотренным законом, и обязан оформить это приказом. Если считаете увольнение незаконным, вы вправе обратиться в трудовую инспекцию или в суд. Все документы (копия приказа, трудовая книжка) должны быть вам выданы.",
        },
      ],
    },
    {
      id: "family",
      lawCode: "OK",
      title: "Семейное право",
      desc: "Брак, развод, алименты и права детей.",
      sections: [
        {
          heading: "Брак и его расторжение",
          text: "Официальный брак имеет юридическую силу только если он зарегистрирован в органах ЗАГС. Один лишь религиозный обряд не влечёт правовых последствий — в таком случае защита в вопросах имущества и алиментов ограничена.",
        },
        {
          heading: "Общее имущество супругов",
          text: "Имущество, нажитое в браке, как правило считается общим и при разводе делится поровну. Имущество, принадлежавшее до брака либо полученное в наследство или в дар, остаётся личным.",
        },
        {
          heading: "Дети и алименты",
          text: "Обязанность содержать несовершеннолетнего ребёнка сохраняется и после развода. С кем останется ребёнок, решает суд, исходя из интересов ребёнка. Размер алиментов определяется в зависимости от числа детей либо соглашением сторон.",
        },
      ],
    },
    {
      id: "inheritance",
      lawCode: "FK",
      title: "Наследственное право",
      desc: "Завещание, очередь наследников и срок принятия наследства.",
      sections: [
        {
          heading: "Открытие наследства",
          text: "Наследство открывается со дня смерти человека. Наследники должны обратиться к нотариусу в установленный срок. Пропущенный срок можно восстановить только через суд и при наличии уважительной причины.",
        },
        {
          heading: "Наследование по завещанию и по закону",
          text: "При наличии завещания наследство распределяется согласно ему. Если завещания нет — по закону, в порядке очерёдности наследников. К первой очереди обычно относятся дети, супруг и родители.",
        },
        {
          heading: "Обязательная доля",
          text: "Даже при наличии завещания отдельные лица (например несовершеннолетние или нетрудоспособные дети) имеют право на обязательную долю. Это правило не позволяет полностью лишить их наследства завещанием.",
        },
      ],
    },
    {
      id: "land",
      lawCode: "YK",
      title: "Земля и недвижимость",
      desc: "Права на земельный участок, регистрация и споры.",
      sections: [
        {
          heading: "Виды прав на землю",
          text: "В Узбекистане земля является государственной собственностью, а гражданам предоставляются права владения и пользования. Право на участок подтверждается соответствующим решением и документами — без них пользование участком не имеет правового основания.",
        },
        {
          heading: "Государственная регистрация",
          text: "Права на недвижимость подлежат государственной регистрации. Незарегистрированная сделка может не иметь силы для третьих лиц — поэтому при покупке дома или земли сначала проверьте документы.",
        },
        {
          heading: "Споры о границах",
          text: "Если считаете, что сосед нарушил границу, сначала уточните её по кадастровым документам. Если договориться не удалось, вопрос решается в судебном порядке. На самовольно занятую землю право собственности не возникает.",
        },
      ],
    },
    {
      id: "consumer",
      lawCode: "IHQ",
      title: "Права потребителя",
      desc: "Некачественный товар, возврат, гарантия и онлайн-покупки.",
      sections: [
        {
          heading: "Ваши основные права",
          text: "Потребитель имеет право на полную и достоверную информацию о товаре или услуге, на качественный товар и на возмещение ущерба. Продавец не может в одностороннем порядке устанавливать условия, ограничивающие эти права.",
        },
        {
          heading: "Некачественный товар",
          text: "При обнаружении недостатка потребитель вправе требовать замены, ремонта либо возврата уплаченных денег. Требование лучше подать продавцу письменным заявлением — оно послужит доказательством. Сохраняйте чек или подтверждение оплаты.",
        },
        {
          heading: "Онлайн-покупки",
          text: "При покупках через интернет права потребителя также действуют. Если заказ не доставлен или не соответствует описанию, вы вправе требовать возврата денег. Сохраняйте переписку, номер заказа и подтверждение оплаты.",
        },
      ],
    },
    {
      id: "criminal",
      lawCode: "JK",
      title: "Основы уголовной ответственности",
      desc: "Права потерпевшего, подача заявления и защита.",
      sections: [
        {
          heading: "Если совершено преступление",
          text: "Если вы стали жертвой преступления, как можно скорее обратитесь в полицию и подайте письменное заявление. В заявлении укажите место, время, обстоятельства и свидетелей. Требуйте подтверждения о регистрации заявления.",
        },
        {
          heading: "Права потерпевшего",
          text: "Потерпевший вправе знакомиться с материалами дела, представлять доказательства и пользоваться помощью представителя (адвоката). Также можно требовать возмещения материального и морального вреда.",
        },
        {
          heading: "Если вы подозреваемый",
          text: "Если в отношении вас есть подозрение, вы имеете право молчать и пользоваться помощью адвоката. Принуждение давать показания без адвоката незаконно. Внимательно читайте любой документ перед подписанием.",
        },
      ],
    },
  ],

  en: [
    {
      id: "labor",
      lawCode: "MK",
      title: "Employment law basics",
      desc: "Employment contract, working hours, leave and dismissal.",
      sections: [
        {
          heading: "Employment contract",
          text: "The employment contract is the key document between an employee and an employer. It must be in writing and clearly state the position, salary, working hours and the duties of both parties. Working without a signed contract leaves the employee without legal protection — proving your rights in a dispute becomes far harder.",
        },
        {
          heading: "Working hours and rest",
          text: "The law sets a maximum weekly working time; work beyond it must be paid at a higher rate. Every employee is entitled to annual paid leave. Pressuring an employee to give up their leave is unlawful.",
        },
        {
          heading: "Dismissal",
          text: "An employer may dismiss an employee only on the grounds provided by law and must formalise it with an order. If you believe the dismissal was unlawful, you may apply to the labour inspectorate or the court. All documents (a copy of the order, your employment record book) must be handed to you.",
        },
      ],
    },
    {
      id: "family",
      lawCode: "OK",
      title: "Family law",
      desc: "Marriage, divorce, child support and children's rights.",
      sections: [
        {
          heading: "Marriage and divorce",
          text: "A marriage has legal force only if registered with the civil registry office. A religious ceremony alone produces no legal consequences — in that case protection regarding property and child support is limited.",
        },
        {
          heading: "Joint property of spouses",
          text: "Property acquired during the marriage is generally treated as joint property and split equally on divorce. Property owned before the marriage, or received as inheritance or a gift, remains personal property.",
        },
        {
          heading: "Children and child support",
          text: "The duty to support a minor child remains after divorce. The court decides who the child lives with based on the child's best interests. The amount of support depends on the number of children or is set by agreement.",
        },
      ],
    },
    {
      id: "inheritance",
      lawCode: "FK",
      title: "Inheritance law",
      desc: "Wills, order of heirs and the deadline to accept an inheritance.",
      sections: [
        {
          heading: "Opening of the inheritance",
          text: "An inheritance opens on the day of the person's death. Heirs must apply to a notary within the set deadline. A missed deadline can only be restored through the court and only for a valid reason.",
        },
        {
          heading: "By will and by law",
          text: "If there is a will, the estate is distributed according to it. If there is none, it passes by law in the order of priority of heirs. The first order usually includes children, the spouse and parents.",
        },
        {
          heading: "Compulsory share",
          text: "Even where a will exists, certain people (for example minor or incapacitated children) are entitled to a compulsory share. This prevents them from being entirely disinherited by a will.",
        },
      ],
    },
    {
      id: "land",
      lawCode: "YK",
      title: "Land and real estate",
      desc: "Rights to land plots, registration and disputes.",
      sections: [
        {
          heading: "Types of land rights",
          text: "In Uzbekistan land is state property, while citizens are granted rights of possession and use. The right to a plot is confirmed by the relevant decision and documents — without them, use of the plot has no legal basis.",
        },
        {
          heading: "State registration",
          text: "Rights to real estate must be registered with the state register. An unregistered transaction may have no effect against third parties — so check the documents first when buying a house or land.",
        },
        {
          heading: "Boundary disputes",
          text: "If you believe a neighbour has crossed the boundary, first clarify it using cadastral documents. If no agreement is reached, the matter is settled in court. No ownership right arises over land occupied without authorisation.",
        },
      ],
    },
    {
      id: "consumer",
      lawCode: "IHQ",
      title: "Consumer rights",
      desc: "Defective goods, refunds, warranty and online purchases.",
      sections: [
        {
          heading: "Your core rights",
          text: "A consumer has the right to full and accurate information about a product or service, to goods of proper quality, and to compensation for damage. A seller cannot unilaterally impose terms that restrict these rights.",
        },
        {
          heading: "Defective goods",
          text: "If a defect is found, the consumer may demand replacement, repair or a refund. It is best to submit the demand to the seller in writing — it will serve as evidence later. Keep the receipt or proof of payment.",
        },
        {
          heading: "Online purchases",
          text: "Consumer rights apply to online purchases as well. If an order is not delivered or does not match the description, you may demand a refund. Keep the correspondence, order number and payment confirmation.",
        },
      ],
    },
    {
      id: "criminal",
      lawCode: "JK",
      title: "Criminal liability basics",
      desc: "Victim's rights, filing a report and defence.",
      sections: [
        {
          heading: "If a crime has been committed",
          text: "If you are a victim of a crime, contact the police as soon as possible and file a written report. State the place, time, circumstances and witnesses. Ask for confirmation that your report has been registered.",
        },
        {
          heading: "Rights of the victim",
          text: "A victim may review the case materials, submit evidence and use the help of a representative (a lawyer). You may also claim compensation for material and moral damage.",
        },
        {
          heading: "If you are a suspect",
          text: "If you are suspected of an offence, you have the right to remain silent and to a lawyer. Forcing you to give statements without a lawyer is unlawful. Read any document carefully before signing it.",
        },
      ],
    },
  ],
};
