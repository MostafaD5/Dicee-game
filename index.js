const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomDiceeimg = "images/dice" + randomNumber1 + ".png";
const img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomDiceeimg);
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const randomDiceeimg2 = "images/dice" + randomNumber2 + ".png";
const img2 = document.getElementsByClassName("img2")[0];
img2.setAttribute("src", randomDiceeimg2);
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
