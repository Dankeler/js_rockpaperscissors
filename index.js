function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const choice = choices[randomIndex];
    return choice;
}

let computerSelection = getComputerChoice();
console.log(computerSelection)


let userChoice = ""
let playerScore = 0;
let computerScore = 0;
let whoWon = ""
let gameOver = false


document.querySelector("#Rock").onclick = function() {
    userChoice = "Rock"
}
document.querySelector("#Paper").onclick = function() {
    userChoice = "Paper"
}
document.querySelector("#Scissors").onclick = function() {
    userChoice = "Scissors"
}

const scoreScore = document.getElementById("scoreScore")
const scoreInfo = document.getElementById("scoreInfo")


document.querySelector("#Rock").onclick = function() {
    userChoice = "Rock"
}
document.querySelector("#Paper").onclick = function() {
    userChoice = "Paper"
}
document.querySelector("#Scissors").onclick = function() {
    userChoice = "Scissors"
}

const btnn = document.querySelector(".buttons")

btnn.addEventListener("click", function() {
    if (!gameOver && playerScore < 5 && computerScore < 5) {
        computerSelection = getComputerChoice();
        oneRound();

        if (playerScore >= 5) {
            gameOver = true;
            scoreInfo.innerHTML = "Player won the game!"
        } else if (computerScore >= 5) {
            gameOver = true;
            scoreInfo.innerHTML = "Computer won the game!"
        }


}});


        
        
        
function oneRound() {
    if (!gameOver) {
    switch (true) {
        case (computerSelection === "Rock"):
            if (userChoice === "Paper") {
                playerScore += 1
                whoWon = "Player"
                console.log(playerScore)
            } else if (userChoice === "Scissors") {
                computerScore += 1
                whoWon = "Computer"
                console.log(computerScore)
            } else {
                whoWon = "No one"
            }
            break;
        case (computerSelection === "Paper"):
            if (userChoice === "Scissors") {
                playerScore += 1
                whoWon = "Player"
                console.log(playerScore)
            } else if (userChoice === "Rock") {
                computerScore += 1
                whoWon = "Computer"
                console.log(computerScore)
            } else {
                whoWon = "No one"
            }
            break;
        case (computerSelection === "Scissors"):
            if (userChoice === "Rock") {
                playerScore += 1
                whoWon = "Player"
                console.log(playerScore)
            } else if (userChoice === "Paper") {
                computerScore += 1
                whoWon = "Computer"
                console.log(computerScore)
            } else {
                whoWon = "No one"
            }
            break;
    }
scoreScore.innerHTML = `${playerScore} : ${computerScore}`
scoreInfo.innerHTML = `${whoWon} won`

}}
