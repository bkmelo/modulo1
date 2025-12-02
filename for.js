//Escreva um algoritmo, que leia 10 números inteiros via teclado 
//e mostre na tela quantos números são pares e quantos número são ímpares.

const leia = require ('readline-sync');

let numerosPares, numerosImpares;

numerosPares = 0;
numerosImpares = 0;

for ( let contador = 1; contador <=10; contador++)
{
    let numero= leia.questionInt("Digite um numero inteiro: ");
    if (numero % 2 === 0)
    {
        numerosPares = numerosPares + 1;    
    }
    else numerosImpares = numerosImpares + 1;

    console.log(" Você digitou o total de " + numerosPares + " números pares e o total de " + numerosImpares + " números ímpares.");
}