let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let res = document.querySelector("#res");
let my = document.querySelector(".score1");
let com = document.querySelector(".score2");
let win = document.querySelector("#winner");
let username = localStorage.getItem("username");
let limit = Number(localStorage.getItem("limit"));
let user = document.getElementById("user");
user.innerHTML = username;

let count1 = 0;
let count2 = 0;
let count = 0;

let r = 0;

const images = {
  rock: "images/rock.png",
  paper: "images/paper.jpeg",
  scissors: "images/scissor.png",
};

btn1.addEventListener("click", () => {
  r = getComputerChoice();
  img1.src = images["rock"];
  img2.src = images[r];
  res.innerHTML = getResult("rock", r);
  print();
});

btn2.addEventListener("click", () => {
  r = getComputerChoice();
  img1.src = images["paper"];
  img2.src = images[r];
  res.innerHTML = getResult("paper", r);
  print();
});

btn3.addEventListener("click", () => {
  r = getComputerChoice();
  img1.src = images["scissors"];
  img2.src = images[r];
  res.innerHTML = getResult("scissors", r);
  print();
});

function result() {
  if (count1 > count2) win.innerHTML = "💕💕 You Win! 💕💕";
  else if (count2 > count1) win.innerHTML = "💓💓 Computer Wins! 💓💓";
  else win.innerHTML = "💗💗 It's a Tie! 💗💗";
  win.style.color = "Green";
  win.style.fontSize = "50px";
  res.innerHTML = "";
  count = 0;
  btn1.disabled = true;
  btn2.disabled = true;
  btn3.disabled = true;
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(playerChoice, computerChoice) {
  count++;
  win.innerHTML = "Remaining Rounds " + (limit - count);
  win.style.color = "Red";

  if (playerChoice === computerChoice) {
    img1.style.border = "8px solid blue";
    img2.style.border = "8px solid blue";
    return "It's a tie!";
  }
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    my.innerHTML = ++count1;
    img1.style.border = "8px solid green";
    img2.style.border = "8px solid red";
    return "You win!";
  } else {
    com.innerHTML = ++count2;
    img2.style.border = "8px solid green";
    img1.style.border = "8px solid red";
    return "Computer wins!";
  }
}
function print() {
  if (count == limit) {
    result();
  }
}

let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  count1 = 0;
  count2 = 0;
  my.innerHTML = 0;
  com.innerHTML = 0;
  img1.style.border = "none";
  img2.style.border = "none";
  res.innerHTML = "";
  document.querySelector("#winner").innerHTML = "";
  img1.src = "images/three.png";
  img2.src = "images/three.png";
  btn1.disabled = false;
  btn2.disabled = false;
  btn3.disabled = false;
  count = 0;
  win.style.fontSize = "30px";
});
