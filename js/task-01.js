const categoriesEl = document.querySelector("#categories");

const numberOfCategoriesEl = categoriesEl.children;

console.log("Number of categories:", numberOfCategoriesEl.length);
console.log('\n');

const numberOfCategoriesArray = [...numberOfCategoriesEl];

numberOfCategoriesArray.forEach(function ({ firstElementChild, lastElementChild }) {
  
  console.log(`Category: ${firstElementChild.textContent}`);

  const listCategoryItems = lastElementChild.children;
  const listCategoryArrey = [...listCategoryItems];

  console.log("Elements:", listCategoryArrey.length)
  console.log('\n');

});