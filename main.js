const RPS_ELEM = document.getElementById('head')
const CPU_CHOICE = document.getElementById('CPU_CHOICE')
const PLAYER_CHOICE = document.getElementById('PLAYER_CHOICE')

let choices = ["rock","paper","scissors"]

function compPlay(){
    let preChoice = Math.floor(Math.random() * choices.length) 
        let cpuChoice = choices[preChoice]
        return cpuChoice
}
let playerScore = 0
let compScore = 0

function play(playerChoice){
    let compChoice = compPlay()
    

 if(playerChoice == compChoice){
    drawDraw(playerChoice, compChoice)
} else if (playerChoice == "rock" && compChoice == "paper"){
    drawLose(playerChoice, compChoice)
} else if (playerChoice == "rock" && compChoice == "scissors"){
    drawWin(playerChoice, compChoice)
} else if (playerChoice == "paper" && compChoice == "rock"){
    drawWin(playerChoice, compChoice)
} else if (playerChoice == "paper" && compChoice == "scissors"){
    drawLose(playerChoice, compChoice)
} else if (playerChoice == "scissors" && compChoice == "rock"){
    drawLose(playerChoice, compChoice)
} else if (playerChoice == "scissors" && compChoice == "paper"){
    drawWin(playerChoice, compChoice) }
}
function drawWin(playerChoice, compChoice){
    RPS_ELEM.innerHTML="YOU WIN"
    CPU_CHOICE.innerHTML = compChoice
    PLAYER_CHOICE.innerHTML = playerChoice
}
function drawLose(playerChoice, compChoice){
    RPS_ELEM.innerHTML="YOU LOSE"
    CPU_CHOICE.innerHTML = compChoice
    PLAYER_CHOICE.innerHTML = playerChoice
}
function drawDraw(playerChoice, compChoice){
    RPS_ELEM.innerHTML="DRAW"
    CPU_CHOICE.innerHTML = compChoice
    PLAYER_CHOICE.innerHTML = playerChoice
}