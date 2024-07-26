console.log("Rock Paper Scissors");

let humanScore = 0;
let computerScore = 0;

const btnR = document.querySelector("#btnR");
const btnP = document.querySelector("#btnP");
const btnS = document.querySelector("#btnS");
const score = document.querySelector("#score");

score.textContent = `Human score: ${humanScore} | Computer score: ${computerScore}`;

btnR.addEventListener("click", () =>{
    playRound("rock",getComputerChoices());
});
btnP.addEventListener("click", ()=> {
    playRound("paper",getComputerChoices());
});
btnS.addEventListener("click", ()=> {
    playRound("scissors",getComputerChoices());
});


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


function updateScore(humanScore,computerScore){
    score.textContent = `Human score: ${humanScore} | Computer score: ${computerScore}`;
}

function checkWinner(){
    if(humanScore>=5 || computerScore>=5){
        if(humanScore>computerScore){
            alert(`You Win! Your Score: ${humanScore}, Computer Score: ${computerScore}`);
            location.reload();
        }
        else{
            alert(`You Lose! Your Score: ${humanScore}, Computer Score: ${computerScore}`);
            location.reload();
        }
    }
    
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock"){
        if(computerChoice == "rock"){
            updateScore(humanScore,computerScore);
            checkWinner();
        }
        else if(computerChoice == "paper"){
            computerScore++;
            updateScore(humanScore,computerScore);
            checkWinner();
        }
        else if(computerChoice == "scissors"){
            humanScore++;
            updateScore(humanScore,computerScore);
            checkWinner();
        }
    }
    else if (humanChoice == "paper"){
        if(computerChoice == "rock"){
            humanScore++;
            updateScore(humanScore,computerScore);
            checkWinner();
        }
        else if(computerChoice == "paper"){
            updateScore(humanScore,computerScore);
            checkWinner();
        }
        else if(computerChoice == "scissors"){
            computerScore++;
            updateScore(humanScore,computerScore);
            checkWinner();
        }
    }
    else if (humanChoice == "scissors"){
        if(computerChoice == "rock"){
            computerScore++;
            updateScore(humanScore,computerScore);
            checkWinner();
        }
        else if(computerChoice == "paper"){
            humanScore++;
            updateScore(humanScore,computerScore);
            checkWinner();
        }
        else if(computerChoice == "scissors"){
            updateScore(humanScore,computerScore);
            checkWinner();
        }
    }
}
