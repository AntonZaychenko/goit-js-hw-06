const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
inputEl.addEventListener('input', newInput);
function newInput(changeList) {
    spanEl.textContent = changeList.currentTarget.value
    if(spanEl.textContent === "") {
        spanEl.textContent = 'Anonymous'
    }
}