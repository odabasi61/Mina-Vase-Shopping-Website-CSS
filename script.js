"use strict";

const assist = document.querySelector(".assistant");
const pop = document.querySelector(".popup");

assist.addEventListener("click", function () {
  pop.classList.toggle("hidden");
});

function increase() {
  let result = document.getElementById("result");
  result.value = Number(result.value) + 1;
  if (result.value >= 0) {
    addToCart.classList.remove("allow");
  }
}

function decrease() {
  let result = document.getElementById("result");
  result.value = Number(result.value) - 1;
  if (result.value < 0) {
    addToCart.classList.add("allow");
  }
}

let cartSpan = document.querySelector(".cart-s");
const addToCart = document.querySelector(".add");
cartSpan.textContent = Number(0);

addToCart.addEventListener("click", function () {
  cartSpan.textContent = Number(result.value);
  document.getElementById("result").value = 0;
  if (result.value < 0) {
    document.getElementById("result").value = 0;
  }
});
