const textInputEl = document.querySelector("#validation-input");
const dataLength = Number(textInputEl.dataset.length);

textInputEl.addEventListener("blur", (event) => {
  const inputValueLength = event.currentTarget.value.length;
  textInputEl.classList.toggle("valid", inputValueLength === dataLength);
  textInputEl.classList.toggle("invalid", inputValueLength !== dataLength);
});