// Arredondar para baixo

let = num1 = 9.53565;
let = num2 = Math.floor(num1);

console.log(num2) // 9

// Arredondar para cima

let = num2 = Math.ceil(num1);

console.log(num2) // 10

// Arredonda para o numro mais proximo

let = num2 = Math.round(num1);

console.log(num2) // 10 nesse caso também é 10

// Pegar o maior numero da sequencia

console.log(Math.max(1,52,5,3,-6,-4,-65,5,15,5));

// Pegar o menor numero da sequencia

console.log(Math.min(1,52,5,3,-6,-4,-65,5,15,5));


// Gerar numeros aleatórios

console.log(Math.random()); // gera um numero aleatório entre 0 e 1

const aleatorio = Math.random() * (10 - 5) + 5; // numero aleatório entre 10 e 5
console.log(aleatorio);

// numero aleatório entre 10 e 5 arredondado
const aleatorio2 = Math.round(Math.random() * (10 - 5) + 5); 
console.log(aleatorio2);

// Pi
console.log(Math.PI)

// Raiz quadrada

let num3 = 9;
console.log(num1 ** (1/2)); // 3
console.log(num3 ** 0.5) // 3
