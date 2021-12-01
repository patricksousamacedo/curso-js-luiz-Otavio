const nome = 'Patrick Macedo';

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]); // pegando cada letra
}

for (let i in nome) {
  console.log(nome[i]) // pegando cada letra
}

// For of paga diretamente o valor

for (let valor of nome) {
  console.log(valor) // pegando cada letra
}

const nome2 = ['Patrick', 'Ivoneide', 'Paulo'];

for (let valor of nome2) {
  console.log(valor) // pega os valores do array
}

// também temos o forEach

nome2.forEach(function(valor, indice, array) {
  console.log(valor, indice, array)
})

// no forEach temos o valor o indice e o array completo

/* Obs
  For Clássico - Geralmente com iteráveis (array ou strings)
  For in - Retorna o índice ou chave (string, array ou objetos)
  For of - Retorna o valor em si (iteráveis, arrays ou strings)
*/