# ADR-002: Frontend dan API dalam satu Worker

**Status:** Diterima · **Tanggal:** 2026-11-27

## Konteks

Frontend bisa di-hosting terpisah (misalnya Cloudflare Pages) atau dilayani oleh Worker yang sama dengan API. Domain yang berbeda membutuhkan pengaturan CORS dan cookie lintas domain.

## Keputusan

Satu Worker melayani keduanya. Hasil build `apps/web/dist` dilayani sebagai static assets; request `/api/*` selalu masuk ke kode Worker (`run_worker_first`); URL lain yang tidak cocok dengan file dikembalikan ke `index.html` agar routing React berjalan.

## Konsekuensi

- Satu domain: tidak perlu CORS, cookie sesi bisa `SameSite=Strict`.
- Satu deploy untuk satu rilis.
- Kode tetap terpisah di `apps/web` dan `apps/api`; pemisahan hanya terjadi di tingkat folder, tidak di tingkat hosting.
- Request ke file statis tidak menghabiskan kuota CPU Worker.
