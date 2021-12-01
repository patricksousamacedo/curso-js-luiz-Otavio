const pessoa = {
  nome: 'Patrick',
  sobrenome: 'Macedo',
  idade: 23,
  endereco: {
    rua: 'Av Brasil',
    numero: 320
  }
};

// Atribuição via desestruturação

const { nome } = pessoa; // traz do obj 'pessoa' a chave 'nome' e já cria uma const
const { sobrenome, idade } = pessoa // pode chamar mais de um
console.log(nome);

// vc pode mudar o nome da variável

const { nome: teste } = pessoa // agora ao invés de chamar nome, chama teste
console.log(teste)

const { endereco: { rua, numero }, endereco } = pessoa; // pegando só o que interessa de 'endereco'
console.log(rua, numero);
console.log(endereco); // pode pegar tamb endereco como está

// vc pode usar um valor padrão caso não exista no obj

const { endereco: { rua: r = 12345 } } = pessoa;
console.log(r) // se não houver nada em rua no obj, vai parecer 12345

// vc pode usar o operador ...rest

const { nome2, ...resto } = pessoa;
console.log(nome2, resto); // vai aparecer o resto do obj
