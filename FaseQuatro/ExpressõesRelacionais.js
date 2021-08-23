
//Indique o resultado das expressões relacionais abaixo. Utilize uma variável para atribuir a sentença, e então exibir na tela o resultado booleano. Declare as variáveis a seguir e, para os símbolos, faça as substituições.
//x: 6.0; y: 2; z: 4.000; a: 8; b: 7.5; c: 12
//M: maior que; m: menor que; MI: maior ou igual; mi: menor ou igual;
//mod: resto; <>: diferente; ig: igual 
//Nesse exercício você deverá manter as variáveis e substituir apenas os operadores. Pode ser necessário o uso de parênteses.


var x = 6.0
var y = 2
var z = 4.000
var a = 8
var b = 7.5
var c = 12

var qa =	x - y > a
var qb =	x - y * a > c % y
var qc =	y != c
var qd =	x * y != c
var qe =	c % y <= y % c
var qf =	a < b
var qg =	z / a + x * y - 5 >= b
var qh =	c * z + 2 == a * x + y
var qi =	c == z + b
var qj =	y * 2 != 7 - b

console.log(qa)
console.log(qb)
console.log(qc)
console.log(qd)
console.log(qe)
console.log(qf)
console.log(qg)
console.log(qh)
console.log(qi)
console.log(qj)