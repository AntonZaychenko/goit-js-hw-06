const input = document.querySelector('#validation-input');

input.addEventListener('blur', newBlur);
let inputLength = input.dataset.length;
console.log(inputLength)
function newBlur() {
if(input.value.length == inputLength) {
    
    input.classList.add('valid')
    input.classList.remove('invalid')
}
else if(input.value.length !== inputLength){
    input.classList.add('invalid')
    input.classList.remove('valid')
}

}

