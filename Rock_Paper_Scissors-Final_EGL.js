function getInput() {
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

var playerMove;
var computerMove;

function getPlayerMove() {
    var move = getInput();
    if (move === null) {
        move = getInput();
    }
    else {
        playerMove = move;
    }
    return playerMove;
}

function getComputerMove() {
    var move = randomPlay();
    if (move === null){
        move = randomPlay();
    }
    else {
        computerMove = move;
    }
    return computerMove;
}

function getWinner() {
    var winner;
    playerMove = getPlayerMove();
    computerMove = getComputerMove();

    if (playerMove === computerMove) {
        winner = "tie";
    }
    else if (playerMove === "rock") {
        if (computerMove === "paper") {
            winner = "computer";
        }
        else {
            winner = "player";
        }
    }
    else if (playerMove === "paper") {
        if (computerMove === "rock") {
            winner = "player";
        }
        else {
            winner = "computer";
        }
    }
    else {
        if (computerMove === "rock") {
            winner = "computer";
        }
        else {
            winner = "player";
        }
    }
    return winner;
}

function playTo (x) {
    console.log("Let's play Rock, Paper, Scissors" + "\n");

    setTimeout(function() {
        var playerWins = 0;
        var computerWins = 0;
        var currentGame;
        
        while (playerWins < x && computerWins < x) {
            currentGame = getWinner();
            if (currentGame === "player") {
                playerWins += 1;
                console.log("The player wins this round!");
            }
            else if (currentGame === "computer") {
                computerWins += 1;
                console.log("The computer wins this round!");
            }
            else {
                console.log("It was a tie!");
            }
            console.log("Player chose " + playerMove + " while computer chose " + computerMove);
        	console.log("The score is: Player " + playerWins + "  -  " + computerWins + " Computer." + "\n");
        }
        if (playerWins > computerWins) {
            console.log("The winner of the game to " + x + " is the player!");
        }
        else {
            console.log("The winner of the game to " + x + " is the computer!");
        }
    return [playerWins, computerWins];
    }, 5000);
}