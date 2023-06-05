const formEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");
formEl.addEventListener('input', (event) => {nameEl.textContent = event.currentTarget.value;});

