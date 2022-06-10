//1.Method filter
/**
 * filter() merupakan method array di JavaScript yang berfungsi untuk mencari semua elemen di dalam array yang sesuai dengan kriteria tertentu. Method ini mengembalikan array baru yang berisi elemen yang sesuai dengan kriteria yang dicari
 */
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const value = number.filter((param) => param % 2 == 0); //arrow function
//anonymus function / function tanpa nama
const value1 = number.filter(function (param1) {
  return param1 % 2 == 1;
});
// console.log(`Method filter : ${value}`); //output genap : 2,4,6,8,10,12,14
// console.log(`Method filter : ${value1}`); //output ganjil : 1,3,5,7,9,11,13,15

//2.Method parseInt
/*
Fungsi ini mengkonversi sebuah string menjadi angka. Fungsi membaca mulai dari awal string dan menghasilkan semua integer sampai iaÂ menemukan sebuah tak-integer dan kemudian berhenti membaca.
*/
const nim = parseInt("1455201345"); //mengkonversi string ke integer
const cekType = typeof nim;
console.log(`Method parseInt : ${cekType}`);

// 3.Method replace
/**
 * Replace() method dalam bahasa pemrograman JavaScript digunakan mengembalikan string baru dengan beberapa atau semua kecocokan pola yang diganti dengan pengganti. Polanya bisa berupa string atau RegExp, dan penggantinya bisa berupa string atau fungsi yang dipanggil untuk setiap kecocokan.
 */
const p = "Good night jafar";
console.log(p.replace("night", "morning")); //mengganti kalimat night menjadi morning
// Method replace mengembalikan string baru dengan beberapa atau semua kecocokan pola yang diganti dengan pengganti.

// 4.Method push
/**
 * Metoda push() menambahkan sebuah item baru di akhir sebuah array dan mengembalikan panjang array yang baru.
 */
const fruit = ["Apple", "Orange", "Mango", "Grape"];
const addFruit = fruit.push("Water melon"); //menambah isi array
console.log(fruit); //Output = ["Apple", "Orange", "Mango", "Grape", "Water melon"]

// 5.Method sort
/**
 * Method sort() berfungsi untuk mengurutkan array menurut abjad.
 */
const memberPijar = [
  "Wan Jafar",
  "Ikhsan",
  "Aldo",
  "Kevin",
  "Nanang",
  "Verdy",
  "Reza",
  "Bilkis Ismail",
  "Irfan",
  "Nikmah",
  "Wahid",
  "Taufik",
  "Adi",
  "Apriyanto",
  "Ayi",
  "Ilham",
  "arrum",
  "Rizki",
];
memberPijar.sort(); //Mengurutkan secara abjad
console.log(`After ${memberPijar}`);

//6. Method every
/**
 * Method every() berfungsi untuk menguji apakah semua elemen dalam array mengembalikan nilai truthy berdasarkan fungsi callback pengujian yang disediakan. Method ini hanya mengembalikan nilai true jika semua elemen array yang diuji mengembalikan nilai truthy. Jika salah satu elemen mengembalikan nilai falsy ketika diuji menggunakan fungsi yang disediakan, maka method ini mengembalikan false.
 */
const mahasiswa = [
  { nama: "budi", nilai: 85 },
  { nama: "bambang", nilai: 80 },
  { nama: "nina", nilai: 90 },
];

const lulusSemua = mahasiswa.every(function (mahasiswa) {
  return mahasiswa.nilai >= 80;
});

console.log(lulusSemua); // true

//7.Method concat
/**
 * concat() adalah salah satu method JavaScript yang dimana fungsi dari method concat() tersebut yaitu untuk menggabungkan dua atau lebih string dan array yang berada di suatu variable JavaScript.
 */
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2); //menggabungkan data array

console.log(array3);
// output: ["a", "b", "c", "d", "e", "f"]

//8.Method slice
/**
 * slice() merupakan method array di JavaScript yang berfungsi menyalin sebagian elemen array ke array baru. Elemen yang ingin disalin ditentukan menggunakan indeks, indeks awal dan akhir. Method ini tidak mengubah array asli.
 */
const animals = ["ant", "bison", "camel", "duck", "elephant", "Monkey", "Cat"];
console.log(animals.slice(2, 4)); //mencetak nilai array dari index ke 2 sd ke 4
//output: ["camel", "duck"]

//9.Method findIndex
/**
 *findIndex() mengembalikan indeks elemen pertama dalam array yang memenuhi fungsi pengujian yang disediakan. Jika tidak, ia mengembalikan -1, yang menunjukkan bahwa tidak ada elemen yang lulus tes.
 */
const listNumber = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13; //mencari nilai yang lebih besar dari 13

console.log(listNumber.findIndex(isLargeNumber)); //output: 3
//angka 3 disini adalah index arraynya

//10.Method length
/**
 * length pada javascript adalah untuk menghitung panjang karakter dari suatu kata. Jadi dengan adanya fungsi ini kita bisa mengengetahui berapa panjang karakter pada suatu kata, kalimat, atau paragraf.
 */
let kalimat = "Palindrom";
let cekLength = kalimat.length; //mencaritahu panjang karakter dari kalimat menggunakan method length
console.log(`Method length : ${cekLength}`);
