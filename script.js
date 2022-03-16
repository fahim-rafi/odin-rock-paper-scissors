function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

let scoreComputer = 0;
let scorePlayer = 0;

function playRound(playerSelection, computerSelection) {
  console.log("You have played " + playerSelection + ".");
  console.log("The computer has played " + computerSelection + ".");

  if (computerSelection === playerSelection) {
    return "It's a draw!";
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    scorePlayer++;
    return "You win!";
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    scorePlayer++;
    return "You win!";
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    scorePlayer++;
    return "You win!";
  } else {
    scoreComputer++;
    return "You lose!";
  }
}

function game() {
  scorePlayer = 0;
  scoreComputer = 0;

  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
    computerSelection = computerPlay();

    console.log(playRound(playerSelection, computerSelection));
    console.log("Score: You " + scorePlayer + " - Computer " + scoreComputer);
  }

  if (scorePlayer > scoreComputer) {
    console.log("You won the game!");
  } else if (scorePlayer === scoreComputer) {
    console.log("The game was a draw!");
  } else {
    console.log("You lost the game!");
  }
}
