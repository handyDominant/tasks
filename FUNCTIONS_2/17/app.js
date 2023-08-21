// 17. Написать функцию, принимающую в параметрах строку текста в маленьком
// регистре. Разбить строку на массив. Функция должна вернуть строку, где каждый
// элемент массива в чередование регистров toLowerCase, toUpperCase
// hschool -> HsChOoL

function alternateCase(inputString) {
    let charArray = inputString.split('');
    for (let i = 0; i < charArray.length; i++) {
        if (i % 2 === 0) {
            charArray[i] = charArray[i].toUpperCase();
        } else {
            charArray[i] = charArray[i].toLowerCase();
        }
    }
    return charArray.join('');
}

let inputText = 'hschool';
let result = alternateCase(inputText);
console.log(result); // Вывод: HsChOoL






