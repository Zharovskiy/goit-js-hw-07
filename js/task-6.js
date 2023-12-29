function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function valueValidation() {
  const amount = Number(input.value);
  if(amount >= 1 && amount <= 100) {
    createBoxes(amount); 
    input.value = ''; 
  }
};

function createBoxes(amount) {
  destroyBoxes();
  let width = 30;
  let height = 30;
  const boxElements = [`<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()};"></div>`];
  for(let i = 1; i < amount; i++) {
    width += 10;
    height += 10;
    boxElements.push(`<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()};"></div>`);
  }
  const markup = boxElements.join('\n\n');
  boxes.insertAdjacentHTML('afterbegin', markup);
};

function destroyBoxes() {
  boxes.innerHTML = '';
};

const boxes = document.querySelector('#boxes');
const input = document.querySelector('.js-input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', valueValidation);
destroyBtn.addEventListener('click', destroyBoxes);