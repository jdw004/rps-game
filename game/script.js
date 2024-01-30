const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const result = document.getElementById('result');

rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissors'));

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const playerWins = (playerChoice === 'rock' && computerChoice === 'scissors')
  || (playerChoice === 'paper' && computerChoice === 'rock')
  || (playerChoice === 'scissors' && computerChoice === 'paper');
    const computerWins = (playerChoice === 'rock' && computerChoice === 'paper')
  || (playerChoice === 'paper' && computerChoice === 'scissors')
  || (playerChoice === 'scissors' && computerChoice === 'rock');

    if (playerWins) {
        result.textContent = `You win!`;
    } else if (computerWins) {
        result.textContent = `Computer wins!`;
    } else {
        result.textContent = `Draw!`;
    }
  }
  


