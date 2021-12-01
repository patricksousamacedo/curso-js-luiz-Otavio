// vc não pode usar "" dentro de ""
// mais vc pode 'escapar' usando a barra invertida \

let umaString = "Um \"texto\""; // ai vai funcionar sem erros

console.log(umaString);

// os Caracteres de uma string são indexados
// ou seja cada caractere tem seu proprio numero "index"
//               01234567
let umaString = "Um texto";

// aqui vai mostrar apenas a letra 'e'
console.log(umaString[4]); // e

// charAt() vai pegar o elemento pelo index
console.log(umaString.charAt(6)) // t


// concat() concatena

console.log(umaString.concat(' em um lindo dia.')) // Um texto em um lindo dia

// indexOf diz o index pelo começo

// texto começa no index 3
console.log(umaString.indexOf('texto')); // 3

// lastIndexOf começa no final

// o index final é 7
console.log(umaString.lastIndexOf('o')); // 7

// Quando indexOf e lastIndexOf não encontram eles retornam -1


// replace() subtitui o texto

// substituir 'um' por 'outro'
console.log(umaString.replace('Um', 'Outo')) // Outro texto


// length mostra o tamanho da string

console.log(umaString.length); // 8

//slice() diz onde começa e termina

// vai começar no index 2 e terminar no 6 a frase 
// mostrada fica entre esses caracteres
console.log(umaString.slice(2, 6)) // vc pode usar -3 numeros negativos

// split()  vai dividir a string

console.log(umaString.split('r')) // vai dividir em cada 'r'
console.log(umaString.split(' ', 3)) // será mostrado 3 resultados

console.log(umaString.toLocaleUpperCase()) // todos os caracteres maiúsculos
console.log(umaString.toLocaleLowerCase()) // todos os caracteres minúsculos