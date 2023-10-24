"use strict";

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

var scoreElem = document.querySelector(".score");
var numberElem = document.querySelector(".number");
var guessElem = document.querySelector(".guess");
var againElem = document.querySelector(".again");
var highscoreElem = document.querySelector(".highscore");
var checkElem = document.querySelector(".check");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let state = 0;
guessElem.value = "";

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkElem.click();
  }
});

checkElem.addEventListener("click", function () {
  const guess = Number(guessElem.value);

  if (!guess && state === 0) {
    displayMessage("No number!");
  } else if (guess === secretNumber && state === 0) {
    state = 1;
    displayMessage("Correct number!");
    document.querySelector("body").style.backgroundColor = "green";
    numberElem.style.width = "30rem";
    numberElem.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      highscoreElem.textContent = highscore;
    }
  } else if (state === 0) {
    displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
    if (score > 1) {
      score--;
      scoreElem.textContent = score;
    } else if (score === 1) {
      score--;
      scoreElem.textContent = score;
      displayMessage("Game Over");
    } else {
      displayMessage("Game Over");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  state = 0;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreElem.textContent = score;
  numberElem.style.width = "15rem";
  numberElem.textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Start guessing...");
  guessElem.value = "";
});
