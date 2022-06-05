//método push: passando como parâmetro um dado qualquer, o Java script vai pegar esta array e inserir como último elemento na última posição o que estamos passando dentro dos parênteses, que chamamos de parâmetro.

const notas = [10, 6, 8]
notas.push(7)
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

console.log(media)