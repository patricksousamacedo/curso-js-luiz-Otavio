/* Operadores de comparação

> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (checa valor)
=== igualdade estrita (checa valor e tipo)
!= diferente (checa valor)
!== diferente estrito (checa valor e tipo)
*/

console.log(10 > 5); // true
console.log(5 < 70); // true
console.log(10 >= 5); // true
console.log(10 >= 11); // false
console.log(10 <= 15); // true
console.log(10 == 15); // false
console.log(10 == '10') // 'true' pois foi feito uma correção de tipos do JS
console.log(10 === '10') // 'false' por isso devemos usar === pois ele checa o tipo
console.log(10 != '10') // 'false' o mesmo motivo, correção de tipos do JS
console.log(10 !== '10') // 'true' é diferente, !== checa o tipo também
