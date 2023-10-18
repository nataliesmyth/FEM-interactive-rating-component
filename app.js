const ratingCards = document.querySelectorAll(".rating li");
const submitBtn = document.getElementById("submitBtn");
const ratePoint = document.getElementById("rate");
const ratingSection = document.querySelector(".rating-section");
const thankSection = document.querySelector(".thanks-container");
let rate = null;

ratingCards.forEach((ratingPoint) => {
  ratingPoint.addEventListener("click", (e) => {
    const active = document.querySelector(".is-active");
    if (active) {
      active.classList.remove("is-active");
    }
    const card = e.target;
    console.log(card)
    card.classList.add("is-active");
    rate = e.target.innerText;
    console.log(rate);
  });
});

submitBtn.addEventListener("click", () => {
  if (rate) {
    ratePoint.innerText = rate;
    ratingSection.classList.add("hidden");
    thankSection.classList.remove("hidden");
  }
});