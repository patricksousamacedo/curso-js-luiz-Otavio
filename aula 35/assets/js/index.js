const elementos = [
  {tag: 'p', texto: 'Frase 1.'},
  {tag: 'div', texto: 'Frase 2.'},
  {tag: 'section', texto: 'Frase 3.'},
  {tag: 'footer', texto: 'Frase 4.'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++) {
  //console.log(elementos[i]) // veja no console do navegador

  let { tag, texto } =  elementos[i]; // desestruturação
  let tagCriada = document.createElement(tag);
  tagCriada.innerText = texto;
  div.appendChild(tagCriada); // jagamos as tags criadas dentro da div
}

container.appendChild(div); // jogamos a div dentro do container

// vc também poderia usar o createTextNode

/*
  let tagCriada = document.createElement(tag);
  let textoCriado = document.createTextNode(texto); <- aqui

  tagCriada.appendChild(textoCriado);
  div.appendChild(tagCriada);
*/