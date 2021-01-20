//Função sem retorno
function imprimirSoma(a,b){
    console.log(a + b)

}

imprimirSoma(2, 3)
imprimirSoma(2) // retornará NaN
imprimirSoma(2, 3, 4, 5, 7, 8, 15)// considerará apenas os dois primeiros valores

// Função com retorno
function soma(a= 7, b =1){
    return a + b

}
console.log(soma())
console.log(soma(2, 3))
console.log(soma(2))