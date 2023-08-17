// 16. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива.
// Вторая для проверки, что в массиве только числа. Третья для формирования
// массива из всех четных чисел, возведенных в квадрат. Если результат функции
// проверки – true, то вызывать новую функцию, возвращающую массив из всех
// четных чисел, возведенных в квадрат


function getInputArray(length) {
    let array = [];
    for (let i = 0; i < length; i++) {
        let input = parseFloat(prompt(`Введите элемент ${i + 1}:`));
        if (!isNaN(input)) {
            array.push(input);
        } else {
            console.log(`Введенное значение ${input} не является числом. Элемент будет пропущен.`);
        }
    }
    return array;
}

function squareEvenNumbers(array) {
    return array.filter(item => item % 2 === 0).map(item => item * item);
}

let n = parseInt(prompt("Введите количество элементов:"));
let userInput = getInputArray(n);

let evenSquaredNumbers = squareEvenNumbers(userInput);

if (evenSquaredNumbers.length > 0) {
    console.log("Массив четных чисел, возведенных в квадрат:", evenSquaredNumbers);
} else {
    console.log("Нет четных чисел в массиве.");
}
