let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validGuess(guess);
  });
}

function validGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("You cannot enter a number lower than 1");
  } else if (guess > 100) {
    alert("You cannot enter a number higher than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over, Random number was ${guess}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`the number is too Low`);
  } else if (guess > randomNumber) {
    displayMessage(`the number is too high`);
  }
}
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h1>${message}</h1>`;
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start a new game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  startGame();
}
function startGame() {
  const newButton = document.querySelector("#newGame");
  newButton.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    guessSlot.innerHTML += ``;
    remaining.innerHTML = `${11 - numGuess}`;
    playGame = true;
  });
}
