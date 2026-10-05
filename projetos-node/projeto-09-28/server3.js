import http from "node:http";

const produtos = [
  {
    id: 1,
    nome: "Teclado",
    preco: 100
  },
  {
    id: 2,
    nome: "Mouse",
    preco: 50
  }
];

const server = http.createServer((req, res) => {

  if (req.method === "GET" && req.url === "/produtos") {

    res.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8"
    });

    res.end(JSON.stringify(produtos));

    return;
  }

  res.writeHead(404, {
    "Content-Type": "application/json; charset=utf-8"
  });

  res.end(JSON.stringify({
    erro: "Recurso não encontrado"
  }));
});

server.listen(3000, () => {
  console.log("API executando em http://localhost:3000");
});