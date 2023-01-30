const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;


let playerChoice = '';

const buttons = document.querySelectorAll('button');




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
        document.querySelector('.winAll').textContent = "Player win all 5 rounds";        
    } else if (computerScore >= 5) {
        document.querySelector('.winAll').textContent = "Computer win all 5 rounds";        
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
        document.querySelector('#pScore').textContent = ` ${playerScore}`;
        return "Winner: Player";

    } else {        
        computerScore++;
        console.log("Comp Score: " +computerScore);
        document.querySelector('#cScore').textContent = ` ${computerScore}`;
        return "Winner: Computer";
    }  
     

}

