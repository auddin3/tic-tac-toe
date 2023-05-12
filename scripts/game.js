function resetGameStatus() {
    activePlayer = 0
    currentRound = 1
    gameOver = false
    gameOver.firstElementChild.innerHTML = 
    'You won, <span id="winner-name">PLAYER NAME</span>!'
    gameOver.style.display = "none"

    let gameBoardIndex = 0

    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++){
            gameDate[i][j] = 0
            const gameAreaItem = gameAreaElement.children[gameBoardIndex]
            gameAreaElement.children[gameBoardIndex].textContent = ''
            gameAreaItem.classList.remove('disabled')
            gameBoardIndex++
        }
    }
}

function startNewGame () {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please set custom player names for both players!')
        return;
    }

    resetGameStatus()

    activePlayerName.textContent = players[activePlayer].name
    gameAreaElement.style.display = "block"
}

function checkForGameOver() {
    // Checking the rows for equality
    for (let i=0; i <= 2; i++) {
        if (gameData[i][0] > 0 && 
            gameData[i][0] == gameData[i][1] && 
            gameData[i][1] == gameData[i][2]) {
            return gameData[i][0]
        }
    }

    // Checking the columns for equality
    for (let i=0; i <= 2; i++) {
        if (gameData[0][i] > 0 && 
            gameData[0][i] == gameData[1][i] && 
            gameData[0][i] == gameData[2][i]) {
            return gameData[0][i]
        }
    }

    // Diagnoal: Top left to bottom right
    if (gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]) {
            return gameData[0][0]
    }


    // Diagnoal: Bottom left to top right
    if (gameData[2][0] > 0 &&
        gameData[2][0] === gameData[1][1] &&
        gameData[1][1] === gameData[0][2]) {
            return gameData[2][0]
    }
    if (currentRound === 9) return -1
    return 0;
}

function switchPlayer() {
    activePlayer = activePlayer === 0 ? 1 : 0
    activePlayerName.textContent = players[activePlayer].name
}

function selectGameField(event) {
    if (event.target.tagName !== 'LI' || gameOver) return

    const selectedField = event.target

    const selectedColumn  = selectedField.dataset.col - 1
    const selectedRow  = selectedField.dataset.row - 1

    if (gameData[selectedRow][selectedColumn] > 0) return 

    selectedField.textContent = players[activePlayer].symbol
    selectedField.target.classList.add('disabled')

    gameData[selectedRow][selectedColumn] = activePlayer + 1

    const winnerId = checkForGameOver()

    if (winnerId !== 0) endGame(winnerId)

    currentRound++
    switchPlayer() 
}

function endGame(winnerId) {
    gameIsOver = true
    gameOver.style.display = 'block'

    if (winnerId > 0) {
        const winnerName = players[winnerId - 1].name;
        gameOver.firstElementChild.firstElementChild.textContent = winnerName
    } else {
        gameOver.firstElementChild.textContent = 'It\'s a draw!'
    }
    
}