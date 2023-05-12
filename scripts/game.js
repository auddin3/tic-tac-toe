function startNewGame () {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please set custom player names for both players!')
        return;
    }

    activePlayerName.textContent = players[activePlayer].name
    gameAreaElement.style.display = "block"
}

function switchPlayer() {
    activePlayer = activePlayer === 0 ? 1 : 0
    activePlayerName.textContent = players[activePlayer].name
}

function selectGameField(event) {
    if (event.target.tagName !== 'LI') return

    event.target.textContent = players[activePlayer].symbol
    event.target.classList.add('disabled')
    switchPlayer() 
}