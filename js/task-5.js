function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const codeColorLink = document.querySelector('.color');

document.querySelector('.change-color').addEventListener('click', (event) => {
  const outputColor = getRandomHexColor();
  codeColorLink.textContent = outputColor;
  document.body.style.backgroundColor = outputColor;
});