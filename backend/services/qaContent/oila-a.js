"use strict";
/**
 * OILA HUQUQI (1-qism) — savol-javob. ⚠️ Matnda ANIQ MUDDAT, FOIZ, SUMMA yoki MODDA
 * RAQAMI yozilmaydi — ular `refs` orqali `LegalChunk` dan JONLI olinadi
 * (nusxalangan raqam qonun yangilanganda eskirardi). Batafsil: index.js
 */
module.exports = [
  {
    slug: "nikoh-qanday-tuziladi",
    area: "oila",
    q: {
      uz: "Nikoh qanday tuziladi va qayd etiladi?",
      ru: "Как заключается и регистрируется брак?",
    },
    short: {
      uz:
        "Nikoh fuqarolik holati dalolatnomalarini qayd etish organlarida " +
        "tuziladi. Faqat shu tartibda qayd etilgan nikoh huquqiy oqibat " +
        "keltiradi — diniy marosim o'z-o'zicha huquqiy nikoh hisoblanmaydi.",
      ru:
        "Брак заключается в органах записи актов гражданского состояния. " +
        "Только зарегистрированный в таком порядке брак порождает правовые " +
        "последствия — религиозный обряд сам по себе правовым браком не " +
        "является.",
    },
    body: {
      uz: [
       
          "Nikohning ikkita asosiy sharti bor: nikohlanuvchilarning " +
          "ixtiyoriy roziligi va nikoh yoshiga yetganligi. Majburlash bilan " +
          "tuzilgan nikoh haqiqiy emas deb topilishi mumkin.",
       
          "Qayd etilmagan birgalikda yashash er-xotinning mulkiy " +
          "huquqlarini, meros va aliment masalalarini himoya qilmaydi. " +
          "Amalda eng ko'p muammo aynan shu yerdan chiqadi.",
      ],
      ru: [
       
          "У брака два основных условия: добровольное согласие вступающих в " +
          "брак и достижение брачного возраста. Брак, заключённый под " +
          "принуждением, может быть признан недействительным.",
       
          "Незарегистрированное совместное проживание не защищает " +
          "имущественные права супругов, вопросы наследования и алиментов. " +
          "На практике именно отсюда возникает больше всего проблем.",
      ],
    },
    refs: [
      { code: "OK", article: "13" },
      { code: "OK", article: "14" },
      { code: "OK", article: "15" },
    ],
  },
  {
    slug: "nikohga-monelik-qiladigan-holatlar",
    area: "oila",
    q: {
      uz: "Qanday holatlar nikoh tuzishga monelik qiladi?",
      ru: "Какие обстоятельства препятствуют заключению брака?",
    },
    short: {
      uz:
        "Qonun nikohga monelik qiladigan holatlarni aniq sanab o'tgan. Ular " +
        "mavjud bo'lsa nikoh qayd etilmaydi, qayd etilgan bo'lsa — haqiqiy " +
        "emas deb topilishi mumkin.",
      ru:
        "Закон прямо перечисляет обстоятельства, препятствующие заключению " +
        "брака. При их наличии брак не регистрируется, а зарегистрированный " +
        "может быть признан недействительным.",
    },
    body: {
      uz: [
       
          "Nikohlanuvchi shaxslarni tibbiy ko'rikdan o'tkazish ham alohida " +
          "tartibga solingan — bu bo'lajak oilaning sog'lig'i bilan bog'liq " +
          "himoya chorasi.",
       
          "Monelik qiladigan holatni yashirish jiddiy oqibatga olib keladi: " +
          "nikoh haqiqiy emas deb topilganda undan kelib chiqadigan mulkiy " +
          "huquqlar ham shubha ostida qoladi.",
      ],
      ru: [
       
          "Медицинское обследование вступающих в брак также урегулировано " +
          "отдельно — это защитная мера, связанная со здоровьем будущей " +
          "семьи.",
       
          "Сокрытие препятствующего обстоятельства влечёт серьёзные " +
          "последствия: при признании брака недействительным вытекающие из " +
          "него имущественные права также ставятся под сомнение.",
      ],
    },
    refs: [
      { code: "OK", article: "16" },
      { code: "OK", article: "17" },
    ],
  },
  {
    slug: "ajrashish-zags-orqalimi-sud-orqalimi",
    area: "oila",
    q: {
      uz: "Ajrashish ZAGS orqalimi yoki sud orqalimi?",
      ru: "Развод через ЗАГС или через суд?",
    },
    short: {
      uz:
        "Ikkalasi ham mumkin, lekin sharti boshqa. Er-xotinning o'zaro " +
        "roziligi bo'lsa va nizo bo'lmasa — qayd etish organlarida; nizo " +
        "yoki voyaga yetmagan bolalar bo'lsa — sud orqali.",
      ru:
        "Возможно и то, и другое, но условия разные. При взаимном согласии " +
        "супругов и отсутствии спора — в органах записи актов; при наличии " +
        "спора или несовершеннолетних детей — через суд.",
    },
    body: {
      uz: [
       
          "Nikohdan sud tartibida ajratish alohida tartibga solingan: sud " +
          "taraflarni murosaga keltirishga harakat qilishi va muhlat " +
          "berishi mumkin.",
       
          "Er-xotindan birining arizasi bo'yicha qayd etish organlarida " +
          "ajratish ham nazarda tutilgan — lekin faqat qonunda ko'rsatilgan " +
          "alohida hollarda.",
      ],
      ru: [
       
          "Расторжение брака в судебном порядке урегулировано отдельно: суд " +
          "может попытаться примирить стороны и предоставить срок.",
       
          "Предусмотрено и расторжение в органах записи по заявлению одного " +
          "из супругов — но только в отдельных случаях, указанных в законе.",
      ],
    },
    refs: [
      { code: "OK", article: "38" },
      { code: "OK", article: "40" },
      { code: "OK", article: "42" },
    ],
  },
  {
    slug: "ajrimda-bola-kim-bilan-qoladi",
    area: "oila",
    q: {
      uz: "Ajrimda bola kim bilan qoladi?",
      ru: "С кем остаётся ребёнок при разводе?",
    },
    short: {
      uz:
        "Buni sud hal qiladi. Asosiy mezon — otaning yoki onaning " +
        "\"huquqi\" emas, BOLANING MANFAATI: uning yoshi, bog'liqligi, " +
        "turmush sharoiti va tarbiya imkoniyatlari.",
      ru:
        "Это решает суд. Главный критерий — не «право» отца или матери, а " +
        "ИНТЕРЕСЫ РЕБЁНКА: его возраст, привязанность, условия жизни и " +
        "возможности воспитания.",
    },
    body: {
      uz: [
       
          "Nikohdan ajratish to'g'risida hal qiluv qarori chiqarilayotganda " +
          "sud bir vaqtning o'zida bir necha masalani hal qiladi: bola kim " +
          "bilan yashashi, alimentni kim to'lashi va mol-mulk bo'linishi.",
       
          "Ikkinchi ota-ona bola bilan muloqot qilish huquqidan mahrum " +
          "bo'lmaydi. Kelishuvga erishilsa, uni sudda rasmiylashtirish " +
          "keyingi nizolarning oldini oladi.",
      ],
      ru: [
       
          "При вынесении решения о расторжении брака суд одновременно " +
          "разрешает несколько вопросов: с кем будет проживать ребёнок, кто " +
          "платит алименты и как делится имущество.",
       
          "Второй родитель не лишается права на общение с ребёнком. Если " +
          "достигнуто соглашение, его оформление в суде предотвращает " +
          "последующие споры.",
      ],
    },
    refs: [
      { code: "OK", article: "44" },
      { code: "OK", article: "41" },
    ],
  },
];
