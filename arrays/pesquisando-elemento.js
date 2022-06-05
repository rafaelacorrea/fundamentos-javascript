const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediaDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){//includes: busca o valor igual ao parâmetro inserido, retornado um boleano.
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)//indexof: retorna o numero do índice.
        return listaDeNotasEAlunos[0][indice] + ', sua media é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não está cadastrado"
    }

}

console.log(exibeNomeNota("Caio"))