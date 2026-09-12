"use strict";
/** MEHNAT MODULI — 5-DARS: BO'SHATISH TARTIBI. MK 170–174, 100, 102.
 *  Bo'shatish ASOSLARI 4-darsda — bu yerda faqat TARTIB va to'lovlar. */

const LESSON = {
  key: "ishdan-boshatish-tartibi",
  category: "labor",
  level: "mid",
  order: 6050,
  title: "Bo'shatish tartibi, hisob-kitob va nafaqa",
  desc:
    "Bo'shatish qanday rasmiylashtiriladi, qanday hujjat va to'lov " +
    "beriladi, noqonuniy bo'shatishning oqibatlari qanday.",
  objectives: [
    "Bo'shatishning rasmiylashtirilish tartibini bilasiz",
    "Qanday hujjat berilishi shartligini bilasiz",
    "Hisob-kitob va bo'shash nafaqasini talab qila olasiz",
    "Noqonuniy bo'shatishning oqibatlarini bilasiz",
  ],
  practicalSteps: [
    "Buyruq nusxasini va mehnat daftarchasini o'sha kuni oling",
    "Foydalanilmagan ta'til kompensatsiyasini hisoblab tekshiring",
    "Hisob-kitob olinmasdan \"da'volarim yo'q\" tilxatiga imzo chekmang",
    "Noqonuniy bo'shatilsangiz muddatni darhol hisoblang",
  ],
  sections: [
    {
      heading: "Bo'shatishni rasmiylashtirish",
      text:
        "Mehnat shartnomasini bekor qilish " +
        "BUYRUQ bilan " +
        "rasmiylashtiriladi.\n\n" +
        "Buyruqda ko'rsatilishi kerak: bekor " +
        "qilish ASOSI (qonundagi moddaga " +
        "havola bilan); bekor qilish " +
        "SANASI; boshqa zarur " +
        "ma'lumotlar.\n\n" +
        "Xodim buyruq bilan " +
        "TANISHTIRILADI.\n\n" +
        "⚠️ Agar xodim buyruq bilan " +
        "tanishishdan bosh tortsa yoki " +
        "tanishtirish imkonsiz bo'lsa, " +
        "bu belgilangan tartibda qayd " +
        "etiladi.\n\n" +
        "Buyruqdagi ASOS qonundagi " +
        "ro'yxatga aniq mos kelishi " +
        "kerak — umumiy ibora yetarli " +
        "emas.",
      example:
        "Buyruqda faqat \"bo'shatilsin\" deb " +
        "yozilgan, asos va moddaga havola " +
        "yo'q. Bu rasmiylashtirish " +
        "talabining buzilishi.",
      keyPoints: [
        "Bo'shatish buyruq bilan rasmiylashtiriladi",
        "Buyruqda asos va sana ko'rsatiladi",
        "Xodim buyruq bilan tanishtiriladi",
        "Asos qonundagi moddaga aniq havola qilishi kerak",
      ],
      warning:
        "Buyruq bilan tanishayotganda rozi " +
        "bo'lmasangiz \"rozi emasman\" deb " +
        "yozib imzolang.",
      lawRefs: [{ code: "MK", article: "170" }],
    },
    {
      heading: "Mehnat daftarchasi va buyruq nusxasini berish",
      text:
        "Bo'shatish kuni xodimga hujjatlar " +
        "BERILADI — bu alohida moddada " +
        "belgilangan.\n\n" +
        "Beriladigan hujjatlar: MEHNAT " +
        "DAFTARCHASI (bo'shatish yozuvi " +
        "kiritilgan holda); bo'shatish " +
        "to'g'risidagi BUYRUQNING " +
        "ko'chirma nusxasi.\n\n" +
        "⚠️ Hujjatlarni USHLAB QOLISH " +
        "qonunga zid — hattoki xodimning " +
        "qarzi bor deb hisoblansa ham.\n\n" +
        "Mehnat daftarchasi ushlab " +
        "qolinsa xodim yangi ishga " +
        "kira olmaydi va bu unga zarar " +
        "keltiradi — bunday holat " +
        "javobgarlikka olib kelishi " +
        "mumkin.",
      example:
        "Ish beruvchi \"avval qarzingizni " +
        "to'lang\" deb mehnat " +
        "daftarchasini bermadi. Bu " +
        "qonunga zid — hujjat ushlab " +
        "qolinmaydi.",
      keyPoints: [
        "Bo'shatish kuni hujjatlar beriladi",
        "Mehnat daftarchasi va buyruq nusxasi majburiy",
        "Hujjatlarni ushlab qolish qonunga zid",
        "Ushlab qolish zarar keltirsa javobgarlik yuzaga keladi",
      ],
      warning:
        "Hujjat berilmasa YOZMA talab " +
        "qiling va qabul belgisini " +
        "oling.",
      lawRefs: [{ code: "MK", article: "171" }],
    },
    {
      heading: "Xodim bilan hisob-kitob qilish",
      text:
        "Bo'shatishda xodimga tegishli " +
        "BARCHA summalar to'lanadi — bu " +
        "alohida moddada belgilangan.\n\n" +
        "Odatda to'lanadi: ish haqi qarzi; " +
        "FOYDALANILMAGAN TA'TIL uchun " +
        "kompensatsiya; qonunda nazarda " +
        "tutilgan boshqa to'lovlar.\n\n" +
        "⚠️ Hisob-kitob muddati QISQA va u " +
        "qonunda belgilangan.\n\n" +
        "Kechiktirilsa ish beruvchi moddiy " +
        "javobgarlikka tortiladi.\n\n" +
        "Foydalanilmagan ta'til " +
        "kompensatsiyasi ko'pincha " +
        "unutiladi — u bir necha yillik " +
        "bo'lsa sezilarli summani " +
        "tashkil qiladi.",
      example:
        "Xodim uch yil ta'tilga " +
        "chiqmagan edi. Bo'shaganda " +
        "foydalanilmagan ta'til kunlari " +
        "uchun kompensatsiya to'lanishi " +
        "kerak.",
      keyPoints: [
        "Bo'shatishda barcha summalar to'lanadi",
        "Ish haqi qarzi va ta'til kompensatsiyasi kiradi",
        "Hisob-kitob muddati qisqa",
        "Kechiktirilsa moddiy javobgarlik yuzaga keladi",
      ],
      warning:
        "Hisob-kitob varaqasini so'rang va " +
        "har bir qatorni tekshiring.",
      lawRefs: [
        { code: "MK", article: "172" },
        { code: "MK", article: "254" },
      ],
    },
    {
      heading: "Ishdan bo'shatish nafaqasi",
      text:
        "Qonunda ko'rsatilgan asoslar " +
        "bo'yicha bo'shatilganda xodimga " +
        "alohida NAFAQA to'lanadi.\n\n" +
        "Bu odatda xodimning aybisiz " +
        "bo'shatilgan hollarga tegishli: " +
        "shtat qisqarishi; tashkilot " +
        "tugatilishi; sog'liq sababli " +
        "ishlashning imkonsizligi; " +
        "qonunda ko'rsatilgan " +
        "boshqalar.\n\n" +
        "⚠️ Nafaqa miqdori va uni to'lash " +
        "shartlari qonunda " +
        "belgilangan.\n\n" +
        "U hisob-kitobdan ALOHIDA " +
        "to'lov — ya'ni ish haqi " +
        "qarzi va ta'til " +
        "kompensatsiyasiga " +
        "QO'SHIMCHA.",
      example:
        "Xodim shtat qisqarishi sababli " +
        "bo'shatildi, lekin faqat ish " +
        "haqi qarzi to'landi. Bo'shash " +
        "nafaqasi ham berilishi kerak " +
        "edi.",
      keyPoints: [
        "Ayrim asoslarda bo'shash nafaqasi to'lanadi",
        "U xodimning aybisiz bo'shatishga tegishli",
        "Miqdor va shartlar qonunda belgilangan",
        "Bu hisob-kitobdan alohida to'lov",
      ],
      warning:
        "Bo'shatish asosingiz nafaqa " +
        "beriladigan ro'yxatga kirishini " +
        "tekshiring.",
      lawRefs: [{ code: "MK", article: "173" }],
    },
    {
      heading: "Ishga joylashish davridagi kafolatlar",
      text:
        "Ayrim asoslar bo'yicha bo'shatilgan " +
        "xodim uchun qo'shimcha kafolat " +
        "mavjud.\n\n" +
        "Mehnat shartnomasi alohida asoslarga " +
        "ko'ra bekor qilinganda ISHGA " +
        "JOYLASHISH DAVRIDA o'rtacha oylik " +
        "ish haqini saqlab qolish " +
        "kafolatlari alohida moddada " +
        "belgilangan.\n\n" +
        "⚠️ Ya'ni xodim yangi ish topguncha " +
        "belgilangan muddat davomida " +
        "moddiy qo'llab-quvvatlanadi.\n\n" +
        "Bundan tashqari ish beruvchi " +
        "alohida asoslar bo'yicha " +
        "bo'shatilgan xodimlarni QAYTA " +
        "ISHGA QABUL QILISH tartibi ham " +
        "nazarda tutilgan.",
      example:
        "Xodim shtat qisqarishi sababli " +
        "bo'shatildi. Ishga joylashish " +
        "davrida belgilangan muddat " +
        "davomida o'rtacha ish haqi " +
        "saqlanishi mumkin.",
      keyPoints: [
        "Ayrim asoslarda ishga joylashish davri kafolatlanadi",
        "O'rtacha oylik ish haqi saqlanadi",
        "Muddat qonunda belgilangan",
        "Qayta ishga qabul qilish tartibi ham nazarda tutilgan",
      ],
      warning:
        "Bu kafolat avtomatik emas — " +
        "bandlik organida ro'yxatdan " +
        "o'tish talab qilinishi mumkin.",
      lawRefs: [
        { code: "MK", article: "100" },
        { code: "MK", article: "102" },
      ],
    },
    {
      heading: "Qonunga xilof bo'shatishning oqibatlari",
      text:
        "⚠️ Bu — darsning eng muhim " +
        "mavzusi.\n\n" +
        "Mehnat shartnomasini qonunga xilof " +
        "bekor qilishning huquqiy " +
        "oqibatlari alohida moddada " +
        "belgilangan.\n\n" +
        "Odatiy oqibatlar: xodimni AVVALGI " +
        "ISHIGA QAYTARISH; majburiy " +
        "ishlamaslik davri uchun " +
        "o'rtacha ish haqini to'lash; " +
        "qonunda nazarda tutilgan boshqa " +
        "to'lovlar.\n\n" +
        "Ya'ni noqonuniy bo'shatish ish " +
        "beruvchi uchun jiddiy moddiy " +
        "oqibatlarga olib keladi.\n\n" +
        "Bunday nizolar bevosita SUDDA " +
        "ko'riladi va muddat qat'iy.",
      example:
        "Xodim noqonuniy bo'shatildi va " +
        "sud orqali ishga qaytarildi. " +
        "Unga majburiy ishlamaslik davri " +
        "uchun o'rtacha ish haqi " +
        "to'landi.",
      keyPoints: [
        "Noqonuniy bo'shatishda xodim ishga qaytariladi",
        "Majburiy ishlamaslik davri uchun haq to'lanadi",
        "Bunday nizolar bevosita sudda ko'riladi",
        "Muddatlar qat'iy belgilangan",
      ],
      warning:
        "Bo'shatilgan kundan MUDDATNI " +
        "sanang — muzokaralar uni " +
        "to'xtatmaydi.",
      lawRefs: [
        { code: "MK", article: "174" },
        { code: "MK", article: "558" },
      ],
    },
  ],
};

module.exports = { LESSON };
