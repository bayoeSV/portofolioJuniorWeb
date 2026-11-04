// Memanggil library mysql
const mysql = require('mysql');

// Membuat koneksi database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ujian'
});

// Menghubungkan ke database
db.connect((error) => {

    if (error) {
        console.error('Koneksi database gagal:', error.message);
        return;
    }

    console.log('Berhasil terhubung ke database MySQL');
});

// Mengekspor koneksi agar bisa digunakan file lain
module.exports = db;