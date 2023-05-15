//function declration 

function soma (x,y) {
  return x+y
}

const x = 'Global'

function fora() {
  const x = 'Local'
  function dentro() {
    return x 
  }
  return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())