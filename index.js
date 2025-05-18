const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  fs.readFile("./index.html", (err, data) => {
    res.status(200).type("html").send(data);
  });
});

app.get("/about", (req, res) => {
  fs.readFile("./about.html", (err, data) => {
    res.status(200).type("html").send(data);
  });
});

app.get("/contact-me", (req, res) => {
  fs.readFile("./contact-me.html", (err, data) => {
    res.status(200).type("html").send(data);
  });
});

app.get("/404", (req, res) => {
  fs.readFile("./404.html", (err, data) => {
    res.status(200).type("html").send(data);
  });
});

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});

// var http = require("http");
// var url = require("url");
// var fs = require("fs");

// http
//   .createServer(function (req, res) {
//     var q = url.parse(req.url, true);
//     var pathname = q.pathname === "/" ? "/index" : q.pathname;
//     var filename = "." + pathname + ".html";
//     fs.readFile(filename, function (err, data) {
//       if (err) {
//         fs.readFile("./404.html", function (err404, data404) {
//           res.writeHead(404, { "Content-Type": "text/html" });
//           return res.end(err404 ? "404 Not Found" : data404);
//         });
//         return;
//       }
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(8080);

// //http://localhost:8080/
// //http://localhost:8080/about
// //http://localhost:8080/contact-me
// //http://localhost:8080/404
// //http://localhost:8080/badurl
