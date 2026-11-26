import { Hono } from "hono";

export type AppEnv = { Bindings: Env };

const app = new Hono<AppEnv>().basePath("/api/v1");

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

export default app;
export type ApiType = typeof app;
