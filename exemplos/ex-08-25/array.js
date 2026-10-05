const numeros = [10, 20, 30, 40, 50];
const nomes = ["Ramon", "Lucas", "Maria", "João", "Ana"];


console.log(numeros[0]);
console.log(nomes.length);

nomes.push("Pedro");
console.log(nomes);
nomes.pop();
console.log(nomes);
nomes.shift();
console.log(nomes);
nomes.unshift("Carla");
console.log(nomes);
nomes.splice(2, 0, "Fernanda");
console.log(nomes);

numeros.forEach(function(dobro) {
    console.log(dobro * 2);
});