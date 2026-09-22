/**
 * Konvensi nama SEO: "Nama Objek Wisata + Kota + Panduan Wisata".
 * Dipakai sebagai judul situs (site name), og:site_name, serta akhiran judul subhalaman.
 */
export const SITE_NAME = "Monumen Ground Zero Bali, Kuta — Panduan Wisata";

/** Tambahkan akhiran " | <SITE_NAME>" untuk judul subhalaman. */
export function withSiteName(suffix: string): string {
  return `${suffix} | ${SITE_NAME}`;
}
