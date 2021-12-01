/* Valores avaliados como falso no JS

  - false
  - 0
  - '' "" ``
  - null / undefined
  - NaN 
*/

// Se não tem nenhum valor false o ultimo valor e mostrado
console.log('Luiz' && 'Maria'); // Maria

// Agora como na expressão temos um valor avaliado em falso, esse valor e mostrado
console.log('Luiz' && 'Maria' && 0); // 0

function falaOi() {
  return 'oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi()); 
// como o retorno de vaiExecutar é false, falaOI não é mostrada


function falaOi() {
  return 'oi';
}

const vaiExecutar1 = 'Joãozinho';

console.log(vaiExecutar1 && falaOi()); 
// como o retorno de vaiExecutar agora é true, falaOI mostra oi


// Agora vamos ver isso com ||

console.log(0 || false || null || 'patrick' || true); // patrick
// é preciso apenas uma expressão verdadeira para ser retornada
// essa expressão é a que é retonada, no caso o meu nome 'patrick'.

console.log('vermelho' || 'preto') // como os dois são verdadeiros,
// o primeiro valor verdadeiro é retonado.