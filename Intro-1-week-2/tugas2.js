// const cekNilai = ({ mtk, bahasaIndonesia, bahsaInggris, ipa }) => {
//   const jumlah = mtk + bahasaIndonesia + bahsaInggris + ipa;
//   const rataRata = jumlah / 4;
//   return rataRata;
// };
// const dataNilai = { mtk: 80, bahasaIndonesia: 90, bahsaInggris: 89, ipa: 69 };
// if (
//   dataNilai.mtk == 0 ||
//   dataNilai.bahasaIndonesia == 0 ||
//   dataNilai.bahsaInggris == 0 ||
//   dataNilai.ipa == 0
// ) {
//   console.log("nilai harus disi semua");
// } else {
//   console.log(cekNilai(dataNilai));
// }

// Cara ke 2
const dataNilai = {
  mtk: 60,
  bhasaIndonesia: 30,
  bahsaInggris: 39,
  ipa: 29,
};
const { mtk, bhasaIndonesia, bahsaInggris, ipa } = dataNilai;
const jumlah = mtk + bhasaIndonesia + bahsaInggris + ipa;
let size = Object.keys(dataNilai).length;
const rataRata = jumlah / size;
// if (rataRata >= 90) {
//   console.log("A");
// } else if (rataRata >= 80) {
//   console.log("B");
// } else if (rataRata >= 70) {
//   console.log("C");
// } else if (rataRata >= 60) {
//   console.log("D");
// } else {
//   console.log("E");
// }

/**cara ke 3 */
// const nilaiPelajaran = [
//   { nama: "Matematika", nilai: 80 },
//   { nama: "Bahsa Indonesia", nilai: 90 },
//   { nama: "Bahasa Inggris", nilai: 89 },
//   { nama: "IPA", nilai: 69 },
//   { nama: "IPS", nilai: 78 },
//   { nama: "Fisika", nilai: 100 },
//   { nama: "Bioligi", nilai: 98 },
// ];
// const jumlah = Object.keys(nilaiPelajaran).length;
// const rataRata = (value) => {
//   return value.map((item) => item.nilai).reduce((prev, next) => prev + next);
// };

// const hasil = rataRata(nilaiPelajaran) / jumlah;
// const total = Math.round(hasil);
// console.log(total);
// if (total >= 90) {
//   console.log("A");
// } else if (total >= 80) {
//   console.log("B");
// } else if (total >= 70) {
//   console.log("C");
// } else if (total >= 60) {
//   console.log("D");
// } else {
//   console.log("E");
// }
