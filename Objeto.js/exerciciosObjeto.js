/**Crie um objeto "pessoa" com as propriedades "nome", "idade" e "profissão".
Adicione um método "cumprimentar" ao objeto "pessoa" que retorne a frase 
"Olá, meu nome é [nome] e eu sou [profissão]". */
const pessoa = {
  nome: 'Julia',
  idade: 21,
  profissao: 'estudante',
  cumprimentar: function () {
    return `Olá, meu nome é ${this.nome} e eu sou ${this.profissao} `
  }
}
console.log(pessoa.cumprimentar())

/**Crie um objeto "carro" com as propriedades "modelo", "marca" e "ano" e
Adicione um método "informacoes" ao objeto "carro" que retorne a frase 
"Este é um [marca] [modelo] fabricado em [ano]". */

const carro = {
  modelo: 'Onix',
  marca: 'Fiat',
  ano: 2016,
  informacoes: function () {
    return `Este é o modelo ${this.marca} ${this.modelo} fabricado em ${this.ano}`
  }
}

console.log(carro.informacoes())

/**Crie uma função "compararCarros" que 
 * receba dois objetos "carro" como parâmetros e compare o ano de fabricação dos dois carros, 
 * retornando o modelo do carro mais novo. */

const compararCarros = carro => {
  FiatUno = {
    ano: 2015,
  },
    Onix = {
      ano: 2020,
    }
  return `O FiatUno foi lançado em ${FiatUno.ano} e o Onix em ${Onix.ano}`
}

console.log(compararCarros())

/**Crie um objeto "livro" com as propriedades "título", "autor" e "número de páginas".
Adicione um método "resumo" ao objeto "livro" que retorne uma breve descrição do livro. */

const livro = {
  titulo: 'As armas da persuação',
  autor: 'Robert B Cialdini',
  numeroPaginas: 359,
  resumo: function () {
    return `Depois de passar anos caindo na lábia de vendedores, arrecadadores de doações e operadores de telemarketing,
    o psicólogo Robert B. Cialdini resolveu se dedicar ao estudo da persuasão. Ele queria entender
    quais são os fatores que levam uma pessoa a dizer "sim" a um pedido e que técnicas exploram melhor esses fatores.
    Reunindo dados das mais recentes pesquisas científicas sobre o assunto, his­tórias de 
    gente comum e a experiência adquirida ao se infiltrar em organizações que treinam os chamados
    "profissionais da persuasão", Cialdini criou uma obra acessível, informativa e indispensável 
    a todos aqueles que querem saber como influenciar pessoas e, ao mesmo tempo, se defender dos manipuladores.`
  }
}

console.log(livro.resumo())

/**Crie um objeto "conta bancária" com as propriedades "saldo" e "titular".
Adicione um método "depositar" ao objeto "conta bancária" que permita adicionar dinheiro ao saldo da conta.
Adicione um método "sacar" ao objeto "conta bancária" que permita retirar dinheiro do saldo da conta, desde 
que haja saldo suficiente. */


const contaBancaria = {
  saldo: 0,
  titular: 'Julia dos Reis Silva',
  depositar: function (valor){
      this.saldo += valor
      console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`)
  },
  sacar: function(valor){
    if(valor<this.saldo){
      this.saldo -= valor
      console.log(`Saque de ${valor} realizado. Novo saldo: ${this.saldo}`)
    }else{
      console.log(`Saldo insulficiente!`)
    }
  }
   
}

contaBancaria.depositar(3000)
contaBancaria.sacar(2000)

/**Crie um objeto "filme" com as propriedades "título", "diretor", "gênero" e "duração".
Adicione um método "informacoes" ao objeto "filme" que retorne uma descrição completa do
 filme, incluindo todas as suas propriedades. */

 const filme = {
  titulo: 'Super Mario Bross - O filme',
  diretores: ' Aaron Horvath e Michael Jelenic',
  gênero:  'Animação',
  duracao: 92 ,
  informacoes: function () {
    return`O ${this.titulo} dirigido por ${this.diretores} do genero ${this.gênero} tem uma duração de ${this.duracao} minutos `
  } 
 }

 console.log(filme.informacoes())

 /**Crie um objeto "triângulo" com as propriedades "base" e "altura".
Adicione um método "area" ao objeto "triângulo" que calcule e retorne a área do triângulo. */

const triangulo = {
  base: 20,
  altura: 30,
  area: function (){
    return (this.base * this.altura) / 2
  }
}

console.log(triangulo.area())

/**Crie um objeto "pessoa" com as propriedades "nome" e "idade".
Adicione um método "aniversario" ao objeto "pessoa" que incremente sua idade em 1. */

const individuo = {
  nome: 'Julia',
  idade: 21,
  aniversario: function () {
    return this.idade += 1
  }
}

console.log(individuo.aniversario())

