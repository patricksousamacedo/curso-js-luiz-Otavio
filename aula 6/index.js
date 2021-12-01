// let veio para substituir var, mais ainda é possível usar var.
// Mais não utilize var utilize let

let nome = 'João';

nome = 'Fulano'; // aqui vc está inicializando a variável, sobrescrevendo seu valor

console.log(nome, 'nasceu em', 1984)
console.log('Em', 2000, nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.')
console.log('Maria teve 1 filho com', nome,'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');

nome = 'Patrick' // A pardir dessa parte do código, nome tem seu valor alterado

console.log('voce mudou o valor para: ', nome);

nome = 'Paulo'

console.log('Agora vc mudou para: ', nome);

let nome2; // vc pode iniciar uma variavel sem valor, fica como undefined
console.log(nome2) // undefined


/** Regras para criação de variáveis
 * 
 * Não podemos criar variáveis com palavras reservadas ex: let if = '...';
 * Variáveis precisam ter nomes significativos ex: let n = '...';
 * Não podde começar o nome e uma variável com um número, ex: let 1nome;
 * Escreva o nome das suas variáveis usando camelCase.  
 * O nome das variáveis não pode conter espaços e traços.
 * Case-sensitive quer dizer que letra maiúscula e minúscula faz difereça
 * ou seja 'nomeCliente' e 'nomecliente' são nomes diferentes para o JS.
 * Não podemos redeclarar variáveis com let, podemos apenas mudar o valor.
 */