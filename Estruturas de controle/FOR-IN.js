const notas = [6.7,7.4,9.8,8.1,9,9.1]

for (i in notas) {
  console.log(i, notas[i])
}

const pessoa = {
  nome: 'Julia',
  sobrenome: 'Silva',
  idade: 21,
  peso:57

}

for ( let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`)
}