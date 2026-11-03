# Peta Modul Proyek
Dokumen ini memetakan seluruh berkas yang ada di dalam direktori `src/` dan `public/`, beserta tanggung jawab utama dan fungsi publik (ekspor) yang disediakan oleh masing-masing berkas.

## Direktori `public/`

Direktori ini berisi aset-aset statis yang tidak diproses oleh *bundler* (seperti Webpack atau Vite) dan akan disajikan langsung ke peramban.

| Berkas | Tanggung Jawab | Daftar Fungsi/Ekspor Publik |
| :--- | :--- | :--- |
| `public/index.php` | Titik masuk (entry point) utama PHP untuk aplikasi. | N/A (Berkas statis) |
| `public/_form.php` | menampilkan form untuk input dan edit. | N/A (Berkas statis) |
| `public/cetak.php` | Untuk cetak tanda pedaftaran masing2 peserta. | N/A (Berkas statis) |
---
| `public/hapus.php` | Untuk menghapus data peserta. | N/A (Berkas statis) |
---
| `public/login.php` | Titik masuk (entry point) utama PHP untuk aplikasi. | N/A (Berkas statis) |
---
| `public/logout.php` | Titik masuk (entry point) utama PHP untuk aplikasi. | N/A (Berkas statis) |
---
| `public/tambah.php` | Titik masuk (entry point) utama PHP untuk aplikasi. | N/A (Berkas statis) |
---
| `public/ubah.php` | Titik masuk (entry point) utama PHP untuk aplikasi. | N/A (Berkas statis) |
---

## Direktori `src/`

Direktori ini berisi seluruh kode sumber utama aplikasi (logika, komponen, utilitas, dan gaya) yang akan dikompilasi sebelum dipublikasikan.

| `public/auth.php` | berisi fungsi untuk autentifikasii. | N/A (Berkas statis) |

| `public/bootstrap.php` | memastikan kelengkapan kebutuhan aplikasi. | N/A (Berkas statis) |

| `public/heplers.php` | berisi fungsi untuk  keamanan dan kebutuhan dasar aplikasi. | N/A (Berkas statis) |

| `public/pendaftar.php` | berisi fungsi untuk manajemen pendaftar. | N/A (Berkas statis) |

> **Catatan untuk Pengembang:** Silakan perbarui tabel di atas jika ada penambahan berkas baru, perubahan nama fungsi, atau refaktor kode untuk memastikan dokumentasi ini selalu relevan dengan *codebase* terkini.