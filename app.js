const hand = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;

const getComputerChoice = function(){
    let option = Math.floor(Math.random() * 3) + 1;
    let computerChoice = hand[option-1]
    return computerChoice
}


const game = function(rounds = 1){
    userScore = 0;
    computerScore = 0;
    for (let i = 1; i <= rounds; i++ ){
        playRound()
        console.log(`you: ${userScore} | computer: ${computerScore}`)
    }
    
    if (userScore > computerScore){
        console.log("you win the game!!")
    } else if (userScore < computerScore){
        console.log("you lose the game!! :( ")
    } else {
        console.log("is a trap!, I mean a tie!!")
    }
}

const playRound = function(user, computer){
    user = prompt("type rock, paper or scissors").toLowerCase();
    computer = getComputerChoice();
    console.log(`you: ${user} vs computer: ${computer}`)
    if (user === "rock" || user === "paper" || user === "scisort"){
        if (user === "rock"){
            if (computer === "rock"){
                console.log("tie")
            } else if (computer === "paper") {
                console.log(`you lose!, ${computer} beats ${user}`)
                computerScore ++;
            } else {
                console.log(`you win!, ${user} beats ${computer}`)
                userScore ++;
            }
        }
    
        if (user === "paper"){
            if (computer === "rock"){
                console.log(`you win!, ${user} beats ${computer}`)
                userScore ++;
    
            } else if (computer === "paper") {
                console.log(`tie both used ${user}`)
            } else {
                console.log(`you lose!, ${computer} beats ${user}`)
                computerScore ++;
            }
        }
    
        if (user === "scissors"){
            if (computer === "rock"){
                console.log(`you lose!, ${computer} beats ${user}`)
                computerScore ++;
            } else if (computer === "paper") {
                console.log(`you win!, ${user} beats ${computer}`)
                userScore ++;
            } else {
                console.log(`tie both used ${user}`)
            }
        }
    } else {
        console.log(`sorry, ${user} is not a valid option`)
    }
}
