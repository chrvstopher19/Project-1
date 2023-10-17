const container = document.querySelector("container")
const rolleDice = document.getElementById("rDice")
const results =  document.getElementById("Results")
const player1Img = document.getElementById("player1-img")
const compImg = document.getElementById("comp-img")

let playeRoll, compRoll, rounds
//
rolleDice.addEventListener("click", () => {
    playeRoll = diceRoll();
    compRoll = diceRoll();

    player1Img.src = `./images/dice${playeRoll}`
    compImg.src = `./images/dice${compRoll}`

    if(playeRoll > compRoll) {
        results.textContent = "YOU WIN!!"
    }else if(playeRoll < compRoll){
        results.textContent = "YOU LOSE!!"
    }else if(playeRoll === compRoll){
        results.textContent = "IT'S DRAW.."
    }
});

const diceRoll = function () {
    const result = Math.ceil(Math.random() * 6);
    return result
}
