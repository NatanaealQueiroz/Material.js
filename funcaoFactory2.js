function CriarProduto(nome, preco) {
    return{
        nome,
        preco,
        desconto:0.1
    }
}

console.log(CriarProduto('Notebook', 3500.00))
console.log(CriarProduto('Celular', 1900.00))