const bar = document.getElementById("bar");
let width = 0;

function increaseProgressBar() {
  setInterval(() => {
    width++;
    if (width > 100) {
      width = 0;
    }
    bar.style.width = width + "%";
    bar.textContent = width + "%";
  }, 20);
}

increaseProgressBar();
