let a = 7;
let b = 94;
let aux;

//aux = a; // Valor 7 foi atribuido a variavel aux
//a = b; // Valor 94 foi atribuido a variavel a
//b = aux; //Valor 7 foi atribuido a variavel b


//maneira pratica de trocar a variavel atraves do JS

[a,b] = [b,a]
console.log(a);
console.log(b);