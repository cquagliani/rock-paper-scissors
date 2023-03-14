
getComputerChoice = () => {
    const arr = ['Rock', 'Paper', 'Scissors'];

    let computerChoice = arr[Math.floor(Math.random()*arr.length)];
    console.log(`Computer choice: ${computerChoice}`);

    return computerChoice;
}

playRound = (playerSelection, computerSelection) => {

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

    console.log(message);
    return winner;
}

let playerScore = 0;
let computerScore = 0;
let combinedScore = 0;

game = (winner) => {

    let finalGameMessage, overallWinner;

    while (combinedScore < 5) {
        // winner = playRound(playerSelection, computerSelection);

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

    if (playerScore === computerScore) {
        overallWinner = "Tie";
    } else if (playerScore > computerScore) {
        overallWinner = "Player";
    } else {
        overallWinner = "Computer";
    }

    finalGameMessage = `Final score: ${playerScore} to ${computerScore}, ${overallWinner}`

    console.log(finalGameMessage);
    return finalGameMessage;
}

const rock = document.getElementById('rock');
rock.addEventListener('click', () => {
    const computerSelection = getComputerChoice(); 
    winner = playRound("rock", computerSelection)
    game(winner);
});

const paper = document.getElementById('paper');
paper.addEventListener('click', () => {
    const computerSelection = getComputerChoice(); 
    winner = playRound("paper", computerSelection)
    game(winner);
});

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', () => {
    const computerSelection = getComputerChoice(); 
    winner = playRound("scissors", computerSelection)
    game(winner);
});