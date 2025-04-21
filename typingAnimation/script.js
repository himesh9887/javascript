const lines = [
  "Welcome to my portfolio!",
  "I build cool web projects.",
  "Enjoy smooth animations.",
  "Let's create something awesome!",
  "Happy coding!",
];

const typingElement = document.querySelector(".typing-text");
let lineIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  let currentLine = lines[lineIndex];

  if (!isDeleting) {
    typingElement.innerHTML = currentLine.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentLine.length) {
      setTimeout(() => (isDeleting = true), 1000);
    }
  } else {
    typingElement.innerHTML = currentLine.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      lineIndex = (lineIndex + 1) % lines.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", typeEffect);
