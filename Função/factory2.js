function criarProduto (nome,preco) {
  return {
    nome,
    preco,
    desconto: 0.1 * preco
  }
}

console.log(criarProduto('Notebook', 1499))