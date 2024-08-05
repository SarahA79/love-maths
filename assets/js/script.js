// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
                console.log("submit was clicked");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
                console.log("you clicked a button that wasnt submit");
            }
        });

    }
});
/**
 * The main game "loop" is called when the script is first loaded 
 * and after the users answer has been submitted.
 */
function runGame() {
//creates two random numbers between 1 and 25.
let num1 = Math.flooor(Math.random() * 25)+1;
let num2 = Math.flooor(Math.random() * 25)+1;
}


function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}