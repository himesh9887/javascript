// const container = document.getElementById("container");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", updateColor);

// document.addEventListener('keydown',(e)=>{
//     if (e.key == 'Enter') {
//         updateColor()
//     }
// })

// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// function updateColor() {
//   container.innerHTML = "";
//   for (let index = 0; index < 10; index++) {
//     const color = getRandomColor();
//     const div = document.createElement("div");
//     div.style.backgroundColor = color;
//     div.className = "colorBox";
//     div.textContent = color;
//     container.appendChild(div);
//   }
// }

const container = document.getElementById("container");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  displayColor();
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    displayColor();
  }
});
function generateColor() {
  let color = "#";
  let letters = "0123456789ABCDEF";

  for (let index = 0; index < 6; index++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function displayColor() {
  container.innerHTML = "";
  for (let index = 0; index <= 9; index++) {
    let color = generateColor();
    const div = document.createElement("div");
    div.textContent = color;
    div.style.backgroundColor = color;
    div.className = "colorBox";
    container.appendChild(div);
  }
}
