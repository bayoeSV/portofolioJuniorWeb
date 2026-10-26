const peserta = [
  { id: 1, nama: 'Sari', kelas: 'Web', nilai: 90, aktif: true },
  { id: 2, nama: 'Budi', kelas: 'Web', nilai: 68, aktif: true },
  { id: 3, nama: 'Citra', kelas: 'Data', nilai: 82, aktif: false }

];

//peserta yang aktif
const pesertaAktif = peserta.filter(p => p.aktif);
console.log('Peserta Aktif:', pesertaAktif);

//Urutkan berdasarkan nama (sort dengan localeCompare) tanpa mengubah array asli.
const pesertaTerurut = [...peserta].sort((a, b) => a.nama.localeCompare(b.nama));
console.log('Peserta Terurut:', pesertaTerurut);

//Cari peserta berdasarkan id (find) dan tangani bila tidak ditemukan.
const pesertaById = peserta.find(p => p.id === 2);
if (pesertaById) {
  console.log('Peserta Ditemukan:', pesertaById);
} else {
  console.log('Peserta tidak ditemukan.');
}
//Hitung jumlah peserta per kelas dengan objek penghitung.
const jumlahPerKelas = peserta.reduce((acc, p) => {
  acc[p.kelas] = (acc[p.kelas] || 0) + 1;
  return acc;
}, {});
console.log('Jumlah Peserta per Kelas:', jumlahPerKelas);




//Tambah, ubah, dan hapus peserta (push, perubahan properti, filter atau splice) lalu cetak hasilnya.
//Tambah peserta baru
peserta.push({ id: 4, nama: 'Dewi', kelas: 'Data', nilai: 75, aktif: true });
console.log('Setelah Menambah Peserta:', peserta);

//Ubah properti peserta
const pesertaToUpdate = peserta.find(p => p.id === 1);
if (pesertaToUpdate) {
  pesertaToUpdate.nilai = 95;
}
console.log('Setelah Mengubah Nilai Peserta:', peserta);

//Hapus peserta
const pesertaToDelete = peserta.find(p => p.id === 3);
if (pesertaToDelete) {
  const index = peserta.indexOf(pesertaToDelete);
  peserta.splice(index, 1);
}
console.log('Setelah Menghapus Peserta:', peserta);

//Ubah array menjadi objek berindeks id (reduce) sehingga pencarian berdasar id menjadi O(1).
const pesertaObjek = peserta.reduce((acc, p) => {
  acc[p.id] = p;
  return acc;
}, {});
console.log('Peserta sebagai Objek:', pesertaObjek);   


