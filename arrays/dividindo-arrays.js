const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo']

const sala1 = nomes.slice(0,nomes.length/2)//vai partir do 0 e vai chegar até metade do nosso array de nomes
const sala2 = nomes.slice(nomes.length/2)//começa onde paramos no outro, então nomes.lenght/2, para pegar de novo da metade da sala.

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)