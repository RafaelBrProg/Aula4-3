const prompt = require('prompt-sync')();

const valor1 = parseFloat(prompt("Digite o primeiro numero: "));

while (true) {
    const valor2 = parseFloat(prompt("Digite o segundo numero: "));

    if (valor2 >= 1) {
        const resultado = valor1 / valor2;
        console.log(`O resultado da divisão é: ${resultado.toFixed(2)}`);
        break;
    }
    if (valor2 == 0) {
        console.log("O valor de zero é invalido");
        continue;
    }
}
