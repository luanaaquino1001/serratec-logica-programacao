//Um programa "Total de produtos" irá solicitar que o cliente digite quantos produtos irá comprar. Depois, exibe a mensagem: "Parabéns por comprar x produtos!", substituindo x pela quantidade.

var prompt = require("prompt-sync")(); 

var produtos = prompt('Quantidade de produtos? ');

console.log('Parabéns por comprar ' + produtos + ' produtos!');