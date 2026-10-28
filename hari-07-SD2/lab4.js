//contoh penulisan kode yang tidak baik, 
// misal nama variabel tidak jelas, 
// fungsi terlalu panjang, 
// tidak ada komentar, 
// dan tidak ada pemisahan logika.
var d = [80,65,90];
function f(a){var s=0;for(var i=0;i<a.length;i++){s=s+a[i]}return s/a.length}
function g(x){ if(x>=85){return 'A'}else{ if(x>=70){return 'B'}else{ if(x>=55){return 'C'}else{return 'D'}}}}
var r=f(d);
if(r==80){console.log('bagus')}
function h(n){ var p=n*0.11; return n+p }
function k(n){ var p=n*0.11; return n+p }
console.log(g(r))
//buat versi baik dari kode di atas, misal dengan menambahkan komentar, memberi nama variabel yang jelas, dan memisahkan fungsi menjadi beberapa baris.
var scores = [80, 65, 90];

const PAJAK = 0.11;
const BATAS_GRADE = { A: 85, B: 70, C: 55 };

// Fungsi untuk menghitung rata-rata dari daftar nilai
function hitungRataRata(daftarNilai) {
  if (daftarNilai.length === 0) return 0;
  const jumlah = daftarNilai.reduce((total, nilai) => total + nilai, 0);
  return jumlah / daftarNilai.length;
}
// Fungsi untuk menentukan grade berdasarkan nilai rata-rata
function tentukanGrade(nilai) {
  if (nilai >= BATAS_GRADE.A) return 'A';
  if (nilai >= BATAS_GRADE.B) return 'B';
  if (nilai >= BATAS_GRADE.C) return 'C';
  return 'D';
}
// Fungsi untuk menghitung harga dengan pajak
function hitungHargaDenganPajak(harga) {
  return harga * (1 + PAJAK);
}
//mencoba fungsi-fungsi di atas
console.log("Rata-rata:", hitungRataRata(scores));
console.log("Grade:", tentukanGrade(hitungRataRata(scores)));
console.log("Harga dengan pajak:", hitungHargaDenganPajak(100));    
