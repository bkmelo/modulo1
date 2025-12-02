//Para doar sangue é necessário ter entre 18 e 69 anos. 
// Pessoas com idade entre 60 e 69 anos, só podem doar sangue se não for a sua primeira doação.
// Escreva um Algoritmo que leia via teclado o nome do doador (string),
//  a idade (número inteiro) do doador e se já fez outras doações de sangue (boolean). 
// Conforme as Regras para a doação de sangue citadas acima:
//  mostre na tela se o doador está Apto ou Não Apto para doar sangue.
const leia = require ('readline-sync')

let nome , idade , primeiraVez

console.log ("Digite o seu nome:");
nome = leia.question()

console.log ("Digite a sua idade:");
idade = leia.questionInt() 

console.log ("É a primeira vez que você doa sangue? ( true / false )");
primeiraVez = leia.question()=="true";



if (idade>=60 && idade<=69)
        if (primeiraVez===false) {console.log ("Você está apto a doar sangue")}
        else { console.log ("Você não está apto a doar sangue")}
 
else {console.log ("Você está apto a doar sangue")};
   

