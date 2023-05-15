/*Escreva um programa em JavaScript que imprima os números de 1 a 100. 
Para múltiplos de três, imprima "Fizz" em vez do número e para múltiplos de cinco, 
imprima "Buzz". Para números que são múltiplos de ambos três e cinco, imprima "FizzBuzz".*/
/*
let i;

for(i=0;i<=100;i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz')
  }else if (i % 3 === 0){
    console.log('Fizz')
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}*/
/*
Escreva uma função em JavaScript que receba um número como parâmetro e verifique se ele é primo ou não. 
A função deve retornar true se o número for primo e false se não for.*/

/*
let i;

const numeroPrimo = num => {
  if(num < 2){
    console.log('False')
  }

  for( i = 2; i <= Math.sqrt(num); i++){
    if( num % i === 0) {
      console.log('False')
    } else {
      console.log('True')
    }
  }
}

numeroPrimo(5)
numeroPrimo(7)
*/

/*Escreva uma função em JavaScript que receba um array de números como parâmetro e retorne o maior número do array.*/

/*
const maiorNumero = (lista) => Math.max(...lista)

console.log(maiorNumero([1,2,3,10000000]))*/

/*Escreva uma função em JavaScript que receba um array de números como parâmetro e retorne a média dos números do array.*/
/*
let numAtual = 0;

const media = num => {
  for(let i=0;i<num.length;i++){
    numAtual += num[i]
  }

  return numAtual / num.length

}

console.log(media([5,5,5]))*/

/*Escreva um programa em JavaScript que peça ao usuário para digitar um número e imprima na tela se ele é par ou impar.*/

/*
const parouImpar = num => {
  if( num % 2 === 0 ){
    console.log(`O número ${num} é par`)
  } else {
    console.log(`O número ${num} é impar`)
  }
}

parouImpar(10)
parouImpar(5)*/ 

/** Escreva uma função em JavaScript que receba um array de números como parâmetro 
 * e retorne um novo array com todos os números pares do array original.*/

/*
const soPares = lista => {
  
  let numPares = []
 
  for(let i=0;i<lista.length; i++){
    if(lista[i] % 2 === 0){
      numPares.push(lista[i])
    }
  }
  return console.log(`A nova lista formada apenas por números pares: ${numPares}`)
}

soPares([1,2,3,4,5,6,7,8,9,10])*/
/*
const soImpares = lista => {
  
  let numImpares = []

  for(let i=0;i<lista.length;i++){
    if(lista[i] % 2 !== 0) {
      numImpares.push(lista[i])
    }
  }
  return console.log(`A nova lista formada apenas por numeros impares: ${numImpares}`)
}

soImpares([1,2,3,4,5,6,7,8,9,10])*/

/**Escreva uma função em JavaScript que receba um número como parâmetro e imprima na tela todos
 *  os números primos menores ou iguais a esse número. */

/*const ehPrimo = num => {
  if(num <= 1){
      return false
  }

  for(let i=2; i<= Math.sqrt(num); i++){
    if(num % i === 0) {
      return false;
    } else {
      return true;
    }
  }
  
}

const imprimePrimosAte = num => {
  for(let i=2;i<=num;i++){
    if(ehPrimo(i)){
      console.log(i)
    }
  }
}

imprimePrimosAte(10)*/

/*
const ehPrimo = num => {

  if(num<=1){
    return false
  }

  for(let i=2;i<=Math.sqrt(num);i++){
    if(num % i === 0){
      return false
    } else {
      return true
    }
  }
}

const PrimoMenores = num => {
  for(let i=0;i<=num;i++){
    if(ehPrimo(i)){
      console.log(i)
    }
  }
}

PrimoMenores(10)*/

/*Escreva uma função em JavaScript que receba um array de números como 
parâmetro e retorne um novo array com os números em ordem crescente.*/

const ordemCrescente = (num) => {
  
  let novaLista = []

  for(i=0;i<num.length;i++){
    if(num[i]>num[i+1]){
      aux = num[i]
      num[i] = num [i+1]
      num[i+1] = novaLista.push()
    }
  }
  
}

ordemCrescente([1,5,2,3,9,10,3])