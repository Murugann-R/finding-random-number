var secretnumber = Math.trunc(Math.random() * 20) + 1;

var score = 20;
var highscore = 0;
var lost = "You lost the game";
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".num").value);
  // when user has not enter input
  if (!guess) {
    document.querySelector(".gues").textContent = "No Number";
    //when user correct
  } else if (guess === secretnumber) {
    document.querySelector(".gues").textContent = "Correct Number";
    document.querySelector("body").style.backgroundColor = "green";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".high").textContent = highscore;
    }
    document.querySelector(".ques").textContent = secretnumber;
  }
  //when user gives wrong number
  else if (guess !== secretnumber) {
    document.querySelector(".gues").textContent =
      guess > secretnumber ? "Too high" : "Too low";
    score--;
    document.querySelector(".point").textContent = score;
    if (score <= 0) {
      document.querySelector(".gues").textContent = lost;
      document.querySelector(".point").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".gues").textContent = "Start Guessing...";
  document.querySelector(".point").textContent = score;
  document.querySelector(".ques").textContent = "?";
  document.querySelector(".num").value = "";
  document.querySelector("body").style.backgroundColor = "black";
});
