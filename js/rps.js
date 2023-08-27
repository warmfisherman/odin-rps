const CHOICES = ["Rock", "Paper", "Scissors"];

const GAME_OUTCOMES = {
  rock: {
    rock: 0,
    paper: -1,
    scissors: 1,
  },
  paper: {
    rock: 1,
    paper: 0,
    scissors: -1,
  },
  scissors: {
    rock: -1,
    paper: 1,
    scissors: 0,
  },
};

function getComputerChoice() {
  const index = Math.floor(Math.random() * 3);
  return CHOICES[index];
}

function playRound(playerSelection, computerSelection) {
  const normalizedPlayerSelection = playerSelection.toLowerCase();
  const normalizedComputerSelection = computerSelection.toLowerCase();
  return GAME_OUTCOMES[normalizedPlayerSelection][normalizedComputerSelection];
}

function game(rounds) {
  let playerPoints = 0;
  for (let i = 0; i < rounds; i++) {
    let playerSelection = prompt("Gimme ya choice");
    let computerSelection = getComputerChoice();
    let gameResult = playRound(playerSelection, computerSelection);
    playerPoints += gameResult;
    console.log(
      `Player chose ${playerSelection} and computer choice ${computerSelection}...`
    );
    switch (gameResult) {
      case 0:
        console.log("It's a tie!");
        break;
      case 1:
        console.log("Player won the round!");
        break;
      case -1:
        console.log("Computer won the round!");
        break;
      default:
        console.log("Something's not right....abort mission!");
        return;
    }
  }

  if (playerPoints > 0) {
    console.log("Player is victorious!");
  } else if (playerPoints < 0) {
    console.log("Computer is victorious!");
  } else {
    console.log("Woah! It's a tie!");
  }
}
