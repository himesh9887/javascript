const inc = document.getElementById("Inc");
const dec = document.getElementById("Dec");
const countDisplay = document.getElementById("countDisplay");
const Save = document.getElementById("Save");
const saveItms = document.getElementById("saveItms");
const reset = document.getElementById("reset");

let counter = 0;
let savedData = JSON.parse(localStorage.getItem("Laps")) || [];

inc.addEventListener("click", () => {
  counter++;
  countDisplay.textContent = counter;
});

dec.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    countDisplay.textContent = counter;
  }
});

reset.addEventListener("click", () => {
  counter = 0;
  countDisplay.textContent = counter;
});

Save.addEventListener("click", () => {
  savedData.push(counter);
  localStorage.setItem("Laps", JSON.stringify(savedData));
  displayData();
});

function displayData() {
  saveItms.innerHTML = "";
  savedData.forEach((element, index) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = "Delete";
    li.textContent = `Lap ${index + 1}: ${element} `;
    button.addEventListener("click", () => {
      savedData.splice(index, 1);
      localStorage.setItem("Laps", JSON.stringify(savedData));
      displayData();
    });
    li.appendChild(button);
    saveItms.appendChild(li);
  });
}

displayData();


