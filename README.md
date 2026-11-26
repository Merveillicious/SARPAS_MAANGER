# SARPRAS MANAGER

Sistem manajemen sarana dan prasarana untuk SDN Sukomanunggal III/107 Surabaya. Aplikasi web berjalan penuh di paket gratis Cloudflare (Workers, D1, R2), tanpa server milik sekolah.

## Struktur repo

```text
apps/web        Frontend: React + Vite + Tailwind + shadcn/ui
apps/api        Backend: Hono di Cloudflare Workers (juga melayani frontend)
packages/shared Skema Zod, tipe, dan enum yang dipakai frontend dan backend
packages/config Konfigurasi TypeScript, ESLint, dan Prettier bersama
docs/           ADR (catatan keputusan arsitektur) dan panduan
```

## Prasyarat

- Node.js 22 atau lebih baru
- pnpm 10 (`corepack enable` lalu `corepack prepare pnpm@10.28.0 --activate`)

## Menjalankan secara lokal

```bash
pnpm install
pnpm dev
```

Detail tiap aplikasi ada di README masing-masing folder. Konvensi commit dan alur kerja ada di [CONTRIBUTING.md](CONTRIBUTING.md).

## Dokumen

PRD, audit teknis, arsitektur kode, dan rencana task disimpan di dokumen PRD SARPRAS MANAGER.
