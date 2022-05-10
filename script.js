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
}
