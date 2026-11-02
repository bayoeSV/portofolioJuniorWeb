<?php
// ... Seluruh proses coding Anda, query database, dll ...
$proses_sukses = true; 

if ($proses_sukses) {
    // Menambahkan custom header di akhir proses
    header('X-Script-Status: Selesai Dijalanankan');
    header('X-Execution-Time: ' . microtime(true) - $_SERVER["REQUEST_TIME_FLOAT"] . ' detik');
    header('Location: bug-nilai.php'); // Menambahkan status code 200 OK');
    //exit;
}

// Output HTML atau JSON tetap dikirim ke user setelahnya
echo "Halaman ini berhasil dimuat sempurna.";
?>
