let valor // não inicializa
console.log(valor)

valor = null // ausencia de valor
console.log(valor)
//console.log(valor.toString()) Erro

const produto ={}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)// esse comando retornará o valor False
console.log(produto)//esse comando deixa a constante indefinida
// delete produto.preco  esse comando deleta a constante

produto.preco = null // sem preco
console.log(!!produto.preco)// esse comando retornará o valor False
console.log(produto)