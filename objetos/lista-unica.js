const clientes = [
    {
        nome:"André",
        cpf:"12345696315",
        dependentes: [{
            nome:"Sara Silva",
            parentesco:"filha",
            dataNasc:"20/03/2011"
        },
        {
            nome:"Samia Maria",
            parentesco:"filha",
            dataNasc:"04/01/2014"
        }],
    },
    {
        nome:"Juliana",
        cpf:"15935745625",
        dependentes: [{
             nome:"Sophia",
            parentesco:"filha",
            dataNasc:"30/08/2020"
            }],
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes] //spread operator, copia as propriedades de objetos para outros, “espalhando” os conteúdos.

console.log(listaDependentes)

console.table(listaDependentes) //vai exibir essas informações do array em forma de tabela
