import { createMiddleware } from "hono/factory";
import type { AppEnv } from "../types";
import { buatLogger } from "../lib/logger";

/**
 * Memberi setiap request sebuah `requestId` dan logger, lalu mencatat satu
 * baris ringkasan (rute, status, durasi) setelah request selesai.
 * `requestId` dikirim balik di header `X-Request-Id` agar pengguna bisa
 * menyebutkannya saat melapor masalah.
 */
export const requestContext = createMiddleware<AppEnv>(async (c, next) => {
  const requestId = c.req.header("x-request-id") ?? crypto.randomUUID();
  const logger = buatLogger({ requestId, lingkungan: c.env.APP_ENV });
  c.set("requestId", requestId);
  c.set("logger", logger);

  const mulai = Date.now();
  await next();

  c.header("X-Request-Id", requestId);
  const status = c.res.status;
  const data = { metode: c.req.method, rute: c.req.path, status, durasiMs: Date.now() - mulai };
  if (status >= 500) logger.error("request selesai", data);
  else if (status >= 400) logger.warn("request selesai", data);
  else logger.info("request selesai", data);
});
