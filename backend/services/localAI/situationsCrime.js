"use strict";
/**
 * HAYOTIY VAZIYATLAR — JINOYAT VA HUQUQBUZARLIK JABRLANUVCHISI,
 * USHLANGAN SHAXS. Tuzilma va qoidalar — situationsFamily.js izohida.
 * ⚠️ Yo'nalish: jabrlanuvchi va himoya nuqtai nazari (darslar bilan bir xil).
 */

module.exports = [
  {
    id: "detained",
    match: (t) =>
      /(ushlab (ketdi|qoldi|turish|olib)|ushlandi|advokatsiz|himoyachisiz|без адвоката|qamoqqa ol|hibsga ol|militsiya|politsiya|milisa|tergovchi|задерж|арестова)/.test(t),
    title: { uz: "Ushlab turilganda huquqlar", ru: "Права при задержании" },
    summary: {
      uz:
        "Ushlab turilgan (gumon qilinuvchi) shaxs himoyachiga ega bo'lish, o'ziga qarshi ko'rsatuv bermaslik " +
        "va ushlab turish asoslarini bilish huquqiga ega.",
      ru:
        "Задержанный (подозреваемый) имеет право на защитника, право не свидетельствовать против себя " +
        "и право знать основания задержания.",
    },
    pins: [["JPK", "48"], ["JPK", "221"], ["JPK", "49"]],
    codes: ["JPK", "JK"],
    terms: "gumon qilinuvchining huquqlari ushlab turish himoyachi",
    steps: {
      uz: [
        "Xotirjam bo'ling, qarshilik ko'rsatmang va ushlab turish sababini so'rang.",
        "Himoyachi (advokat) talab qiling — himoyachisiz ko'rsatuv berishga majbur emassiz.",
        "Bayonnomani diqqat bilan o'qing; noto'g'ri yozilgan joylarga e'tirozingizni yozib, keyin imzolang.",
        "Yaqinlaringizga ushlanganingiz haqida xabar berilishini talab qiling.",
      ],
      ru: [
        "Сохраняйте спокойствие, не сопротивляйтесь и спросите о причине задержания.",
        "Потребуйте защитника (адвоката) — вы не обязаны давать показания без него.",
        "Внимательно прочитайте протокол; впишите возражения против неверных записей и только потом подпишите.",
        "Потребуйте уведомить близких о задержании.",
      ],
    },
  },
  {
    id: "theft",
    match: (t) =>
      /(ogirla|ogrila|ugirla|ogirlik|ogrilik|talon|bosqin|tortib ol|украл|кража|ограб)/.test(t),
    title: { uz: "O'g'rilik yoki talonchilik jabrlanuvchisi", ru: "Кража или грабёж" },
    summary: {
      uz:
        "Mulkni yashirin talon-taroj qilish — o'g'rilik, ochiq talon-taroj qilish — talonchilik. Ikkalasi " +
        "ham jinoyat; jabrlanuvchi jarayonda o'z huquqlariga ega.",
      ru:
        "Тайное хищение имущества — кража, открытое — грабёж. Оба деяния являются преступлениями; " +
        "потерпевший обладает процессуальными правами.",
    },
    pins: [["JK", "169"], ["JK", "166"], ["JPK", "55"]],
    codes: ["JK", "JPK"],
    terms: "oʻgʻrilik talonchilik jabrlanuvchining huquqlari",
    steps: {
      uz: [
        "Darhol 102 raqamiga qo'ng'iroq qiling yoki ichki ishlar organiga yozma ariza bering.",
        "Yo'qolgan narsalar ro'yxatini, ularning hujjatlari va qiymatini tayyorlang.",
        "Voqea joyidagi kameralar, guvohlar haqida tergovchiga ma'lumot bering.",
        "Jabrlanuvchi sifatida ish materiallari bilan tanishish va zararni qoplashni talab qilish huquqingiz bor.",
      ],
      ru: [
        "Сразу позвоните по номеру 102 или подайте письменное заявление в органы внутренних дел.",
        "Подготовьте список похищенного, документы на вещи и их стоимость.",
        "Сообщите следователю о камерах и свидетелях на месте происшествия.",
        "Как потерпевший вы вправе знакомиться с материалами дела и требовать возмещения ущерба.",
      ],
    },
  },
  {
    id: "fraud",
    match: (t) => /(aldab|aldadi|aldash|aldov|firib|мошенн|обман)/.test(t),
    title: { uz: "Firibgarlik", ru: "Мошенничество" },
    summary: {
      uz: "Aldash yoki ishonchni suiiste'mol qilish yo'li bilan mulkni egallash — firibgarlik jinoyati.",
      ru: "Завладение имуществом путём обмана или злоупотребления доверием — мошенничество.",
    },
    pins: [["JK", "168"], ["JPK", "55"]],
    codes: ["JK", "JPK"],
    terms: "firibgarlik aldash ishonchni suisteʼmol qilish",
    steps: {
      uz: [
        "Pul o'tkazgan bo'lsangiz — darhol bankka murojaat qilib, o'tkazmani to'xtatish/bloklashni so'rang.",
        "Barcha dalillarni saqlang: yozishmalar, qo'ng'iroqlar, chek va o'tkazma ma'lumotlari.",
        "Ichki ishlar organiga yozma ariza bering.",
      ],
      ru: [
        "Если вы перевели деньги — сразу обратитесь в банк с просьбой заблокировать перевод.",
        "Сохраните все доказательства: переписку, звонки, чеки и данные переводов.",
        "Подайте письменное заявление в органы внутренних дел.",
      ],
    },
  },
  {
    id: "insult",
    match: (t) => /(haqorat|tuhmat|sokdi|sokkan|sokin|оскорб|клевет)/.test(t),
    title: { uz: "Haqorat yoki tuhmat", ru: "Оскорбление или клевета" },
    summary: {
      uz:
        "Shaxsning sha'ni va qadr-qimmatini kamsitish (haqorat) yoki bila turib yolg'on, sharmandali ma'lumot " +
        "tarqatish (tuhmat) uchun ma'muriy, takrorlanganda esa jinoiy javobgarlik bor.",
      ru:
        "За унижение чести и достоинства (оскорбление) или распространение заведомо ложных порочащих " +
        "сведений (клевета) предусмотрена административная, а при повторности — уголовная ответственность.",
    },
    pins: [["MJK", "41"], ["MJK", "40"], ["JK", "140"], ["JK", "139"]],
    codes: ["MJK", "JK"],
    terms: "haqorat qilish tuhmat shaʼni qadr-qimmati",
    steps: {
      uz: [
        "Dalillarni saqlang: skrinshotlar, audio/video, guvohlar.",
        "Ichki ishlar organiga yoki sudga ariza bering.",
        "Obro'yingizga zarar yetkazilgan bo'lsa, fuqarolik tartibida ma'naviy zararni qoplashni ham talab qilishingiz mumkin.",
      ],
      ru: [
        "Сохраните доказательства: скриншоты, аудио/видео, свидетелей.",
        "Подайте заявление в органы внутренних дел или в суд.",
        "Если пострадала ваша репутация, можно в гражданском порядке требовать компенсации морального вреда.",
      ],
    },
  },
];
