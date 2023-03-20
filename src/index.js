let playerScore = 0;
let computerScore = 0;
let combinedScore = 0;
let rounds = 0;
let finalGameMessage, overallWinner;

function getComputerChoice() {
	const arr = ["Rock", "Paper", "Scissors"];

	let computerChoice = arr[Math.floor(Math.random() * arr.length)];
	console.log(`Computer choice: ${computerChoice}`);

	return computerChoice;
}

function formatText(text) {
	let formattedText =
		text.charAt(0).toUpperCase() + text.toLowerCase().slice(1);
	return formattedText;
}

function playRound(playerSelection) {
	rounds++;
	let computerSelection = getComputerChoice();
	const playerSelectionMod = playerSelection.toUpperCase();
	const computerSelectionMod = computerSelection.toUpperCase();
	let winner;

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

setInterval(function checkScore() {
	if (playerScore > 2 || computerScore > 2) {
		announceWinner();
	}
}, 4);

function announceWinner() {
	playerScore > computerScore
		? (overallWinner = "Player")
		: (overallWinner = "Computer");

	if (overallWinner == "Player") {
		winModal.style.display = "flex";
		winModal.style.justifyContent = "center";
		winModal.style.alignItems = "center";
		winModal.style.zIndex = "1";
		winModal.style.height = "95vh";
		winModal.style.width = "95vw";
		wrapper.classList.add("hidden");
	} else {
		loseModal.style.display = "flex";
		loseModal.style.justifyContent = "center";
		loseModal.style.alignItems = "center";
		loseModal.style.zIndex = "1";
		loseModal.style.height = "95vh";
		loseModal.style.width = "95vw";
		wrapper.classList.add("hidden");
	}
}

function resetGameLog(id1, id2) {
	const playerLog = document.getElementById(id1);
	const computerLog = document.getElementById(id2);
	while (playerLog.firstChild || computerLog.firstChild) {
		playerLog.removeChild(playerLog.firstChild);
		computerLog.removeChild(computerLog.firstChild);
	}
}

function resetGame() {
	rounds = 0;
	playerScore = 0;
	computerScore = 0;
	combinedScore = 0;

	document.getElementById("playerScore").innerHTML = playerScore;
	document.getElementById("computerScore").innerHTML = computerScore;
	resetGameLog("playerPick", "computerPick");
}

function btnPress(userSelection) {
	winner = playRound(userSelection);
	increaseScore(winner);
}

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

let wrapper = document.getElementById("wrapper");
let restartModal = document.getElementById("restartModal");
let restartButton = document.getElementById("restartButton");
let yesRestart = document.getElementById("yesRestart");
let noRestart = document.getElementById("noRestart");
let winModal = document.getElementById("winModal");
let playAgainWin = document.getElementById("playAgainWin");
let loseModal = document.getElementById("loseModal");
let playAgainLose = document.getElementById("playAgainLose");

restartButton.onclick = function () {
	if (!(rounds == 0)) {
		restartModal.style.display = "flex";
		restartModal.style.justifyContent = "center";
		restartModal.style.alignItems = "center";
		restartModal.style.zIndex = "1";
		restartModal.style.height = "95vh";
		restartModal.style.width = "95vw";
		wrapper.classList.add("hidden");
	}
};

yesRestart.onclick = function () {
	resetGame();
	wrapper.classList.remove("hidden");
	restartModal.style.display = "none";
}

noRestart.onclick = function () {
	wrapper.classList.remove("hidden");
	restartModal.style.display = "none";
};

playAgainWin.onclick = function () {
	resetGame();
	wrapper.classList.remove("hidden");
	winModal.style.display = "none";
}

playAgainLose.onclick = function () {
	resetGame();
	wrapper.classList.remove("hidden");
	loseModal.style.display = "none";
}