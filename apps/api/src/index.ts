import { buatApp } from "./app";

const app = buatApp();

export default {
  fetch: app.fetch,
} satisfies ExportedHandler<Env>;

export type { ApiType } from "./app";
