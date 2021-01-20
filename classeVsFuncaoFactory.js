class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa ('joão')
p1.falar()
const p2 = new Pessoa ('Maria')
p2.falar()

// ou usar o arrow

const criarPessoa = nome =>{
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p3 = criarPessoa('joão')
p3.falar()