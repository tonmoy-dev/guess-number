// select elements
const againBtnEl = document.querySelector(".again");
const secretNumberEl = document.querySelector(".number");
const guessNumberEl = document.querySelector(".guess");
const checkBtnEl = document.querySelector(".check");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");
const bodyEl = document.querySelector("body");

let score = 10;
let highScore = 0;
let secretNumber;
// secretNumberEl.textContent = secretNumber;

const generateRandomNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
};
const displayMessage = function (message) {
  messageEl.textContent = message;
};

generateRandomNumber();
// add event listener event to the check button element
checkBtnEl.addEventListener("click", function () {
  // take input guess number and convert it string to number
  const guess = Number(guessNumberEl.value);

  guessNumberEl.value = "";

  // when there is no input
  if (!guess) {
    displayMessage("Enter a number!");
  } // when a player wins
  else if (guess === secretNumber) {
    displayMessage("Yay! Correct number.");
    bodyEl.style.backgroundColor = "#60b347";
    secretNumberEl.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  } // when the guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      scoreEl.textContent = score;
      displayMessage(
        guess > secretNumber ? "Too, high number!" : "Too, low number!"
      );
    } else {
      score--;
      scoreEl.textContent = score;
      displayMessage("Game Over!");
    }
  }
  /* // when guess is high
  else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      scoreEl.textContent = score;
      messageEl.textContent = "Too, high number!";
    } else {
      score--;
      scoreEl.textContent = score;
      messageEl.textContent = "Game Over!";
    }
  } // when guess is low
  else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      scoreEl.textContent = score;
      messageEl.textContent = "Too, low number!";
    } else {
      score--;
      scoreEl.textContent = score;
      messageEl.textContent = "Game Over!";
    }
  }*/
});

// reset Game
againBtnEl.addEventListener("click", function () {
  score = 10;
  generateRandomNumber();

  // messageEl.textContent = "Start guessing...";
  displayMessage("Start guessing...");
  scoreEl.textContent = score;
  secretNumberEl.textContent = "?";
  guessNumberEl.value = "";
  bodyEl.style.backgroundColor = "#222";
});

// Refactoring -> Re-structured => to improve the code and eleminate duplicate codes
