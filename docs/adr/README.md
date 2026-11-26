# Architecture Decision Records (ADR)

ADR adalah catatan singkat tentang keputusan arsitektur: apa yang diputuskan, kenapa, dan apa konsekuensinya. Tujuannya agar petugas atau pengembang berikutnya paham alasan di balik struktur kode tanpa harus menebak.

Aturan: ADR yang sudah diterima tidak diedit isinya. Kalau keputusan berubah, buat ADR baru yang menggantikannya dan ubah status ADR lama menjadi "Digantikan oleh ADR-xxx".

| No                                      | Judul                                                          | Status   |
| --------------------------------------- | -------------------------------------------------------------- | -------- |
| [001](001-monorepo-pnpm.md)             | Monorepo pnpm workspaces                                       | Diterima |
| [002](002-satu-worker.md)               | Frontend dan API dalam satu Worker                             | Diterima |
| [003](003-struktur-per-modul.md)        | Struktur kode per modul dan tiga lapisan backend               | Diterima |
| [004](004-validasi-bersama.md)          | Validasi Zod bersama di packages/shared                        | Diterima |
| [005](005-bahasa-penamaan.md)           | Istilah domain bahasa Indonesia, istilah teknis bahasa Inggris | Diterima |
| [006](006-id-ulid.md)                   | ID memakai ULID                                                | Diterima |
| [007](007-notifikasi-dalam-aplikasi.md) | Notifikasi hanya di dalam aplikasi, tanpa Telegram             | Diterima |
