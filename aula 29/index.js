const data = new Date('1987-04-21 00:00:00'); // 2 segunda-feira
const diaSemana = data.getDay();
let diaSemanaTexto;

if (diaSemana === 0) {
  diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
  diaSemanaTexto = 'Segunda';
} else if (diaSemana === 2) {
  diaSemanaTexto = 'Terça';
} else if (diaSemana === 3) {
  diaSemanaTexto = 'Quarta';
} else if (diaSemana === 4) {
  diaSemanaTexto = 'Quinta';
} else if (diaSemana === 5) {
  diaSemanaTexto = 'Sexta';
} else if (diaSemana === 6) {
  diaSemanaTexto = 'Sabado';
} else {
  diaSemanaTexto = 'Esse dia não existe'
}

console.log(diaSemana, diaSemanaTexto);

// Agora vamos fazer a mesma coisa com switch

const data2 = new Date('1987-04-25 00:00:00');
const diaSemana2 = data.getDay();
let diaSemanaTexto2;


switch (diaSemana2) { // vamos chegar o valor dessa variável
  case 0:
    diaSemanaTexto2 = 'Domingo';
    break; // temos que usar break para parar a execução
  case 1:
    diaSemanaTexto2 = 'Segunda';
    break;
  case 2:
    diaSemanaTexto2 = 'Terça';
    break;
  case 3:
    diaSemanaTexto2 = 'Quarta';
    break;
  case 4:
    diaSemanaTexto2 = 'Quinta';
    break;
  case 5:
    diaSemanaTexto2 = 'Sexta';
    break;
  case 6:
    diaSemanaTexto2 = 'Sabado';
    break;
  default:
    diaSemanaTexto2 = 'Esse dia não existe';
  // não precisa usar break no default, mais pode se quiser
}


// Se vc colocar isso dentro de uma função podemos eliminar os break

function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto2;

  switch (diaSemana2) {
    case 0:
      diaSemanaTexto2 = 'Domingo';
      return diaSemanaTexto2; // quando se encontra return para a execução
    case 1:
      diaSemanaTexto2 = 'Segunda';
      return diaSemanaTexto2;
    case 2:
      diaSemanaTexto2 = 'Terça';
      return diaSemanaTexto2;
    case 3:
      diaSemanaTexto2 = 'Quarta';
      return diaSemanaTexto2;
    case 4:
      diaSemanaTexto2 = 'Quinta';
      return diaSemanaTexto2;
    case 5:
      diaSemanaTexto2 = 'Sexta';
      return diaSemanaTexto2;
    case 6:
      diaSemanaTexto2 = 'Sabado';
      return diaSemanaTexto2;
    default:
      diaSemanaTexto2 = 'Esse dia não existe';
  }

  return diaSemanaTexto2;
}

console.log(getDiaSemanaTexto(diaSemana2))