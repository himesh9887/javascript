const container = document.getElementById("container");
const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", changeColor);
document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key == "Enter") {
    changeColor()
  }
});

function changeColor() {
  const randomColor = Math.floor(Math.random() * 1000000);
  container.style.backgroundColor = `#${randomColor}`;
}
