let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    let number = Math.floor(Math.random() * 13) + 1
    if (number >= 10) {
        return 10
    }
    return number
}

function startGame() {
    isAlive = true
    for (let i = 0; i < 2; i++) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
    }
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
    if (isAlive && ~hasBlackJack) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}