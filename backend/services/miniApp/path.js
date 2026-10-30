"use strict";
/**
 * O'QUV YO'LI — «Hayotiy asoslar» (qo'lda yozilgan) va saytdagi darslardan
 * qurilgan kurslar uchun BIR XIL shakl: bo'lim → darslar → sandiq → imtihon.
 *
 * Qoidalar:
 *  - kurs ichida darslar ketma-ket ochiladi; keyingi bo'lim faqat imtihondan
 *    o'tilgach ochiladi (natijaga chiqish);
 *  - TARIF: har bir kursning 1-bo'limi bepul, qolgan hamma bo'lim —
 *    Basic/Pro/Premium bilan (`paywall`). Tarif tugasa tugatilgan darslar
 *    ham qayta ochilmaydi (kontent tarifga bog'liq);
 *  - yo'lda FAQAT saytdagi darslardan qurilgan kurslar (2026-10-30):
 *    qo'lda yozilgan «Hayotiy asoslar» (8 bo'lim) ro'yxatdan olib tashlandi.
 *    Uning kodi qoldirildi — eski progress/takrorlash kalitlari buzilmasin;
 *  - sandiq — bo'limning 3-darsidan keyin, bir marta bonus XP.
 */
const content = require("./content");

const FREE_UNIT = content.UNITS[0].key; // «Hayotiy asoslar» (yo'lda ko'rinmaydi)
const CHEST_AT = 3; // sandiq shu darsdan keyin
const BASIC_EXAM_PASS = 4; // «Hayotiy asoslar» imtihoni: 5 savoldan 4 tasi

/** Bo'limlar ro'yxati (bir kurs) → holatli yo'l. */
function walk(units, doc, paid) {
  let open = true;
  return units.map((u) => {
    const paywall = !paid && u.key !== FREE_UNIT && u.n !== 1; // har kursning 1-bo'limi bepul
    const lessons = u.lessons.map((l) => {
      const done = !!doc.lessons?.[l.id];
      const status = done ? "done" : open && !paywall ? "open" : "locked";
      if (!done) open = false;
      return { id: l.id, title: l.title, status };
    });
    const chestReady = lessons.slice(0, CHEST_AT).every((l) => l.status === "done");
    const chest = lessons.length > CHEST_AT ? { at: CHEST_AT, status: doc.chests?.[u.key] ? "done" : chestReady && !paywall ? "open" : "locked" } : null;
    const passed = doc.exams?.[u.key];
    const exam = { status: passed ? "done" : open && !paywall ? "open" : "locked", score: passed?.score ?? null, total: passed?.total ?? null };
    if (!passed) open = false;
    return { key: u.key, title: u.title, level: u.level, icon: u.icon, n: u.n, paywall, lessons, chest, exam };
  });
}

const basicsUnits = () =>
  content.UNITS.map((u, i) => ({ ...u, n: i + 1, lessons: content.LESSONS.filter((l) => l.unit === u.key) }));

const courseUnits = (s, key) =>
  (s.courses.find((c) => c.key === key)?.units || []).map((u) => ({ ...u, lessons: u.lessons.map((id) => s.lessons.get(id)) }));

/** @param {string} course "basics" yoki kurs kaliti */
function pathOf(doc, { course = "basics", paid = false, s = null } = {}) {
  return walk(course === "basics" ? basicsUnits() : courseUnits(s, course), doc, paid);
}

/** Kurslar ro'yxati: nomi, bo'lim/dars soni, nechtasi tugatilgan. */
function coursesOf(doc, s) {
  const count = (ids) => ids.filter((id) => doc.lessons?.[id]).length;
  return s.courses.map((c) => {
    const ids = c.units.flatMap((u) => u.lessons);
    return { key: c.key, title: c.title, icon: c.icon, units: c.units.length, lessons: ids.length, done: count(ids) };
  });
}

/** Dars/imtihon qaysi kurs va bo'limda — yo'l holati bilan. */
function locate(doc, { unitKey, lessonId, paid, s }) {
  const course = content.UNITS.some((u) => u.key === unitKey) || content.lessonById.has(lessonId)
    ? "basics"
    : s.unitByKey.get(unitKey)?.course || s.unitByKey.get(s.lessons.get(lessonId)?.unit)?.course;
  if (!course) return null;
  const units = pathOf(doc, { course, paid, s });
  const unit = units.find((u) => u.key === unitKey || u.lessons.some((l) => l.id === lessonId));
  return unit && { course, unit, units, lesson: unit.lessons.find((l) => l.id === lessonId) || null };
}

/** Darsni ochish mumkinmi: yo'q bo'lsa — sababi ("plan" | "order"). */
function lessonAccess(doc, lessonId, paid, s) {
  const at = locate(doc, { lessonId, paid, s });
  if (!at?.lesson) return { ok: false, why: "order" };
  if (at.unit.paywall) return { ok: false, why: "plan" };
  return { ok: at.lesson.status !== "locked", why: "order", at };
}

/** Kursdagi keyingi dars (bo'lim imtihoni navbatda bo'lsa — null). */
function nextAfter(at, lessonId) {
  const flat = at.units.flatMap((u) => u.lessons.map((l) => ({ id: l.id, unit: u.key })));
  const i = flat.findIndex((x) => x.id === lessonId);
  return flat[i + 1] || null;
}

module.exports = { FREE_UNIT, CHEST_AT, BASIC_EXAM_PASS, pathOf, coursesOf, locate, lessonAccess, nextAfter };
