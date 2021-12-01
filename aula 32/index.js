let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c); // B C A

///////////
//  indices      0      1     2     3     4
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const primeiroNumero = numeros[0];
console.log(numeros[0]) // 1000

const numeros2 = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// ou seja pega o indice 0 e 1 de numeros2, pegando por desestruturação
const [primeiroNumero2, segundoNumero] = numeros2; 
console.log(primeiroNumero2, segundoNumero) // 1000 2000

// vc pode pegar o resto do array com o operador ...resto
// ...rest, ...spread

const numeros3 = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero3, segundoNumero3, ...resto] = numeros3;
console.log(primeiroNumero3, segundoNumero3) // 1000 2000
console.log(resto) // vai mostrar o resto do array

// algo interesante

//                     0          1          2
//                  0  1  2    0  1  2    0  1  2
const numeros4 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(numeros4[1][2]); // 6

const [,[,,seis]] = numeros4; // vc pula os indices com a virgula
console.log(seis);