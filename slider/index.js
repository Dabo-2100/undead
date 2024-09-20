let current = 0;
let aricles = document.querySelectorAll("article");

function nextSlide() {
  if (current < 3) {
    aricles[current].style.transform = "translate(-100%, 0)";
    aricles[current + 1].style.transform = "translate(0, 0)";
    current++;
  }
}

function prevSlide() {
  if (current >= 1) {
    aricles[current].style.transform = "translate(100%, 0)";
    aricles[current - 1].style.transform = "translate(0, 0)";
    current--;
  }
}
