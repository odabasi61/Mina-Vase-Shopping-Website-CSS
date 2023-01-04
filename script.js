"use strict";

const assist = document.querySelector(".assistant");
const pop = document.querySelector(".popup");

assist.addEventListener("click", function () {
  pop.classList.toggle("hidden");
});

function increase() {
  let result = document.getElementById("result");
  result.value = Number(result.value) + 1;
}

function decrease() {
  let result = document.getElementById("result");
  result.value = Number(result.value) - 1;
}

let cartSpan = document.querySelector(".cart-s");
const addToCart = document.querySelector(".add");
cartSpan.textContent = 0;
addToCart.addEventListener("click", function () {
  cartSpan.textContent += result.value;
});
