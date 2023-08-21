// 14. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для поиска максимального значения в массиве. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// максимальное значение массива

function checkNumber(array) {
    return array.every(function(item) {
        return typeof item === 'number';
    });
}

function maxNumber(array) {
    return Math.max(...array);
}

let inputArray = [1, 2, 3, 4, 5];

if (checkNumber(inputArray)) {
    let maxValue = maxNumber(inputArray);
    console.log(maxValue);
} else {
    console.log("Массив не состоит только из чисел.");
}
