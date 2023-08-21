// 2. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Напишите функцию, которая принимает массив строк и
// находим там наибольшее по длине текстовое значение. Добавить проверки

try {

    function maxNumberInArray(array) {
        return Math.max(...array);
    }

    function maxStringInArray(array) {
        const lengths = array.map(function(item) {
            return item.length;
        });
        return Math.max(...lengths);
    }

    let itemsInputUser = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];

    console.log(maxStringInArray(itemsInputUser));

} catch (error) {
    // ReferenceError
    console.error('Произошла ошибка:', error);
} finally {
    // Этот код выполнится всегда, независимо от того, возникло исключение или нет
    console.log('Блок finally выполнен.');
}