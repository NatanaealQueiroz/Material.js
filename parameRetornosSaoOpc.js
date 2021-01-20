function area (largura, altura){
    const area = largura * altura
    if(area>20){
        console.log(`Valor de ${area}, Excedeu o limite que é de 20.`)
    }else{
        return area
    }
}
console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 5 , 15, 10))
console.log(area(5, 5))