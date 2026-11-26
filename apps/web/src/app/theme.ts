/**
 * Warna aksen per modul (PRD bagian 8). Dipakai untuk kartu, ikon, dan menu
 * agar pengguna cepat mengenali sedang berada di modul mana.
 */
export const warnaModul = {
  dashboard: "sky",
  inventaris: "sky",
  gudang: "mint",
  ruangan: "lavender",
  gtk: "lavender",
  kerusakan: "peach",
  perbaikan: "peach",
  inspeksi: "butter",
  pengingat: "butter",
  permintaan: "pink",
  distribusi: "pink",
  peminjaman: "pink",
} as const;

export type WarnaPastel = (typeof warnaModul)[keyof typeof warnaModul];

/** Kelas Tailwind lengkap per warna (ditulis utuh agar terdeteksi Tailwind). */
export const kelasPastel: Record<WarnaPastel, string> = {
  sky: "bg-sky text-sky-ink",
  mint: "bg-mint text-mint-ink",
  lavender: "bg-lavender text-lavender-ink",
  peach: "bg-peach text-peach-ink",
  butter: "bg-butter text-butter-ink",
  pink: "bg-pink text-pink-ink",
};
