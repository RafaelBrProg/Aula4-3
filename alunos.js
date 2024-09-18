const prompt = require('prompt-sync')();
const alunos = Number(prompt("Digite a quantidade de alunos "));


     if (alunos <= 0) {
        console.log("A quantidade de alunos deve ser positivo")
    
     } else{
        let soma = 0
     
   for (let i = 1; i <= alunos; i = i + 1)  {
    let nota = Number(prompt("Digite a nota dos alunosg "))
    soma += nota
  
   }
   let media = soma / alunos
   console.log(`A media de nota dos alunos foi ${media}`)
     }
