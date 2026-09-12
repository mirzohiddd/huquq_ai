"use strict";
/**
 * MEROS HUQUQI (1-qism) — savol-javob. ⚠️ Matnda ANIQ MUDDAT, FOIZ, SUMMA yoki MODDA
 * RAQAMI yozilmaydi — ular `refs` orqali `LegalChunk` dan JONLI olinadi
 * (nusxalangan raqam qonun yangilanganda eskirardi). Batafsil: index.js
 */
module.exports = [
  {
    slug: "meros-qachon-ochiladi-va-qanday-qabul-qilinadi",
    area: "meros",
    q: {
      uz: "Meros qachon ochiladi va uni qanday qabul qilish kerak?",
      ru: "Когда открывается наследство и как его принять?",
    },
    short: {
      uz:
        "Meros fuqaro vafot etganda ochiladi. Uni qabul qilish uchun " +
        "belgilangan muddat ichida notariusga ariza berish yoki merosni " +
        "amalda egallashga kirishish kerak — o'z-o'zidan o'tmaydi.",
      ru:
        "Наследство открывается со смертью гражданина. Чтобы его принять, " +
        "нужно в установленный срок подать заявление нотариусу или " +
        "фактически вступить во владение — само по себе оно не переходит.",
    },
    body: {
      uz: [
       
          "Merosning ochilish joyi ham huquqiy ahamiyatga ega: aynan o'sha " +
          "joydagi notarius meros ishini yuritadi va guvohnoma beradi.",
       
          "Muddat o'tkazib yuborilsa, uni sud orqali tiklash mumkin, lekin " +
          "buning uchun uzrli sabab isbotlanishi kerak. Shuning uchun vafot " +
          "guvohnomasini olgach kechiktirmasdan notariusga murojaat qiling.",
      ],
      ru: [
       
          "Место открытия наследства также имеет правовое значение: именно " +
          "нотариус по этому месту ведёт наследственное дело и выдаёт " +
          "свидетельство.",
       
          "При пропуске срока его можно восстановить через суд, но для " +
          "этого нужно доказать уважительную причину. Поэтому после " +
          "получения свидетельства о смерти обращайтесь к нотариусу без " +
          "промедления.",
      ],
    },
    refs: [
      { code: "FK2", article: "1116" },
      { code: "FK2", article: "1117" },
      { code: "FK2", article: "1145" },
    ],
  },
  {
    slug: "vasiyatnoma-qanday-tuziladi",
    area: "meros",
    q: {
      uz: "Vasiyatnoma qanday tuziladi?",
      ru: "Как составляется завещание?",
    },
    short: {
      uz:
        "Vasiyatnoma yozma shaklda tuziladi va notarial tasdiqlanadi. " +
        "Shaklga rioya qilinmasa, u haqiqiy emas deb topilishi mumkin — bu " +
        "meros nizolarining eng ko'p sababi.",
      ru:
        "Завещание составляется в письменной форме и удостоверяется " +
        "нотариально. При несоблюдении формы оно может быть признано " +
        "недействительным — это самая частая причина наследственных споров.",
    },
    body: {
      uz: [
       
          "Ayrim hollarda notarial tasdiqlangan vasiyatnomalarga " +
          "tenglashtirilgan hujjatlar ham tan olinadi (masalan, davolash " +
          "muassasasida tuzilganda) — bu holatlar qonunda aniq sanab " +
          "o'tilgan.",
       
          "Vasiyat qiluvchi istagan vaqtda vasiyatnomani bekor qilishi yoki " +
          "o'zgartirishi mumkin va buning uchun hech kimdan rozilik " +
          "so'ramaydi. Oxirgi tuzilgan vasiyatnoma ustun kuchga ega.",
      ],
      ru: [
       
          "В отдельных случаях признаются и документы, приравненные к " +
          "нотариально удостоверенным завещаниям (например, составленные в " +
          "лечебном учреждении) — эти случаи прямо перечислены в законе.",
       
          "Завещатель в любое время вправе отменить или изменить завещание, " +
          "ни у кого не спрашивая согласия. Приоритет имеет последнее " +
          "составленное завещание.",
      ],
    },
    refs: [
      { code: "FK2", article: "1124" },
      { code: "FK2", article: "1125" },
      { code: "FK2", article: "1127" },
    ],
  },
  {
    slug: "qonun-boyicha-vorislar-navbati",
    area: "meros",
    q: {
      uz: "Vasiyatnoma bo'lmasa, meros kimga o'tadi?",
      ru: "Кому переходит наследство, если нет завещания?",
    },
    short: {
      uz:
        "Vasiyatnoma bo'lmaganda meros qonun bo'yicha, NAVBAT tartibida " +
        "o'tadi. Keyingi navbat vorislari faqat oldingi navbatda voris " +
        "bo'lmaganda meros oladi.",
      ru:
        "При отсутствии завещания наследство переходит по закону, в порядке " +
        "ОЧЕРЕДНОСТИ. Наследники следующей очереди наследуют только при " +
        "отсутствии наследников предыдущей очереди.",
    },
    body: {
      uz: [
       
          "Birinchi navbatdagi vorislar doirasi qonunda aniq belgilangan; " +
          "keyingi navbatlar ham ketma-ket sanab o'tilgan. Bitta navbat " +
          "ichidagi vorislar merosni teng ulushlarda oladi.",
       
          "Voris meros ochilishidan oldin vafot etgan bo'lsa, uning ulushi " +
          "taqdim qilish huquqi bo'yicha uning avlodlariga o'tishi mumkin.",
      ],
      ru: [
       
          "Круг наследников первой очереди прямо определён законом; " +
          "последующие очереди также перечислены последовательно. " +
          "Наследники одной очереди получают наследство в равных долях.",
       
          "Если наследник умер до открытия наследства, его доля может " +
          "перейти к его потомкам по праву представления.",
      ],
    },
    refs: [
      { code: "FK2", article: "1135" },
      { code: "FK2", article: "1136" },
      { code: "FK2", article: "1140" },
    ],
  },
  {
    slug: "majburiy-ulush-kimga-tegishli",
    area: "meros",
    q: {
      uz: "Majburiy ulush nima va u kimga tegishli?",
      ru: "Что такое обязательная доля и кому она полагается?",
    },
    short: {
      uz:
        "Majburiy ulush — vasiyatnomada ko'rsatilmagan bo'lsa ham qonun " +
        "kafolatlaydigan meros ulushi. U mehnatga qobiliyatsiz yaqin " +
        "qarindoshlar va boqimandalarga tegishli.",
      ru:
        "Обязательная доля — часть наследства, гарантированная законом, " +
        "даже если она не указана в завещании. Она полагается " +
        "нетрудоспособным близким родственникам и иждивенцам.",
    },
    body: {
      uz: [
       
          "Bu qoida vasiyat erkinligini cheklaydi: vasiyat qiluvchi butun " +
          "mol-mulkni begona shaxsga qoldirsa ham, majburiy ulushga haqli " +
          "shaxslar o'z qismini oladi.",
       
          "Meros qoldiruvchining mehnatga qobiliyatsiz boqimandalari " +
          "alohida moddada belgilangan — ular qarindosh bo'lmasa ham voris " +
          "bo'lishi mumkin.",
      ],
      ru: [
       
          "Это правило ограничивает свободу завещания: даже если завещатель " +
          "оставил всё имущество постороннему лицу, лица, имеющие право на " +
          "обязательную долю, получат свою часть.",
       
          "Нетрудоспособные иждивенцы наследодателя определены отдельной " +
          "статьёй — они могут наследовать, даже не будучи родственниками.",
      ],
    },
    refs: [
      { code: "FK2", article: "1142" },
      { code: "FK2", article: "1141" },
    ],
  },
];
