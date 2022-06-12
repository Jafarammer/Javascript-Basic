const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log(res.data.map((user) => user.name));
  })
  .catch((err) => {
    console.log(err.response.status === 404 ? "Data not found" : "I dont know");
  });
