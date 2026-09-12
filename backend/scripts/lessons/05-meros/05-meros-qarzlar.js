"use strict";
/** MEROS MODULI — 5-DARS: XARAJATLAR VA QARZLAR. FK2 1155–1157, 1152. */

const LESSON = {
  key: "meros-qarzlar",
  category: "inheritance",
  level: "mid",
  order: 5050,
  title: "Meros qarzlari va xarajatlar",
  desc:
    "Meros hisobidan qanday xarajatlar qoplanadi, qarzlar qanday " +
    "undiriladi va merosxo'r qanday hajmda javob beradi.",
  objectives: [
    "Meros hisobidan qoplanadigan xarajatlarni bilasiz",
    "Merosxo'rning qarzlar bo'yicha javobgarlik chegarasini bilasiz",
    "Korxonaga vorislikning o'ziga xosligini tushunasiz",
    "Egasiz qolgan mol-mulk taqdirini bilasiz",
  ],
  practicalSteps: [
    "Dafn va davolanish cheklarini saqlang — ular qoplanadi",
    "Qabul qilishdan oldin qarz miqdorini aniqlang",
    "Qarz meros qiymatidan ko'p bo'lsa voz kechishni o'ylang",
    "Biznes merosda bo'lsa vasiyatnoma tuzishni tavsiya qiling",
  ],
  sections: [
    {
      heading: "Meros hisobidan to'lanadigan xarajatlar",
      text:
        "Meros taqsimlanishidan OLDIN " +
        "undan ba'zi xarajatlar " +
        "qoplanadi.\n\n" +
        "Odatiy xarajatlar: meros " +
        "qoldiruvchining KASALLIGI va " +
        "DAFN ETILISHI bilan bog'liq " +
        "xarajatlar; merosni MUHOFAZA " +
        "qilish va boshqarish " +
        "xarajatlari; VASIYATNOMANI " +
        "ijro etish xarajatlari.\n\n" +
        "⚠️ Bu xarajatlar meros " +
        "mol-mulki hisobidan " +
        "qoplanadi va ular " +
        "merosxo'rlar o'rtasida " +
        "taqsimlanadigan qismdan " +
        "OLDIN ajratiladi.\n\n" +
        "AMALIY AHAMIYATI: dafn " +
        "xarajatlarini ko'targan " +
        "shaxs (u merosxo'r " +
        "bo'lmasa ham) ularni meros " +
        "hisobidan qoplashni talab " +
        "qilishi mumkin.",
      example:
        "Qo'shni dafn xarajatlarini o'z " +
        "hisobidan to'ladi. Chek va " +
        "hujjatlar asosida u bu " +
        "summani meros hisobidan " +
        "qoplashni talab qilishi " +
        "mumkin.",
      keyPoints: [
        "Ayrim xarajatlar taqsimlashdan oldin qoplanadi",
        "Kasallik, dafn, muhofaza va ijro xarajatlari kiradi",
        "Ular merosxo'r bo'lmagan shaxsga ham qoplanadi",
        "Xarajatlar hujjat bilan tasdiqlanishi kerak",
      ],
      warning:
        "Dafn va davolanish cheklarini " +
        "saqlang — ularsiz qoplashni " +
        "talab qilib bo'lmaydi.",
      lawRefs: [{ code: "FK2", article: "1155" }],
    },
    {
      heading: "Kreditorlarning qarzlarni undirishi",
      text:
        "⚠️ Bu — merosdagi ENG XAVFLI " +
        "mavzu va uni har bir " +
        "merosxo'r bilishi shart.\n\n" +
        "Meros qoldiruvchining " +
        "kreditorlari o'z talablarini " +
        "merosxo'rlarga qo'yishi " +
        "mumkin.\n\n" +
        "ENG MUHIM HIMOYA QOIDASI: " +
        "merosxo'r qarzlarga o'ziga " +
        "o'tgan meros mol-mulkining " +
        "QIYMATI DOIRASIDA javob " +
        "beradi.\n\n" +
        "Ya'ni qarz meros qiymatidan " +
        "ko'p bo'lsa, merosxo'r " +
        "farqni O'Z hisobidan " +
        "to'lashi SHART EMAS.\n\n" +
        "Bir necha merosxo'r bo'lsa, " +
        "ular qarzga o'z ulushlariga " +
        "MUTANOSIB javob beradi.",
      example:
        "Meros qiymati 50 million, qarz " +
        "esa 80 million so'm. " +
        "Merosxo'r faqat 50 million " +
        "doirasida javob beradi, " +
        "qolgan 30 millionni o'z " +
        "cho'ntagidan to'lamaydi.",
      keyPoints: [
        "Merosxo'r meros qiymati doirasida qarzga javob beradi",
        "Farqni o'z hisobidan to'lash shart emas",
        "Bir necha merosxo'r ulushiga mutanosib javob beradi",
        "Bu asosiy himoya qoidasi",
      ],
      warning:
        "Qarz meros qiymatidan ko'p " +
        "bo'lsa voz kechishni jiddiy " +
        "o'ylab ko'ring.",
      lawRefs: [{ code: "FK2", article: "1156" }],
    },
    {
      heading: "Kreditorlarning talab qo'yish muddati",
      text:
        "Kreditorlar cheksiz kutib " +
        "o'tira olmaydi.\n\n" +
        "Ular talab qo'yish uchun " +
        "belgilangan MUDDATGA ega va " +
        "bu merosxo'rlarni cheksiz " +
        "noaniqlikdan himoya " +
        "qiladi.\n\n" +
        "⚠️ Muddat o'tgach kreditor " +
        "talabi qanoatlantirilmasligi " +
        "mumkin.\n\n" +
        "Amaliy jihat merosxo'r uchun: " +
        "meros qabul qilingandan keyin " +
        "kutilmagan qarz \"chiqib " +
        "qolishi\" mumkin. Shuning " +
        "uchun qabul qilishdan OLDIN " +
        "qarzlarni imkon qadar " +
        "aniqlash muhim.\n\n" +
        "Bank, mikroqarz tashkilotlari " +
        "va soliq organlariga " +
        "so'rov yuborish foydali.",
      example:
        "Meros qabul qilingandan bir yil " +
        "keyin kreditor paydo bo'ldi. " +
        "Talab muddati ichida " +
        "qo'yilgan-qo'yilmagani " +
        "tekshiriladi.",
      keyPoints: [
        "Kreditorlar uchun talab qo'yish muddati belgilangan",
        "Muddat merosxo'rlarni noaniqlikdan himoya qiladi",
        "Muddat o'tgach talab qanoatlantirilmasligi mumkin",
        "Qabul qilishdan oldin qarzlarni aniqlang",
      ],
      warning:
        "Qarzlarni aniqlash uchun bank " +
        "va soliq organlariga so'rov " +
        "yuboring.",
      lawRefs: [
        { code: "FK2", article: "1156" },
        { code: "FK2", article: "1183" },
      ],
    },
    {
      heading: "Korxonaga vorislik",
      text:
        "Meros tarkibida korxona (biznes) " +
        "bo'lsa alohida qoidalar " +
        "qo'llaniladi.\n\n" +
        "Korxona oddiy buyum emas — u " +
        "YAXLIT mulkiy majmua: " +
        "binolar, uskunalar, xodimlar, " +
        "shartnomalar, qarzlar va " +
        "obro'.\n\n" +
        "⚠️ ASOSIY MUAMMO: korxonani " +
        "bo'lib yuborish uni YO'Q " +
        "QILISHI mumkin. Shuning " +
        "uchun qonun uni yaxlit " +
        "saqlashga harakat qiladi.\n\n" +
        "Odatiy yechim: merosxo'rlardan " +
        "biri korxonani oladi va " +
        "boshqalarga kompensatsiya " +
        "to'laydi. Tadbirkorlik " +
        "faoliyati bilan " +
        "shug'ullanuvchi merosxo'r " +
        "imtiyozga ega bo'lishi " +
        "mumkin.\n\n" +
        "Biznes egalari uchun " +
        "VASIYATNOMA ayniqsa muhim.",
      example:
        "Ota do'kon qoldirdi, uch farzand " +
        "meros oldi. Do'konni uchga " +
        "bo'lish uni yo'q qilardi — " +
        "biri oladi va boshqalarga pul " +
        "to'laydi.",
      keyPoints: [
        "Korxona yaxlit mulkiy majmua hisoblanadi",
        "Uni bo'lish biznesni yo'q qilishi mumkin",
        "Odatda biri oladi va kompensatsiya to'laydi",
        "Biznes egalari uchun vasiyatnoma muhim",
      ],
      warning:
        "Biznesingiz bo'lsa " +
        "vasiyatnoma tuzing — aks " +
        "holda u meros nizosi " +
        "davomida to'xtab qolishi " +
        "mumkin.",
      lawRefs: [{ code: "FK2", article: "1152" }],
    },
    {
      heading: "Egasiz qolgan mol-mulk",
      text:
        "Hech qanday merosxo'r bo'lmasa " +
        "nima bo'ladi?\n\n" +
        "Mol-mulk EGASIZ QOLGAN deb " +
        "topiladi va u davlat mulkiga " +
        "o'tadi.\n\n" +
        "Bu quyidagi hollarda yuz " +
        "beradi: merosxo'rlar umuman " +
        "yo'q; barcha merosxo'rlar " +
        "noloyiq deb topilgan; hech " +
        "biri merosni qabul " +
        "qilmagan; hammasi voz " +
        "kechgan.\n\n" +
        "⚠️ Bu holat SUD tomonidan " +
        "tasdiqlanadi — avtomatik " +
        "emas.\n\n" +
        "AMALIY XULOSA: agar yaqin " +
        "qarindoshingiz yo'q bo'lsa " +
        "va mol-mulkingiz muayyan " +
        "shaxsga yoki tashkilotga " +
        "o'tishini xohlasangiz — " +
        "VASIYATNOMA yagona yo'l.",
      example:
        "Yolg'iz yashovchi shaxs " +
        "mol-mulkini xayriya " +
        "tashkilotiga qoldirmoqchi " +
        "edi, lekin vasiyatnoma " +
        "tuzmadi. Mol-mulk egasiz " +
        "deb topilib davlatga o'tdi.",
      keyPoints: [
        "Merosxo'r bo'lmasa mol-mulk egasiz deb topiladi",
        "U davlat mulkiga o'tadi",
        "Holat sud tomonidan tasdiqlanadi",
        "Vasiyatnoma bu natijaning oldini oladi",
      ],
      warning:
        "Vasiyatnomasiz sizning " +
        "irodangiz huquqiy ahamiyatga " +
        "ega emas — faqat qonun " +
        "ishlaydi.",
      lawRefs: [{ code: "FK2", article: "1157" }],
    },
  ],
};

module.exports = { LESSON };
