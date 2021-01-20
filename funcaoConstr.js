function Carro(VelocidadeMaxima = 200, delta = 5) {
    //atrbuti provado
    let velocidadeAtual = 0
    
    //metodo publico
    this.acelerar = function () {
        if( velocidadeAtual + delta <= VelocidadeMaxima){
            velocidadeAtual += delta
        } else{
            velocidadeAtual = VelocidadeMaxima
        }
        
    }
// metodo publico 
this.getVelocidadeAtual = function () {
    return velocidadeAtual
    }

}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const Ferrari = new Carro(350, 25)
Ferrari.acelerar()
console.log(Ferrari.getVelocidadeAtual())
