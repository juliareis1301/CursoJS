const notas = [7.7,6.0,6.0,6.8,2,6.2,5.5,8.8,9.0]

//Sem usar o callback

let notasBaixas = []
for(let i in notas){
  if(notas[i]<7){
    notasBaixas.push(notas[i])
  }
}

console.log(notasBaixas)

// Com callback

notasBaixas2 = notas.filter(function (nota) {
  return nota < 7
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)