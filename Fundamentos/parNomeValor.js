// par nome/valor

const saudacao = 'Opa' // contexto léxico 1

function exec() {
  const saudacao = 'Falaaa' // contexto léxico 2 
  return saudacao
}


//objetos sao grupos alinhados de pares nome/valor

const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: 'RUA:'
  }
}


console.log(saudacao)
console.log(exec())
console.log(cliente)