// Program A: konversi nilai ke huruf
/*
const nilai = 70; // Number(prompt('Nilai (0-100):'));
let grade;
if (nilai >= 85) grade = 'A';
else if (nilai >= 70) grade = 'B';
else if (nilai >= 55) grade = 'C';
else grade = 'D';
console.log(`Grade: ${grade}`);

// Program B: tahun kabisat
const tahun = 2020; // Number(prompt('Tahun:'));
const kabisat = (tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0;
console.log(kabisat ? 'Kabisat' : 'Bukan kabisat');
*/
/*
Penentu bilangan ganjil/genap dan positif/negatif/nol.
0.start, let nilai, status1, status2
1.input nilai
2.if (nilai % 2)===0 {status1="genap"}else{status1="ganjil"}
3.cetak (status1)
4.if(nilai > 0) {status2="positif"}else
     if(nilai < 0) {status2 ="negatif"} else {status2="nol"}
5.cetak (status2)
6.end  */

let nilai, status1, status2;
nilai = -1; // Contoh nilai, bisa diganti sesuai kebutuhan
if (nilai % 2 === 0) {
  status1 = "genap";
} else {
  status1 = "ganjil";
}
console.log(status1);
if (nilai > 0) {
  status2 = "positif";
} else if (nilai < 0) {
  status2 = "negatif";
} else {
  status2 = "nol";
}
console.log(status2);
/* 
Tarif parkir: 2 jam pertama Rp3.000, tiap jam berikutnya Rp2.000, maksimum Rp15.000 per hari.
0.start , let durasijam, sisajam, totalhari, bayar
1.input durasijam
2.sisajam=durasijam%24
3.totalhari=(durasijam-sisahari)/24
4.if(sisajam<=2){bayar=3000}else{bayar=3000+(sisajam-2)*2000}
5.if(bayar>=15000){bayar=15000}
6.bayar=totalhari*15000+bayar
7.cetak (bayar)
8.end
*/
let durasijam, sisajam, totalhari, bayar;
durasijam = 30;
sisajam = durasijam % 24;
totalhari = Math.floor(durasijam / 24); // Menggunakan Math.floor untuk mendapatkan jumlah hari penuh
//totalhari = (durasijam - sisajam) / 24;
if (sisajam <= 2) {
  bayar = 3000;
} else {
  bayar = 3000 + (sisajam - 2) * 2000;
}
if (bayar >= 15000) {
  bayar = 15000;
}
bayar = totalhari * 15000 + bayar;
console.log(bayar);
/*
Kalkulator sederhana dengan switch (+, -, *, /) dan penanganan pembagian dengan nol.
0.start, let nilai1,nilai2,pilih, hasil
1.output("menu pilihan (+, -, *, /)")
2.input (nilai1,nilai2,pilih)
3.switch(pilih)
  case 1 : hasil=nilai1+nilai2
  case 2 : hasil=nilai1-nilai2
  case 3 : hasil=nilai1*nilai2
  case 4 : if(nilai2===0){hasil="tidak terdefinisi"}else{hasil=nilai1/nilai2}
4.cetak (hasil)
5. end
*/
let nilai1, nilai2, pilih, hasil;
nilai1 = 10;
nilai2 = 0;
pilih = "/"; // Contoh operator, bisa diganti sesuai kebutuhan
switch (pilih) {
  case "+":
    hasil = nilai1 + nilai2;
    break;
  case "-":
    hasil = nilai1 - nilai2;
    break;
  case "*":
    hasil = nilai1 * nilai2;
    break;
  case "/":
    if (nilai2 === 0) {
      hasil = "tidak terdefinisi";
    } else {
      hasil = nilai1 / nilai2;
    }
    break;
  default:
    hasil = "Operator tidak valid";
}
console.log(hasil);
/*
Penentu kategori BMI (berat / (tinggi * tinggi)): 
kurang (di bawah 18,5), normal (18,5-24,9), lebih (25-29,9), obesitas (30 ke atas).
0.start, let berat, tinggi, BMI, status
1.input (berat, tinggi)
2.BMI = berat / (tinggi * tinggi)
3. if(BMI<18,5){statusSehat="kurang"}else
      if(BMI<=24,9) {statusSehat="normal"}else
        if(BMI<=29,9) {statusSehat="lebih"}else{statusSehat="obesitas"}
4.output (statusSehat)
5.end
*/
let berat, tinggi, BMI, statusSehat;
berat = 74;
tinggi = 1.70;
BMI = berat / (tinggi * tinggi);
if (BMI < 18.5) {
  statusSehat = "kurang";
} else if (BMI <= 24.9) {
  statusSehat = "normal";
} else if (BMI <= 29.9) {
  statusSehat = "lebih";
} else {
  statusSehat = "obesitas";
}
console.log(statusSehat);
