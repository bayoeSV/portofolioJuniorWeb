# Panduan Instalasi Sistem Pendaftaran Pelatihan

Dokumen ini berisi panduan langkah demi langkah untuk menginstal dan menjalankan Sistem Pendaftaran Pelatihan di lingkungan lokal (*localhost*).

## Persyaratan Sistem

Sebelum memulai instalasi, pastikan sistem/komputer Anda sudah terpasang perangkat lunak berikut:
- **Web Server lokal:** XAMPP, Laragon, atau sejenisnya.
- **PHP:** Versi 8.1 atau yang lebih baru.
- **Database:** MySQL atau MariaDB.
- **Composer:** Pengelola paket (*package manager*) untuk PHP.

---

## Langkah-langkah Instalasi

### 1. Salin Proyek ke Direktori Web Server
Pindahkan atau *clone* direktori proyek ini ke dalam folder *document root* web server Anda.
- Jika menggunakan **XAMPP**: letakkan di dalam folder `C:\xampp\htdocs\pendaftaran`.
- Jika menggunakan **Laragon**: letakkan di dalam folder `C:\laragon\www\pendaftaran`.

### 2. Persiapan Database
Anda perlu membuat wadah database terlebih dahulu dan mengimpor struktur tabelnya:
1. Buka aplikasi pengelola database seperti **phpMyAdmin** (biasanya di `http://localhost/phpmyadmin`) atau DBeaver.
2. Buat database baru (misalnya dengan nama `db_pelatihan`).
3. Impor berkas skema database proyek dengan memilih menu **Import** dan mengunggah berkas `database/skema.sql`.

### 3. Konfigurasi Kredensial Database
Agar aplikasi dapat terhubung ke database, Anda perlu mengatur konfigurasinya:
1. Buka folder `config/` di dalam proyek.
2. Salin (atau ganti nama) berkas `config/config.contoh.php` menjadi `config/config.php`.
3. Buka berkas `config.php` menggunakan teks editor (seperti VS Code) dan sesuaikan isinya dengan kredensial database lokal Anda (biasanya *username* `root` dan *password* dikosongkan jika menggunakan XAMPP standar).

### 4. Instalasi Dependensi (Library Tambahan)
Proyek ini membutuhkan *library* pihak ketiga (seperti pembuat PDF) yang dikelola oleh Composer.
1. Buka terminal atau Command Prompt (CMD).
2. Arahkan terminal ke dalam folder proyek, contoh: `cd C:\xampp\htdocs\pendaftaran`
3. Jalankan perintah berikut:
   ```bash
   composer install
   ```
   *(Tunggu hingga Composer selesai mengunduh semua library ke dalam folder `vendor/`)*.

### 5. Pembuatan Akun Admin Pertama
Untuk bisa masuk (*login*) ke panel pengelola, Anda perlu membuat akun admin utama.
Masih di dalam terminal yang sama (di folder proyek), jalankan perintah *script* bawaan proyek:
```bash
php database/buat-admin.php admin SandiKuat123
```
*Catatan: Perintah di atas akan membuat pengguna dengan username `admin` dan kata sandi `SandiKuat123`.*

### 6. Jalankan Aplikasi
Instalasi selesai! Sekarang Anda bisa membuka aplikasi melalui *browser* (peramban) dengan mengunjungi URL berikut:
```text
http://localhost/pendaftaran/public/
```

---

## Tips Tambahan
Jika Anda ingin mencoba fitur pengelolaan pendaftar (seperti ubah, hapus, dan cetak PDF), Anda bisa masuk ke panel admin dengan mengakses:
`http://localhost/pendaftaran/public/login.php`
*(Gunakan kredensial akun admin yang baru saja Anda buat pada Langkah 5).*