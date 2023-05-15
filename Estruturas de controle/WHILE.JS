//ACONCELHADO PARA QUANTIDADE INDETERMINADA DE REPETIÇÕES

function getInteiroAleatorioEntre(min,max) {
  const valor = Math.randon()*(max - min) + min
  return Math.floor(valor)
}

let opcao = 0

while (opcao != -1){
  opcao = getInteiroAleatorioEntre(-1,1000)}