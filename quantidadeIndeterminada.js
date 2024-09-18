const prompt = require('prompt-sync')();

while(true) {
    const num =  Number(prompt("Insira o numero: "));
    if (num <= 0) {
        console.log("Encerrando o programa");
        break;
    }
    if(num % 2 === 0){
        console.log(`O numero: ${num} sao pares `);
    }
    else {
        console.log(`O numero : ${num} sao impares`);
    }

}