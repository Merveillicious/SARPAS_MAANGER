# Panduan Kontribusi

## Alur kerja

1. Ambil satu task dari Rencana Task (T01, T02, ...).
2. Buat branch per milestone: `feat/m<nomor>-<ringkas>`, misalnya `feat/m2-login`.
3. Kerjakan task sekecil mungkin. Satu task = satu commit (atau beberapa commit kecil).
4. Pastikan Definition of Done terpenuhi sebelum commit.
5. Push. Setelah milestone selesai, gabungkan ke `main`.

## Format pesan commit

Memakai [Conventional Commits](https://www.conventionalcommits.org/id/v1.0.0/):

```text
<jenis>(<cakupan>): <ringkasan singkat> [<ID task/kebutuhan>]

<penjelasan opsional: kenapa perubahan ini dibuat>
```

| Jenis      | Dipakai untuk                          |
| ---------- | -------------------------------------- |
| `feat`     | Fitur baru untuk pengguna              |
| `fix`      | Perbaikan bug                          |
| `chore`    | Pengaturan proyek, dependensi, alat    |
| `docs`     | Dokumentasi saja                       |
| `test`     | Menambah atau memperbaiki test         |
| `refactor` | Merapikan kode tanpa mengubah perilaku |
| `ci`       | Pipeline GitHub Actions                |

Contoh: `feat(inventaris): pindah ruangan atomik [T37, INV-03]`

## Definition of Done

Setiap commit harus:

- lulus `pnpm lint` dan `pnpm typecheck`;
- menyertakan test untuk logika yang ditambah, dan lulus `pnpm test`;
- menyertakan file migrasi bila skema database berubah;
- tidak memuat rahasia (token, kata sandi, API key);
- memenuhi kriteria penerimaan kebutuhan terkait.

## Rahasia dan variabel lingkungan

- Lokal: salin `apps/api/.dev.vars.example` menjadi `apps/api/.dev.vars`. File ini tidak ikut di-commit.
- Staging dan production: `pnpm -C apps/api exec wrangler secret put NAMA --env staging`.
- CI: GitHub Secrets.

## Aturan lapisan backend

Lihat [ADR-003](docs/adr/003-struktur-per-modul.md). ESLint akan menolak routes yang mengakses database dan service yang meng-import Hono.
