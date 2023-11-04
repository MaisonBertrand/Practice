let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


let personGuess = 0;
let computerGuess = 0;
let roundTarget = 0;

function generateTarget () {
  computerGuess = (Math.floor(Math.random() * 10));
  roundTarget = (Math.floor(Math.random() * 10));
  
}

const compareGuessess = (personGuess) => {
  generateTarget();

  console.log(computerGuess);
  console.log(personGuess);
  console.log(roundTarget);

  let difKeeperP = Math.abs(personGuess - roundTarget);
  let difKeeperC = Math.abs(computerGuess - roundTarget);

  if (difKeeperP === difKeeperC){
    return `Tie!`;
    updateScore('none');
  }else if(difKeeperP > difKeeperC){
    return `Computer Wins!`;
    updateScore('computer');
  }else{
    return `You Win!`;
    updateScore('human');
  }

  advanceRound();
}



const updateScore = winner => {
  switch (winner){
    case 'human':
      humanScore++;
      break;
    case 'computer':
      computerScore++;
      break;
    case 'none':
      break;
    default:
      return `Invalid input use 'human' or 'computer'.`;
      break;
  }
}

function advanceRound(){
  currentRoundNumber++;
}



console.log(compareGuessess(2));
console.log(`Human Score: ${humanScore} vs. Computer Score: ${computerScore}`);
console.log(currentRoundNumber);