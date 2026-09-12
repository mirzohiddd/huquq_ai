/**
 * DARSLAR MODULLARI — sahifadagi guruhlash uchun reyestr.
 *
 * NIMA UCHUN KERAK: darslar soni 130 dan oshdi. Yassi ro'yxatda
 * foydalanuvchi kerakli mavzuni topa olmaydi — 130 ta kartani
 * aylanib chiqish real emas. Endi ular modul bo'yicha guruhlanadi.
 *
 * ⚠️ NOM BU YERDA YO'Q — ataylab. Modul nomi tarjima faylidan
 * olinadi (`lesson_mod_<id>`), chunki u ikki tilda kerak. Bazada
 * ham faqat `category` id saqlanadi (`backend/models/index.js`),
 * shuning uchun nom AI tarjimasiga umuman tushmaydi va til
 * almashtirilganda bir zumda o'zgaradi.
 *
 * TARTIB — o'quv mantig'i bo'yicha: umumiy asoslardan (Konstitutsiya,
 * fuqarolik huquqi) aniq sohalarga, oxirida protsessual modullar.
 * Alifbo tartibi bu yerda noto'g'ri bo'lardi: yangi boshlovchi
 * "Bojxona" dan emas, "Konstitutsiya" dan boshlashi kerak.
 */
import {
  Landmark,
  Scale,
  FileText,
  Users,
  ScrollText,
  Briefcase,
  Home,
  ShoppingBag,
  Receipt,
  Building2,
  ShieldAlert,
  Gavel,
  Plane,
  BookOpen,
} from "lucide-react";

export const LESSON_MODULES = [
  { id: "constitution", Icon: Landmark },
  { id: "civil", Icon: Scale },
  { id: "contracts", Icon: FileText },
  { id: "family", Icon: Users },
  { id: "inheritance", Icon: ScrollText },
  { id: "labor", Icon: Briefcase },
  { id: "housing", Icon: Home },
  { id: "consumer", Icon: ShoppingBag },
  { id: "tax", Icon: Receipt },
  { id: "administrative", Icon: Building2 },
  { id: "criminal", Icon: ShieldAlert },
  { id: "process", Icon: Gavel },
  { id: "special", Icon: Plane },
];

/* Reyestrda yo'q (yoki modulsiz) darslar uchun zaxira guruh.
   Admin panelidan modulsiz dars qo'shilsa u yo'qolib qolmasligi
   kerak — shuning uchun "boshqa" guruhi har doim mavjud. */
export const OTHER_MODULE = { id: "other", Icon: BookOpen };

const BY_ID = new Map(LESSON_MODULES.map((m) => [m.id, m]));

export function moduleOf(categoryId) {
  return BY_ID.get(categoryId) || OTHER_MODULE;
}

/**
 * Darslarni modullar bo'yicha guruhlaydi.
 *
 * Natija REYESTR TARTIBIDA qaytadi (dars tartibida emas) — shunda
 * modullar har doim bir xil ketma-ketlikda ko'rinadi. Bo'sh modullar
 * tushirib qoldiriladi: bazada hali darsi yo'q modul sahifada bo'sh
 * sarlavha bo'lib turishi kerak emas.
 */
export function groupByModule(lessons) {
  const buckets = new Map();
  for (const lesson of lessons) {
    const id = BY_ID.has(lesson.category) ? lesson.category : OTHER_MODULE.id;
    if (!buckets.has(id)) buckets.set(id, []);
    buckets.get(id).push(lesson);
  }

  const ordered = [];
  for (const mod of [...LESSON_MODULES, OTHER_MODULE]) {
    const items = buckets.get(mod.id);
    if (items?.length) ordered.push({ ...mod, lessons: items });
  }
  return ordered;
}
