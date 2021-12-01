/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 12 - 23 - Boa noite
*/

const hora = 32;

if (hora >= 0 && hora <= 11) {
  console.log('Bom dia!')
} else if (hora >= 12 && hora <= 17) {
  console.log('Boa tarde!')
} else if(hora >= 18 && hora <= 23) {
  console.log('Boa noite!')
} else {
  console.log('Essa hora não exite')
}

// If pode ser usado sozinho
// else if não pode ser usado sozinho
// Sempre que uso 'else' preciso usar 'if' antes
// Eu posso ter indefinidos else if na checagem
// Eu só posso ter apenas um 'else' na checagem, sempre no final. 
// Podemos usar condições com apenas if e else
// Podemos fazer condições apenas com if

const tenhoGrana = true;

if(tenhoGrana) {
  console.log('Vou sair de casa');
} else {
  console.log('Não vou sair de casa');
}