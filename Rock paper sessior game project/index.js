const choices = ["rock", "paper", "sessiors"]
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
let playerScore = 0
let computerScore = 0
function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a tie!"
    }
    else if (
        (playerChoice === "rock" && computerChoice === "sessiors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "sessiors" && computerChoice === "paper")
    ) {
        result = "You win!"
        playerScore++;
        playerScoreDisplay.textContent = playerScore

    }
    else {
        result = "You lose!"
        computerScore++;
        computerScoreDisplay.textContent = computerScore
    }

    playerDisplay.textContent = `Player chose: ${playerChoice}`
    computerDisplay.textContent = `Computer chose: ${computerChoice}`
    resultDisplay.textContent = result

    switch (result) {
        case "You win!":
            resultDisplay.style.color = "green";
            playerScoreDisplay.style.color = "green"
            break;
        case "You lose!":
            resultDisplay.style.color = "red";
            computerScoreDisplay.style.color = "red"
            break;
        default:
            resultDisplay.style.color = "black";
    }
}