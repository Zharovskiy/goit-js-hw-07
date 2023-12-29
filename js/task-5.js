function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function changeColor() {
  const outputColor = getRandomHexColor();
  codeSpan.textContent = outputColor;
  document.body.style.backgroundColor = outputColor;
};

const codeSpan = document.querySelector('.color');

const changeColorBtn = document.querySelector('.change-color');
changeColorBtn.addEventListener('click', changeColor);