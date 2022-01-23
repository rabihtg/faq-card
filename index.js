const questionBtns = document.querySelectorAll(".question");
const arrows = document.querySelectorAll(".arrow");
const asnwers = document.querySelectorAll(".answer");

questionBtns.forEach(function (btn, i) {
  btn.addEventListener("click", () => {
    showAnswer(i);
  });
});

function reset() {
  const shownAnswer = document.querySelector(".show-anser");
  const selectedArrow = document.querySelector(".rotate-arrow");
  const selectedBtn = document.querySelector(".question--active");
  if (shownAnswer) {
    selectedBtn.classList.remove("question--active");
    shownAnswer.classList.remove("show-anser");
    selectedArrow.classList.remove("rotate-arrow");
    return shownAnswer;
  }
}

function showAnswer(i) {
  const shownAnswer = reset();
  const answer = asnwers[i];
  if (answer !== shownAnswer) {
    questionBtns[i].classList.add("question--active");
    arrows[i].classList.add("rotate-arrow");
    answer.classList.add("show-anser");
  }
}
