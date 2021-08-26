/* 
# Serratec - Lógica de Programação
Lógica de Programação - Prof. Moises do Amaral Baddini
Atividade: Elicitação de Requisitos
Squad de Origem (Requisito): Rock n' Beer (Squad 4)
Autor (Descrição): Gustavo J. Barros
Arquivo: sonhoAnimais.js
Elaboração do Requisito: 22/08/2021
## Descrição:
Sempre tem aquela pessoa que sonha com algum animal e alguém fala para você jogar.
Como a IA costuma ter a cabeça nas nuvens, ela pode sonhar também com vários animais
e diversas vezes. Será que o Animal que você sonhou é o mesmo da nossa IA?


## Dicas:
Crie uma função para gerar os números aleatórios.
Diga sempre qual é o animal sorteado
Diga se ele acertou ou não
Dê uma nova chance até ele acertar.
*/
const prompt = require('prompt-sync')();
do {
console.log('Informe o número da opção do animal:');
console.log('(1) cavalo');
console.log('(2) vaca');
console.log('(3) cachorro');
console.log('(4) gato');
console.log('(5) leão');

var opcao = prompt('Sua resposta:');

function geraNumero(){     
    var numAleatorio = Math.trunc(Math.random() * (5 + 1));
    return numAleatorio;
} 
var animais = ['cavalo', 'vaca', 'cachorro', 'gato', 'leão'];
var gerado = geraNumero();
var nomeAnimal = animais[gerado];
    var numOpcao = parseInt(opcao);
    var escolha = animais[numOpcao - 1];
    console.log('Você sonhou com:', escolha);
    console.log('O computador sonhou com:', nomeAnimal);
    
    if (nomeAnimal == escolha){ 
        console.log('O computador acertou o animal que você sonhou');
    } else{
        console.log('O computador não acertou o animal que você sonhou');
    }
} while(escolha != nomeAnimal);


