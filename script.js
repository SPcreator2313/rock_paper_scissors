function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);

    if (randomNumber <= 40) {
        return (`Rock`);
    } else if (randomNumber <= 70) {
        return (`Paper`);
    } else {
        return (`Scissors`);
    }

}

function getHumanChoice() {
    let userEnterValue = prompt(`Enter Rock, Paper or Scissors here`, ``);
    return (`${userEnterValue[0].toUpperCase()}${userEnterValue.slice(1).toLowerCase()}`);
}


function playGame() {

    let [humanScore, computerScore] = [0, 0];

    function playRound(humanMove, computerMove) {

        if (humanMove === computerMove) {
            console.log(`Match Draw, No One Win this round!`);
        } else if (
            humanMove === `Rock` && computerMove === `Paper` ||
            humanMove === `Paper` && computerMove === `Scissors` ||
            humanMove === `Scissors` && computerMove === `Rock`) {
            console.log(`Computer Win this round!`);
            computerScore++;
        } else {
            console.log(`You Win this round!`);
            humanScore++;
        }

    }

    playRound (getHumanChoice(), getComputerChoice());

    playRound (getHumanChoice(), getComputerChoice());

    playRound (getHumanChoice(), getComputerChoice());

    playRound (getHumanChoice(), getComputerChoice());

    playRound (getHumanChoice(), getComputerChoice());

    console.log (`Final Score: You - ${humanScore}, PC - ${computerScore}`);

    if (humanScore>computerScore) {
        console.log (`You Win the Game`);
    } else if (humanScore<computerScore) {
        console.log (`Computer Won the Game`)
    } else {
        console.log (`No Ones Win the Game, It's a Tie!`)
    }

}

playGame();