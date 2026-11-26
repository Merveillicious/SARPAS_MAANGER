# ADR-006: ID memakai ULID

**Status:** Diterima · **Tanggal:** 2026-11-27

## Konteks

ID angka berurutan (1, 2, 3, ...) mudah ditebak. Pengguna bisa mencoba mengganti ID di URL untuk membuka data orang lain (IDOR, temuan audit AU-06).

## Keputusan

Semua tabel memakai ID bertipe teks berformat ULID (26 karakter, contoh `01JDQ5M8X2...`). ULID tidak bisa ditebak dan tetap terurut sesuai waktu pembuatan.

## Konsekuensi

- Menebak ID tidak lagi praktis. Pengecekan kepemilikan data di service tetap wajib; ULID hanya lapisan tambahan.
- Urutan data bisa dilihat dari ID tanpa kolom tambahan.
- ID lebih panjang daripada angka. Untuk 60 pengguna dan puluhan ribu baris, dampaknya pada ukuran database bisa diabaikan.
- Nomor yang dibaca manusia (nomor inventaris, nomor laporan) tetap dibuat terpisah dari ID.
