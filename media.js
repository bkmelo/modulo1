//Elabore um algoritmo em JavaScript que leia 4 notas de um participante, 
//exiba na tela a média final do participante.

const leia= require('readline-sync')

let n1, n2, n3, n4, mediaFinal

console.log (" Digite o primeiro número");
n1= leia.questionInt()

console.log (" Digite o primeiro número");
n2= leia.questionInt()

console.log (" Digite o primeiro número");
n3= leia.questionInt()

console.log (" Digite o primeiro número");
n4= leia.questionInt()

mediaFinal= (n1+n2+n3+n4)/4 

console.log ("Sua média final é\n" + mediaFinal);

