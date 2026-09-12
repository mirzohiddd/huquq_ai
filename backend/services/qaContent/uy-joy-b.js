"use strict";
/**
 * UY-JOY VA YER HUQUQI (2-qism) — savol-javob. ⚠️ Matnda ANIQ MUDDAT, FOIZ, SUMMA yoki MODDA
 * RAQAMI yozilmaydi — ular `refs` orqali `LegalChunk` dan JONLI olinadi
 * (nusxalangan raqam qonun yangilanganda eskirardi). Batafsil: index.js
 */
module.exports = [
  {
    slug: "ijarachining-huquqlari",
    area: "uy-joy",
    q: {
      uz: "Ijaraga oluvchining qanday huquqlari bor?",
      ru: "Какие права есть у арендатора жилья?",
    },
    short: {
      uz:
        "Ijaraga oluvchi va u bilan doimiy yashayotgan fuqarolarning huquq " +
        "va majburiyatlari qonunda belgilangan. Ular shartnoma bilan " +
        "cheklanmasligi kerak.",
      ru:
        "Права и обязанности арендатора и постоянно проживающих с ним " +
        "граждан установлены законом. Договором они ограничиваться не " +
        "должны.",
    },
    body: {
      uz: [
       
          "Ijaraga oluvchining turar joyga oila a'zolarini va boshqa " +
          "fuqarolarni ko'chirib kiritish huquqi alohida moddada tartibga " +
          "solingan.",
       
          "Vaqtincha bo'lmagan ijaraga oluvchining va uning oila " +
          "a'zolarining huquqlari ham saqlanadi — uzoq vaqt yo'q bo'lish " +
          "o'z-o'zidan huquqni yo'qotmaydi.",
      ],
      ru: [
       
          "Право арендатора вселять в жилое помещение членов семьи и других " +
          "граждан урегулировано отдельной статьёй.",
       
          "Права временно отсутствующего арендатора и членов его семьи " +
          "также сохраняются — длительное отсутствие само по себе не " +
          "прекращает право.",
      ],
    },
    refs: [
      { code: "UJK", article: "50" },
      { code: "UJK", article: "51" },
      { code: "UJK", article: "55" },
    ],
  },
  {
    slug: "yer-uchastkasiga-bolgan-huquq-turlari",
    area: "uy-joy",
    q: {
      uz: "Yer uchastkasiga bo'lgan huquqning qanday turlari bor?",
      ru: "Какие виды прав на земельный участок существуют?",
    },
    short: {
      uz:
        "Qonun yuridik va jismoniy shaxslarning yer uchastkalariga bo'lgan " +
        "huquqlarini alohida sanab o'tgan: mulk huquqi, doimiy foydalanish, " +
        "ijara va boshqalar. Har birining o'z tartibi bor.",
      ru:
        "Закон отдельно перечисляет права юридических и физических лиц на " +
        "земельные участки: право собственности, постоянное пользование, " +
        "аренда и другие. У каждого свой порядок.",
    },
    body: {
      uz: [
       
          "Yer uchastkasiga bo'lgan huquqning boshqa shaxsga o'tishi " +
          "alohida moddada tartibga solingan — huquq turi o'tkazish " +
          "imkoniyatini ham belgilaydi.",
       
          "Huquqni tasdiqlovchi hujjatlar ro'yxati qonunda belgilangan. " +
          "Bitim tuzishdan oldin aynan qaysi huquq berilganini tekshiring: " +
          "ijaradagi yerni sotib bo'lmaydi.",
      ],
      ru: [
       
          "Переход права на земельный участок к другому лицу урегулирован " +
          "отдельной статьёй — вид права определяет и возможность его " +
          "передачи.",
       
          "Перечень документов, подтверждающих право, установлен законом. " +
          "До заключения сделки проверьте, какое именно право " +
          "предоставлено: арендованную землю продать нельзя.",
      ],
    },
    refs: [
      { code: "YK", article: "17" },
      { code: "YK", article: "20" },
      { code: "YK", article: "24" },
    ],
  },
  {
    slug: "servitut-nima",
    area: "uy-joy",
    q: {
      uz: "Servitut nima va u qanday belgilanadi?",
      ru: "Что такое сервитут и как он устанавливается?",
    },
    short: {
      uz:
        "Servitut — o'zganing yer uchastkasidan cheklangan tarzda " +
        "foydalanish huquqi (masalan, o'tish yoki quvur o'tkazish uchun). U " +
        "shartnoma bilan yoki qonunda ko'rsatilgan tartibda belgilanadi.",
      ru:
        "Сервитут — право ограниченного пользования чужим земельным " +
        "участком (например, для прохода или прокладки коммуникаций). " +
        "Устанавливается договором или в порядке, указанном законом.",
    },
    body: {
      uz: [
       
          "Servitut to'g'risidagi shartnoma va uning ishtirokchilarining " +
          "huquq va majburiyatlari alohida moddalarda belgilangan. Servitut " +
          "uchun haq to'lash ham nazarda tutilgan.",
       
          "Muhim jihat: yer uchastkasiga bo'lgan huquq boshqa shaxsga " +
          "o'tkazilganda servitut SAQLANADI — ya'ni yangi mulkdor uni tan " +
          "olishi shart.",
      ],
      ru: [
       
          "Договор о сервитуте и права и обязанности его участников " +
          "установлены отдельными статьями. Предусмотрена и плата за " +
          "сервитут.",
       
          "Важно: при переходе права на земельный участок к другому лицу " +
          "сервитут СОХРАНЯЕТСЯ — то есть новый собственник обязан его " +
          "признавать.",
      ],
    },
    refs: [
      { code: "YK", article: "30" },
      { code: "YK", article: "30-1" },
      { code: "YK", article: "30-6" },
    ],
  },
];
