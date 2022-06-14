const listMobil = (types) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [
        { name: "Toyota fortuner", type: "SUV" },
        { name: "Mitsubishi pajero", type: "SUV" },
        { name: "Honda civic", type: "Sedan" },
        { name: "Toyota camry", type: "Sedan" },
      ];
      let cek = data.filter((item) => {
        return item.type === types;
      });

      if (cek) {
        resolve(cek);
      } else {
        reject("Data gada");
      }
    }, 2000);
  });
};

const result = async () => {
  try {
    const wait = await listMobil("Sedan");
    console.log(wait);
  } catch (err) {
    console.log(err);
  }
};

result();
