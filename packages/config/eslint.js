// Konfigurasi ESLint bersama untuk seluruh workspace.
// Aturan lapisan (routes -> service -> repository) ditegakkan di sini
// supaya pelanggaran ketahuan saat lint, bukan saat review.
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
  {
    ignores: ["**/dist/**", "**/.wrangler/**", "**/coverage/**", "**/worker-configuration.d.ts"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/consistent-type-imports": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
  {
    // Routes tidak boleh menyentuh database secara langsung.
    files: ["apps/api/src/**/*.routes.ts"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["**/db/**", "drizzle-orm", "drizzle-orm/*"],
              message: "Routes hanya memanggil service. Query database ada di repository.",
            },
            { group: ["**/*.repository"], message: "Routes hanya memanggil service, bukan repository." },
          ],
        },
      ],
    },
  },
  {
    // Service tidak boleh bergantung pada Hono/HTTP agar mudah diuji.
    files: ["apps/api/src/**/*.service.ts"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["hono", "hono/*"],
              message: "Service tidak boleh bergantung pada Hono. Terima data biasa, kembalikan data biasa.",
            },
          ],
        },
      ],
    },
  },
);
