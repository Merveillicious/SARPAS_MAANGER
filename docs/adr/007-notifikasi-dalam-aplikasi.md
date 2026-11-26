# ADR-007: Notifikasi hanya di dalam aplikasi, tanpa Telegram

**Status:** Diterima · **Tanggal:** 2026-11-27

## Konteks

Rancangan awal memakai bot Telegram untuk ringkasan harian dan peringatan error. Pemilik produk memutuskan Telegram tidak diperlukan.

## Keputusan

- Semua notifikasi dan pengingat tampil di dalam aplikasi (ikon lonceng dan daftar "Perlu tindakan" di dashboard).
- Tugas cron harian tetap berjalan, tapi hasilnya ditulis sebagai baris notifikasi di database, bukan dikirim ke luar.
- Ringkasan error dan peringatan kuota (temuan AU-01 dan AU-16) tampil di panel khusus Admin.

## Konsekuensi

- Tidak ada token bot yang harus disimpan dan dijaga.
- Pengguna baru tahu ada pengingat saat membuka aplikasi. Kalau nanti butuh notifikasi saat aplikasi tertutup, Web Push (lewat PWA) bisa ditambahkan tanpa layanan pihak ketiga.
