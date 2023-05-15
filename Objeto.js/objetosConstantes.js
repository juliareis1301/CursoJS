//pessoa -> 123 -> {...}

const pessoa = {nome: "João"}
pessoa.nome = "Pedro"
console.log(pessoa)

// Pessoa <- {...} 

Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa)