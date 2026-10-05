let peso = Number(prompt("Digite o seu peso em kg:"));

let altura = Number(prompt("Digite a sua altura em metros:"));

let imc = peso / (altura * altura);

if (imc < 18.5) {
    alert("Seu IMC é: " + imc.toFixed(2) + " - Abaixo do peso");
} else if (imc < 25) {
    alert("Seu IMC é: " + imc.toFixed(2) + " - Peso normal");
} else if (imc < 30) {
    alert("Seu IMC é: " + imc.toFixed(2) + " - Sobrepeso");
} else {
    alert("Seu IMC é: " + imc.toFixed(2) + " - Obesidade");
}