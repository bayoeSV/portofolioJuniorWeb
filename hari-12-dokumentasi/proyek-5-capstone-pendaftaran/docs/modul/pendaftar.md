# Spesifikasi Modul: Manajemen Pendaftar

**Informasi Umum**
| Keterangan | Detail |
| :--- | :--- |
| **ID Modul / Berkas** | `MOD-PND-001` / `src/pendaftar.php` |
| **Versi dan Status** | 1.0.0 / Aktif |
| **Penulis dan Tanggal** | Nama Peserta / 3 November 2026 |
| **Kegunaan** | Manajemen data pendaftar (CRUD), validasi input, pengambilan relasi kelas, dan pencarian data admin. |
| **Dependensi** | Objek `PDO` (Koneksi Database) |

## Fungsi Publik
Berikut adalah daftar fungsi yang diekspor dan dapat dipanggil dari luar berkas ini:
- `daftarKelas(PDO $pdo): array`
- `hitungPendaftar(PDO $pdo, string $kata): int`
- `ambilPendaftar(PDO $pdo, string $kata, int $batas, int $offset): array`
- `ambilPendaftarById(PDO $pdo, int $id): ?array`
- `emailSudahAda(PDO $pdo, string $email, ?int $kecualiId): bool`
- `validasiPendaftar(array $input, PDO $pdo, ?int $idUbah): array`
- `tambahPendaftar(PDO $pdo, array $d): bool`
- `ubahPendaftar(PDO $pdo, int $id, array $d): bool`
- `hapusPendaftar(PDO $pdo, int $id): bool`
- `ambilSemuaPendaftar(PDO $pdo): array`
- `ambilBuktiPendaftar(PDO $pdo, int $id): ?array`
- `ambilAdminById(PDO $pdo, int $id): ?array`
- `ambilAdminByUsername(PDO $pdo, string $username): ?array`

## Catatan Keamanan
- Seluruh eksekusi *query* database wajib menggunakan *Prepared Statements* (contoh: `$pdo->prepare()`) dengan *parameter binding* untuk mencegah kerentanan SQL Injection.
- Terdapat fungsi `validasiPendaftar()` yang membersihkan *whitespace* (menggunakan `trim`), melakukan validasi format email (`FILTER_VALIDATE_EMAIL`), dan memeriksa duplikasi email sebelum data dimasukkan ke dalam database.
- Tipe data balikan (*return type*) dan tipe data parameter dideklarasikan secara ketat (*strict types* aktif).

## Contoh Pemakaian
Pemanggilan fungsi untuk mengambil data pendaftar berdasarkan ID:

```php
// Mengambil detail pendaftar dengan ID 5
$pendaftar = ambilPendaftarById($pdo, 5);

if ($pendaftar) {
    echo "Nama: " . $pendaftar['nama'];
}
```

## Riwayat Revisi
| Versi | Tanggal | Perubahan | Penulis |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 03/11/2026 | Pembuatan awal modul manajemen pendaftar (CRUD, Validasi, Admin) | Nama Peserta |