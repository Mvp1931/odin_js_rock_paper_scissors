console.log("Hello from rock paper scissors!");

function getComputerChoice() {
    let randomNumber = Math.ceil(Math.random() * 3);
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// console.log("Computer chose: " + getComputerChoice());

function getHumanChoice() {
    let humanChoice = String.prototype.toLowerCase.call(
        prompt("Choose 'rock', 'paper' or 'scissors' (type in input box). ")
    );

    switch (humanChoice) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            return "invalid choice";
    }
}

// console.log("Human chose: " + getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("Computer wins this round!");
        computerScore += 1;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("Computer wins this round!");
        computerScore += 1;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("Computer wins this round!");
        computerScore += 1;
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("User wins this round!");
        humanScore += 1;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("User wins this round!");
        humanScore += 1;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("User wins! this round!");
        humanScore += 1;
    } else {
        console.log("Invalid choice!");
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const computerChose = getComputerChoice();
        const humanChose = getHumanChoice();
        playRound(computerChose, humanChose);
    }
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);

    computerScore > humanScore
        ? console.log("Computer wins the game!")
        : console.log("Human wins the game!");
}
playGame();
