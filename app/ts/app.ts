let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

// test

const cliente1 = new Cliente('Nome1', '12345678901');
const cliente2 = new Cliente('Nome2', '98765432109');

const clientes = new Clientes();
clientes.inserir(cliente1);
clientes.inserir(cliente2);

console.log('Clientes:');
console.log(clientes.listar());

console.log('Pesquisar cliente pelo CPF:');
const clienteEncontrado = clientes.pesquisar('12345678901');
if (clienteEncontrado) {
  console.log(clienteEncontrado.toString());
} else {
  console.log('Cliente não encontrado.');
}
