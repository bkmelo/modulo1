//Leia quatro valores (n1, n2, n3, n4). 
// A seguir, calcule e mostre a diferença do produto 
// entre o n1 e n2 pelo produto entre o n3 e o n4. 


const leia= require('readline-sync')

let n1, n2, n3, n4, resultado

console.log (" Digite o primeiro número");
n1= leia.questionInt()

console.log (" Digite o primeiro número");
n2= leia.questionInt()

console.log (" Digite o primeiro número");
n3= leia.questionInt()

console.log (" Digite o primeiro número");
n4= leia.questionInt()

resultado= (n1*n2) - (n3*n4)

console.log ("O resultado da diferença é\n" + resultado);

