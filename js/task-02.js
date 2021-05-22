// Задание 2
// В HTML есть пустой список `ul#ingredients`.
// Напиши скрипт, который для каждого элемента массива `ingredients` создаст
// отдельный `li`, после чего вставит все `li` за одну операцию в список
//     `ul.ingredients`.Для создания DOM - узлов используй`document.createElement()`.

    const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

//  1. Получить доступ к ul с id="ingredients"
const allingredientsEl = document.querySelector("#ingredients");

// 2. Создать элементы
const createList = ingredients.map(item => {
    const itemEl = document.createElement('li');
    itemEl.textContent = item;
    // console.log(itemEl);
    return itemEl;
});

// 3. Добавить элементы
// console.log(createList);
allingredientsEl.append(...createList);
