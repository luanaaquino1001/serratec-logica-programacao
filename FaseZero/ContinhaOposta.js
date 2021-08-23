//A “continha oposta” lê um número e mostra seu valor negativo.

var prompt = require("prompt-sync")();

var numero = prompt('Indique um número inteiro ou real '); 

numeroneg = -(numero)

console.log('O valor negativo é ' + numeroneg)