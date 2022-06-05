const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }

const guerreiros = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiros)

/*caso a sintaxe de espalhamento seja usada em objetos que tenham chaves/propriedades com o mesmo nome, o JavaScript vai sobrescrever o valor destas propriedades à medida que encontra novos valores com o mesmo nome de chave.*/

const mago = {
    nome: "Gandalf",
    classe: "mago"
   }
const guerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
const ranger = {
    nome: "Legolas",
    classe: "ranger"
   }

const personagens = { ...mago, ...guerreiro, ...ranger }
console.log(personagens)

//Apesar de prático, o uso da sintaxe de espalhamento pode gerar bastante processamento, então deve ser usado com cuidado em caso de loops ou funções recursivas.