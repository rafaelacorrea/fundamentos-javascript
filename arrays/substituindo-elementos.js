const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

console.log(`Lista de chamada: ${listaDeChamada}`)

listaDeChamada.splice(2,0,'Rodrigo')//permiti que removemos alguns elementos de qualquer lugar dentro do array e coloque novos elementos em qualquer lugar dentro desse array também. O primeiro parâmetro é o índice inicial que será alterado, o segundo parâmetro será a quantidade de elementos que serão retirados a partir do índice inicial e o terceiro parâmetro será o novo elemento a ser inserido.

console.log(`Lista de chamada: ${listaDeChamada}`)