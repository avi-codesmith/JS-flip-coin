"use strict";

const btn = document.querySelector("button");
const coin = document.querySelector(".coin");
const sound = new Audio("coin.mp3");

const change = () => {
  sound.play();
  const random = Math.floor(Math.random() * 2);
  coin.classList.remove("bounce");
  void coin.offsetWidth;
  coin.classList.add("bounce");
  setTimeout(() => {
    if (random === 0) {
      coin.textContent = "Heads";
    } else {
      coin.textContent = "Tails";
    }
  }, 300);
};

btn.addEventListener("click", change);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    change();
  }
});
