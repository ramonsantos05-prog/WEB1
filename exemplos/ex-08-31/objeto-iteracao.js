const carrinho = [
  {
    id: 1,
    titulo: "Notebook",
    descricao: "Notebook com 16GB de RAM e SSD de 512GB",
    preco: 3500.00,
    quantidade: 1
  },
  {
    id: 2,
    titulo: "Mouse",
    descricao: "Mouse sem fio",
    preco: 89.90,
    quantidade: 2
  },
  {
    id: 3,
    titulo: "Teclado",
    descricao: "Teclado mecânico",
    preco: 249.90,
    quantidade: 1
  },
  {
    id: 4,
    titulo: "Monitor",
    descricao: "Monitor 24 polegadas Full HD",
    preco: 899.90,
    quantidade: 2
  }
];

const CarrinhoComDesconto = carrinho.map((item) => {
    const novoItem = { ...item, preco: item.preco * 0.9 };
 
    return novoItem;
});

console.table(CarrinhoComDesconto);


const CarrinhoFiltrado = CarrinhoComDesconto.filter((item) => item.preco < 1000);
console.table(CarrinhoFiltrado);

const somaCarrinho = CarrinhoComDesconto.reduce((acumulador, item) => acumulador + item.preco * item.quantidade, 0);
console.log(somaCarrinho);

// Some indicar se uma condição é verdadeira para pelo menos um elemento do array
const temProdutoCaro = CarrinhoComDesconto.some((item) => item.preco > 2000);
console.log(temProdutoCaro);