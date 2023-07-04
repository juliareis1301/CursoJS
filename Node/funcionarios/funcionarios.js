const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

/*Desafio: Encontrar todas as mulheres chinesas com os menores salários.
Para isso, vamos precisar de 3 funções. Uma para filtrar todos os chineses, 
outra para filtrar todas as mulheres chineses e com o menor salário usamos a função de agregação*/

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
  return func.salario > funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
  const funcionarios = response.data
  console.log(funcionarios)

  const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

  console.log(func)
})




