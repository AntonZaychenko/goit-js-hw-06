// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. 
// При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >,
// сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
// тем самым удаляя все созданные элементы.



const box = document.querySelector('#boxes');
const buttonCreate = document.querySelector('[data-create]');
const buttonDelete = document.querySelector('[data-destroy]');





buttonDelete.addEventListener('click', remove)

buttonCreate.addEventListener('click', create)
function create() {
  const inputEl = document.querySelector('input');
  let amount = inputEl.value
  createBoxes(amount)
}
function createBoxes(amount) {
 
  let size = 30
  for(let i = 0; i < amount; i += 1 , size += 10) {
    const total = document.createElement('div')
    total.style.width = `${size}px`
    total.style.height = `${size}px`
    total.style.background = getRandomHexColor()
    box.append(total)
   
  }
}

function remove() {
  box.textContent = ''
}




























function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}





























