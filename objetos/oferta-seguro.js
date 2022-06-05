const cliente = {
    nome:"André",
    idade:36,
    cpf:"12345696315",
    email:"andre@email.com",
    fones:["513543451352","123211135213"],
    dependentes: [
        {
        nome:"Sara Silva",
        parentesco:"filha",
        dataNasc:"20/03/2011"},
        {
            nome:"Samia Maria",
            parentesco:"filha",
            dataNasc:"04/01/2014"
        }
    ],
    saldo:100,
    depositar:function(valor) {
        this.saldo += valor
    }
}

function ofereceSeguro(obj){
    const propsClientes = Object.keys(obj); // pegar as chaves do objeto
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}
console.log(Object.values(cliente)) // Para pegar os valores de um objeto
console.log(Object.entries(cliente)) // Imprime um conjunto de chave e valores só que agora em outra estrutura, em uma estrutura de array
ofereceSeguro(cliente)