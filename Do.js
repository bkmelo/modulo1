/*Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado.
Ao final, mostre na tela a soma de todos os números digitados, que sejam positivos.*/

const leia = require ('readline-sync');

let numeroInt = 0, resultado=0

do { numeroInt= leia.questionInt("Digite um numero inteiro: ");

    if (numeroInt>0) { resultado= resultado+ numeroInt}
    
}

while (numeroInt!==0)
    console.log ( " A soma dos números positivos é " + resultado +""); 


  

   