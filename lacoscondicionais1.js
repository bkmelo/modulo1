const leia=  require('readline-sync')

//Exercicio 1 - Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e 
// imprima na tela se a soma de A + B é maior, menor ou igual a C.


let a,b,c, resultado

console.log (" Digite o número A");
a= leia.questionInt()

console.log (" Digite o número B");
b= leia.questionInt()

console.log (" Digite o número C");
c= leia.questionInt()

if 
    (a+b >c) {console.log (" A soma do A + B é maior do que C")}

else if  
    (a+b <c)  {console.log (" A soma do A + B é menor do que C")}

else 
   { console.log (" A soma de A + B é igual a C")}
