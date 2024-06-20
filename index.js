
// let deckId = ''
// let computerScore = 0, meScore = 0
// const remainingCards = document.getElementById("remaining-cards")
// function returnNewDeck() {
//     fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
//         .then(response => response.json())
//         .then(data => {
//             deckId = data.deck_id
//             remainingCards.textContent = `Remaining cards: ${data.remaining}`
//         })

// }
// document.getElementById("shuffle-deck-btn").addEventListener("click", returnNewDeck)

// let cardOne, cardTwo
// const drawBtn =document.getElementById('draw-btn')
// const gameTitle =document.getElementById("game-title")
// function drawCard() {
//     fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
//         .then(response => response.json())
//         .then(data => {
//             if (data.remaining) {
//                 cardOne = data.cards[0].value
//                 cardTwo = data.cards[1].value
//                 gameTitle.textContent = getWinner(cardOne, cardTwo)
//                 remainingCards.textContent = `Remaining cards: ${data.remaining}`
//                 const cardsDrawnImageHtml = data.cards.map((card) => {
//                     return `<img src='${card.images.png}' alt='${card.value} of ${card.suit}'>`
//                 })
//                 document.getElementById("placeholder").children[0].innerHTML = cardsDrawnImageHtml[0]
//                 document.getElementById("placeholder").children[1].innerHTML = cardsDrawnImageHtml[1]
//             }else{
//                 remainingCards.textContent =`Remaining cards: ${data.remaining}`
//                 drawBtn.disabled = true
//                 drawBtn.classList.add("disabled")

//                 if(computerScore>meScore){
//                     gameTitle.textContent = `Computer won by ${computerScore-meScore} points`
//                 }else if(computerScore<meScore){
//                     gameTitle.textContent = `You won by ${meScore-computerScore} points`
//                 }else{
//                     gameTitle.textContent =`No Winner`
//                 }
//             }
//         })
// }
// drawBtn.addEventListener("click", drawCard)



// function getWinner(firstCard, secondCard) {
//     const cardsArr = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"]
//     if (cardsArr.indexOf(firstCard) > cardsArr.indexOf(secondCard)) {
//         document.getElementById("computer-score").textContent = `Computer:${++computerScore}`
//         return "Computer Wins"
//     } else if (cardsArr.indexOf(firstCard) < cardsArr.indexOf(secondCard)) {
//         document.getElementById("me-score").textContent = `Me:${++meScore}`
//         return "You win"
//     } else {
//         return "It's a tie"
//     }
// }


let deckId = ''
let computerScore = 0, meScore = 0
const remainingCards = document.getElementById("remaining-cards")
const drawBtn = document.getElementById('draw-btn')
async function returnNewDeck() {
    const response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    const data = await response.json()
    deckId = data.deck_id
    remainingCards.textContent = `Remaining cards: ${data.remaining}`
    drawBtn.disabled = false

}
document.getElementById("shuffle-deck-btn").addEventListener("click", returnNewDeck)

let cardOne, cardTwo

const gameTitle = document.getElementById("game-title")
async function drawCard() {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    const data = await response.json()
    if (data.remaining) {
        cardOne = data.cards[0].value
        cardTwo = data.cards[1].value
        gameTitle.textContent = getWinner(cardOne, cardTwo)
        remainingCards.textContent = `Remaining cards: ${data.remaining}`
        const cardsDrawnImageHtml = data.cards.map((card) => {
            return `<img src='${card.images.png}' alt='${card.value} of ${card.suit}'>`
        })
        document.getElementById("placeholder").children[0].innerHTML = cardsDrawnImageHtml[0]
        document.getElementById("placeholder").children[1].innerHTML = cardsDrawnImageHtml[1]
    } else {
        remainingCards.textContent = `Remaining cards: ${data.remaining}`
        drawBtn.disabled = true
        drawBtn.classList.add("disabled")

        if (computerScore > meScore) {
            gameTitle.textContent = `Computer won by ${computerScore - meScore} points`
        } else if (computerScore < meScore) {
            gameTitle.textContent = `You won by ${meScore - computerScore} points`
        } else {
            gameTitle.textContent = `No Winner`
        }
    }
}

drawBtn.addEventListener("click", drawCard)



function getWinner(firstCard, secondCard) {
    const cardsArr = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"]
    if (cardsArr.indexOf(firstCard) > cardsArr.indexOf(secondCard)) {
        document.getElementById("computer-score").textContent = `Computer:${++computerScore}`
        return "Computer Wins"
    } else if (cardsArr.indexOf(firstCard) < cardsArr.indexOf(secondCard)) {
        document.getElementById("me-score").textContent = `Me:${++meScore}`
        return "You win"
    } else {
        return "It's a tie"
    }
}

// @media(max-width: 576px){}
