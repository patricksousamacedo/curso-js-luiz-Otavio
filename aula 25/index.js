const numero = 10;

if (numero >= 0 && numero <= 5) {
  console.log('O número está entre 0 e 5.')
} else {
  console.log('O número não está entre 0 e 5')
}

// vamos ver outro caso

const numero2 = 20;

if (numero2 >= 0 && numero <= 5) {
  console.log('O número está entre 0 e 5');
} else if (numero >= 6 && numero <= 8) {
  console.log('O número está entre 6 e 8');
} else {
  console.log('O numeronão está entre 0 e 9')
}
