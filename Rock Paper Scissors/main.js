function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choice.length);
  return choice[randomIndex];
}

function getHumanChoice() {
  const choice = ["rock", "paper", "scissors"];
  let humanChoice = prompt(`Choose one of these words: 
    ${choice.join(" | ")}`).toLowerCase();
  while (!choice.includes(humanChoice)) {
    humanChoice = prompt(`Invalid choice. Please choose one of these words: 
        ${choice.join(" | ")}`).toLowerCase();
  }
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
  }
}
playRound(getHumanChoice(), getComputerChoice());

function playGame() {
  const rounds = 3;
  for (let i = 0; i < rounds; i++) {
    console.log(`Round ${i + 1}:`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log("Final Scores:");
  console.log(`Your Score is: ${humanScore}`);
  console.log(`Computer Score is: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You're overall winner!");
  } else if (humanScore < computerScore) {
    console.log("The computer is overall winner!");
  } else {
    console.log("It's a tie overall!");
  }
}
playGame();
