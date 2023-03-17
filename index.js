/// Variables ///
let playerScore = 0;
let computerScore = 0;
let combinedScore = 0;
let finalGameMessage, overallWinner;

/// Functions /// 
function getComputerChoice() {
    const arr = ['Rock', 'Paper', 'Scissors'];

    let computerChoice = arr[Math.floor(Math.random()*arr.length)];
    console.log(`Computer choice: ${computerChoice}`);

    return computerChoice;
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice(); 
    const playerSelectionMod = playerSelection.toUpperCase();
    const computerSelectionMod = computerSelection.toUpperCase();
    let winner, message;
    const messagesList = {
        tie: 'You tied! Try again.', 
        player: `Congratulations! ${playerSelection} beats ${computerSelection}.`, 
        computer: `You lost! ${computerSelection} beats ${playerSelection}.`
    };

    if (playerSelectionMod == computerSelectionMod) {
        winner = "Tie";
        message = messagesList["tie"];
    }
    else if (playerSelectionMod == 'ROCK' && computerSelectionMod == 'SCISSORS') {
        winner = "Player";
        message = messagesList["player"];
    } else if (playerSelectionMod== 'SCISSORS' && computerSelectionMod == 'PAPER') {
        winner = "Player";
        message = messagesList["player"];
    } else if (playerSelectionMod== 'PAPER' && computerSelectionMod == 'ROCK') {
        winner = "Player";
        message = messagesList["player"];
    } else {
        winner = "Computer";
        message = messagesList["computer"];
    }

    // Update game log with player & computer picks
    const playerPickParagraph = document.createElement("p");
    const playerPickNode = document.createTextNode(`${playerSelectionMod}`);
    playerPickParagraph.appendChild(playerPickNode);

    const computerPickParagraph = document.createElement("p");
    const computerPickNode = document.createTextNode(`${computerSelectionMod}`);
    computerPickParagraph.appendChild(computerPickNode);

    const playerElement = document.querySelector('#playerPick');
    playerElement.appendChild(playerPickParagraph);

    const computerElement = document.querySelector('#computerPick');
    computerElement.appendChild(computerPickParagraph);

    // alert(message);
    return winner;
}

function increaseScore(winner) {
    switch (winner) {
        case ("Player"):
            playerScore += 1;
            document.getElementById('playerScore').innerHTML = playerScore;
            break;
        case ("Computer"):
            computerScore += 1;
            document.getElementById('computerScore').innerHTML = computerScore;
            break;
    }

    combinedScore = playerScore + computerScore;
}

function announceWinner() {
    if (playerScore > computerScore) {
        overallWinner = "Player";
    } else {
        overallWinner = "Computer";
    }

    finalGameMessage = `Final score: ${playerScore} to ${computerScore}, ${overallWinner}`;
    alert(finalGameMessage);
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    combinedScore = 0;

    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('computerScore').innerHTML = computerScore;
    resetGameLog('playerPick');
    resetGameLog('computerPick');
}

function resetGameLog(id) {
    const parent = document.getElementById(id);
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function play(userSelection) {
    if (combinedScore < 5) {
        winner = playRound(userSelection);
        increaseScore(winner);
    } else {
        announceWinner();
        resetGame();
    }

}

/// Event Listeners /// 
const rock = document.getElementById('rock');
rock.addEventListener('click', () => {
    play("rock");
});

const paper = document.getElementById('paper');
paper.addEventListener('click', () => {
    play("paper");
});

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', () => {
    play("scissors");
});

const restart = document.getElementById('restartButton');
restart.addEventListener('click', () => {
    resetGame();
});