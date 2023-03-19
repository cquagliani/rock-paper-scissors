/// Variables ///
let playerScore = 0;
let computerScore = 0;
let combinedScore = 0;
let finalGameMessage, overallWinner;

/// Functions ///
function getComputerChoice() {
	const arr = ["Rock", "Paper", "Scissors"];

	let computerChoice = arr[Math.floor(Math.random() * arr.length)];
	console.log(`Computer choice: ${computerChoice}`);

	return computerChoice;
}

function formatText(text) {
	let formattedText = text.charAt(0).toUpperCase() + text.toLowerCase().slice(1);
	return formattedText;
}

function playRound(playerSelection) {
	let computerSelection = getComputerChoice();
	const playerSelectionMod = playerSelection.toUpperCase();
	const computerSelectionMod = computerSelection.toUpperCase();
	let winner, message;

	if (playerSelectionMod == computerSelectionMod) {
		winner = "Tie";

	} else if (
		playerSelectionMod == "ROCK" &&
		computerSelectionMod == "SCISSORS"
	) {
		winner = "Player";

	} else if (
		playerSelectionMod == "SCISSORS" &&
		computerSelectionMod == "PAPER"
	) {
		winner = "Player";

	} else if (playerSelectionMod == "PAPER" && computerSelectionMod == "ROCK") {
		winner = "Player";

	} else {
		winner = "Computer";

	}

	// Update game log with player & computer picks
	const formattedPlayer = formatText(playerSelectionMod);
	const formattedComputer = formatText(computerSelectionMod);

	const playerPickParagraph = document.createElement("p");
	const playerPickNode = document.createTextNode(`${formattedPlayer}`);
	playerPickParagraph.appendChild(playerPickNode);

	const computerPickParagraph = document.createElement("p");
	const computerPickNode = document.createTextNode(`${formattedComputer}`);
	computerPickParagraph.appendChild(computerPickNode);

	// Change the color of the game log depending on who won the round
	if (winner == "Tie") {
		playerPickParagraph.classList.add("text-gray");
		playerPickParagraph.classList.add("font-light");
		computerPickParagraph.classList.add("text-gray");
		computerPickParagraph.classList.add("font-light");
	} else {
		winner == "Player"
			? playerPickParagraph.classList.add("text-blue")
			: playerPickParagraph.classList.add("text-pink");
		winner == "Computer"
			? computerPickParagraph.classList.add("text-blue")
			: computerPickParagraph.classList.add("text-pink");

		playerPickParagraph.classList.add("font-light");
		computerPickParagraph.classList.add("font-light");
	}

	const playerElement = document.querySelector("#playerPick");
	const computerElement = document.querySelector("#computerPick");
	playerElement.appendChild(playerPickParagraph);
	computerElement.appendChild(computerPickParagraph);

	return winner;
}

function increaseScore(winner) {
	switch (winner) {
		case "Player":
			playerScore += 1;
			document.getElementById("playerScore").innerHTML = playerScore;
			break;
		case "Computer":
			computerScore += 1;
			document.getElementById("computerScore").innerHTML = computerScore;
			break;
	}

	combinedScore = playerScore + computerScore;
}

setInterval( function checkScore() {
	if (combinedScore > 4) {
		announceWinner();
		resetGame();
	}
}, 1);

function announceWinner() {
	if (playerScore > computerScore) {
		overallWinner = "Player";
	} else {
		overallWinner = "Computer";
	}

	finalGameMessage = `Final score: ${playerScore} to ${computerScore}, ${overallWinner}`;
	alert(finalGameMessage);
}

function resetGameLog(id) {
	const parent = document.getElementById(id);
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

function resetGame() {
	playerScore = 0;
	computerScore = 0;
	combinedScore = 0;

	document.getElementById("playerScore").innerHTML = playerScore;
	document.getElementById("computerScore").innerHTML = computerScore;
	resetGameLog("playerPick");
	resetGameLog("computerPick");
}

function btnPress(userSelection) {
	winner = playRound(userSelection);
	increaseScore(winner);
}

/// Event Listeners ///
const rock = document.getElementById("rock");
rock.addEventListener("click", () => {
	btnPress("rock");
});

const paper = document.getElementById("paper");
paper.addEventListener("click", () => {
	btnPress("paper");
});

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", () => {
	btnPress("scissors");
});

const restart = document.getElementById("restartButton");
restart.addEventListener("click", () => {
	resetGame();
});