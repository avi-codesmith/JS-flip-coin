"use strict";

const btn = document.querySelector("button");
const coin = document.querySelector(".coin");
const wrapper = document.querySelector(".wrapper");
const hCounts = document.querySelector(".h-counts");
const tCounts = document.querySelector(".t-counts");
const again = document.querySelector("svg");
const sound = new Audio("coin.mp3");

const change = () => {
  btn.classList.add("active");
  setTimeout(() => {
    btn.classList.remove("active");
  }, 100);
  sound.play();
  const random = Math.floor(Math.random() * 2);
  coin.classList.remove("bounce");
  void coin.offsetWidth;
  coin.classList.add("bounce");
  setTimeout(() => {
    if (random === 0) {
      coin.textContent = "Heads";
      if (coin.textContent === "Heads") {
        hCounts.textContent++;
      }
    } else {
      coin.textContent = "Tails";
      if ((coin.textContent = "Tails")) {
        tCounts.textContent++;
      }
    }
  }, 300);
};

const reset = () => {
  coin.textContent = "Heads";
  hCounts.textContent = 0;
  tCounts.textContent = 0;
};

const addClass = () => {
  coin.classList.add("bounce");
};

const animate = () => {
  wrapper.style.transform = "translateY(0)";
};

btn.addEventListener("click", change);
again.addEventListener("click", reset);
window.addEventListener("load", addClass);
window.addEventListener("load", animate);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    change();
  }
});
