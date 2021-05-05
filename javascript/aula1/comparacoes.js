// Comparacoes

let int = 1
console.log(int == 1) // true
console.log(int == 2) // false
console.log(int >=1)  // true
console.log(int !=2)  // true


console.log('1' == 1) // true
console.log('1' === 1) // false
console.log(Number('1') === 1) // true
console.log(int.toString() === 1) // false
// Operadores Logicos
let check_1 = 4 > 3 && 10 > 5         // true && true -> true
let check_2 = 4 > 3 && 10 < 5         // true && false -> false
console.log(check_1)
console.log(check_2)

let check_3 = 4 > 3 || 10 > 5         // true  || true -> true
let check_4 = 4 < 3 || 10 < 5         // false || false -> false
console.log(check_3)
console.log(check_4)


let check = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
console.log(check)
console.log(isLightOff)

// Ternario e unario
let a = 1
let b = 2

let resultado_1 = a > b ? true : false
console.log(resultado_1)

let resultado_2 = a < b ? true : false
console.log(resultado_2) 

a++
b--
console.log(a)
console.log(b)