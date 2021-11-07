let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ''
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    return 5
}

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
    cardsEl.textContent = "Cartas: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ' '
    }
    sumEl.textContent = "Sum: " + sum
}

function newCard() {
    let card = getRandomCard()
    cards.push(card)
    sum += card
    renderGame()
}