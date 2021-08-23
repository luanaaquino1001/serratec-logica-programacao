//Alice foi até uma loja de eletrônicos e comprou alguns jogos e um videogame novo, pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo videogame. Para o pagamento, o sistema irá apresentar 3 opções de parcelamento e o valor de cada parcela: 3 vezes sem juros, 5 vezes sem juros e em 10 vezes com 1,5% de juros sobre o total da compra.

var jogos = 345.00
var videogame = 1545.00
var total = jogos + videogame

var parc3SemJuros = total / 3 
var parc5SemJuros = total / 5
var juros10x = Math.round((total * 1.015) /10)

console.log("Opções de parcelamento:")
console.log(`3x sem juros.  ${parc3SemJuros}`)
console.log(`5x sem juros.  ${parc5SemJuros}`)
console.log(`10x com juros. ${juros10x}`)