function soma1(a,b,c){
  a = a || 1
  b = b || 1
  c = c || 1
  return a + b + c

}

console.log(soma1(5))
console.log(soma1(5,2))
console.log(soma1(5,2,8))

function soma2(a,b,c){
  a - a !== undefined
}

function soma3(a = 1, b = 1, c = 1){
  return a + b + c 
}

console.log('Soma mais orientada = ' + soma3(0))