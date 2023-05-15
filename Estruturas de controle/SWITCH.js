const ImprimirResultado = function (nota) {
  switch(Math.floor(nota)){
    case 10:
    case 9:
        console.log('Quadro de honra')
        break //para sair do switch caso o case for execultado
    case 8: case 7:
      console.log('Aprovado')
      break
    case 6: case 5: case 4:
      console.log('Recuperação')
      break
    case 3: case 2: case 1: case 0:
      console.log('Reprovado')
      break
    default: // caso não se encaixe em nenhum dos cases
      console.log('Nota inválida')    
  }
}

ImprimirResultado(1)
ImprimirResultado(-1)