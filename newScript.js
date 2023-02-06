const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;


let playerChoice = '';

const buttons = document.querySelectorAll('button');
let resetButton;

let winAllText = document.querySelector('.winAll');

let playerScoreText = document.querySelector('#pScore');
let computerScoreText = document.querySelector('#cScore');
const divWrap = document.querySelector('.wrapper');

function setGameOver() {    
    for (button of buttons) {
        button.disabled = true;
    }
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start a new game';
    divWrap.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    winAllText.textContent = '';
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = '';
    computerScoreText.textContent = '';
    resetButton.parentNode.removeChild(resetButton);
    for (button of buttons) {
        button.disabled = false;
    }

}

// when each of the RPS button is clicked, it will call function to play round
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log("Player choice: "+button.id);
        playRound(button.id);        
    });   
    
});

// function to play round and keep scores, announce winner when P or C win 5 rounds
function playRound(playerSelection) {     
    const computerSelection = computerChoice();    
    const winner = checkWinner(playerSelection, computerSelection);    
    if (playerScore >= 5) {
        winAllText.textContent = "Player win all 5 rounds";
        setGameOver();        
    } else if (computerScore >= 5) {
        winAllText.textContent = "Computer win all 5 rounds";
        setGameOver();        
    }

}

// get computer's pick, which is a randomn choice
function computerChoice() {            
    const choiceComp = choices[Math.floor(Math.random() * choices.length)]; 
    console.log("Comp choice: " +choiceComp);
    return choiceComp;   
}

// check winner for each round, return winner and log the scores for P & C. 
function checkWinner(choiceP, choiceC) {   
    if (choiceP === choiceC) {
    console.log("Score: Tie");
    return "Winner: Tie";    
    } else if (
        (choiceP === "rock" && choiceC === "scissors") ||
        (choiceP === "paper" && choiceC === "rock") ||
        (choiceP === "scissors" && choiceC === "paper")
    ) {        
        playerScore++;
        console.log("Player Score: " +playerScore);
        playerScoreText.textContent = ` ${playerScore}`;
        return "Winner: Player";

    } else {        
        computerScore++;
        console.log("Comp Score: " +computerScore);
        computerScoreText.textContent = ` ${computerScore}`;
        return "Winner: Computer";
    }    

}




