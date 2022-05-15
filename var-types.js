//var: pode ser declarada em qualquer parte do código. tem um escopo global, então funciona em qualquer parte do código, o que pode gerar possíveis problemas em relação à lógica da aplicação.

/*var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area)

var area;*/

//let: Só pode ser usada depois que declarada.têm escopo local, sendo assim, não podem ser acessadas em outros escopos.
/*let forma = 'retângulo'
let altura = 5;
let comprimento = 7;
let area;

if (forma === 'retângulo') {
    area = altura * comprimento;
}else{
    area = (altura * comprimento) / 2;
}

console.log(area)*/

//const: é um tipo de atribuição de um valor que não pode ser mudado por interção do programa.têm escopo local, sendo assim, não podem ser acessadas em outros escopos.

const forma = 'triângulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
    area = altura * comprimento;
}else{
    area = (altura * comprimento) / 2;
}

console.log(area)