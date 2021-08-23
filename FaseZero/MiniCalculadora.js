//Crie o programa “mini calculadora”, que após ler dois números inteiros apresenta as operações de soma, subtração, multiplicação e divisão com eles.

var prompt = require("prompt-sync")();

var num1 = prompt('Insira um número '); 
var num2 = prompt('Insira um número ');

var num1 = parseInt(num1);
var num2 = parseInt(num2);

var adi = (num1 + num2);   
var sub = (num1 - num2);
var mult = (num1 * num2); 
var div = (num1 / num2);

console.log(adi); 
console.log(sub);
console.log(mult);
console.log(div);
