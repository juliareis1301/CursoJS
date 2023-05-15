let valor//não inicializada
console.log(valor)

valor = null //ausencia de valor -- melhor opção para zerar o valor de uma variável
console.log(valor)
//console.log(valor.toString())

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir de forma explicita
console.log(produto.preco)
console.log(produto)

produto.preco = null
console.log(produto)