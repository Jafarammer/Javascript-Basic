const cekHarga = (names) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataBarang = [
        { name: "Capuccino cincau", harga: 5000 },
        { name: "Black coffe", harga: 8000 },
        { name: "Mineral water", harga: 4000 },
        { name: "Ayam geprek", harga: 15000 },
      ];
      let cek = dataBarang.find((item) => {
        return item.name === names;
      });
      if (cek.harga) {
        resolve(`Rp.${cek.harga}`);
      } else {
        reject("Data not found");
      }
    }, 3000);
  });
};

const result = async () => {
  try {
    const wait = await cekHarga("Mineral water");
    console.log(wait);
  } catch (err) {
    console.log(err);
  }
};

result();
