# Website Sederhana

## 1. Deskripsi Website

Website ini merupakan proyek sederhana untuk mempelajari dasar-dasar HTML dan navigasi ant halaman web. Website terdiri dari empat halaman HTML, yaitu halaman utama, kontak, tentang, dan artikel satu.

Navigasi website dirancang agar seluruh halaman hanya dapat diakses melalui halaman utama (`index.html`).

## 2. Struktur File

```text
website-sederhana/
├── index.html
├── kontak.html
├── tentang.html
├── artikel-satu.html
└── README.md
```

Keterangan:
- `index.html`: Halaman utama website yang berisi menu navigasi menuju halaman lainnya.
- `kontak.html`: Halaman yang berisi informasi kontak.
- `tentang.html`: Halaman yang menjelaskan profil atau informasi tentang website.
- `artikel-satu.html`: Halaman yang berisi artikel pertama.
- `README.md`: Dokumen petunjuk penggunaan website.

## 3. Petunjuk Menjalankan Website

1. Unduh atau salin seluruh file website ke dalam satu folder.
2. Pastikan semua file HTML berada dalam folder yang sama.
3. Buka file `index.html` menggunakan browser, seperti Google Chrome atau Microsoft Edge.
4. Gunakan tautan navigasi pada halaman utama untuk membuka halaman Kontak, Tentang, dan Artikel Satu.
5. Untuk kembali ke halaman utama, gunakan tombol kembali (*Back*) pada browser.

## 4. Aturan Navigasi

Website menggunakan ketentuan navigasi berikut:

- Halaman `index.html` memiliki tautan menuju `kontak.html`, `tentang.html`, dan `artikel-satu.html`.
- Halaman `kontak.html` tidak memiliki tautan menuju halaman lainnya.
- Halaman `tentang.html` tidak memiliki tautan menuju halaman lainnya.
- Halaman `artikel-satu.html` tidak memiliki tautan menuju halaman lainnya.

Dengan demikian, navigasi ant halaman hanya disediakan melalui halaman utama.

## 5. Contoh Kode Navigasi pada `index.html`

```html
<nav>
    <ul>
        <li><a href="index.html">Beranda</a></li>
        <li><a href="kontak.html">Kontak</a></li>
        <li><a href="tentang.html">Tentang</a></li>
        <li><a href="artikel-satu.html">Artikel Satu</a></li>
    </ul>
</nav>
```

Kode tersebut membuat empat tautan navigasi pada halaman utama. Tautan Beranda membuka `index.html`, sedangkan tiga tautan lainnya membuka halaman sesuai nama file masing-masing.

## 6. Catatan

- Penulisan nama file pada atribut `href` harus sesuai dengan nama file HTML yang tersedia.
- Semua file HTML sebaiknya disimpan dalam satu folder agar tautan relatif dapat berfungsi dengan benar.
- Website dapat dijalankan langsung melalui browser tanpa server tambahan karena masih berupa website HTML statis.
- Jika website dikembangkan lebih lanjut, CSS dapat ditambahkan untuk mempercantik tampilan dan JavaScript dapat digunakan untuk menambahkan interaksi.

## 7. Tujuan Pembelajaran

Melalui proyek ini, pengguna diharapkan mampu:
1. Memahami struktur dasar dokumen HTML.
2. Membuat beberapa halaman HTML dalam satu folder.
3. Menggunakan elemen tautan (`<a>`) untuk navigasi ant halaman.
4. Memahami penggunaan atribut `href` dan tautan relatif.
5. Menguji navigasi website melalui browser.
