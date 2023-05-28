
// var computerChoice = ['R', 'P', 'S'];
var playerChoice = prompt("Please enter 'R', 'P', 'S'")

var computerChoice = Math.floor(Math.random() * 3);

if (computerChoice == 0) {
    computerChoice = 'R';
} else if (computerChoice == 1) {
    computerChoice = 'P';
} else {
    computerChoice = 'S';
}

function playRPS(playerChoice, computerChoice) {
    if ((playerChoice == 'R' && computerChoice == 'S') || (playerChoice == 'S' && computerChoice == 'P') || (playerChoice == 'P' && computerChoice == 'R')){
        alert("Congrats! You won!");
    } else if (playerChoice == computerChoice){
        alert("Hey not bad, it's a tie");
    } else {
        alert("Sorry, you lose, try again. GET GOod SON")
    }
  }
  

playRPS();
 
//math for the opponent - computer's choice
//alert for the wins losses ties

//confirm


