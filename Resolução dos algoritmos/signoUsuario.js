/*
# Serratec - Parque Tecnológico Região Serrana
 *  Lógica de Programação - Prof. Moises do Amaral Baddini
 * Atividade: Elicitação de Requisitos
 * Squad: GPS - Group of Programming Students
 * Autor (Descrição): Daniel Csar 
 * Arquivo: signoUsuario.js
 * Elaboração do Requsito: 20/08/2021
 
## Descrição:
Solicite o nome e a data de nascimento do usuário. Com essas informações, será gerado o signo e uma descrição genérica e aleatória de sua personalidade.
*/

let prompt = require('prompt-sync')(),
  nome = prompt('Qual seu nome?'),
  nascimento = prompt('Qual dia você nasceu? (dia/mes/ano)'), //Recebendo o níver
  nascSlit = nascimento.split('/'), //Split no niver para manipular dia e mês
  dia = nascSlit[0],
  mes = nascSlit[1],
  personalidade = [
    'Exploradora: Experimentadores práticos e ousados, mestres em todos tipos de ferramentas.',
    'Exploradora: Artistas flexíveis e charmosos, sempre prontos para explorar e experimentar algo novo.',
    'Exploradora: Pessoas inteligentes, enérgicas e perceptivas, que realmente gostam de arriscar.',
    'Exploradora: Animadores entusiasmados, enérgicos e espontâneos com a vida',
    'Sentinela: Indivíduos práticos e extremamente confiáveis.',
    'Sentinela: Protetores dedicados e acolhedores, estão sempre prontos para defender seus amados.',
    'Sentinela: Administradores excelentes, inigualáveis em gerenciar coisas - ou pessoas.',
    'Sentinela: Pessoas extraordinariamente atenciosas, sociais e populares',
    'Diplomata: Idealistas quietos e místicos, porém muito inspiradores e incansáveis.',
    'Diplomata: Pessoas poéticas, bondosas e altruístas, sempre prontas para ajudar uma boa causa.',
    'Diplomata: Líderes inspiradores e carismáticos, que conseguem hipnotizar sua audiência.',
    'Diplomata: Espíritos livres, criativos, sociáveis e entusiasmáticos, sempre encontrando uma razão para sorrir.',
    'Analista: Pensadores criativos e estratégicos, com um plano para tudo.',
    'Analista: Criadores inovadores com uma sede insaciável por conhecimento.',
    'Analista: Líderes ousados, criativos e enérgicos, sempre dando um jeito em tudo.',
    'Analista: Pensadores espertos e curiosos que não resistem um desafio intelectual.'
  ],
  random = personalidade[Math.trunc(Math.random() * (personalidade.length + 2))]

if (mes == 12 && dia <= 21) {
  console.log('Olá, ' + nome + '! Seu signo é Sargitário!')
  console.log('Sua personalidade é:', random)
} else if (mes == 11 && dia <= 21) {
  console.log('Olá, ' + nome + '! Seu signo é Escorpião!')
  console.log('Sua personalidade é:', random)
} else if (mes == 10 && dia <= 22) {
  console.log('Olá, ' + nome + '! Seu signo é Libra!')
  console.log('Sua personalidade é:', random)
} else if (mes == 9 && dia <= 22) {
  console.log('Olá, ' + nome + '! Seu signo é Virgem!')
  console.log('Sua personalidade é:', random)
} else if (mes == 8 && dia <= 22) {
  console.log('Olá, ' + nome + '! Seu signo é Leão!')
  console.log('Sua personalidade é:', random)
} else if (mes == 7 && dia <= 22) {
  console.log('Olá, ' + nome + '! Seu signo é Câncer!')
  console.log('Sua personalidade é:', random)
} else if (mes == 6 && dia <= 20) {
  console.log('Olá, ' + nome + '! Seu signo é Gêmeos!')
  console.log('Sua personalidade é:', random)
} else if (mes == 5 && dia <= 20) {
  console.log('Olá, ' + nome + '! Seu signo é Touro!')
  console.log('Sua personalidade é:', random)
} else if (mes == 4 && dia <= 20) {
  console.log('Olá, ' + nome + '! Seu signo é Áries!')
  console.log('Sua personalidade é:', random)
} else if (mes == 3 && dia <= 20) {
  console.log('Olá, ' + nome + '! Seu signo é Peixes!')
  console.log('Sua personalidade é:', random)
} else if (mes == 2 && dia <= 18) {
  console.log('Olá, ' + nome + '! Seu signo é Aquário!')
  console.log('Sua personalidade é:', random)
} else {
  console.log('Olá, ' + nome + '! Seu signo é Capricórnio!')
  console.log('Sua personalidade é:', random)
}
