// Faktorial
const n = 3;
let faktorial = 1;
for (let i = 2; i <= n; i++) {
  faktorial *= i; // sama dengan faktorial = faktorial * i
}
console.log(`${n}! = ${faktorial}`);

// Fibonacci 10 suku pertama
let a = 0;
let b = 1;
const hasil = [];
for (let i = 0; i < 10; i++) {
  hasil.push(a); // menambahkan nilai a ke array hasil
  [a, b] = [b, a + b]; //sama dengan a = b; b = a + b;
}
console.log(hasil.join(', '));
// Bilangan prima sampai 50
for (let angka = 2; angka <= 50; angka++) {
  let prima = true;
  for (let pembagi = 2; pembagi * pembagi <= angka; pembagi++) {
    if (angka % pembagi === 0) {
      prima = false;
      break;
    }
  }
  if (prima) console.log(angka);
}

//tabel perkalian 1-10
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

//segitiga bintang
for (let i = 1; i <= 10; i++) {
  let hasil = '';
  for (let j = 1; j <= i; j++) {
    hasil += '*';
  }
  console.log(hasil);
}
//FizzBuzz 1-50 
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
//menebak angka random
let angka = Math.floor(Math.random() * 100) + 1; //jalankan di console browser
let input;
do {
  input = parseInt(prompt("Masukkan angka: "));
  if (input < angka) {
    console.log("Angka terlalu kecil");
  } else if (input > angka) {
    console.log("Angka terlalu besar");
  } else {
    console.log("Benar!");
  }
} while (angka !== input) 
