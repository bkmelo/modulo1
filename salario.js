const entrada =require("readline-sync")
 
let salario = entrada.questionFloat("Vamos descobrir quanto vai ficar seu novo salario, digite seu salario.\n");
let abono = entrada.questionFloat("\nSeu abono de 2026");
novoSalario = salario+abono;
console.log (" Seu novo salario é", novoSalario);
