const prompt = require("prompt-sync")();
let soma = 0
for (let i = 1; i <= 10; i++ ){
    const valores = Number(prompt("digite numero: "))
    soma += valores
}
let media = soma / 10
console.log(`sua media é: ${media}`)