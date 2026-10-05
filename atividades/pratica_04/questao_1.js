import http from "node:http";

const produtos = [
    {
        id: 1,
        nome: "Teclado Mecânico",
        categoria: "Periféricos",
        preco: 250
    },
    {
        id: 2,
        nome: "Mouse Gamer",
        categoria: "Periféricos",
        preco: 150
    },
    {
        id: 3,
        nome: "Monitor 24",
        categoria: "Monitores",
        preco: 900
    }
];

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/produtos") {

        const listaProdutos = produtos.map(produto => {

            const precoFormatado = produto.preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            });

            let destaque = "";

            if (produto.preco > 500) {
                destaque = "style='background-color: #b0eda4;'";
            }

            return `
                <li ${destaque}>
                    <strong>${produto.nome}</strong><br>
                    Categoria: ${produto.categoria}<br>
                    Preço: ${precoFormatado}
                </li>
            `;
        }).join("");

        const html = `
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <title>Produtos</title>
            </head>

            <body>
                <h1>Produtos</h1>

                <p>Quantidade total de produtos: ${produtos.length}</p>

                <ul>
                    ${listaProdutos}
                </ul>
            </body>
            </html>
        `;

        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });

        res.end(html);

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
    console.log("Servidor executando em http://localhost:3000");
});