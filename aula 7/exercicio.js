/* 
Patrick Sousa de macedo tem 23 anos, pesa 84 kg
tem 1.7 de altura e seu IMC é de 25.9+86+568656
Patrick Macedo nasce em 1998
*/

const nome = 'Patrick Sousa de';
const sobrenome = 'Macedo';
const idade = 23;
const peso = 85;
const alturaEmM = 1.70;
let imc = peso / (alturaEmM * alturaEmM)
let anoNascimento = 2021 - 23

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso + 'kg');
console.log('Tem', alturaEmM, 'de altura e seu IMC é de', imc);
console.log(nome, sobrenome, 'nasceu em', anoNascimento);

// Vc pode usar Template strings

console.log(`${nome} ${sobrenome} tem, ${idade} anos, pesa ${peso}kg`)
console.log(`Tem ${alturaEmM} de altura e seu IMC é de ${imc}`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)