// Задание 7
// Напиши скрипт, который реагирует на изменение значения `input#font-size-control`
// (событие input) и изменяет инлайн-стиль `span#text` обновляя свойство
// `font-size`. В результате при перетаскивании ползунка будет меняться размер
// текста.

// 1.Получаю доступ к элементам
const inputEL = document.querySelector('#font-size-control');
const textSpanEL = document.querySelector('#text');

// 2.Cлушатель + размер текста = текущему значению 
inputEL.addEventListener('input', function (event) {
    textSpanEL.style.fontSize = event.currentTarget.value + "px";
    // console.log(textSpanEL.style.fontSize);
    // console.log(event.currentTarget.value + "px");
});
