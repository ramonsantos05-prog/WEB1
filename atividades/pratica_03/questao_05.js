const pedidos = [
    {
        id: 1,
        cliente: "Ana",
        itens: [
            {
                nome: "Camiseta",
                preco: 50,
                qtd: 2
            },
            {
                nome: "Boné",
                preco: 30,
                qtd: 1
            }
        ]
    },
    {
        id: 2,
        cliente: "Carlos",
        itens: [
            {
                nome: "Tênis",
                preco: 200,
                qtd: 1
            }
        ]
    },
    {
        id: 3,
        cliente: "Maria",
        itens: [
            {
                nome: "Calça",
                preco: 100,
                qtd: 2
            },
            {
                nome: "Blusa",
                preco: 80,
                qtd: 1
            }
        ]
    },
    {
        id: 4,
        cliente: "Pedro",
        itens: [
            {
                nome: "Meia",
                preco: 20,
                qtd: 3
            }
        ]
    }
];


let pedidosComTotal = pedidos.map(function(pedido) {

    let total = pedido.itens.reduce(function(soma, item) {
        return soma + (item.preco * item.qtd);
    }, 0);

    return {
        cliente: pedido.cliente,
        total: total
    };
});

console.log("Pedidos com total:");
console.log(pedidosComTotal);

let pedidosAcimaDe200 = pedidosComTotal.filter(function(pedido) {
    return pedido.total >= 200;
});

console.log("Pedidos >= R$ 200:");
console.log(pedidosAcimaDe200);


let faturamento = pedidosComTotal.reduce(function(soma, pedido) {
    return soma + pedido.total;
}, 0);

console.log("Faturamento total:");
console.log(faturamento);


let quantidadePorPedido = pedidos.map(function(pedido) {

    let quantidade = pedido.itens.reduce(function(soma, item) {
        return soma + item.qtd;
    }, 0);

    return quantidade;
});

let quantidadeTotal = quantidadePorPedido.reduce(function(soma, quantidade) {
    return soma + quantidade;
}, 0);

console.log("Quantidade total de produtos vendidos:");
console.log(quantidadeTotal);