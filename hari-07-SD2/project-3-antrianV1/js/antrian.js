import { Queue, Stack } from './structures.js';

const antrian = new Queue();
const riwayat = new Stack();
let nomorTerakhir = 0;

const dipanggil = document.getElementById('dipanggil');
const jumlah = document.getElementById('jumlah');
const daftar = document.getElementById('daftar');
const riwayatList = document.getElementById('riwayat-antrean');

function formatNomor(angka) {
  return 'A' + String(angka).padStart(3, '0');
}

function tampilkanDaftar() {
  daftar.innerHTML = '';
  // Perbaikan: Loop langsung ke array, bukan head/tail
  const items = antrian.toArray();
  for (let item of items) {
    const li = document.createElement('li');
    li.textContent = item;
    daftar.append(li);
  }
  jumlah.textContent = antrian.size();
}

function tampilkanRiwayat() {
    riwayatList.innerHTML = '';
    // Ambil maksimal 5 riwayat terakhir (di-reverse agar yang terbaru di atas)
    const items = riwayat.toArray().reverse().slice(0, 5);
    for (let item of items) {
        const li = document.createElement('li');
        li.textContent = item;
        riwayatList.append(li);
    }
}

// Fungsi inisialisasi yang akan dipanggil oleh app.js
export function initAntrian() {
    document.getElementById('ambil').addEventListener('click', () => {
      nomorTerakhir++;
      antrian.enqueue(formatNomor(nomorTerakhir));
      tampilkanDaftar();
    });

    document.getElementById('panggil').addEventListener('click', () => {
      if (antrian.isEmpty()) {
        alert('Antrean sudah kosong!');
        dipanggil.textContent = 'Antrean kosong';
      } else {
        const nomor = antrian.dequeue();
        dipanggil.textContent = nomor;
        riwayat.push(nomor); // Simpan ke stack riwayat
      }
      tampilkanDaftar();
      tampilkanRiwayat();
    });

    // Fitur Reset dengan konfirmasi
    document.getElementById('reset').addEventListener('click', () => {
        if (confirm('Apakah Anda yakin ingin mereset seluruh antrean?')) {
            antrian.clear();
            riwayat.clear();
            nomorTerakhir = 0;
            dipanggil.textContent = '-';
            tampilkanDaftar();
            tampilkanRiwayat();
        }
    });

    tampilkanDaftar();
}