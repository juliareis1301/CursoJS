/*const ImprimirResultado = function (nota) {
  if(nota>= 7){
    console.log('Aprovado com ' + nota)
  } else{
    console.log('Reprovado com ' + nota)
  }
}

ImprimirResultado(1)*/
/*
function ImprimirResultado(nota){
  if(nota>=7){
    console.log("Aprovado com " + nota)
  } else {
    console.log("Reprovado")
  }
}

ImprimirResultado(1)*/

const ImprimirResultado = nota => {
  if(nota>=7){
    console.log('Parabens você foi aprovado com ' + nota)
  } else {
    console.log('Infelizmente você foi reprovado com ' + nota)
  }
}

ImprimirResultado(10)