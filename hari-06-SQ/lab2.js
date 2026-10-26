   
//Hitung frekuensi kata dari kalimat 'saya belajar web saya suka web' memakai Map, lalu tampilkan terurut dari yang paling sering.
const kalimat = 'saya belajar web saya suka web dan saya masih belajar';
const kataArray = kalimat.split(' ');
const frekuensiMap = new Map(); 

kataArray.forEach(kata => {
  frekuensiMap.set(kata, (frekuensiMap.get(kata) || 0) + 1);
});

const frekuensiTerurut = [...frekuensiMap.entries()]
  .sort((a, b) => b[1] - a[1])
  .map(([kata, frekuensi]) => `${kata}: ${frekuensi}`);

console.log('Frekuensi Kata (Terurut):', frekuensiTerurut);

//jumlah kata semua kata dalam kalimat
const jumlahKata = kataArray.length;
console.log('Jumlah Kata:', jumlahKata);

//Hilangkan duplikat dari daftar email memakai Set, tampilkan sebelum dan sesudah.
const emails = ['user1@example.com', 'user2@example.com', 
    'user1@example.com', 'user3@example.com'];
console.log('Sebelum Hilangkan Duplikat:', emails);
const emailsUnik = [...new Set(emails)];
console.log('Setelah Hilangkan Duplikat:', emailsUnik);

//Cari irisan dua daftar peserta (kelas A dan kelas B) memakai Set.
const kelasA = new Set(['Sari', 'Budi', 'Citra']);
const kelasB = new Set(['Budi', 'Dewi', 'Eka']);
const irisan = [...kelasA].filter(nama => kelasB.has(nama));
console.log('Irisan Kelas A dan B:', irisan);

//Buat fungsi adaDuplikat(daftar) (versi Set) dan uji dengan array kosong, satu elemen, dan elemen berulang.
function adaDuplikat(daftar) {
  return new Set(daftar).size !== daftar.length;
}
// Uji fungsi adaDuplikat
console.log('Array kosong:', adaDuplikat([])); // false
console.log('Satu elemen:', adaDuplikat(['Sari'])); // false
console.log('Elemen berulang:', adaDuplikat(['Sari', 'Budi', 'Sari'])); // true
