# Spesifikasi Modul: Autentikasi Admin

**Informasi Umum**
| Keterangan | Detail |
| :--- | :--- |
| **ID Modul / Berkas** | `MOD-AUT-001` / `src/auth.php` |
| **Versi dan Status** | 1.0.0 / Aktif |
| **Penulis dan Tanggal** | Nama Peserta / 3 November 2026 |
| **Kegunaan** | Autentikasi admin berbasis sesi dan `password_hash` |
| **Dependensi** | `config/database.php`, `src/helpers.php` |

## Fungsi Publik
Berikut adalah daftar fungsi yang dapat dipanggil dari luar berkas ini:
- `cariAdmin()`
- `prosesLogin()`
- `wajibLogin()`
- `logout()`

## Catatan Keamanan
- Melakukan regenerasi sesi (*session regeneration*) saat login untuk mencegah serangan *Session Fixation*.
- Menggunakan pesan galat umum saat login gagal (misalnya "Username atau password salah") agar tidak membocorkan informasi akun yang valid.
- Proses *logout* wajib menggunakan metode `POST` dengan verifikasi token CSRF.

## Contoh Pemakaian
Pemanggilan fungsi untuk memproteksi halaman admin dari akses yang tidak sah:

```php
// Diletakkan pada baris paling awal di berkas/halaman admin
wajibLogin();