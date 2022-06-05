const cliente = {
    nome:"André",
    idade:36,
    cpf:"12345696315",
    email:"andre@email.com",
    fones:["513543451352","123211135213"]
}

cliente.dependentes = {
    nome:"Sara",
    parentesco:"filha",
    dataNasc:"20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)