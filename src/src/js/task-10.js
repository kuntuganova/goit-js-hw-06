function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector('#controls>input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');


const createBoxes = amount => {
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
    size += 10;
  }
};

const destroyBoxes = () => {
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  createBoxes(inputNumber.value);
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes.call();
});
