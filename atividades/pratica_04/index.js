import http from "node:http";
import fs from "node:fs/promises";

const servidor = http.createServer(async (req, res) => {

    if (req.url === "/") {

        try {
            const conteudo = await fs.readFile("index.html");

            res.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8"
            });

            res.end(conteudo);

        } catch (erro) {

            res.writeHead(500, {
                "Content-Type": "text/plain; charset=utf-8"
            });

            res.end("Erro ao ler o arquivo index.html.");
        }

    } else {

        res.writeHead(404, {
            "Content-Type": "text/plain; charset=utf-8"
        });

        res.end("Página não encontrada.");
    }
});

servidor.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
