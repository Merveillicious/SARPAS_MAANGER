# ADR-003: Struktur kode per modul dan tiga lapisan backend

**Status:** Diterima · **Tanggal:** 2026-11-27

## Konteks

PRD punya 15 modul. Struktur per jenis file (semua controller di satu folder, semua model di folder lain) membuat satu fitur tersebar di banyak tempat.

## Keputusan

- Frontend: `apps/web/src/features/<modul>/` berisi pages, components, hooks, dan api.ts milik modul itu.
- Backend: `apps/api/src/modules/<modul>/` berisi tiga lapisan:
  1. `*.routes.ts`: HTTP tipis (validasi input, panggil service, kirim respons). Dilarang mengakses database.
  2. `*.service.ts`: aturan bisnis. Dilarang bergantung pada Hono.
  3. `*.repository.ts`: satu-satunya tempat query Drizzle.
- Modul boleh memanggil service modul lain, tidak boleh memanggil repository modul lain.

## Konsekuensi

- Larangan lapisan ditegakkan otomatis oleh ESLint (`packages/config/eslint.js`).
- Service bisa diuji tanpa menjalankan server HTTP.
- Sedikit lebih banyak file per modul, sebagai harga untuk keterbacaan jangka panjang.
