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
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// secretNumberEl.textContent = secretNumber;

// add event listener event to the check button element
checkBtnEl.addEventListener("click", function () {
  // take input guess number and convert it string to number
  const guess = Number(guessNumberEl.value);

  guessNumberEl.value = "";

  // when there is no input
  if (!guess) {
    messageEl.textContent = "Enter a number!";
  } // when a player wins
  else if (guess === secretNumber) {
    messageEl.textContent = "Yay! Correct number.";
    bodyEl.style.backgroundColor = "#60b347";
    secretNumberEl.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  } // when guess is high
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
  }
});

// reset Game
againBtnEl.addEventListener("click", function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  messageEl.textContent = "Start guessing...";
  scoreEl.textContent = score;
  secretNumberEl.textContent = "?";
  guessNumberEl.value = "";
  bodyEl.style.backgroundColor = "#222";
});
