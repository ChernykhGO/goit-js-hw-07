// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на `1`.
// - Создай переменную `counterValue` в которой будет хранится текущее значение
//   счетчика.
// - Создай функции `increment` и `decrement` для увеличения и уменьшения значения
//   счетчика
// - Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// 1.Получить доступ к элементам
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector('#value');

// 2. Функции для увеличения и уменьшения значения счетчика
const count = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

let counterValue = 0;

// 3. Добавить слушателя событий на кнопки и вызов функций
decrementBtn.addEventListener('click', function () {
    count.decrement();
    valueEl.textContent = count.value;
});

incrementBtn.addEventListener('click', function () {
    count.increment();
    valueEl.textContent = count.value;
});


