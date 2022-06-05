const alunos = ['João','Juliana','Caio','Ana']//Array primário

const mediaDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]//Array secundário


console.log(`${listaDeNotasEAlunos[0][0]}, sua media é ${listaDeNotasEAlunos[1][0]}`)//O primeiro colchete indica o índice da posição do array secundário e o segundo colchete indica o índice da posição do array primário.