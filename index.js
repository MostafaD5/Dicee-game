const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Set dice images dynamically
document
  .querySelector(".img1")
  .setAttribute("src", `images/dice${randomNumber1}.png`);
document
  .querySelector(".img2")
  .setAttribute("src", `images/dice${randomNumber2}.png`);

// Determine the winner and update the heading
const title = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  title.textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  title.textContent = "Player 2 Wins! 🚩";
} else {
  title.textContent = "Draw!";
}

// Play Again button functionality
document.querySelector(".play-again").addEventListener("click", function () {
  // Reload the page when clicked
  window.location.reload();
});
