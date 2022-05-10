function computerPlay() {
  const play = Math.floor(Math.random() * 3 + 1);
  if (play == 1) {
    return "Rock";
  } else if (play == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
