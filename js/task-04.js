
let counterValue = 0;
  function incrementValue () {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

  function decrementValue () {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};


const incrementBtnEl = document.querySelector('button[data-action ="increment"]')
const decrementBtnEl = document.querySelector('button[data-action ="decrement"]')
const valueEl = document.querySelector("#value")

incrementBtnEl.addEventListener('click', incrementValue);
decrementBtnEl.addEventListener('click', decrementValue);
