/*const arrayVazia = [];

console.log(arrayVazia)
console.log(arrayVazia.length)

console.log(arrayVazia[0])

retorno:
[]
0
undefined
*/

const arrayVazia = [,,,];
console.log(arrayVazia.length)
arrayVazia.push(50)
console.log(arrayVazia)
console.log(arrayVazia.length)

//O JavaScript manteve as posições vazias e adicionou o 50 ao final do array. Após a execução, ele passou a ter 4 posições, mas somente um elemento (o número 50). Chamamos este tipo de estrutura de array esparso e é importante lembrar deste comportamento dos arrays em JavaScript enquanto trabalhamos.