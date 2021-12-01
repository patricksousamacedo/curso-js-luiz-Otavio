const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p'); 

//getComputedStyle é uma funcionalidade do browser, uma função que só funciona no navegador
// ela pega todos os estilos css computados
const estilosBody = getComputedStyle(document.body); // nesse caso está pegando o do body
const backgroundColorBody = estilosBody.backgroundColor; // pagando a cor do background
//console.log(backgroundColorBody)


for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = '#ffffff'; // cor do texto
}

// OBS: TODOS OS SELETORES CSS USADOS NO JS OU JSON NÃO POSSUEM MAIS TRAÇO '-'
// É SÓ CONVERTE-LOS AO PADRÃO camelCase