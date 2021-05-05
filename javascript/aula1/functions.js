// parametros e return
function addTwoNumbersNoReturn() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo

    console.log(sum)
}
addTwoNumbersNoReturn()

function addTwoNumbersReturn() {
    let numOne = 2
    let numTwo = 3
    let total = numOne + numTwo
    return total

}

let total = addTwoNumbersReturn()
console.log(total)

function addTwoNumbers(a, b) {
    return a + b
}

console.log(addTwoNumbers(3, 4))

// Arrow Function
function square(n) {
    return n * n
}

console.log(square(2)) // 4

const square1 = (n) => {
    return n * n
}

console.log(square1(2))  // -> 4
const square2 = n => {
    return n * n
}

console.log(square2(2))  // -> 4

const square3 = n => n * n  // -> 4
console.log(square3(2))

const addNumbers = (a, b) => {
    return a + b
}
console.log(addNumbers(3, 4))

// funcao anonima
const anonymous = function () {
    console.log(
        'funcao anonima'
    )
}
// outra maneira
const anonymousAlternative = () => {
    console.log(
        'funcao anonima'
    )
}
anonymous()
anonymousAlternative()

// callback
const callback = (n) => {
    return n ** 2
}

function cube(call, n) {
    return call(n) * n
}

console.log(cube(callback, 3))

// for each (iterar elementos do array)
const numbers = [1, 2, 3, 4, 5]
numbers.forEach(element => console.log(element))
numbers.forEach((num, index) => console.log(index))

let sum = 0
numbers.forEach(num => sum += num)

console.log(sum)

// map (iterar e alterar elementos do array)

const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)

// errado (undefined)
const forEachSquare = numbers.forEach((num) => num * num)
console.log(forEachSquare)

// filter

const scores = [
    { name: 'Panzanha', score: 95 },
    { name: 'Coringa', score: 80 },
    { name: 'Batata', score: 50 },
    { name: 'Eleven', score: 85 },
]

const scoresGreaterEight = scores.filter((pessoa) => pessoa.score > 65)
console.log(scoresGreaterEight)