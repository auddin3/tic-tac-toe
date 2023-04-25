// Define all the logic related to configuring players

function openPlayerConfig (event) {
    const selectedPlayerId = +event.target.dataset.playerid
    editedPlayer = selectedPlayerId
    playerConfigOverlay.style.display = 'block'
    backdrop.style.display = 'block'
}

function closePlayerConfig () {
    playerConfigOverlay.style.display = 'none'
    backdrop.style.display = 'none'
    form.firstElementChild.classList.remove('error')
    errorsOutput.textContent = ''
    form.firstElementChild.lastElementChild.value = ''
}

function savePlayerConfig (event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const enteredPlayerName = formData.get('playername').trim() // '      ' => ''

    if (!enteredPlayerName) {
        event.target.firstElementChild.classList.add('error')
        errorsOutput.textContent = 'Please enter a valid name!'
        return
    }

    const updatedPlayerData = document.getElementById('player-' + editedPlayer + '-data')
    updatedPlayerData.children[1].textContent = enteredPlayerName

    players[editedPlayer-1].name = enteredPlayerName

    closePlayerConfig()
}