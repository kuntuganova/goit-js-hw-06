const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const listArray = [];

ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  item.className = 'item';
  item.textContent = ingredient;
  listArray.push(item);
})

list.append(...listArray);
