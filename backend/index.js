const express = require("express");
const app = express();

// Sinalizamos para o express que estamos usando
// JSON no body das requisições
app.use(express.json());

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
  res.send(lista);
});

// Endpoint CREATE - [POST] /pontuacoes
app.post("/pontuacoes", function (req, res) {
  // Peguei o item do corpo da requisição
  const item = req.body;
  // console.log(item);

  // Adicionar o item na lista
  lista.push({
    id: lista.length + 1,
    nome: item.nome,
    pontos: item.pontos,
  });

  res.send("Item criado com sucesso!");
});

app.listen(3000);
