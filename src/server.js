// CommonJS ==> require
// const http = require("http");

// ES Modules
import http from "node:http";

const server = http.createServer((req, res) => {
  const { method, url } = req;

  // Early return
  if (method === "GET" && url === "/users") {
    return res.end("Listagem de usuarios");
  }

  if (method === "POST" && url === "/users") {
    return res.end("Criação de usuarios");
  }

  return res.end("Hellooooooooooooo");
});

server.listen(3333);
