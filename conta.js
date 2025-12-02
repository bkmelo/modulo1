const leia = require('readline-sync');

let saldo = 1000.00; // saldo inicial

console.log("=== MENU DE OPERAÇÕES ===");
console.log("1 - Saldo");
console.log("2 - Saque");
console.log("3 - Depósito");
console.log("==========================");

let operacao = leia.questionInt("Digite o codigo da operacao: ");

switch (operacao) {

    case 1: // SALDO
        console.log(`Seu saldo atual é: R$ ${saldo.toFixed(2)}`);
        break;

    case 2: // SAQUE
        let saque = leia.questionFloat("Digite o valor do saque: ");

        if (saque > saldo) {
            console.log("Saldo insuficiente! Operação cancelada.");
        } else {
            saldo -= saque;
            console.log(`Saque realizado com sucesso! Novo saldo: R$ ${saldo.toFixed(2)}`);
        }
        break;

    case 3: // DEPÓSITO
        let deposito = leia.questionFloat("Digite o valor do depósito: ");
        saldo += deposito;
        console.log(`Depósito realizado! Novo saldo: R$ ${saldo.toFixed(2)}`);
        break;

    default:
        console.log("Operação Inválida!");
}