/*function dobro (num) {
  return 2 * num
}

console.log(dobro(2))*/

//Agora transformando em uma arrow function
/*
const dobro = num => 2 * num

console.log(dobro(3))*/

/*function media(nota1, nota2, nota3) { 

  return (nota1 + nota2 + nota3)/3
}

console.log(media(9,8,6))*/

//Arrow function 
/*
const media = (nota1, nota2, nota3) => (nota1 + nota2 +nota3)/3
console.log(media(2,10,9))*/
/*
function somar(num1,num2){
  return num1 + num2
}
console.log(somar(3,5))*/
/*
const somar = (num1,num2) => num1 + num2
console.log(somar(8,9))

function dividir(num1,num2) {
  return num1/num2
}

console.log(dividir(10,2))*/
/*
const dividir = (num1,num2) => num1/num2
console.log(dividir(20,10))*/

/*
const numeroMaximo = lista => Math.max(...lista)
console.log(numeroMaximo([1,2,3,4,5,6]))*/
/*
function numeroMaximo (lista) {
  return Math.max(...lista)
} 

console.log(numeroMaximo([1,2,3,4,5]))*/

let pessoa = {

  nome: 'Julia',
  idade: 21,
  cidade: 'Bauru-SP', 
};
console.log(`Eu sou ${pessoa.nome}, tenho ${pessoa.idade} e moro em ${pessoa.cidade}`)