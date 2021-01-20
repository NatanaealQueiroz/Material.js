const saudacao = 'Opa'

function exec(){
    const saudacao = 'Falaaa'
    return saudacao
}
// objetos são grupos aninhados de pares valor/nome

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Estrada Ilda Alves P',
        numero: 514

    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)