let varA = 'A'; // B 
let varB = 'B'; // C 
let varC = 'C'; // A

console.log(varA, varB, varC);

const varATemp = varA; // foi criada uma var para armazenar o valor de A temporariamente
varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);

// outra forma de resolver

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
