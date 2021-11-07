let firstCard = 4
let secondCard = 10
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ''
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    if (sum < 21) {
        message = 'QUER OUTRA CARTA?'
    } else if (sum === 21) {
        message = "GANHOU -> BLACKJACK!"
        hasBlackJack = true
    } else {
        message = "PERDEU -> ESTOUROU"
        isAlive = false
    }
    messageEl.textContent = message
    cardsEl.textContent = "Cartas: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum
}

function newCard() {
    console.log("Nova carta")
    let card = 7
    cards.push(card)
    sum += card
    renderGame()
}