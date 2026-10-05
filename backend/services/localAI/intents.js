"use strict";
/**
 * LOKAL AI — KO'P SO'RALADIGAN SAVOLLAR → SAYT DARSIDAGI MAVZU.
 *
 * ⚠️ Nima uchun (2026-09-28): so'z o'xshashligi bilan mavzu tanlash ba'zan
 * adashardi ("fuqarolikdan chiqish" → bojxonadan "olib chiqish" mavzusi,
 * "ikkinchi xotin" → meros mavzusi). Eng ko'p uchraydigan savol turlari
 * uchun mavzu QO'LDA biriktirildi — javob matni o'sha darsdan, moddalar
 * esa uning bazadan tekshirilgan havolalaridan olinadi.
 *
 * `topic` — mavzu sarlavhasi AYNAN (dars kontenti o'zgarsa, `resolve`
 * modul yuklanishida ogohlantiradi — jim buzilib qolmasligi uchun).
 * `lesson` — bir xil sarlavhali mavzu bir necha darsda bo'lsa aniqlik uchun.
 * Tartib muhim: aniqroq niyat oldinda.
 */
const { getTopicIndex } = require("./lessonTopics");
const { normalize, uzCyrToLatin, isUzCyrillic } = require("./text");

/* USTUVOR niyatlar — hayotiy vaziyatlardan (situations.js) OLDIN tekshiriladi:
   ular umumiy vaziyatning ANIQ qismi ("ajrashganda uy kimga qoladi" —
   umumiy "ajrashish" emas, mulkni bo'lish; "aliment to'lamasa qamaladimi" —
   undirish tartibi emas, javobgarlik). */
const PRIORITY = [
  { re: /nikoh(dan)? (oldin|avval)\S*.{0,40}(mulk|mashina|uy|kvartira|pul)|shaxsiy mulk|(sovga|meros)\S*.{0,30}ajrash/, topic: "Shaxsiy mulk: nima bo'linmaydi" },
  { re: /ajrash\S*.{0,40}(uy|mulk|mashina|kvartira|hovli|pul|bolin)|(uy|mulk|mashina|kvartira)\S*.{0,40}ajrash|mulk\S* bolish|раздел\S* имуществ/, topic: "Mulkni bo'lish va da'vo muddati", lesson: "Oila huquqi" },
  { re: /aliment\S*.{0,40}(qama|jinoiy|javobgar|jazo)|(qama|jazo)\S*.{0,30}aliment/, topic: "Aliment to'lanmasa: javobgarlik" },
  // Farzand/uka O'ZI qilmish qilgan ("bolam o'g'irlik qilib qo'ydi") — jabrlanuvchi
  // vaziyati emas, javobgarlik yoshi (o'g'rilik vaziyatidan OLDIN tekshiriladi)
  { re: /(bolam|oglim|qizim|ukam|singlim|\b1[0-7] yosh)\S*.{0,30}(ogirlik|ogrilik|jinoyat|mushtlash|urishib)\S*.{0,20}(qil|qoy)/, topic: "Javobgarlik yoshi va aqli rasolik" },
  // Zo'ravonlik bo'lsa ("urib uydan haydadi") — bu oilaviy zo'ravonlik vaziyati, uy-joy emas
  // Uy egasi / ijara bo'lsa — bu ijara nizosi (situationsHousing.js), oila emas
  { re: /^(?!.*(\bur(di|ib|adi|gan)|kaltak|zoravon|uy egasi|kvartira egasi|ijara|kvartirant)).*((uydan|uyga)\S*.{0,20}(hayda|chiqar|kiritma|kiritmay)|(hayda|chiqar)\S*.{0,20}uydan|выгнал\S* из дома|выселя)/, topic: "Oila a'zolarining huquqlari", lesson: "Yer va ko'chmas mulk" },
];

