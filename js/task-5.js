function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.querySelector('.change-color').addEventListener('click', (event) => {
  const outputColor = getRandomHexColor();
  document.querySelector('.color').textContent = outputColor;
  document.body.style.backgroundColor = outputColor;
});