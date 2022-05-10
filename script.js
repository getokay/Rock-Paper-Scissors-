function computerPlay() {
  const play = Math.floor(Math.random() * 3 + 1);
  if (play == 1) {
    return "rock";
  } else if (play == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
function winner(player, computer) {
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
