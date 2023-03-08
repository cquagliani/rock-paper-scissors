
getComputerChoice = () => {
    const arr = ['Rock', 'Paper', 'Scissors'];

    let computerChoice = arr[Math.floor(Math.random()*arr.length)];
    console.log(computerChoice);

    return computerChoice;
}

playRound = (playerSelection, computerSelection) => {

    let winner;
    let message;
    let playerSelectionMod = playerSelection.toUpperCase();
    let computerSelectionMod = computerSelection.toUpperCase();

    if (playerSelectionMod == computerSelectionMod) {
        winner = 'Tie';
    }
    else if (playerSelectionMod == 'ROCK' && computerSelectionMod == 'SCISSORS') {
        winner = playerSelectionMod;
    } else if (playerSelectionMod== 'SCISSORS' && computerSelectionMod == 'PAPER') {
        winner = playerSelectionMod;
    } else if (playerSelectionMod== 'PAPER' && computerSelectionMod == 'ROCK') {
        winner = playerSelectionMod;
    } else {
        winner = computerSelectionMod;
    }

    if (winner == 'Tie') {
        message = 'You tied! Try again.';
    } else if (winner == playerSelectionMod) {
        message = `Congratulations! ${playerSelection} beats ${computerSelection}.`;
    } else {
        message = `You lost! ${computerSelection} beats ${playerSelection}.`;
    }

    return message;
}


// Call program to test
const playerSelection = 'paper';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));