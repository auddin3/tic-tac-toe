# Tic-Tac-Toe Game

Welcome to the **Tic-Tac-Toe** game! This is a simple implementation of the classic game using **HTML**, **CSS**, and **JavaScript**. It allows two players to take turns placing their marks (X or O) on a 3x3 grid, and the first player to align three of their marks horizontally, vertically, or diagonally wins the game.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [How to Play](#how-to-play)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Future Enhancements](#future-enhancements)

## Features

- Two-player mode (Player X and Player O)
- Dynamic game board updates after each move
- Highlights the winning combination when a player wins
- Displays a message for the winner or a tie (draw)
- Option to restart the game without refreshing the page

## Installation

To run this game locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/tic-tac-toe.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd tic-tac-toe
   ```

3. **Open the `index.html` file in your browser**:
   Simply double-click on the `index.html` file or right-click and select "Open with" to choose your browser.

## How to Play

1. The game starts with Player X's turn.
2. Click on any empty cell in the 3x3 grid to place your mark (X or O).
3. Players take turns marking their symbols until one player has three in a row (horizontally, vertically, or diagonally), or all cells are filled (resulting in a draw).
4. When the game ends, a message will appear indicating the winner or if the game was a draw.
5. Click the "Restart" button to reset the board and start a new game.

## Project Structure

```
tic-tac-toe/
│
├── index.html         # The main HTML file
├── style.css          # Styles for the game board and layout
└── script.js          # JavaScript logic for game functionality
```

- **index.html**: Contains the structure of the game board and interface.
- **style.css**: Defines the visual layout, colors, and grid display.
- **script.js**: Implements the game logic, including turn handling, win detection, and game reset.

## Technologies Used

- **HTML5**: Provides the structure of the game board.
- **CSS3**: For styling the game layout and enhancing the visual appeal.
- **JavaScript (ES6+)**: Handles the core game logic such as turn-based mechanics, win condition checks, and game restarts.

## Future Enhancements

Here are some ideas for potential future improvements:
- Add a **single-player mode** with AI (computer opponent).
- Implement difficulty levels (easy, medium, hard) for the AI.
- Add animations for player moves or winning sequences.
- Create a mobile-friendly, responsive design.
- Track player scores across multiple games.
