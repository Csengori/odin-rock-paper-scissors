const getRockButton = document.querySelector('.rock-button')
const getScissorsButton = document.querySelector('.scissors-button')
const getPaperButton = document.querySelector('.paper-button')
const getPlayGagainButton = document.querySelector('.play-again')
const getPlayerScoreTag = document.querySelector('.player-score')
const getComputerScoreTag = document.querySelector('.computer-score')

getRockButton.addEventListener('click', () => {
    return playRound("rock", computerChoice())
})
getScissorsButton.addEventListener('click', () => {
    return playRound("scissors", computerChoice())
})
getPaperButton.addEventListener('click', () => {
    return playRound("paper", computerChoice())
})

getPlayGagainButton.addEventListener('click', () => {
    // alert(playRound(playerChoice, computerChoice()))
    // alert(playRound((playerChoice, computerChoice())))
    // let player = playerChoice
    // let computer = computerChoice()
    // console.log(player,computer)
    // playRound(player,computer)
})

function computerChoice () {
    const options = ['rock', 'paper', 'scissors']
    return options[Math.floor(Math.random() * 3)]
}

function playRound (playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "tie"
    }
    if (computerChoice === "rock" && playerChoice === "paper" ||
        computerChoice === "paper" && playerChoice === "scissors" ||
        computerChoice === "scissors" && playerChoice === "paper") {
        return updateScore("computer")
    } else {
        return updateScore("player")
    }
}

let playerScore = 0
let computerScore = 0
let tieScore = 0

function updateScore (winner) {
    if (winner === "computer") {
        computerScore += 1
        getComputerScoreTag.textContent = computerScore
    } else {
        playerScore += 1
        getPlayerScoreTag.textContent = playerScore
    }
}
