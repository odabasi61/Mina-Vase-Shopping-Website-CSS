"use strict";

// assistant poup
const assist = document.querySelector(".assistant");
const pop = document.querySelector(".popup");

assist.addEventListener("click", function () {
  pop.classList.toggle("hidden");
});

// add/remove functions
let result = document.getElementById("result");

function increase() {
  result.value++;
  if (result.value >= 1) {
    addToCart.disabled = false;
  }
}

function decrease() {
  result.value--;
  if (result.value < 0) {
    addToCart.disabled = true;
  }
}

// cart
let cartSpan = document.querySelector(".cart-s");
const addToCart = document.querySelector(".add");
const dec = document.getElementById("dec");
cartSpan.textContent = 0;

addToCart.addEventListener("click", function () {
  cartSpan.textContent = Number(result.value);
  result.value = 0;
});
