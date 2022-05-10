function computerChoice() {
  const play = Math.floor(Math.random() * 3 + 1);
  if (play == 1) {
    console.log("AI played Rock");
    return "rock";
  } else if (play == 2) {
    console.log("AI played Paper");
    return "paper";
  } else {
    console.log("AI played Scissors");
    return "scissors";
  }
}
function win(player, computer) {
  player = player.toLowerCase();
  if (player == computer) {
    return "deuce";
  } else if (
    (player == "rock" && computer == "scissors") ||
    (player == "paper" && computer == "rock") ||
    (player == "scissors" && computer == "paper")
  ) {
    return "playerWin";
  } else {
    return "computerWin";
  }
}
function playerChoice() {
  let play = prompt("Insert Rock, Papper or Scissors");
  while (
    play.toLocaleLowerCase() != "rock" &&
    play.toLocaleLowerCase() != "paper" &&
    play.toLocaleLowerCase() != "scissors"
  ) {
    play = prompt("Insert Rock, Papper or Scissors");
  }
  console.log("You played " + play);
  return play;
}

function playRound() {
  const winner = win(playerChoice(), computerChoice());
  if (winner == "playerWin") {
    console.log("You win this round");
    return "a";
  } else if (winner == "computerWin") {
    console.log("The AI wins this round");
    return "b";
  } else {
    console.log("It is a deuce, lets try again");
    return "c";
  }
}

function game() {
  let playerScore = 0,
    computerScore = 0;

  for (let i = 0; i < 5; i++) {
    if (playerScore == 3 || computerScore == 3) {
      break;
    }
    let cas = playRound();
    if (cas == "a") {
      playerScore++;
    } else if (cas == "b") {
      computerScore++;
    } else {
      i -= 1;
    }
  }
  if (playerScore < computerScore) {
    console.log(
      "The AI wins the game with a score of " +
        computerScore +
        " to " +
        playerScore
    );
  } else {
    console.log(
      "You win the game with a score of " + playerScore + " to " + computerScore
    );
  }
}
