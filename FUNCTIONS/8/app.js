// 8. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только строки. Вторая для получения суммы всех строчных элементов массива.
// Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую конкатенацию всех строчных элементов массива


function checkString(inputArray) {
    return inputArray.every(function(item) {
        return typeof item === 'string';
    });
}

let inputArray = ['asd', 'asdas', 'asdasd'];

if (checkString(inputArray)) {
    function concatenateStrings(array) {
        let concatenated = '';
        for (let i = 0; i < array.length; i++) {
            concatenated += array[i];
        }
        return concatenated;
    }

    let concatenatedResult = concatenateStrings(inputArray);
    console.log(concatenatedResult);
} else {
    console.log("Массив не состоит только из строк.");
}