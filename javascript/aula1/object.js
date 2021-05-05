// declaracao
const objeto = {}

const rectangle = {
    length: 20,
    width: 20
}
console.log(rectangle) // {length: 20, width: 20}

const person = {
    nome: 'Rafael',
    apelido: 'Panzanha',
    age: 22,
    skills: [
        'HTML',
        'CSS',
        'Git',
    ],
    isIteano: true
}
console.log(person)
console.log(person.nome)
console.log(person.apelido)
console.log(person['apelido'])
console.log(person.skills[0])

// spread operator
const newPerson = {
    ...person,
}
console.log(newPerson)

const personBirthday = {
    ...person,
    age: 23,
}
console.log(personBirthday)

const newPersonSkills = {
    ...person,
    skills: [
        'HTML',
        'CSS',
        'Git',
        'Javascript',
    ],
}

console.log(newPersonSkills)

const person2 = {
    nome: 'Rafael',
    apelido: 'Panzanha',
    age: 22,
    skills: [
        'HTML',
        'CSS',
        'Git',
        'Javascript',
    ],
    isIteano: true,
    getName: function() {
        return `${this.nome} `
    },
}

console.log(person2.getName())