let questionBtns = document.querySelectorAll(".question");
let arrows = document.querySelectorAll(".arrow");

questionBtns.forEach(function (btn, i) {
  btn.addEventListener("click", function () {
    let shownAnswer = document.querySelector(".show-anser");
    let selectedArrow = document.querySelector(".rotate-arrow");
    if (shownAnswer) {
      shownAnswer.classList.remove("show-anser");
      selectedArrow.classList.remove("rotate-arrow");
    }
    let answer = questionBtns[i].nextElementSibling;
    if (answer != shownAnswer) {
      arrows[i].classList.add("rotate-arrow");
      answer.classList.add("show-anser");
    }
  });
});
