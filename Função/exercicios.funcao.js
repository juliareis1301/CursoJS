/*Escreva uma função que calcule a média de um array de números.*/

function media (numbers) {

  let soma = 0;
  for(let i=0; i<numbers.length; i++){ 
    soma += numbers[i]
  }
  return soma / numbers.length;
}

console.log(media([2,2,5,6,3]))

const mediaArray = (numbers) => {
  let soma = 0
  for(let i = 0; i < numbers.length; i++){
    soma += numbers[i]
  } return soma/ numbers.length
}

console.log(mediaArray([5,5,10,2,6.9]))

/*Escreva uma função que receba um número como parâmetro e retorne
 verdadeiro se o número for primo, caso contrário, retorne falso.*/

const numeroPrimo = number => {
  if(number <= 1 ) {
    return false
  }

  for(let i = 2; i <= Math.sqrt(number); i++){
    if(number % i === 0){
      return false
    } else {
      return true
    }
  }
}

console.log(numeroPrimo(1))

/* Escreva uma função que receba um array de números como parâmetro e retorne o menor número do array. */

const menorDaArray = numbers => Math.min(...numbers)
console.log(menorDaArray([1,2,3,6,9,0,-1]))


/*Escreva uma função que receba um objeto com informações de um produto
 (nome, preço e quantidade em estoque) e retorne o valor total do estoque desse produto (preço * quantidade).*/

  const produto = {
    nome: 'Batom',
    preco: 25,
    quantidadeEstoque: 225,
  }

  let precoEstoque = produto.preco * produto.quantidadeEstoque
  console.log(precoEstoque  )


  /*Escreva uma função que receba dois números como parâmetros e 
  retorne o resultado da soma desses números, mas se um dos números for negativo, retorne 0.*/

  const soma = (num1,num2) => {
    if(num1 + num2 < 0){
      return 0
    } else {
      return num1 + num2
    }
  }

console.log(soma(5,-6))

/*Escreva uma função que receba um array de objetos com informações de filmes
  (título, diretor e ano de lançamento) e retorne um novo array apenas com os títulos dos filmes. */

const filmes = [
  {
    nome: 'O chamado',
    diretor: 'Hisashi Kimura',
    anoLancamento: '31 de Janeiro de 2003'
  },

  {
    nome: 'O grito',
    diretor: 'Takashi Shimizu',
    anoLancamento: '7 de Janeiro de 2005'
  },

  {
    nome: 'Uma chamada perdida',
    diretor: 'Eric Valette',
    anoLancamento: '4 de Janeiro de 2008'
  }
]

const nomes = obterNomes(filmes)
console.log(nomes)
