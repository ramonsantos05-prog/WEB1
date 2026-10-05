let numero1 = Number(prompt("Digite o primeiro número:"));

let numero2 = Number(prompt("Digite o segundo número:"));

for (let i = numero1; i <= numero2; i++) {

    if (i % 2 != 0) {
        console.log(i);
    }

}