// Aritméticos + - / *

const num1 = 5;
const num2 = 10;

console.log(num1 + num2) // 15

// Potenciação **


const num3 = 2;
const num4 = 10;

console.log(num3 ** num4) // 1024

// Resto da divisão %

const num5 = 10;
const num6 = 3;

console.log(num5 % num6) // 1

// Assim como na matematica a ordem de precedencia é obedecida.

console.log(num1 + num2 * num3) // 25

// Como namatematica se usar () eles será resolvidos primeiro

console.log((num1 + num2) * num3) // 30

/* Orderm de precedencia
  
  () primeiro os  parenteses
  ** potenciação
  * / % multiplicação, divisão e modulo
  + - subtração e adição
 
*/

// Incrementação (ir somando 1 para o valor da variável)

let contador = 1;
contador ++; // vari ter o valor dela + 1
console.log(contador) // 2

// Se vc for chamando o incrementador em loop o valor será almentado a cada loop. 
// use sempre let para incrementação.

// vc pode adicionar o incremento antes, pré-incremento

++contador 

// veja agora o pós-incremento

let contador2 = 1;
console.log(contador2++) // 1
console.log(contador2) // 2

// nesse caso a incrementação fica por ultimo, primeiro foi printado na tela
// depois foi incrementado, por isso no segundo console.log fica com 2

// Decremento (ir subtraindo 1 do valor da variável)

let contador3 = 10;
console.log(--contador3) // 9
console.log(--contador3) // 8


// Atribuição

let contador5 = 0;
contador5 += 2; // lê-se contador = contador + 2;
contador5 += 2;
contador5 += 2;
console.log(contador5) // 6

// vc pode usar todos os operadores aritimeticos e potenciação

contador6 *= 2;
contador6 /= 2;
contador6 -= 2;
contador6 += 2;
contador6 **= 2;


// NaN - Not a number
// sempre acontece quando sua conta deu errado

let num7 = 10;
let num8 = 'Luiz';
console.log(num7 + num8) // NaN


// Conversão de string para number

// parseInt() converte a string em number (conversão para numeros inteiros)

num7 = 10;
num8 = parseInt('5');
console.log(num7 + num8) // 15

// parseFloat() converte a string em numberfloat (conversão para numeros quebrados)

num7 = 10;
num8 = parseFloat('5.2');
console.log(num7 + num8) // 15.2

// Number() converte para number indepedente se é inteiro ou quebrado

num7 = 10;
num8 = Number('5.2');
console.log(num7 + num8) // 15.2