const INTENTS = [
  { re: /(uylan|turmush|nikoh|erga teg)\S*.{0,30}majbur|majbur\S*.{0,30}(uylan|turmush|nikoh|erga)/, topic: "Nikoh ixtiyoriy bo'lishi shart" },
  { re: /(necha|qaysi) yosh\S*.{0,30}(turmush|uylan|nikoh|erga)|(turmush|uylan|nikoh|erga teg)\S*.{0,30}\byosh|\b1[0-9] yosh\S* (qiz|yigit|ogil)\S*.{0,20}(turmush|uylan|erga)|nikoh yosh|брачн\S* возраст/, topic: "Nikoh yoshi: necha yoshdan turmush qurish mumkin" },
  { re: /farzandlikka (ol|ber)|усынов/, topic: "Farzandlikka olish tushunchasi" },
  { re: /otalik|отцовств/, topic: "Otalikning sud tartibida belgilanishi" },
  { re: /(ota ?onalik|ota ?ona) huquq\S* (mahrum|cheklash)|лишени\S* родительск/, topic: "Ota-onalik huquqidan mahrum qilish", lesson: "Oila huquqi" },
  { re: /vasiyatnoma\S*.{0,30}(yoz|tuz|qanday|shakl|notarius)|завещан\S*.{0,20}(состав|оформ|написа)/, topic: "Vasiyatnoma shakliga doir umumiy qoidalar" },
  { re: /(oz|ozim) (xohish|ixtiyor)\S* (bilan|ila)|ishdan ket(moqchi|sam|dim|ish)|по собственному желанию|уволиться сам/, topic: "O'z xohishi bilan ishdan bo'shash" },
  { re: /(mehnat|yillik|asosiy|har yilgi) tatil|tatil\S* (necha|qancha) kun|ежегодн\S* отпуск/, topic: "Har yilgi asosiy ta'til davomiyligi" },
  { re: /ish vaqtidan tashqari|qoshimcha (soat|ish vaqt)|сверхурочн/, topic: "Ish vaqtidan tashqari ish", lesson: "Ish vaqti va uning rejimlari" },
  { re: /(necha|qaysi) yosh\S*.{0,20}ishla|\b1[0-7] yosh\S*.{0,25}ishla|voyaga yetmagan\S*.{0,20}ishla|с какого возраста работ/, topic: "Necha yoshdan ishlash mumkin" },
  { re: /(ish joyi|ishda|ishxona|ish vaqtida)\S*.{0,30}(jarohat|shikast|baxtsiz)|baxtsiz hodisa|производствен\S* травм/, topic: "Ishlab chiqarishdagi baxtsiz hodisa" },
  { re: /(mast|ichib|ichkilik|spirtli)\S*.{0,30}(hayda|mashina|rul)|(hayda|rul)\S*.{0,30}mast|пьян\S*.{0,20}(за рул|вожд)/, topic: "Mastlik holati: eng og'ir buzilish" },
  { re: /giyohvand|narkot|нарко/, topic: "Giyohvandlik vositalari bilan bog'liq jinoyatlar" },
  { re: /\bpora|взятк/, topic: "Pora olish va berish" },
  { re: /soz erkinlig|fikr erkinlig|свобод\S* слова/, topic: "Fikr, so'z va axborot erkinligi" },
  { re: /fuqarolik(ni|dan|ka)? (ol|chiq|yoqot|voz)|fuqaroligi?dan chiq|гражданств/, topic: "Fuqarolikni olish va yo'qotish — faqat qonun bilan" },
  { re: /(bepul|tekin|pulsiz)\S*.{0,30}(advokat|yurist|yuridik|huquqiy yordam)|(advokat|yurist)\S*.{0,30}(pulim yoq|pul yoq|bepul)|бесплатн\S* (адвокат|юрид)/, topic: "Malakali yuridik yordam olish huquqi" },
  { re: /davo ariza|sudga (qanday )?ariza|исков\S* заявлен/, topic: "Da'vo arizasining mazmuni" },
  { re: /sugurta|страхов/, topic: "Sug'urta hodisasi va to'lov rad etilishi" },
  { re: /tilxat|raspiska|расписк/, topic: "Qarz shartnomasi: real shartnoma" },
  { re: /kredit|кредит/, topic: "Kredit shartnomasi" },
  { re: /shovqin|шум/, topic: "Maishiy shovqin va marosimlar" },
  { re: /\b(it|itim|mushuk|hayvon)\S*.{0,30}(tishla|hujum)|укусил/, topic: "Sog'liqqa yetkazilgan zararni qoplash" },
  { re: /suv bos|mulkimga zarar|zarar yetkaz|buzib qoy|sindirib (qoy|ket)|ущерб/, topic: "Javobgarlikning umumiy asoslari" },
  { re: /(ijara|ijarachi|kvartirant|аренд)\S*.{0,40}(tolamay|bermay|tolamadi|qarz|не плат)|(tolamay|bermay)\S*.{0,30}(ijara|kvartirant)/, topic: "Ijara haqi va foydalanish qoidalari" },
  { re: /(uy|kvartira|hovli|yer)\S*.{0,40}(hujjat|rasmiylashtir|royxatdan|kadastr)|(hujjat|rasmiylashtir|kadastr)\S*.{0,30}(uy|kvartira)/, topic: "Davlat ro'yxatidan o'tkazish", lesson: "Yer va ko'chmas mulk" },
  { re: /\byatt\b|yakka tartibdagi tadbirkor|tadbirkor\S*.{0,20}(ochish|boshla|royxat)/, topic: "Fuqaroning tadbirkorlik faoliyati" },
  { re: /\bchek\S*.{0,20}(bermadi|bermay|yoq)|чек не/, topic: "Chek va hujjat: nima uchun hal qiluvchi" },
  { re: /(internet|onlayn|online|buyurtma)\S*.{0,40}(kelmadi|kelmay|yetkazilmadi|pul\S* qaytar)/, topic: "Tovar topshirish muddati buzilsa", lesson: "Iste'molchi huquqlari" },
  { re: /kafolat\S*.{0,30}(muddat|buzil|tamir)|гаранти/, topic: "Kafolat muddati", lesson: "Iste'molchi huquqlari" },
  { re: /(yol harakati|yhq|gai|dyhxx)\S*.{0,40}(buz|jarima)|jarima\S*.{0,30}(yol|mashina|haydovchi|tezlik)|(mashina|avtomobil)\S*.{0,30}(jarima|evakuat)|tezlikni oshir/, topic: "Eng ko'p uchraydigan qoidabuzarliklar" },
  { re: /saylov\S*.{0,30}(yosh|kim ovoz|ovoz bera ol)|kim saylay ol|ovoz berish\S*.{0,20}yosh|necha yosh\S*.{0,20}(saylov|ovoz)/, topic: "Saylov prinsiplari", refs: [["SYK", "4"], ["SYK", "3"]] },
  { re: /chet ?el\S*.{0,30}(chiq|ket|ishla|sayohat)|xorijga (chiq|ket)|выезд за границ/, topic: "Erkin harakatlanish huquqi" },
  { re: /sud\S* (qaror|hukm)\S*.{0,30}(rozi emas|norozi|shikoyat|qarshi)|apellyatsiya|обжал\S* решени/, topic: "Shikoyat instansiyalari", refs: [["FPK", "383"], ["FPK", "385-1"], ["FPK", "418"]] },
  { re: /(muddati|yaroqlilik muddati) ?ot(gan|ib)|yaroqlilik muddati|просроч/, topic: "Yaroqlilik muddati", lesson: "Iste'molchi huquqlari" },
  { re: /(uy|bino|imorat|hovli)\S* qurish\S*.{0,30}ruxsat|qurilish\S*.{0,20}ruxsat|разрешени\S* на строител/, topic: "Qurilish uchun ruxsatnoma va hujjatlar" },
  { re: /(kvartira|uy|hovli|kochmas mulk)\S*.{0,15}\bsot(ish|sam|moqchi|ay|ib)|продат\S* (квартир|дом)/, topic: "Ko'chmas mulkni sotish shartnomasi va shakli" },
  { re: /(\d+|necha|qancha) soat\S*.{0,30}ishla|ish vaqti\S*.{0,20}(necha|qancha|davomiy|soat)|kuniga \d+ soat/, topic: "Ish vaqtining normal davomiyligi" },
  { re: /tungi (smena|ish|vaqt)|kechasi ishla|ночн\S* (смен|работ)/, topic: "Tungi ish", lesson: "Mehnat huquqi" },
  { re: /(olcham|rang|fason)\S*.{0,40}(togri kelmadi|yoqmadi|mos kelmadi|almashtir|qaytar)|(qaytar|almashtir)\S*.{0,40}(olcham|yoqmadi)/, topic: "Maqbul sifatli tovarni almashtirish", lesson: "Iste'molchi huquqlari" },
  { re: /(rasm|surat|video|shaxsiy malumot)\S*.{0,40}(internet|tarqat|joyla|qoydi|ruxsatsiz)|shaxsiy hayot/, topic: "Shaxsiy hayot va turar joy daxlsizligi" },
  { re: /(yerim|hovlim|chegara)\S*.{0,40}(devor|qurib|egallab|bosib)|(devor|qurilish)\S*.{0,30}(yerim|hovlim)|xalaqit ber/, topic: "Negator da'vo: xalaqitni bartaraf etish" },
  { re: /(necha|\b1[0-7]) yosh\S*.{0,40}(jinoyat|javobgar|qamal)|jinoiy javobgarlik yoshi|voyaga yetmagan\S*.{0,30}javobgar/, topic: "Javobgarlik yoshi va aqli rasolik" },
  { re: /(ozini|ozimni) himoya qil|zaruriy mudofaa|самооборон|необходим\S* оборон/, topic: "Zaruriy mudofaa", lesson: "Jinoiy javobgarlik" },
  { re: /prokuror|prokuratura|прокурат/, topic: "Prokuratura" },
  { re: /mulk\S* daxlsiz|неприкосновен\S* собствен/, topic: "Mulk daxlsizligi va mulkdor bo'lmagan shaxs huquqlari" },
  { re: /voyaga yet(ish|dim|ganda)|alohida yasha|(qaysi|necha) yosh\S*.{0,30}(mustaqil|ozim|alohida)|muomala layoqat|совершеннолет/, topic: "Muomala layoqati nima va u qachon to'liq bo'ladi" },
];

