// CommonJS ==> require
// const http = require("http");

// ES Modules
import http from "node:http";

const server = http.createServer((req, res) => {
  return res.end("Hellooooooooooooo");
});

server.listen(3333);
