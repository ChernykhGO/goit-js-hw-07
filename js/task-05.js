// Задание 5
// Напиши скрипт который, при наборе текста в инпуте`input#name-input`(событие
// input), подставляет его текущее значение в `span#name-output`. Если инпут
// пустой, в спане должна отображаться строка `'незнакомец'`.


// 1. Получаем доступ к инпуту и спану
  const inputEL = document.querySelector('#name-input');
// console.log(inputEL);
  const nameEL = document.querySelector('#name-output');

// 2. Вешаем слушатель
inputEL.addEventListener('input', onInputChenge);

// 3.Меняем спан на значение инпута, если пусто, то не меняем
function onInputChenge(event) {
    // console.log(event.currentTarget.value);
    nameEL.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        nameEL.textContent = 'незнакомец'
    };
};