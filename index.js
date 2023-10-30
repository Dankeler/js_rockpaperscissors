function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const choice = choices[randomIndex];
    return choice;
}

const playerSelection = prompt("Enter ")
const computerSelection = getComputerChoice();
console.log(computerSelection)

function oneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock") {
        if (computerSelection === "Scissors") {
            console.log("You win! (R vs S)")
        }
        else if (computerSelection === "Paper") {
            console.log("I Won! (R vs P)")
        }
        else {
            console.log("Tie (R v R)")
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "Paper") {
            console.log("You win! (S vs P)")
        }
        else if (computerSelection === "Rock") {
            console.log("I Won! (S vs R)")
        }
        else {
            console.log("Tie (S v S)")
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "Rock") {
            console.log("You win! (P vs R)")
        }
        else if (computerSelection === "Scissors") {
            console.log("I Won! (P vs S)")
        }
        else {
            console.log("Tie (P v P)")
        }
    }
}


oneRound(playerSelection, computerSelection)
