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
    
}