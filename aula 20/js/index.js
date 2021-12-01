function meuEscopo() { // querySelector, seleciona como no css por isso usou o ponto
  const form = document.querySelector('.form'); // '.form' como no css
  const resultado = document.querySelector('.resultado');

  const pessoas = []; // array onde ficará armazenado as pessoas

  function recebeEventoForm(event) {
    event.preventDefault() // parar o refresh

    const nome = form.querySelector('.nome');    
    const sobrenome = form.querySelector('.sobrenome');    
    const peso = form.querySelector('.peso');    
    const altura = form.querySelector('.altura');    

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    })

    console.log(pessoas)

    resultado.innerHTML += `
    <p>
      ${nome.value}
      ${sobrenome.value}
      ${peso.value}kg
      ${altura.value}
    </p>`
  }

  // usamos aqui addEventListener, escutador de eventos
  form.addEventListener('submit', recebeEventoForm);// um metodo que 
  // vai executar a função recebeEventoForm, quando submit for clicado
}

meuEscopo();

/*

vamos usar uma forma antiga de desligar o refresh, como exemplo

form.onsubmit = function(evento) { // recebe um event como padrão
  // onsubmit é o evento que recarega a pagina quando o form é enviado
  evento.preventDefault(); // não envie o form
};

*/