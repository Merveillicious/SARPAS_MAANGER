# ADR-005: Istilah domain bahasa Indonesia, istilah teknis bahasa Inggris

**Status:** Diterima · **Tanggal:** 2026-11-27

## Konteks

PRD dan pengguna memakai istilah Indonesia (inventaris, ruangan, laporan kerusakan). Kerangka kerja dan pola arsitektur memakai istilah Inggris (service, repository, middleware).

## Keputusan

- Nama entitas, tabel, kolom, modul, dan nilai enum: bahasa Indonesia, sama dengan PRD (`laporan_kerusakan`, `kondisiBarang`, `rusak_berat`).
- Nama lapisan dan konsep teknis: bahasa Inggris (`inventaris.service.ts`, `requestId`, `middleware/`).
- Pesan yang dilihat pengguna: selalu bahasa Indonesia.

## Konsekuensi

- Kode mudah dicocokkan dengan PRD dan kriteria penerimaan.
- Ada campuran dua bahasa yang disengaja; aturan di atas menentukan kapan memakai yang mana.
