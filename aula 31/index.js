const verdadeira = true;

let nome = 'Luiz'; // criando 
var nome2 = 'Luiz';

if (verdadeira) {
  let nome = 'Otávio' // criando dentro deste bloco, apensar de ter o mesmo
  // nome mais não é a mesma variável
  console.log(nome, nome2) // Otávio Luiz
  // nesse caso não está redeclarendo a let, pois let tem escopo de bloco

  if (verdadeira) {
    let nome = 'Outra coisa' // criando, pois aqui é outro bloco
    console.log(nome, nome2) // Outra coisa Luiz
  }
}

// let tem escopo de bloco, var tem escopo de função
// Esse mesmo processo não funciona com var, se vc fizer o mesmo
// com var ela não será criada, mais redeclarada em cada bloco

// Escopo de função com var

function falaOi() {
  var nome = 'Patrick';

}
console.log(nome) // vai dar erro, pois o a var não é acessada fora do escopo

falaOi();

// Mais vc pode usar dento das funções as varáves que estão no entrono dela

var nome2 = 'Paulo'

function falaOi2() {
  console.log(nome2) // Paulo
}

falaOi2()

// Roisting

/* 
  quando usamos uma variável antes de declara-la o JS eleva ela para o topo
  e o resultado na tela é undefined. Mais isso só acontece com var, não com let
*/

console.log(sobrenome) // undefined

var sobrenome = 'Macedo'  // declarada depois
// agora se fosse let: let sobrenome = 'Macedo' daria erro

// esse mesmo caso acontece com as funções escritas com a palavra 'function'
// essas funções se comportam como as variáveis var como mostrado acima