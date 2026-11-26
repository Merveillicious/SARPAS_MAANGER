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

export default app;
export type ApiType = typeof app;
