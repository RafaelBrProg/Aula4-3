const prompt = require('prompt-sync')();


let alcool = 0;
let gasolina = 0;
let diesel = 0;
let x = 0;


while (x !== 4) {
    x = Number(prompt("Deseja abastecer?: 1-Alcool; 2-Gasolina; 3-Diesel; 4-fim: "));




    if (x === 1) {
        console.log("Você abasteceu com álcool");
        alcool += 1;
    } else if (x === 2) {
        console.log("Você abasteceu com Gasolina");
        gasolina += 1;
    } else if (x === 3) {
        console.log("Você abasteceu com Diesel");
        diesel += 1;
    } else if (x !== 4) {
        console.log("Número inválido. Digite um número válido de 1 a 4");
    }
}


let soma = alcool + gasolina + diesel;
console.log("MUITO OBRIGADO");
console.log(`Álcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);
console.log(`A quantidade de clientes que passaram no posto foi de ${soma}`);