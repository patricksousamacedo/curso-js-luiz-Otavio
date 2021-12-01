// tipo de dado string

const nome = 'Patrick'; // pode criar com ''
const nome1 = "Paulo"; // pode criar com ""
const nome2 = `Ivoneide` // pode criar com ``

// tipo de dado num

const num1 = 10; // number
const num2 = 10.52; // number float

// tipo undefined

let nomeAluno; // não aponta para local nenhum na momória

// tipo nulo

const sobrenomeAluno = null; // não aponta para local nenhm na memória

/*
 usamos null quando queremos desconfigurar uma variável 
 Ex: vc vai criar um site que muda a cor de fundo quando o usuário
 escolher, essa variável que guarda a cor pode começar como null,
 quando o usuário escolher a cor ela vai receber o valor como red, green, blue, etc.

 A variável undefined e definida pelo JS, quando a variável não tem nada
 o JS diz que é undefined
*/

// tipo boleano (verdadeiro ou falso)

const aprovado = true // true ou false
const reprovado = false

// veja os tipos das variáveis

console.log(typeof sobrenomeAluno) // apensar disso null não é obj

// tipo de dado passado por referencia

let a = [1, 2];
let b = a; // valor de b passado para a por referencia.

console.log(a, b) // [1 ,2] [1, 2]

b.push(3);

console.log(a, b) //[1, 2, 3] [1, 2, 3] o valor foi passado para a por referencia

// agora se vc adicionar um novo valor para a, b não tera o valor alterado
// pois o valor de b era passado para a e não de a para b

let a = 2;
let b = a;
console.log(a, b) // 2, 2

a = 3;
console.log(a, b) // 3, 2
