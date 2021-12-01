// Date é uma função construtora, quando usamos essas funções usamos new para chamar
// Uma função construtora sempre começa com letra maiúscula.

// Se vc colocar apenas Date() é mostrado a data atual no formato gringo
// A data é contada em milésimos de segundo
// A data zero é 01/01/1970 (Timestamp unix, ou época unix)
/* Se vc colocar apenas Date(0) o dia que vai mostrar é 3 horas 
   antes de 01/01/1970, por causa do fuso horario
   adicionamos essas 3 horas a baixo */

const tresHoras = 60 * 60 * 3 * 1000; // dividido por 1000 pois é milesimos de segundo
const umDia = 60 * 60 * 24 * 1000; // o mesmo aqui
const data = new Date(0 + tresHoras + umDia);

console.log(data.toString());

const data2 = new Date(2019, 3, 20, 15, 14, 27, 5000)
/*quer dizer  
  ano: 2019, 
  mês: 3 'Abril', 0 = 'janeiro' 3 = 'abril'
  hora: 15h,
  minutos: 14
  segundos: 27s
  milésegundos: 999
*/

console.log(data2.toString())

const data3 = new Date('2019-04-20 20:20:59:999') // vc pode adicionar assim tamb
console.log(data3.toString())

// veja como conseguir os valores separados
console.log('Dia', data3.getDate())
console.log('Mês', data3.getMonth() + 1) // +1 pra ficar abril
console.log('Ano', data3.getFullYear())
console.log('Hora', data3.getHours())
console.log('Min', data3.getMinutes())
console.log('Segundos', data3.getSeconds())
console.log('milisegundos', data3.getMilliseconds())
console.log('Dia da semana', data3.getDay()) // 0 - Domingo, 6 - Sabado

// vamos usar um exemplo com data formatada

function zeroAEsquerda(num) { // para adiciona zero a esquerda nos numeros tipo 05
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data4.getDate());
  const mes = zeroAEsquerda(data4.getMonth() + 1);
  const ano = zeroAEsquerda(data4.getFullYear());
  const hora = zeroAEsquerda(data4.getHours());
  const min = zeroAEsquerda(data4.getMinutes());
  const seg = zeroAEsquerda(data4.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data4  = new Date();
const dataBrasil = formataData(data4)
console.log(dataBrasil);