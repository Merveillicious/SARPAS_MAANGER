import { Hono } from "hono";
import type { AppEnv } from "./types";
import { requestContext } from "./middleware/request-context";
import { errorHandler, notFoundHandler } from "./middleware/error-handler";

export function buatApp() {
  const app = new Hono<AppEnv>().basePath("/api/v1");

  app.use("*", requestContext);
  app.onError(errorHandler);
  app.notFound(notFoundHandler);

  // Cek kesehatan sederhana: dipakai untuk memastikan Worker hidup setelah deploy.
  app.get("/kesehatan", (c) =>
    c.json({
      status: "ok",
      lingkungan: c.env.APP_ENV,
      waktu: new Date().toISOString(),
    }),
  );

  return app;
}

export type ApiType = ReturnType<typeof buatApp>;
