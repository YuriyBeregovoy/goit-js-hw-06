function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
}

const bodyBckgColorEl = document.querySelector("body");
const buttonChangeColorEl = document.querySelector(".change-color");
const nameBckgColorEl = document.querySelector(".color");

buttonChangeColorEl.addEventListener('click', function () {
  nameBckgColorEl.textContent = getRandomHexColor();
  bodyBckgColorEl.style.backgroundColor = getRandomHexColor();
});

