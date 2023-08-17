// 15. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива.
// Вторая для проверки, что в массиве только числа. Третья для получения
// произведения всех элементов массива. Если результат функции проверки – true,
// то вызывать новую функцию, возвращающую произведение всех элементов
// массива


function formArray(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        let input = prompt("введите элемент:"); // Предполагая, что вы используете среду браузера
        array.push(input);
    }
    return array;
}

function checkNumber(array) {
    return array.every(item => !isNaN(item)); // Проверяет, все ли элементы являются числами
}

function productOfArrayElements(array) {
    return array.reduce((a, b) => a * b, 1); // Калькулируем значение массива
}

let n = parseInt(prompt("Введите значение кол-во элементов:"));
let userInput = formArray(n);

if (checkNumber(userInput)) {
    let product = productOfArrayElements(userInput);
    console.log("Произведение элементов массива:", product);
} else {
    console.log("Не все элементы массива являются числами.");
}



