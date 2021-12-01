// não é uma boa pratica usar varios tipos de dados em um array, mais funciona
const alunos = ['Patrick', 'Ivoneide', 'Paulo', 1, true, null];
console.log(alunos);

// cada elemento do array é um indice
//                  0          1          2
const alunos2 = ['Patrick', 'Ivoneide', 'Paulo'];
console.log(alunos2[0]);


// vc pode editar um valor de um array

alunos2[0] = 'Pedro';
console.log(alunos2) // [ 'Pedro', 'Ivoneide', 'Paulo' ]


// vc pode adicionar mais valores

alunos2[3] = 'Luiza';
console.log(alunos2); // [ 'Pedro', 'Ivoneide', 'Paulo', 'Luiza' ]

// existe uma maneira mais facil para adicionar indices no final do array

alunos2.push('João');
alunos2.push('Maria');
console.log(alunos2)


// vc pode adicionar elementos no começo de um array

alunos2.unshift('José');
alunos2.unshift('Rafaela');
console.log(alunos2);

// vc pode remover um indice do final do array

alunos2.pop(); // retirou o ultimo nome
console.log(alunos2)

// vc pode salvar o elemento removido em pop()

const removido = alunos2.pop();
console.log(removido);
console.log(alunos2)

// vc pode remover o primeiro elemento de um array

const removido2 = alunos.shift()
console.log(removido2);
console.log(alunos2)

// vc pode apagar o indice de um array

delete alunos2[1]; // remove o indice 1
console.log(alunos2);


// para saber o tamanho do array

console.log(alunos.length) // tamanho

