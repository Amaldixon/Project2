let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function playRound(playerSelection) {
  if (roundsPlayed >= 3) {
    resetGame();
  }

  const choices = ["rock", "paper", "scissors"];
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  if (playerSelection === computerSelection) {
    showResult("It's a tie!");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    showResult("You win this round!");
    playerScore++;
  } else {
    showResult("You lose this round!");
    computerScore++;
  }

  roundsPlayed++;
  updateScore();

  if (playerScore === 2 || computerScore === 2) {
    showMatchResult();
  }
}

function showResult(result) {
  const resultElement = document.getElementById("result");
  resultElement.textContent = result;
}

function updateScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function showMatchResult() {
  const matchResultElement = document.getElementById("match-result");
  if (playerScore > computerScore) {
    matchResultElement.textContent = "Congratulations! You win the match!";
  } else {
    matchResultElement.textContent = "You lose the match. Better luck next time!";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  showResult("");
  updateScore();
  const matchResultElement = document.getElementById("match-result");
  matchResultElement.textContent = "";
}
