//Declaration of options

function playGame() {
	let optionPaper = 'Paper';
	let optionScissor = 'Scissors';
	let optionRock = 'Rock';
	let humanWins = 0;
	let computerWins = 0;
	let roundCounter = 0;
	//sets the range of values for computer 0,1 or 2
	let max = 3;
	function getRandomNumber(max) {
		return Math.floor(Math.random() * max);
	}
	let getComputerChoice = function () {
		if (getRandomNumber(max) == 1) {
			return optionPaper;
		} else if (getRandomNumber(max) == 2) {
			return optionScissor;
		} else {
			return optionRock;
		}
	};
	let getHumanChoice = () => {
		let getHumanSelection = prompt(
			'Please select a number 1.Rock, 2.Paper or 3.Scissors'
		);
		if (getHumanSelection == 1) {
			return optionRock;
		} else if (getHumanSelection == 2) {
			return optionPaper;
		} else {
			return optionScissor;
		}
	};
	function playRound(inputHumanChoice, inputComputerChoice) {
		console.log('This is round ' + (roundCounter + 1));
		console.log('You have selected ' + inputHumanChoice);
		console.log('The computer has selected ' + inputComputerChoice);
		if (inputHumanChoice == inputComputerChoice) {
			console.log('Its a draw');
		} else if (
			(inputHumanChoice == 'Rock' && inputComputerChoice == 'Scissors') ||
			(inputHumanChoice == 'Scissors' && inputComputerChoice == 'Paper') ||
			(inputHumanChoice == 'Paper' && inputComputerChoice == 'Rock')
		) {
			humanWins++;
		} else {
			computerWins++;
		}
		console.log(
			'Human score: ' + humanWins + ' Computer score: ' + computerWins
		);
		roundCounter++;
	}
	while (roundCounter < 5) {
		playRound(getHumanChoice(), getComputerChoice());
	}
}

playGame();
