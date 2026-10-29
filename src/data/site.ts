/**
 * Konvensi nama SEO: "Nama Objek Wisata + Kota + Panduan Wisata".
 * Dipakai sebagai judul situs (site name), og:site_name, serta akhiran judul subhalaman.
 *
 * Catatan identitas (diperbarui 28 Oktober 2026):
 * - Nama formal: Monumen Tragedi Kemanusiaan.
 * - Nama yang paling sering dicari/publik: Monumen Ground Zero Bali.
 * Keduanya merujuk pada monumen peringatan di Jalan Legian, Kuta, Badung, Bali.
 */
export const SITE_NAME = "Monumen Ground Zero Bali (Monumen Tragedi Kemanusiaan), Kuta — Panduan Wisata";

/** Tambahkan akhiran " | <SITE_NAME>" untuk judul subhalaman. */
export function withSiteName(suffix: string): string {
  return `${suffix} | ${SITE_NAME}`;
}

/** Nama formal dan nama umum monumen (sumber: Google Maps & narasi pariwisata Indonesia). */
export const MONUMENT_NAME = "Monumen Ground Zero Bali";
export const MONUMENT_FORMAL_NAME = "Monumen Tragedi Kemanusiaan";
export const MONUMENT_ALTERNATE_NAMES = [
  "Monumen Tragedi Kemanusiaan",
  "Monumen Ground Zero",
  "Ground Zero Bali",
  "Bali Bombing Memorial",
  "Monumen Peringatan Bom Bali",
];

/** Ringkasan penilaian publik (Google Maps) per 28 Oktober 2026 — hanya snapshot, bukan klaim pengelola. */
export const RATING_VALUE = 4.6;
export const RATING_COUNT = 8553;
export const RATING_LABEL = "4,6 / 5 · 8.553 ulasan publik";
export const RATING_CHECKED = "Google Maps · 28 Oktober 2026";

/** Alamat & koordinat monumen (sumber: Google Maps, 28 Oktober 2026). */
export const MONUMENT_ADDRESS = "Jalan Legian, Kuta, Kabupaten Badung, Bali 80361, Indonesia";
export const MONUMENT_MAP_URL = "https://maps.app.goo.gl/bDpUD87WwVCXub8B9";
export const MONUMENT_LAT = -8.7172698;
export const MONUMENT_LNG = 115.17449;
export const MONUMENT_PLUS_CODE = "75MF+3Q Kuta, Bali";
