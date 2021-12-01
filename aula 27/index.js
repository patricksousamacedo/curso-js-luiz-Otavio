// ? :

// uma condição simples usando if else

const pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 1000) {
  console.log('Usuário VIP')
} else {
  console.log('Usuario normal')
}

// a mesma condição usando operadores ternarios, fica mais curta

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario)

// ? Equivale a 'true'
// : Equivale a 'false'

// (condição) ? 'Valor para verdadeiro' : 'Valor par falso';

const corUsuario = 'Branco';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao)