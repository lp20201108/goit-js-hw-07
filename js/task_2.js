

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


// Напиши скрипт, который для каждого элемента массива
// ingredients создаст отдельный li, после чего вставит
// все li за одну операцию в список ul.ingredients.Для создания DOM -
//   узлов используй document.createElement().

const ingredientsListRef = document.querySelector('#ingredients');

const createIngredientsList = (ul, arr) => {
  arr.forEach(element => {
    let elem = document.createElement('li');
    ul.append(elem);
    elem.textContent = element;
  });
};

createIngredientsList(ingredientsListRef, ingredients);