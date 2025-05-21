function play(playerChoice) {
  const imageMap = {
    rock: 'images/rock.svg',
    paper: 'images/paper.svg',
    scissors: 'images/scissors.svg'
  };

  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('your-choice').src = imageMap[playerChoice];
  document.getElementById('computer-choice').src = imageMap[computerChoice];

  const result = getResult(playerChoice, computerChoice);
  document.getElementById('result').innerText = result;
}

function getResult(player, computer) {
  if (player === computer) return "It's a draw!";
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return "You win!";
  }
  return "You lose!";
}
