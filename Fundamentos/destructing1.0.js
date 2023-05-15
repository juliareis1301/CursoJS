// novo recurso

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro:'Rua ABC',
    numero:1000
  }
}

const { nome, idade } = pessoa
console.log(nome,idade)

const { nome: n, idade: i} = pessoa
console.log(nome,idade)

const { sobrenome, bemhumorada = true} = pessoa
console.log(sobrenome,bemhumorada) 

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro,numero,cep)