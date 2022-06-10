let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};
/**A */
const myData = {
  name: "Wan Jafar",
  username: "Jafar",
  email: "wan.jafar96@gmail.com",
  hoby: ["Traveling", "Cycling", "Coding", "Playing game"],
  address: {
    street: "Jln.Raya cituis indah kp.kramat panjang ds.sukawali",
    suite: "Tidak tahu",
    city: "Tangerang",
    zipcode: 15570,
  },
  phone: 085718973710,
  website: "Jafarammer.github.io",
};

data = { ...data, ...myData };
console.log(data);
/**B */
const { street, suite, city, zipcode } = myData.address;
