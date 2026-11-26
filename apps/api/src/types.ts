import type { Logger } from "./lib/logger";

/** Tipe lingkungan Hono yang dipakai seluruh aplikasi API. */
export type AppEnv = {
  Bindings: Env;
  Variables: {
    requestId: string;
    logger: Logger;
  };
};
