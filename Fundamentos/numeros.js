const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))//PARA SABER SE peso1 É UM NUMERO

const avaliacao1 = 9.871
const avaliacao2 = 6.847

const total = avaliacao1 * peso1
const media = total /(peso1 + peso2)

console.log(media.toFixed(2)) // Para imprimir duas casas apos a virgula
console.log(media.toString()) // para transformar a media em uma string
console.log(media.toString(2)) // para transformar a media em booleano
console.log(typeof media)
console.log(typeof Number) //Number com N maiusculo faz referencia a uma função 

