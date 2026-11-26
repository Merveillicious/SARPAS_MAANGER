import { Hono } from "hono";
import type { AppEnv } from "./types";
import { requestContext } from "./middleware/request-context";

export function buatApp() {
  const app = new Hono<AppEnv>().basePath("/api/v1");

  app.use("*", requestContext);

  // Cek kesehatan sederhana: dipakai untuk memastikan Worker hidup setelah deploy.
  app.get("/kesehatan", (c) =>
    c.json({
      status: "ok",
      lingkungan: c.env.APP_ENV,
      waktu: new Date().toISOString(),
    }),
  );

  // Rute API yang tidak dikenal dijawab JSON, bukan halaman HTML frontend.
  app.notFound((c) => c.json({ kode: "TIDAK_DITEMUKAN", pesan: "Alamat API tidak ditemukan" }, 404));

  return app;
}

export type ApiType = ReturnType<typeof buatApp>;
