// declaracao

const arr = []
console.log(arr)
const mixed = [1, 'a', true]

// length
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

// split
let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
console.log(companies[1])

// find element
const arrayNumbers = [1, 2, 3, 6, 5]

console.log(arrayNumbers.indexOf(6)) // -> 3
console.log(companies.indexOf(" Microsoft"))

// slice
const newArrayNumbers = [1, 2, 3, 6, 5]
console.log(newArrayNumbers.slice(1, 4))
console.log(newArrayNumbers)

// push e pop
let fruits = ['banana', 'orange', 'mango', 'lemon']

fruits.push('apple')
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.pop()
console.log(fruits)

// reverse
const reverseNumbers = [1, 2, 3, 4, 5]
reverseNumbers.reverse()
console.log(reverseNumbers)