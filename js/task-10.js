function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const divBoxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input");


let amount = 0;
function onChangeValue (event) {
  amount = Number(event.currentTarget.value);
  createBoxes(amount);
    }
inputEl.addEventListener("change", onChangeValue);
 
function createBoxes(amount) {
  const elements = [];
  let size = 30;
for (let i = 0; i < amount; i++) {
    const divEl = document.createElement("div");
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = size + "px";
    divEl.style.height = size + "px";
  elements.push(divEl)
  size += 10;
}
 divBoxesEl.append(...elements);
}
createBtnEl.addEventListener("click", createBoxes);

function destroyBoxes() {
  divBoxesEl.innerHTML = "";
  }
destroyBtnEl.addEventListener("click", destroyBoxes);
