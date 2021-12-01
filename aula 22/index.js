/* Operadores Lógicos

  && - AND = É
  || - OR = OU
  ! - NOT - NÃO
*/

// && - todas as condições precisam ser verdadeiras
// se apenas uma delas for falsa toda a expressão será falsa
console.log(true && true && true && true && false);

// || - Apensa uma condição precisa ser verdadeira 
// para que toda a expressão retorne como true
console.log(true || false || true || true || false);

// ! - nega o que é, se algo é true ao colocar ! vira false
console.log(!false) // true
console.log(!true) // false
console.log(!!true) // se você nega duas vez vira true denovo kkk
// duas negações retornam para o valor original