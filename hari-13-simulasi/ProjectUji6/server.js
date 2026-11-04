// Memanggil library
const express = require('express');
const bodyParser = require('body-parser');

// Memanggil koneksi database
const db = require('./database');

// Membuat aplikasi Express
const app = express();

// Mengaktifkan body-parser JSON
app.use(bodyParser.json());

// Menentukan port
const PORT = 3000;

// Endpoint GET untuk mengambil data users
app.get('/', (req, res) => {

    // Query SQL
    const sql = 'SELECT * FROM users';

    // Menjalankan query
    db.query(sql, (error, results) => {

        if (error) {
            console.error('Query gagal:', error.message);

            return res.status(500).json({
                message: 'Terjadi kesalahan pada database'
            });
        }

        // Mengirim data dalam format JSON
        res.status(200).json(results);

    });

});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});