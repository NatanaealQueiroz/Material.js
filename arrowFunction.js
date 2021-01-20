//metodos de estruturar uma função arrow

let dobro = function (a) {
    return 2 * a
}

dobro = (a) =>{
    return 2 * a
}

dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function () {
    return 'Ola'
}

ola = () => 'Ola'
ola = _ => 'ola'

console.log(ola())