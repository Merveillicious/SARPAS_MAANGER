# ADR-001: Monorepo pnpm workspaces

**Status:** Diterima · **Tanggal:** 2026-11-27

## Konteks

Aplikasi terdiri dari frontend (React), backend (Hono di Workers), dan kode bersama (skema validasi, enum). Pengembangnya satu orang, dan frontend serta backend selalu dirilis bersamaan.

## Keputusan

Satu repositori dengan pnpm workspaces: `apps/web`, `apps/api`, `packages/shared`, `packages/config`. Tidak memakai Turborepo atau Nx.

## Konsekuensi

- Perubahan yang menyentuh frontend dan backend masuk dalam satu commit dan satu pull request.
- Kode bersama dipakai langsung tanpa publish ke npm.
- Kalau build mulai lambat karena paket bertambah, Turborepo bisa ditambahkan tanpa mengubah struktur folder.
