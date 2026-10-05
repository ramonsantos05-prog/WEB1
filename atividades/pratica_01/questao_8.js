const numeros = [12, 3, 5, 21, 40, 2, 37, 17, 49]; // 62
let somaPrimos = 0;

for (let i = 0; i <= numeros.length - 1; i++) {
    let ehPrimo = true;

    for (let j = 2; j <= Math.sqrt(numeros[i]); j++) {
        if (numeros[i] % j == 0) {
            ehPrimo = false;
            break;
        }
    }
    if (ehPrimo) {
        somaPrimos += numeros[i];
    }
}
document.getElementById("resultado").innerHTML = somaPrimos;