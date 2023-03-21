// Variables // 
let playerScore = 0;
let computerScore = 0;
let combinedScore = 0;
let rounds = 0;
let overallWinner;
const wrapper = document.getElementById("wrapper");
const restartModal = document.getElementById("restartModal");
const restartButton = document.getElementById("restartButton");
const yesRestart = document.getElementById("yesRestart");
const noRestart = document.getElementById("noRestart");
const winModal = document.getElementById("winModal");
const playAgainWin = document.getElementById("playAgainWin");
const loseModal = document.getElementById("loseModal");
const playAgainLose = document.getElementById("playAgainLose");
const playerLog = document.getElementById("playerPick");
const computerLog = document.getElementById("computerPick");

function playRound(playerSelection) {
	rounds++;
	const computerSelection = getComputerChoice();
	const formattedPlayer = formatText(playerSelection);
	const formattedComputer = formatText(computerSelection);
	let winner;

	if (formattedPlayer == formattedComputer) {
		winner = "Tie";
	} else if (
		formattedPlayer == "Rock" &&
		formattedComputer == "Scissors"
	) {
		winner = "Player";
	} else if (
		formattedPlayer == "Scissors" &&
		formattedComputer == "Paper"
	) {
		winner = "Player";
	} else if (
		formattedPlayer == "Paper" && 
		formattedComputer == "Rock"
	) {
		winner = "Player";
	} else {
		winner = "Computer";
	}

	// Update game log with player & computer picks
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

	playerLog.appendChild(playerPickParagraph);
	computerLog.appendChild(computerPickParagraph);

	return winner;
}

function getComputerChoice() {
	const arr = ["Rock", "Paper", "Scissors"];

	const computerChoice = arr[Math.floor(Math.random() * arr.length)];
	console.log(`Computer choice: ${computerChoice}`);

	return computerChoice;
}

function formatText(text) {
	const formattedText = text.charAt(0).toUpperCase() + text.toLowerCase().slice(1);
	return formattedText;
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

	if (playerScore > 10 || computerScore > 10) {
		showModal();
	}
}

function showModal() {
	playerScore > computerScore ? (overallWinner = "Player") : (overallWinner = "Computer");

	if (overallWinner == "Player") {
		// Show Player Won Modal
		winModal.style.display = "flex";
		winModal.style.justifyContent = "center";
		winModal.style.alignItems = "center";
		winModal.style.zIndex = "1";
		winModal.style.height = "95vh";
		winModal.style.width = "95vw";
		wrapper.classList.add("hidden");
	} else {
		// Show Player Lost Modal
		loseModal.style.display = "flex";
		loseModal.style.justifyContent = "center";
		loseModal.style.alignItems = "center";
		loseModal.style.zIndex = "1";
		loseModal.style.height = "95vh";
		loseModal.style.width = "95vw";
		wrapper.classList.add("hidden");
	}
}

function resetGameLog() {
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
	resetGameLog();
}

// Event Listeners & Button Actions // 
function btnPress(userSelection) {
	winner = playRound(userSelection);
	increaseScore(winner);
}

const rock = document.getElementById("rock");
rock.addEventListener("click", () => {
	btnPress("Rock");
});

const paper = document.getElementById("paper");
paper.addEventListener("click", () => {
	btnPress("Paper");
});

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", () => {
	btnPress("Scissors");
});

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