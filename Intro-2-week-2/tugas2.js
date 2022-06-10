const names = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
  "PENE",
];

const searchName = (names, limits) => {
  if (names.length > limits) {
    names.length = limits;
  }
  return names;
};

const filterItems = (names, keys, limits, callback) => {
  const filtered = names.filter((hasil) => {
    return hasil.toLowerCase().includes(keys.toLowerCase());
  });

  if (!filtered.length) {
    return `Untuk nama ${keys} tidak ditemukan`;
  }

  return callback(filtered, limits);
};
console.log(filterItems(names, "pene", 3, searchName));
