// O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar dentro do estabelecimento ao mesmo tempo. Toda vez que um cliente quiser entrar, o segurança irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir.


const limite = 7; 
var qtde = 7; 
var liberado = (qtde < limite);

if (liberado)
console.log('Entrada liberada');
else
console.log('Entrada não liberada');

// 
const limite = 7; 
var qtde = 7; 
var liberado = (qtde < limite);

var resolução = ''

if (liberado)
resolução = console.log('Entrada liberada');
else
resolução = console.log('Entrada não liberada');