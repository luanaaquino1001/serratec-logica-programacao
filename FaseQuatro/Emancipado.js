//É considerado “Emancipado” qualquer indivíduo a partir de 21 anos, ou a pessoa do sexo masculino a partir dos 18 anos. Crie um programa para atestar a emancipação do cidadão com base em sua idade no ano atual.
//Sexo: Feminino
//Ano de nascimento: 1999
//Cidadão emancipado? True 

const prompt = require('prompt-sync')();

var sexo = prompt("Sexo: ");
var ano = prompt("Ano de nascimento: ");

var genf = sexo == "F" && ano <= 2000;
var genm = sexo == "M" && ano <= 2003;

if(sexo == "Feminino")
    console.log("Cidadã Emancipada? ", genf);

if(sexo == "Masculino")
    console.log("Cidadão Emancipado? ", genm);