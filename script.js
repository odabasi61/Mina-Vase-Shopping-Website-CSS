"use strict";

// assistant poup
const assist = document.querySelector(".assistant");
const pop = document.querySelector(".popup");

assist.addEventListener("click", function () {
  pop.classList.toggle("hidden");
});

// add to cart
let result = document.getElementById("result");

function increase() {
  result.value = Number(result.value) + 1;
  if (result.value >= 1) {
    addToCart.disabled = false;
  }
}

function decrease() {
  result.value = Number(result.value) - 1;
  if (result.value < 1) {
    addToCart.disabled = true;
  }
}

let cartSpan = document.querySelector(".cart-s");
const addToCart = document.querySelector(".add");
cartSpan.textContent = 0;

addToCart.addEventListener("click", function () {
  cartSpan.textContent = Number(result.value);
});
