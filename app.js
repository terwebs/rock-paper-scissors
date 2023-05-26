const hand = ['rock', 'paper', 'scissors'];

let computerChoice = ""
let user = ""

const playBtn = document.querySelector("#game")
const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const sciBtn = document.querySelector("#scissors")


const computerChoiceSpan = document.querySelector("#computerChoice")
const userChoiceSpan = document.querySelector("#userChoice")

const score1 = document.querySelector("#score1")
const score2 = document.querySelector("#score2")

const winnerSpan = document.querySelector("#winner")
const loserSpan = document.querySelector("#loser")

let userScore = 0;
let computerScore = 0;



const getComputerChoice = function(){
    let option = Math.floor(Math.random() * 3) + 1;
    computerChoice = hand[option-1]
    computerChoiceSpan.innerText = computerChoice
    return computerChoice
}

const clearStyles = () => {
    computerChoiceSpan.classList.remove('winner')
    computerChoiceSpan.classList.remove('loser')
    userChoiceSpan.classList.remove("winner") 
    userChoiceSpan.classList.remove("loser")
    winnerSpan.innerText = ""
}

const userWin = () =>{
    userScore ++;
    score1.innerText = userScore;

    computerChoiceSpan.classList.remove('winner')
    userChoiceSpan.classList.remove("loser")

    computerChoiceSpan.classList.add('loser')
    userChoiceSpan.classList.add("winner")

    winnerSpan.innerText = "You win!"
}

const pcWin = () => {
    computerScore ++;
    score2.innerText = computerScore;

    computerChoiceSpan.classList.remove('loser')
    userChoiceSpan.classList.remove("winner")

    computerChoiceSpan.classList.add('winner')
    userChoiceSpan.classList.add("loser")

    winnerSpan.innerText = "You lose!"

}

playBtn.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    score1.innerText = userScore;
    score2.innerText = computerScore;

    clearStyles()


  });

rockBtn.addEventListener('click', () => {
    user = rockBtn.innerText;
    userChoiceSpan.innerText = user;
    playRound()
    return user
});

paperBtn.addEventListener('click', () => {
    user = paperBtn.innerText;
    userChoiceSpan.innerText = user;
    playRound()
    return user
    
});
sciBtn.addEventListener('click', () => {
    user = sciBtn.innerText;
    userChoiceSpan.innerText = user;
    playRound()
    return user
   
});

const playRound = function(){
    
    computer = getComputerChoice();
    console.log(`you: ${user} vs computer: ${computer}`)

    if (user === "rock" || user === "paper" || user === "scissors"){
        if (user === "rock"){
            if (computer === "rock"){
                clearStyles()
                winnerSpan.innerText = "It's a Tie"
                

            } else if (computer === "paper") {
                pcWin()

            } else {
                userWin()
            }
        }
    
        if (user === "paper"){
            if (computer === "rock"){
                userWin()
    
            } else if (computer === "paper") {
                
                clearStyles()
                winnerSpan.innerText = "It's a Tie"
            } else {
                pcWin()

            }
        }
    
        if (user === "scissors"){
            if (computer === "rock"){
                pcWin()


            } else if (computer === "paper") {
                userWin()

            } else {
                clearStyles()
                winnerSpan.innerText = "It's a Tie"
                
            }
        }
    } else {
        console.log(`sorry, ${user} is not a valid option`)
    }
}
