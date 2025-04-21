let minutes = 0,
  seconds = 0,
  milliseconds = 0,
  interval;
let running = false;

const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const millisecondEl = document.getElementById("milliseconds");
const savedTimesList = document.getElementById("saved-times");

document.getElementById("start").addEventListener("click", () => {
  if (!running) {
    running = true;
    interval = setInterval(runTimer, 10);
  }
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(interval);
  running = false;
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(interval);
  running = false;
  minutes = seconds = milliseconds = 0;
  updateDisplay();
});

document.getElementById("save").addEventListener("click", () => {
  let timeString = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(
    milliseconds
  )}`;
  saveTime(timeString);
  displaySavedTimes();
});

function runTimer() {
  milliseconds++;
  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  updateDisplay();
}

function updateDisplay() {
  minuteEl.textContent = formatTime(minutes);
  secondEl.textContent = formatTime(seconds);
  millisecondEl.textContent = formatTime(milliseconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function saveTime(time) {
  let savedTimes = JSON.parse(localStorage.getItem("savedTimes")) || [];
  savedTimes.push(time);
  localStorage.setItem("savedTimes", JSON.stringify(savedTimes));
}

function displaySavedTimes() {
  savedTimesList.innerHTML = "";
  let savedTimes = JSON.parse(localStorage.getItem("savedTimes")) || [];
  savedTimes.forEach((time, index) => {
    let li = document.createElement("li");
    li.textContent = time;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => deleteTime(index));

    li.appendChild(deleteBtn);
    savedTimesList.appendChild(li);
  });
}

function deleteTime(index) {
  let savedTimes = JSON.parse(localStorage.getItem("savedTimes")) || [];
  savedTimes.splice(index, 1);
  localStorage.setItem("savedTimes", JSON.stringify(savedTimes));
  displaySavedTimes();
}

displaySavedTimes();
