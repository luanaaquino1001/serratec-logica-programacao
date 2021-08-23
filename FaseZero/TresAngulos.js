//O programa “Três ângulos” lê os valores dos ângulos de uma forma, e escreve se as medidas formam um triângulo válido.


var prompt = require("prompt-sync")();

var ang1 = prompt('Valor do ângulo 1: ');
var num1 = parseInt(ang1);
var ang2 = prompt('Valor do ângulo 2: ');
var num2 = parseInt(ang2);
var ang3 = prompt('Valor do ângulo 3: ');
var num3 = parseInt(ang3);

var soma = (num1 + num2 +num3); 
var final = soma == 7;

console.log('Validação do triângulo ' + final); 