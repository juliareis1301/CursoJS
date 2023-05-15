/*Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */

const operacoes = (num1, num2) => {
  let soma = num1 + num2
  let subtracao = num1 - num2
  let divisao = num1 / num2
  let multiplicação = num1 * num2

  console.log(`A soma de ${num1} e ${num2} é: ${soma}`)
  console.log(`A subtração de ${num1} e ${num2} é: ${subtracao}`)
  console.log(`A divisão de ${num1} e ${num2} é: ${divisao}`)
  console.log(`A multiplicação de ${num1} e ${num2} é: ${multiplicação}`)
}

operacoes(8, 9)

/**Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

const classificacaoTriangulo = (x, y, z) => {
  if (x == y && y == z) {
    console.log('O triângulo é EQUILÁTERO.')
  } else if (x == y && y != z) {
    console.log('O t,riângulo é ISÓSCELES')
  } else if (x != y && y != z && x != z) {
    console.log('O triângulo é ESCALENO')
  }
}

classificacaoTriangulo(5, 8, 7)


/**Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente */

const baseElevada = (base, expoente) => Math.pow(base, expoente)

console.log(baseElevada(3, 2))

/** Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

const divisao = (dividendo, divisor) => {

  let resultado = dividendo / divisor
  let resto = dividendo % divisor

  console.log(`O número ${dividendo} dividido pelo ${divisor} é igual a ${resultado}, e o resto da conta é ${resto}`)
}

divisao(9, 8)

/**Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto). */


const formatarValor = (valor) => {

  let valorCentavos = Math.round(valor * 100)
  let valorInteiro = Math.floor(valorCentavos / 100)
  let valorDecimal = valorCentavos % 100

  let decimalFormato = valorDecimal.toString().padStart(2, '0')
  return `R$${valorInteiro},${decimalFormato}`
}

console.log(formatarValor(0.30000000000000004))

/**Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

const jurosSimples = (capitalInicial, taxaJuros, tempoAplicacao) => capitalInicial * (1 + taxaJuros + tempoAplicacao)
const jurosComposto = (capitalInicial, taxaJuros, tempoAplicacao) => capitalInicial * Math.pow((1 + taxaJuros), tempoAplicacao)

console.log(jurosComposto(1000, 10, 12))

/*Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. */


const calcularBhaskara = (a = 2, b = 3, c = 1) => {
  const delta = b * b - 4 * a * c
  let x1 = 0
  let x2 = 0
  let resultado = []

  if(delta < 0 ){
    console.log("O delta é negativo")
  } else if ( delta === 0){
    x1 = - b / (2 * a)
    resultado = [x1]
    console.log(`Uma única raíz, valendo ${resultado}`)
  } else {
    x1 = -b + Math.sqrt(delta) / 2 * a
    x2 = -b - Math.sqrt(delta) / 2 * a
    resultado = [x1,x2]
    console.log(`Raízes: ${resultado}`)
  }
}

calcularBhaskara()

/**08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.) */

const calcularDesempenho = stringPontuacao => {
  const pontuacoes = stringPontuacao.split(" ").map(Number)
  let recorde = pontuacoes[0]
  let piorPontuacao = pontuacoes[0]
  let numRecordes = 0
  let piorJogo = 0

  for(let i = 1; i < pontuacoes.length; i++){
    if(pontuacoes[i]> recorde){
      recorde = pontuacoes[i]
      numRecordes++
    } else if(pontuacoes[i]< piorPontuacao){
      piorPontuacao = pontuacoes[i]
      piorJogo = i
    }
  }
console.log(`${numRecordes}, ${piorJogo + 1}`)
}

calcularDesempenho("10 20 20 8 25 3 0 30 1")



