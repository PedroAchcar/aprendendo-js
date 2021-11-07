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