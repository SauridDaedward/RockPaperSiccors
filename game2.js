let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];
const winningScore = 5;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        playerScore++;
        return "You win!";
    } else {
        computerScore++;
        return "Computer wins!";
    }
}

function playRound(playerChoice) {
    if (playerScore >= winningScore || computerScore >= winningScore) {
        return; // Game stops if someone already reached the winning score
    }

    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    // Update result text
    const resultText = document.getElementById('result-text');
    resultText.innerHTML = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;

    // Update scores
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;

    // Check for winner
    if (playerScore >= winningScore) {
        document.getElementById('winner-text').textContent = "Congratulations! You won the game!";
    } else if (computerScore >= winningScore) {
        document.getElementById('winner-text').textContent = "Sorry! The computer won the game!";
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('result-text').textContent = "Choose an option to start the game";
    document.getElementById('winner-text').textContent = "";
}
