import type { ErrorHandler, NotFoundHandler } from "hono";
import { HTTPException } from "hono/http-exception";
import { ZodError } from "zod";
import type { ResponsError } from "@sarpras/shared";
import type { AppEnv } from "../types";
import { AppError } from "../lib/errors";

/**
 * Penangan error global (NF-15). Mengubah semua jenis error menjadi satu
 * format `ResponsError`. Pesan teknis dan stack trace hanya masuk log,
 * tidak pernah dikirim ke pengguna.
 */
export const errorHandler: ErrorHandler<AppEnv> = (err, c) => {
  const requestId = c.get("requestId") ?? "tidak-diketahui";
  const logger = c.get("logger");

  if (err instanceof AppError) {
    const body: ResponsError = { kode: err.kode, pesan: err.message, requestId, detail: err.detail };
    return c.json(body, err.status);
  }

  if (err instanceof ZodError) {
    const body: ResponsError = {
      kode: "VALIDASI_GAGAL",
      pesan: "Data yang dikirim belum sesuai. Periksa kembali isian yang ditandai.",
      requestId,
      detail: err.issues.map((i) => ({ kolom: i.path.join("."), pesan: i.message })),
    };
    return c.json(body, 400);
  }

  if (err instanceof HTTPException && err.status < 500) {
    const body: ResponsError = {
      kode: "VALIDASI_GAGAL",
      pesan: err.message || "Permintaan tidak valid",
      requestId,
    };
    return c.json(body, err.status);
  }

  logger?.error("error tidak tertangani", { nama: err.name, pesanError: err.message, stack: err.stack });
  const body: ResponsError = {
    kode: "KESALAHAN_SERVER",
    pesan: "Terjadi kesalahan di server. Coba lagi beberapa saat lagi.",
    requestId,
  };
  return c.json(body, 500);
};

export const notFoundHandler: NotFoundHandler<AppEnv> = (c) => {
  const body: ResponsError = {
    kode: "TIDAK_DITEMUKAN",
    pesan: "Alamat API tidak ditemukan",
    requestId: c.get("requestId") ?? "tidak-diketahui",
  };
  return c.json(body, 404);
};
