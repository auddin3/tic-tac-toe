function resetGameStatus() {
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    gameOver.firstElementChild.innerHTML = 
    'You won, <span id="winner-name">PLAYER NAME</span>!';
    gameOver.style.display = "none";

    let gameBoardElement = document.getElementById('game-board'); // Correctly define gameBoardElement
    let gameBoardIndex = 0;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameData[i][j] = 0;
            const gameBoardItem = gameBoardElement.children[gameBoardIndex];
            gameBoardItem.textContent = '';
            gameBoardItem.classList.remove('disabled');
            gameBoardIndex++;
        }
    }
}

function startNewGame() {
    if (singlePlayerMode) {
        if (players[0].name === '') {
            alert('Please set a custom player name for Player 1!');
            return;
        }
    } else {
        // In two-player mode, both names are required
        if (players[0].name === '' || players[1].name === '') {
            alert('Please set custom player names for both players!');
            return;
        }
    }

    resetGameStatus();
    activePlayerName.textContent = players[activePlayer].name;
    gameAreaElement.style.display = "block";
}

function switchPlayer() {
    activePlayer = activePlayer === 0 ? 1 : 0;
    activePlayerName.textContent = players[activePlayer].name;
}

function checkForGameOver() {
    // Check for win conditions
    for (let i = 0; i < 3; i++) {
        // Check rows
        if (gameData[i][0] > 0 && 
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]) {
            return gameData[i][0]; // Return the winner
        }

        // Check columns
        if (gameData[0][i] > 0 && 
            gameData[0][i] === gameData[1][i] &&
            gameData[1][i] === gameData[2][i]) {
            return gameData[0][i]; // Return the winner
        }
    }

    // Check diagonals
    if (gameData[0][0] > 0 && 
        gameData[0][0] === gameData[1][1] && 
        gameData[1][1] === gameData[2][2]) {
        return gameData[0][0]; // Return the winner
    }

    if (gameData[0][2] > 0 && 
        gameData[0][2] === gameData[1][1] && 
        gameData[1][1] === gameData[2][0]) {
        return gameData[0][2]; // Return the winner
    }

    // Check for draw
    if (currentRound === 9) {
        return -1; // Indicate a draw
    }

    return 0; // Game is still ongoing
}

function endGame(winnerId) {
    gameIsOver = true;
    gameOver.style.display = 'block';

    if (winnerId > 0) {
        const winnerName = players[winnerId - 1].name;
        gameOver.firstElementChild.innerHTML = 
        'You won, <span id="winner-name">' + winnerName + '</span>!';
    } else {
        gameOver.firstElementChild.innerHTML = 'It\'s a draw!';
    }
}

function aiMove() {
    const bestMove = findBestMove(gameData);
    let gameBoardElement = document.getElementById('game-board');
    
    const selectedField = gameBoardElement.querySelector(
        `li[data-row="${bestMove.row + 1}"][data-col="${bestMove.col + 1}"]`
    );

    selectedField.textContent = players[1].symbol; // AI's symbol
    selectedField.classList.add('disabled');
    gameData[bestMove.row][bestMove.col] = 2; // AI plays 'O'

    const winnerId = checkForGameOver();
    if (winnerId !== 0) {
        endGame(winnerId);
    } else {
        currentRound++;
        switchPlayer();
    }
}

function findBestMove(board) {
    let bestScore = -Infinity;
    let move;

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === 0) {
                board[row][col] = 2; // AI's turn
                let score = minimax(board, 0, false);
                board[row][col] = 0; // Undo move

                if (score > bestScore) {
                    bestScore = score;
                    move = { row, col };
                }
            }
        }
    }
    return move;
}

function minimax(board, depth, isMaximizing) {
    const winnerId = checkForGameOver();
    if (winnerId !== 0) {
        return winnerId === 1 ? -10 : winnerId === 2 ? 10 : 0; // AI is 'O', Player is 'X'
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (board[row][col] === 0) {
                    board[row][col] = 2; // AI's move
                    let score = minimax(board, depth + 1, false);
                    board[row][col] = 0; // Undo move
                    bestScore = Math.max(score, bestScore);
                }
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (board[row][col] === 0) {
                    board[row][col] = 1; // Player's move
                    let score = minimax(board, depth + 1, true);
                    board[row][col] = 0; // Undo move
                    bestScore = Math.min(score, bestScore);
                }
            }
        }
        return bestScore;
    }
}

function selectGameField(event) {
    if (event.target.tagName !== 'LI' || gameIsOver) return;

    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if (gameData[selectedRow][selectedColumn] > 0) return;

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');
    gameData[selectedRow][selectedColumn] = activePlayer + 1;

    const winnerId = checkForGameOver();

    if (winnerId !== 0) {
        endGame(winnerId);
    } else {
        currentRound++;
        switchPlayer();

        if (singlePlayerMode && activePlayer === 1) {
            aiMove(); 
        }
    }
}
