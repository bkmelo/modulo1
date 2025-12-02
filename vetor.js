/*Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, 
construa um algoritmo que consiga pesquisar dados no vetor, onde o usuário irá digitar um número e o
programa deve exibir na tela a posição deste número no vetor. 
Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela.*/

const leia = require("readline-sync")


let vet=[1,3,2,4,6,5,7,9,8,10]
let indice, numero

numero= leia.questionInt("Digite o numero que voce quer encontrar")

for ( let i = 0; i < vet.length;i++){
    if ( numero ===vet[i]){
        indice=i }
}
 if ( indice!== undefined){
    console.log ("O numero esta no indice:" + indice)
    } 
 
else { console.log ( "O numero nao existe");

}