const resolved = new Map();

function resolve(list) {
  if (resolved.has(list)) return resolved.get(list);
  const { topics } = getTopicIndex();
  const out = list.map((it) => {
    const topic = topics.find((t) => t.heading === it.topic && (!it.lesson || t.lesson === it.lesson));
    if (!topic) console.error(`⚠️ Lokal AI niyati: "${it.topic}" mavzusi darslarda topilmadi`);
    // `refs` — mavzuning ko'p havolasidan savolga aynan tegishlisini oldinga qo'yish
    const withRefs = topic && it.refs
      ? { ...topic, lawRefs: it.refs.map(([code, article]) => ({ code, article })) }
      : topic;
    return { ...it, topic: withRefs };
  }).filter((it) => it.topic);
  resolved.set(list, out);
  return out;
}

/** @param {boolean} priority — faqat ustuvor niyatlar (vaziyatlardan oldin) */
function matchIntent(text = "", priority = false) {
  const vs = [normalize(isUzCyrillic(text) ? uzCyrToLatin(text) : text).replace(/\s+/g, " ")];
  if (/[а-яё]/i.test(text)) vs.push(normalize(uzCyrToLatin(text)).replace(/\s+/g, " "));
  const hit = resolve(priority ? PRIORITY : INTENTS).find((it) => vs.some((t) => it.re.test(t)));
  return hit ? hit.topic : null;
}

module.exports = { matchIntent, INTENTS, PRIORITY };
