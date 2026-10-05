"use strict";
/**
 * LOKAL AI — SAYT BAZASIDA YO'Q SOHALAR UCHUN HALOL JAVOB (2026-10-05).
 *
 * ⚠️ Nega kerak: pensiya, nogironlik nafaqasi, fuqarolik, harbiy xizmatdan
 * kechiktirish kabi masalalar kodekslarda emas, ALOHIDA qonunlarda —
 * ular sayt bazasida (LegalChunk) yo'q. Avval bunday savolga yo umumiy
 * "topilmadi", yo aloqasiz modda chiqardi ("Pensiyamni kam hisoblashgan"
 * → mahkumlarning pensiya ta'minoti; "Harbiy xizmatdan kechiktirish" →
 * xizmatdan bo'yin tovlash jarimasi). Endi: qaysi qonun tartibga solishi
 * va qayerga murojaat qilish — modda iqtibosisiz (to'qib chiqarmaslik
 * uchun), aniq muddat/summa YOZILMAYDI.
 *
 * Faqat vaziyat va dars mavzulari topilmagandan KEYIN tekshiriladi.
 */
const { normalize, uzCyrToLatin, isUzCyrillic } = require("./text");

const SCOPE = [
  {
    match: (t) => /pensiya|пенси/.test(t) && !/mahkum|махкум|осужд|aliment|алимент|jarima|штраф|ushla|удерж/.test(t),
    law: { uz: "«Fuqarolarning davlat pensiya ta'minoti to'g'risida»gi Qonun", ru: "Закон «О государственном пенсионном обеспечении граждан»" },
    where: {
      uz: "Pensiya hisob-kitobiga rozi bo'lmasangiz — pensiya tayinlagan organdan hisob-kitobni yozma so'rang, so'ng yuqori turuvchi organga yoki sudga shikoyat qiling. Ish staji va ish haqi haqidagi hujjatlaringizni (mehnat daftarchasi, ma'lumotnomalar) saqlang.",
      ru: "Если не согласны с расчётом пенсии — письменно запросите расчёт у органа, назначившего пенсию, затем обжалуйте его в вышестоящем органе или в суде. Сохраняйте документы о стаже и заработке (трудовая книжка, справки).",
    },
  },
  {
    match: (t) => /nogiron|инвалид/.test(t) && /nafaqa|pensiya|imtiyoz|guruh|пособи|льгот|групп/.test(t),
    law: { uz: "«Nogironligi bo'lgan shaxslarning huquqlari to'g'risida»gi Qonun", ru: "Закон «О правах лиц с инвалидностью»" },
    where: {
      uz: "Nafaqa yoki imtiyoz berilmasa — yashash joyingizdagi ijtimoiy himoya organiga yozma ariza bering va rad javobini yozma talab qiling; rad etish ustidan yuqori organga yoki sudga shikoyat qilish mumkin.",
      ru: "Если пособие или льгота не предоставляются — подайте письменное заявление в орган социальной защиты по месту жительства и потребуйте письменный ответ; отказ можно обжаловать в вышестоящем органе или в суде.",
    },
  },
  {
    // ⚠️ "fuqarolik" — "Fuqarolik kodeksi" (civil) ham; kodeks/sud so'zlari bo'lsa — bu emas
    match: (t) =>
      (/fuqaroli(k|gi)\S*.{0,20}(olish|olsa|olaman|olmoq|qabul qil|chiqish|chiqsa|voz kech)/.test(t) &&
        !/kodeks|sud|davo|ish(lar)? boyicha|protsess/.test(t)) ||
      /гражданств/.test(t),
    law: { uz: "«O'zbekiston Respublikasi fuqaroligi to'g'risida»gi Qonun", ru: "Закон «О гражданстве Республики Узбекистан»" },
    where: {
      uz: "Fuqarolikka qabul qilish yoki undan chiqish bo'yicha arizalar ichki ishlar organlarining migratsiya va fuqarolikni rasmiylashtirish bo'linmalari orqali beriladi. Fuqarolikning asosiy qoidalari Konstitutsiyada ham bor — «Konstitutsiya» bo'limida o'qishingiz mumkin.",
      ru: "Заявления о приёме в гражданство или выходе из него подаются через подразделения миграции и оформления гражданства органов внутренних дел. Основные положения о гражданстве есть и в Конституции — раздел «Конституция» на сайте.",
    },
  },
  {
    match: (t) => /(harbiy|armiya) xizmat\S*.{0,30}(kechiktir|ozod|otsrochk)|otsrochka|отсрочк|освобожд\S* от (армии|службы|призыва)/.test(t),
    law: { uz: "«Umumiy harbiy majburiyat va harbiy xizmat to'g'risida»gi Qonun", ru: "Закон «О всеобщей воинской обязанности и военной службе»" },
    where: {
      uz: "Kechiktirish yoki ozod qilish asoslarini tasdiqlovchi hujjatlar (o'qish joyidan ma'lumotnoma, tibbiy xulosa, oilaviy holat hujjatlari) bilan yashash joyingizdagi mudofaa ishlari bo'limiga murojaat qiling. Chaqiruvdan asossiz bo'yin tovlash javobgarlikka sabab bo'ladi.",
      ru: "Обратитесь в отдел по делам обороны по месту жительства с документами, подтверждающими основание отсрочки или освобождения (справка с места учёбы, медзаключение, документы о семейном положении). Необоснованное уклонение от призыва влечёт ответственность.",
    },
  },
  {
    match: (t) => /propiska|прописк|doimiy royxat|vaqtincha royxat|регистрац\S* по месту/.test(t),
    law: { uz: "hukumatning fuqarolarni ro'yxatga olish tartibi to'g'risidagi qarorlari", ru: "постановления правительства о порядке регистрации граждан" },
    where: {
      uz: "Doimiy yoki vaqtincha ro'yxatga olish uchun pasport (ID-karta) va yashash joyiga huquqni tasdiqlovchi hujjat (yoki uy egasining roziligi) bilan davlat xizmatlari markaziga yoki my.gov.uz portaliga murojaat qiling.",
      ru: "Для постоянной или временной регистрации обратитесь в центр госуслуг или на портал my.gov.uz с паспортом (ID-картой) и документом о праве на жильё (или согласием собственника).",
    },
  },
];

const T = {
  uz: (law, where) =>
    `**Bu masala sayt bazasidagi kodekslarda emas**\n\nUni asosan ${law} tartibga soladi. Bu hujjat hozircha sayt bazasida yo'q, shuning uchun men undan moddani iqtibos qila olmayman — o'zimdan to'qib chiqarmayman.\n\n**Nima qilish mumkin:**\n${where}\n\nHujjatning amaldagi rasmiy matni — lex.uz saytida.`,
  ru: (law, where) =>
    `**Этот вопрос регулируется не кодексами из базы сайта**\n\nВ основном его регулирует ${law}. Этого документа пока нет в базе сайта, поэтому я не могу процитировать статью — и не придумываю её.\n\n**Что можно сделать:**\n${where}\n\nДействующий официальный текст — на сайте lex.uz.`,
};

/** @returns {string|null} halol javob yoki null */
function outOfScopeAnswer(text = "", lang = "uz") {
  const t = normalize(isUzCyrillic(text) ? uzCyrToLatin(text) : text);
  const hit = SCOPE.find((s) => s.match(t));
  if (!hit) return null;
  const L = lang === "ru" ? "ru" : "uz";
  return T[L](hit.law[L], hit.where[L]);
}

module.exports = { outOfScopeAnswer };
