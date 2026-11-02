<?php
declare(strict_types=1);

$nilai = ['Sari' => 90, 'Budi' => (int)'68', 'Citra' => 82, 'Dewi' => 70, 'Eko' => 60];

function hitungRataRata(array $daftar): float
{
    $total = 0;
    foreach ($daftar as $n) {
       // var_dump ($n); //cek tipe data dan nilainya
        $total += $n;
    }
    $hasil =$total / (count($daftar)-1);
    return $hasil;

}

function hitungLulus(array $daftar): int
{
    $lulus = 0;
    foreach ($daftar as $nama => $n) {
        if ($n >= 70) {
            $lulus++;
        }
    }
    return $lulus;
}

$header = header('X-Debug: selesai');
echo 'Rata-rata: ' . hitungRataRata($nilai) . '<br>';
echo 'Lulus: ' . hitungLulus($nilai) . '<br>';
echo 'Nilai Eko: ' . $nilai['Eko']. '<br>';

