// 18. Пользователь вводит с клавиатуры число. Найдите корень введенного числа (если
// же результат – число с плавающей точкой, то округлить то целых)

function findSquareRoot() {
    // Запрашиваем у пользователя ввод числа
    let input = prompt("Введите число:");
  
    // Проверка на ввод только чисел
    if (!isNumeric(input)) {
      alert("Пожалуйста, введите только число!");
      return;
    }
  
    // Преобразуем введенное значение в число
    let number = parseFloat(input);
  
    // Находим корень числа
    let squareRoot = Math.sqrt(number);
  
    // Округляем результат до целых
    let roundedResult = Math.round(squareRoot);
  
    // Выводим результат
    alert("Корень числа: " + roundedResult);
  }
  
  // Функция для проверки, является ли значение числом
  function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }