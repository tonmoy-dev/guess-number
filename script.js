// select elements
const againBtnEl = document.querySelector(".again");
const secretNumberEl = document.querySelector(".number");
const guessNumberEl = document.querySelector(".guess");
const checkBtnEl = document.querySelector(".check");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");

let score = 10;
const secretNumber = Math.trunc(Math.random() * 20 + 1);
secretNumberEl.textContent = secretNumber;
// add event listener event to the check button element
checkBtnEl.addEventListener("click", function () {
  // take input guess number and convert it string to number
  const guess = Number(guessNumberEl.value);

  guessNumberEl.value = "";
  if (!guess) {
    messageEl.textContent = "Enter a number!";
  } else if (guess === secretNumber) {
    messageEl.textContent = "Yay! Correct number.";
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      scoreEl.textContent = score;
      messageEl.textContent = "Too, high number!";
    } else {
      score--;
      scoreEl.textContent = score;
      messageEl.textContent = "Game Over!";
    }
  } else if (guess < secretNumber) {
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
