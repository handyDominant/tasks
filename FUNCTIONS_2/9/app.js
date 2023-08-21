// 9. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения массива с удвоенными значенями каждого
// элемента. Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую массив с удвоенными элементами



let inputArray = [1, 2, 3, 4, 5];

function checkNumber(array) {
    return array.every(function(item) {
        return typeof item === 'number';
    });
}

if (checkNumber(inputArray)) {
    function doubleArray(array) {
        return array.map(function(item) {
            return item * 2;
        });
    }

    let doubledResult = doubleArray(inputArray);
    console.log(doubledResult);
} else {
    console.log("Массив не состоит только из чисел.");
}