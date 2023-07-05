// 6. Найти квадратный корень числа. Если же число без плавающей точки, то просто
// вывести его. В противном случае необходимо округлить число до целых. Добавить
// проверку на ввод только чисел


const input = prompt('Введите число:');
const number = parseFloat(input);

if (isNaN(number)) {
  console.log('Ошибка! Введите числовое значение.');
} else {
  if (Number.isInteger(number)) {
    console.log(number);
  } else {
    const squareRoot = Math.sqrt(number);
    const roundedNumber = Math.round(squareRoot);
    console.log(roundedNumber);
  }
}














