"use strict";
/**
 * HUQUQ SOHALARI VA HUJJAT TURLARI — "Qonunchilik hujjatlari" filtrlari.
 *
 * Sohalar ro'yxati to'liq (30 ta) — hujjati hali bazada bo'lmagan soha
 * ham ko'rsatiladi (0 ta hujjat), foydalanuvchi bo'lim tuzilmasini
 * ko'rib tursin. Hujjat → soha bog'lanishi faqat mazmunga qarab (kodeks
 * nimani tartibga soladi) — `DOC_AREAS` da.
 *
 * Admin yangi hujjat qo'shsa va bu yerda yozilmagan bo'lsa, u sohasiz
 * (faqat "Barchasi" ostida) ko'rinadi — xato emas.
 */

const AREAS = [
  ["constitutional", "Konstitutsiyaviy huquq", "Конституционное право"],
  ["civil", "Fuqarolik huquqi", "Гражданское право"],
  ["criminal", "Jinoyat huquqi", "Уголовное право"],
  ["criminal_procedure", "Jinoyat-protsessual huquq", "Уголовно-процессуальное право"],
  ["administrative", "Ma'muriy huquq", "Административное право"],
  ["labor", "Mehnat huquqi", "Трудовое право"],
  ["family", "Oila huquqi", "Семейное право"],
  ["civil_procedure", "Fuqarolik protsessual huquqi", "Гражданское процессуальное право"],
  ["economic", "Iqtisodiy huquq", "Экономическое право"],
  ["tax", "Soliq huquqi", "Налоговое право"],
  ["finance", "Moliya huquqi", "Финансовое право"],
  ["banking", "Bank huquqi", "Банковское право"],
  ["business", "Tadbirkorlik huquqi", "Предпринимательское право"],
  ["corporate", "Korporativ huquq", "Корпоративное право"],
  ["customs", "Bojxona huquqi", "Таможенное право"],
  ["land", "Yer huquqi", "Земельное право"],
  ["housing", "Uy-joy huquqi", "Жилищное право"],
  ["environmental", "Ekologik huquq", "Экологическое право"],
  ["education", "Ta'lim huquqi", "Право в сфере образования"],
  ["health", "Sog'liqni saqlash huquqi", "Право в сфере здравоохранения"],
  ["social", "Ijtimoiy ta'minot huquqi", "Право социального обеспечения"],
  ["consumer", "Iste'molchilar huquqi", "Защита прав потребителей"],
  ["ip", "Intellektual mulk huquqi", "Право интеллектуальной собственности"],
  ["it", "Axborot va IT huquqi", "Информационное и IT-право"],
  ["transport", "Transport huquqi", "Транспортное право"],
  ["migration", "Migratsiya huquqi", "Миграционное право"],
  ["electoral", "Saylov huquqi", "Избирательное право"],
  ["military", "Harbiy huquq", "Военное право"],
  ["international", "Xalqaro huquq", "Международное право"],
  ["judicial", "Sud va protsessual huquq", "Судебное и процессуальное право"],
].map(([id, uz, ru]) => ({ id, uz, ru }));

/* Hujjat turlari — tartib: yuridik kuch bo'yicha. `group` — katalogdagi
   yirik bo'lim (Konstitutsiya / Kodekslar / Qonunlar / Prezident /
   Vazirlar Mahkamasi / Idoraviy / Mahalliy / Xalqaro). */
const DOC_TYPES = [
  ["constitution", "Konstitutsiya", "Конституция", "constitution"],
  ["code", "Kodeks", "Кодекс", "codes"],
  ["law", "Qonun", "Закон", "laws"],
  ["decree", "Farmon", "Указ", "president"],
  ["resolution", "Qaror", "Постановление", "president"],
  ["order", "Farmoyish", "Распоряжение", "president"],
  ["command", "Buyruq", "Приказ", "ministry"],
  ["regulation", "Nizom", "Положение", "ministry"],
  ["instruction", "Yo'riqnoma", "Инструкция", "ministry"],
  ["rules", "Reglament", "Регламент", "ministry"],
  ["international", "Xalqaro hujjat", "Международный документ", "international"],
].map(([id, uz, ru, group]) => ({ id, uz, ru, group }));

