function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma()

//funcao com retorno 

function soma(a,b = 1){ //se não passar nada, vai definir b valendo 1 
  return a + b 
}

console.log(soma (2,3))
console.log(soma())
 
