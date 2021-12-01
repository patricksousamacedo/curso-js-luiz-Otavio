const nome = 'João';
console.log(nome);

// é preciso adicionar o valor na const logo na criação dela
const nome; // vc não pode fazer isso com const


// Você não pode mudar o valor de uma const
  const nome = 'João'
  nome = 'Patrick' // vc não pode fazer isso

// + - * / 
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero; // 50
const resultadoDuplicado = resultado * 2; // 100
let resultadoTriplicado = resultado * 3; // 150
resultadoTriplicado = resultadoTriplicado + 5; // 155

// Para descobrir qual o tipo da variável use typeof
console.log(typeof(primeiroNumero)) // number
console.log(typeof nome) // string
// pode usar typeof sem as ()
