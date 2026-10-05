const produtos = [
    {
        id: 1,
        nome: "Teclado",
        preco: 120,
        categoria: "Periféricos"
    },
    {
        id: 2,
        nome: "Mouse",
        preco: 80,
        categoria: "Periféricos"
    },
    {
        id: 3,
        nome: "Monitor",
        preco: 900,
        categoria: "Monitores"
    },
    {
        id: 4,
        nome: "Webcam",
        preco: 200,
        categoria: "Periféricos"
    }
];


let produtosComDesconto = produtos.map(function(produto) {

    return {
        nome: produto.nome,
        preco: produto.preco * 0.9
    };

});

console.log("Produtos com desconto:");
console.log(produtosComDesconto);


let perifericos = produtos.filter(function(produto) {
    return produto.categoria === "Periféricos";
});

console.log("Produtos periféricos:");
console.log(perifericos);

let valorTotal = produtos.reduce(function(soma, produto) {
    return soma + produto.preco;
}, 0);

console.log("Valor total:");
console.log(valorTotal);


let somaPrecos = produtos.reduce(function(soma, produto) {
    return soma + produto.preco;
}, 0);

let precoMedio = somaPrecos / produtos.length;

console.log("Preço médio:");
console.log(precoMedio);