const GROUPS = [
  ["constitution", "Konstitutsiya", "Конституция"],
  ["codes", "Kodekslar", "Кодексы"],
  ["laws", "Qonunlar", "Законы"],
  ["president", "Prezident hujjatlari", "Акты Президента"],
  ["cabinet", "Vazirlar Mahkamasi hujjatlari", "Акты Кабинета Министров"],
  ["ministry", "Vazirlik va idoralar hujjatlari", "Акты министерств и ведомств"],
  ["local", "Mahalliy hujjatlar", "Местные акты"],
  ["international", "Xalqaro hujjatlar", "Международные документы"],
].map(([id, uz, ru]) => ({ id, uz, ru }));

const STATUSES = [
  ["active", "Amalda", "Действует"],
  ["repealed", "O'z kuchini yo'qotgan", "Утратил силу"],
  ["amended", "Qisman o'zgartirilgan", "Частично изменён"],
  ["new_edition", "Yangi tahrirda", "В новой редакции"],
  ["pending", "Kuchga kirishi kutilmoqda", "Ожидает вступления в силу"],
].map(([id, uz, ru]) => ({ id, uz, ru }));

/* Hujjat → turi va sohalari (mazmun bo'yicha). */
const DOC_INFO = {
  KONS: { type: "constitution", areas: ["constitutional", "electoral"] },
  MK: { type: "code", areas: ["labor", "social"] },
  OK: { type: "code", areas: ["family"] },
  FK: { type: "code", areas: ["civil", "business", "corporate", "ip"] },
  FK2: { type: "code", areas: ["civil", "consumer", "housing", "ip", "transport", "banking"] },
  JK: { type: "code", areas: ["criminal", "military"] },
  MJK: { type: "code", areas: ["administrative", "transport", "environmental", "migration"] },
  FPK: { type: "code", areas: ["civil_procedure", "judicial"] },
  JPK: { type: "code", areas: ["criminal_procedure", "judicial"] },
  JIK: { type: "code", areas: ["criminal", "judicial"] },
  IPK: { type: "code", areas: ["economic", "business", "judicial"] },
  MSK: { type: "code", areas: ["administrative", "judicial"] },
  SK: { type: "code", areas: ["tax", "finance", "business"] },
  BJK: { type: "code", areas: ["customs", "finance", "business"] },
  BK: { type: "code", areas: ["finance"] },
  YK: { type: "code", areas: ["land", "environmental"] },
  UJK: { type: "code", areas: ["housing"] },
  SHK: { type: "code", areas: ["land", "housing"] },
  HK: { type: "code", areas: ["transport"] },
  SYK: { type: "code", areas: ["electoral", "constitutional"] },
  IHQ: { type: "law", areas: ["consumer", "civil"] },
};

/* lex.uz kartochkasidagi "Форма акта" → bizning tur (admin qo'shgan,
   DOC_INFO da yo'q hujjat uchun). */
function typeFromForm(form = "") {
  const f = form.toLowerCase();
  if (/конституц/.test(f)) return "constitution";
  if (/кодекс/.test(f)) return "code";
  if (/закон/.test(f)) return "law";
  if (/указ/.test(f)) return "decree";
  if (/постановлен/.test(f)) return "resolution";
  if (/распоряжен/.test(f)) return "order";
  if (/приказ/.test(f)) return "command";
  if (/положени/.test(f)) return "regulation";
  if (/инструкц/.test(f)) return "instruction";
  if (/регламент/.test(f)) return "rules";
  if (/конвенц|договор|соглашен/.test(f)) return "international";
  return "";
}

module.exports = { AREAS, DOC_TYPES, GROUPS, STATUSES, DOC_INFO, typeFromForm };
