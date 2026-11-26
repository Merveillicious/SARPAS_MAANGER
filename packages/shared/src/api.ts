/**
 * Kontrak respons error API (NF-15). Semua error dari backend memakai bentuk ini,
 * sehingga frontend cukup punya satu cara menampilkan pesan error.
 */
export type KodeError =
  | "VALIDASI_GAGAL"
  | "TIDAK_TERAUTENTIKASI"
  | "AKSES_DITOLAK"
  | "TIDAK_DITEMUKAN"
  | "KONFLIK"
  | "TERLALU_BANYAK_PERMINTAAN"
  | "KESALAHAN_SERVER";

export interface ResponsError {
  kode: KodeError;
  /** Pesan dalam Bahasa Indonesia yang aman ditampilkan ke pengguna. */
  pesan: string;
  /** Disebutkan pengguna saat melapor masalah, agar log mudah dilacak. */
  requestId: string;
  /** Rincian tambahan, misalnya kolom form mana yang tidak valid. */
  detail?: unknown;
}
