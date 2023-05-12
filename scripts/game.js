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

    const selectedField = event.target

    const selectedColumn  = selectedField.dataset.col - 1
    const selectedRow  = selectedField.dataset.row - 1

    if (gameData[selectedRow][selectedColumn] > 0) return 

    selectedField.textContent = players[activePlayer].symbol
    selectedField.target.classList.add('disabled')

    gameData[selectedRow][selectedColumn] = activePlayer + 1

    switchPlayer() 
}