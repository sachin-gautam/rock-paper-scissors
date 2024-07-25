console.log("Rock Paper Scissors");

let humanScore = 0;
let computerScore = 0;

function getComputerChoices(){
    rand = Math.floor(Math.random()*3);
    switch(rand){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function getHumanChoices(){
    let choice = prompt("Enter you choice");
    return choice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoices().toLowerCase();
    computerChoice = getComputerChoices();
    if (humanChoice == "rock"){
        if(computerChoice == "rock"){
            alert("Rock and Rock is a Draw");
        }
        else if(computerChoice == "paper"){
            alert("You Lose! Paper wins Rock");
            computerScore++;
        }
        else if(computerChoice == "scissors"){
            alert("You Win! Rock wins Scissors");
            humanScore++;
        }
    }
    else if (humanChoice == "paper"){
        if(computerChoice == "rock"){
            alert("You Win! Paper wins Rock");
            humanScore++;
        }
        else if(computerChoice == "paper"){
            alert("Paper and Paper is Draw");
        }
        else if(computerChoice == "scissors"){
            alert("You Lose! Scissors wins Paper");
            computerScore++;
        }
    }
    else if (humanChoice == "scissors"){
        if(computerChoice == "rock"){
            alert("You Lose! Rock wins Scissors");
            computerScore++;
        }
        else if(computerChoice == "paper"){
            alert("You Win! Paper wins Scissors");
            humanScore++;
        }
        else if(computerChoice == "scissors"){
            alert("Scissors and Scissors is a draw");
        }
    }
}

function playGame(){
    for(i=0;i<=4;i++){
        playRound();
    }
    if(humanScore>computerScore){
        alert(`You Win! Your Score: ${humanScore}, Computer Score: ${computerScore}`);
    }
    else{
        alert(`You Lose! Your Score: ${humanScore}, Computer Score: ${computerScore}`)
    }
    
}
playGame();