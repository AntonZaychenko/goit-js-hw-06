const input = document.querySelector('#font-size-control');

const text = document.querySelector('#text');

input.addEventListener('input', newSize)
function newSize (changeSize) {
    let a = changeSize.currentTarget.value
    text.style.fontSize = `${a}px`
}