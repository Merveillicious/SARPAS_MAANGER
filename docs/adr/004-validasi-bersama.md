# ADR-004: Validasi Zod bersama di packages/shared

**Status:** Diterima · **Tanggal:** 2026-11-27

## Konteks

Aturan input (kolom wajib, panjang maksimum, nilai enum) harus sama di form frontend dan di API. Kalau ditulis dua kali, cepat atau lambat keduanya berbeda.

## Keputusan

Skema Zod, enum, dan tipe ditulis sekali di `packages/shared` lalu di-import oleh frontend (validasi form) dan backend (validasi request).

## Konsekuensi

- Satu sumber kebenaran untuk aturan input.
- Backend tetap memvalidasi ulang setiap request; validasi frontend hanya untuk kenyamanan pengguna.
- `packages/shared` tidak boleh meng-import kode khusus browser atau khusus Workers.
