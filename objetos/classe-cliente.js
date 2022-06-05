class Cliente{
    constructor(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }
    
    exibirSaldo(){
        console.log(this.saldo)
    }
}

const andre = new Cliente("Andre","andre@email.com","11223366554",100)

andre.exibirSaldo()

console.log(andre)