let num1 = 10;
let num2 = 2.5;

// converter number em string

console.log(num1.toString() + num2.toString()); //  junta os numeros

// converte o numero em binario

console.log(num1.toString(2)) // mostra o numero em binário

// Diminuir as casas decimais

let num3 = 10.69874656

console.log(num3.toFixed(4)) // mostra apenas 4 casas decimais

// mostra se o numero é inteiro ou não

console.log(Number.isInteger(num3)) // false

// ver se é NaN

let temp = num1 * 'Ola';
console.log(Number.isNaN(temp)) // true

// O JS segue o IEEE 754-2008

let num4 = 0.7;
let num5 = 0.1;

num4 += num5;
num4 += num5;
num4 += num5;

// Note que tem uma imprecisão 
console.log(num4 + num5); // 0.799999999999

num4 = Number(num4.toFixed(2)); // faça isso para resolver

console.log(num4); // agora ficou redondo

