"use strict";
/**
 * KUNDALIK / XATO YOZILGAN SO'Z → QONUN TILI (qoidalar asosida, AI'siz).
 *
 * Bu — so'rovni tushunishning ARZON qatlami: LLM ishlamay qolganda ham
 * (kvota, tarmoq) qidiruv to'g'ri atamalar bilan ketadi. Haqiqiy shikoyat
 * (2026-11-14): "gap to'htatib mashinani tortib qo'ydi, bayon nomani
 * jo'natmagan" — qonunda bu "transport vositasini ushlab turish" va
 * "bayonnomani jo'natish" deb yozilgan; xom matn bo'yicha qidiruv guvoh
 * qasamyodi va kimoshdi savdosi moddalarini qaytarardi.
 *
 * Ikki xil qoida:
 *   FIX  — imlo/sheva tuzatiladi (matn o'zgaradi);
 *   ADD  — matnga tegmasdan qidiruvga rasmiy atama QO'SHILADI.
 * Natija FAQAT qidiruv uchun — foydalanuvchiga ko'rsatiladigan matn emas.
 */

// ⚠️ `\b` kirillni tanimaydi — chegara `(?<![\p{L}])` bilan (u bayrog'i)
const W = "(?<![\\p{L}])";
const AP = "['ʻʼ‘’`]?";

const FIX = [
  [new RegExp(`${W}garindosh`, "giu"), "qarindosh"],
  [new RegExp(`${W}to${AP}(?:ht|xt|kt)at`, "giu"), "to'xtat"],
  [new RegExp(`${W}bayon\\s+noma`, "giu"), "bayonnoma"],
  [new RegExp(`${W}(?:moshina|mashna)`, "giu"), "mashina"],
  [new RegExp(`${W}jo${AP}nat`, "giu"), "jo'nat"],
  [new RegExp(`${W}(?:xuquq|huquk|xuquk)`, "giu"), "huquq"],
  [new RegExp(`${W}(?:konun|qonn)`, "giu"), "qonun"],
  [new RegExp(`${W}(?:shtraf|ishtraf)(?!\\s*stoyan)`, "giu"), "jarima"],
];

const ADD = [
  // Yo'l harakati, transportni olib qo'yish
  // "gap" — oddiy so'z ham ("gap shundaki"), shuning uchun faqat "to'xtatdi" yonida
  [new RegExp(`${W}(?:gai|gaich|gaishnik|dps|ypx|yhxx|ibdd|гаи|дпс|йпх)(?![\\p{L}])|${W}gap[\\s\\S]{0,25}to'xtat|yo${AP}l[-\\s]?patrul`, "iu"), "yo'l harakati xavfsizligi xizmati xodimi mansabdor shaxs"],
  [new RegExp(`(?:mashina|avtomobil|avtomashina|transport|машин|авто)[\\s\\S]{0,60}(?:tortib|olib)\\s+(?:qo${AP}y|ket|ol)|evakuator|эвакуатор|shtraf\\s*stoyanka|штрафстоян|jarima\\s+maydon|(?:забрал|эвакуир)[\\s\\S]{0,40}(?:машин|авто)`, "iu"), "transport vositasini ushlab turish jarima maydonchasi"],
  [new RegExp(`${W}штраф`, "iu"), "jarima ma'muriy jazo"],
  [new RegExp(`${W}(?:prava|права)(?![\\p{L}])|haydovchilik\\s+guvohnoma`, "iu"), "haydovchilik guvohnomasi transport vositasini boshqarish huquqi"],
  [new RegExp(`${W}(?:doverennost|доверенност)|ishonchnoma`, "iu"), "ishonchnoma transport vositasini boshqarish hujjatlari"],
  [new RegExp(`${W}bayonnoma|протокол`, "iu"), "ma'muriy huquqbuzarlik to'g'risidagi bayonnoma"],
  // Organlar, hujjatlar
  [new RegExp(`${W}(?:uchastkavoy|участков)`, "iu"), "profilaktika inspektori ichki ishlar organi"],
  [new RegExp(`${W}(?:zags|zagz|загс)`, "iu"), "fuqarolik holati dalolatnomalarini yozish organi"],
  [new RegExp(`${W}(?:propiska|прописк)`, "iu"), "doimiy yashash joyi bo'yicha ro'yxatga olish"],
  [new RegExp(`${W}(?:spravka|справк)`, "iu"), "ma'lumotnoma"],
  // Ish, pul
  [new RegExp(`${W}(?:ishxona|ishhona)`, "iu"), "ish beruvchi"],
  [new RegExp(`${W}(?:otpusk|отпуск)`, "iu"), "mehnat ta'tili"],
  [new RegExp(`${W}(?:bolnichn|больничн|kasallik varaq)`, "iu"), "vaqtincha mehnatga layoqatsizlik nafaqasi"],
  [new RegExp(`${W}(?:rasxod|расчет|raschyot)\\S*`, "iu"), "mehnat shartnomasini bekor qilish hisob-kitob"],
  [new RegExp(`${W}(?:dolg|долг)|qarzini\\s+bermay`, "iu"), "qarz shartnomasi qarzni qaytarish"],
  [new RegExp(`${W}(?:kvartira|квартир)\\S*\\s+(?:ijara|arenda)|arenda|аренд`, "iu"), "ijara shartnomasi turar joyni ijaraga berish"],
  // Oila
  [new RegExp(`${W}(?:razvod|развод)|ajrash|ajrim`, "iu"), "nikohdan ajratish"],
  [new RegExp(`${W}(?:aliment|алимент)`, "iu"), "aliment undirish ta'minot berish"],
  // Sud jarayoni
  [new RegExp(`${W}(?:isk|иск)(?![\\p{L}])|da${AP}vo`, "iu"), "da'vo arizasi da'vo muddati"],
  [new RegExp(`${W}(?:advokat|адвокат)`, "iu"), "himoyachi advokat"],
  [new RegExp(`${W}(?:shikoyat|жалоб)`, "iu"), "shikoyat berish tartibi"],
];

/**
 * @param {string} text
 * @returns {{ text: string, terms: string[], changed: boolean }}
 *   text — imlosi tuzatilgan savol; terms — qidiruvga qo'shiladigan atamalar
 */
function lexNormalize(text = "") {
  let out = String(text);
  for (const [re, to] of FIX) out = out.replace(re, to);
  const terms = [];
  for (const [re, add] of ADD) if (re.test(out)) terms.push(add);
  return { text: out, terms, changed: out !== String(text) || terms.length > 0 };
}

module.exports = { lexNormalize };
