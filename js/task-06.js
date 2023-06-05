const textInputEl = document.querySelector("#validation-input");
const dataLength = Number(textInputEl.dataset.length);

textInputEl.addEventListener("blur", (event) => {
 const inputValueLength = event.currentTarget.value.length;
 inputValueLength === dataLength ? textInputEl.classList.add("valid") : textInputEl.classList.add("invalid"); 
});