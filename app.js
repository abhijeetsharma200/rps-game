let playerScore = 0;
let computerScore = 0;

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

  const resultElement = document.getElementById('result');
  resultElement.innerText = result.message;
  resultElement.className = result.class;

  if (result.class === 'win') playerScore++;
  if (result.class === 'lose') computerScore++;

  document.getElementById('player-score').innerText = playerScore;
  document.getElementById('computer-score').innerText = computerScore;
}

function getResult(player, computer) {
  if (player === computer) return { message: "It's a draw!", class: 'draw' };

  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return { message: "You win!", class: 'win' };
  }

  return { message: "You lose!", class: 'lose' };
}
