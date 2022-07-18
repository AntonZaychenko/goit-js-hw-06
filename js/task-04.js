let totalValue = 0;

const valueResult = document.querySelector('#value');
console.log(valueResult);

const minusBtn = document.querySelector('[data-action="decrement"]');
console.log(minusBtn);
minusBtn.addEventListener('click', () => {
totalValue -= 1
valueResult.textContent = totalValue
});

const plusBtn = document.querySelector('[data-action="increment"]');
plusBtn.addEventListener('click', () => {
totalValue += 1
valueResult.textContent = totalValue
});

console.log(plusBtn);