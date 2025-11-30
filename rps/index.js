let  rock= document.querySelector("#rock");
let  paper= document.querySelector("#paper");
let  scissors= document.querySelector("#scissors");
let player=0;
let computer=0;
let draw=0;
let playerChoice;
let computerChoice;
let win= document.querySelector("#win");
let lose= document.querySelector("#lose");
let draws= document.querySelector("#draw");
let computerside= document.querySelector(".computer");
let playerside= document.querySelector(".player");

rock.addEventListener("click",()=>{
    
     playerChoice="rock";
     playerside.classList.remove("paperanimation");
     playerside.classList.remove("scissorsanimation");
     playerside.classList.remove("rockanimation");
      void playerside.offsetWidth;
     playerside.classList.add("rockanimation");

     game();
});
paper.addEventListener("click",()=>{
     playerChoice="paper";
     playerside.classList.remove("scissorsanimation");
     playerside.classList.remove("rockanimation");
      playerside.classList.remove("paperanimation");
      void playerside.offsetWidth;
     playerside.classList.add("paperanimation");
     game();
});
scissors.addEventListener("click",()=>{
     playerChoice="scissors";
         playerside.classList.remove("scissorsanimation");
     playerside.classList.remove("paperanimation");
     playerside.classList.remove("rockanimation");
      void playerside.offsetWidth;
     playerside.classList.add("scissorsanimation");
     game();
});







function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}
function game(){
         let welcome=document.querySelector("#welcome");  
        welcome.classList.add("gayab"); 

   const choices = ["rock", "paper", "scissors"];
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
     if(computerChoice === "rock"){ 
     computerside.classList.remove("computer-paper");
        computerside.classList.remove("computer-rock");
        computerside.classList.remove("computer-scissors");
        void playerside.offsetWidth;
    computerside.classList.add("computer-rock");}
    if(computerChoice === "paper") {
         computerside.classList.remove("computer-paper");
        computerside.classList.remove("computer-rock");
        computerside.classList.remove("computer-scissors");
        void playerside.offsetWidth;
        computerside.classList.add("computer-paper");}
    if(computerChoice === "scissors"){
        computerside.classList.remove("computer-paper");
        computerside.classList.remove("computer-rock");
        computerside.classList.remove("computer-scissors");
        void playerside.offsetWidth;
        computerside.classList.add("computer-scissors");
    }



let result= determineWinner(playerChoice, computerChoice);
console.log(computerChoice);
console.log(playerChoice);
if(result==="You win!"){
    player++;
    win.textContent =`WIN=${player}`;

}
else if(result==="Computer wins!"){
    computer++;
    lose.textContent=`LOSE=${computer}`;
}
else {
    draw++;
    draws.textContent=`DRAW=${draw}`;

}
 

}
