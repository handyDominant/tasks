// 4. Напишите функцию, которая принимает массив чисел и находит минимальное и
// максимальное числа соответственно. Добавить проверки на ввод и если значения
// массива не соответствуют условию задания, вывести сообщение об ошибке.

function findMinMax(items) {
    if (!Array.isArray(items)) {
        throw new Error('Введенное значение не массив.')
    }

    if (items.length === 0) {
        throw new Error('Массив пуст.')
    }

    let minValue = items[0];
    let maxValue = items[0];

    for (let i = 1; i < items.length; i++) {
        if (typeof items[i] !== 'number') {
            throw new Error('Массив содержит нечисловые значения.')
        }

        if (items[i] < minValue) {
            minValue = items[i];
        }

        if (items[i] > maxValue) {
            maxValue = items[i];
        }
    }

    return { min: minValue, max: maxValue };
}

const inputArray = [5, 2, 9, 1, 5, 6];


try {
    const result = findMinMax(inputArray);
    console.log('Min:', result.min);
    console.log('Max:', result.max);
} catch (error) {
    console.error('У вас имеется ошибка:', error.message);
} finally {
    console.log('Finally block executed.');
}











