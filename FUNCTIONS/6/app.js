// 6. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 2 функции. Первая для формирования массива.
// Вторая для нахождения количества элементов массива



function formArray(inputUser) {
    let words = inputUser.split(' ');
    let array = [];

    for (let i = 0; i < words.length; i++) {
        array.push(words[i]);
    }

    return array;
}

function countArrayElements(array) {
    return array.length;
}

let inputUser = prompt('Введите, пожалуйста, значение!');
let formedArray = formArray(inputUser);
let elementsCount = countArrayElements(formedArray);

console.log(elementsCount);










