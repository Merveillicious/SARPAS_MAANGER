import type { KodeError } from "@sarpras/shared";

const STATUS_PER_KODE: Record<KodeError, 400 | 401 | 403 | 404 | 409 | 429 | 500> = {
  VALIDASI_GAGAL: 400,
  TIDAK_TERAUTENTIKASI: 401,
  AKSES_DITOLAK: 403,
  TIDAK_DITEMUKAN: 404,
  KONFLIK: 409,
  TERLALU_BANYAK_PERMINTAAN: 429,
  KESALAHAN_SERVER: 500,
};

/**
 * Error yang sengaja dilempar oleh service, misalnya `new AppError("AKSES_DITOLAK",
 * "Anda tidak bisa membuka laporan milik orang lain")`. Pesannya aman ditampilkan
 * ke pengguna. Error lain yang tidak terduga selalu dijawab pesan umum.
 */
export class AppError extends Error {
  readonly kode: KodeError;
  readonly status: (typeof STATUS_PER_KODE)[KodeError];
  readonly detail?: unknown;

  constructor(kode: KodeError, pesan: string, detail?: unknown) {
    super(pesan);
    this.name = "AppError";
    this.kode = kode;
    this.status = STATUS_PER_KODE[kode];
    this.detail = detail;
  }
}
