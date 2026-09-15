// CommonJS ==> require
// const http = require("http");

// ES Modules
import http from "node:http";

// Métodos
// GET => Buscar um recurso do backend
// POST => Criar um recurso no backend
// PATCH => Atualizar uma informação específica de um recurso no backend
// PUT => Atualizar um recurso no backend
// DELETE => Deletar um recurso do backend

// GET /users => Buscando usuários no backend
// POST /users => Criar um usuário no backend

// Stateful: o servidor mantém informações/estado do usuário entre as requisições.
// Ex.: sessão de login armazenada no servidor.
// Stateless: o servidor não mantém informações entre as requisições. Cada requisição precisa trazer tudo que é necessário.
// Ex.: API usando JWT no header.

// Salvando em memória no node mesmo
const users = [];

// Cabeçalhos(Requisição/Resposta) -> Metadados

const server = http.createServer((req, res) => {
  const { method, url } = req;

  // Recuperando os usuários
  // Early return
  // Early return
  if (method === "GET" && url === "/users") {
    return res
      .setHeader("content-type", "application/json")
      .end(JSON.stringify(users));
  }

  // Criando um novo usuário
  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
    });

    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3333);
