// 7. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения суммы всех элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// сумму всех элементов массива


function checkNumber(inputArray) {
    let allNumbers = inputArray.every(function (item) {
        return typeof item === "number";
    });

    return allNumbers;
}

let inputArray = [1, 2, 3, 4, 5];

if (checkNumber(inputArray)) {
    function countArray(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }

    let totalSum = countArray(inputArray);
    console.log(totalSum); // Выводится сумма элементов массива
} else {
    console.log("Массив не состоит только из чисел.");
}





