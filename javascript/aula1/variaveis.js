// tipagem fraca
let a = 1
a = "string"
console.log(a)

// operacoes
let b = 3
let c = 5

let soma = b + c
let subtracao = b - c
let multiplicao = b * c
let divisao = b / c
let modulo = c % 2

console.log(soma, subtracao, multiplicao, divisao, modulo)

// tipos de variaveis
const constante = 2
let variavel_1 = "1 - valor inicial"
var variavel_2 = "2 - valor inicial"

// erro
// console.log(constante)

{
    let variavel_1 = "1 - valor trocado"
    var variavel_2 = "2 - valor trocado"
}
console.log(variavel_1)
console.log(variavel_2)