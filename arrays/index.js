//array :é um tipo de estrutura de dados. Ao contrário de uma variável, que guarda somente um valor por vez, um array (ou lista) pode armazenar diversos valores.

//let nota1 = 10
//let nota2 = 6.5
//let nota3 = 8
//let nota4 = 7.5

const notas = [10, 6.5, 8, 7.5]

//um detalhe muito importante para trabalharmos bem com arrays é que em JavaScript (e na maior parte das linguagens de programação) a contagem dos índices não começa no número 1, e sim no número 0.

//let media = (nota1 + nota2 + nota3 + nota4)/4

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(media)

//A propriedade length: Esta propriedade especifica o tamanho de um array, ou melhor dizendo, o número de elementos. O valor retornado por length sempre será 1 número a mais do que o valor de índice mais alto. Neste caso, o array notas é um array de 4 elementos e seus índices vão de 0 a 3.