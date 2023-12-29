function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  const arrElemBoxes = [`<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()};"></div>`];
  for(let i = 1; i < amount; i++) {
    width += 10;
    height += 10;
    arrElemBoxes.push(`<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()};"></div>`);
  }
  const markup = arrElemBoxes.join('\n\n');
  boxes.insertAdjacentHTML('afterbegin', markup);
};

function destroyBoxes() {
  boxes.innerHTML = '';
};

const boxes = document.querySelector('#boxes');
const input = document.querySelector('.js-input');

const createBtn = document.querySelector('[data-create]');
createBtn.addEventListener('click', (event) => { 
  destroyBoxes();
  if(input.value >= 1 && input.value <= 100) {
    createBoxes(input.value); 
    input.value = ''; 
  }
});

const destroyBtn = document.querySelector('[data-destroy]');
destroyBtn.addEventListener('click', (event) => {
  destroyBoxes();
});