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
