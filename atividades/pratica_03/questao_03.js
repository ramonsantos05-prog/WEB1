const estoque = [
    {
        sku: 101,
        nome: "Teclado",
        qtd: 5,
        minimo: 3
    },
    {
        sku: 102,
        nome: "Mouse",
        qtd: 2,
        minimo: 5
    },
    {
        sku: 103,
        nome: "Monitor",
        qtd: 10,
        minimo: 4
    },
    {
        sku: 104,
        nome: "Headset",
        qtd: 5,
        minimo: 3
    }
];


let itensCriticos = estoque.filter(function(item) {
    return item.qtd <= item.minimo;
});

console.log("Itens críticos:");
console.log(itensCriticos);


function repor(estoque, sku, qtd) {

    let indice = estoque.findIndex(function(item) {
        return item.sku === sku;
    });

    let novoEstoque = estoque.map(function(item, index) {

        if (index === indice) {
            return {
                ...item,
                qtd: item.qtd + qtd
            };
        }

        return item;
    });

    return novoEstoque;
}


let estoqueAtualizado = repor(estoque, 102, 10);

console.log("Estoque atualizado:");
console.log(estoqueAtualizado);