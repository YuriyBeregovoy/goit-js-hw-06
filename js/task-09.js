function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
}

const bodyBckgColorEl = document.querySelector("body");
const buttonChangeColorEl = document.querySelector(".change-color");
const nameBckgColorEl = document.querySelector(".color");

buttonChangeColorEl.addEventListener('click', function () {
  const randomColor = getRandomHexColor();
  nameBckgColorEl.textContent = randomColor;
  bodyBckgColorEl.style.backgroundColor = randomColor;
});

