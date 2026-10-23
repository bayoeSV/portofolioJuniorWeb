const peserta = [
  { id: 1, nama: 'Sari', kelas: 'Web', nilai: 90 },
  { id: 2, nama: 'Budi', kelas: 'Web', nilai: 68 },
  { id: 3, nama: 'Citra', kelas: 'Data', nilai: 82 }
];

const namaWeb = peserta.filter((p) => p.kelas === 'Web').map((p) => p.nama);
const rata = peserta.reduce((j, p) => j + p.nilai, 0) / peserta.length;
const budi = peserta.find((p) => p.nama === 'Budi');
const urutNilai = [...peserta].sort((a, b) => b.nilai - a.nilai);

// Menghitung jumlah per kelas
const perKelas = {};
for (const p of peserta) {
  perKelas[p.kelas] = (perKelas[p.kelas] || 0) + 1;
}

console.log('Nama peserta kelas Web:', namaWeb);
console.log('Rata-rata nilai peserta:', rata);
console.log('Data peserta bernama Budi:', budi);
console.log('Peserta diurutkan berdasarkan nilai (desc):', urutNilai);
console.log('Jumlah peserta per kelas:', perKelas);