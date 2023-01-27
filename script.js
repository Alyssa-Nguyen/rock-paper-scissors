
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;


// call the playRound() function 5 times, play 5 rounds, then show total scores for P & C. 
function game() {    
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    console.log("Player Total Score: "+playerScore);
    console.log("Computer Total Score: "+computerScore);
    if (playerScore == computerScore) {
        console.log("It's a Tie");
    } else if (playerScore > computerScore) {
        console.log("Player win the game");
    } else {
        console.log("Computer win the game");
    }
}

// play one round, get P & C choices and call the checkWinner() function to see who win & keep score.
function playRound() {     
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();    
    const winner = checkWinner(playerSelection, computerSelection);
     
}

// prompt for player's pick, player have to type out their choice.
function playerChoice() {       
    let input = prompt("rock, paper or scissors");
    while (input == null) {
        input = prompt("rock, paper or scissors");
    }
    input = input.toLowerCase();    
    let check = validateInput(input);
    while (check === false) {
        input = prompt("rock, paper or scissors");
        while (input == null) {
            input = prompt("rock, paper or scissors");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    } 
    console.log("Player choice: "+input);   
    return input;
}

function computerChoice() {            // get computer's pick, which is a randomn one
    const choiceComp = choices[Math.floor(Math.random() * choices.length)]; 
    console.log("Comp choice: " +choiceComp);
    return choiceComp;   
}

function validateInput (choice) {
    return choices.includes(choice);
}


// check winner for each round, return winner and log the score for P & C. 
function checkWinner(choiceP, choiceC) {   
    if (choiceP === choiceC) {
    console.log("Score: Tie");
    return "Tie";    
    } else if (
        (choiceP === "rock" && choiceC === "scissors") ||
        (choiceP === "paper" && choiceC === "rock") ||
        (choiceP === "scissors" && choiceC === "paper")
    ) {        
        playerScore++;
        console.log("Player Score: " +playerScore);
        return "Player";

    } else {        
        computerScore++;
        console.log("Comp Score: " +computerScore);
        return "Computer";
    }
    
}


//playRound();
game();



