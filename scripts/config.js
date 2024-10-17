// Define all the logic related to configuring players

let singlePlayerMode = true;

function openPlayerConfig(event) {
    const selectedPlayerId = +event.target.dataset.playerid;
    editedPlayer = selectedPlayerId;
    playerConfigOverlay.style.display = 'block';
    backdrop.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlay.style.display = 'none';
    backdrop.style.display = 'none';
    form.firstElementChild.classList.remove('error');
    errorsOutput.textContent = '';
    form.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim(); // '      ' => ''

    if (!enteredPlayerName) {
        event.target.firstElementChild.classList.add('error');
        errorsOutput.textContent = 'Please enter a valid name!';
        return;
    }

    const updatedPlayerData = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerData.children[1].textContent = enteredPlayerName;
    players[editedPlayer - 1].name = enteredPlayerName;

    closePlayerConfig();
}

function toggleGameMode() {
    singlePlayerMode = !singlePlayerMode;
    const player2Name = singlePlayerMode ? 'Computer' : 'PLAYER NAME';
    document.getElementById('player-2-data').children[1].textContent = player2Name;

    if (singlePlayerMode) {
        players[1].name = 'Computer'; // Set AI as player 2
        toggleModeBtn.textContent = 'Switch to Two Player'; // Update button text
    } else {
        players[1].name = ''; // Clear for human player
        toggleModeBtn.textContent = 'Switch to Single Player'; // Update button text
    }
}