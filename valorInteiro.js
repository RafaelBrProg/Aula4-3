const prompt = require('prompt-sync')();

const num = Number(prompt("Digite seu numero "));

while (num <= 0) {
    console.log("Digite um valor valido. Maior que 0")
    const num = Number(prompt("Digite seu numero"));
}

for (let i = 1; i <= num; i++) {
    console.log(i)
}