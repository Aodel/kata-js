// Kata: Rock, Paper, Scissor

jsx
const playerChoice = document.createElement('h1');
const computerChoice = document.createElement('h1');
const resultDisplay = document.createElement('h1');

const gameBoard = document.getElementById('game');

gameBoard.append(playerChoice, computerChoice, resultDisplay);

playerChoice.innerHTML = 'Player choice: '
computerChoice.innerHTML = 'Computer choice:'
resultDisplay.innerHTML = 'Result:'

const choices = ['rock', 'paper', 'scissor'];

for(let i = 0; i < 3; i++) {
    const button = document.createElement('button');
    button.id = choices[i];
    button.innerHTML = choices[i];
    button.addEventListener('click', handleClick);
    gameBoard.appendChild(button);
}

function handleClick(e) {
    playerChoice.innerHTML = 'Player choice: ' + e.target.id;
    generateComputerChoice();
    getResult();
}

function generateComputerChoice() {
    const arrayIndex = Math.floor(Math.random() * 3);
    const randomChoice = choices[arrayIndex];
    computerChoice.innerHTML = 'Computer choice: ' + randomChoice;
}

function getResult() {
    // completar
}