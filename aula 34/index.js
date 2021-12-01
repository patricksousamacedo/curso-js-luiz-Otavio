for (let i = 0; i <= 5; i++) {
  console.log(`Linha ${i}`) // vai mostrar o valor de i enquanto ele for <= 5
}

for (let i = 400; i <= 500; i++) {
  console.log(`Linha ${i}`) 
}

for (let i = 400; i <= 500; i += 10) { // para ir de 10 em 10
  console.log(`Linha ${i}`) 
}

for (let i = -100; i <= 500; i += 10) { // começar do negativo
  console.log(`Linha ${i}`) 
}

for (let i = 500; i >= 400; i -= 10) { // decremente
  console.log(`LINHA ${i}`) // começar do 500 e terminar no 400
}

// Saber se o numero é par ou impar

for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? 'par' : 'impar';
  console.log(i, par)
}

// Usando em arrays

const frutas = ['Maça', 'Pêra', 'Uva', 'Abacaxi', 'Tomate'];

for (let i = 0; i < frutas.length; i++) {
  console.log(`Indice ${i}`, frutas[i]) // mostra o indice e a fruta
}
