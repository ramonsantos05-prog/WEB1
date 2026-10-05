// const numeros = [10, 20, 30, 40, 50];
// numeros.forEach(function(numero) {
//     console.log(numero);
// });

// MAP - Executa uma transformação nos dados de entrada, gerando um novo array com os resultados da transformação
const precos = [100, 80, 30, 40, 500];
// const precosComDesconto = precos.map((preco) => preco * 0.9);
// console.table(precosComDesconto);
// console.table(precos);


// const resultado = precos.filter((preco) => preco < 100);
// console.table(resultado);

const somaCarrinho = precos.reduce((acumulador, preco) => acumulador + preco, 0);
console.log(somaCarrinho);