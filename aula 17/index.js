// os parâmetros são similares a variáveis
// essa função espera receber esse valor nome

function saudacao(nome) { // os 'parâmetros' vem dentro dos ()
  console.log(`Bom dia! ${nome}`)
  // vc pode usar o argumento em qualquer lugar no compo da função
}

saudacao('Patrick'); // chamando a funsão
// para passar o valor para os parâmetros, é colocado um 'argumento'
// O argumento nesse caso é o nome
// Argumento é o valor passado para os parâmetros

saudacao('Ivoneide') // vc pode chamar a função mais de uma vez,
// e passar varios argumentos diferentes.


// Vc pode salvar o retorno da funsão em uma variável
// mais para isso vc precisa usar o 'return'

function saudacao2(nome) {
  return `Bom dia ${nome}` // a funsão vai retornar essa frase
}

const variavel = saudacao2('Paulo'); // salvando o retorno na variavel
console.log(variavel) // Bom dia Paulo


// função de soma

function soma(x, y) {
  const resultado = x + y;
  return resultado;
}

console.log(soma(2, 2)); // 4
console.log(soma(5, 10)); // 15

// vc não consegue acessar variáveis que estão dentro do escopo da função
console.log(resultado) // udefined


// Quando o interpretador do JS encontra o 'return' na funsão, a execução é parada

function soma2(x, y) {
  const resultado = x + y;
  return resultado;
  console.log('Olá essa mensagem ñ é exibida') // pois parou no retune
}

soma2(2,2)

// quando vc não manda os argumentos o resultado é NaN

function soma2(x, y) {
  const resultado = x + y;
  return resultado;
}

const resultado2 = soma2();
console.log(resultado2) // NaN

// vc pode passar o argunto direto nos parâmentros

function soma(x = 1, y = 1) { // x e y terãm valor 1
  const resultado = x + y;
  return resultado;
}

const resultado3 = soma();
console.log(resultado3)

// Agora se vc passar os argumentos, os valores adicionados nos parâmetros não valerão mais

function soma(x = 1, y = 1) { // x e y agora terão valor 5 e 3
  const resultado = x + y;
  return resultado;
}

const resultado3 = soma(5, 3);
console.log(resultado3)


// Outro modo de criar funsões

// jogar a funsão dentro de uma variável (function expression)

const raiz = function() {  // não precisa dar nome
  return n ** 0.5;
};

console.log(raiz(9))


// temos também a arrow function (funsão de uma linha)

const raiz2 = () => {
  return n ** 0.5;
}

console.log(raiz2(16))

// vc pode fazer assim também, quando é só um parâmetro pode tirar os () 
// se for colocar em uma linha pode retirar o 'return'

const raiz3 = n => n ** 0.5;

console.log(raiz3(25))
