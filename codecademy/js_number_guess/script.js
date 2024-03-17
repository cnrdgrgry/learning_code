let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

console.log(humanScore);
console.log(computerScore);
// Write your code below:

//Create a function to return a random integer between 0 and 9 to be called at start of each
//new round.

let generateTarget = () => Math.floor(Math.random() * 10);

//Create a function that has three params; human, comp and secret target.
//It determins which player wins or a tie
//returns 'true' for human win, 'false' for comp win.
let secretTarget = generateTarget();
console.log(secretTarget);

let compareGuesses = (human, computer, secretTarget) => {

  const humanDiff = (human, secretTarget) => {
    if (human > secretTarget) {
      return human - secretTarget;
    } else {
      return secretTarget - human;
    }
  } 

  const compDiff = (computer, secretTarget) => {
    if (computer > secretTarget) {
      return computer - secretTarget;
    } else {
      return secretTarget - computer;
    }
  }

  const humanDifference = humanDiff(human, secretTarget);
  const compDifference = compDiff(computer, secretTarget);
  
   if (humanDifference === compDifference) {
     return true;
   } else if (humanDifference < compDifference) {
     return true;
   } else {
     return false;
   }
}
console.log(compareGuesses(5, 6, secretTarget));



//Create and updateScore() function;
//  single parameter will be string representing the winner
//  Increases the score variable by 1 depending on winner
//  Does not need to return values
const updateScore = winner => {
  winner === 'human' ? humanScore++ : computerScore++;
};

//Create and advanceRound() function to increase the value of currentRoundNumber by 1

const advanceRound = () => currentRoundNumber++;
