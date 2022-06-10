const data = [2, 25, 4, 14, 17, 30, 8];
const orderData = (nilaiAwal, nilaiAkhir, dataArray) => {
  if (nilaiAwal < nilaiAkhir) {
    const filtered = dataArray.filter(
      (hasil) => hasil > nilaiAwal && hasil < nilaiAkhir
    );
    if (dataArray.length < 5) {
      return "Jumlah angka dalam array harus lebih dari 5";
    } else if (filtered == 0) {
      return "Nilai tidak ditemukan";
    } else if (
      typeof nilaiAwal === "string" ||
      typeof nilaiAkhir === "string"
    ) {
      return "Data harus angka!";
    } else {
      return filtered.sort((a, b) => {
        return a - b;
      });
    }
  } else {
    return "Nilai akhir harus lebih besar dari nilai awal";
  }
};
console.log(orderData(50, 70, data));
