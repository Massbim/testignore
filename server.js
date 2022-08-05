const axios = require("axios");
let http = require("http");

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    const users = res.data;
    console.log(`Code Status: ${res.status}`);
    users[0].name = "Alamsyah Bimasakti Qobus Nur Rahman";
    users[0].email = "alamsyahbima22@gmail.com";
    http
      .createServer((req, res) => {
        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        for (user of users) {
          res.write(`<li>${user.id} ${user.name}</li>`);
        }
        res.end();
      })
      .listen(8080);
  })
  .catch((err) => {
    console.log(err.message);
  });

console.log("Server running in localhost:8080");

// let http = require("http");
// const axios = require("axios");

// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     console.log("Status code: ", res.status);
//     const users = res.data;
//     users[1].name = "Khair";
//     users[1].username = "zaki_khairi";
//     users[1].email = "zakielbavarian@gmail.com";
//     console.log(users);

//     http
//       .createServer((req, res) => {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         for (user of users) {
//           res.write("<li>Get user with id: " + user.id + ", name: " + user.name + "</li>");
//         }
//         res.end();
//       })
//       .listen(8080);
//   })
//   .catch((err) => {
//     console.log("Error: ", err.message);
//   });

// console.log("Server running on port: http://localhost:8080");
