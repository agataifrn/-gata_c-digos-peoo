"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var conta_bancaria_1 = require("./conta_bancaria");
var minha_conta = new conta_bancaria_1.ContaBancaria(0, "Ágata");
minha_conta.depositar(90.50);
minha_conta.depositar(-1.50);
minha_conta.sacar(40.50);
minha_conta.sacar(-2.50);
console.log(minha_conta.mostrarSaldo());
/* Crie uma classe ContaBancaria com atributos privados saldo (number) e titular (string).
Adicione um construtor que inicializa esses valores.
Crie métodos depositar(valor: number) e sacar(valor: number) para atualizar o saldo.
Crie um método mostrarSaldo() que retorna o saldo atual.
Teste a classe criando uma instância e executando as operações de depósito e saque. */ 
