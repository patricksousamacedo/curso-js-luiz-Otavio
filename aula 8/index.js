// Com var é possivel redeclarar o valor da variável, com let isso não é possível

var nome = 'Patrick';
var nome = 'Paulo' // vc não pode fazer isso com let
console.log(nome) // Paulo

nomev = 'Macedo'; // não faça isso, isso cria uma var, sempre adicione const ou let
console.log(nomev); // Macedo