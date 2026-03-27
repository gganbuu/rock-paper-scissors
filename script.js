
// Code for game logic
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: 
            computerIcon.className = ""
            computerIcon.classList.add('fas', 'fa-hand-rock');
        return "Rock";
        case 1: 
            computerIcon.className = ""
            computerIcon.classList.add('fas', 'fa-hand-paper');
            return "Paper";
        case 2: 
            computerIcon.className = ""
            computerIcon.classList.add('fas', 'fa-hand-paper');
            return "Scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    let outcome = ""
    
    if (humanChoice == computerChoice) { 
        outcome = "draw"
        return `It's a ${outcome}! ${humanChoice} matches ${computerChoice}`
    }

    else if (humanChoice == "Rock") {
        if (computerChoice == "Scissors") {
            outcome = "Win"
        }
        else { outcome = "Lose"}
    }

    else if (humanChoice == "Paper") {
        if (computerChoice == "Rock") {
            outcome = "Win"
        }
        else { outcome = "Lose"}
    }

    else if (humanChoice == "Scissors") {
        if (computerChoice == "Paper") {
            outcome = "Win"
        }
        else { outcome = "Lose"}
    }
    
    return `You ${outcome}! ${humanChoice} ${outcome == "Win" ? "wins against" : "loses to"} ${computerChoice}`
}


resetGame = (outcome) => {
    switch (outcome) {
        case "won": alert("You have won!"); break;
        case "lost": alert("You lost :(."); break;
    }
    computerScore = 0;
    playerScore =  0;

    computerScorePara.textContent = computerScore;
    playerScorePara.textContent = playerScore;
    results.textContent = ""
    computerIcon.className = ""
    playerIcon.className = ""
}


// Code for button handling
const selectionContainer = document.querySelector("#selectioncontainer")
const results = document.querySelector("#roundresult")
const body = document.querySelector("body")
const computerScorePara = document.querySelector(".computerscore")
const playerScorePara = document.querySelector(".playerscore")
const playerIcon = document.querySelector("#playerchoice")
const computerIcon = document.querySelector("#computerchoice")
let computerScore = 0;
let playerScore = 0;





selectionContainer.addEventListener("click", (event) => {
    let target = event.target;
    let choice = ""
    switch (target.id) {
        case 'rockBtn':
            playerIcon.className = ""
            choice = "Rock"; 
            playerIcon.classList.add('fas', 'fa-hand-rock');
            break;
        case 'paperBtn':
            playerIcon.className = ""
            choice = "Paper"; 
            playerIcon.classList.add('fas', 'fa-hand-paper');
            break;
        case 'scissorsBtn':
            playerIcon.className = ""
            choice = "Scissors";
            playerIcon.classList.add('fas', 'fa-hand-scissors');
            break;
        default:
            break;
    }
    if (choice != "") {
        results.textContent = playRound(choice, getComputerChoice())
        choice = ""
    }

    if (results.textContent.includes("Win")) {
        playerScore++;
        playerScorePara.textContent = playerScore;
    } else if (results.textContent.includes("Lose")) {
        computerScore++;
        computerScorePara.textContent = computerScore;
    }

    if (playerScore == 5) {
        setTimeout(() => resetGame("won"), 100);
    } else if (computerScore == 5) {
        setTimeout(() => resetGame("lost"), 100);
    }

})












