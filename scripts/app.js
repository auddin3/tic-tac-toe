// Core management of all the HTML elements
let editedPlayer = 0;
let activePlayer = 0;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    },
]

const playerConfigOverlay = document.getElementById('config-overlay')
const backdrop = document.getElementById('backdrop')
const form = document.querySelector('form')
const errorsOutput = document.getElementById('config-errors')
const gameAreaElement = document.getElementById('active-game')
const activePlayerName = document.getElementById('active-player-name')

const editPlayer1Btn = document.getElementById('edit-player-1-btn')
const editPlayer2Btn = document.getElementById('edit-player-2-btn')
const cancelConfigBtn = document.getElementById('cancel-config-btn')
const startNewGameBtn = document.getElementById('start-game-btn') 
const gameFieldElements = document.querySelectorAll('#game-board li')

editPlayer1Btn.addEventListener('click', openPlayerConfig)
editPlayer2Btn.addEventListener('click', openPlayerConfig)

cancelConfigBtn.addEventListener('click', closePlayerConfig)
backdrop.addEventListener('click', closePlayerConfig)

form.addEventListener('submit', savePlayerConfig)

startNewGameBtn.addEventListener('click', startNewGame)

for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener('click', selectGameField)
}