let counterValue = 0;

const displayCounter = document.querySelector('#value');
const minusButton = document.querySelector('button[data-action="decrement"]');
const plusButton = document.querySelector('button[data-action="increment"]');

minusButton.addEventListener('click', () => {
    counterValue--;
    displayCounter.textContent = counterValue;
});

plusButton.addEventListener('click', () => {
    counterValue++;
    displayCounter.textContent = counterValue;
});