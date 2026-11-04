/*
const http = require('http');

// Membuat HTTP server
const server = http.createServer((req, res) => {

    // Memeriksa method dan endpoint
    if (req.method === 'GET' && req.url === '/') {

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.end('Hello World.....');

    } else {

        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });

        res.end('404 - Halaman tidak ditemukan');
    }

});

// Menjalankan server
server.listen(8000, () => {
    console.log('Server berjalan di http://localhost:8000');
});
*/

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const publicFolder = path.join(__dirname, 'public');

// Daftar MIME type berdasarkan ekstensi file
const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.txt': 'text/plain; charset=utf-8'
};

// Fungsi untuk mengirim response error
function kirimError(res, status, pesan) {
    if (res.destroyed || res.writableEnded) return;

    if (res.headersSent) {
        res.destroy();
        return;
    }

    res.writeHead(status, {
        'Content-Type': 'text/plain; charset=utf-8'
    });

    res.end(pesan);
}

// Membuat HTTP server
const server = http.createServer((req, res) => {

    // Hanya menerima method GET
    if (req.method !== 'GET') {
        res.setHeader('Allow', 'GET');
        return kirimError(res, 405, '405 - Method tidak diizinkan');
    }

    let pathname;

    try {
        const url = new URL(req.url, 'http://localhost');
        pathname = decodeURIComponent(url.pathname);
    } catch (error) {
        return kirimError(res, 400, '400 - URL tidak valid');
    }

    // Jika alamat /, tampilkan index.html
    if (pathname === '/') {
        pathname = '/index.html';
    }

    // Menentukan lokasi file
    const filePath = path.resolve(
        publicFolder,
        '.' + pathname
    );

    // Mencegah akses file di luar folder public
    if (
        filePath !== publicFolder &&
        !filePath.startsWith(publicFolder + path.sep)
    ) {
        return kirimError(res, 403, '403 - Akses ditolak');
    }

    // Memeriksa keberadaan file
    fs.stat(filePath, (error, stats) => {

        if (error) {
            if (error.code === 'ENOENT' || error.code === 'ENOTDIR') {
                return kirimError(res, 404, '404 - File tidak ditemukan');
            }

            if (error.code === 'EACCES') {
                return kirimError(res, 403, '403 - Akses ditolak');
            }

            console.error('Error stat:', error);
            return kirimError(res, 500, '500 - Kesalahan server');
        }

        // Pastikan yang diminta adalah file
        if (!stats.isFile()) {
            return kirimError(res, 404, '404 - File tidak ditemukan');
        }

        // Menentukan MIME type
        const ext = path.extname(filePath).toLowerCase();

        const contentType =
            mimeTypes[ext] || 'application/octet-stream';

        // Membaca file
        fs.readFile(filePath, (error, data) => {

            if (error) {
                console.error('Error readFile:', error);
                return kirimError(res, 500, '500 - Gagal membaca file');
            }

            // Mengirim file ke browser
            res.writeHead(200, {
                'Content-Type': contentType,
                'Content-Length': data.length
            });

            res.end(data);
        });
    });
});

// Menangani error pada server
server.on('error', (error) => {
    console.error('Server error:', error);

    if (error.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} sedang digunakan.`);
    } else {
        console.error('Server tidak dapat berjalan.');
    }
});

// Menjalankan server
server.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});