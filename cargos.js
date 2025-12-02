const leia= require('readline-sync')

let nome,codigo,salarioAtual,novoSalario,percentual 

console.log("Digite o nome do colaborador:");
nome = leia.question();

console.log("Digite o código do cargo (1 a 6):");
codigo = leia.questionInt();

console.log("Digite o salário atual:");
salarioAtual = leia.questionFloat();

switch (codigo) {

    case 1:
        cargo = "Gerente";
        percentual = 0.10; // 10%
        break;

    case 2:
        cargo = "Vendedor";
        percentual = 0.07; // 7%
        break;

    case 3:
        cargo = "Supervisor";
        percentual = 0.09; // 9%
        break;

    case 4:
        cargo = "Motorista";
        percentual = 0.06; // 6%
        break;

    case 5:
        cargo = "Estoquista";
        percentual = 0.05; // 5%
        break;

    case 6:
        cargo = "Técnico de TI";
        percentual = 0.08; // 8%
        break;

    default:
        console.log("Código inválido!");
        return; 
}

novoSalario = salarioAtual + (percentual * salarioAtual);

console.log(`\n===== RESULTADO =====`);
console.log(`Colaborador: ${nome}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salário Reajustado: R$ ${novoSalario.toFixed(2)}`);