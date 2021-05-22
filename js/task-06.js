// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов.
// - Сколько символов должно быть в инпуте, указывается в его атрибуте
//   `data-length`.
// - Если введено подходящее количество, то `border` инпута становится зеленым,
//   если неправильное - красным.
// Для добавления стилей, используй CSS-классы `valid` и `invalid`.

// 1. Получаем доступ к инпуту
const inputEL = document.querySelector('#validation-input');

// 2.elem.getAttribute(name) - получает значение атрибута и возвращает его
const lengthEL = inputEL.getAttribute('data-length');
// console.log(lengthEL);

// 3. Вешаем слушателя на инпут при потере фокуса
inputEL.addEventListener('blur', InputCheck);

// 4.// elem.classList.add(cls) - добавляет класс cls в список классов элемента
// elem.classList.remove(cls) - удаляет класс cls из списка классов элемента
function InputCheck(element) {
    element = inputEL.value;
    if (element.length === Number(lengthEL)) {
        inputEL.classList.add('valid');
        inputEL.classList.remove('invalid');
    }
    else {
        inputEL.classList.remove('valid');
        inputEL.classList.add('invalid');
    }
};
