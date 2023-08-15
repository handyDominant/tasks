// 11. На входе пустой объект. С клавиатуры вводятся 2 числа. Необходимо добавить в
// объект ключ “avg” со значением среднего арифметического введенных с чисел



const dataObject = {};

const input1 = parseFloat(prompt("Введите первое число:"));
const input2 = parseFloat(prompt("Введите второе число:"));

// Проверяем, что введенные значения действительно являются числами
if (!isNaN(input1) && !isNaN(input2)) {
  const average = (input1 + input2) / 2;
  dataObject.avg = average;
  
  console.log("Объект после добавления ключа 'avg':", dataObject);
} else {
  console.log("Введены некорректные числа.");
}