//O programa “Quadrado” terá um código adaptado do item anterior, para calcular o quadrado do número digitado.

const prompt = require("prompt-sync")()

var numero = prompt("Insira um número")
quadrado = numero * 2

console.log(`O quadrado de ${numero} é ${quadrado}.`)