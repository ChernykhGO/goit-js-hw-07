// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит
// количество элементов в `input` и нажимает кнопку `Создать`, после чего
// рендерится коллекция. При нажатии на кнопку `Очистить`, коллекция элементов
// очищается.
// Создай функцию `createBoxes(amount)`, которая принимает 1 параметр `amount` -
// число. Функция создает столько `div`, сколько указано в `amount` и добавляет их
// в `div#boxes`.
// Каждый созданный div:
// - Имеет случайный rgb цвет фона
// - Размеры самого первого div - 30px на 30px
// - Каждый следующий div после первого, должен быть шире и выше предыдущего на
//   10px
// Создай функцию `destroyBoxes()`, которая очищает `div#boxes`.


function randColor() {
    let r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
};

//  1. Получаем доступ
  const containerDivEL = document.querySelector('#controls');
  const inputEL = document.querySelector('input[type="number"]');
  const buttonRender = document.querySelector('button[data-action="render"]');
  const deleteButton = document.querySelector('button[data-action="destroy"]');
  const boxesEL = document.getElementById("boxes");
  
// 2/ Добавляем функцию, которая создает div
function createBoxes(amount) {
    let divArray = [];
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.style.width = `${30 + (i * 10)}px`;
    newDiv.style.height = `${30 + (i * 10)}px`;
    newDiv.style.backgroundColor = randColor();
    divArray.push(newDiv);
  }
  return divArray;
};

// 3. Добавить в boxes дивы по клику на кнопку, за количество - значение инпута 
buttonRender.addEventListener("click", catchClick);
function catchClick() {
    boxesEL.append(...createBoxes(inputEL.value));
};

// 4. Удаляем содержимое по клику
deleteButton.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxesEL.innerHTML = "";
};