const carrinho = [
    {
        id: 1,
        nome: "Teclado",
        preco: 100,
        qtd: 2
    },
    {
        id: 2,
        nome: "Mouse",
        preco: 50,
        qtd: 1
    }
];

carrinho.push({
    id: 3,
    nome: "Monitor",
    preco: 800,
    qtd: 1
});

carrinho.unshift({
    id: 4,
    nome: "Headset",
    preco: 200,
    qtd: 1
});

console.log("Depois de adicionar:");
console.log(carrinho);

carrinho.pop();

carrinho.shift();

console.log("Depois de remover:");
console.log(carrinho);

let total = carrinho.reduce(function(soma, item) {
    return soma + (item.preco * item.qtd);
}, 0);

console.log("Total do carrinho: R$ " + total);