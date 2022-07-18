const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const List = document.querySelector("#ingredients");
const total = ingredients.forEach(ingredient => {
  let itemAdd = document.createElement('li')
  itemAdd.classList.add('item')
  itemAdd.innerHTML = ingredient
  List.append(itemAdd);
})  
console.log(List)