// Number
const inteiro = 1
const float = 1.5
console.log(typeof(inteiro)) // number
console.log(typeof(float))  // number

// String
const string_1 = "ab"
const string_2 = 'cd'
const string_3 = `ef`
const new_string = string_1+string_2+string_3
console.log(new_string)
console.log(new_string[3])
console.log(typeof(string_1))
console.log(typeof(string_2))
console.log(typeof(string_3))

const upperCase = new_string.toUpperCase()
console.log(new_string)
console.log(upperCase)

// Bools
const bool_1 = false
const bool_2 = true

// Undefined e null
// https://codeburst.io/javascript-null-vs-undefined-20f955215a2

let u
let n = null

console.log(u)
console.log(n)

// Array
let arr = [1, 2, 3]
console.log(arr)

let mixed = [1, 'a', true]
console.log(mixed)
console.log(mixed[0])
console.log(mixed[1])
console.log(mixed[2])

// Funcoes
function dobro(a){
    return a+a
}
let x = dobro(3)
console.log(x)

// Objetos
const Pessoa = {
    nome: "Rafael",
    apelido: "Panzanha",
}
console.log(Pessoa.nome)
console.log(Pessoa.apelido)
console.log(Pessoa)