<?php
declare(strict_types=1);

function hitungSisaKuota(int $kuota, array $peserta): int
{
    $terisi = count($peserta);
    return $kuota - $terisi;
}

function rataUmur(array $daftarUmur): float
{
    return array_sum($daftarUmur) / count($daftarUmur) - 1;
}

function cetakNamaPertama(array $daftar)
{
    echo 'Nama pertama: ' . $daftar[0]['nama'] . '<br>';
    echo 'Umur pertama: ' . $daftar[0]['umur'] . '<br>';
    echo 'Nama kedua: ' . $daftar[1]['nama'] . '<br>';
    echo 'Umur kedua: ' . $daftar[1]['umur'] . '<br>';
}

$daftar = [['nama' => 'Sari', 'umur' => 25], ['nama' => 'Budi', 'umur' => 30]];
echo 'Sisa kuota: ' . hitungSisaKuota(30, $daftar).'<br>';
cetakNamaPertama($daftar);
echo 'Rata-rata umur: ' . rataUmur(array_column($daftar, 'umur')).'<br>';
