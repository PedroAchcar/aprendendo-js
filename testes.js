let firstName = 'Pedro'
let lastName = 'Achcar'
let fullName = firstName + " " + lastName
console.log(fullName)


let name = "Nathalia"
let greeting = "Oie"
function oi() {
    console.log(greeting + ", " + name + "!")
}
oi()


let myPoints = 3
function add3Points() {
    myPoints += 3
}
function remove1Point() {
    myPoints -= 1
}
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()
console.log(myPoints)


let age = 18
if (age < 18) {
    console.log("Não pode entrar, menor de idade")
} else {
    console.log("Bem vindo!")
}


profile = ["Pedro Achcar", 21, true]


let messages = [
    "Hey, como está indo?",
    "Eu to bem, obrigado. E você?",
    "Tudo certo. Estou trabalhando no meu portifólio ultimamente"
]
let newMessage = "Eu também, muito importante fazer um portifólio!"
messages.push(newMessage)
console.log(messages)
messages.push("")


for (let count = 0; count <= 20; count++) {
    console.log(count)
}
for (let count = 10; count <= 20; count++) {
    console.log(count)
}
for (let i = 10; i <= 100; i += 10) {
    console.log(i);
}


for (let i = 0; i < messages.length; i++) {
    console.log(messages[i]);
}


cards = [7, 4, 9]
for (let i = 0; i < cards.length; i++) {
    console.log(cards[i])
}


player1Time = 102
player2Time = 107
function totalRaceTime() {
    return player1Time + player2Time
}
let totalTime = totalRaceTime()
console.log(totalTime)


let randomNumber = Math.random() * 6
console.log(randomNumber)


let flooredNumber = Math.floor(Math.PI)
console.log(flooredNumber)


function rollDice() {
    return Math.floor(Math.random() * 6) + 1
}
let dado = rollDice()
console.log(dado)


let hasSolved = false
let hasHints = false
if (~hasSolved && ~hasHints) {
    showSolution()
}
function showSolution() {
    console.log("Mostrando a solucao do exercicio...")
}


let likesDocs = true
let likesStartups = false
if (likesDocs || likesStartups) {
    recommendMovie()
}
function recommendMovie() {
    console.log("Esse filme parece bom para voce")
}


let airbnb = {
    title: 'Dairsie Castle',
    bedrooms: 6,
    beds: 10,
    pricePerNight: 1089,
    hasLiked: false,
    review: ['I loved!', "Muito bom, amei", "TOP"]
}
console.log(airbnb.title)
console.log(airbnb.pricePerNight)
console.log(airbnb.hasLiked)
console.log(airbnb.review)


// Pratica 1
let person = {
    name: "Pedro",
    age: 21,
    country: "Brasil"
}
function logData() {
    console.log(person.name + " tem " + person.age + " anos de idade e mora no " + person.country)
}
logData()



// Pratica 2
let age2 = 15
if (age2 < 6) {
    console.log("Entrada gratis")
} else if (age2 < 18) {
    console.log("Desconto para crianca")
} else if (age2 < 27) {
    console.log("Desconto para estudante")
} else if (age2 <= 66) {
    console.log("Entrada inteira")
} else {
    console.log("Desconto para idosos")
}


// Pratica 3
let largePopulations = ["China", "India", "EUA", "Indonesia", "Paquistao"]
console.log("Os paises mais populosos do mundo sao:")
for (let i = 0; i < largePopulations.length; i++) {
    console.log("- ", largePopulations[i])
}


// Pratica 4
let largePopulations2 = ["Canada", "India", "EUA", "Indonesia", "Russia"]
largePopulations2.pop()
largePopulations2.push('Paquistao')
largePopulations2.shift()
largePopulations2.unshift("China")
console.log(largePopulations2)


// Pratica 5
let diaDoMes = 13
let diaDaSemana = "Sexta"
if (diaDoMes === 13 && diaDaSemana === "Sexta") {
    console.log("Hoje eh sexta 13")
}


// Pratica 6
let hands = ["Pedra", "Papel", "Tesoura"]
function getHand() {
    let index = Math.floor(Math.random() * 3)
    return hands[index]
}
console.log(getHand())