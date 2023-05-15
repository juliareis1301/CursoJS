const escola = 'cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(1))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('c'))
console.log(escola.substring(1))
console.log(escola.substring(0,3)) // Vai do indice 3 e avance 3 caracteres
console.log('Escola '.concat(escola).concat("!"))

console.log(escola.replace(3, "e"))

//Transformar uma string em ARRAY
console.log('Ana,Maria,Pedro'.split(","))