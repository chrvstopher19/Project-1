const container = document.querySelector("container")
const rolleDice = document.getElementById("rDice")
const resetGame = document.getElementById("reset")
const results =  document.getElementById("Results")
const player1Img = document.getElementById("player1-img")
const compImg = document.getElementById("comp-img")

let playerWins = 0;
let compWins = 0;
let rounds = 0;

rolleDice.addEventListener("click", () => {
    if(rounds < 3){
        playeRoll = diceRoll();
        compRoll = diceRoll();

        player1Img.src = `./images/dice${playeRoll}.png`
        compImg.src = `./images/dice${compRoll}.png`

        if (playeRoll > compRoll) {
            results.textContent = "YOU WIN THIS ROUND!!";
            playerWins++;
        } else if (playeRoll < compRoll){
            results.textContent = "YOU LOSE THIS ROUND!!"
            compWins++;
        } else if (playeRoll === compRoll){
            results.textContent = "IT'S DRAW THIS ROUND"
        }

        rounds++;
    }

    if(rounds === 3) {
        console.log("im in here")
        if(playerWins > compWins) {
            results.textContent = "YOU WIN THE GAME!!";
        }else if (playerWins < compWins) {
            results.textContent = "COMPUTER WINS!!"
        } else {
            results.textContent = "IT'S A DRAW.."
        }
    }
});

const diceRoll = function () {
    const result = Math.ceil(Math.random() * 6);
    return result
}

resetGame.addEventListener("click", () => {
    playerWins = 0;
    compWins = 0;
    rounds = 0;

    player1Img.src = './images/animatedDice.gif'
    compImg.src = './images/animatedDice.gif'

    results.textContent = "Results";
})