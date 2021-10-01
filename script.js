"use strict";

const btn = document.querySelector("input");
const body = document.querySelector("body");
const modetext = document.querySelector(".mode-changer-text");

btn.addEventListener("click", function () {
  if (btn.checked) {
    body.classList.add("dark-theme");
    modetext.textContent = "Light Mode";
  } else {
    body.classList.remove("dark-theme");
    modetext.textContent = "Dark Mode";
  }
});
