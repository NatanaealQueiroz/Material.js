function rand([min = 0, max = 1000]){
    if (min>max) [min, max] = [max, min]
const valor = Math.random() * (max - min) + min
return Math.floor(valor)}

console.log(rand([50,40])) // navega entre 50 e 40
console.log(rand([922]))// navega entre 922 e 1000
console.log(rand([, 10]))// navega entre 0 e 10
console.log(rand([]))// navega entre 0 e 1000