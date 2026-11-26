import { z } from "zod";

/** Peran pengguna (PRD bagian 3). */
export const PERAN = [
  "admin",
  "koordinator",
  "kepala_sekolah",
  "guru_pegawai",
  "petugas_gudang",
  "pemantau",
] as const;
export const peranSchema = z.enum(PERAN);
export type Peran = z.infer<typeof peranSchema>;

export const LABEL_PERAN: Record<Peran, string> = {
  admin: "Administrator",
  koordinator: "Koordinator Sarpras",
  kepala_sekolah: "Kepala Sekolah",
  guru_pegawai: "Guru dan Pegawai",
  petugas_gudang: "Petugas Gudang",
  pemantau: "Pemantau",
};

/** Kondisi barang inventaris (INV-02). */
export const KONDISI_BARANG = [
  "baik",
  "rusak_ringan",
  "rusak_sedang",
  "rusak_berat",
  "tidak_dapat_digunakan",
  "dalam_perbaikan",
  "dihapuskan",
] as const;
export const kondisiBarangSchema = z.enum(KONDISI_BARANG);
export type KondisiBarang = z.infer<typeof kondisiBarangSchema>;

export const LABEL_KONDISI_BARANG: Record<KondisiBarang, string> = {
  baik: "Baik",
  rusak_ringan: "Rusak ringan",
  rusak_sedang: "Rusak sedang",
  rusak_berat: "Rusak berat",
  tidak_dapat_digunakan: "Tidak dapat digunakan",
  dalam_perbaikan: "Dalam perbaikan",
  dihapuskan: "Dihapuskan",
};

/** Status laporan kerusakan (LK-02). */
export const STATUS_LAPORAN_KERUSAKAN = [
  "baru",
  "sedang_diperiksa",
  "menunggu_penanganan",
  "dalam_perbaikan",
  "selesai",
  "tidak_dapat_ditindaklanjuti",
] as const;
export const statusLaporanKerusakanSchema = z.enum(STATUS_LAPORAN_KERUSAKAN);
export type StatusLaporanKerusakan = z.infer<typeof statusLaporanKerusakanSchema>;

/** Tingkat urgensi laporan dan prioritas pekerjaan. */
export const URGENSI = ["rendah", "sedang", "tinggi", "darurat"] as const;
export const urgensiSchema = z.enum(URGENSI);
export type Urgensi = z.infer<typeof urgensiSchema>;
