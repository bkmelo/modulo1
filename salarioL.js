//Leia o Salário Bruto, o Adicional Noturno, as Horas Extras e os Descontos de um Colaborador, 
// exiba na tela o Salário Líquido

const leia= require('readline-sync')

let SB, AN, HE, D, salarioLiquido

console.log ("Vamos ver quanto vai ficar seu salário liquido esse mês\n");

console.log (" Digite o seu salario bruto");
SB= leia.questionInt()

console.log (" Digite os adicionais noturnos");
AN= leia.questionInt()

console.log (" Digite as horas extras");
HE= leia.questionInt()

console.log (" Digite os descontos");
D= leia.questionInt()

salarioLiquido= SB+AN+ (HE*5)-D 

console.log ("Sua salario liquido será\n" + salarioLiquido);

