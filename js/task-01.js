//  Задание 1
// В HTML есть список категорий `ul#categories`.
// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в `ul#categories`, то есть
// элементов `li.item`. Получится `'В списке 3 категории.'`.

// Для каждого элемента `li.item` в списке `ul#categories`, найдет и выведет в
// консоль текст заголовка элемента (тега h2) и количество элементов в категории
// (всех вложенных в него элементов `li`).
// Например для первой категории получится:
// - Категория: Животные
// - Количество элементов: 4

// 1. Получить доступ ко всем li с классом item
const allcategoriesEl = document.querySelectorAll(".item");
// console.log(allcategoriesEl);
// 2. С помощью length вывести в консоль их колличество
console.log(`В списке ${allcategoriesEl.length} категории.`);


allcategoriesEl.forEach(element => {
    // 1. Получить доступ ко всем h2 и законсолить текстовый контент
    const textEl = element.querySelector('h2');
    console.log(`Категория: ${textEl.textContent}`);
// 2. Получить доступ ко всем li в каждом элементе и законсолить их колличество
    const quantityitemEl = element.querySelectorAll('li');
     console.log(`Количество элементов: ${quantityitemEl.length}`);
});
 