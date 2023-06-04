const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItemElements = ingredients.map(ingredient => {
  const listItemEl = document.createElement("li");
  
  listItemEl.classList.add("item")
  listItemEl.textContent = ingredient;
  
    return listItemEl;
})

const listEl = document.querySelector("#ingredients");
  listEl.append(...listItemElements);