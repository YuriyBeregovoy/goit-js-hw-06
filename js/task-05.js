const formEl = document.querySelector("#name-input");

const nameEl = document.querySelector("#name-output");

formEl.addEventListener('input', (event) => {
  if (event.currentTarget.value === '') {
    nameEl.textContent = 'Anonymous';
  } else {
    nameEl.textContent = event.currentTarget.value;
  }
});

