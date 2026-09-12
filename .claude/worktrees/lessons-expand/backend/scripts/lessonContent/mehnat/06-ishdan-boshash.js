"use strict";
/**
 * MEHNAT HUQUQI — 6-QISM: ISHDAN BO'SHASH VA NIZOLAR (46–50-mavzular)
 *
 * Ataylab OXIRIDA: bo'shash qoidalarini tushunish uchun shartnoma,
 * ish haqi va intizom bo'yicha bilim allaqachon shakllangan
 * bo'lishi kerak.
 */

const SECTIONS = [
  /* ── 46 ────────────────────────────────────────────────────── */
  {
    heading: "Shartnomani bekor qilish asoslari",
    text:
      "Mehnat shartnomasi qanday " +
      "tugaydi? Qonun asoslarning " +
      "TO'LIQ ro'yxatini beradi va bu " +
      "ro'yxat YOPIQ — unda yo'q asos " +
      "bo'yicha bo'shatib bo'lmaydi.\n\n" +
      "Asoslar uch guruhga bo'linadi:\n\n" +
      "(1) TOMONLARNING KELISHUVIGA " +
      "ko'ra — eng tinch yo'l;\n\n" +
      "(2) BIR TOMONNING tashabbusiga " +
      "ko'ra — xodimning yoki ish " +
      "beruvchining;\n\n" +
      "(3) TOMONLARNING XOHISH-IRODASIGA " +
      "BOG'LIQ BO'LMAGAN holatlarga " +
      "ko'ra (masalan muddatning " +
      "tugashi, saylanmaganlik va " +
      "qonunda ko'rsatilgan boshqa " +
      "hollar).\n\n" +
      "⚠️ Muhim norma: tashkilotning " +
      "MULKDORI almashganda, tashkilot " +
      "QAYTA TASHKIL ETILGANDA yoki " +
      "bo'ysunuvi o'zgarganda mehnat " +
      "shartnomasi AMAL QILISHDA DAVOM " +
      "ETADI. Ya'ni bular o'z-o'zidan " +
      "bo'shatish uchun asos emas.",
    example:
      "Kompaniya boshqa egaga sotildi " +
      "va yangi rahbariyat \"hammani " +
      "yangidan qabul qilamiz\" deb " +
      "bo'shatmoqchi. Bu qonunga zid — " +
      "mulkdor almashishi shartnomani " +
      "tugatmaydi.",
    keyPoints: [
      "Bekor qilish asoslari ro'yxati qonunda yopiq",
      "Asoslar uch guruhga bo'linadi",
      "Mulkdor almashishi bo'shatish uchun asos emas",
      "Qayta tashkil etishda shartnoma amal qilishda davom etadi",
    ],
    warning:
      "Buyruqda ko'rsatilgan ASOSGA " +
      "e'tibor bering — u qonundagi " +
      "ro'yxatga aniq mos kelishi " +
      "kerak, umumiy ibora bo'lmasligi " +
      "shart.",
    lawRefs: [
      { code: "MK", article: "155" },
      { code: "MK", article: "156" },
      { code: "MK", article: "168" },
    ],
  },

  /* ── 47 ────────────────────────────────────────────────────── */
  {
    heading: "O'z xohishi bilan ishdan bo'shash",
    text:
      "Xodim istalgan paytda o'z " +
      "tashabbusi bilan shartnomani " +
      "bekor qilishi mumkin. Bu — " +
      "mehnat erkinligi tamoyilining " +
      "bevosita natijasi.\n\n" +
      "Tartib: xodim ish beruvchini " +
      "YOZMA ravishda oldindan " +
      "ogohlantiradi. Ogohlantirish " +
      "muddati qonunda belgilangan.\n\n" +
      "⚠️ Muhim huquq: ogohlantirish " +
      "muddati tugagunga qadar xodim " +
      "arizasini QAYTARIB OLISHI " +
      "mumkin — qonunda nazarda " +
      "tutilgan holatlar bundan " +
      "mustasno.\n\n" +
      "Muddat tugagach xodim ishga " +
      "chiqmaslikka haqli. Ish " +
      "beruvchi uni ushlab qola " +
      "olmaydi va hisob-kitobni " +
      "kechiktira olmaydi.\n\n" +
      "Ayrim hollarda ogohlantirish " +
      "muddatisiz ham bo'shash mumkin " +
      "— masalan ish beruvchi mehnat " +
      "qonunchiligini buzgan bo'lsa " +
      "yoki qonunda ko'rsatilgan " +
      "boshqa uzrli sabab bo'lsa.",
    example:
      "Xodim ariza berdi, keyin " +
      "fikridan qaytdi. Ogohlantirish " +
      "muddati hali tugamagan bo'lsa, " +
      "u arizasini qaytarib olishi " +
      "mumkin va ishda qoladi.",
    keyPoints: [
      "Xodim istalgan paytda bo'shashi mumkin",
      "Yozma ogohlantirish va belgilangan muddat talab qilinadi",
      "Muddat tugagunga qadar arizani qaytarib olish mumkin",
      "Uzrli sabab bo'lsa muddatsiz bo'shash mumkin",
    ],
    warning:
      "Arizani ish beruvchiga RASMIY " +
      "topshiring (kirim raqami yoki " +
      "qabul belgisi bilan). " +
      "\"Berganman\" degan so'z " +
      "isbot bo'lmaydi.",
    lawRefs: [
      { code: "MK", article: "160" },
      { code: "MK", article: "157" },
    ],
  },

  /* ── 48 ────────────────────────────────────────────────────── */
  {
    heading: "Ish beruvchi tashabbusi bilan bo'shatish",
    text:
      "Bu — eng ko'p nizo keltirib " +
      "chiqaradigan holat va shuning " +
      "uchun eng qat'iy tartibga " +
      "solingan.\n\n" +
      "Asoslar qonunda ANIQ ro'yxat " +
      "bilan berilgan. Ular orasida: " +
      "xodimlar sonini (shtatni) " +
      "qisqartirish; xodimning " +
      "lavozimga mos kelmasligi; " +
      "mehnat majburiyatlarini " +
      "muntazam buzish; bir marta " +
      "qo'pol buzish va qonunda " +
      "ko'rsatilgan boshqalar.\n\n" +
      "PROTSEDURA majburiy: " +
      "belgilangan muddatda OLDINDAN " +
      "OGOHLANTIRISH; qonunda " +
      "nazarda tutilgan hollarda " +
      "kasaba uyushmasi qo'mitasi " +
      "bilan KELISHIB OLISH; " +
      "buyruqni rasmiylashtirish va " +
      "tanishtirish.\n\n" +
      "⚠️ TAQIQLAR: qonun ayrim " +
      "davrlarda va ayrim toifadagi " +
      "xodimlarni ish beruvchi " +
      "tashabbusi bilan bo'shatishni " +
      "taqiqlaydi — masalan xodim " +
      "vaqtincha mehnatga " +
      "qobiliyatsiz bo'lgan yoki " +
      "ta'tilda bo'lgan davrda.\n\n" +
      "Shtat qisqartirilganda ba'zi " +
      "xodimlar ishda qoldirishga " +
      "IMTIYOZLI huquqqa ega bo'ladi.",
    example:
      "Xodim kasallik varaqasida " +
      "ekanida bo'shatish buyrug'i " +
      "chiqarildi. Bu qonunga zid — " +
      "bunday davrda ish beruvchi " +
      "tashabbusi bilan bo'shatish " +
      "taqiqlanadi.",
    keyPoints: [
      "Asoslar qonunda aniq ro'yxat bilan berilgan",
      "Oldindan ogohlantirish majburiy",
      "Ayrim hollarda kasaba uyushmasi bilan kelishish talab qilinadi",
      "Kasallik va ta'til davrida bo'shatish taqiqlanadi",
    ],
    warning:
      "\"O'z xohishingiz bilan yozing, " +
      "aks holda moddaga chiqaramiz\" " +
      "degan bosimga berilmang — bu " +
      "sizni barcha kafolatlardan " +
      "mahrum qiladi.",
    lawRefs: [
      { code: "MK", article: "161" },
      { code: "MK", article: "163" },
      { code: "MK", article: "164" },
      { code: "MK", article: "165" },
      { code: "MK", article: "167" },
    ],
  },

  /* ── 49 ────────────────────────────────────────────────────── */
  {
    heading: "Hisob-kitob va ishdan bo'shash nafaqasi",
    text:
      "Ishdan bo'shaganda ish beruvchi " +
      "bir necha majburiyatni " +
      "bajarishi shart.\n\n" +
      "(1) HISOB-KITOB. Xodimga " +
      "tegishli barcha summalar " +
      "to'lanadi: ish haqi qarzi, " +
      "foydalanilmagan ta'til uchun " +
      "kompensatsiya va boshqa " +
      "to'lovlar. Muddat qonunda " +
      "belgilangan va u qisqa.\n\n" +
      "(2) HUJJATLAR. Mehnat " +
      "daftarchasi va bo'shatish " +
      "to'g'risidagi buyruqning " +
      "ko'chirma nusxasi beriladi. " +
      "Ularni ushlab qolish qonunga " +
      "zid.\n\n" +
      "(3) BO'SHASH NAFAQASI. Qonunda " +
      "ko'rsatilgan asoslar bo'yicha " +
      "bo'shatilganda xodimga " +
      "alohida nafaqa to'lanadi.\n\n" +
      "(4) Ayrim asoslar bo'yicha " +
      "bo'shatilganda ishga " +
      "joylashish davrida o'rtacha " +
      "oylik ish haqini SAQLAB QOLISH " +
      "kafolati ham amal qiladi.\n\n" +
      "⚠️ Foydalanilmagan ta'til " +
      "uchun kompensatsiya — ko'pincha " +
      "unutiladigan, lekin sezilarli " +
      "summa.",
    example:
      "Xodim uch yil ta'tilga " +
      "chiqmagan edi. Bo'shaganda " +
      "foydalanilmagan ta'til kunlari " +
      "uchun kompensatsiya to'lanishi " +
      "kerak — bu uning huquqi.",
    keyPoints: [
      "Hisob-kitob qonunda belgilangan qisqa muddatda amalga oshiriladi",
      "Mehnat daftarchasi va buyruq nusxasi beriladi",
      "Ayrim asoslarda bo'shash nafaqasi to'lanadi",
      "Foydalanilmagan ta'til uchun kompensatsiya beriladi",
    ],
    warning:
      "Hujjatlar va pul olinmasdan " +
      "hech narsaga imzo qo'ymang. " +
      "\"Da'volarim yo'q\" degan " +
      "tilxat keyinchalik sizga " +
      "qarshi ishlatiladi.",
    lawRefs: [
      { code: "MK", article: "172" },
      { code: "MK", article: "171" },
      { code: "MK", article: "173" },
      { code: "MK", article: "100" },
    ],
  },

  /* ── 50 ────────────────────────────────────────────────────── */
  {
    heading: "Noqonuniy bo'shatilsangiz: mehnat nizolari",
    text:
      "Yakuniy mavzu — huquqni " +
      "himoya qilish. Mehnat nizolari " +
      "ikki turga bo'linadi: YAKKA " +
      "TARTIBDAGI (bitta xodim bilan) " +
      "va JAMOAVIY.\n\n" +
      "Yakka tartibdagi nizolar " +
      "belgilangan tartibda ko'rib " +
      "chiqiladi. Nizo taraflari — " +
      "xodim va ish beruvchi.\n\n" +
      "⚠️ MUDDAT — ENG MUHIM NUQTA. " +
      "Mehnat nizolari bo'yicha " +
      "murojaat qilish uchun muddat " +
      "BELGILANGAN va u qisqa. " +
      "Muddatni o'tkazib yuborish " +
      "haqli talabni ham yo'qqa " +
      "chiqarishi mumkin.\n\n" +
      "Noqonuniy bo'shatishning " +
      "oqibatlari xodim foydasiga: " +
      "avvalgi ishga QAYTARISH; " +
      "majburiy ishlamaslik davri " +
      "uchun o'rtacha ish haqini " +
      "to'lash; ayrim hollarda " +
      "ma'naviy zararni qoplash.\n\n" +
      "AMALIY QADAMLAR: (1) buyruq " +
      "nusxasini oling; (2) barcha " +
      "hujjatni to'plang (shartnoma, " +
      "buyruqlar, hisob varaqalari, " +
      "yozishmalar); (3) muddatni " +
      "aniqlang; (4) inspeksiyaga " +
      "yoki sudga murojaat qiling.",
    example:
      "Xodim asossiz bo'shatildi, " +
      "lekin sudga murojaat qilishni " +
      "kechiktirdi. Belgilangan " +
      "muddat o'tgach da'vo ko'rilmay " +
      "qolishi mumkin — talab haqli " +
      "bo'lsa ham.",
    keyPoints: [
      "Nizolar yakka tartibdagi va jamoaviy turlarga bo'linadi",
      "Murojaat muddati belgilangan va qisqa",
      "Noqonuniy bo'shatishda xodim ishga qaytariladi",
      "Majburiy ishlamaslik davri uchun haq to'lanadi",
    ],
    warning:
      "Bo'shatilgan kundan boshlab " +
      "MUDDATNI sanang va " +
      "kechiktirmang. Bu — eng ko'p " +
      "haqli talabni yo'qotadigan " +
      "sabab.",
    lawRefs: [
      { code: "MK", article: "174" },
      { code: "MK", article: "541" },
      { code: "MK", article: "542" },
      { code: "MK", article: "543" },
      { code: "MK", article: "544" },
    ],
  },
];

module.exports = { SECTIONS };
