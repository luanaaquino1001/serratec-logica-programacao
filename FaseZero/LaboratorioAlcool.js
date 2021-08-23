//O laboratório fabricante de álcool em gel precisa saber se o produto está atingindo a concentração ideal para desinfecção, que é de 70%. Para a ajudar o laboratório, crie um programa onde será preenchida a capacidade da garrafa em mililitros, e o resultado serão os volumes de álcool e de gel que precisam ser misturados para preenchimento do vasilhame.

const prompt = require("prompt-sync")()

var garrafa = prompt("capacidade da garrafa em mililitro:")

var metaAlcool = garrafa * 12,00
var metaGel = garrafa * 12,00

console.log(`Quantidade de alcool é {metaAlcool} e de gel é {metaGel}`)