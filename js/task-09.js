function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color')

const colorEl = document.querySelector('.color')

const body = document.querySelector('body')

console.log(buttonEl, colorEl)

buttonEl.addEventListener('click',changeColorBody )

function changeColorBody () {

  body.style.backgroundColor = `${getRandomHexColor()}`
  colorEl.textContent = getRandomHexColor()
}