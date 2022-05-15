// parâmentros de função
function soma(numero1, numero2){
    return numero1 + numero2;
}

/*console.log(soma(2, 32)) */

//Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado; algumas documentações se referem a parâmetros no momento em que a função é definida (no caso, numero1, numero2, etc) e argumentos como os dados que utilizamos para executar a função (ou seja, 30, 45, etc).

// ordem dos parâmetros

/*function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`
}
 
console.log(nomeIdade(27, "Rafaela")) */

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5)))