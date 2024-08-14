/* Created by Tivotal */

function prevSlide() {
  let cards = document.querySelectorAll(".card");

  document.querySelector(".slide").prepend(cards[cards.length - 1]);
}

function nextSlide() {
  let cards = document.querySelectorAll(".card");

  document.querySelector(".slide").appendChild(cards[0]);
}
