//no 1
class Sepeda {
  // Constructor menerima input jari-jari dalam cm
  constructor(jariJari) {
    this.jariJari = jariJari;
  }

  // Fungsi untuk mendapatkan diameter roda
  diameter() {
    return 2 * this.jariJari;
  }
}

// Cara Penggunaan:
const sepedaBaru = new Sepeda(30); // Jari-jari 30 cm
console.log(`Diameter roda sepeda: ${sepedaBaru.diameter()} cm`); 

//no2
var keranjang = [ 
{id: 1, barang: 'T-shirt', harga: 80000, banyak: 2}, 
{id: 2, barang: 'Jeans', harga: 90000, banyak: 1} 
]; 

function inputkeranjang(id, barang, harga, banyak) {
  keranjang.push({id, barang, harga, banyak});
}

function totalHarga() {
  let total = 0;
  for (let i = 0; i < keranjang.length; i++) {
    total += keranjang[i].harga * keranjang[i].banyak;
  }
  return total;
}

//no3
var etalase = [ 
{id: 1, barang: 'T-shirt', harga: 80000}, 
{id: 2, barang: 'Jeans', harga: 90000}, 
{id: 3, barang: 'Tote Bag', harga: 20000}, 
{id: 4, barang: 'School Bag', harga: 25000}, 
]; 
function inputEtalase(id, barang, harga) {
  etalase.push({id, barang, harga});
}
function urutkanEtalase() {
  etalase.sort((a, b) => a.harga - b.harga);
}

//no 4
function cariBarang(etalase, keyword) {
  return etalase.filter(item => item.barang.toLowerCase().includes(keyword.toLowerCase()));
}

function palingMurah(etalase) {
  if (etalase.length === 0) return null;
  return etalase.reduce((min, item) => item.harga < min.harga ? item : min);
}

