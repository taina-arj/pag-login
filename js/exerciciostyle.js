const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
let userScore = 0;
let compScore = 0;

function rock() {
  const randomNumber = Math.random();
  let computerMove = "";
  let result = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }

  if (computerMove === "Rock") {
    result = "TIE";
  } else if (computerMove === "Paper") {
    result = "YOU LOSE";
  } else if (computerMove === "Scissors") {
    result = "YOU WIN";
  }

  if (result === "YOU WIN") {
    userScore++;
    userScore_span.textContent = userScore;
  } else if (result === "YOU LOSE") {
    compScore++;
    compScore_span.textContent = compScore;
  }
  document.getElementById(
    "results"
  ).innerHTML = `You picked rock. Computer picked ${computerMove}. <br>${result}`;
}

function paper() {
  const randomNumber = Math.random();
  let computerMove = "";
  let result = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }

  if (computerMove === "Rock") {
    result = "YOU WIN";
  } else if (computerMove === "Paper") {
    result = "TIE";
  } else if (computerMove === "Scissors") {
    result = "YOU LOSE";
  }

  if (result === "YOU WIN") {
    userScore++;
    userScore_span.textContent = userScore;
  } else if (result === "YOU LOSE") {
    compScore++;
    compScore_span.textContent = compScore;
  }
  document.getElementById(
    "results"
  ).innerHTML = `You picked paper. Computer picked ${computerMove}. <br>${result}`;
}

function scissors() {
  const randomNumber = Math.random();
  let computerMove = "";
  let result = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }

  if (computerMove === "Rock") {
    result = "YOU LOSE";
  } else if (computerMove === "Paper") {
    result = "YOU WIN";
  } else if (computerMove === "Scissors") {
    result = "TIE";
  }

  if (result === "YOU WIN") {
    userScore++;
    userScore_span.textContent = userScore;
  } else if (result === "YOU LOSE") {
    compScore++;
    compScore_span.textContent = compScore;
  }
  document.getElementById(
    "results"
  ).innerHTML = `You picked scissors. Computer picked ${computerMove}. <br>${result}`;
}

function reset() {
  userScore = 0;
  compScore = 0;
  userScore_span.textContent = userScore;
  compScore_span.textContent = compScore;
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
