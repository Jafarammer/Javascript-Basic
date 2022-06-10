const printSegitiga = "5";
if (typeof printSegitiga === "string") {
  console.log("Data harus number");
} else {
  let string = "";
  for (let x = printSegitiga; x >= 1; x--) {
    for (let y = 0; y >= 1 - x; y--) {
      string += x;
    }
    string += "\n";
  }
  console.log(string);
}
