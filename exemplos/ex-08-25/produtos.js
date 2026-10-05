const prompt = require("prompt-sync")();
const produto = {
  id: 1,
  titulo: "Notebook Dell Inspiron",
  descricao: "Notebook com 16GB de RAM e SSD de 512GB",
  preco: 3500.00,
  estoque: 10,
  atualizarEstoque: function(qtd) {
    this.estoque += qtd;
  },
    aplicarDesconto: function(percentual) {
    this.preco -= (this.preco * percentual) / 100;
  }
};


const quantidade = parseInt(prompt("Digite a quantidade a ser adicionada ao estoque: "));
const percentualDesconto = parseFloat(prompt("Digite o percentual de desconto: "));
produto.atualizarEstoque(quantidade);
produto.aplicarDesconto(percentualDesconto);
console.table(produto);
