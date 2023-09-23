// У вас есть кнопка. После каждого нажатия менять background.

const button = document.getElementById('changeBackgroundButton');
const content = document.getElementById('content');
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']; // Массив цветов

let currentColorIndex = 0;

button.addEventListener('click', () => {
  // Изменяем фоновый цвет на следующий цвет из массива
  content.style.backgroundColor = colors[currentColorIndex];
  
  // Увеличиваем индекс текущего цвета
  currentColorIndex = (currentColorIndex + 1);
});