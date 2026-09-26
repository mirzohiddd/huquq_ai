import React from "react";
import { useLang } from "../context/LangContext";
import Library from "./Library";

/**
 * QONUNCHILIK HUJJATLARI — O'zbekistonning protsessual kodekslari.
 *
 * Alohida sahifa, lekin kutubxona mantig'i NUSXALANMADI: `Library`
 * komponenti `codes` ro'yxati bilan ishlatiladi. Moddalar o'sha
 * `LegalChunk` bazasidan keladi (lex.uz'dan har 24 soatda yangilanadi)
 * va AI yordamchi ham aynan shu matnlardan javob topadi.
 *
 * Tartib — sud tizimi bo'yicha: fuqarolik, jinoyat, iqtisodiy, ma'muriy
 * sud ishlari, oxirida jazoni ijro etish tartibi (Jinoyat-ijroiya kodeksi).
 */
const PROCEDURAL_CODES = ["FPK", "JPK", "IPK", "MSK", "JIK"];

export default function Legislation() {
  const { t } = useLang();
  return <Library codes={PROCEDURAL_CODES} title={t.legis_title} sub={t.legis_sub} />;
}
