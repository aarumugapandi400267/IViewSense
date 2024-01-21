let secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('user-guess').value);
    const resultMessage = document.getElementById('result-message');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultMessage.innerText = "Please enter a valid number between 1 and 100.";
    } else if (userGuess === secretNumber) {
        resultMessage.innerText = "Congratulations! You guessed the correct number!";
    } else if (userGuess < secretNumber) {
        resultMessage.innerText = "Too low! Try again.";
    } else {
        resultMessage.innerText = "Too high! Try again.";
    }
}