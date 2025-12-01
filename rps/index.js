// Element references
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let win = document.querySelector("#win");
let lose = document.querySelector("#lose");
let draws = document.querySelector("#draw");
let computerside = document.querySelector(".computer");
let playerside = document.querySelector(".player");
let startbox = document.querySelector(".round");
let container = document.querySelector(".container");
let body = document.querySelector("body");
 let winSound = new Audio("start.mp3");
let clickSound = new Audio("click.mp3");
// Score tracking
let player = 0;
let computer = 0;
let draw = 0;
let playerChoice;
let computerChoice;

// Helper: reset animations
function resetAnimation(element, animationClass) {
  element.classList.remove("rockanimation", "paperanimation", "scissorsanimation");
  void element.offsetWidth; // force reflow
  element.classList.add(animationClass);
}

// Helper: set computer animation
function setComputerAnimation(choice) {
  computerside.classList.remove("computer-rock", "computer-paper", "computer-scissors");
  void computerside.offsetWidth;
  computerside.classList.add(`computer-${choice}`);
}

// Winner logic
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "It's a tie!";
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  }
  return "Computer wins!";
}

// Main game function
function game() {
  document.querySelector("#welcome").classList.add("gayab");

  const choices = ["rock", "paper", "scissors"];
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  setComputerAnimation(computerChoice);

  let result = determineWinner(playerChoice, computerChoice);

  if (result === "You win!") {
    player++;
    win.textContent = `WIN=${player}`;
  } else if (result === "Computer wins!") {
    computer++;
    lose.textContent = `LOSE=${computer}`;
  } else {
    draw++;
    draws.textContent = `DRAW=${draw}`;
  }

  if (player === 3 || computer === 3) {
    endgame();
  }
}

// Endgame display
function endgame() {
  let resultbox = document.createElement("div");
  resultbox.classList.add("resultbox");

  if (player === 3) {
    resultbox.innerHTML = `<h1>You Won The Game!</h1><button>OK</button>`;
  } else {
    resultbox.innerHTML = `<h1>You Lost The Game!</h1><button>OK</button>`;
  }

  body.appendChild(resultbox);
  container.classList.add("blur");

  let button = resultbox.querySelector("button");
  button.addEventListener("click", resetGame);
}

// Reset game without reload
function resetGame() {
  player = 0;
  computer = 0;
  draw = 0;
  win.textContent = "WIN=0";
  lose.textContent = "LOSE=0";
  draws.textContent = "DRAW=0";

  document.querySelector(".resultbox").remove();
  container.classList.remove("blur");
}

// Event listeners
rock.addEventListener("click", () => {
  playerChoice = "rock";
  clickSound.play();
  resetAnimation(playerside, "rockanimation");
  game();
});

paper.addEventListener("click", () => {
  playerChoice = "paper";
  clickSound.play();
  resetAnimation(playerside, "paperanimation");
  game();
});

scissors.addEventListener("click", () => {
  playerChoice = "scissors";
  clickSound.play();
  resetAnimation(playerside, "scissorsanimation");
  game();
});

// Hide startbox after animation
startbox.addEventListener("animationend", () => {
  startbox.style.display = "none";
});
startbox.addEventListener("animationstart", () => {
   
 winSound.play();
});
