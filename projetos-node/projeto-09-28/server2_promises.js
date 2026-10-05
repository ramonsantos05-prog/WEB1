import http from "node:http";
import { readFile } from "node:fs/promises";

const server = http.createServer(async (req, res) => {
  try {
    const html = await readFile("./exemplo2/index.html");

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });

    res.end(html);
  } catch (erro) {
    res.writeHead(500, {
      "Content-Type": "text/plain; charset=utf-8"
    });

    res.end("Erro ao carregar o arquivo HTML.");
  }
});

server.listen(3000, () => {
  console.log("Servidor executando em http://localhost:3000");
});