"use strict";
// please do not delete the 'use strict' line above

document.getElementById("color-button").addEventListener("click", changeColor2);

let background = document.getElementsByTagName("body")[0];

function randomNumber() {
  return Math.floor(Math.random() * 256);
}

function changeColor() {
  console.log("Button clicked!"); // feel free to change/delete this line
  let r = randomNumber();
  let g = randomNumber();
  let b = randomNumber();

  // console.log(r);
  // console.log(g);
  // console.log(b);
  background.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function changeColor2() {
  let result = [];
  let digits = "abcdef0123456789";
  for (let i = 0; i <= 5; i++) {
    result.push(digits[Math.floor(Math.random() * digits.length)]);
    console.log(i);
  }
  console.log(`#${result.join("")}`);
  background.style.backgroundColor = `#${result.join("")}`;
}
