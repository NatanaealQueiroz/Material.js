function compras(trabalo1, trabalho2){
    const comprarSorvete = trabalo1 || trabalho2 
    const compratTv50 = trabalo1 && trabalho2
    const comptarTv32 = trabalo1 != trabalho2
    const manterSaudavel = !comprarSorvete 

    return{comprarSorvete, compratTv50, comptarTv32, manterSaudavel }


}

console.log(compras(true, true))
console.log(compras( true, false))
console.log(compras(false, true))
console.log(compras(false, false))