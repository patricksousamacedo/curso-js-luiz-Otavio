const pessoa1 = { // obj usa {}
  // atributo: 'valor',
  nome: 'Patrick',
  sobrenome: 'Macedo',
  idade: 25
};

const pessoa2 = {
  nome: 'Ivoneide',
  sobrenome: 'Freitas',
  idade: 50
};

// para acessar os atributos usamos a notação de ponto

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);


// veja uma função para criar pessoas (factory)
// uma funsão fabrica de obj

function criaPessoa (nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  }
}

const pessoa3 = criaPessoa('Ivoneide', 'Freitas', 50);
const pessoa4 = criaPessoa('Paulo', 'Macedo', 42);
const pessoa5 = criaPessoa('Patrick', 'Macedo', 23);

console.log(pessoa3.nome, pessoa4.sobrenome) // vc pode pegar o que quiser do obj


// quando o atributo criado no obj é o mesmo que o valor, só é preciso declarar uma vez

function criaPessoa (nome, sobrenome, idade) {
  return {
    nome, // não precisa nome: nome
    sobrenome,
    idade
  }
}

// Quando uma função está dentro de um obj ela é chamada de 'metodo'

const pessoa6 = {
  nome: 'José',
  sobrenome: 'Gonçalves',
  idade: 30,

  fala() {
    console.log('Olá mundo!')
  }
};

pessoa6.fala(); // o metodo é executado


// Dentro do obj existe a palavra 'this'
/* Isso quer dizer que vc pode referenciar o obj
   ou qualquer atributo dele, dentro do metodo
   ou seja a função que está no obj.
   'this' significa: este obj neste contexto
*/

const pessoa7 = {
  nome: 'Maria',
  sobrenome: 'Tereza',
  idade: 40,

  fala() {
    // de certa forma this serve para pegar os dados do obj para serem usados no metodo
    console.log(`${this.nome} ${this.sobrenome} está falando oi`) // Maria Tereza está falando oi
  }
};

pessoa7.fala();


// vamos icrementar a idade

const pessoa8 = {
  nome: 'Tomaz',
  sobrenome: 'Silva',
  idade: 60,

  fala() {
    console.log(`A minha idade atual é ${this.idade}`);
  },
  incrementaIdade() { // outro metodo dentro do obj
    this.idade++;
  }
};

pessoa8.fala();
pessoa8.incrementaIdade(); // a idade será +1
pessoa8.fala();
