"use strict";
/**
 * MEROS HUQUQI (2-qism) — savol-javob. ⚠️ Matnda ANIQ MUDDAT, FOIZ, SUMMA yoki MODDA
 * RAQAMI yozilmaydi — ular `refs` orqali `LegalChunk` dan JONLI olinadi
 * (nusxalangan raqam qonun yangilanganda eskirardi). Batafsil: index.js
 */
module.exports = [
  {
    slug: "merosxor-qarzlar-uchun-javob-beradimi",
    area: "meros",
    q: {
      uz: "Merosxo'r meros qoldiruvchining qarzlari uchun javob beradimi?",
      ru: "Отвечает ли наследник по долгам наследодателя?",
    },
    short: {
      uz:
        "Ha, lekin CHEKLANGAN: merosxo'r faqat o'ziga o'tgan mol-mulk " +
        "qiymati doirasida javob beradi. O'z shaxsiy mulki hisobidan qarz " +
        "to'lashga majbur emas.",
      ru:
        "Да, но ОГРАНИЧЕННО: наследник отвечает только в пределах стоимости " +
        "перешедшего к нему имущества. Погашать долг за счёт личного " +
        "имущества он не обязан.",
    },
    body: {
      uz: [
       
          "Meros tarkibiga mol-mulk bilan birga majburiyatlar ham kiradi. " +
          "Shu sabab merosni qabul qilishdan oldin qarzlarni aniqlash — " +
          "amaliy jihatdan eng muhim qadam.",
       
          "Kreditorlar qarzni undirish uchun murojaat qilish tartibi " +
          "alohida moddada belgilangan. Meros hisobidan to'lanishi lozim " +
          "bo'lgan xarajatlar ham navbat bilan qoplanadi.",
      ],
      ru: [
       
          "В состав наследства вместе с имуществом входят и обязательства. " +
          "Поэтому выяснение долгов до принятия наследства — практически " +
          "важнейший шаг.",
       
          "Порядок обращения кредиторов за взысканием долга установлен " +
          "отдельной статьёй. Расходы, подлежащие оплате за счёт " +
          "наследства, также возмещаются в порядке очерёдности.",
      ],
    },
    refs: [
      { code: "FK2", article: "1113" },
      { code: "FK2", article: "1156" },
      { code: "FK2", article: "1155" },
    ],
  },
  {
    slug: "merosdan-voz-kechish",
    area: "meros",
    q: {
      uz: "Merosdan voz kechish mumkinmi?",
      ru: "Можно ли отказаться от наследства?",
    },
    short: {
      uz:
        "Ha. Merosdan voz kechish huquqi qonunda nazarda tutilgan va u " +
        "ayniqsa qarzlar mol-mulkdan ko'p bo'lganda ma'noga ega. Voz " +
        "kechish qaytarib olinmaydi.",
      ru:
        "Да. Право отказа от наследства предусмотрено законом и особенно " +
        "оправдано, когда долги превышают имущество. Отказ не может быть " +
        "взят обратно.",
    },
    body: {
      uz: [
       
          "Voz kechish huquqining cheklanishlari alohida moddada " +
          "belgilangan — masalan, merosning bir qismidan voz kechib, " +
          "qolganini olish mumkin emas.",
       
          "Voz kechish uchun ham muddat amal qiladi. Shuning uchun meros " +
          "tarkibini (mol-mulk va qarzlar) muddat ichida aniqlab olish " +
          "zarur.",
      ],
      ru: [
       
          "Ограничения права отказа установлены отдельной статьёй — " +
          "например, нельзя отказаться от части наследства и принять " +
          "остальное.",
       
          "Для отказа также действует срок. Поэтому состав наследства " +
          "(имущество и долги) необходимо выяснить в пределах срока.",
      ],
    },
    refs: [
      { code: "FK2", article: "1147" },
      { code: "FK2", article: "1148" },
    ],
  },
  {
    slug: "meros-guvohnomasi-qanday-olinadi",
    area: "meros",
    q: {
      uz: "Merosga bo'lgan huquq to'g'risidagi guvohnoma qanday olinadi?",
      ru: "Как получить свидетельство о праве на наследство?",
    },
    short: {
      uz:
        "Guvohnomani notarius beradi. Ko'chmas mulk va davlat reyestrida " +
        "qayd etiladigan mol-mulk uchun bu hujjat SHART — usiz mulk huquqi " +
        "ro'yxatdan o'tkazilmaydi.",
      ru:
        "Свидетельство выдаёт нотариус. Для недвижимости и имущества, " +
        "подлежащего регистрации в государственном реестре, этот документ " +
        "ОБЯЗАТЕЛЕН — без него право собственности не регистрируется.",
    },
    body: {
      uz: [
       
          "Notariusga vafot guvohnomasi, qarindoshlikni tasdiqlovchi " +
          "hujjatlar va mol-mulkka bo'lgan huquq hujjatlari taqdim etiladi.",
       
          "Bir necha voris bo'lsa, meros ularning kelishuvi bilan yoki sud " +
          "orqali taqsimlanadi. Kelishuvni yozma rasmiylashtirish keyingi " +
          "nizolarning oldini oladi.",
      ],
      ru: [
       
          "Нотариусу представляются свидетельство о смерти, документы, " +
          "подтверждающие родство, и правоустанавливающие документы на " +
          "имущество.",
       
          "При нескольких наследниках наследство делится по их соглашению " +
          "или через суд. Письменное оформление соглашения предотвращает " +
          "последующие споры.",
      ],
    },
    refs: [
      { code: "FK2", article: "1146" },
      { code: "FK2", article: "1150" },
      { code: "FK2", article: "1199" },
    ],
  },
];
