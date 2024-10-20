// Core management of all the HTML elements

let gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0 ,0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    },
];

const playerConfigOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');
const form = document.querySelector('form');
const errorsOutput = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const activePlayerName = document.getElementById('active-player-name');
const gameOver = document.getElementById('game-over');

const editPlayer1Btn = document.getElementById('edit-player-1-btn');
const editPlayer2Btn = document.getElementById('edit-player-2-btn');
const cancelConfigBtn = document.getElementById('cancel-config-btn');
const startNewGameBtn = document.getElementById('start-game-btn');
const toggleModeBtn = document.getElementById('toggle-mode-btn');
let gameFieldElements = document.querySelectorAll('#game-board li');

editPlayer1Btn.addEventListener('click', openPlayerConfig);
editPlayer2Btn.addEventListener('click', openPlayerConfig);
cancelConfigBtn.addEventListener('click', closePlayerConfig);
backdrop.addEventListener('click', closePlayerConfig);
form.addEventListener('submit', savePlayerConfig);
startNewGameBtn.addEventListener('click', startNewGame);
toggleModeBtn.addEventListener('click', toggleGameMode);

for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener('click', selectGameField);
}