const frutas = ['Pera', 'Maçã', 'Uva']; // um array de uma unica direção tamb chamado 'vetor'

for (let indice in frutas) { // For in ler os indices 
  console.log(frutas[indice]);
}

const pessoa =  {
  nome: 'Patrick',
  sobrenome: 'Macedo',
  idade: 23
};

for (let chave in pessoa) {
  console.log(pessoa[chave]) // pegando o valor
}
