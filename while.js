/*Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), via teclado e mostre na tela o total de pessoas 
cuja idade seja menor que 21 anos e o total de pessoas cuja idade, seja maior que 50 anos. 
A leitura dos dados deve ser finalizada ao digitar uma idade negativa.*/

const leia = require ('readline-sync');

let idadeMenor21, idadeMaior50, idade;

idadeMenor21 = 0;
idadeMaior50 = 0;   

idade = leia.questionInt("Digite as idades: ");

while (idade >= 0)
{
    if (idade < 21)
    {
        idadeMenor21 = idadeMenor21+ 1;    
    }
    else if (idade > 50)
    {
        idadeMaior50 = idadeMaior50+ 1;
    }     
   
    idade = leia.questionInt("Digite outra idade:ou um numero negativo para parar o programa ");
}   
console.log(" Você digitou o total de " + idadeMenor21 + " pessoas com menos de 21 anos");
console.log(" E o total de " + idadeMaior50 + " pessoas com mais de 50 anos.");


