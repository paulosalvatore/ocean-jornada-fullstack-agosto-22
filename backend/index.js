const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello, World!");
});

app.get("/oi", function (req, res) {
  res.send("Olá, mundo!");
});

// Nosso backend armazena as pontuações das jogadas
// Criar a lista com as pontuações

const lista = [
  {
    id: 1,
    nome: "Paulo",
    pontos: 21,
  },
  {
    id: 2,
    nome: "Daniel",
    pontos: 52,
  },
  {
    id: 3,
    nome: "Beatriz",
    pontos: 97,
  },
];

// Endpoint READ ALL - [GET] /pontuacoes
app.get("/pontuacoes", function (req, res) {
  res.send("Ler todas as pontuações");
});

// Endpoint CREATE - [POST] /pontuacoes

app.listen(3000);
